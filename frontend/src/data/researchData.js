import spaceWeather from "../assets/space-weather.jpg";
import agriSat from "../assets/agri-sat.jpg";
import agriMonitoring from "../assets/agri-monitoring.jpg";

const researchData = [
  {
    slug: "space-weather-ai",
    title: "AI-Powered Space Weather Forecasting",
    image: spaceWeather,
    summary:
      "We use machine learning models to predict solar flares and geomagnetic storms from satellite telemetry data.",
    content: `
      <p>
        Our Space Weather Forecasting project combines physics-based models with
        deep learning to produce near-real-time predictions of solar activity.
        We ingest telemetry from multiple satellites and apply ensemble ML
        methods to estimate the probability of solar flares and geomagnetic
        storms that could affect ground infrastructure.
      </p>
      <p>
        The project emphasizes transfer-learning, explainability, and
        operational deployment inside a cloud-native pipeline for rapid
        retraining when new satellite sources come online.
      </p>
    `,
  },
  {
    slug: "agri-monitoring",
    title: "Satellite Image Classification for Agriculture",
    image: agriSat,
    summary:
      "Our team is working on a classification model for crop analysis using high-resolution satellite imagery.",
    content: `
      <p>
        This project develops robust segmentation and classification models to
        detect crop types, stresses, and phenological stages at field scale.
        We combine multispectral imagery and SAR data with ground truth
        sampling to produce high-accuracy maps used by agricultural partners.
      </p>
      <p>
        We focus on low-cost model deployment for regions with constrained
        connectivity, including on-device inference and compact model
        distillation techniques.
      </p>
    `,
  },
  {
    slug: "gnss-optimization",
    title: "GNSS Signal Processing & Optimization",
    image: agriMonitoring,
    summary:
      "This project improves GNSS signal accuracy and reliability for aerospace and navigation systems.",
    content: `
      <p>
        Our GNSS research explores advanced signal processing pipelines to
        mitigate multipath and ionospheric effects, improving positioning for
        high-dynamics platforms. We test algorithms on recorded GNSS datasets
        and live ground stations.
      </p>
      <p>
        The project also investigates integration with inertial measurement
        units (IMUs) and resilient navigation strategies for autonomous
        vehicles.
      </p>
    `,
  }
];

export default researchData;
