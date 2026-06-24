import React from "react";
import {
    Search,
    Droplets,
    ShieldCheck,
    Bell,
    Heart,
    MessageCircle,
    Users,
    MapPin,
    MoreHorizontal,
} from "lucide-react";
import feature from '../../assets/images/features.png'
import { motion } from 'framer-motion'

const Features = () => {
    const features = [
        {
            icon: <Search size={32} />,
            title: "Find Donors Near You",
            desc: "Search and connect with verified blood donors in your area instantly.",
        },
        {
            icon: <Droplets size={32} />,
            title: "Request Blood",
            desc: "Send blood requests quickly and get help when you need it most.",
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Verified & Trusted",
            desc: "All donors are verified for your safety and peace of mind.",
        }
        //,
        // {
        //   icon: <Bell size={32} />,
        //   title: "Instant Notifications",
        //   desc: "Get real-time alerts for requests, donations, and important updates.",
        // },
        // {
        //   icon: <Heart size={32} />,
        //   title: "Donation History",
        //   desc: "Track your donations and view your impact in saving lives.",
        // },
    ];

    const stats = [
        {
            icon: <Users size={32} />,
            value: "10+",
            title: "Active Donors",
            desc: "Generous people ready to save lives.",
        },
        {
            icon: <Droplets size={32} />,
            value: "0",
            title: "Blood Requests",
            desc: "Requests fulfilled successfully.",
        },
        {
            icon: <ShieldCheck size={32} />,
            value: "100%",
            title: "Verified Users",
            desc: "Ensuring a safe and trusted community.",
        },
        {
            icon: <Bell size={32} />,
            value: "24/7",
            title: "Support",
            desc: "We're here to help you anytime.",
        },
        {
            icon: <Heart size={32} />,
            value: "Countless",
            title: "Lives Saved",
            desc: "Because of people like you.",
        },
    ];

    return (
        <section className="bg-[#f8f8f8] py-20 px-6" id="features">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div className="text-center mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    <p className="text-red-600 font-semibold tracking-widest uppercase">
                        Features
                    </p>

                    <div className="w-14 h-1 bg-red-600 mx-auto mt-2 rounded-full"></div>

                    <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Powerful Features, <br />
                        Stronger{" "}
                        <span className="text-red-600">
                            Connections
                        </span>
                    </h2>

                    <p className="text-gray-500 text-lg mt-0 max-w-3xl mx-auto">
                        LifeLink is packed with smart features to make blood donation
                        and requests fast, easy, and reliable for everyone.
                    </p>
                </motion.div>

                {/* Main Section */}
                <div className="grid lg:grid-cols-2 gap-15 items-center"
                // initial = {{opacity: 0, y: 30}}
                // whileInView={{opacitiy: 1, y: 0}}
                // transition = {{duration: 0.5}}
                >
                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-6"
                    // initial={{ opacity: 0, y: 30 }}
                    // whileInView={{ opacitiy: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    >
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition duration-300"
                            >
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div className="relative hidden md:flex justify-center  items-center"
                        initial={{ y: 30, opacitiy: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >

                        <motion.img src={feature} alt="" className="h-100 rounded-full "

                        />

                        {/* Small Icons */}
                        <div className="absolute top-12 left-16 bg-white  w-24 md:h-24 h-0 rounded-full shadow flex items-center justify-center text-red-600">
                            <Users size={36} />
                        </div>

                        <div className="absolute top-12 right-16 bg-white w-24 md:h-24 h-0 rounded-full shadow flex items-center justify-center text-red-600">
                            <ShieldCheck size={36} />
                        </div>

                        <div className="absolute bottom-12 left-16 bg-white w-24 h-0 md:h-24 rounded-full shadow flex items-center justify-center text-red-600">
                            <MapPin size={36} />
                        </div>

                        <div className="absolute bottom-12 right-16 bg-white w-24 h-0 md:h-24 rounded-full shadow flex items-center justify-center text-red-600">
                            <MoreHorizontal size={36} />
                        </div>

                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div className="bg-white rounded-3xl shadow-sm mt-20 p-8"
                    initial={{ y: 30, opacitiy: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}>
                    <div className="grid md:grid-cols-5 gap-8">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 md:border-r last:border-r-0 border-gray-200 pr-4"
                            >
                                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 shrink-0">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-4xl font-bold text-red-600">
                                        {item.value}
                                    </h3>

                                    <p className="font-semibold text-lg mt-1">
                                        {item.title}
                                    </p>

                                    <p className="text-gray-500 text-sm mt-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Features;