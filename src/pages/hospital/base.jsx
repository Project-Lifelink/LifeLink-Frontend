import React, { useState, useEffect } from "react";
import {
    LayoutDashboard,
    Droplets,
    ClipboardList,
    History,
    Users,
    ShieldCheck,
    MessageSquare,
    Bell,
    Package,
    BarChart3,
    Building2,
    UserCog,
    Settings,
    CircleHelp,
    ChevronLeft,
    ChevronRight,
    Headset,
    User2,
} from "lucide-react";
import Dashboard from './pages/dashboard.jsx'
import ActiveRequest from './pages/activerequests.jsx'
import { Link } from 'react-router-dom'
import BloodRequest from './pages/bloodrequest.jsx';
import Donorverification from './pages/donorverification.jsx';
import HelpandSupport from "./pages/helpsupport.jsx";
import Notification from "./pages/notification.jsx";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Outlet } from "react-router-dom";

import { useSelector } from 'react-redux';


const HospitalSidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState("Dashboard");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        // if(!user) navigate("/hospitallogin");
        getrequest();
    }, [])

    async function getrequest(id, token) {
        try {
            const res = await fetch(`/api/v1/hospitals/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(user => {
                    dispatch(loginSuccess({
                        user,
                    }));
                });
            data = await res.json();
            console.log("get request made")
            console.log(data)



        } catch (error) {
            console.log("error occured in fetching", error);
        }

    }

    useEffect(() => {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");

        if (id && token) {
            getrequest(id);

        }
        else {
            navigate('/hospitallogin');
        }
    }, []);

    const menuItems = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            link: "dashboard",
        },
        {
            name: "Raise Blood Request",
            icon: Droplets,
            link: "requestblood",
        },
        {
            name: "Active Requests",
            icon: ClipboardList,
            badge: 0,
            link: "activerequest",
        },
        {
            name: "Request History",
            icon: History,
            link: "requesthistory",
        },
        {
            name: "Donor Verification",
            icon: ShieldCheck,
            link: "donorverification"
        },
        {
            name: "Notifications",
            icon: Bell,
            badge: 0,
            link: "notifications"
        },
        {
            name: "Help & Support",
            icon: CircleHelp,
            link: "helpandsupport"
        },

        {
            name: "Community",
            icon: User2,
            link: "community"
        },
    ];

    return (
        <div className="flex h-screen">

            <aside
                className={`h-screen bg-white  border-r  flex-row border-gray-200 w-20 flex md:flex-col transition-all duration-300 ${collapsed ? "w-20" : "w-65"


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

                                        {/* {!collapsed && item.badge && (
                    <span
                      className={`min-w-[22px] h-[22px] flex items-center justify-center text-xs rounded-full ${
                        active === item.name
                        ? "bg-white text-red-600"
                          : "bg-red-600 text-white"
                      }`}
                      >
                      {item.badge}
                      </span>
                  )} */}
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
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
                                    alt="hospital"
                                    className="w-14 h-14 object-contain"
                                />

                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        Hospital Name
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        UP
                                    </p>

                                    <span className="inline-flex items-center mt-2 rounded-full bg-red-50 text-red-600 text-xs font-medium px-2 py-1">
                                        Verified Hospital
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </aside>
            <div className="h-screen flex-1">
                <Outlet />
                {/* <Dashboard />
                <BloodRequest />
                <ActiveRequest /> */}
            </div>

        </div>
    );
};

export default HospitalSidebar;