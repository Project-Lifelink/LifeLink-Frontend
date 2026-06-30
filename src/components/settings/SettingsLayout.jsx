import React from 'react'
import { ToastProvider } from './Toast.jsx'
import AmbientBackground from '../motion/AmbientBackground.jsx'
import Reveal from '../motion/Reveal.jsx'

/**
 * SettingsLayout — shared chrome for User & Hospital settings: toast provider,
 * ambient background, page heading, a sticky section nav rail (desktop) /
 * scrollable chips (mobile), and the content column. Section anchors use the
 * card ids (cards set `scroll-mt` for offset).
 *
 * Props: title, subtitle, sections [{id, label, icon}], children
 */
export default function SettingsLayout({ title, subtitle, sections = [], children }) {
  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-canvas">
        <AmbientBackground />

        <div className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
          {/* Heading */}
          <Reveal className="mb-8">
            <h1 className="font-display text-4xl text-ink md:text-5xl">{title}</h1>
            {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
          </Reveal>

          {/* Mobile section chips */}
          {sections.length > 0 && (
            <nav aria-label="Settings sections" className="scrollbar-none -mx-1 mb-6 flex gap-2 overflow-x-auto px-1 lg:hidden">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-subtle hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          )}

          <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
            {/* Desktop side nav */}
            {sections.length > 0 && (
              <nav aria-label="Settings sections" className="hidden lg:block">
                <div className="sticky top-8 space-y-1">
                  {sections.map((s) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="group flex items-center gap-3 rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-subtle hover:text-ink"
                      >
                        {Icon && <Icon className="h-4 w-4 text-faint transition-colors group-hover:text-primary" />}
                        {s.label}
                      </a>
                    )
                  })}
                </div>
              </nav>
            )}

            {/* Content */}
            <div className="min-w-0 space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}
