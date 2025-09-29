// src/pages/Gallery.jsx
import React from 'react';

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image3.jpg';
import img3 from '../assets/img1.jpg';
import img4 from '../assets/img2.jpg';
import img5 from '../assets/S.jpg';
import img6 from '../assets/img3.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section className="py-5 bg-white text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-2">Gallery</h2>
        <p className="text-center text-secondary mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Explore highlights from our research labs, launches, team workshops, and collaborative space programs across the continent.
        </p>

        <div className="row g-4">
          {images.map((src, idx) => (
            <div key={idx} className="col-sm-6 col-md-4">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery item ${idx + 1}`}
                  className="img-fluid"
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
