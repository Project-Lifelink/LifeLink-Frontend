import React from 'react'
import Home from './pages/public/home.jsx'
import Navbar from './components/layout/navbar.jsx'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/register.jsx'
import Donateblood from './pages/public/donateblood.jsx'
import About from './pages/public/about.jsx'
import Howitworks from './pages/public/howitworks.jsx'
import Features from './pages/public/features.jsx'
import Footer from './components/layout/footer.jsx'
import Profile from './pages/user/base.jsx'
import Requests from './components/requests.jsx'
import HospitalRegister from './pages/auth/hospitalregistration.jsx'
import HospitalLogin from './pages/auth/hospitallogin.jsx'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>

        <Route path = "/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path= '#donateblood' element={<Donateblood />} /> */}
        <Route path = '#about' element={<About />} />
        <Route path = '#howitworks' element = {<Howitworks />} />
        <Route path = '#howitworks' element = {<Features />} />
        <Route path = '/contact' element = {<Footer />} />
        <Route path = '/profile' element = {<Profile />} />
        <Route path = '/requests' element = {<Requests />} />
        <Route path = '/hospitalregistration' element = {<HospitalRegister />} />
        <Route path = '/hospitallogin' element = {<HospitalLogin />} />
      </Routes>

    </>
  )
}

export default App