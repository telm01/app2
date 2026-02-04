import { Clock, Heart, Shield, Users, Stethoscope, Activity } from "lucide-react";
import Emp from "../components/Emp";
const container1 = document.getElementById("video-container1");
const container2 = document.getElementById("video-container2");
const container3 = document.getElementById("video-container3 ");

if (container3) {
  container3.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qebyXS-lt0A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}
if (container2) {
  container2.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qebyXS-lt0A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}
if (container1) {
  container1.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/qebyXS-lt0A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}

const benefits = [
  {
    icon: Stethoscope,
    title: "Trusted by 10,000+ Healthcare Professionals",
    description: "Join a community of medical experts who rely on our instruments daily",
  },
  {
    icon: Shield,
    title: "Seamless Integration",
    description: "Our instruments fit naturally into existing healthcare workflows",
  },
  {
    icon: Heart,
    title: "Patient-Centered Design",
    description: "Every instrument is designed with patient comfort and safety in mind",
  },
];

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
          src="https://www.youtube.com/embed/qebyXS-lt0A"
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
    <button>Contact Us</button>
  </section>
    

    {/* Benefits Section */}
   

    {/* Main Content Section */}
   
    
  </div></>
  );
};

export default Service;