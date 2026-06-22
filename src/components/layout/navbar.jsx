import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'


const Navbar = () => {
    return (
        <>
            <motion.div 
            initial = {{opacity: 0 , y:20}}
            whileInView = {{opacity: 1 , y: 0}}
            transition = {{duration: 0.3}}>
                <nav>
                    <div className="flex-col flex md:flex-row p-5 justify-between w-full ">
                        <div><a href = "/" className="font-bold text-2xl">Life<span className="text-red-600">Link</span></a></div>
                        <div className = "hidden md:flex flex-col md:flex-row gap-7 transition-all duration-300">
                            <HashLink className = "hover:text-[19px] hover:border-b-1 transition-all duration-200" smooth to = "/#home" >Home</HashLink>
                            <HashLink className = "hover:text-[19px] hover:border-b-1 transition-all duration-200" smooth to = "#about" >About</HashLink>
                            <HashLink className = "hover:text-[19px] hover:border-b-1 transition-all duration-200" smooth to = "/#howitworks" >How it Works</HashLink>
                            <HashLink className = "hover:text-[19px] hover:border-b-1 transition-all duration-200" smooth to = "/#features" >Features</HashLink>
                            <HashLink className = "hover:text-[19px] hover:border-b-1 transition-all duration-200" smooth to = "/hospitalregistration" >HospitalRegistration</HashLink>
                            <HashLink className = "hover:text-[19px] hover:border-b-1 transition-all duration-200" smooth to = "/hospitallogin" >HostpitalLogin </HashLink>
                        </div>
                        <div className = "flex gap-2 justify-between ">
                            <HashLink smooth to = "/login" className = "px-7 hover:bg-gray-100 border-1 rounded-xl py-3 transition-all duration-200 border-gray-200 bg-gray-200">Login</HashLink>
                            <HashLink smooth to = "/register" className = "bg-red-600 text-white hover:bg-gray-100 transition-all duration-200 hover:text-black px-7 py-3 rounded-xl">Register</HashLink>
                        </div>
                    </div>
                </nav>
            </motion.div>
        </>
    )
}

export default Navbar