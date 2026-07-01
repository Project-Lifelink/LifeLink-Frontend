import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Toggle from './Toggle.jsx'
import { useToast } from './Toast.jsx'
import Reveal from '../motion/Reveal.jsx'
import BloodDropLoader from '../motion/BloodDropLoader.jsx'

/**
 * PreferencesCard — toggle-based section (notifications, privacy, ...).
 * Toggles edit a local draft; Save/Reset appear only when the draft differs
 * from the saved values. Mock save with success toast.
 *
 * Props: id, title, description, icon, items [{name,label,desc}], values, onSave
 */
export default function PreferencesCard({ id, title, description, icon: Icon, items = [], values = {}, onSave }) {
  const toast = useToast()
  const reduce = useReducedMotion()
  const [draft, setDraft] = useState(values)
  const [saving, setSaving] = useState(false)

  const dirty = useMemo(
    () => items.some((it) => Boolean(draft[it.name]) !== Boolean(values[it.name])),
    [draft, values, items]
  )

  const reset = () => setDraft(values)

  const save = async () => {
    try {
      setSaving(true)
      // onSave is a mock mutation in the page; see TODO(API) markers there.
      await onSave?.(draft)
      toast.success('Preferences updated', 'Your preferences have been saved.')
    } catch (err) {
      toast.error('Could not save preferences', err?.message || 'Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Reveal as="section" id={id} className="scroll-mt-24 rounded-4xl border border-line bg-surface p-6 shadow-soft md:p-8" aria-labelledby={`${id}-title`}>
      <div className="flex items-start gap-3">
        {Icon && (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <div>
          <h3 id={`${id}-title`} className="text-lg font-semibold text-ink">{title}</h3>
          {description && <p className="mt-0.5 text-sm text-muted">{description}</p>}
        </div>
      </div>

      <div className="mt-6 divide-y divide-line">
        {items.map((it) => (
          <div key={it.name} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
            <div>
              <p className="font-medium text-ink">{it.label}</p>
              {it.desc && <p className="mt-0.5 text-sm text-muted">{it.desc}</p>}
            </div>
            <Toggle
              id={`${id}-${it.name}`}
              label={it.label}
              checked={Boolean(draft[it.name])}
              onChange={(v) => setDraft((d) => ({ ...d, [it.name]: v }))}
              disabled={saving}
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {dirty && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={reset}
                disabled={saving}
                className="press inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink-soft hover:bg-subtle disabled:opacity-60"
              >
                <X className="h-4 w-4" /> Reset
              </button>
              <button
                type="button"
                onClick={save}
                disabled={saving}
                className="press inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-glow disabled:opacity-70"
              >
                {saving ? (
                  <>
                    <BloodDropLoader size={8} className="text-white" /> Saving…
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" /> Save preferences
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}
