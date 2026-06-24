  import {
    User,
    Menu,
    Bell,
    Calendar,
    MapPin,
    ShieldCheck,
    Heart,
    Users,
    Award,
    UserPlus,
    Search,
    ArrowRight,
  } from "lucide-react";
  import { HashLink } from 'react-router-hash-link'
  import { motion } from 'framer-motion'
  import { useSelector } from 'react-redux'
  import { useState, useEffect } from 'react'
  import { useNavigate } from "react-router-dom";

  export default function DashboardContent() {

    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    


    console.log(user);
    useEffect(() => {
      // if (!user) navigate('/login')
    }, [])

    const username = user?.name || "nouser";
    const bloodgroup = user?.bloodgroup || "_";
    const lastdonation = user?.lastdonation || "not found"
    const totaldonation = user?.totaldonation || "0"


    return (
      <div id="dashboard" className="flex-col bg-gray-50 ">
        {/* Top Navbar */}
        <motion.div className="bg-white px-8 py-5 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>


          <div className="flex items-center gap-6">
            {/* <HashLink smooth to="#notifications" className="relative hover:cursor-pointer">
              <Bell />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">

              </span>
            </HashLink> */}

            <div className="hidden md:flex items-center gap-3">
              <User />
              <p className="font-medium">{username}</p>
            </div>
          </div>
        </motion.div>

        <div className="p-8">
          {/* Profile Section */}
          <motion.div className="grid lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            {/* Profile Card */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.14)]">
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex gap-6">
                  <User className="h-30 w-30" />

                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-bold">
                        {username}
                      </h2>

                      <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm">
                        Verified Donor
                      </span>
                    </div>

                    <div className="flex gap-6 text-gray-500 mt-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        Your Location
                      </div>


                    </div>

                    <p className="text-gray-500 mt-4 max-w-xl">
                      Proud to be a blood donor and help save lives.
                      Together, we can make a difference.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                      <div className="border rounded-2xl p-4">
                        <p className="text-gray-500">Blood Group</p>
                        <h4 className="font-bold text-xl">{bloodgroup}</h4>
                      </div>

                      <div className="border rounded-2xl p-4">
                        <p className="text-gray-500">Last Donation</p>
                        <h4 className="font-bold">{lastdonation}</h4>
                      </div>

                      <div className="border rounded-2xl p-4">
                        <p className="text-gray-500">Total Donations</p>
                        <h4 className="font-bold">{totaldonation}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="border rounded-2xl p-6 h-fit">
                  <h4 className="font-semibold">
                    Next Eligible Donation
                  </h4>

                  <p className="text-red-600 font-bold text-xl mt-4">
                    12 Aug 2024
                  </p>

                  <p className="text-gray-500 mt-4">
                    You can donate again in
                  </p>

                  <div className="bg-gray-100 rounded-xl px-4 py-3 mt-3 text-center font-bold text-red-600">
                    62 Days Left
                  </div>
                </div> */}
              </div>
            </div>

            {/* Donate Card */}
            <div className="bg-red-600 text-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.14)]">
              <div>
                <h2 className="text-3xl font-bold">
                  Be a Lifesaver
                </h2>

                <p className="mt-4">
                  Your single donation can save up to 3 lives.
                </p>
              </div>

              <a href="/requests" className="bg-white hover:cursor-pointer text-center active:scale-105 text-red-600 px-6 py-3 rounded-xl font-semibold mt-8">
                Donate Now
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div className="grid lg:grid-cols-4 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className="bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.14)]">
              <Heart className="text-red-600" />
              <h2 className="text-4xl font-bold mt-3">{totaldonation}</h2>
              <p>Total Donations</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.14)]">
              <Users className="text-blue-600" />
              <h2 className="text-4xl font-bold mt-3">0</h2>
              <p>Total Requests</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.14)]">
              <ShieldCheck className="text-green-600" />
              <h2 className="text-4xl font-bold mt-3">100%</h2>
              <p>Profile Strength</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.14)]">
              <Award className="text-yellow-500" />
              <h2 className="font-bold text-xl mt-3">
                Top Donor
              </h2>
              <p>Keep helping and inspiring!</p>
            </div>
          </motion.div>


          {/* Bottom CTA */}
          {/* <div className="mt-8 bg-white rounded-3xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Invite Your Friends & Save More Lives
              </h3>

              <p className="text-gray-500 mt-2">
                The more people who donate, the more lives we
                save together.
              </p>
            </div> */}

            {/* <button className="bg-red-600 text-white px-8 py-4 rounded-xl flex items-center hover:cursor-pointer gap-2">
              Invite Now
              <UserPlus size={18} />
            </button> */}
          {/* </div> */}
        </div>
      </div>
    );
  }