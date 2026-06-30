import React from 'react';
import {
  User,
  Mail,
  Phone,
  HeartHandshake,
  Droplet,
  FileText,
  ArrowRight,
  ChevronDown,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'

export default function requestblood() {



  return (
    <div className="relative min-h-screen overflow-hidden" id='requestblood'>
      <AmbientBackground />

      <div className="flex items-center justify-center px-4 py-10 md:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl border border-line bg-surface shadow-card lg:grid-cols-2">

          {/* LEFT SIDE: Information & Instructions */}
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
                Submit a
                <br />
                <span className="text-gradient-brand italic">Blood Request</span>
              </h1>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                Provide the patient's details below to alert our verified donor network. We will connect you with matches as quickly as possible.
              </p>
            </motion.div>

            {/* Guidelines / Help Card */}
            <motion.div className="relative space-y-4 rounded-3xl border border-line bg-surface/70 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">Accurate Information</h4>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">Please ensure contact details are reachable to avoid delays in coordination.</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Blood Request Form */}
          <motion.div className="flex flex-col justify-center p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>

            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gradient text-white shadow-glow">
                <Droplet size={28} className="fill-current" />
              </div>
              <h2 className="mt-6 font-display text-3xl font-normal text-ink">Patient &amp; Requirement Details</h2>
              <p className="mt-2 text-muted">
                Fill out the form to request blood
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Patient Name */}


                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Patient Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="text"
                      placeholder="Enter patient's name"
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>

                {/* Guardian Name */}

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Guardian / Attendant Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="text"
                      placeholder="Enter guardian's name"
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>
                {/* Contact Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Contact Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="email"
                      placeholder="Enter contact email address"
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="tel"
                      placeholder="Enter active phone number"
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Blood Group Dropdown */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Required Blood Group</label>
                  <div className="relative">
                    <Droplet className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <select
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    >
                      <option value="" disabled hidden>Select blood group</option>
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

                {/* Quantity */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Quantity (Units / Bags)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>

                {/*Age*/}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Age (Years)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 19"
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>
                {/*Sex*/}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Required Blood Group</label>
                  <div className="relative">
                    <Droplet className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <select
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    >
                      <option value="" disabled hidden>Select blood group</option>
                      <option value="A+">Male</option>
                      <option value="A-">Female</option>
                      <option value="B+">Other</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  </div>
                </div>
              </div>


              <div className="flex items-start gap-3 rounded-3xl border border-line bg-primary-50/40 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <Heart className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold leading-tight text-ink">Patient data verification</h5>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">By submitting, you authorize LifeLink to share these medical metrics with willing regional donors.</p>
                </div>
              </div>

              <button
                type="submit"
                className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow"
              >
                <span>Make Blood Request</span>
                <ArrowRight className="h-4 w-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
