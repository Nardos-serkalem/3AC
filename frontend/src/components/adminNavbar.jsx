// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-0 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeNavbar} className="flex items-center">
          <img
            src={logo}
            alt="AAAC Center Logo"
            className="h-16 object-contain"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleNavbar}
          className="lg:hidden p-2 text-gray-600 focus:outline-none"
        >
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-6 lg:flex-1">
          <ul className="flex flex-row md:space-x-6 text-gray-700 font-semibold text-md">
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/projects"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/research"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Research
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          expanded ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeNavbar} className="text-gray-600">
            ✕
          </button>
        </div>
        <ul className="flex flex-col px-6 space-y-4 text-gray-700 font-semibold">
          <li>
            <NavLink
              to="/admin"
              end
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/projects"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/research"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Research
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {expanded && (
        <div
          onClick={closeNavbar}
          className="fixed inset-0 bg-black opacity-40 z-40"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
