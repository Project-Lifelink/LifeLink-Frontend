import React from 'react'
import lifelinkimage from '../../assets/images/lifelink.png'
import { HashLink } from 'react-router-hash-link'
import { User } from 'lucide-react'
import { UsersRound } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Verified } from 'lucide-react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import About from './about.jsx'
import Howitworks from './howitworks.jsx'
import Features from './features.jsx'
import Donateblood from './donateblood.jsx'
import Requestblood from './requestblood.jsx'
import Navbar from '../../components/layout/navbar.jsx'
import Footer from '../../components/layout/footer.jsx'
import BloodRequests from '../../components/requests.jsx'
// import Footer from '../components/footer.jsx'

const home = () => {
    return (
        <>
            <Navbar />
            <div className=" mt-30 ml-10 md:mt-0 h-screen">
                <section>
                    <div className="flex m-5 flex-col md:flex-row">

                        <motion.div className="md:max-w-1/2 text-center md:text-left"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}>

                            <div>
                                <h2 className="md:text-8xl text-4xl font-extrabold md:ml-12 mt-13">
                                    Save Lives,<br />
                                    <span className="text-red-700">Be a Lifeline</span>
                                </h2>
                            </div>
                            <div>
                                <p className="md:ml-12 md:pr-30 mt-8 max-w-170 font-semibold">
                                    LifeLink connects blood donors with people in need in real time with or without hospitals verification. Donate blood, save lives,and make the world a better place. Be a person who is liver saver
                                </p>
                            </div>
                            <div className="md:ml-12 m-5 flex gap-10">
                                <HashLink smooth to = "/hospitalregistration" className="bg-red-600 transition-all px-4 duration-200 text-white md:px-12 hover:bg-white hover:text-black hover:border-1 font-semibold rounded-xl  md:py-4 "> Register Hospital </HashLink>
                                <HashLink smooth to="/hospitallogin" className="md:px-10 md:py-4 transition-all px-4 duration-200  rounded-xl hover:bg-gray-100 hover:border-1 font-semibold bg-gray-200 "> Hospital Login </HashLink>
                            </div>
                            <div className='hidden md:flex md:ml-12 mt-7 '>
                                <UsersRound /><UsersRound /><UsersRound /><p>100+users</p>
                            </div>
                            <motion.div className="mt-5 ml-12 hidden md:flex absolute gap-20"
                                initial={{ oapcity: 0 }}
                                whileInView={{ opacitiy: 1 }}
                                transition={{ delay: 0.3, duration: 0.3 }}>
                                <div className=" bg-gray-100 rounded-2xl py-5 px-2 max-w-65 flex items-center gap-2">
                                    <div className="bg-gray-200 p-2 rounded-xl"><User /></div>
                                    <div>
                                        <div><p className="font-bold">Find Donors</p></div>
                                        <div>Quickly locate nearby blood donors</div>
                                    </div>
                                </div>
                                <div className=" bg-gray-100 rounded-2xl py-5 px-2 max-w-65 flex items-center gap-2">
                                    <div className="bg-gray-200 p-2 rounded-xl"><Clock /></div>
                                    <div>
                                        <div><p className="font-bold">Request Blood</p></div>
                                        <div>Submit request and get help fast</div>
                                    </div>
                                </div>
                                <div className=" bg-gray-100 rounded-2xl py-5 px-2 max-w-65 flex items-center gap-2">
                                    <div className="bg-gray-200 p-2 rounded-xl"><Verified /></div>
                                    <div>
                                        <div><p className="font-bold">Verified & Safe</p></div>
                                        <div>All donors are verified for your safety</div>
                                    </div>
                                </div>
                                <div className=" bg-gray-100 rounded-2xl py-5 px-2 max-w-65 flex items-center gap-2">
                                    <div className="bg-gray-200 p-2 rounded-xl"><Heart /></div>
                                    <div>
                                        <div><p className="font-bold">Save Lives</p></div>
                                        <div>Your donation can bring someone back to life</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            initial={{ opaicty: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}>
                            <div>
                                <img src={lifelinkimage} alt="" className="md:w-225  md:h-138 mr-0" />
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            
            <About />
            <Features />
            <Howitworks />
            {/* <Donateblood /> */}
            <Requestblood />
            {/* <BloodRequests /> */}

            <Footer />

        </>
    )
}

export default home