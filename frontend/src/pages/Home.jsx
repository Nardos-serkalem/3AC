// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/background.gif";
import groundImg from "../assets/ground.jpg";
import dataImg from "../assets/data.jpg";
import researchImg from "../assets/research.jpg";
import { motion as Motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white py-12 min-h-[90vh] bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})`,
        }}
      >
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          {/* Title */}
          <Motion.h1
            className="text-4xl md:text-6xl font-extrabold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            African Aeronautics and Astronautics Center
          </Motion.h1>

          {/* Subtitle */}
          <Motion.p
            className="mt-8 text-lg md:text-2xl text-gray-200"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Providing cutting-edge ground station infrastructure and research
            capabilities for space data mining intelligence.
          </Motion.p>

          {/* Buttons */}
          <Motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Our Services
            </Link>
            <Link
              to="/researches"
              className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              View Research
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="bg-white py-26 text-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border-r border-gray-300 pr-4 last:border-0">
            <h2 className="text-blue-600 font-bold text-4xl">
              {inView && <CountUp end={2} duration={2} />}+
            </h2>
            <p className="text-gray-600">Ground Stations</p>
          </div>

          <div className="border-r border-gray-300 pr-4 last:border-0">
            <h2 className="text-blue-600 font-bold text-4xl">
              {inView && <CountUp end={20} duration={2.5} />}+
            </h2>
            <p className="text-gray-600">Research Papers</p>
          </div>

          <div className="border-r border-gray-300 pr-4 last:border-0">
            <h2 className="text-blue-600 font-bold text-4xl">
              {inView && <CountUp end={5} duration={2} />}+
            </h2>
            <p className="text-gray-600">Global Partners</p>
          </div>

          <div className="pr-4 last:border-0">
            <h2 className="text-blue-600 font-bold text-4xl">
              {inView && <CountUp end={2} suffix="TB" duration={3} />}+
            </h2>
            <p className="text-gray-600">Daily Data Processing</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-0">
          <h2 className="text-center mb-10 font-extrabold text-2xl md:text-3xl">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ground Station Rental */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={groundImg}
                alt="Ground Station"
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h5 className="font-bold text-lg">Ground Station Rental</h5>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  Access our global network of high-performance ground stations
                  for satellite communications, telemetry, and downlink.
                </p>
                <Link
                  to="/services"
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Space Data Mining */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={dataImg}
                alt="Data Mining"
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h5 className="font-bold text-lg">Space Data Mining</h5>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  Leverage our advanced algorithms and processing capabilities
                  to extract valuable insights from space-based observations.
                </p>
                <Link
                  to="/services"
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Research Collaboration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={researchImg}
                alt="Research Collaboration"
                className="h-52 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h5 className="font-bold text-lg">Research Collaboration</h5>
                <p className="text-gray-600 text-sm mt-3 flex-grow">
                  Partner with our expert team on cutting-edge projects in space
                  science, satellite remote sensing, and data intelligence.
                </p>
                <Link
                  to="/researches"
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
