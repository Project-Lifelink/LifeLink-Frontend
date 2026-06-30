import React from "react";
import {
  Users,
  Eye,
  ShieldCheck,
  Heart,
  User,
  Droplets,
  MapPin,
  Plus,
  Activity,
} from "lucide-react";

import aboutlifelink from '../../assets/images/aboutlifelink.png'
import { motion } from 'framer-motion'
import Reveal from '../../components/motion/Reveal.jsx'
import CountUp from '../../components/motion/CountUp.jsx'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'

const pillars = [
  { icon: Users, title: "Our Mission", desc: "To save more lives by making blood donation easy and accessible." },
  { icon: Eye, title: "Our Vision", desc: "A world where no one dies due to the unavailability of blood." },
  { icon: ShieldCheck, title: "Our Promise", desc: "We ensure verified donors, safe connections and quick help." },
];

const stats = [
  { icon: Heart, value: "0+", title: "Lives Saved", desc: "Thanks to our amazing donors and volunteers." },
  { icon: User, value: "10+", title: "Registered Donors", desc: "Generous people ready to save lives." },
  { icon: Droplets, value: "0+", title: "Blood Requests", desc: "Successfully matched and fulfilled." },
  { icon: MapPin, value: "500+", title: "Cities Covered", desc: "Spreading hope across the nation." },
];

const floatIcons = [
  { Icon: Plus, pos: "top-6 left-0", delay: "0s" },
  { Icon: Activity, pos: "top-6 right-0", delay: "-2s" },
  { Icon: Users, pos: "bottom-6 left-3", delay: "-4s" },
  { Icon: ShieldCheck, pos: "bottom-6 right-3", delay: "-6s" },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-surface px-5 py-24 md:px-8 md:py-32">
      <AmbientBackground />
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About LifeLink
          </span>
          <h2 className="mt-4 font-display text-5xl font-normal leading-tight tracking-tight text-ink md:text-6xl">
            Bridging the gap between{" "}
            <span className="text-gradient-brand italic">heroes and hope</span>
          </h2>
        </Reveal>

        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <Reveal direction="right">
            <p className="text-lg leading-8 text-muted">
              LifeLink is a platform that connects voluntary blood donors with
              people in urgent need of blood. We believe that a small act of
              kindness can create a big difference.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              Our mission is to make blood donation simple, accessible, and
              transparent for everyone.
            </p>

            {/* Mission Vision Promise */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, desc }, i) => (
                <Reveal
                  key={title}
                  delay={i * 0.1}
                  className="group hover-lift rounded-3xl border border-line bg-canvas p-6 hover:border-primary-100 hover:shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-ink">{title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Right Image Section */}
          <Reveal direction="left" className="flex justify-center">
            <div className="relative aspect-square w-full max-w-[440px]">
              <div className="animate-blob-slow absolute inset-0 rounded-full bg-brand-gradient-soft" />
              <div className="absolute inset-6 rounded-full border border-line bg-surface/40" />

              <img
                src={aboutlifelink}
                alt="LifeLink community"
                className="relative z-10 h-full w-full object-contain"
              />

              {floatIcons.map(({ Icon, pos, delay }, i) => (
                <div
                  key={i}
                  style={{ animationDelay: delay }}
                  className={`animate-float glass absolute ${pos} z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-line/80 text-primary shadow-card`}
                >
                  <Icon size={26} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Stats Section */}
        <Reveal className="mt-24 grid grid-cols-2 gap-8 rounded-4xl border border-line bg-canvas p-8 md:p-12 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, title, desc }, i) => (
            <Reveal as="div" key={title} delay={i * 0.1}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-primary shadow-soft">
                <Icon size={22} />
              </div>
              <CountUp value={value} className="mt-5 block font-display text-4xl text-ink" />
              <p className="mt-1 font-semibold text-ink">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
