import React, { createContext, useCallback, useContext, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

/**
 * Lightweight, accessible toast system for the Settings module.
 * Replaces browser alerts. Wrap a page in <ToastProvider> and call
 * `const toast = useToast()` then `toast.success(...)` / `toast.error(...)`.
 * Respects prefers-reduced-motion. aria-live region for screen readers.
 */
const ToastContext = createContext(null)

export const useToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>')
  return ctx
}

const toneMap = {
  success: { Icon: CheckCircle2, klass: 'text-success', ring: 'border-success/20' },
  error: { Icon: AlertCircle, klass: 'text-danger', ring: 'border-danger/20' },
  info: { Icon: Info, klass: 'text-info', ring: 'border-info/20' },
}

let nextId = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const reduce = useReducedMotion()

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  const push = useCallback(
    (type, title, message, duration = 3500) => {
      const id = ++nextId
      setToasts((t) => [...t, { id, type, title, message }])
      if (duration) setTimeout(() => dismiss(id), duration)
      return id
    },
    [dismiss]
  )

  const api = {
    success: (title, message) => push('success', title, message),
    error: (title, message) => push('error', title, message, 5000),
    info: (title, message) => push('info', title, message),
    dismiss,
  }

  return (
    <ToastContext.Provider value={api}>
      {children}

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-2 p-4 sm:items-end sm:p-6"
        role="region"
        aria-live="polite"
        aria-label="Notifications"
      >
        <AnimatePresence initial={false}>
          {toasts.map(({ id, type, title, message }) => {
            const { Icon, klass, ring } = toneMap[type] || toneMap.info
            return (
              <motion.div
                key={id}
                layout={!reduce}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                className={`glass pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border ${ring} p-4 shadow-card`}
                role="status"
              >
                <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${klass}`} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  {message && <p className="mt-0.5 text-sm text-muted">{message}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(id)}
                  aria-label="Dismiss notification"
                  className="press -m-1 rounded-lg p-1 text-faint hover:text-ink-soft"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
