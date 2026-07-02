import React from 'react'
import lifelinkimage from '../../assets/images/lifelink.png'
import { HashLink } from 'react-router-hash-link'
import { User, UsersRound, Clock, Verified, Heart, Droplet, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import About from './about.jsx'
import Howitworks from './howitworks.jsx'
import Features from './features.jsx'
import Donateblood from './donateblood.jsx'
import Requestblood from './requestblood.jsx'
import Navbar from '../../components/layout/navbar.jsx'
import Footer from '../../components/layout/footer.jsx'
import BloodRequests from '../../components/requests.jsx'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import Heartbeat from '../../components/motion/Heartbeat.jsx'
import Tilt from '../../components/motion/Tilt.jsx'
import Reveal from '../../components/motion/Reveal.jsx'
import FallingDrops from '../../components/motion/FallingDrops.jsx'



const ease = [0.22, 1, 0.36, 1]

const home = () => {
    return (
        <>
            <Navbar />

            <section id="home" className="relative overflow-hidden">
                <AmbientBackground variant="rich" />
                <FallingDrops
                    drops={[
                        { left: '4%', top: '14%', delay: '0s', distance: '460px', size: 13, opacity: 0.5 },
                        { left: '90%', top: '4%', delay: '2.5s', distance: '560px', size: 17, opacity: 0.42 },
                        { left: '60%', top: '8%', delay: '4s', distance: '420px', size: 11, opacity: 0.38 },
                    ]}
                />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-10 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Copy */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                    >
                       

                        <h1 className="mt-7 font-display text-6xl font-normal leading-[0.98] tracking-tight text-ink md:text-7xl xl:text-[5.5rem]">
                            Save lives,
                            <br />
                            be a{' '}
                            <span className="text-gradient-brand-animated italic">lifeline</span>
                        </h1>

                        {/* Heartbeat line — "life is moving" */}
                        <div className="mx-auto mt-5 h-9 w-72 text-primary lg:mx-0">
                            <Heartbeat className="h-full w-full" strokeWidth={3.5} glow opacityRange={[0.55, 1]} />
                        </div>

                        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
                            LifeLink connects blood donors with people in need in real time —
                            with or without hospital verification. Donate blood, save lives, and
                            bring hope to your community.
                        </p>

                        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                            <HashLink
                                smooth
                                to="/login"
                                className="press animate-pulse-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white sm:w-auto"
                            >
                                Donate Blood
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </HashLink>
                            <HashLink
                                smooth
                                to="/login"
                                className="press inline-flex w-full items-center justify-center rounded-full border border-line bg-surface px-7 py-4 font-semibold text-ink-soft shadow-soft hover:bg-subtle sm:w-auto"
                            >
                                Request Blood
                            </HashLink>
                        </div>

                        <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
                            <div className="flex -space-x-3">
                                {[0, 1, 2].map((i) => (
                                    <span
                                        key={i}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-canvas bg-primary-50 text-primary"
                                    >
                                        <UsersRound className="h-5 w-5" />
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm text-muted">
                                <span className="font-semibold text-ink">100+</span> people saving lives together
                            </p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease }}
                    >
                        <Tilt max={14} className="rounded-4xl">
                            <div className="relative overflow-hidden rounded-4xl border border-primary-100 bg-gradient-to-br from-primary-100 via-surface to-primary-50 p-4 shadow-lift">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-200/40 blur-2xl" />
                                <img
                                    src={lifelinkimage}
                                    alt="People donating blood and supporting one another"
                                    className="relative mx-auto w-full max-w-xl"
                                    style={{ transform: 'translateZ(40px)' }}
                                />
                            </div>
                        </Tilt>

                        {/* floating glass stat */}
                        <div className="animate-float glass absolute -bottom-5 left-6 hidden items-center gap-3 rounded-3xl border border-line/80 px-5 py-3 shadow-card sm:flex">
                            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                                <Heart className="h-5 w-5 animate-heartbeat" fill="currentColor" />
                            </span>
                            <div className="text-left">
                                <p className="text-sm font-semibold text-ink">Every drop counts</p>
                                <p className="text-xs text-muted">1 donation · up to 3 lives</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <About />
            <Features />
            <Howitworks />
            {/* <Donateblood /> */}
            {/* <Requestblood /> */}
            {/* <BloodRequests /> */}

            <Footer />
        </>
    )
}

export default home
