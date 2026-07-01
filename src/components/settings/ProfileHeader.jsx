import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, BadgeCheck } from 'lucide-react'
import Reveal from '../motion/Reveal.jsx'

/**
 * ProfileHeader — premium summary card for the Settings pages.
 * Gradient banner, rounded avatar/logo with upload, name, role + verification
 * badges, key chips (blood group / registration status), member-since, and
 * quick stats.
 *
 * Props:
 *  - name, subtitle (email), initials (fallback), icon (lucide for placeholder)
 *  - verified (bool), badges [{label, icon, tone}], chips [{label, value}]
 *  - stats [{label, value}], memberSince
 *  - onAvatarSelect(file)  // optional; preview is handled locally
 */
export default function ProfileHeader({
  name,
  subtitle,
  initials,
  icon: Icon,
  verified = false,
  badges = [],
  chips = [],
  stats = [],
  memberSince,
  onAvatarSelect,
}) {
  const fileRef = useRef(null)
  const [preview, setPreview] = useState(null)

  const onPick = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    // Local preview only.
    setPreview(URL.createObjectURL(file))
    onAvatarSelect?.(file)
    // TODO(API): Upload the selected avatar/logo via the backend upload endpoint.
    // Expected: POST /api/v1/{users|hospitals}/{id}/avatar as multipart/form-data
    // (field "file"); response returns the stored image URL. Replace the local
    // object-URL preview above with the returned URL.
  }

  return (
    <Reveal className="overflow-hidden rounded-4xl border border-line bg-surface shadow-card">
      {/* Gradient banner */}
      <div className="relative h-32 bg-brand-gradient md:h-40">
        <div className="animate-blob pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
        <div className="animate-blob-rev pointer-events-none absolute -bottom-16 left-1/4 h-44 w-44 rounded-full bg-black/10 blur-2xl" />
      </div>

      <div className="px-6 pb-6 md:px-8 md:pb-8">
        <div className="-mt-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:-mt-16">
          <div className="flex items-end gap-4">
            {/* Avatar */}
            <div className="relative">
              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border-4 border-surface bg-primary-50 text-primary shadow-card md:h-32 md:w-32">
                {preview ? (
                  <img src={preview} alt={name} className="h-full w-full object-cover" />
                ) : Icon ? (
                  <Icon className="h-12 w-12" />
                ) : (
                  <span className="font-display text-4xl">{initials}</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                aria-label="Change photo"
                className="press absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-soft shadow-card hover:text-primary"
              >
                <Camera className="h-4 w-4" />
              </button>
              <input ref={fileRef} type="file" accept="image/*" onChange={onPick} className="hidden" aria-hidden="true" />
            </div>

            {/* Name + badges */}
            <div className="pb-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-3xl text-ink md:text-4xl">{name}</h1>
                {verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-info-soft px-2.5 py-1 text-xs font-semibold text-info">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                )}
              </div>
              {subtitle && <p className="mt-1 text-muted">{subtitle}</p>}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {badges.map((b) => {
                  const BIcon = b.icon
                  return (
                    <span
                      key={b.label}
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${b.tone || 'bg-primary-50 text-primary'}`}
                    >
                      {BIcon && <BIcon className="h-3.5 w-3.5" />}
                      {b.label}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>

          {memberSince && (
            <p className="text-sm text-muted sm:pb-2">
              Member since <span className="font-medium text-ink-soft">{memberSince}</span>
            </p>
          )}
        </div>

        {/* Chips + stats */}
        {(chips.length > 0 || stats.length > 0) && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chips.map((c) => (
              <div key={c.label} className="rounded-2xl border border-line bg-canvas p-4">
                <p className="text-xs uppercase tracking-wide text-faint">{c.label}</p>
                <p className="mt-1 text-lg font-bold text-ink">{c.value}</p>
              </div>
            ))}
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="rounded-2xl border border-line bg-canvas p-4"
              >
                <p className="text-xs uppercase tracking-wide text-faint">{s.label}</p>
                <p className="mt-1 font-display text-2xl text-ink">{s.value}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  )
}
