import React from 'react'

/**
 * AmbientBackground — extremely subtle, slow-moving brand-tinted blobs that
 * keep a section feeling alive without distracting. Pure CSS transform/opacity
 * loops (20–60s), pointer-events-none, sits behind content (-z-10).
 * Disabled automatically under prefers-reduced-motion (see index.css).
 *
 * Props:
 *  - variant: 'soft' (default) | 'rich'  — opacity/scale of blobs
 *  - className: extra positioning classes
 */
export default function AmbientBackground({ variant = 'soft', className = '' }) {
  const opacity = variant === 'rich' ? 'opacity-80' : 'opacity-50'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div
        className={`animate-blob absolute -top-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-brand-gradient-soft blur-3xl ${opacity}`}
      />
      <div
        className={`animate-blob-rev absolute top-1/3 -left-24 h-[24rem] w-[24rem] rounded-full bg-brand-gradient-soft blur-3xl ${opacity}`}
        style={{ animationDelay: '-6s' }}
      />
      <div
        className={`animate-blob-slow absolute -bottom-32 right-1/4 h-[22rem] w-[22rem] rounded-full bg-brand-gradient-soft blur-3xl ${opacity}`}
        style={{ animationDelay: '-12s' }}
      />
    </div>
  )
}
