import React from "react";
import {
  Building2,
  Users,
  Droplets,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  Plus,
} from "lucide-react";
import { HashLink } from 'react-router-hash-link'

import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


export default function HospitalDashboard() {
  const navigate = useNavigate();

  const id = localStorage.getItem("id");

  async function getdata() {

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/hospital/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`, // if JWT auth is used
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch hospital data");
      }

      console.log("data by get request in hospital",data);
    } catch (error) {
      console.error(error);
    }

  }


  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if(!user) navigate('/hospitallogin')


    getdata();



  }, [])


  console.log(user)

  const hospitalname = user?.name || "not found";
  const totalrequests = user?.totalrequests || "0";
  const activerequests = user?.activerequests || "0"
  const fullfilledrequests = user?.totaldonation || "0"
  const nearbydonors = user?.totaldonation || "0"


  const stats = [
    {
      title: "Total Requests",
      value: totalrequests,
      icon: Droplets,
    },
    {
      title: "Active Requests",
      value: activerequests,
      icon: Activity,
    },
    {
      title: "Fulfilled Requests",
      value: fullfilledrequests,
      icon: CheckCircle,
    },
    {
      title: "Nearby Donors",
      value: nearbydonors,
      icon: Users,
    },
  ];

  const bloodInventory = [
    { group: "A+", units: 42 },
    { group: "A-", units: 14 },
    { group: "B+", units: 37 },
    { group: "B-", units: 11 },
    { group: "AB+", units: 19 },
    { group: "AB-", units: 5 },
    { group: "O+", units: 58 },
    { group: "O-", units: 8 },
  ];

  const recentRequests = [
    {
      patient: "Rahul Sharma",
      blood: "O-",
      status: "Active",
    },
    {
      patient: "Priya Singh",
      blood: "A+",
      status: "Fulfilled",
    },
    {
      patient: "Amit Patel",
      blood: "B+",
      status: "Pending",
    },
    {
      patient: "Neha Verma",
      blood: "AB-",
      status: "Emergency",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 w-full" id="dashboard">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            {hospitalname}
          </h1>
          <p className="text-slate-500 mt-1">
            Manage blood requests and donor network
          </p>
        </div>

        <HashLink className="flex items-center gap-2 hover:cursor-pointer bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-medium">

          Active Blood Requests
        </HashLink>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl hover:scale-103 transition-all p-6 shadow-[0_0_20px_rgba(0,0,0,0.14)] "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm">{item.title}</p>
                  <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
                </div>

                <div className="bg-red-100 p-3 rounded-xl">
                  <Icon className="text-red-600" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Hostpital information
      <div>
        <p className = "md:text-2xl font-bold ">Hostpial Name</p>
      </div> */}


      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="xl:col-span-2 space-y-6">
          {/* Blood Availability */}
          <div className="bg-white rounded-2xl p-6 hover:scale-102 transition-all shadow-[0_0_30px_rgba(0,0,0,0.15)]">
            <h2 className="font-semibold mb-4">
              Blood Availability
            </h2>

            <div className="space-y-3">
              {bloodInventory.map((blood, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-20"
                >
                  <span className="font-medium">
                    {blood.group}
                  </span>

                  <span className="text-red-600 font-semibold">
                    {blood.units} Units
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Hospital Info */}
          <div className="bg-white rounded-2xl p-6 hover:scale-102 transition-all shadow-[0_0_30px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-red-600" />
              <h2 className="font-semibold">
                Hospital Profile
              </h2>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <p>City Hospital</p>
              <p>Verified Partner</p>
              <p>Member Since 2026</p>
            </div>
          </div>



          {/* Pending Actions */}
          <div className="bg-white rounded-2xl hover:scale-102 transition-all p-6 shadow-[0_0_30px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} />
              <h2 className="font-semibold">
                Pending Actions
              </h2>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Verification Requests</span>
                <span className="font-semibold">0</span>
              </li>

              <li className="flex justify-between">
                <span>Emergency Cases</span>
                <span className="font-semibold">0</span>
              </li>

              <li className="flex justify-between">
                <span>Follow Ups</span>
                <span className="font-semibold">0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}