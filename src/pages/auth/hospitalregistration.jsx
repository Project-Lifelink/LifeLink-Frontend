import React from "react";
import {
  Building2,
  User,
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
import { div } from "framer-motion/client";

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


  return (
    <div className=" scrollbar-none overflow-auto h-screen bg-gray-50 p-6 pt-0 shadow-sm">
      <Navbar />
      {(loading) ?
        <div className="absolute text-2xl text-center z-1 font-extrabold">

          {/* <p >Registering to Server....</p> */}
        </div>

        : ""}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl scale-90 overflow-hidden">
        <div className="grid lg:grid-cols-2">

          {/* LEFT SECTION */}
          <div className="p-12 border-r">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                ♥
              </div>
              <h1 className="text-3xl font-bold">
                Life<span className="text-red-600">Link</span>
              </h1>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Partner with{" "}
              <span className="text-red-600">LifeLink</span>
              <br />
              Save More Lives Together
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Hospitals and healthcare organizations can verify donors,
              raise blood requests for patients, and connect with lifesavers
              in real-time.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Verify Donors
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Verify and trust donors for safe blood transfusions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <ClipboardPlus className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Raise Blood Requests
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Post urgent blood requirements instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <Users className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Connect & Collaborate
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Build a trusted network of donors and hospitals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center">
                  <Bell className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Real-time Updates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get notified instantly about request activity.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-red-50 rounded-2xl p-6 flex gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <ShieldCheck className="text-red-600" />
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">
                  Trusted. Verified. Together.
                </h3>
                <p className="text-gray-600">
                  LifeLink helps hospitals and donors work together
                  for a safer and healthier community.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="p-12">
            <div className="flex justify-end mb-10">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">
                  Already registered?
                </span>
                <Link to="/hospitallogin" className="border border-red-600 text-red-600 px-5 py-2 rounded-lg">
                  Login
                </Link>
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-3">
              Register Your Hospital
            </h2>

            <p className="text-gray-600 mb-10 text-lg">
              Create your hospital account to get started ❤️
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Building2 size={18} />
                  <input
                    type="text"
                    placeholder="Hospital Name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Landmark size={18} />
                  <input
                    type="text"
                    placeholder="type Private or Government"
                    onChange={(e) => setType(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Mail size={18} />
                  <input
                    type="text"
                    placeholder="Official Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Phone size={18} />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Phone size={18} />
                  <input
                    type="text"
                    placeholder="Alternative Phone Number 1"
                    onChange={(e) => setAlternative_phone1(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Phone size={18} />
                  <input
                    type="text"
                    placeholder="Alternative Phone Number 2"
                    onChange={(e) => setAlternative_phone2(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder="Hospital Address"
                    className="w-full outline-none"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">

                  <input
                    type="text"
                    placeholder="district"
                    className="w-full outline-none"
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  {/* {icon size={18}} */}
                  <input
                    type="text"
                    placeholder="city"
                    className="w-full outline-none"
                    onChange={(e) => { setCity(e.target.value) }}
                  />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  {/* {icon} */}
                  <input
                    type="text"
                    placeholder="state"
                    className="w-full outline-none"
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  {/* {MapPin} */}
                  <input
                    type="text"
                    placeholder="pin code"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Lock size={18} />
                  <input
                    type={(hidden) ? "password" : "text"}
                    placeholder="Password"
                    className="w-full outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Eye size={18} onClick={() => setHidden(!hidden)} />
                </div>
                <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                  <Lock size={18} />
                  <input
                    type={(hidden) ? "password" : "text"}
                    placeholder="Confirm Password"
                    className="w-full outline-none"
                  />
                  <Eye size={18} onClick={() => setHidden(!hidden)} />
                </div>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3">
                <ShieldCheck className="text-red-600" />
                <div>
                  <h4 className="font-semibold">
                    Your data is secure with us.
                  </h4>

                </div>
              </div>

              <button disabled={loading} type="Submit" className="w-full bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white py-4 rounded-xl flex justify-center items-center gap-2 font-semibold">
                {(loading) ? "Registering to server....." : "Register Hospital"}
                {(loading) ? "" : <ArrowRight size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalRegister;