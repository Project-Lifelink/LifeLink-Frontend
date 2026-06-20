import React, { useState } from "react";
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
} from "lucide-react";

const HospitalSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Raise Blood Request",
      icon: Droplets,
    },
    {
      name: "Active Requests",
      icon: ClipboardList,
      badge: 6,
    },
    {
      name: "Request History",
      icon: History,
    },
    {
      name: "Donor Verification",
      icon: ShieldCheck,
    },
    {
      name: "Notifications",
      icon: Bell,
      badge: 8,
    },
    {
      name: "Blood Stock",
      icon: Package,
    },
    {
      name: "Help & Support",
      icon: CircleHelp,
    },
  ];

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Logo */}
      <div className="h-20 px-5 flex items-center justify-between border-b mb-1">
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
      <div className="flex-1 overflow-y-auto px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <button
                  onClick={() => setActive(item.name)}
                  className={`w-full flex items-center justify-between hover:cursor-pointer rounded-xl px-4 py-3 transition-all duration-200 ${
                    active === item.name
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

                  {!collapsed && item.badge && (
                    <span
                      className={`min-w-[22px] h-[22px] flex items-center justify-center text-xs rounded-full ${
                        active === item.name
                          ? "bg-white text-red-600"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Hospital Card */}
      {!collapsed && (
        <div className="px-4 py-4">
          <div className="rounded-2xl border bg-gray-50 p-4">
            <div className="flex gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
                alt="hospital"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  City Care Hospital
                </h3>

                <p className="text-sm text-gray-500">
                  Jaipur, Rajasthan
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
  );
};

export default HospitalSidebar;