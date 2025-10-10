import React from "react";
import { Link } from "react-router-dom";
import lunarImg from "../../assets/background.gif";
import { Icon } from "@iconify/react";

const LunarDetail = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <img
              src={lunarImg}
              alt="Lunar Mission"
              className="w-full h-132 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
              Lunar Mission Program
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Our lunar exploration initiative is a multi-phase program focusing
              on research, simulation, and international collaboration to enable
              future missions involving African partners.
            </p>

            <h3 className="text-xl font-semibold mb-2">Program Highlights</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Terrain simulation and robotics testing facilities</li>
              <li>
                AI-driven lunar imagery analysis and payload data processing
              </li>
              <li>Capacity building and student mentorship programs</li>
              <li>Collaborative payload design and mission concept studies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">How to get involved</h3>
            <p className="text-gray-700 mb-4">
              We welcome collaboration from universities, research groups and
              industry partners. Opportunities include joint research, student
              internships, payload proposals, and field trials on simulated
              lunar surfaces.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link to="/projects" className="text-blue-600 hover:underline">
                ← All projects
              </Link>
              <a
                href="mailto:research@yourdomain.org"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Contact the Team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 prose max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 text-gray-700">
          <div className="border border-gray-300 rounded-2xl shadow-xl p-6">
            <h2 className="font-semibold text-3xl ">Technical Approach</h2>
            <p className="mt-4">
              The program combines physical simulation of lunar regolith, high
              fidelity photogrammetry, and machine learning techniques to
              develop models for terrain traversal, surface operations, and
              remote sensing analysis.
            </p>
          </div>

          <div className="border border-gray-300 rounded-2xl shadow-xl p-6">
            <h2 className="font-semibold text-3xl ">Ongoing Work</h2>
            <p className="mt-4">
              Current activities include small-scale rover testing, sensor
              calibration experiments, and building a dataset of lunar analog
              imagery for model training.
            </p>
          </div>
          <div className="border border-gray-300 rounded-2xl shadow-xl p-6">
            <h2 className="font-semibold text-3xl ">Get updates</h2>
            <p className="mt-4">
              Subscribe to our newsletter or follow project announcements on the
              news page for the latest status reports and opportunities to
              participate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LunarDetail;
