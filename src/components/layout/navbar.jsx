import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { motion, useReducedMotion } from 'framer-motion'
import { Droplet, Menu, X } from 'lucide-react'

const navLinks = [
    { to: '/#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '/#howitworks', label: 'How it Works' },
    { to: '/#features', label: 'Features' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const reduce = useReducedMotion()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-0 z-50"
        >
            <div
                className={`mx-auto max-w-7xl px-4 transition-all duration-300 md:px-6 ${
                    scrolled ? 'pt-2' : 'pt-4'
                }`}
            >
                <nav
                    className={`glass flex items-center justify-between rounded-3xl border px-5 transition-all duration-300 ${
                        scrolled
                            ? 'border-line py-2.5 shadow-card'
                            : 'border-line/80 py-3 shadow-soft'
                    }`}
                >
                    {/* Brand */}
                    <a href="/" className="group flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5">
                            <Droplet className="h-5 w-5 group-hover:animate-heartbeat" fill="currentColor" />
                        </span>
                        <span className="text-lg font-semibold tracking-tight text-ink">
                            Life<span className="text-primary">Link</span>
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <HashLink
                                key={link.label}
                                smooth
                                to={link.to}
                                className="link-underline rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                            >
                                {link.label}
                            </HashLink>
                        ))}
                    </div>

                    {/* Desktop actions */}
                    <div className="hidden items-center gap-2 md:flex">
                        <HashLink
                            smooth
                            to="/login"
                            className="press rounded-full px-5 py-2.5 text-sm font-semibold text-ink-soft hover:bg-subtle"
                        >
                            Login
                        </HashLink>
                        <HashLink
                            smooth
                            to="/register"
                            className="press rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white"
                        >
                            Register
                        </HashLink>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        className="press inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-line text-ink hover:bg-subtle md:hidden"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </nav>

                {/* Mobile menu */}
                {open && (
                    <motion.div
                        initial={reduce ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="glass mt-2 rounded-3xl border border-line/80 p-4 shadow-card md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={reduce ? false : { opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.04 * i, duration: 0.2 }}
                                >
                                    <HashLink
                                        smooth
                                        to={link.to}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-subtle hover:text-ink"
                                    >
                                        {link.label}
                                    </HashLink>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-3 flex flex-col gap-2">
                            <HashLink
                                smooth
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="press rounded-2xl border border-line px-5 py-2.5 text-center text-sm font-semibold text-ink-soft hover:bg-subtle"
                            >
                                Login
                            </HashLink>
                            <HashLink
                                smooth
                                to="/register"
                                onClick={() => setOpen(false)}
                                className="press rounded-2xl bg-ink px-5 py-2.5 text-center text-sm font-semibold text-white"
                            >
                                Register
                            </HashLink>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.header>
    )
}

export default Navbar
