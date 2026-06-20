import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Heart,
  ShieldCheck,
  Users,
  Quote,
  HeartHandshake,
} from "lucide-react";
import Navbar from '../../components/layout/navbar.jsx'
import { useState } from 'react'

export default function HospitalLogin() {
  const [showPassword, setShowPassword] = useState(false)
  function handleSubmit(e) {
    console.log("login from submitted")
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 shadow-2xl border-gray-200">
        <div>

        </div>
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-sm overflow-hidden grid lg:grid-cols-2">

          {/* Left Side */}
          <div className="p-10 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-white to-red-50">

            <div>
              <h1 className="text-2xl font-bold">
                Life<span className="text-red-600">Link</span>
              </h1>
            </div>

            {/* Content */}
            <div className="mt-2 ">
              <h2 className="md:text-4xl font-extrabold leading-tight">
                Welcome <span className="text-red-600">Back!</span>
                <br />
                Glad to See You Again
              </h2>

              <p className="text-gray-600 text-lg mt-2 font-semibold max-w-lg">
                Login to your account and continue your journey
                of saving lives and spreading hope.
              </p>

              {/* Features */}
              <div className="space-y-8 mt-12">

                <div className="flex items-start gap-5">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Save Lives
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Every login brings you closer to making a real difference.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Users className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Trusted Community
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Connect with verified donors and recipients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-red-100 p-4 rounded-full">
                    <ShieldCheck className="text-red-600" size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Secure & Safe
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Your privacy and data protection remain our priority.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex justify-center items-center py-10">
              <div className="relative">

                <div className="absolute inset-0 bg-red-200 blur-3xl opacity-40 rounded-full scale-150"></div>

                <div className="relative w-30 h-30 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl">
                  <HeartHandshake
                    size={60}
                    className="text-white"
                  />
                </div>

                <div className="absolute -top-4 -right-6 w-10 h-10 rounded-full bg-red-300 animate-pulse"></div>
                <div className="absolute bottom-0 -left-8 w-8 h-8 rounded-full bg-red-200 animate-pulse"></div>
                <div className="absolute top-20 -left-10 w-6 h-6 rounded-full bg-red-400 animate-pulse"></div>

              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 mt-8">
              <div className="flex gap-4">
                <Quote className="text-red-600" size={30} />
                <p className="text-gray-700 text-lg">
                  Together, we can create a world where no one
                  suffers due to lack of blood.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex md:pt-40 justify-center p-10">
            <div className="w-full max-w-md">
              <div className="mb-10">
                <h1 className="text-4xl text-center mb-3 font-bold ">Welcome to LifeLink</h1>
                <p className="text-center text-2xl">Login to your <span className="text-red-600 font-bold">LifeLink</span> Account</p>
              </div>
              {/* Login Form*/}
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Hospital Name</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>
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
                <div className="flex justify-center mt-3 ">

                  <button type="Submit" className="text-center bg-gray-200 px-5 py-2 rounded-xl hover:bg-gray-300 hover:w-25 hover:cursor-pointer">Submit</button>
                </div>
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-gray-100"></div>
                  <span className="flex-shrink mx-4 text-xs text-gray-500">
                    Don't have an account? <a href="/hospitalregistration" className="text-red-600 font-bold hover:underline ml-0.5">Register</a>
                  </span>
                  <div className="flex-grow border-t border-gray-100"></div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}