import React from 'react';
import groundImg from '../assets/ground.jpg';
import dataImg from '../assets/data.jpg';
import colabImg from '../assets/colab.jpg';

const Services = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted">Explore the key services we offer in aerospace and satellite science.</p>
      </div>

      <div className="row g-4">
        {/* Service 1 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src={groundImg} className="card-img-top" alt="Ground Station Access" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Satellite Ground Station Access</h5>
              <p className="card-text text-muted small">
                High-speed access to satellite telemetry, tracking, and command operations across Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Service 2 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src={dataImg} className="card-img-top" alt="Data Services" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Space Data Processing</h5>
              <p className="card-text text-muted small">
                We convert raw satellite signals into insights using AI/ML-powered pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img src={colabImg} className="card-img-top" alt="Research Support" style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Research & Training Support</h5>
              <p className="card-text text-muted small">
                We mentor and support institutions with satellite datasets, curriculum, and research environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <p className="text-muted">Interested in working with us or using our facilities?</p>
        <a href="/contact-us" className="btn btn-primary px-4">Contact Our Team</a>
      </div>
    </div>
  );
};

export default Services;
