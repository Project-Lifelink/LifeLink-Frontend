import React from 'react'
import {
    Home,
    Search,
    Droplet,
    MessageSquareCheck,
    Bell,
    User2,
    LayoutDashboard,
    ChevronLeft, ChevronRight, Droplets, ClipboardList, History, ShieldCheck, Package, CircleHelp
} from 'lucide-react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { button } from 'framer-motion/client'
import { Outlet } from 'react-router-dom'
import Dashboard from './dashboard.jsx'
import Mydonations from './mydonations.jsx'
import Notifications from './notifications.jsx'
import RequestBlood from './requestblood.jsx'
import featureimage from '../../assets/images/dashboardimage.png'
import ExploreHospitals from './explorehospitals.jsx'
import Community from './community.jsx'
import { motion } from 'framer-motion'



const Base = () => {

    const [hide, setHide] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState("Dashboard");

    const menuItems = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            link: "/profile/dashboard",
        },
        {
            name: "Raise Blood Request",
            icon: Droplets,
            link: "/profile/requestblood",
        },
        {
            name: "Active Requests",
            icon: ClipboardList,
            badge: 0,
            link: "/profile/activerequests",
        },
        {
            name: "Notifications",
            icon: Bell,
            badge: 0,
            link: "/profile/notifications"
        },
        {
            name: "Help & Support",
            icon: CircleHelp,
            link: "/profile/helpandsupport"
        },
        {
            name: "Community",
            icon: User2,
            link: "/profile/community"
        }
    ];


    return (
        <>
            <div className="flex gap-0">

                <aside
                    className={`h-screen bg-white  border-r  flex-row border-gray-200 flex md:flex-col transition-all duration-300 ${collapsed ? "w-20" : "w-62"


                        }`}
                >
                    {/* Logo */}
                    <div className=" hidden md:h-20 px-5 md:flex items-center justify-between border-b mb-1">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-600 p-2 rounded-lg">
                                <Droplets className="w-5 h-5 text-white fill-white" />
                            </div>

                            {!collapsed && (
                                <h1 className="text-2xl font-bold text-gray-900">
                                    <span className="text-red-600">Life</span>Link
                                </h1>
                            )}
                        </div>

                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="p-1 rounded hover:bg-gray-100"
                        >
                            {collapsed ? (
                                <ChevronRight size={18} />
                            ) : (
                                <ChevronLeft size={18} />
                            )}
                        </button>
                    </div>



                    {/* Navigation */}
                    <div className="flex-1 px-3">
                        <ul className="space-y-1">
                            {menuItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <li key={item.name}>
                                        <Link to={item.link}
                                            onClick={() => setActive(item.name)}
                                            className={`w-full flex items-center justify-between hover:cursor-pointer rounded-xl px-4 py-3 transition-all duration-200 ${active === item.name
                                                ? "bg-red-600 text-white shadow-md"
                                                : "text-gray-600 hover:bg-red-50 hover:text-red-600"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon size={20} />

                                                {!collapsed && (
                                                    <span className="font-medium text-sm">
                                                        {item.name}
                                                    </span>
                                                )}
                                            </div>

                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Hospital Card */}
                    {!collapsed && (
                        <div className="px-4 py-4 hidden md:flex">
                            <div className="rounded-2xl shadow-2xl bg-gray-50 p-4">
                                <div className="flex gap-3">
                                    <img src={featureimage} alt="" />
                                </div>
                            </div>
                        </div>
                    )}
        </aside >
            <div className="h-screen flex-1" >
                <Outlet />
            </div>
            </div >
        </>
    )
}

export default Base