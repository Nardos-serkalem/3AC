// src/pages/Gallery.jsx
import React from "react";

import img1 from "../assets/image1.jpg";
import img2 from "../assets/image3.jpg";
import img3 from "../assets/img1.jpg";
import img4 from "../assets/img2.jpg";
import img5 from "../assets/S.jpg";
import img6 from "../assets/img3.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center font-bold text-3xl md:text-4xl mb-4">
          Gallery
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore highlights from our research labs, launches, team workshops,
          and collaborative space programs across the continent.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={src}
                alt={`Gallery item ${idx + 1}`}
                className="h-64 w-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
