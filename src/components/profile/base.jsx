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
import Finddonors from './finddonors.jsx'
import Mydonations from './mydonations.jsx'
import Notifications from './notifications.jsx'
import RequestBlood from './requestblood.jsx'


const Base = () => {
    const [hide, setHide] = useState(false);
    return (
        <>
            <div className = "flex gap-20">

                <div className="ml-8 mt-5 stick">
                    {hide ? <button onClick={() => { setHide(false) }} className=" absolute hover:cursor-pointer">{">>>"}</button> : <div className="flex flex-col gap-10 min-w-2/7 border-r-1 border-gray-300">
                        <div>
                            <a href ="/profile" className="text-4xl font-bold">
                                Life<span className="text-red-700">Link</span>
                            </a>
                            <button onClick={() => { setHide(true) }} className="hover:cursor-pointer absolute">{"<<<"}</button>

                        </div>
                        <div className="flex flex-col gap-5 w-0 md:w-50">
                            <Home className="absolute text-gray-600 top-30 left-10" />
                            <HashLink smooth to = "#dashboard" className="pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Dashboard</HashLink>
                            <Search className="absolute text-gray-600 top-51 left-10" />
                            <HashLink smooth to = "#finddonors" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Find Donors</HashLink>
                            <Droplet className="absolute text-gray-600 top-71.5 left-10" />
                            <HashLink smooth to = "#requestblood" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Request Blood</HashLink>
                            <MessageSquareCheck className="absolute text-gray-600 top-93 left-10" />
                            <HashLink smooth to = "#mydonations" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">My Donations</HashLink>
                            <Bell className="absolute text-gray-600 top-114 left-10" />
                            <HashLink smooth to = "#notifications" className=" pl-12 py-5 text-gray-600 hover:bg-gray-200 active:bg-red-400 active:text-white rounded-xl transition-all">Notifications</HashLink>
                        </div>
                        <div></div>
                    </div>}

                </div>
                <div className = "h-screen overflow-scroll" >
                    <Dashboard className = "w-6/7" />
                    <Finddonors />
                    <RequestBlood />
                    <Mydonations />
                    <Notifications />
                </div>
            </div>
        </>
    )
}

export default Base