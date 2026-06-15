import React, { useState } from 'react';
import {
    User,
    Mail,
    Phone,
    Heart,
    Droplet,
    FileText,
    AlertCircle,
    ArrowRight,
    ChevronDown,
    Activity
} from 'lucide-react';
import { motion } from 'framer-motion'
import { button } from 'framer-motion/client';

export default function requestblood() {
    const [urgency, setUrgency] = useState('high');
    const [critical, setCritical] = useState(false);


    const urgencyLevels = [
        { id: 'critical', label: 'Critical', color: 'border-red-500 bg-red-50 text-red-700 ring-red-500/20' },
        { id: 'high', label: 'High', color: 'border-orange-500 bg-orange-50 text-orange-700 ring-orange-500/20' },
        { id: 'medium', label: 'Medium', color: 'border-amber-500 bg-amber-50 text-amber-700 ring-amber-500/20' },
        { id: 'low', label: 'Low', color: 'border-blue-500 bg-blue-50 text-blue-700 ring-blue-500/20' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans" id='requestblood'>
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">

                {/* LEFT SIDE: Information & Instructions */}
                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-red-50/20">

                    {/* Logo */}
                    <motion.div className="flex items-center gap-2 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <div className="bg-red-600 text-white p-1.5 rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 fill-current" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">LifeLink</span>
                    </motion.div>

                    {/* Typography */}
                    <motion.div className="space-y-4 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            Submit a <br />
                            <span className="text-red-600">Blood Request</span>
                        </h1>
                        <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-sm">
                            Provide the patient's details below to alert our verified donor network. We will connect you with matches as quickly as possible.
                        </p>
                    </motion.div>

                    {/* Decorative Wave/Heartbeat placeholder layout spacing */}
                    <div className="h-40 my-4 flex items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <div className="w-full h-0.5 bg-red-500 relative">
                                <div className="absolute -top-2 left-1/3 -translate-x-1/2 bg-red-500 w-4 h-4 rotate-45"></div>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500">
                                    <Activity className="w-12 h-12 stroke-[1.5]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Guidelines / Help Card */}
                    <motion.div className="bg-red-50/50 border border-red-100/50 rounded-2xl p-5 space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>

                        <div className="flex items-start gap-3">
                            <div className="bg-red-100 p-2 rounded-xl text-red-600 shrink-0">
                                <FileText className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900">Accurate Information</h4>
                                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">Please ensure contact details are reachable to avoid delays in coordination.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* RIGHT SIDE: Blood Request Form */}
                <motion.div className="w-full md:w-1/2 p-8 lg:p-12 md:border-l border-gray-100 flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Patient & Requirement Details</h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Fill out the form to request blood
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Patient Name */}
                            {
                                (!critical)?

                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Patient Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Enter patient's name"
                                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                                :<p></p>
                            }

                            {/* Guardian Name */}
                            {!(critical) ?
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Guardian / Attendant Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Enter guardian's name"
                                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                                : <p></p>
                            }


                            {/* Contact Email */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Contact Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="email"
                                        placeholder="Enter contact email address"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="tel"
                                        placeholder="Enter active phone number"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Blood Group Dropdown */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Required Blood Group</label>
                                <div className="relative">
                                    <Droplet className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <select
                                        defaultValue=""
                                        className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors text-gray-700"
                                    >
                                        <option value="" disabled hidden>Select blood group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                                </div>
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1.5">Quantity (Units / Bags)</label>
                                <div className="relative">
                                    <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="number"
                                        min="1"
                                        placeholder="e.g. 2"
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-2">Urgency Level</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                {urgencyLevels.map((level) => {
                                    const isSelected = urgency === level.id;
                                    return (
                                        <button
                                            key={level.id}
                                            type="button"
                                            onClick={() => { setUrgency(level.id); if(level.id === 'critical')setCritical(true) 
                                                else{setCritical(false)}
                                             }}
                                            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${isSelected
                                                ? `${level.color} ring-2 border-transparent shadow-sm`
                                                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {level.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-red-50/60 border border-red-100 rounded-2xl p-3.5 flex items-start gap-3 mt-2">
                            <div className="bg-red-500 text-white p-1 rounded-lg shrink-0 mt-0.5">
                                <Heart className="w-3.5 h-3.5 fill-current" />
                            </div>
                            <div>
                                <h5 className="text-xs font-bold text-gray-900 leading-tight">Patient data verification</h5>
                                <p className="text-[11px] text-gray-500 leading-normal mt-0.5">By submitting, you authorize LifeLink to share these medical metrics with willing regional donors.</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-red-600/10 active:scale-[0.99] transform pt-4"
                        >
                            <span>Make Blood Request</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>

                    </form>
                </motion.div>

            </div>
        </div>
    );
}