import React, { useState, useEffect } from "react";
import {
    LayoutDashboard,
    Droplets,
    ClipboardList,
    History,
    ShieldCheck,
    Bell,
    CircleHelp,
    ChevronLeft,
    ChevronRight,
    User2,
    Settings,
} from "lucide-react";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'


const HospitalSidebar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState("Dashboard");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    

    useEffect(() => {
        // if(!user) navigate("/hospitallogin");
        // getrequest();
    }, [])

    useEffect(() => {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");

        if (id && token) {
            // getrequest(id);

        }
        else {
            navigate('/hospitallogin');
        }
    }, []);

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, link: "dashboard" },
        { name: "Raise Blood Request", icon: Droplets, link: "requestblood" },
        { name: "Active Requests", icon: ClipboardList, badge: 0, link: "activerequest" },
        { name: "Request History", icon: History, link: "requesthistory" },
        { name: "Donor Verification", icon: ShieldCheck, link: "donorverification" },
        { name: "Help & Support", icon: CircleHelp, link: "helpandsupport" },
        { name: "Settings", icon: Settings, link: "settings" },
    ];

    const NavItem = ({ item, mobile = false }) => {
        const Icon = item.icon;
        const isActive = active === item.name;
        return (
            <Link
                to={item.link}
                onClick={() => setActive(item.name)}
                title={item.name}
                className={`press group flex items-center gap-3 rounded-2xl px-3.5 py-3 transition-colors ${
                    mobile ? 'shrink-0' : 'w-full'
                } ${
                    isActive
                        ? 'bg-primary text-white shadow-glow'
                        : 'text-ink-soft hover:bg-subtle hover:text-ink'
                }`}
            >
                <Icon size={20} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                {(!collapsed || mobile) && (
                    <span className="whitespace-nowrap text-sm font-medium">{item.name}</span>
                )}
            </Link>
        );
    };

    return (
        <div className="flex min-h-screen flex-col bg-canvas md:flex-row">

            {/* Mobile top bar */}
            <header className="glass sticky top-0 z-30 flex flex-col gap-3 border-b border-line px-4 py-3 md:hidden">
                <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                        <Droplets className="h-5 w-5" fill="currentColor" />
                    </span>
                    <h1 className="text-lg font-semibold text-ink">
                        Life<span className="text-primary">Link</span>
                        <span className="ml-1.5 text-xs font-medium text-muted">Hospital</span>
                    </h1>
                </div>
                <nav className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                    {menuItems.map((item) => (
                        <NavItem key={item.name} item={item} mobile />
                    ))}
                </nav>
            </header>

            {/* Desktop sidebar */}
            <aside
                className={`sticky top-0 z-30 hidden h-screen shrink-0 flex-col border-r border-line bg-surface transition-all duration-300 md:flex ${
                    collapsed ? 'w-20' : 'w-64'
                }`}
            >
                {/* Logo */}
                <div className="flex h-20 items-center justify-between border-b border-line px-4">
                    {!collapsed && (
                        <Link to="dashboard" className="flex items-center gap-2.5">
                            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                                <Droplets className="h-5 w-5" fill="currentColor" />
                            </span>
                            <h1 className="text-lg font-semibold text-ink">
                                Life<span className="text-primary">Link</span>
                            </h1>
                        </Link>
                    )}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        aria-label="Toggle sidebar"
                        className="press flex h-9 w-9 items-center justify-center rounded-xl border border-line text-ink-soft hover:bg-subtle"
                    >
                        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="scrollbar-none flex-1 space-y-1 overflow-y-auto px-3 py-4">
                    {menuItems.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <NavItem item={item} />
                        </motion.div>
                    ))}
                </nav>

                {/* Hospital Card */}
                {!collapsed && (
                    <div className="border-t border-line p-4">
                        <div className="flex items-center gap-3 rounded-2xl border border-line bg-canvas p-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                                <ShieldCheck className="h-5 w-5" />
                            </span>
                            <div>
                                <h3 className="text-sm font-semibold text-ink">Hospital Name</h3>
                                <span className="mt-1 inline-flex items-center rounded-full bg-success-soft px-2 py-0.5 text-xs font-medium text-success">
                                    Verified Hospital
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </aside>

            {/* Main content */}
            <main className="min-w-0 flex-1">
                <Outlet />
            </main>
        </div>
    );
};

export default HospitalSidebar;
