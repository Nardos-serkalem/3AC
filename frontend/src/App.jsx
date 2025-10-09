// ...existing code...
import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Imports
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Researches from "./pages/Researches";
import LunarMission from "./pages/LunarMission";
import ContactUs from "./pages/ContactUs";

import Institutional from "./pages/Partnership/Institutional";
import Organizational from "./pages/Partnership/Organizational";
import Overview from "./pages/Discover/Overview";
import Teas from "./pages/Discover/Teas";

import News from "./pages/News";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// ...existing code...

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        {/* Routes that should include Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/lunar-mission" element={<LunarMission />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Dropdown / footer pages */}
          <Route
            path="/partnership/institutional"
            element={<Institutional />}
          />
          <Route
            path="/partnership/organizational"
            element={<Organizational />}
          />
          <Route path="/discover/overview" element={<Overview />} />
          <Route path="/discover/teas" element={<Teas />} />

          <Route path="/news" element={<News />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/membership" element={<Membership />} />
        </Route>

        {/* Auth routes: no Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
