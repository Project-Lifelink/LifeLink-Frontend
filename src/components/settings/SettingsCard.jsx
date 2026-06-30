import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Pencil, Check, X, Loader2 } from 'lucide-react'
import SettingsField from './SettingsField.jsx'
import { useToast } from './Toast.jsx'
import Reveal from '../motion/Reveal.jsx'
import BloodDropLoader from '../motion/BloodDropLoader.jsx'

/**
 * SettingsCard — one editable section. Shows fields read-only with an Edit
 * button; Edit reveals inputs with Save / Cancel. Validates on save, keeps
 * entered data on failure, shows a success check + toast, and disables inputs
 * while saving. Generic over the field list so both User and Hospital settings
 * reuse it. Honours prefers-reduced-motion.
 *
 * Props:
 *  - id, title, description, icon
 *  - fields: [{ name, label, type, options, icon, immutable, helper,
 *      placeholder, required, validate(value, draft)->error|undefined, className }]
 *  - values: object (saved values for this section)
 *  - onSave: async (draft) => void   // mock; the page updates its own state
 *  - viewSummary: node shown in view mode instead of the field grid (optional)
 *  - clearDraftOnSave: reset draft to '' after a successful save (password)
 *  - editable: if false, hides the Edit button (read-only section)
 */
export default function SettingsCard({
  id,
  title,
  description,
  icon: Icon,
  fields = [],
  values = {},
  onSave,
  viewSummary,
  clearDraftOnSave = false,
  editable = true,
}) {
  const toast = useToast()
  const reduce = useReducedMotion()
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [justSaved, setJustSaved] = useState(false)
  const [draft, setDraft] = useState(values)
  const [errors, setErrors] = useState({})

  const startEdit = () => {
    setDraft(clearDraftOnSave ? Object.fromEntries(fields.map((f) => [f.name, ''])) : { ...values })
    setErrors({})
    setEditing(true)
  }

  const cancel = () => {
    setEditing(false)
    setErrors({})
  }

  const setField = (name, value) => {
    setDraft((d) => ({ ...d, [name]: value }))
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e))
  }

  const validate = () => {
    const next = {}
    for (const f of fields) {
      if (f.immutable) continue
      const v = draft[f.name]
      if (f.required && (v === undefined || v === null || String(v).trim() === '')) {
        next[f.name] = `${f.label} is required`
        continue
      }
      if (f.validate) {
        const msg = f.validate(v, draft)
        if (msg) next[f.name] = msg
      }
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const save = async (e) => {
    e?.preventDefault()
    if (!validate()) {
      toast.error('Please fix the highlighted fields', 'Some information needs your attention.')
      return
    }
    try {
      setSaving(true)
      // onSave is a mock mutation in the page; see TODO(API) markers there.
      await onSave?.(draft)
      setEditing(false)
      setJustSaved(true)
      setTimeout(() => setJustSaved(false), 2200)
      toast.success(`${title} updated`, 'Your changes have been saved.')
    } catch (err) {
      // Keep entered data so the user doesn't lose their edits.
      toast.error('Could not save changes', err?.message || 'Please try again in a moment.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Reveal
      as="section"
      id={id}
      className="scroll-mt-24 rounded-4xl border border-line bg-surface p-6 shadow-soft md:p-8"
      aria-labelledby={`${id}-title`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {Icon && (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <Icon className="h-5 w-5" />
            </span>
          )}
          <div>
            <h3 id={`${id}-title`} className="text-lg font-semibold text-ink">
              {title}
            </h3>
            {description && <p className="mt-0.5 text-sm text-muted">{description}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <AnimatePresence>
            {justSaved && (
              <motion.span
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="inline-flex items-center gap-1 rounded-full bg-success-soft px-2.5 py-1 text-xs font-medium text-success"
              >
                <Check className="h-3.5 w-3.5" /> Saved
              </motion.span>
            )}
          </AnimatePresence>

          {editable && !editing && (
            <button
              type="button"
              onClick={startEdit}
              className="press inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink-soft hover:bg-subtle"
            >
              <Pencil className="h-3.5 w-3.5" /> Edit
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          {editing ? (
            <motion.form
              key="edit"
              onSubmit={save}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <fieldset disabled={saving} className="grid gap-5 sm:grid-cols-2">
                {fields.map((f) => (
                  <SettingsField
                    key={f.name}
                    {...f}
                    value={draft[f.name] ?? ''}
                    editing
                    error={errors[f.name]}
                    onChange={setField}
                    className={f.className}
                  />
                ))}
              </fieldset>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={cancel}
                  disabled={saving}
                  className="press inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink-soft hover:bg-subtle disabled:opacity-60"
                >
                  <X className="h-4 w-4" /> Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="press inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-white shadow-glow disabled:opacity-70"
                >
                  {saving ? (
                    <>
                      <BloodDropLoader size={8} className="text-white" /> Saving…
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4" /> Save changes
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="view"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {viewSummary ?? (
                <dl className="grid gap-5 sm:grid-cols-2">
                  {fields.map((f) => (
                    <SettingsField key={f.name} {...f} value={values[f.name] ?? ''} editing={false} className={f.className} />
                  ))}
                </dl>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
