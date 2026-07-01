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


//use side page
import Dashboard from './pages/user/dashboard.jsx'
import Mydonations from './pages/user/mydonations.jsx'
import Notifications from './pages/user/notifications.jsx'
import RequestBlood from './pages/user/requestblood.jsx'
import featureimage from './assets/images/dashboardimage.png'
import ExploreHospitals from './pages/user/explorehospitals.jsx'
import ActiveRequests from './pages/user/activerequest.jsx'
import HelpandSupport from './pages/user/helpandsupport.jsx'
import Community from './pages/user/community.jsx'
import UserSettings from './pages/user/settings.jsx'


//hospital side page
import Hospital from './pages/hospital/base.jsx'
import DashboardHospital from './pages/hospital/pages/dashboard.jsx'
import RequestBloodHospital from './pages/hospital/pages/bloodrequest.jsx'
import NotificationsHospital from './pages/hospital/pages/notification.jsx'
import ActiveRequestsHospital from './pages/hospital/pages/activerequests.jsx'
import HelpandSupportHospital from './pages/hospital/pages/helpsupport.jsx'
import CommunityHospital from './pages/hospital/pages/community.jsx'
import DonorVerification from './pages/hospital/pages/donorverification.jsx'
import RequestHistory from './pages/hospital/pages/requesthistory.jsx'
import HospitalSettings from './pages/hospital/pages/settings.jsx'


import Admin from './pages/admin/main.jsx'
import Adminlogin from './pages/auth/adminlogin.jsx'



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
        <Route path = "/admin" element = {<Admin />} />
        <Route path = "/adminlogin" element = {<Adminlogin />} />


{/* these are the routes for user side page  */}
        <Route path="/profile/" element={<Profile />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="explorehospitals" element={<ExploreHospitals />} />
          <Route path="requestblood" element={<RequestBlood />} />
          <Route path="mydonations" element={<Mydonations />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="activerequests" element={<ActiveRequests />} />
          <Route path="helpandsupport" element={<HelpandSupport />} />
          <Route path="community" element={<Community />} />
          <Route path="settings" element={<UserSettings />} />
          {/* <Route path="requesthistory" element={<RequestHistory />} /> */}
        </Route>


        {/* these are the routes for hospital side page  */}
        <Route path="/hospital/" element={<Hospital />}>
          <Route index element={<DashboardHospital />} />
          <Route path='dashboard' element={<DashboardHospital />} />
          <Route path="requestblood" element={<RequestBloodHospital />} />
          <Route path="notifications" element={<NotificationsHospital />} />
          <Route path="activerequest" element={<ActiveRequestsHospital />} />
          <Route path="helpandsupport" element={<HelpandSupportHospital />} />
          <Route path="community" element={<CommunityHospital />} />
          <Route path="donorverification" element={<DonorVerification />} />
          <Route path="requesthistory" element={<RequestHistory />} />
          <Route path="settings" element={<HospitalSettings />} />
          {/* <Route path="requesthistory" element={<RequestHistory />} /> */}
        </Route>
      </Routes>

    </>
  )
}

export default App