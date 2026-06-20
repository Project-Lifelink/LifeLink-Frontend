import React from "react";
import {
  Users,
  Eye,
  ShieldCheck,
  Heart,
  User,
  Droplets,
  MapPin,
  Plus,
  Activity,
} from "lucide-react";

import aboutlifelink from '../../assets/images/aboutlifelink.png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-[#f8f8f8] min-h-screen py-20 px-6 md:px-16"
      
    >
      {/* Heading */}
      <motion.div className="text-center mb-16"
      initial = {{opacity: 0, y: 50}}
      whileInView = {{opacity: 1, y: 0}}
      transition={{duration: 1}}>
        <h3 className="text-red-600 font-semibold tracking-wide uppercase">
          About LifeLink
        </h3>
        <div className="w-14 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Main Content */}
      <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16"
      initial = {{opacity: 0, y: 50}}
      whileInView = {{opacity: 1, y: 0}}
      transition={{duration: 1}}>
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="text-red-600">LifeLink</span>
          </h1>

          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Bridging the gap between heroes and hope.
          </h3>

          <p className="text-gray-600 text-lg leading-8 mb-6">
            LifeLink is a platform that connects voluntary blood donors with
            people in urgent need of blood. We believe that a small act of
            kindness can create a big difference.
          </p>

          <p className="text-gray-600 text-lg leading-8 mb-12">
            Our mission is to make blood donation simple, accessible, and
            transparent for everyone.
          </p>

          {/* Mission Vision Promise */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-r border-gray-200 pr-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <Users className="text-red-600" size={30} />
              </div>

              <h4 className="font-bold text-xl mb-3">Our Mission</h4>

              <p className="text-gray-600">
                To save more lives by making blood donation easy and accessible.
              </p>
            </div>

            <div className="border-r border-gray-200 pr-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <Eye className="text-red-600" size={30} />
              </div>

              <h4 className="font-bold text-xl mb-3">Our Vision</h4>

              <p className="text-gray-600">
                A world where no one dies due to the unavailability of blood.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <ShieldCheck className="text-red-600" size={30} />
              </div>

              <h4 className="font-bold text-xl mb-3">Our Promise</h4>

              <p className="text-gray-600">
                We ensure verified donors, safe connections and quick help.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Background Circle */}
            <div className="absolute inset-0 rounded-full bg-red-100"></div>

            {/* Main Image */}
            <img
              src={aboutlifelink}
              alt="LifeLink"
              className="relative z-10 w-full h-full object-contain"
            />

            {/* Floating Icons */}

            <div className="absolute top-10 left-2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Plus className="text-red-600" size={34} />
            </div>

            <div className="absolute top-10 right-2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Activity className="text-red-600" size={34} />
            </div>

            <div className="absolute bottom-10 left-5 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Users className="text-red-600" size={34} />
            </div>

            <div className="absolute bottom-10 right-5 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <ShieldCheck className="text-red-600" size={34} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div className="bg-white rounded-3xl shadow-sm mt-20 p-8 md:p-12"
      initial = {{y:30,opacity: 0}}
      whileInView = {{y:0,opacity: 1}}
      transition = {{duration: 1}}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <Heart className="text-red-600" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">0+</h3>
              <p className="font-semibold text-lg">Lives Saved</p>
              <p className="text-gray-500 text-sm">
                Thanks to our amazing donors and volunteers.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <User className="text-red-600" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">10+</h3>
              <p className="font-semibold text-lg">Registered Donors</p>
              <p className="text-gray-500 text-sm">
                Generous people ready to save lives.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <Droplets className="text-red-600" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">0+</h3>
              <p className="font-semibold text-lg">Blood Requests</p>
              <p className="text-gray-500 text-sm">
                Successfully matched and fulfilled.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <MapPin className="text-red-600" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-600">500+</h3>
              <p className="font-semibold text-lg">Cities Covered</p>
              <p className="text-gray-500 text-sm">
                Spreading hope across the nation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;