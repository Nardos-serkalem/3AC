// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';  // Correct import path, adjust if your folder structure is different

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            src={logo}
            alt="AAAC Center Logo"
            style={{ height: '80px', objectFit: 'contain' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={expanded ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact="true" to="/" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/researches" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                Researches
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/lunar-mission" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                Lunar Mission
              </NavLink>
            </li>

            {/* Partnership Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="partnershipDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partnership
              </a>
              <ul className="dropdown-menu" aria-labelledby="partnershipDropdown">
                <li>
                  <Link className="dropdown-item" to="/partnership/institutional" onClick={closeNavbar}>
                    Institutional
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/partnership/organizational" onClick={closeNavbar}>
                    Organizational
                  </Link>
                </li>
              </ul>
            </li>

            {/* Discover Us Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="discoverDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="discoverDropdown">
                <li>
                  <Link className="dropdown-item" to="/discover/overview" onClick={closeNavbar}>
                    Overview
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/discover/teas" onClick={closeNavbar}>
                    TEAS Page
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/contact-us" className="btn btn-primary ms-lg-3" onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
