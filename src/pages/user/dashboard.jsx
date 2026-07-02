import {
  User,
  MapPin,
  ShieldCheck,
  Heart,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Reveal from '../../components/motion/Reveal.jsx'
import CountUp from '../../components/motion/CountUp.jsx'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import { div } from "framer-motion/client";

export default function DashboardContent() {

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);



  console.log(user);
  useEffect(() => {
    // if (!user) navigate('/login')
  }, [])

  const username = user?.name || "nouser";
  const bloodgroup = user?.bloodgroup || "_";
  const lastdonation = user?.lastdonation || "not found"
  const totaldonation = user?.totaldonation || 0

  const stats = [
    { icon: Heart, tone: "text-primary bg-primary-50", value: totaldonation, label: "Total Donations" },
    { icon: Users, tone: "text-info bg-info-soft", value: 0, label: "Total Requests" },
    { icon: ShieldCheck, tone: "text-success bg-success-soft", value: "100%", label: "Profile Strength" },
  ];

  return (
    <div id="dashboard" className="relative min-h-screen bg-canvas">
      <AmbientBackground />

      {/* Top bar */}
      <motion.div
        className="glass sticky top-0 z-20 flex items-center justify-between border-b border-line px-6 py-4 md:px-8"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="text-sm text-muted">Welcome back</p>
          <h1 className="font-display text-2xl text-ink">{username}</h1>
        </div>
      </motion.div>

      <div className="relative p-6 md:p-8">
        {/* Profile Section */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Profile Card */}
          <Reveal className="rounded-4xl border border-line bg-surface p-8 shadow-card lg:col-span-3">
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-brand-gradient-soft text-primary">
                  <User className="h-12 w-12" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-3xl text-ink">{username}</h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" /> Verified Donor
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-muted">
                    <MapPin size={16} /> Your Location
                  </div>

                  <p className="mt-4 max-w-xl leading-relaxed text-muted">
                    Proud to be a blood donor and help save lives. Together, we can
                    make a difference.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Blood Group", value: bloodgroup },
                      { label: "Last Donation", value: lastdonation },
                      { label: "Total Donations", value: totaldonation },
                    ].map((b) => (
                      <div key={b.label} className="rounded-2xl border border-line bg-canvas p-4">
                        <p className="text-sm text-muted">{b.label}</p>
                        <h4 className="mt-1 text-xl font-bold text-ink">{b.value}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Donate Card */}
          <Reveal
            delay={0.1}
            className="relative flex flex-col justify-between overflow-hidden rounded-4xl bg-brand-gradient p-8 text-white shadow-glow"
          >
            <div className="animate-blob pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <Heart className="h-9 w-9 animate-heartbeat" fill="currentColor" />
              <h2 className="mt-4 font-display text-3xl">Be a Lifesaver</h2>
              <p className="mt-3 text-white/85">
                Your single donation can save up to 3 lives.
              </p>
            </div>

            <a
              href="/requests"
              className="press group relative mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-primary-800"
            >
              Donate Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, tone, value, label }, i) => (


            <Reveal
              key={label}
              delay={i * 0.08}
              className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
            >
              {(value === 0) ? "" :
                <div>

                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 block font-display text-4xl text-ink">{value}</p>
                  <p className="mt-1 text-sm text-muted">{label}</p>
                </div>
              }
            </Reveal>
          ))}

          <Reveal
            delay={0.24}
            className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-warning-soft text-warning">
              <Award className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-ink">Top Donor</h2>
            <p className="mt-1 text-sm text-muted">Keep helping and inspiring!</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
