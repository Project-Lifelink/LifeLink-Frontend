import React from "react";
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../../components/motion/Reveal.jsx'


const steps = [
  { id: "01", title: "Sign Up", desc: "Create your account as a donor or a requester.", icon: "user" },
  { id: "02", title: "Search / Request", desc: "Search for blood donors nearby or send a blood request.", icon: "location" },
  { id: "03", title: "Connect", desc: "We connect you with verified donors or requesters.", icon: "users" },
  { id: "04", title: "Donate / Help", desc: "Donate blood and help save precious lives.", icon: "drop" },
  { id: "05", title: "Stay Connected", desc: "Get updates, express gratitude and stay connected.", icon: "heart" },
];

const features = [
  { title: "Verified & Safe", desc: "All donors are verified to ensure your safety.", icon: "shield" },
  { title: "Quick & Easy", desc: "Find or provide help in just a few clicks.", icon: "bolt" },
  { title: "Secure & Private", desc: "Your data is protected with top security.", icon: "lock" },
  { title: "Make an Impact", desc: "Every drop you give can save a life.", icon: "heart" },
];

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "user":
      return (
        <svg {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );

    case "location":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "drop":
      return (
        <svg {...common}>
          <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z" />
        </svg>
      );

    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );

    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );

    default:
      return null;
  }
}

export default function HowItWorks() {
  const reduce = useReducedMotion();

  return (
    <section id="howitworks" className="w-full bg-surface px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How it works
          </span>
          <h2 className="mt-4 font-display text-5xl font-normal leading-tight tracking-tight text-ink md:text-6xl">
            Saving lives is{" "}
            <span className="text-gradient-brand italic">simple</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            LifeLink makes it easy to connect donors with those in need.
            Just a few simple steps can make a big difference.
          </p>
        </Reveal>

        {/* Steps — donation journey */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* flowing progress line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 overflow-hidden rounded-full bg-line lg:block">
            <motion.div
              className="h-full bg-brand-gradient"
              initial={reduce ? { width: "100%" } : { width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={reduce ? undefined : { duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {steps.map((step, idx) => (
            <Reveal key={step.id} delay={idx * 0.12} className="relative">
              <div className="group hover-lift flex h-full flex-col rounded-3xl border border-line bg-canvas p-6 hover:border-primary-100 hover:shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon name={step.icon} />
                  </div>
                  <span className="font-display text-3xl text-line-strong transition-colors duration-300 group-hover:text-primary-200">
                    {step.id}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Features */}
        <Reveal className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-4xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group flex items-start gap-4 bg-surface p-7 transition-colors duration-300 hover:bg-canvas">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110">
                <Icon name={f.icon} />
              </div>
              <div>
                <h4 className="font-semibold text-ink">{f.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
