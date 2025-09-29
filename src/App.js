import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Researches from './pages/Researches';
import LunarMission from './pages/LunarMission';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Nested pages
import Institutional from './pages/Partnership/Institutional';
import Organizational from './pages/Partnership/Organizational';
import Overview from './pages/Discover/Overview';
import Teas from './pages/Discover/Teas';

// Import shared components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/lunar-mission" element={<LunarMission />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/partnership/institutional" element={<Institutional />} />
          <Route path="/partnership/organizational" element={<Organizational />} />

          <Route path="/discover/overview" element={<Overview />} />
          <Route path="/discover/teas" element={<Teas />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
