import React from 'react'
import {
    Home,
    Search,
    Droplet,
    MessageSquareCheck,
    Bell
} from 'lucide-react'
// import features from '../'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { button } from 'framer-motion/client'
import Dashboard from './dashboard.jsx'
import Mydonations from './mydonations.jsx'
import Notifications from './notifications.jsx'
import RequestBlood from './requestblood.jsx'
import featureimage from '../../assets/images/dashboardimage.png'
import ExploreHospitals from './explorehospitals.jsx'
import { motion } from 'framer-motion'


const Base = () => {

    const [hide, setHide] = useState(false);
    return (
        <>
            <div className="flex gap-4">

                <motion.div className="ml-8 mt-5 hidden md:block md:stick"
                initial = {{opacity: 0}}
                whileInView = {{opacity: 1}}
                transition={{duration:0.5}}>
                    {hide ? <button onClick={() => { setHide(false) }} className=" absolute hover:cursor-pointer">{">>>"}</button> : <div className="flex flex-col gap-10 min-w-2/7 border-r-1 border-gray-300">
                        <div>
                            <a href="/profile" className="text-4xl font-bold">
                                Life<span className="text-red-700">Link</span>
                            </a>
                            <button onClick={() => { setHide(true) }} className="hover:cursor-pointer absolute">{"<<<"}</button>

                    x    </div>
                        <div className="flex flex-col gap-1 w-0 md:w-50">
                            <Home className="absolute text-gray-600 top-30 left-10" />
                            <HashLink smooth to="#dashboard" className="pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Dashboard</HashLink>
                            <Search className="absolute text-gray-600 top-47 left-10" />
                            <HashLink smooth to="#explorehospitals" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Explore Hospitals</HashLink>
                            <Droplet className="absolute text-gray-600 top-64 ml-2 ft-10" />
                            <HashLink smooth to="#requestblood" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Request Blood</HashLink>
                            <MessageSquareCheck className="absolute text-gray-600 top-81.5 left-10" />
                            <HashLink smooth to="#mydonations" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">My Donations</HashLink>
                            <Bell className="absolute text-gray-600 top-98.5 left-10" />
                            <HashLink smooth to="#notifications" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Notifications</HashLink>
                        </div>
                        <div className = "flex flex-col">
                            <div>
                                <img src={featureimage} className="h-40" alt="" />
                            </div>
                            <div>
                                <h1 className = "text-lg font-bold">Every Drop Counts</h1>
                                <p className = "text-xs">Thank You for being a live saver</p>
                            </div>
                        </div>
                    </div>}

                </motion.div>
                <div className="h-screen overflow-hidden" >
                    <Dashboard className="w-6/7" />
                    <ExploreHospitals />
                    <RequestBlood />
                    <Mydonations />
                    <Notifications />
                </div>
            </div >
        </>
    )
}

export default Base