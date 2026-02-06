import React from "react";






const Service = () => {
  return (<><div className="Compass"><p>/Products/general information</p></div><div className="about-page-container"></div><div className="service-page-container">
    {/* Breadcrumb */}
    <section className="services">
    <h2>Our Services</h2>

    <div className="service-grid">
      <div className="service-card">
        <div className="icon">🛠️</div>
        <h3>We Fix</h3>
        <p>
          Professional repair and maintenance of medical instruments to ensure
          safety, accuracy, and reliability.
        </p>
      </div>

      <div className="service-card">
        <div className="icon">🎓</div>
        <h3>We Train</h3>
        <p>
          Hands-on training for doctors, nurses, and technicians on proper
          equipment usage.
        </p>
      </div>

      <div className="service-card">
        <div className="icon">🏥</div>
        <h3>We Sell</h3>
        <p>
          Supply of certified, high-quality medical devices and instruments
          from trusted manufacturers.
        </p>
      </div>
    </div>
  </section>

  
  <section className="videos">
    <h2>Service & Training Videos</h2>

    <div className="video-grid">

    
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/AfQo_h3nIns"
          allowFullScreen>
        </iframe>
        <h4>Medical Equipment Training</h4>
      </div>

     
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/yXyWO0d3d4s?t=92s"
          allowFullScreen>
        </iframe>
        <h4>Instrument Repair Process</h4>
      </div>

   
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/8gu8cdAW9vY"
          allowFullScreen>
        </iframe>
        <h4>Instrument Repair Process</h4>
      </div>

    </div>
  </section>


  <section className="cta">
    <h2>Need Medical Equipment Support?</h2>
    <p>Contact us for sales, repair, or professional training services.</p>
    <button><a href="/contact">Contact Us</a></button>
  </section>
    

    {/* Benefits Section */}
   

    {/* Main Content Section */}
   
    
  </div></>
  );
};

export default Service;