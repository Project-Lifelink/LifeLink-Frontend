import React from 'react'

/**
 * Toggle — accessible switch (role=switch, keyboard + aria-checked).
 * Transform-only knob animation. Honours reduced-motion via CSS transitions
 * that the global media query neutralizes.
 */
export default function Toggle({ checked, onChange, id, label, disabled = false }) {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-50 disabled:opacity-50 ${
        checked ? 'bg-primary' : 'bg-line-strong'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-soft transition-transform duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}
