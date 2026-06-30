import React from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Landmark,
  ShieldCheck,
  Bell,
  Users,
  ClipboardPlus,
  Lock,
  Eye,
  ArrowRight,
} from "lucide-react";
import Navbar from '../../components/layout/navbar.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { loginSuccess } from "../../redux/slices/authslice.js";
import { useNavigate } from "react-router-dom"
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import BloodDropLoader from '../../components/motion/BloodDropLoader.jsx'

const HospitalRegister = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [alternative_phone1, setAlternative_phone1] = useState("");
  const [alternative_phone2, setAlternative_phone2] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("https://www.fortishealthcare.com/");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [geohash_64_bits, setGeohash_64_bits] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [hidden, setHidden] = useState(true);



  const registerUser = async () => {


    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/hospitals/`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            type,
            phone,
            alternative_phone1,
            alternative_phone2,
            email,
            site,
            city,
            zipcode,
            state,
            address,
            district,
            longitude,
            latitude,
            geohash_64_bits,
            password
          }),
        }
      );

      const data = await response.json();
      console.log(data)

      if (!response.ok) {
        setLoading(false);
        throw new Error(data.message || "Something went wrong");

      }
      else {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("id", data.id)
        setLoading(false);
        navigate("/hospital")

      }
      try {

        dispatch(
          loginSuccess({
            user: data,
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
      alert("request failed due to some error")
      throw error;
    }finally{
      setLoading(false)
    }
  };



  function handleSubmit(e) {

    e.preventDefault();
    registerUser();
  }

  const features = [
    { Icon: ShieldCheck, title: "Verify Donors", text: "Verify and trust donors for safe blood transfusions." },
    { Icon: ClipboardPlus, title: "Raise Blood Requests", text: "Post urgent blood requirements instantly." },
    { Icon: Users, title: "Connect & Collaborate", text: "Build a trusted network of donors and hospitals." },
    { Icon: Bell, title: "Real-time Updates", text: "Get notified instantly about request activity." },
  ];

  const fieldClass =
    "flex items-center gap-3 rounded-2xl border border-line bg-canvas px-4 py-3 text-ink transition-colors focus-within:border-primary focus-within:bg-surface focus-within:ring-4 focus-within:ring-primary-50";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <Navbar />

      {loading ? (
        <div className="fixed inset-x-0 top-24 z-50 flex justify-center">
          <p className="glass flex items-center gap-3 rounded-full border border-line px-6 py-2 text-sm font-semibold text-ink shadow-card">
            <BloodDropLoader size={10} />
            Registering to server…
          </p>
        </div>
      ) : ""}

      <div className="px-4 py-10 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-line bg-surface shadow-card">
          <div className="grid lg:grid-cols-2">

            {/* LEFT SECTION */}
            <div className="relative hidden flex-col gap-10 overflow-hidden bg-subtle p-12 lg:flex">
              <div className="pointer-events-none absolute inset-0 bg-brand-gradient-soft" />
              <div className="relative flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Building2 className="h-5 w-5" />
                </span>
                <h1 className="text-xl font-semibold text-ink">
                  Life<span className="text-primary">Link</span>
                </h1>
              </div>

              <div className="relative">
                <h2 className="font-display text-5xl font-normal leading-tight text-ink">
                  Partner with LifeLink,
                  <br />
                  <span className="text-gradient-brand italic">save more lives</span>
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Hospitals and healthcare organizations can verify donors, raise
                  blood requests for patients, and connect with lifesavers in
                  real-time.
                </p>
              </div>

              <div className="relative grid gap-3 sm:grid-cols-2">
                {features.map(({ Icon, title, text }) => (
                  <div key={title} className="rounded-3xl border border-line bg-surface/70 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{text}</p>
                  </div>
                ))}
              </div>

              <div className="relative mt-auto flex gap-4 rounded-3xl border border-line bg-surface/70 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-ink">Trusted. Verified. Together.</h3>
                  <p className="text-sm text-muted">
                    LifeLink helps hospitals and donors work together for a safer
                    and healthier community.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="p-8 md:p-12">
              <div className="mb-8 flex items-center justify-end gap-3">
                <span className="text-sm text-muted">Already registered?</span>
                <Link
                  to="/hospitallogin"
                  className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-subtle"
                >
                  Login
                </Link>
              </div>

              <h2 className="font-display text-4xl font-normal text-ink">Register your hospital</h2>
              <p className="mt-2 text-muted">Create your hospital account to get started.</p>

              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className={fieldClass}>
                    <Building2 size={18} className="text-faint" />
                    <input type="text" placeholder="Hospital Name" onChange={(e) => setName(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                  <div className={fieldClass}>
                    <Landmark size={18} className="text-faint" />
                    <input type="text" placeholder="Type — Private or Government" onChange={(e) => setType(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className={fieldClass}>
                    <Mail size={18} className="text-faint" />
                    <input type="text" placeholder="Official Email Address" onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                  <div className={fieldClass}>
                    <Phone size={18} className="text-faint" />
                    <input type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className={fieldClass}>
                    <Phone size={18} className="text-faint" />
                    <input type="text" placeholder="Alternative Phone Number 1" onChange={(e) => setAlternative_phone1(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                  <div className={fieldClass}>
                    <Phone size={18} className="text-faint" />
                    <input type="text" placeholder="Alternative Phone Number 2" onChange={(e) => setAlternative_phone2(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className={fieldClass}>
                    <MapPin size={18} className="text-faint" />
                    <input type="text" placeholder="Hospital Address" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className={fieldClass}>
                    <MapPin size={18} className="text-faint" />
                    <input type="text" placeholder="District" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" onChange={(e) => setDistrict(e.target.value)} />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className={fieldClass}>
                    <input type="text" placeholder="City" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" onChange={(e) => { setCity(e.target.value) }} />
                  </div>
                  <div className={fieldClass}>
                    <input type="text" placeholder="State" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" onChange={(e) => setState(e.target.value)} />
                  </div>
                  <div className={fieldClass}>
                    <input type="text" placeholder="Pin Code" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className={fieldClass}>
                    <Lock size={18} className="text-faint" />
                    <input type={(hidden) ? "password" : "text"} placeholder="Password" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" onChange={(e) => setPassword(e.target.value)} />
                    <Eye size={18} className="cursor-pointer text-faint" onClick={() => setHidden(!hidden)} />
                  </div>
                  <div className={fieldClass}>
                    <Lock size={18} className="text-faint" />
                    <input type={(hidden) ? "password" : "text"} placeholder="Confirm Password" className="w-full bg-transparent text-sm outline-none placeholder:text-faint" />
                    <Eye size={18} className="cursor-pointer text-faint" onClick={() => setHidden(!hidden)} />
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-line bg-canvas p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h4 className="font-medium text-ink">Your data is secure with us.</h4>
                </div>

                <button
                  disabled={loading}
                  type="Submit"
                  className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-4 font-semibold text-white shadow-glow disabled:opacity-70"
                >
                  {(loading) ? <BloodDropLoader size={9} className="text-white" /> : ""}
                  {(loading) ? "Registering to server…" : "Register Hospital"}
                  {(loading) ? "" : <ArrowRight size={18} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalRegister;
