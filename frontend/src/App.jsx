// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Researches from './pages/Researches';
import LunarMission from './pages/LunarMission';
import ContactUs from './pages/ContactUs';

import Institutional from './pages/Partnership/Institutional';
import Organizational from './pages/Partnership/Organizational';
import Overview from './pages/Discover/Overview';
import Teas from './pages/Discover/Teas';

import News from './pages/News';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Signup from './pages/Signup'; // ✅ Corrected import

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/lunar-mission" element={<LunarMission />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Dropdown Pages */}
          <Route path="/partnership/institutional" element={<Institutional />} />
          <Route path="/partnership/organizational" element={<Organizational />} />
          <Route path="/discover/overview" element={<Overview />} />
          <Route path="/discover/teas" element={<Teas />} />

          {/* Footer Pages */}
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
