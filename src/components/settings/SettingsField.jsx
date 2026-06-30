import React, { useId } from 'react'
import { Lock, ChevronDown } from 'lucide-react'

/**
 * SettingsField — renders one field in either VIEW mode (label + value) or
 * EDIT mode (floating-label input / select / textarea). Handles immutable
 * (disabled + lock), inline validation errors, helper text, icons, and a11y.
 *
 * Props: name, label, value, type ('text'|'email'|'tel'|'number'|'select'|
 *   'textarea'|'password'), options [{value,label}], icon (lucide comp),
 *   immutable, helper, placeholder, error, editing, onChange(name, value),
 *   className (grid span), display (optional formatter for view mode).
 */
export default function SettingsField({
  name,
  label,
  value,
  type = 'text',
  options = [],
  icon: Icon,
  immutable = false,
  helper,
  placeholder = ' ',
  error,
  editing,
  onChange,
  className = '',
  display,
}) {
  const id = useId()
  const describedBy = []
  if (helper) describedBy.push(`${id}-helper`)
  if (error) describedBy.push(`${id}-error`)
  const aria = {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy.join(' ') || undefined,
  }

  /* ---------- VIEW MODE ---------- */
  if (!editing) {
    const shown =
      display?.(value) ??
      (value === '' || value == null
        ? '—'
        : type === 'select'
        ? options.find((o) => o.value === value)?.label || value
        : value)
    return (
      <div className={className}>
        <dt className="flex items-center gap-1.5 text-sm text-muted">
          {Icon && <Icon className="h-3.5 w-3.5 text-faint" />}
          {label}
          {immutable && <Lock className="h-3 w-3 text-faint" aria-label="Read only" />}
        </dt>
        <dd className="mt-1 truncate text-[15px] font-medium text-ink">{shown}</dd>
      </div>
    )
  }

  /* ---------- EDIT MODE ---------- */
  const base =
    'w-full rounded-2xl border bg-canvas text-ink transition-all placeholder:text-faint focus:bg-surface focus:outline-none focus:ring-4'
  const ring = error
    ? 'border-danger focus:border-danger focus:ring-danger/10'
    : 'border-line focus:border-primary focus:ring-primary-50'
  const disabledCls = immutable ? 'cursor-not-allowed opacity-60' : ''
  const padL = Icon ? 'pl-11' : 'pl-4'

  const Errors = () => (
    <>
      {helper && !error && (
        <p id={`${id}-helper`} className="mt-1.5 text-xs text-muted">
          {helper}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </>
  )

  // Select / textarea use a top label; inputs use a floating label.
  if (type === 'select') {
    return (
      <div className={className}>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-soft">
          {label}
        </label>
        <div className="relative">
          {Icon && <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />}
          <select
            id={id}
            name={name}
            value={value}
            disabled={immutable}
            onChange={(e) => onChange(name, e.target.value)}
            className={`${base} ${ring} ${disabledCls} ${padL} appearance-none py-3 pr-10`}
            {...aria}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
        </div>
        <Errors />
      </div>
    )
  }

  if (type === 'textarea') {
    return (
      <div className={className}>
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-soft">
          {label}
        </label>
        <textarea
          id={id}
          name={name}
          rows={3}
          value={value}
          disabled={immutable}
          placeholder={placeholder === ' ' ? '' : placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={`${base} ${ring} ${disabledCls} resize-none px-4 py-3`}
          {...aria}
        />
        <Errors />
      </div>
    )
  }

  // Floating-label input
  return (
    <div className={className}>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint peer-focus:text-primary" />
        )}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          disabled={immutable}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          className={`peer ${base} ${ring} ${disabledCls} ${padL} pb-2 pt-6`}
          {...aria}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute ${
            Icon ? 'left-11' : 'left-4'
          } top-2 text-xs font-medium text-muted transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:text-primary`}
        >
          {label}
          {immutable && <Lock className="ml-1 inline h-3 w-3 align-text-top text-faint" />}
        </label>
      </div>
      <Errors />
    </div>
  )
}
