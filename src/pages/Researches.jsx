import React from 'react';

const researchData = [
  {
    title: 'AI-Powered Space Weather Forecasting',
    image: '/images/space-weather.jpg',
    summary:
      'We use machine learning models to predict solar flares and geomagnetic storms from satellite telemetry data.',
    link: '/projects/space-weather-ai',
  },
  {
    title: 'Satellite Image Classification for Agriculture',
    image: '/images/agri-sat.jpg',
    summary:
      'Our team is working on a classification model for crop analysis using high-resolution satellite imagery.',
    link: '/projects/agri-monitoring',
  },
  {
    title: 'GNSS Signal Processing & Optimization',
    image: '/images/gnss.jpg',
    summary:
      'This project improves GNSS signal accuracy and reliability for aerospace and navigation systems.',
    link: '/projects/gnss-optimization',
  },
];

const Researches = () => {
  return (
    <section className="py-5 bg-body-secondary text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-2">Research Projects</h2>
        <p className="text-center text-secondary mb-5 mx-auto" style={{ maxWidth: '720px' }}>
          Our research lab is committed to advancing African aerospace science through high-impact projects across artificial intelligence, satellite data, and geospatial technology.
        </p>

        <div className="row g-4">
          {researchData.map((research, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={research.image}
                  alt={research.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{research.title}</h5>
                  <p className="card-text small text-secondary">{research.summary}</p>
                  <a href={research.link} className="mt-auto text-primary text-decoration-none">
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Researches;
