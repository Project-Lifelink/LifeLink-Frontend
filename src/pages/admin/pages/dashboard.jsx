import React from "react";
import {
  Building2,
  Users,
  Droplets,
  CheckCircle,
  Clock,
  Activity,
  Icon
} from "lucide-react";

import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import Reveal from '../../../components/motion/Reveal.jsx'
import CountUp from '../../../components/motion/CountUp.jsx'

export default function AdminDashboard() {
  const [user,setUser] = useState();
  const navigate = useNavigate();
  // const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [recentRequests ,setRecentRequests ] = useState([]);

  const id = localStorage.getItem("id");
  const stats = [
    {
        index: 0,
        title: "Total Hospitals",
        Value: 0
    },
    {
        index: 1,
        title: "Total Users",
        Value: 0
    },
    {
        index: 2,
        title: "Total Requests",
        Value: 0
    },
    {
        index: 0,
        title: "",
        Value: 0
    }
  ]

 const token = localStorage.getItem("token");
  return (
    <div className="relative min-h-screen bg-canvas" id="dashboard">
      <div className="relative p-6 md:p-8">
        {/* Header */}
        <Reveal className="mb-8">
          <h1 className="font-display text-4xl text-ink">Admin DashBoard</h1>
          <p className="mt-1 text-muted">Admin Controls</p>
        </Reveal>

        {/* <div>
            <h1>Admin Dashboard</h1>
        </div> */}

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
                    <p className="mt-2 block font-display text-3xl text-ink">{item.value}</p>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}>
                    {/* <Icon size={22} /> */}
                  </div>
                </div>
              </Reveal>
            );
          })} 
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Left Section */}
          <div className="space-y-6 xl:col-span-2">
          </div>
        </div>
      </div>
    </div>
  );
}
