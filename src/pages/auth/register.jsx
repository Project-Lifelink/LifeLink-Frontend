import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  FileText,
  Lock,
  Eye,
  EyeOff,
  Shield,
  Users,
  Bell,
  Heart,
  Droplet,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import Navbar from '../../components/layout/navbar.jsx'
import { useNavigate } from 'react-router-dom'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import BloodDropLoader from '../../components/motion/BloodDropLoader.jsx'

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [blood_group, setBlood_group] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword , setConfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [registering,setRegistering] = useState(false);

  const navigate = useNavigate();

  const registerUser = async () => {

    try {
      setRegistering(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/register/`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            blood_group,
            age,
            sex,
            password
          }),
        }
      );

      const data = await response.json();
      console.log(data)

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
        setRegistering(false)
      }
      else {
        alert("Account Created")
        navigate('/login')
      }

      return data;
    } catch (error) {
      console.error("Error:", error.message);

        alert("registration failed due to some error")
      setRegistering(false);
      throw error;
    }
  };


  function handleSubmit(e){
    e.preventDefault();
    if(password !== confirmpassword){
      alert("password and confirm password are not same");
      return;
    }
    registerUser();
  }

  const features = [
    { Icon: Shield, title: "Save Lives", text: "Your donation can make a real difference." },
    { Icon: Users, title: "Trusted Community", text: "Connect with verified donors and those in need." },
    { Icon: Bell, title: "Real-time Alerts", text: "Get notified when someone needs help." },
    { Icon: Heart, title: "Make an Impact", text: "Be a hero in someone's most critical moment." },
  ];

  const inputClass =
    "w-full rounded-2xl border border-line bg-canvas py-2.5 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50";
  const selectClass =
    "w-full appearance-none rounded-2xl border border-line bg-canvas py-2.5 pl-11 pr-10 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <Navbar />
      {registering ? (
        <div className="fixed inset-x-0 top-24 z-50 flex justify-center">
          <p className="glass flex items-center gap-3 rounded-full border border-line px-6 py-2 text-sm font-semibold text-ink shadow-card">
            <BloodDropLoader size={10} />
            Creating your account…
          </p>
        </div>
      ) : ""}

      <div className="flex items-center justify-center px-4 py-10 md:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl border border-line bg-surface shadow-card md:grid-cols-2">

          {/* LEFT: warm reassurance */}
          <div className="relative hidden flex-col justify-between gap-8 overflow-hidden bg-subtle p-12 md:flex">
            <div className="pointer-events-none absolute inset-0 bg-brand-gradient-soft" />
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Droplet className="h-5 w-5" fill="currentColor" />
                </span>
                <span className="text-lg font-semibold text-ink">LifeLink</span>
              </div>

              <h1 className="mt-12 font-display text-5xl font-normal leading-tight text-ink">
                Join LifeLink,
                <br />
                be a <span className="text-gradient-brand italic">lifesaver</span>
              </h1>
              <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
                Create your account and connect with people in need. Your blood
                can bring hope and save lives.
              </p>
            </div>

            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map(({ Icon, title, text }) => (
                <div key={title} className="rounded-3xl border border-line bg-surface/70 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-ink">{title}</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="flex w-full flex-col justify-center p-8 md:p-12">
            <div className="mb-8 text-center">
              <h2 className="font-display text-4xl font-normal text-ink">Create your account</h2>
              <p className="mt-2 text-sm text-muted">It only takes a minute to get started.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input type="text" required placeholder="Enter your full name" onChange={(e) => { setName(e.target.value) }} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input type="email" required onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email address" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input type="number" required onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter your phone number" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Age (Years)</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input type="number" required min="1" onChange={(e) => { setAge(e.target.value) }} placeholder="e.g. 19" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Blood Group</label>
                  <div className="relative">
                    <Droplet className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <select defaultValue="" required onChange={(e) => { setBlood_group(e.target.value) }} className={selectClass}>
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

                <div className="w-full">
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Gender</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <select defaultValue="" required onChange={(e) => { setSex(e.target.value) }} className={selectClass}>
                      <option value="" disabled hidden>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      onChange={(e) => { setPassword(e.target.value) }}
                      placeholder="Create a strong password"
                      className="w-full rounded-2xl border border-line bg-canvas py-2.5 pl-11 pr-11 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-faint transition-colors hover:text-ink-soft">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      required
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      className="w-full rounded-2xl border border-line bg-canvas py-2.5 pl-11 pr-11 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-faint transition-colors hover:text-ink-soft">
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className = "text-xs w-full bold flex text-center">{(password === confirmpassword)?"":
              "Password and confirm password is not same "
                }</div>

              {/* Info Notice */}
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-canvas p-3.5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Shield className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h5 className="text-sm font-semibold leading-tight text-ink">Your data is safe with us.</h5>
                  <p className="mt-0.5 text-xs leading-normal text-muted">We never share your information with anyone.</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={registering}
                className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow disabled:opacity-70"
              >
                {(registering) ? <BloodDropLoader size={9} className="text-white" /> : ""}
                <span>{(registering) ? "Creating your account…" : "Create your account"}</span>
                {(!registering) ? <ArrowRight className="h-4 w-4" /> : ""}
              </button>

              <p className="text-center text-sm text-muted">
                Already have an account?{" "}
                <a href="/login" className="font-semibold text-primary hover:underline">Login</a>
              </p>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
