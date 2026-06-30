import React from 'react'
import { ShieldCheck } from 'lucide-react'
import Reveal from '../../../components/motion/Reveal.jsx'
import AmbientBackground from '../../../components/motion/AmbientBackground.jsx'

const donorverification = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-canvas p-6">
      <AmbientBackground />

      <Reveal className="relative flex max-w-md flex-col items-center text-center">
        <span className="animate-float flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50 text-primary shadow-soft">
          <ShieldCheck size={36} />
        </span>

        <h1 className="mt-8 font-display text-4xl text-ink">Donor Verification</h1>

        <p className="mt-3 leading-relaxed text-muted">
          This space is coming soon. There are no pending verifications right now —
          check back later to review and approve donor requests.
        </p>
      </Reveal>
    </div>
  )
}

export default donorverification
