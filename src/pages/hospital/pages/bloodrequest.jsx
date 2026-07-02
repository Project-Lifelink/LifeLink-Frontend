import React from 'react';
import {
  User,
  Mail,
  Phone,
  Heart,
  Droplet,
  FileText,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Quote
} from 'lucide-react';
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import BloodDropLoader from '../../../components/motion/BloodDropLoader.jsx'

export default function bloodrequest() {

  const [patient_name, setPatient_name] = useState("");
  const [guardian_name, setGuardian_name] = useState("");
  const [phone, setPhone] = useState("")
  const [additional_phone, setAdditional_phone] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [quantity, setQuantity] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [geohash_64_bits, setGeohash_64_bits] = useState("");

  const [makingrequest, setMakingrequest] = useState(false)
  // console.log(patient_name)
  // console.log(guardian_name)
  // console.log(phone)
  // console.log(additional_phone)
  // console.log(blood_group)
  // console.log(age)
  // console.log(sex)
  // console.log(quantity)


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMakingrequest(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/blood-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            patient_name,
            guardian_name,
            phone,
            additional_phone,
            blood_group,
            age,
            sex,
            quantity,
            longitude,
            latitude,
            geohash_64_bits,
          }),
        }
      );

      const data = await response.json();


      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log(data)
      alert("Request created successfully");
    } catch (error) {
      console.error(error);

      alert("blood request not made due to some error");
    } finally {
      setMakingrequest(false);
    }
  };


  return (
    <div className="max-h-screen overflow-auto scrollbar-none scale-90 bg-canvas flex items-center justify-center " id='requestblood'>
      <div className="grid w-full max-w-6xl overflow-hidden rounded-4xl border border-line bg-surface shadow-card md:grid-cols-2">

        {/* LEFT SIDE: Information & Instructions */}
        <div className="relative hidden flex-col justify-between gap-8 overflow-hidden bg-subtle p-10 lg:p-12 md:flex">
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
          <motion.div className="relative space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="font-display text-5xl font-normal leading-tight text-ink">
              Submit a
              <br />
              <span className="text-gradient-brand italic">Blood Request</span>
            </h1>
            <p className="max-w-sm text-lg leading-relaxed text-muted">
              Provide the patient's details below to alert our verified donor network. We will connect you with matches as quickly as possible.
            </p>
          </motion.div>

          {/* Decorative Heartbeat */}
          <div className="relative my-2 flex h-28 items-center justify-center">
            <Activity className="h-16 w-16 animate-heartbeat text-primary/30" strokeWidth={1.5} />
          </div>

          {/* Guidelines / Help Card */}
          <motion.div className="relative space-y-4 rounded-3xl border border-line bg-surface/70 p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-ink">Accurate Information</h4>
                <p className="mt-0.5 text-sm text-muted">Please ensure contact details are reachable to avoid delays in coordination.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE: Blood Request Form */}
        <motion.div className="flex flex-col justify-center p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gradient text-white shadow-glow">
              <Droplet size={28} />
            </div>
            <h2 className="mt-6 font-display text-3xl font-normal text-ink">Patient &amp; Requirement Details</h2>
            <p className="mt-2 text-muted">
              Fill out the form to request blood
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Patient Name */}


              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-soft">Patient Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  <input
                    type="text"
                    required
                    onChange={(e) => setPatient_name(e.target.value)}
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
                    required
                    type="text"
                    onChange={(e) => setGuardian_name(e.target.value)}
                    placeholder="Enter guardian's name"
                    className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                  />
                </div>
              </div>
              {/* Contact Email */}
              {/* <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Contact Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    onChange = {}
                    placeholder="Enter contact email address"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                  />
                </div>
              </div> */}

              {/* Phone Number */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-soft">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  <input
                    type="number"
                    required
                    minLength={10}
                    maxLength={10}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter active phone number"
                    className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-soft">Additional Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  <input
                    type="number"
                    minLength={10}
                    maxLength={10}
                    onChange={(e) => setAdditional_phone(e.target.value)}
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
                    required
                    onChange={(e) => setBlood_group(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-10 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
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
                    required
                    onChange={(e) => setQuantity(e.target.value)}
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
                    max={150}
                    required
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="e.g. 19"
                    className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                  />
                </div>
              </div>
              {/*Sex*/}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-soft">Sex</label>
                <div className="relative">
                  <Droplet className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                  <select
                    required
                    defaultValue=""
                    onChange={(e) => setSex(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-line bg-canvas py-3 pl-11 pr-10 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                  >
                    <option value="" disabled hidden>Select blood group</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                </div>
              </div>
            </div>


            <div className="mt-2 flex items-start gap-4 rounded-2xl border border-line bg-subtle p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-sm font-semibold leading-tight text-ink">Patient data verification</h5>
                <p className="mt-0.5 text-sm leading-normal text-muted">By submitting, you authorize LifeLink to share these medical metrics with willing regional donors.</p>
              </div>
            </div>

            <button
              type="submit"
              className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow"
            >
              {(makingrequest) ? <BloodDropLoader size={9} className="text-white" /> : null}
              <span>{(makingrequest) ? "Creating new Blood Request....." : "Make Blood Request "}</span>
              {(makingrequest) ? "" : <ArrowRight className="h-4 w-4" />}
            </button>

          </form>
        </motion.div>

      </div>
    </div >
  );
}
