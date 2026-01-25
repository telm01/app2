import React from 'react';



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
          We have successfully provided premium medical equipment and reliable support to many mongolian providers, including remote locations. We are now expand to bring this same standard of excellence and partnership to distributors in other providences.
        </p>
        <div className="about-hero-buttons"><a
         href='Contact'><button className="about-btn about-btn-primary">Join Our Team</button>
        </a>
          
          <a href='History'><button className="about-btn about-btn-outline">Our Story</button></a>
          
        </div>
      </div>
      <div className="about-hero-image">
         <img src="PIcture4.jpg" alt="Our team collaboration" className="about-content-image" />
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
         To be Mongolia’s most trusted supplier of high-quality medical and laboratory systems, offering cost-effective solutions hospitals and clinics can rely on.

        </p>
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Our values</h2>
        <p>
          Explore our extensive range of medical devices designed to meet the diverse needs of healthcare providers, hospitals, clinics, and patients. From precision diagnostic tools to life-saving equipment, our portfolio includes:
        </p>
        <ul className="about-product-list">
          <li>We are committed to providing our clients with high-quality products, ensuring they receive maximum value for their investment.
</li>
          <li>We prioritize exceptional customer service, striving to not only meet but exceed expectations through superior quality, timely delivery, and personalized communication.</li>
          <li>We uphold the highest standards of integrity in all that we do, taking personal responsibility to fully understand and address the needs of our clients.
</li>
          
        </ul>
      </div>

      <div className="about-content-block">
        <h2 className="about-content-heading">Problem in mongolia</h2>
        <p>
        Mongolia's pharmaceutical and medical instrument supply faces a critical vulnerability due to its near-total reliance on imports (over 90%), which, combined with a fragmented and opaque private distributor system, bureaucratic state procurement delays, and limited regulatory oversight, creates chronic shortages of essential medicines, high costs for patients, severe geographic disparities in access between the capital and remote regions, and significant risks from substandard or counterfeit products, all exacerbated by the country's landlocked geography, small dispersed population, and volatile mining-dependent economy that strains public health funding.

        </p>
      </div>
    </section>

    {/* History Panel */}
   
  </div></>
  );
};

export default About;