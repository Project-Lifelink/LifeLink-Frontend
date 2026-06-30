import React from 'react';
import {
  User,
  Mail,
  Phone,
  HeartHandshake,
  Droplet,
  MapPin,
  Activity,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'

export default function DonorRegistrationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden" id='donateblood'>
      <AmbientBackground />

      <div className="flex items-center justify-center px-4 py-10 md:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl border border-line bg-surface shadow-card lg:grid-cols-2">

          {/* LEFT SIDE: Branding & Impact */}
          <div className="relative hidden flex-col justify-between gap-8 overflow-hidden bg-subtle p-12 lg:flex">
            <div className="pointer-events-none absolute inset-0 bg-brand-gradient-soft" />

            {/* Logo */}
            <motion.div className="relative flex items-center gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold text-ink">
                Life<span className="text-primary">Link</span>
              </span>
            </motion.div>

            {/* Typography */}
            <motion.div className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <h1 className="font-display text-5xl font-normal leading-tight text-ink">
                Register as a
                <br />
                <span className="text-gradient-brand italic">Blood Donor</span>
              </h1>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                Your pledge to donate can save up to three lives. Fill out your health profile to join our active lifesaver directory.
              </p>
            </motion.div>

            {/* Donor Standards Grid Card */}
            <motion.div className="relative space-y-4 rounded-3xl border border-line bg-surface/70 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">Privacy Controlled</h4>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">Your precise address and metrics are safely managed and only visible when matching a live request.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">Track Your Impact</h4>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">Get notified instantly when your specific blood group is requested in your local community.</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Donor Registration Form */}
          <motion.div className="flex flex-col justify-center p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>

            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gradient text-white shadow-glow">
                <Droplet size={28} className="fill-current" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-normal text-ink">Donor Profile Creation</h2>
              <p className="mt-2 text-muted">
                Please answer the following parameters accurately
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              {/* Section 1: Personal Information */}
              <div className="space-y-4">
                <h3 className="border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Personal Details</h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      />
                    </div>
                  </div>

                  {/* Blood Group */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Blood Group</label>
                    <div className="relative">
                      <Droplet className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <select
                        defaultValue=""
                        className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      >
                        <option value="" disabled hidden>Select group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    </div>
                  </div>

                  {/* Age */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Age</label>
                    <div className="relative">
                      <Activity className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <input
                        type="number"
                        min="18"
                        max="65"
                        placeholder="e.g. 25"
                        className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      />
                    </div>
                  </div>

                  {/* Sex */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Sex</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <select
                        defaultValue=""
                        className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      >
                        <option value="" disabled hidden>Select sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Location Parameters */}
              <div className="space-y-4">
                <h3 className="border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Location Details</h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/* City & Pincode Layout splitting */}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">City</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                      <input
                        type="text"
                        placeholder="Enter city name"
                        className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink-soft">Pincode</label>
                    <input
                      type="text"
                      placeholder="e.g. 110001"
                      className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Full Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-faint" />
                    <textarea
                      rows="2"
                      placeholder="Enter your complete residential or office address"
                      className="w-full resize-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Section 3: Health Background & Remarks */}
              <div className="space-y-4">
                <h3 className="border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Health Details</h3>

                {/* Last Donation Detail */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Last Donation Timeline</label>
                  <div className="relative">
                    <Activity className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <select
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    >
                      <option value="" disabled hidden>When did you last donate blood?</option>
                      <option value="never">Never donated before / First timer</option>
                      <option value="less-3">Within the last 3 months</option>
                      <option value="3-6">3 to 6 months ago</option>
                      <option value="more-6">More than 6 months ago</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  </div>
                </div>

                {/* Remark Additional Info */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Remarks / Additional Info (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 h-4 w-4 text-faint" />
                    <textarea
                      rows="2"
                      placeholder="Any medical conditions, allergies, or travel history we should note?"
                      className="w-full resize-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow"
              >
                <span>Register as Donor</span>
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
