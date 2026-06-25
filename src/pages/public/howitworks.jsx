import React from "react";
import { motion } from 'framer-motion'


const steps = [
  {
    id: "01",
    title: "Sign Up",
    desc: "Create your account as a donor or a requester.",
    icon: "user",
  },
  {
    id: "02",
    title: "Search / Request",
    desc: "Search for blood donors nearby or send a blood request.",
    icon: "location",
  },
  {
    id: "03",
    title: "Connect",
    desc: "We connect you with verified donors or requesters.",
    icon: "users",
  },
  {
    id: "04",
    title: "Donate / Help",
    desc: "Donate blood and help save precious lives.",
    icon: "drop",
  },
  {
    id: "05",
    title: "Stay Connected",
    desc: "Get updates, express gratitude and stay connected.",
    icon: "heart",
  },
];

const features = [
  {
    title: "Verified & Safe",
    desc: "All donors are verified to ensure your safety.",
    icon: "shield",
  },
  {
    title: "Quick & Easy",
    desc: "Find or provide help in just a few clicks.",
    icon: "bolt",
  },
  {
    title: "Secure & Private",
    desc: "Your data is protected with top security.",
    icon: "lock",
  },
  {
    title: "Make an Impact",
    desc: "Every drop you give can save a life.",
    icon: "heart",
  },
];

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "user":
      return (
        <svg {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );

    case "location":
      return (
        <svg {...common}>
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "drop":
      return (
        <svg {...common}>
          <path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z" />
        </svg>
      );

    case "heart":
      return (
        <svg {...common}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );

    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );

    default:
      return null;
  }
}

export default function HowItWorks() {
  return (
    <section id="howitworks" className="w-full bg-white py-16 px-6 md:px-20">
      {/* Header */}
      <motion.div className="text-center mb-14"
      initial = {{opaicty:0 , y: 30}}
      whileInView = {{opacity: 1 , y: 0}}
      transition = {{duration: 0.5}}>
        <p className="text-red-500 font-semibold tracking-widest">
          HOW IT WORKS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Saving Lives is <span className="text-red-500">Simple</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          LifeLink makes it easy to connect donors with those in need.
          Just a few simple steps can make a big difference.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div className="relative grid grid-cols-2 md:grid-cols-5  gap-8 text-center"
      initial = {{opacitiy: 0, y: 30}}
      whileInView = {{opacity: 1, y: 0}}
      transition = {{duration: 0.5}}>
        {steps.map((step, idx) => (
          <div key={step.id} className="relative min-w-55">
            {/* connector line */}
            {idx !== steps.length - 1 && (
              <div className="hidden md:block absolute top-10 right-[-50%] w-full h-[2px] bg-gray-200" />
            )}

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-500 font-bold">
                {step.id}
              </div>

              <div className="mt-6 w-20 h-20 rounded-xl bg-white shadow-md flex items-center justify-center text-red-500">
                <Icon name={step.icon} />
              </div>

              <h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Features */}
      <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50 p-8 rounded-2xl"
      initial = {{y: 20, opacity: 0}}
      whileInView = {{y: 0 , opacity: 1}}
      transition = {{duration: 0.5}}>
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="text-red-500">
              <Icon name={f.icon} />
            </div>
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}