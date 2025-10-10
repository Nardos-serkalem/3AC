import React from "react";
import { Link } from "react-router-dom";
import researchData from "../data/researchData";

const Researches = () => {
  return (
    <section className="py-8 bg-gray-100 text-gray-900">
      <div className="container max-w-[1400px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-6">
          Research Projects
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our research lab is committed to advancing African aerospace science
          through high-impact projects across artificial intelligence, satellite
          data, and geospatial technology.
        </p>

        {/* Research Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchData.map((research) => (
            <div
              key={research.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <img
                src={research.image}
                alt={research.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{research.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {research.summary}
                </p>
                <Link
                  to={`/researches/${research.slug}`}
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Researches;
