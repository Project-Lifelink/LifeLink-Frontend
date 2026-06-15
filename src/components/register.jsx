import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Users,
  Bell,
  Heart,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Navbar from './navbar.jsx'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans">
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-red-50/20">

            <div className="flex items-center gap-2 mb-8">
              <div className="bg-red-600 text-white p-1.5 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">LifeLink</span>
            </div>

            <div className="space-y-4 mb-2">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Join <span className="text-red-600">LifeLink</span> <br />
                Be a Lifesaver <Heart className="inline w-7 h-7 text-red-500 ml-1 stroke-[1.5]" />
              </h1>
              <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-sm">
                Create your account and connect with people in need. Your blood can bring hope and save lives.
              </p>
            </div>

            <div className="h-10 my-1 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-full h-0.5 bg-red-500 relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-red-500 w-4 h-4 rotate-45"></div>
                </div>
              </div>
            </div>

            <div className="bg-red-50/50 border border-red-100/50 rounded-2xl p-5 grid grid-cols-2 gap-4">

              <div className="flex items-start gap-5">
                <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Save Lives</h4>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Your donation can make a real difference.</p>
                </div>
              </div>


              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Trusted Community</h4>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Connect with verified donors and those in need.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Real-time Alerts</h4>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Get notified when someone needs help.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Make an Impact</h4>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Be a hero in someone's most critical moment.</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Form */}
          <div className="w-full md:w-1/2 p-8 lg:p-12 md:border-l border-gray-100 flex flex-col justify-center">

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
              <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
                Let's get started <span className="text-red-500">❤️</span>
              </p>
            </div>

            {/* Form right side me */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Select your date of birth"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                      onFocus={(e) => e.target.type = 'date'}
                      onBlur={(e) => { if (!e.target.value) e.target.type = 'text' }}
                    />
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div className="w-full sm:w-1/2 sm:pr-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Gender</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    defaultValue=""
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-gray-700"
                  >
                    <option value="" disabled hidden>Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Password */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Info Notice Card */}
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-3.5 flex items-start gap-3">
                <div className="bg-red-500 text-white p-1 rounded-lg shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-900 leading-tight">Your data is safe with us.</h5>
                  <p className="text-[11px] text-gray-500 leading-normal mt-0.5">We never share your information with anyone.</p>
                </div>
              </div>



              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-red-600/10 active:scale-[0.99] transform"
              >
                <span>Create Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Login Footer */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-xs text-gray-500">
                  Already have an account? <a href="/login" className="text-red-600 font-bold hover:underline ml-0.5">Login</a>
                </span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  );
}