import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveal — scroll-triggered fade + translate entrance with a soft spring.
 * Purely presentational wrapper: it does not alter children, layout flow,
 * or behaviour. Honours prefers-reduced-motion (renders a plain element).
 *
 * Props:
 *  - as: element/component to render (default 'div')
 *  - direction: 'up' | 'down' | 'left' | 'right' | 'none' (default 'up')
 *  - delay: seconds before this item animates (default 0)
 *  - distance: px offset to travel (default 24)
 *  - amount: viewport intersection ratio to trigger (default 0.2)
 *  - once: animate only the first time it enters (default true)
 */
const offsets = {
  up: (d) => ({ y: d }),
  down: (d) => ({ y: -d }),
  left: (d) => ({ x: d }),
  right: (d) => ({ x: -d }),
  none: () => ({}),
}

export default function Reveal({
  as = 'div',
  direction = 'up',
  delay = 0,
  distance = 24,
  amount = 0.2,
  once = true,
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const hidden = { opacity: 0, ...offsets[direction](distance) }

  return (
    <MotionTag
      className={className}
      initial={hidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.9,
        delay,
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
