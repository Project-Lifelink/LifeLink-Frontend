import React from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * FallingDrops — subtle blood drops that fall on a slow ~5s gravity loop.
 * Decorative, pointer-events-none, sits in a relatively-positioned parent.
 * Hidden entirely under prefers-reduced-motion.
 *
 * Props:
 *  - drops: array of { left, top, delay, distance, size, opacity }
 *  - className: positioning for the absolute layer (default full cover)
 */
const DEFAULT_DROPS = [
  { left: '8%', top: '6%', delay: '0s', distance: '300px', size: 12, opacity: 0.5 },
  { left: '92%', top: '10%', delay: '2.5s', distance: '340px', size: 16, opacity: 0.45 },
  { left: '46%', top: '0%', delay: '4s', distance: '260px', size: 10, opacity: 0.4 },
]

export default function FallingDrops({ drops = DEFAULT_DROPS, className = '' }) {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {drops.map((d, i) => (
        <span
          key={i}
          className="animate-fall absolute text-primary"
          style={{
            left: d.left,
            top: d.top,
            opacity: d.opacity ?? 0.5,
            animationDelay: d.delay,
            ['--fall-distance']: d.distance,
          }}
        >
          <svg width={d.size} height={d.size * 1.3} viewBox="0 0 24 30" fill="currentColor">
            <path d="M12 1 C12 1 22 13 22 20 a10 10 0 0 1 -20 0 C2 13 12 1 12 1 Z" />
          </svg>
        </span>
      ))}
    </div>
  )
}
