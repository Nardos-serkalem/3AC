import React from 'react';
import nasaLogo from '../../assets/nasa.png';
import esaLogo from '../../assets/nasa.png';
import skaLogo from '../../assets/nasa.png';

const organizations = [
  {
    name: 'NASA',
    logo: nasaLogo,
    description:
      'Collaborating on lunar mission research and space weather forecasting pilot projects.',
  },
  {
    name: 'European Space Agency (ESA)',
    logo: esaLogo,
    description:
      'Partnering in CubeSat development and training for African engineers.',
  },
  {
    name: 'SKA Africa',
    logo: skaLogo,
    description:
      'Coordinating data processing pipelines and AI-based astronomical analysis.',
  },
];

const Organizational = () => {
  return (
    <section className="py-8 bg-white text-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-12">
          Organizational Partners
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{org.name}</h3>
              <p className="text-gray-600 text-sm">{org.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizational;
