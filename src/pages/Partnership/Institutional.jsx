import React from 'react';
import aauLogo from '../../assets/aau-logo.png';
import auLogo from '../../assets/au.jpg';
import esssLogo from '../../assets/logo.png';

const institutions = [
  {
    name: 'Addis Ababa University - Aerospace Program',
    logo: aauLogo,
    description: 'A leading academic partner supporting our research in satellite navigation, space law, and orbital mechanics.'
  },
  {
    name: 'African Union Science Commission',
    logo: auLogo,
    description: 'Collaborating on continental space policy development and research funding.'
  },
  {
    name: 'Ethiopian Space Science Society (ESSS)',
    logo: esssLogo,
    description: 'Partnering to promote space education in schools and universities through events and joint projects.'
  }
];

const Institutional = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 fs-2">Institutional Partners</h2>

        <div className="row g-4 justify-content-center">
          {institutions.map((inst, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex">
              <div className="card flex-fill shadow-sm border-0 text-center p-3">
                <img
                  src={inst.logo}
                  alt={inst.name}
                  className="mx-auto mb-3"
                  style={{ height: '80px', objectFit: 'contain' }}
                />
                <h3 className="fs-5 fw-semibold">{inst.name}</h3>
                <p className="text-muted small">{inst.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutional;
