import React from "react";

import edenImg from "../../assets/team/vice-president.jpg";
import nardosImg from "../../assets/team/nadii.png";
import wondwesenImg from "../../assets/team/president.jpg";
import mikyasImg from "../../assets/team/vice-president.jpg";
import yushurunImg from "../../assets/team/president.jpg";
import eshetImg from "../../assets/team/vice-president.jpg";
import dinaolImg from "../../assets/team/president.jpg";
import habtamuImg from "../../assets/team/vice-president.jpg";

const presidents = [
  {
    name: "Eden Abeselom",
    role: "President",
    expertise: "Aerospace Engineer",
    image: edenImg,
  },
  {
    name: "Nardos Serkalem",
    role: "Vice President",
    expertise: "Machine Learning Engineer",
    image: nardosImg,
  },
];

const managers = [
  {
    name: "Wondwesen",
    role: "Manager",
    expertise: "Researcher",
    image: wondwesenImg,
  },
  {
    name: "Mikyas Tihun",
    role: "Manager",
    expertise: "Computer Scientist",
    image: mikyasImg,
  },
];

const boardMembers = [
  {
    name: "Dr. Yushurun Alemayehu Addie",
    role: "Board Member",
    expertise: "Researcher",
    image: yushurunImg,
  },
  {
    name: "Eng. Eshet Tesfaye",
    role: "Board Member",
    expertise: "Aerospace Researcher",
    image: eshetImg,
  },
  {
    name: "Dinaol Zelalame (PhD. Candidate)",
    role: "Board Member",
    expertise: "Data Scientist",
    image: dinaolImg,
  },
  {
    name: "Habtamu Mengstu (PhD. Candidate)",
    role: "Board Member",
    expertise: "Data Scientist",
    image: habtamuImg,
  },
];

const Section = ({ title, members }) => {
  return (
    <div className="mb-12 max-w-[1400px] mx-auto">
      <h3 className="text-center text-blue-700 font-bold text-2xl mb-8">
        {title}
      </h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition items-center justify-center"
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden border-b">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain object-top"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4 text-center">
              <h5 className="text-lg font-semibold mb-1">{member.name}</h5>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Expertise:</span> {member.expertise}
              </p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Teas = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Meet the Visionaries Behind the Mission
        </h2>
        <p className="text-gray-600 mt-4 max-w-5xl text-lg mx-auto">
          Our team of scientists, engineers, and educators drives African
          innovation in space research and technology.
        </p>
      </div>

      {/* Sections */}
      <Section title="President & Vice President" members={presidents} />
      <Section title="Managers" members={managers} />
      <Section title="Board Members" members={boardMembers} />

      {/* Quote Section */}
      <div className=" p-6 rounded-lg text-center mt-12">
        <h4 className="text-blue-700 font-bold text-2xl mb-2">
          "Africa’s Future is Written in the Stars"
        </h4>
        <p className="text-gray-600 italic text-lg">
          Empowering space exploration through research, education, and
          innovation.
        </p>
      </div>
    </div>
  );
};

export default Teas;
