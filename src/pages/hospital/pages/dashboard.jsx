import React from "react";
import {
  Building2,
  Users,
  Droplets,
  CheckCircle,
  Clock,
  Activity,
} from "lucide-react";

import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux'
// import { loginSuccess } from "../../../redux/slices/authSlice.js";
import { motion } from 'framer-motion'
import Reveal from '../../../components/motion/Reveal.jsx'
import CountUp from '../../../components/motion/CountUp.jsx'
import AmbientBackground from '../../../components/motion/AmbientBackground.jsx'


export default function HospitalDashboard() {
  // const dispatch = useDispatch()
  const [user,setUser] = useState();
  const navigate = useNavigate();
  // const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [recentRequests ,setRecentRequests ] = useState([]);

  const id = localStorage.getItem("id");
  console.log("this is id ",id)

 const token = localStorage.getItem("token");
//  console.log(token)

  async function getdata() {

    try {
      setLoading(true)
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/hospitals/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // if JWT auth is used
          },
        }
      );

      const data = await response.json();
      setUser(data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch hospital data");
      }

      // try {

      //   dispatch(
      //     loginSuccess({
      //       user: data.hospital,
      //       token: data.access_token,
      //       role: "hospital",
      //     })
      //   );

      // } catch (error) {
      //   console.log("error occured in redux from dispatch function ", error);
      // }
      console.log("data by get request in hospital", data);
    } catch (error) {
      console.error(error);
      // if (!user) navigate('/hospitallogin')
    }finally{
      setLoading(false);
    }

  }

  //recent blood requests
    useEffect(() => {
      const fetchActiveRequests = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/blood-requests/`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
  
          if (!response.ok) {
            throw new Error("Failed to fetch requests");
          }
  
          const data = await response.json();
  
          // if backend is sending array formate directly
          setRecentRequests(data);
          console.log(data);
  
  
  
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchActiveRequests();
    }, []);




  useEffect(() => {

    getdata();


  }, [])


  const hospitalname = user?.name || "";
  const totalrequests = user?.totalrequests || "0";
  const activerequests = user?.activerequests || "0"
  const fullfilledrequests = user?.totaldonation || "0"
  const nearbydonors = user?.totaldonation || "0"

  const stats = [
    { title: "Total Requests", value: totalrequests, icon: Droplets, tone: "bg-primary-50 text-primary" },
    { title: "Active Requests", value: activerequests, icon: Activity, tone: "bg-info-soft text-info" },
    { title: "Fulfilled Requests", value: fullfilledrequests, icon: CheckCircle, tone: "bg-success-soft text-success" },
    { title: "Nearby Donors", value: nearbydonors, icon: Users, tone: "bg-warning-soft text-warning" },
  ];

  const bloodInventory = [
    { group: "A+", units: 45, capacity: 100 },
    { group: "A-", units: 20, capacity: 100 },
    { group: "B+", units: 70, capacity: 100 },
    { group: "B-", units: 15, capacity: 100 },
    { group: "AB+", units: 55, capacity: 100 },
    { group: "AB-", units: 10, capacity: 100 },
    { group: "O+", units: 90, capacity: 100 },
    { group: "O-", units: 35, capacity: 100 },
  ];



  const statusTone = {
    Active: "bg-info-soft text-info",
    Fulfilled: "bg-success-soft text-success",
    Pending: "bg-warning-soft text-warning",
    Emergency: "bg-danger-soft text-danger",
  };

  return (
    <div className="relative min-h-screen bg-canvas" id="dashboard">
      <AmbientBackground />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <Reveal className="mb-8">
          {(loading)?"loading...":""}
          <h1 className="font-display text-4xl text-ink">{hospitalname}</h1>
          <p className="mt-1 text-muted">Manage blood requests and your donor network</p>
        </Reveal>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                as="div"
                key={index}
                delay={index * 0.08}
                className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted">{item.title}</p>
                    <CountUp value={item.value} className="mt-2 block font-display text-3xl text-ink" />
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}>
                    <Icon size={22} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Left Section */}
          <div className="space-y-6 xl:col-span-2">
            {/* Blood Availability */}
            <Reveal className="rounded-4xl border border-line bg-surface p-6 shadow-card md:p-8">
              <h2 className="text-lg font-semibold text-ink">Blood Availability</h2>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {bloodInventory.map((blood, index) => (
                  <div
                    key={index}
                    className="hover-lift rounded-2xl border border-line bg-canvas p-5 hover:border-primary-100 hover:shadow-card"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <h2 className="font-display text-2xl text-primary">{blood.group}</h2>
                      <span className="text-sm font-semibold text-ink-soft">{blood.units} Units</span>
                    </div>

                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-subtle">
                      <motion.div
                        className="h-full rounded-full bg-brand-gradient"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(blood.units / blood.capacity) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-muted">Capacity: {blood.capacity} Units</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Recent Requests */}
            <Reveal className="rounded-4xl border border-line bg-surface p-6 shadow-card md:p-8">
              <h2 className="text-lg font-semibold text-ink">Recent Requests</h2>
              <div className="mt-5 space-y-3">
                {recentRequests.map((req, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-2xl border border-line bg-canvas px-5 py-3.5 transition-colors hover:border-primary-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-sm font-bold text-primary">
                        {req.blood_group}
                      </span>
                      <span className="font-medium text-ink">{req.patient_name}</span>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusTone[req.status] || 'bg-subtle text-muted'}`}>
                      {req.status}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Hospital Info */}
            <Reveal delay={0.1} className="rounded-4xl border border-line bg-surface p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Building2 size={20} />
                </span>
                <h2 className="font-semibold text-ink">Hospital Profile</h2>
              </div>
              <div className="space-y-2 text-sm text-muted">
                <p>City Hospital</p>
                <p>Verified Partner</p>
                <p>Member Since 2026</p>
              </div>
            </Reveal>

            {/* Pending Actions */}
            <Reveal delay={0.16} className="rounded-4xl border border-line bg-surface p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-subtle text-ink-soft">
                  <Clock size={18} />
                </span>
                <h2 className="font-semibold text-ink">Pending Actions</h2>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  ["Verification Requests", "0"],
                  ["Emergency Cases", "0"],
                  ["Follow Ups", "0"],
                ].map(([label, val]) => (
                  <li key={label} className="flex justify-between border-b border-line pb-3 last:border-0 last:pb-0">
                    <span className="text-muted">{label}</span>
                    <span className="font-semibold text-ink">{val}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
