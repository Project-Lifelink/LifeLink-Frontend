import React from 'react'
import Home from './pages/public/home.jsx'
import Navbar from './components/layout/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
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
import Hospital from './pages/hospital/base.jsx'

import Dashboard from './pages/user/dashboard.jsx'
import Mydonations from './pages/user/mydonations.jsx'
import Notifications from './pages/user/notifications.jsx'
import RequestBlood from './pages/user/requestblood.jsx'
import featureimage from './assets/images/dashboardimage.png'
import ExploreHospitals from './pages/user/explorehospitals.jsx'
import ActiveRequests from './pages/user/activerequest.jsx'
import HelpandSupport from './pages/user/helpandsupport.jsx'
import Community from './pages/user/community.jsx'


const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path= '#donateblood' element={<Donateblood />} /> */}
        <Route path='#about' element={<About />} />
        <Route path='#howitworks' element={<Howitworks />} />
        <Route path='#howitworks' element={<Features />} />
        <Route path='/contact' element={<Footer />} />
        <Route path='/requests' element={<Requests />} />
        <Route path='/hospitalregistration' element={<HospitalRegister />} />
        <Route path='/hospitallogin' element={<HospitalLogin />} />
        <Route path='/hospital' element={<Hospital />} />


        <Route path="/profile/" element={<Profile />}>
          <Route path = "dashboard" element={<Dashboard />} />
          <Route path="explorehospitals" element={<ExploreHospitals />} />
          <Route path="requestblood" element={<RequestBlood />} />
          <Route path="mydonations" element={<Mydonations />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="activerequests" element={<ActiveRequests />} />
          <Route path="helpandsupport" element={<HelpandSupport />} />
          <Route path="community" element={<Community />} />
        </Route>

      </Routes>

    </>
  )
}

export default App