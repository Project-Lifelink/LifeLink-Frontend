import React from "react";
import { motion } from 'framer-motion'
import { Droplet, MapPin, Hospital, Users, CalendarDays, ArrowRight, Phone } from "lucide-react";
import Reveal from './motion/Reveal.jsx'
import AmbientBackground from './motion/AmbientBackground.jsx'
import { useState, useEffect } from "react";

const BloodRequests = () => {
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
    return (
        <div className="relative min-h-screen overflow-hidden bg-canvas px-5 py-20 md:px-8 md:py-24">
            <AmbientBackground />
            <div className="relative mx-auto max-w-7xl">

                <Reveal className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Active Requests
                    </span>
                    <motion.h1 className="mt-4 font-display text-5xl font-normal leading-tight text-ink md:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        Blood <span className="text-gradient-brand italic">Requests</span>
                    </motion.h1>

                    <motion.p className="mt-4 text-lg leading-relaxed text-muted"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        Help save lives by responding to active blood requests.
                    </motion.p>
                </Reveal>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {requests.map((request, i) => (
                        <Reveal as="div" key={request.id} delay={i * 0.08}>
                            <motion.div
                                className="hover-lift group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-ink">
                                        {request.patient_name}
                                    </h2>

                                    <span className="flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary">
                                        <Droplet className="h-3.5 w-3.5 fill-current" />
                                        {request.blood_group}
                                    </span>
                                </div>

                                <div className="space-y-3 text-sm text-ink-soft">
                                    <p className="flex items-center gap-2.5">
                                        <Droplet className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Units Required:</span>
                                        <span className="font-semibold text-ink">{request.quantity}</span>
                                    </p>

                                    

                                    <p className="flex items-center gap-2.5">
                                        <Phone className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Phone:</span>
                                        <span className="font-semibold text-ink">{request.phone}</span>
                                    </p>
                                    <p className="flex items-center gap-2.5">
                                        <Phone className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Additional Phone:</span>
                                        <span className="font-semibold text-ink">{request.additional_phone}</span>
                                    </p>
                                    <p className="flex items-center gap-2.5">
                                        <Users className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Gender:</span>
                                        <span className="font-semibold text-ink">{request.sex}</span>
                                    </p>
                                    <p className="flex items-center gap-2.5">
                                        <Hospital className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Hospital:</span>
                                        <span className="font-semibold text-ink">{request.hospital}</span>
                                    </p>

                                    <p className="flex items-center gap-2.5">
                                        <MapPin className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Location:</span>
                                        <span className="font-semibold text-ink">{request.location}</span>
                                    </p>

                                    <p className="flex items-center gap-2.5">
                                        <CalendarDays className="h-4 w-4 text-faint" />
                                        <span className="font-medium text-muted">Request Date:</span>
                                        <span className="font-semibold text-ink">{request.date}</span>
                                    </p>

                                </div>

                                <div className="mt-6 flex gap-3 pt-2">
                                    <button className="press flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-brand-gradient py-2.5 text-sm font-semibold text-white shadow-glow">
                                        Donate Now
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BloodRequests;
