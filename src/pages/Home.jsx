// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/background.gif'; 

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white py-5 position-relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1 }}
        ></div>
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">African Aeronautics and Astronautics Center</h1>
          <p className="lead mt-3">
            Providing cutting-edge ground station infrastructure and research capabilities for space data mining intelligence.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/services" className="btn btn-primary px-4">Our Services</Link>
            <Link to="/researches" className="btn btn-outline-light px-4">View Research</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-5 text-center">
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <h2 className="text-primary fw-bold fs-2">2+</h2>
              <p className="text-muted">Ground Stations</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="text-primary fw-bold fs-2">20+</h2>
              <p className="text-muted">Research Papers</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="text-primary fw-bold fs-2">5+</h2>
              <p className="text-muted">Global Partners</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="text-primary fw-bold fs-2">2TB+</h2>
              <p className="text-muted">Daily Data Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Our Services</h2>
          <div className="row g-4">
            {/* Ground Station Rental */}
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <img src="/images/ground-station.jpg" className="card-img-top" alt="Ground Station" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Ground Station Rental</h5>
                  <p className="card-text text-muted small">
                    Access our global network of high-performance ground stations for satellite communications, telemetry, and downlink.
                  </p>
                  <Link to="/services" className="text-primary text-decoration-none">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Space Data Mining */}
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <img src="/images/data-mining.jpg" className="card-img-top" alt="Data Mining" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Space Data Mining</h5>
                  <p className="card-text text-muted small">
                    Leverage our advanced algorithms and processing capabilities to extract valuable insights from space-based observations.
                  </p>
                  <Link to="/services" className="text-primary text-decoration-none">Learn more →</Link>
                </div>
              </div>
            </div>

            {/* Research Collaboration */}
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm">
                <img src="/images/research-team.jpg" className="card-img-top" alt="Research Collaboration" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Research Collaboration</h5>
                  <p className="card-text text-muted small">
                    Partner with our expert team on cutting-edge projects in space science, satellite remote sensing, and data intelligence.
                  </p>
                  <Link to="/researches" className="text-primary text-decoration-none">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
