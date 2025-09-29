// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // adjust path based on your structure

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row">
          {/* Logo and Description - left side */}
          <div className="col-md-4 d-flex flex-column align-items-start mb-4 mb-md-0">
            <img
              src={logo}
              alt="AAAC Logo"
              style={{ height: '100px', marginBottom: '10px' }}
            />
           <p className="small text-light">
  The African Aeronautics & Astronautics Center is committed to space innovation, STEM outreach, and collaborative aerospace research.
</p>
          </div>

          {/* Links and Contact - right side */}
          <div className="col-md-8">
            <div className="row text-start">
              {/* Quick Links */}
              <div className="col-md-4 mb-3 mb-md-0">
                <h6 className="fw-bold mb-3">Quick Links</h6>
                <ul className="list-unstyled small">
                  <li><Link to="/news" className="text-decoration-none text-light">News</Link></li>
                  <li><Link to="/courses" className="text-decoration-none text-light">Courses</Link></li>
                  <li><Link to="/events" className="text-decoration-none text-light">Events</Link></li>
                  <li><Link to="/projects" className="text-decoration-none text-light">Projects</Link></li>
                </ul>
              </div>

              {/* Membership Links */}
              <div className="col-md-4 mb-3 mb-md-0">
                <h6 className="fw-bold mb-3">Membership</h6>
                <ul className="list-unstyled small">
                  <li><Link to="/membership" className="text-decoration-none text-light">Membership</Link></li>
                  <li><Link to="/signup" className="text-decoration-none text-light">Signup</Link></li>
                  <li><Link to="/login" className="text-decoration-none text-light">Login</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-md-4">
                <h6 className="fw-bold mb-3">Contact Us</h6>
                <ul className="list-unstyled small text-muted">
                  <li>Email: <a href="mailto:info@aaacenter.org" className="text-decoration-none text-light">info@aaacenter.org</a></li>
                  <li>Phone: <a href="tel:+251900000000" className="text-decoration-none text-light">+251 921815662</a></li>
                  <li>Address: AAAC HQ, Addis Ababa, Ethiopia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center pt-4 mt-4 border-top border-secondary small text-light">
          © {new Date().getFullYear()} African Aeronautics & Astronautics Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
