import React from 'react';
import {
  User,
  Mail,
  Phone,
  Heart,
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

export default function DonorRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans" id='donateblood'>
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">

        {/* LEFT SIDE: Branding & Impact */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-red-50/20">

          {/* Logo */}
          <motion.div className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="bg-red-600 text-white p-1.5 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">LifeLink</span>
          </motion.div>

          {/* Typography */}
          <motion.div className="space-y-4 mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Register as a <br />
              <span className="text-red-600">Blood Donor</span>
            </h1>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-sm">
              Your pledge to donate can save up to three lives. Fill out your health profile to join our active lifesaver directory.
            </p>
          </motion.div>

          {/* Layout placeholder element for structural symmetry */}
          <motion.div className="h-5  flex items-center justify-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-0.5 bg-red-500 relative">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-red-500 animate-pulse">
                  <Activity className="w-10 h-10 stroke-[2]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Donor Standards Grid Card */}
          <motion.div className="bg-red-50/50 border border-red-100/50 rounded-2xl p-5 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="flex items-start gap-3">
              <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Privacy Controlled</h4>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Your precise address and metrics are safely managed and only visible when matching a live request.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Track Your Impact</h4>
                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Get notified instantly when your specific blood group is requested in your local community.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE: Donor Registration Form */}
        <motion.div className="w-full md:w-1/2 p-8 lg:p-12 md:border-l border-gray-100 flex flex-col justify-center"
        initial = {{opacity: 0, y: 20}}
        whileInView = {{opacity: 1 , y: 0}}
        transition = {{duration: 0.5}}>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Donor Profile Creation</h2>
            <p className="text-sm text-gray-500 mt-1">
              Please answer the following parameters accurately
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

            {/* Section 1: Personal Information */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">Personal Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Blood Group */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Blood Group</label>
                  <div className="relative">
                    <Droplet className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      defaultValue=""
                      className="w-full pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-gray-700"
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
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Age</label>
                  <div className="relative">
                    <Activity className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      min="18"
                      max="65"
                      placeholder="e.g. 25"
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Sex */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Sex</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      defaultValue=""
                      className="w-full pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-gray-700"
                    >
                      <option value="" disabled hidden>Select sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Location Parameters */}
            <div className="space-y-3 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">Location Details</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* City & Pincode Layout splitting */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Enter city name"
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Pincode</label>
                  <input
                    type="text"
                    placeholder="e.g. 110001"
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Full Address */}
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Full Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    rows="2"
                    placeholder="Enter your complete residential or office address"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Section 3: Health Background & Remarks */}
            <div className="space-y-3 pt-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">Health Details</h3>

              {/* Last Donation Detail */}
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Last Donation Timeline</label>
                <div className="relative">
                  <Activity className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    defaultValue=""
                    className="w-full pl-10 pr-10 py-2 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-gray-700"
                  >
                    <option value="" disabled hidden>When did you last donate blood?</option>
                    <option value="never">Never donated before / First timer</option>
                    <option value="less-3">Within the last 3 months</option>
                    <option value="3-6">3 to 6 months ago</option>
                    <option value="more-6">More than 6 months ago</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Remark Additional Info */}
              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Remarks / Additional Info (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
                  <textarea
                    rows="2"
                    placeholder="Any medical conditions, allergies, or travel history we should note?"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-red-600/10 active:scale-[0.99] transform mt-4"
            >
              <span>Register as Donor</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
}