import newsImage1 from "../assets/news-lunar.jpg";
import newsImage2 from "../assets/groundstation.jpg";
import newsImage3 from "../assets/news-stem.jpg";

const newsData = [
  {
    slug: "lunar-collab",
    title: "Africa Joins Global Lunar Research Mission",
    date: "May 22, 2025",
    image: newsImage1,
    description:
      "Our team is proud to contribute satellite signal analysis to the upcoming international lunar exploration program.",
    content: `
      <p>
        We are excited to announce a collaboration with international partners
        to contribute satellite signal analysis and mission planning expertise to
        the upcoming lunar research mission. Our team will focus on remote
        sensing and payload data processing to support surface operations.
      </p>
      <p>
        This initiative provides a platform for local researchers and students
        to participate in real mission workflows and data analysis pipelines.
      </p>
    `,
  },
  {
    slug: "station-upgrade",
    title: "Ground Station Upgrade Completed",
    date: "April 10, 2025",
    image: newsImage2,
    description:
      "New antenna and tracking systems have been successfully installed to improve data transmission and control.",
    content: `
      <p>
        The ground station upgrade includes modernized antennas, improved
        tracking software, and enhanced telemetry handling. These improvements
        increase our ability to receive higher-rate datasets from partner
        satellites.
      </p>
      <p>
        The upgrade enables more reliable operations and provides better data
        quality for ongoing research projects.
      </p>
    `,
  },
  {
    slug: "stem-launch",
    title: "STEM Program Launched for Youth",
    date: "March 1, 2025",
    image: newsImage3,
    description:
      "We’ve launched a continent-wide initiative to train high school students in aerospace, robotics, and satellite coding.",
    content: `
      <p>
        The STEM program aims to train the next generation of engineers and
        scientists through hands-on workshops, mentorship, and project-based
        learning focused on aerospace technologies.
      </p>
      <p>
        Partner schools will receive curriculum support and access to online
        resources and small-scale hardware kits for robotics and satellite
        telemetry experiments.
      </p>
    `,
  },
];

export default newsData;
