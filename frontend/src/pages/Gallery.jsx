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
    <section className="py-8 bg-white text-gray-800">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Title */}
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-4">
          Gallery
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore highlights from our research labs, launches, team workshops,
          and collaborative space programs across the continent.
        </p>

        {/* Artistic Layout */}
        <div className="grid gap-5"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(2, 250px)",
            gridTemplateAreas: `
              "img1 img1 img2 img2 img3 img3"
              "img4 img4 img5 img6 img6 img6"
            `,
          }}
        >
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300" style={{ gridArea: "img1" }}>
            <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300" style={{ gridArea: "img2" }}>
            <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300" style={{ gridArea: "img3" }}>
            <img src={images[2]} alt="Gallery 3" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300" style={{ gridArea: "img4" }}>
            <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300" style={{ gridArea: "img5" }}>
            <img src={images[4]} alt="Gallery 5" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300" style={{ gridArea: "img6" }}>
            <img src={images[5]} alt="Gallery 6" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
