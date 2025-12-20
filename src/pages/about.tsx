import React from 'react';
import HistoryPanel from '../HistoryPanel';

const webDesignHistoryEvents = [
  { image:'zybia.jpg',year: '1960\'s', description: ' Were a passionate team of innovators dedicated to creating technology that empowers businesses and transforms industries.' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1980\'s', description: 'Custom Code' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1990\'s', description: 'HTML3, Gif, Flash', Title:'Javascript'  },
  { image:'zybia.jpg',year: '1995', description: 'Responsiveness' , Title:'Javascript' },
  { image:'zybia.jpg',year: '1996', description: 'PHP Born' , Title:'Javascript' },
  { image:'zybia.jpg',year: '2008', description: 'Java Script' , Title:'Javascript' },
];
const About = () => {
  return (<><div className="Compass"><p>/Products/general information</p></div><div className="about-page-container">
    {/* Breadcrumb */}
    <div className="about-compass">
      <p>/About us/Our history/</p>
    </div>

    {/* Hero Section */}
    <section className="about-hero-section">
      <div className="about-hero-content">
        <span className="about-hero-subtitle">About Our Company</span>
        <h1 className="about-hero-title">Building the future, one solution at a time</h1>
        <p className="about-hero-description">
          We're a passionate team of innovators dedicated to creating technology that empowers businesses and
          transforms industries.
        </p>
        <div className="about-hero-buttons">
          <button className="about-btn about-btn-primary">Join Our Team</button>
          <button className="about-btn about-btn-outline">Our Story</button>
        </div>
      </div>
      <div className="about-hero-image">
         <img src="coll.jpg" alt="Our team collaboration" className="about-content-image" />
      </div>
    </section>

    {/* Stats Section */}
    <section className="about-stats-section">
      <div className="about-stat-item">
        <div className="about-stat-number">10K+</div>
        <div className="about-stat-label">Happy Customers</div>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">50+</div>
        <div className="about-stat-label">Team Members</div>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">25+</div>
        <div className="about-stat-label">Countries Served</div>
      </div>
      <div className="about-stat-item">
        <div className="about-stat-number">99.9%</div>
        <div className="about-stat-label">Uptime</div>
      </div>
    </section>

    {/* Main Content */}
    <section className="about-main-content">
     
      <div className="about-content-image-wrapper">
       
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our Mission</h2>
        <p>
          Our mission is clear - to improve the lives of patients and healthcare professionals by providing state-of-the-art medical devices that enhance the diagnosis, treatment, and overall quality of care. We believe that every innovation has the potential to make a difference, and we strive to bring those innovations to the market.
        </p>
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our Products</h2>
        <p>
          Explore our extensive range of medical devices designed to meet the diverse needs of healthcare providers, hospitals, clinics, and patients. From precision diagnostic tools to life-saving equipment, our portfolio includes:
        </p>
        <ul className="about-product-list">
          <li>Diagnostic Imaging: High-resolution imaging solutions for accurate diagnoses.</li>
          <li>Surgical Instruments: Precision instruments for surgical excellence.</li>
          <li>Patient Monitoring: Cutting-edge devices for real-time patient data.</li>
          <li>Rehabilitation & Therapy: Innovative tools for patient recovery.</li>
          <li>Home Healthcare: Convenient devices for at-home care.</li>
        </ul>
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our Commitment to Quality</h2>
        <p>
          Quality and safety are at the core of our business. We adhere to stringent quality control processes to deliver products that exceed industry standards. We are ISO certified and committed to continuous improvement in everything we do.
        </p>
      </div>
    </section>

    {/* History Panel */}
    <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents} />
  </div></>
  );
};

export default About;