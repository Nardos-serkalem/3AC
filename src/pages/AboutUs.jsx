import React from 'react';
import img1 from '../assets/colab.jpg';  // adjust path if needed

const AboutUs = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-2">About Us</h2>

        <p className="text-center lead text-secondary mb-5">
          The African Aeronautic and Astronautic Center (AAAC) is a pioneering institution dedicated to advancing space science, satellite technology, and geospatial research across Africa and beyond.
        </p>

        <div className="row g-5 align-items-center">
          {/* Image imported from src/assets */}
          <div className="col-md-6">
            <img
              src={img1}
              alt="About our space center"
              className="img-fluid rounded shadow-sm"
              style={{ height: '300px', objectFit: 'cover', width: '100%' }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <h3 className="text-primary fs-4 fw-semibold mb-3">Our Mission</h3>
            <p className="text-muted mb-4">
              To foster innovation, collaboration, and excellence in aerospace technologies by providing access to satellite data, ground station services, and expert-driven research initiatives.
            </p>

            <h3 className="text-primary fs-4 fw-semibold mb-3">What We Do</h3>
            <ul className="text-muted ps-3">
              <li className="mb-2">• Operate and maintain ground station infrastructure</li>
              <li className="mb-2">• Offer research collaboration opportunities in space science</li>
              <li className="mb-2">• Deliver high-value satellite data services and analytics</li>
              <li className="mb-2">• Run public engagement, training, and educational programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
