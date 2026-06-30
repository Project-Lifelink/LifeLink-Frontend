import React, { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion, animate } from 'framer-motion'

/**
 * CountUp — animates the numeric part of a label upward when scrolled into
 * view, exactly once. Preserves any prefix/suffix ("500+", "100%", "24/7");
 * values with no leading number ("Countless") render unchanged.
 * Respects reduced-motion.
 *
 * Props:
 *  - value: string|number to display (e.g. "10+", "500+", "100%")
 *  - duration: seconds (default 1.6)
 */
export default function CountUp({ value, duration = 1.6, className, ...rest }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  const raw = String(value)
  const match = raw.match(/^(\D*?)(\d[\d,]*)(.*)$/s)
  const hasNumber = !!match
  const prefix = match ? match[1] : ''
  const target = match ? parseInt(match[2].replace(/,/g, ''), 10) : 0
  const suffix = match ? match[3] : ''

  const [display, setDisplay] = useState(!hasNumber || reduce ? target : 0)

  useEffect(() => {
    // Stable deps only (hasNumber/target are primitives) so the tween runs
    // a single time on enter and is never restarted by re-renders.
    if (!hasNumber || reduce || !inView) return
    if (target === 0) {
      setDisplay(0)
      return
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(target),
    })
    return () => controls.stop()
  }, [inView, hasNumber, reduce, target, duration])

  if (!hasNumber) {
    return (
      <span ref={ref} className={className} {...rest}>
        {raw}
      </span>
    )
  }

  return (
    <span ref={ref} className={className} {...rest}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
