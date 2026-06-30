import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * WaveDivider — a soft liquid-inspired separator. Two layered wave paths
 * drift slowly sideways to suggest flow (blood / life moving). Self-contained
 * block (no negative margins) so it never disturbs surrounding layout.
 *
 * Props:
 *  - className: positioning + the text color used as the wave fill
 *               (e.g. "text-surface" to flow into a white section)
 *  - flip: mirror vertically
 */
export default function WaveDivider({ className = 'text-surface', flip = false }) {
  const reduce = useReducedMotion()

  const drift = (from, to, dur) =>
    reduce
      ? {}
      : {
          animate: { x: [from, to, from] },
          transition: { duration: dur, ease: 'easeInOut', repeat: Infinity },
        }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative h-16 w-full overflow-hidden md:h-24 ${className} ${flip ? 'rotate-180' : ''}`}
    >
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-[140%] opacity-40"
        fill="currentColor"
        {...drift('-8%', '0%', 18)}
      >
        <path d="M0 60 C 240 110 480 10 720 50 C 960 90 1200 30 1440 60 L1440 120 L0 120 Z" />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-[140%]"
        fill="currentColor"
        {...drift('0%', '-8%', 22)}
      >
        <path d="M0 80 C 320 40 560 110 820 80 C 1080 50 1240 100 1440 75 L1440 120 L0 120 Z" />
      </motion.svg>
    </div>
  )
}
