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
import ResearchDetail from "./pages/researches/ResearchDetail";
import LunarDetail from "./pages/projects/LunarDetail";
import NewsDetail from "./pages/news/NewsDetail";

// admin pages
import AdminNews from "./pages/admin/news";
import AdminProjects from "./pages/admin/projects";
import AdminResearch from "./pages/admin/research";
import AdminNavbar from "./components/adminNavbar";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <main className="pt-6">
        <Outlet />
      </main>
    </div>
  );
}

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
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/lunar" element={<LunarDetail />} />
          <Route path="/researches/:slug" element={<ResearchDetail />} />
          <Route path="/membership" element={<Membership />} />
        </Route>

        {/* Auth routes: no Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin routes (use admin navbar) */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminNews />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/research" element={<AdminResearch />} />
        </Route>
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
