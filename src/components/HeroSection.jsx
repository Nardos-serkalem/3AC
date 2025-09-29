// src/components/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        minHeight: '70vh',
        backgroundImage: 'url(/assets/img2.jpg)', // replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              Explore the Frontiers of Space Weather & Solar Storm Forecasting
            </h1>
            <p className="lead mb-4">
              Join AAAC Center in advancing aerospace research, solar storm monitoring, and global collaborations.
            </p>
            <Link to="/signup" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
