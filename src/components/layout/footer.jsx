import React from "react";
import { Heart, Droplet, MapPin, Mail, ArrowRight } from "lucide-react";
import { HashLink } from 'react-router-hash-link'
import Reveal from '../motion/Reveal.jsx'
import Heartbeat from '../motion/Heartbeat.jsx'

const quickLinks = [
  { to: "/", label: "Home", hash: false },
  { to: "#about", label: "About Us", hash: true },
  { to: "#features", label: "Features", hash: true },
  { to: "#howitworks", label: "How It Works", hash: true },
  { to: "#contact", label: "Contact", hash: true },
];

const services = [
  "Find Blood Donors",
  "Request Blood",
  "Emergency Alerts",
  "Donation Tracking",
  "Community Support",
];

const builtBy = ["Mohammad Rizvi", "Anurag Singh", "Akash Kumar", "Aabgeen Abhsar"];

const Footer = () => {
  return (
    <footer className="bg-canvas" id="contact">
      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-5 pt-20 md:px-8">
        <Reveal className="relative overflow-hidden rounded-4xl bg-brand-gradient p-10 text-white shadow-glow md:p-16">
          <div className="animate-blob pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="animate-blob-rev pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-4xl font-normal leading-tight md:text-5xl">
                Save lives, one donation at a time
              </h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">
                Join thousands of donors helping people find blood when they need
                it most.
              </p>
            </div>

            <HashLink
              smooth
              to="/requests"
              className="press group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-800"
            >
              Become a Donor
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </HashLink>
          </div>
        </Reveal>
      </div>

      {/* Heartbeat separator — full screen width */}
      <div className="mt-14 h-10 w-full text-primary md:h-14">
        <Heartbeat className="h-full w-full" strokeWidth={3} glow opacityRange={[0.4, 1]} duration={4} />
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <Reveal className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="group mb-5 flex items-center gap-2.5">
              <span className="animate-float flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <Droplet className="h-5 w-5" fill="currentColor" />
              </span>
              <h2 className="text-xl font-semibold text-ink">
                Life<span className="text-primary">Link</span>
              </h2>
            </div>

            <p className="max-w-sm leading-relaxed text-muted">
              Connecting blood donors with recipients instantly. Building a
              trusted community dedicated to saving lives through technology and
              compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-faint">Quick Links</h3>
            <ul className="space-y-3 text-muted">
              {quickLinks.map((link) =>
                link.hash ? (
                  <li key={link.label}>
                    <HashLink smooth to={link.to} className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-primary">
                      {link.label}
                    </HashLink>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.to} className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-faint">Services</h3>
            <ul className="space-y-3 text-muted">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-faint">Contact</h3>
            <div className="space-y-4 text-muted">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>support@lifelink.com</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-faint">Pages</h3>
            <div className="flex flex-col space-y-3 text-muted">
              <a href="/profile" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-primary">Profile</a>
              <a href="/hospital" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-primary">Hospital</a>
              <a href="/admin" className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-primary">Admin</a>
            </div>
          </div>
        </Reveal>

        {/* Built by */}
        <div className="mt-14 border-t border-line pt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-faint">Built by</h3>
          <div className="flex flex-wrap gap-3">
            {builtBy.map((name) => (
              <span
                key={name}
                className="press rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-ink-soft hover:border-primary-100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-8">
          <p className="text-sm text-muted">© 2026 LifeLink. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-sm text-muted">
            Made with <Heart className="h-4 w-4 animate-heartbeat text-primary" fill="currentColor" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
