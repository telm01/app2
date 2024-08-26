import React from 'react';
import HistoryPanel from '../HistoryPanel';

const webDesignHistoryEvents = [
  { image:'zybia.jpg',year: '1960\'s', description: 'Hypertext Born' , },
  { image:'zybia.jpg',year: '1980\'s', description: 'Custom Code' },
  { image:'zybia.jpg',year: '1990\'s', description: 'HTML3, Gif, Flash' },
  { image:'zybia.jpg',year: '1995', description: 'Responsiveness' },
  { image:'zybia.jpg',year: '1996', description: 'PHP Born' },
  { image:'zybia.jpg',year: '2008', description: 'Java Script' },
];
const About = () => {
  return (
    <div className="App">
      <div className="about-page">
        <a>
          <h1>Welcome to DaiSys mongolia- Your Trusted Partner in Medical Devices</h1>
        </a>
      </div>
      <section className="about-content">
        <p>
          At Daisys mongolia, we are dedicated to advancing healthcare through cutting-edge medical devices and innovative solutions. With a commitment to excellence, quality, and patient well-being, we have established ourselves as a leading force in the medical device industry.
        </p>
        <img src="coll.jpg" alt="" width={800} height={700} />
        <h1>Our Mission.</h1>
        <p>
          Our mission is clear - to improve the lives of patients and healthcare professionals by providing state-of-the-art medical devices that enhance the diagnosis, treatment, and overall quality of care. We believe that every innovation has the potential to make a difference, and we strive to bring those innovations to the market.
        </p>
        <h1>Our Products</h1>
        <p>
          Explore our extensive range of medical devices designed to meet the diverse needs of healthcare providers, hospitals, clinics, and patients. From precision diagnostic tools to life-saving equipment, our portfolio includes:
        </p>
        <ul>
          <li>Diagnostic Imaging: High-resolution imaging solutions for accurate diagnoses.</li>
          <li>Surgical Instruments: Precision instruments for surgical excellence.</li>
          <li>Patient Monitoring: Cutting-edge devices for real-time patient data.</li>
          <li>Rehabilitation & Therapy: Innovative tools for patient recovery.</li>
          <li>Home Healthcare: Convenient devices for at-home care.</li>
        </ul>
        <h1>Our Commitment to Quality</h1>
        <p>
          Quality and safety are at the core of our business. We adhere to stringent quality control processes to deliver products that exceed industry standards. We are ISO certified and committed to continuous improvement in everything we do.
        </p>
      </section>
      <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents}  />
    </div>
  );
};

export default About;