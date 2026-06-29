import { React, useState, useEffect } from "react";
import {
  Search,
  AlertTriangle,
  Phone,
  Eye,
  CheckCircle,
  Filter,
} from "lucide-react";

export default function BloodRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveRequests = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/blood-requests/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }

        const data = await response.json();

        // if backend is sending array formate directly 
        setRequests(data);
        console.log(data);



      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveRequests();
  }, []);


   async function handlefullfilled ( requestId , e ){
    e.preventDefault()
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/blood-requests/${requestId}`,
        {
          method: "DELETE",
          credentials: "include", // if using cookies
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      alert("blood request delete successfully")
      fetchActiveRequests();
    } catch (error) {
      console.error(error.message);
    }
  }

  function handleview (e,requestId){
    e.preventDefault()

  }

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
    <div id="activerequest" className="min-h-screen overflow-scroll bg-slate-50 p-6">
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
            className={`bg-white rounded-2xl border p-6 shadow-sm ${request.status === "Emergency"
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
                      {request.blood_group}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-500">Units Required</p>
                    <p className="font-semibold">{request.quantity}</p>
                  </div>

                  <div>
                    <p className="text-slate-500">Name</p>
                    <p className="font-semibold">
                      {request.patient_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Phone Number</p>
                    <p className="font-semibold">
                      {request.phone}
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

                <button onClick={(e) => handleview(e,request.id)} className="flex hover:cursor-pointer items-center gap-2 border px-4 py-2 rounded-lg">
                  <Eye size={18} />
                  View
                </button>

                <button className="flex items-center gap-2 border px-4 py-2 rounded-lg">
                  <Phone size={18} />
                  Contact Donors
                </button>

                <button onClick={(e) => handlefullfilled(request.id,e)} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 hover:cursor-pointer rounded-lg">
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