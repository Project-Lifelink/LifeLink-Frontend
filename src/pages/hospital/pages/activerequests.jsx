import React from "react";
import {
  Search,
  AlertTriangle,
  Phone,
  Eye,
  CheckCircle,
  Filter,
} from "lucide-react";

export default function BloodRequestsPage() {
  const requests = [
    {
      id: "#BL-1001",
      patient: "Rahul Sharma",
      bloodGroup: "O-",
      units: 3,
      hospitalWing: "ICU",
      status: "Emergency",
      time: "10 mins ago",
    },
    {
      id: "#BL-1002",
      patient: "Priya Singh",
      bloodGroup: "A+",
      units: 2,
      hospitalWing: "Surgery",
      status: "Active",
      time: "25 mins ago",
    },
    {
      id: "#BL-1003",
      patient: "Amit Patel",
      bloodGroup: "B+",
      units: 4,
      hospitalWing: "Trauma",
      status: "Matched",
      time: "1 hour ago",
    },
    {
      id: "#BL-1004",
      patient: "Neha Verma",
      bloodGroup: "AB-",
      units: 1,
      hospitalWing: "Emergency",
      status: "Active",
      time: "2 hours ago",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Emergency":
        return "bg-red-100 text-red-700";
      case "Matched":
        return "bg-green-100 text-green-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div id="activerequest" className="min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Current Blood Requests
          </h1>
          <p className="text-slate-500 mt-1">
            Monitor and manage active blood requests.
          </p>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-medium">
          + New Request
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border p-5 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search Patient..."
              className="w-full border rounded-lg pl-10 py-3 outline-none"
            />
          </div>

          <select className="border rounded-lg px-3 py-3">
            <option>All Blood Groups</option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <select className="border rounded-lg px-3 py-3">
            <option>All Status</option>
            <option>Emergency</option>
            <option>Active</option>
            <option>Matched</option>
          </select>

          <button className="flex justify-center items-center gap-2 border rounded-lg">
            <Filter size={18} />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Request Cards */}
      <div className="space-y-5">
        {requests.map((request) => (
          <div
            key={request.id}
            className={`bg-white rounded-2xl border p-6 shadow-sm ${
              request.status === "Emergency"
                ? "border-red-400"
                : ""
            }`}
          >
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-bold text-lg">
                    {request.patient}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      request.status
                    )}`}
                  >
                    {request.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <p className="text-slate-500">Request ID</p>
                    <p className="font-semibold">{request.id}</p>
                  </div>

                  <div>
                    <p className="text-slate-500">Blood Group</p>
                    <p className="font-semibold text-red-600">
                      {request.bloodGroup}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Units Required</p>
                    <p className="font-semibold">{request.units}</p>
                  </div>

                  <div>
                    <p className="text-slate-500">Department</p>
                    <p className="font-semibold">
                      {request.hospitalWing}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mt-4">
                  Created {request.time}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                {request.status === "Emergency" && (
                  <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg">
                    <AlertTriangle size={18} />
                    Emergency Alert
                  </button>
                )}

                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
                  <Eye size={18} />
                  View
                </button>

                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
                  <Phone size={18} />
                  Contact Donors
                </button>

                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg">
                  <CheckCircle size={18} />
                  Fulfilled
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}