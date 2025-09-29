import React from 'react';

import edenImg from '../../assets/team/vice-president.jpg';
import nardosImg from '../../assets/team/nadii.png';
import wondwesenImg from '../../assets/team/president.jpg';
import mikyasImg from '../../assets/team/vice-president.jpg';
import yushurunImg from '../../assets/team/president.jpg';
import eshetImg from '../../assets/team/vice-president.jpg';
import dinaolImg from '../../assets/team/president.jpg';
import habtamuImg from '../../assets/team/vice-president.jpg';

const presidents = [
  { name: 'Eden Abeselom', role: 'President', expertise: 'Aerospace Engineer', image: edenImg },
  { name: 'Nardos Serkalem', role: 'Vice President', expertise: 'Machine Learning Engineer', image: nardosImg },
];

const managers = [
  { name: 'Wondwesen', role: 'Manager', expertise: 'Researcher', image: wondwesenImg },
  { name: 'Mikyas Tihun', role: 'Manager', expertise: 'Computer Scientist', image: mikyasImg },
];

const boardMembers = [
  { name: 'Dr. Yushurun Alemayehu Addie', role: 'Board Member', expertise: 'Researcher', image: yushurunImg },
  { name: 'Eng. Eshet Tesfaye', role: 'Board Member', expertise: 'Aerospace Researcher', image: eshetImg },
  { name: 'Dinaol Zelalame (PhD. Candidate)', role: 'Board Member', expertise: 'Data Scientist', image: dinaolImg },
  { name: 'Habtamu Mengstu (PhD. Candidate)', role: 'Board Member', expertise: 'Data Scientist', image: habtamuImg },
];

const Section = ({ title, members }) => {
  return (
    <div className="mb-5">
      <h3 className="text-center text-primary fw-bold mb-4">{title}</h3>
      <div className="row">
        {members.map((member, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 mb-4 d-flex align-items-stretch">
            <div className="card shadow-sm text-center w-100 d-flex flex-column">
              <div
                style={{
                  height: '250px',
                  overflow: 'hidden',
                  borderBottom: '1px solid #eee',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-100"
                  style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                <p className="text-secondary small mb-1">
                  <strong>Expertise:</strong> {member.expertise}
                </p>
                <p className="text-muted">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Teas = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet the Visionaries Behind the Mission</h2>
        <p className="text-muted">
          Our team of scientists, engineers, and educators drives African innovation in space research and technology.
        </p>
      </div>

      <Section title="President & Vice President" members={presidents} />
      <Section title="Managers" members={managers} />
      <Section title="Board Members" members={boardMembers} />

      <div className="bg-light p-4 rounded text-center mt-5">
        <h4 className="text-primary">"Africa’s Future is Written in the Stars"</h4>
        <p className="text-muted fst-italic">
          Empowering space exploration through research, education, and innovation.
        </p>
      </div>
    </div>
  );
};

export default Teas;
