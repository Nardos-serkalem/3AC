// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => {
    setExpanded(false);
    setDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-0 flex items-center justify-between py-3">
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
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6 lg:flex-1">
          <ul className="flex flex-row md:space-x-6 text-gray-700 font-semibold text-md">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/researches"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Researches
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lunar-mission"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "hover:text-blue-600"
                }
              >
                Lunar Mission
              </NavLink>
            </li>

            {/* Partnership Dropdown */}
            <li className="relative">
              <button
                className="flex items-center hover:text-blue-600"
                onClick={() =>
                  setDropdown(dropdown === "partnership" ? null : "partnership")
                }
              >
                Partnership
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdown === "partnership" && (
                <ul className="absolute bg-white shadow-md rounded mt-2 w-40">
                  <li>
                    <NavLink
                      to="/partnership/institutional"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 bg-gray-100 text-blue-600"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                      onClick={closeNavbar}
                    >
                      Institutional
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/partnership/organizational"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 bg-gray-100 text-blue-600"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                      onClick={closeNavbar}
                    >
                      Organizational
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Discover Us Dropdown */}
            <li className="relative">
              <button
                className="flex items-center hover:text-blue-600"
                onClick={() =>
                  setDropdown(dropdown === "discover" ? null : "discover")
                }
              >
                Discover Us
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdown === "discover" && (
                <ul className="absolute bg-white shadow-md rounded mt-2 w-40">
                  <li>
                    <NavLink
                      to="/discover/overview"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 bg-gray-100 text-blue-600"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                      onClick={closeNavbar}
                    >
                      Overview
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/discover/teas"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 bg-gray-100 text-blue-600"
                          : "block px-4 py-2 hover:bg-gray-100"
                      }
                      onClick={closeNavbar}
                    >
                      TEAS Page
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block lg:ml-4">
          <Link
            to="/contact-us"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </Link>
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
              to="/"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/researches"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Researches
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lunar-mission"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Lunar Mission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/partnership/institutional"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Institutional Partnership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/partnership/organizational"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Organizational Partnership
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover/overview"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Discover Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discover/teas"
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              TEAS Page
            </NavLink>
          </li>
        </ul>
        <div className="mt-6 px-6">
          <Link
            to="/contact-us"
            className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={closeNavbar}
          >
            Contact Us
          </Link>
        </div>
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
