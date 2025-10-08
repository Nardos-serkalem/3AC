// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-auto">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              src={logo}
              alt="AAAC Logo"
              className="h-20 mb-4 object-contain"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              The African Aeronautics & Astronautics Center is committed to
              space innovation, STEM outreach, and collaborative aerospace
              research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/news" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Membership</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/membership" className="hover:text-white">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-3">Contact Us</h6>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@aaacenter.org"
                  className="hover:text-white"
                >
                  info@aaacenter.org
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+251921815662" className="hover:text-white">
                  +251 921815662
                </a>
              </li>
              <li>Address: AAAC HQ, Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center border-t border-gray-700 mt-10 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} African Aeronautics & Astronautics Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
