import { React, useState, useEffect } from "react";
import {
    Search,
    AlertTriangle,
    Phone,
    Eye,
    CheckCircle,
    Filter,
    Plus,
    Droplet,
} from "lucide-react";
import { Link } from 'react-router-dom'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import Reveal from '../../components/motion/Reveal.jsx'
import BloodDropLoader from '../../components/motion/BloodDropLoader.jsx'

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
        <div id="activerequest" className="relative min-h-screen bg-canvas px-6 py-12 md:px-8 md:py-16">
            <AmbientBackground />
            <div className="relative mx-auto max-w-6xl">

                {/* Header */}
                <Reveal className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h1 className="font-display text-4xl font-normal text-ink md:text-5xl">
                            Current Blood <span className="text-gradient-brand italic">Requests</span>
                        </h1>
                        <p className="mt-2 text-muted">
                            Monitor and manage active blood requests.
                        </p>
                    </div>

                    <Link to="../requestblood" className="press inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-5 py-3 font-semibold text-white shadow-glow">
                        <Plus className="h-4 w-4" />
                        New Request
                    </Link>
                </Reveal>

                {/* Filters */}
                <Reveal delay={0.08} className="mb-6 rounded-3xl border border-line bg-surface p-5 shadow-soft">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
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

                        <select className="rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50">
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

                        <select className="rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink-soft transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50">
                            <option>All Status</option>
                            <option>Emergency</option>
                            <option>Active</option>
                            <option>Matched</option>
                        </select>

                        <button className="press flex items-center justify-center gap-2 rounded-2xl border border-line bg-canvas py-3 text-sm font-semibold text-ink-soft hover:border-primary-100">
                            <Filter size={18} />
                            Apply Filters
                        </button>
                    </div>
                </Reveal>

                {/* Loading state */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-surface py-20 shadow-soft">
                        <BloodDropLoader size={12} />
                        <p className="mt-4 text-sm text-muted">Loading active requests…</p>
                    </div>
                ) : null}

                {/* Request Cards */}
                <div className="space-y-5">
                    {requests.map((request, i) => (
                        <Reveal
                            as="div"
                            delay={i * 0.06}
                            key={request.id}
                            className={`hover-lift rounded-3xl border bg-surface p-6 shadow-soft hover:shadow-card ${request.status === "Emergency"
                                    ? "border-primary-200 hover:border-primary-200"
                                    : "border-line hover:border-primary-100"
                                }`}
                        >
                            <div className="flex flex-col justify-between gap-6 lg:flex-row">
                                <div>
                                    <div className="mb-3 flex items-center gap-3">
                                        <h2 className="font-display text-2xl font-normal text-ink">
                                            {request.patient}
                                        </h2>

                                        <span
                                            className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusStyle(
                                                request.status
                                            )}`}
                                        >
                                            {request.status}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
                                        <div>
                                            <p className="text-muted">Request ID</p>
                                            <p className="mt-0.5 font-semibold text-ink">{request.id}</p>
                                        </div>

                                        <div>
                                            <p className="text-muted">Blood Group</p>
                                            <p className="mt-0.5 inline-flex items-center gap-1 font-semibold text-primary">
                                                <Droplet className="h-3.5 w-3.5" />
                                                {request.blood_group}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-muted">Units Required</p>
                                            <p className="mt-0.5 font-semibold text-ink">{request.quantity}</p>
                                        </div>

                                        <div>
                                            <p className="text-muted">Name</p>
                                            <p className="mt-0.5 font-semibold text-ink">
                                                {request.patient_name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-muted">Phone Number</p>
                                            <p className="mt-0.5 font-semibold text-ink">
                                                {request.phone}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm text-faint">
                                        Created {request.time}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    {request.status === "Emergency" && (
                                        <button className="press flex items-center gap-2 rounded-2xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow">
                                            <AlertTriangle size={18} />
                                            Emergency Alert
                                        </button>
                                    )}

                                    <button className="press flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft hover:border-primary-100">
                                        <Eye size={18} />
                                        View
                                    </button>

                                    <button className="press flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft hover:border-primary-100">
                                        <Phone size={18} />
                                        Contact Donors
                                    </button>

                                    <button className="press flex items-center gap-2 rounded-2xl bg-success px-4 py-2 text-sm font-semibold text-white">
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
