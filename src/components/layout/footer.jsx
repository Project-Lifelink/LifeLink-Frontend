import React from "react";
import {
  Heart,
//   Facebook,
//   Instagram,
//   Twitter,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
} from "lucide-react";
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <motion.footer className="bg-gray-100 border-t border-gray-200 mt-20" id="contact"
    initial = {{opacity: 0, y: 30}}
    whileInView = {{opacity: 1, y: 0}}
    transition = {{duration: 0.5}}
    >
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-400 to-red-800 rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-3">
              Save Lives, One Donation at a Time
            </h2>
            <p className="text-red-100 text-lg">
              Join thousands of donors helping people find blood when they need
              it most.
            </p>
          </div>

          <HashLink smooth to = "/requests" className="bg-white text-red-600 px-8 py-4 hover:cursor-pointer rounded-xl font-semibold hover:scale-105 transition">
            Become a Donor
          </HashLink>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Heart className="text-red-600" fill="currentColor" />
              <h2 className="text-3xl font-bold">
                Life<span className="text-red-600">Link</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Connecting blood donors with recipients instantly. Building a
              trusted community dedicated to saving lives through technology and
              compassion.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                {/* <Facebook size={20} /> */}
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                {/* <Instagram size={20} /> */}
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                {/* <Twitter size={20} /> */}
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition"
              >
                {/* <Linkedin size={20} /> */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="/" className="hover:text-red-600 transition">
                  Home
                </a>
              </li>

              <li>
                <HashLink smooth to="#about" className="hover:text-red-600 transition">
                  About Us
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="#features" className="hover:text-red-600 transition">
                  Features
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="#howitworks" className="hover:text-red-600 transition">
                  How It Works
                </HashLink>
              </li>

              <li>  
                <HashLink smooth to="#contact" className="hover:text-red-600 transition">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Services</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Find Blood Donors</li>
              <li>Request Blood</li>
              <li>Emergency Alerts</li>
              <li>Donation Tracking</li>
              <li>Community Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

            <div className="space-y-5 text-gray-600">
              <div className="flex gap-3">
                {/* <MapPin
                  className="text-red-600 shrink-0 mt-1"
                  size={20}
                /> */}
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>

              <div className="flex gap-3">
                {/* <Phone
                  className="text-red-600 shrink-0"
                  size={20}
                /> */}
                {/* <span>+91 98765 43210</span> */}
              </div>

              <div className="flex gap-3">
                {/* <Mail
                  className="text-red-600 shrink-0"
                  size={20}
                /> */}
                <span>support@lifelink.com</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className = "font-semibold text-lg mb-5">Built by</h1>
            <div className = "space-y-2 text-gray-600">
              <p>Mohammad Rizvi</p>
              <p>Anurag Singh</p>
              <p>Akash Kumar</p>
              <p>Aabgeen Abhsar</p>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {/* © 2026 LifeLink. All rights reserved. */}
          </p>

          
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;