import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Heart,
  ShieldCheck,
  Users,
  Quote,
  Building2,
  ArrowRight,
} from "lucide-react";
import Navbar from '../../components/layout/navbar.jsx'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { loginSuccess } from "../../redux/slices/authslice.js";
import { useNavigate } from "react-router-dom"
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import BloodDropLoader from '../../components/motion/BloodDropLoader.jsx'

export default function HospitalLogin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginuser = async () => {



    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/hospitals/login/`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password
          }),
        }
      );

      const data = await response.json();
      console.log(data)

      if (!response.ok) {
        setLoading(false)
        throw new Error(data.message || "Something went wrong");

      }
      else {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("id", data.hospital.hospital_id)
        navigate("/hospital")
      }


      try {

        dispatch(
          loginSuccess({
            user: data.user,
            token: data.access_token,
            role: "hospital",
          })
        );
      } catch (error) {
        console.log("error occured in redux from dipatch function ", error);
      }

      return data;
    } catch (error) {
      console.error("Error:", error.message);
      alert("login failed", error.message)
      setLoading(false);
      throw error;
    }
  };




  function handleSubmit(e) {
    e.preventDefault();
    loginuser();
    console.log("login from submitted")

  }

  const features = [
    { Icon: Heart, title: "Save Lives", text: "Every request you raise can make a real difference." },
    { Icon: Users, title: "Trusted Community", text: "Connect with verified donors and recipients." },
    { Icon: ShieldCheck, title: "Secure & Safe", text: "Your privacy and data protection remain our priority." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <Navbar />
      {loading ? (
        <div className="fixed inset-x-0 top-24 z-50 flex justify-center">
          <p className="glass flex items-center gap-3 rounded-full border border-line px-6 py-2 text-sm font-semibold text-ink shadow-card">
            <BloodDropLoader size={10} />
            Logging you in…
          </p>
        </div>
      ) : ""}

      <div className="flex items-center justify-center px-4 py-10 md:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl border border-line bg-surface shadow-card lg:grid-cols-2">

          {/* Left Side — warm reassurance panel */}
          <div className="relative hidden flex-col justify-between gap-10 overflow-hidden bg-subtle p-12 lg:flex">
            <div className="pointer-events-none absolute inset-0 bg-brand-gradient-soft" />
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Building2 className="h-5 w-5" />
                </span>
                <span className="text-lg font-semibold text-ink">
                  Life<span className="text-primary">Link</span>
                  <span className="ml-2 align-middle text-xs font-medium text-muted">for Hospitals</span>
                </span>
              </div>

              <h2 className="mt-12 font-display text-5xl font-normal leading-tight text-ink">
                Welcome back,
                <br />
                <span className="text-gradient-brand italic">partner</span>
              </h2>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                Login to your hospital account and continue your journey of saving
                lives and spreading hope.
              </p>

              <div className="mt-10 space-y-4">
                {features.map(({ Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4 rounded-3xl border border-line bg-surface/70 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{title}</h3>
                      <p className="mt-0.5 text-sm text-muted">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex gap-4 rounded-3xl border border-line bg-surface/70 p-6">
              <Quote className="h-7 w-7 shrink-0 text-primary" />
              <p className="text-ink-soft">
                Together, we can create a world where no one suffers due to lack
                of blood.
              </p>
            </div>
          </div>

          {/* Right Side — form */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gradient text-white shadow-glow">
                  <Building2 size={28} />
                </div>
                <h1 className="mt-6 font-display text-4xl font-normal text-ink">Welcome to LifeLink</h1>
                <p className="mt-2 text-muted">
                  Login to your{" "}
                  <span className="font-semibold text-primary">LifeLink</span> account
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Hospital Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      onChange={(e) => { setEmail(e.target.value) }}
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={(e) => { setPassword(e.target.value) }}
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-faint transition-colors hover:text-ink-soft"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="Submit"
                  className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow disabled:opacity-70"
                >
                  {loading ? <BloodDropLoader size={9} className="text-white" /> : null}
                  {loading ? "Logging in…" : "Login"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>

                <p className="text-center text-sm text-muted">
                  Don't have an account?{" "}
                  <a href="/hospitalregistration" className="font-semibold text-primary hover:underline">Register</a>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
