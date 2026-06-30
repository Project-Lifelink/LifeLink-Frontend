import React from 'react'
import BloodDropLoader from '../motion/BloodDropLoader.jsx'

const Loader = () => {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 bg-canvas">
      <BloodDropLoader size={14} />
      <p className="text-sm font-medium text-muted">Loading…</p>
    </div>
  )
}

export default Loader
