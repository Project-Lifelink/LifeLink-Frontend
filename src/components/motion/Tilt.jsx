import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Tilt — gentle cursor parallax. The wrapped element rotates a few degrees
 * toward the pointer with a soft spring, then settles back on leave.
 * Subtle by design (default max 6deg). Disabled under reduced-motion and on
 * touch / coarse pointers. Transform-only (GPU).
 */
export default function Tilt({ children, className = '', max = 6, glare = false }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const spring = { stiffness: 150, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring)

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const onMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onLeave = () => {
    px.set(0)
    py.set(0)
  }

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        {children}
        {glare && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background:
                'radial-gradient(600px circle at var(--gx,50%) var(--gy,50%), rgba(255,255,255,0.18), transparent 40%)',
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
