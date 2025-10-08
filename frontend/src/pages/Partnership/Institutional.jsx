import React from "react";
import aauLogo from "../../assets/aau-logo.png";
import auLogo from "../../assets/au.jpg";
import esssLogo from "../../assets/logo.png";

const institutions = [
  {
    name: "Addis Ababa University - Aerospace Program",
    logo: aauLogo,
    description:
      "A leading academic partner supporting our research in satellite navigation, space law, and orbital mechanics.",
  },
  {
    name: "African Union Science Commission",
    logo: auLogo,
    description:
      "Collaborating on continental space policy development and research funding.",
  },
  {
    name: "Ethiopian Space Science Society (ESSS)",
    logo: esssLogo,
    description:
      "Partnering to promote space education in schools and universities through events and joint projects.",
  },
];

const Institutional = () => {
  return (
    <section className="py-8 bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-0">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold mb-12">
          Institutional Partners
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-300 text-center p-6 hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={inst.logo}
                alt={inst.name}
                className="mb-4 h-20 object-contain"
              />
              <h3 className="text-lg font-semibold mb-2">{inst.name}</h3>
              <p className="text-gray-600 text-sm">{inst.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutional;
