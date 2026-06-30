import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Heartbeat — an ECG/heartbeat line that draws itself across the full width
 * on a gentle loop. Communicates "life is moving". Transform/opacity + SVG
 * pathLength only. Under reduced-motion it renders a static line.
 *
 * Props:
 *  - className: sizing/positioning (width via className, height via h-*)
 *  - color: stroke color (default 'currentColor', inherits text color)
 *  - strokeWidth: line thickness (default 2.5)
 *  - opacityRange: [min, max] for the draw pulse (default [0.2, 0.9])
 *  - glow: add a soft drop-shadow so the line reads brighter
 *  - duration: seconds for one draw cycle (default 3.2)
 */
export default function Heartbeat({
  className = '',
  color = 'currentColor',
  strokeWidth = 2.5,
  opacityRange = [0.2, 0.9],
  glow = false,
  duration = 3.2,
}) {
  const reduce = useReducedMotion()

  // Three evenly spread beats across a 0–300 viewBox so the line looks like a
  // real ECG even when stretched edge-to-edge (preserveAspectRatio="none").
  const beat = (x) =>
    `H${x} l6 -13 l5 24 l5 -19 l4 8`
  const d = `M0 20 ${beat(40)} ${beat(140)} ${beat(240)} H300`

  const [min, max] = opacityRange

  return (
    <svg
      viewBox="0 0 300 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={glow ? { filter: 'drop-shadow(0 0 6px rgba(229,57,53,0.55))' } : undefined}
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={reduce ? { pathLength: 1, opacity: max } : { pathLength: 0, opacity: min }}
        animate={
          reduce
            ? { pathLength: 1, opacity: max }
            : { pathLength: [0, 1, 1], opacity: [min, max, min] }
        }
        transition={
          reduce
            ? undefined
            : { duration, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }
        }
      />
    </svg>
  )
}
