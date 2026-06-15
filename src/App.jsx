import React from 'react'
import Home from './pages/home.jsx'
import Navbar from './components/navbar.jsx'
import { Route,Routes } from 'react-router-dom'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
import Donateblood from './pages/donateblood.jsx'
import About from './pages/about.jsx'
import Howitworks from './pages/howitworks.jsx'
import Features from './pages/features.jsx'
import Footer from './components/footer.jsx'
import Profile from './components/profile/base.jsx'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App