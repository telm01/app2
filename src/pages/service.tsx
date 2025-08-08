import ImagePanel from "../ImagePanel";
import { Clock, Heart, Shield, Users, Stethoscope, Activity } from "lucide-react"
import Emp from "../components/Emp"
const benefits = [
    {
      icon:Stethoscope,
      title: "Trusted by 10,000+ Healthcare Professionals",
      description: "Join a community of medical experts who rely on our instruments daily",
    },
    {
      icon: Stethoscope,
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
    return <>
    <div className="Compass"><p>/Service Range/general information</p></div>
    <div className="benefits-section">
          <div className="benefits-header">
            <h3 className="benefits-title">Why Healthcare Professionals Choose Us</h3>
            <p className="benefits-description">
              Experience the difference that precision, reliability, and innovation make in daily practice.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon-container">
                    <IconComponent className="benefit-icon" />
                  </div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
<Emp Name={""} description={""} image={""}></Emp>
<section className="f-section">
<div className="f">
<img src="selling.jpg" alt="" />
            <h3>We sell</h3>
            <p>We sell medical devices,medicine and laboratory</p>
        </div>
        
        <div className="f">
        <img src="teach.jpg" alt="" />
            <h3>We teach</h3>
            <p>We teach about hospital or individual's devices how they work and how to operate them properly</p>
        </div>
       
        <div className="f">
           <img src="fixing.jpg" alt=""  width={220} height={220}/>
            <h3>We Fix</h3>
            <p>we fix medical devices ,even it is not our's</p>
        </div>
</section>
    
    <section className="service">
        
    <h1>Welcome to Diasys Mongolia</h1>
    
<p>Where innovation meets expertise in the realm of medical devices. Our company is dedicated to providing a comprehensive service that encompasses education, sales, and maintenance of cutting-edge medical devices. With a commitment to advancing healthcare through technology, we strive to empower healthcare professionals and institutions with the latest tools and knowledge.</p>

<h2>Educational Excellence:</h2>
<p>At Diasys Mongolia, we believe in the power of knowledge. Our team of seasoned experts offers comprehensive training programs designed to equip healthcare professionals with the skills and insights needed to harness the full potential of our medical devices. Whether it's mastering the intricacies of advanced imaging equipment or understanding the nuances of state-of-the-art diagnostic tools, our educational initiatives ensure that your team is well-prepared to deliver superior patient care.</p>

<h2>Innovative Sales Approach:</h2>
<p>As a leading medical device seller, we take pride in curating a diverse portfolio of state-of-the-art products sourced from reputable manufacturers globally. Our sales approach is not just transactional; it's a collaborative process. We work closely with healthcare providers to understand their unique needs and challenges, offering tailored solutions that align with their goals. From diagnostic devices to therapeutic equipment, our offerings are characterized by innovation, reliability, and a commitment to elevating healthcare standards.</p>

<h2>Reliable Maintenance and Repair Services:</h2>
<p>We understand that seamless operation of medical equipment is crucial for patient care. Our dedicated team of certified technicians is at your service for prompt and efficient maintenance and repairs. Whether it's routine servicing or addressing unexpected issues, we prioritize minimizing downtime to ensure uninterrupted healthcare delivery. Our commitment to post-purchase support is a testament to our belief in forging lasting partnerships with our clients.</p>

<h2>Customer-Centric Approach:</h2>
<p>At Diasys Mongolia, we prioritize customer satisfaction. Our approach is centered around understanding the unique requirements of each client and delivering solutions that exceed expectations. We foster open communication channels, ensuring that our clients feel supported at every stage of their journey with our products and services.</p>

<h2>Advancing Healthcare Together:</h2>

<p>In an ever-evolving landscape, Diasys Mongolia is your steadfast partner in advancing healthcare. Through education, sales, and top-notch maintenance services, we strive to contribute to the transformation of healthcare delivery. Together, let's embrace the future of medicine with confidence, knowing that you have a reliable ally in Diasys Mongolia.</p>

<p className="ending">Choose Diasys Mongolia — where expertise meets innovation, and healthcare evolves.</p>
<Emp Name={"Telmen"} description={"Manager is "} image={""}></Emp>
<Emp Name={"Telmen"} description={""} image={""}></Emp>
<Emp Name={"Telmen"} description={""} image={""}></Emp>
    </section></>
      
  };
  
  export default Service;