import React from 'react';

const newsList = [
  {
    title: 'Africa Joins Global Lunar Research Mission',
    date: 'May 22, 2025',
    image: '/images/news-lunar.jpg',
    description: 'Our team is proud to contribute satellite signal analysis to the upcoming international lunar exploration program.',
    link: '/news/lunar-collab'
  },
  {
    title: 'Ground Station Upgrade Completed',
    date: 'April 10, 2025',
    image: '/images/news-groundstation.jpg',
    description: 'New antenna and tracking systems have been successfully installed to improve data transmission and control.',
    link: '/news/station-upgrade'
  },
  {
    title: 'STEM Program Launched for Youth',
    date: 'March 1, 2025',
    image: '/images/news-stem.jpg',
    description: 'We’ve launched a continent-wide initiative to train high school students in aerospace, robotics, and satellite coding.',
    link: '/news/stem-launch'
  }
];

const News = () => {
  return (
    <section className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-2">Latest News</h2>

        <div className="row g-4">
          {newsList.map((news, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img src={news.image} alt={news.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <p className="text-primary small">{news.date}</p>
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text text-muted small">{news.description}</p>
                  <a href={news.link} className="text-primary text-decoration-none small fw-medium">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
