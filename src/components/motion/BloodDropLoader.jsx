import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * BloodDropLoader — three blood-drop shapes that fill/pulse in sequence.
 * An elegant, on-theme replacement for generic spinners in loading states.
 * Scale/opacity only. Reduced-motion shows the drops static and filled.
 *
 * Props:
 *  - size: px size of each drop (default 12)
 *  - className: wrapper classes
 */
export default function BloodDropLoader({ size = 12, className = '' }) {
  const reduce = useReducedMotion()

  const Drop = ({ delay }) => (
    <motion.svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 24 30"
      aria-hidden="true"
      initial={false}
      animate={
        reduce
          ? { opacity: 1, scale: 1 }
          : { opacity: [0.35, 1, 0.35], scale: [0.85, 1, 0.85], y: [0, -2, 0] }
      }
      transition={
        reduce ? undefined : { duration: 1.1, ease: 'easeInOut', repeat: Infinity, delay }
      }
    >
      <path
        d="M12 1 C12 1 22 13 22 20 a10 10 0 0 1 -20 0 C2 13 12 1 12 1 Z"
        fill="currentColor"
      />
    </motion.svg>
  )

  return (
    <span className={`inline-flex items-end gap-1 text-primary ${className}`} role="status" aria-label="Loading">
      <Drop delay={0} />
      <Drop delay={0.18} />
      <Drop delay={0.36} />
    </span>
  )
}
