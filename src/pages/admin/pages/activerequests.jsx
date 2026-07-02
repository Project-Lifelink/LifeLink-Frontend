import { React, useState, useEffect } from "react";
import {
  Search,
  AlertTriangle,
  Phone,
  Eye,
  CheckCircle,
  Filter,
} from "lucide-react";
import AmbientBackground from "../../../components/motion/AmbientBackground.jsx";
import Reveal from "../../../components/motion/Reveal.jsx";
import {Link} from 'react-router-dom'

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
        return "bg-danger-soft text-danger";
      case "Matched":
        return "bg-success-soft text-success";
      default:
        return "bg-info-soft text-info";
    }
  };

  return (
    <div id="activerequest" className="relative min-h-screen overflow-scroll bg-canvas p-6 md:p-8">
      <AmbientBackground />

      <div className="relative">
        {/* Header */}
        <Reveal as="div" className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-normal text-ink">
              Current Blood Requests
            </h1>
            <p className="mt-1 text-muted">
              Monitor and manage active blood requests.
            </p>
          </div>

          <Link to = "/requestblood" className="press flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-5 py-3 font-semibold text-white shadow-glow">
            + New Request
          </Link>
        </Reveal>

        {/* Filters */}
        <Reveal as="div" delay={0.06} className="mb-6 rounded-3xl border border-line bg-surface p-5 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-faint"
              />
              <input 
                type="text"
                placeholder="Search Patient..."
                className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
              />
            </div>

            <select className="rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50">
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

            <select className="rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50">
              <option>All Status</option>
              <option>Emergency</option>
              <option>Active</option>
              <option>Matched</option>
            </select>

            <button className="press flex items-center justify-center gap-2 rounded-2xl border border-line bg-canvas py-3 text-sm font-medium text-ink-soft hover:border-primary-100 hover:text-primary">
              <Filter size={18} />
              Apply Filters
            </button>
          </div>
        </Reveal>

        {/* Request Cards */}
        <div className="space-y-5">
          {requests.map((request, i) => (
            <Reveal
              as="div"
              key={request.id}
              delay={i * 0.08}
              className={`hover-lift rounded-3xl border bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card ${request.status === "Emergency"
                  ? "border-primary-200"
                  : "border-line"
                }`}
            >
              <div className="flex flex-col lg:flex-row justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-lg font-semibold text-ink">
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
                      <p className="text-muted">Request ID</p>
                      <p className="font-semibold text-ink">{request.id}</p>
                    </div>

                    <div>
                      <p className="text-muted">Blood Group</p>
                      <p className="font-semibold text-primary">
                        {request.blood_group}
                      </p>
                    </div>

                    <div>
                      <p className="text-muted">Units Required</p>
                      <p className="font-semibold text-ink">{request.quantity}</p>
                    </div>

                    <div>
                      <p className="text-muted">Name</p>
                      <p className="font-semibold text-ink">
                        {request.patient_name}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted">Phone Number</p>
                      <p className="font-semibold text-ink">
                        {request.phone}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-faint mt-4">
                    Created {request.time}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  {request.status === "Emergency" && (
                    <button className="press flex items-center gap-2 rounded-2xl bg-brand-gradient px-4 py-2 font-medium text-white shadow-glow">
                      <AlertTriangle size={18} />
                      Emergency Alert
                    </button>
                  )}

                  <Link to = "/requests" className="press flex hover:cursor-pointer items-center gap-2 rounded-2xl border border-line bg-canvas px-4 py-2 text-ink-soft hover:border-primary-100 hover:text-primary">
                    <Eye size={18} />
                    View
                  </Link>

                  <button className="press flex items-center gap-2 rounded-2xl border border-line bg-canvas px-4 py-2 text-ink-soft hover:border-primary-100 hover:text-primary">
                    <Phone size={18} />
                    Contact Donors
                  </button>

                  <button onClick={(e) => handlefullfilled(request.id,e)} className="press flex items-center gap-2 rounded-2xl bg-success px-4 py-2 font-medium text-white hover:cursor-pointer">
                    <CheckCircle size={18} />
                    Fulfilled
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
