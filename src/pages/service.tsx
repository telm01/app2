import { Clock, Heart, Shield, Users, Stethoscope, Activity } from "lucide-react";
import Emp from "../components/Emp";

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
    

    {/* Benefits Section */}
    <section className="service-benefits-section">
      <div className="service-benefits-header">
        <span className="service-section-subtitle">Why Choose Us</span>
        <h2 className="service-section-title">Why Healthcare Professionals Choose Us</h2>
        <p className="service-section-description">
          Experience the difference that precision, reliability, and innovation make in daily practice.
        </p>
      </div>

      <div className="service-benefits-grid">
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <div key={index} className="service-benefit-card">
              <div className="service-benefit-icon-container">
                <IconComponent className="service-benefit-icon" size={32} />
              </div>
              <h3 className="service-benefit-title">{benefit.title}</h3>
              <p className="service-benefit-description">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>

    <Emp Name={""} description={""} image={""} />

    {/* Features Section */}
    <section className="service-features-section">
      <div className="service-feature-card">
        <div className="service-feature-image-container">
          <img src="selling.jpg" alt="Medical devices" className="service-feature-image" />
        </div>
        <div className="service-feature-content">
          <h3>We Sell</h3>
          <p>We sell medical devices, medicine and laboratory equipment</p>
        </div>
      </div>

      <div className="service-feature-card">
        <div className="service-feature-image-container">
          <img src="teach.jpg" alt="Training session" className="service-feature-image" />
        </div>
        <div className="service-feature-content">
          <h3>We Teach</h3>
          <p>We teach about hospital or individual's devices how they work and how to operate them properly</p>
        </div>
      </div>

      <div className="service-feature-card">
        <div className="service-feature-image-container">
          <img src="fixing.jpg" alt="Device repair" className="service-feature-image" />
        </div>
        <div className="service-feature-content">
          <h3>We Fix</h3>
          <p>We fix medical devices, even if they're not ours</p>
        </div>
      </div>
    </section>

    {/* Main Content Section */}
    <section className="service-content-section">
      <div className="service-content-intro">
        <h1>Welcome to Diasys Mongolia</h1>
        <p className="service-content-lead">
          Where innovation meets expertise in the realm of medical devices. Our company is dedicated to providing a comprehensive service that encompasses education, sales, and maintenance of cutting-edge medical devices.
        </p>
      </div>

      <div className="service-content-block">
        <div className="service-content-icon">
          <Users size={24} />
        </div>
        <div>
          <h2>Educational Excellence</h2>
          <p>
            At Diasys Mongolia, we believe in the power of knowledge. Our team of seasoned experts offers comprehensive training programs designed to equip healthcare professionals with the skills and insights needed to harness the full potential of our medical devices.
          </p>
        </div>
      </div>

      <div className="service-content-block">
        <div className="service-content-icon">
          <Activity size={24} />
        </div>
        <div>
          <h2>Innovative Sales Approach</h2>
          <p>
            As a leading medical device seller, we take pride in curating a diverse portfolio of state-of-the-art products sourced from reputable manufacturers globally. Our sales approach is not just transactional; it's a collaborative process.
          </p>
        </div>
      </div>

      <div className="service-content-block">
        <div className="service-content-icon">
          <Clock size={24} />
        </div>
        <div>
          <h2>Reliable Maintenance Services</h2>
          <p>
            We understand that seamless operation of medical equipment is crucial for patient care. Our dedicated team of certified technicians is at your service for prompt and efficient maintenance and repairs.
          </p>
        </div>
      </div>

      <div className="service-content-block">
        <div className="service-content-icon">
          <Heart size={24} />
        </div>
        <div>
          <h2>Customer-Centric Approach</h2>
          <p>
            At Diasys Mongolia, we prioritize customer satisfaction. Our approach is centered around understanding the unique requirements of each client and delivering solutions that exceed expectations.
          </p>
        </div>
      </div>

      <div className="service-content-block">
        <h2>Advancing Healthcare Together</h2>
        <p>
          In an ever-evolving landscape, Diasys Mongolia is your steadfast partner in advancing healthcare. Through education, sales, and top-notch maintenance services, we strive to contribute to the transformation of healthcare delivery.
        </p>
      </div>

      <div className="service-content-cta">
        <p className="service-content-ending">Choose Diasys Mongolia — where expertise meets innovation, and healthcare evolves.</p>
      </div>
    </section>

    <div className="service-team-section">
      <Emp Name={"Telmen"} description={"Manager"} image={""} />
      <Emp Name={"Bold"} description={"Technician"} image={""} />
      <Emp Name={"Tuvshin"} description={"Sales Specialist"} image={""} />
    </div>
  </div></>
  );
};

export default Service;