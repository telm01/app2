


import DailyLifeSection from "../components/Dailu-life"
import BackgroundSlider from"../BackgroundSlider"
import ImagePanel from "../ImagePanel";
import { Phone, Mail, MapPin, Stethoscope, Heart, Activity, Shield, Users, Award, Globe } from "lucide-react"
import BrandSliderDemo from "../brand-slider-demo"
import ImageSlider from "../Imageslider";
const ImagePanelProps =() =>{
  const ImagePanelProps = [
    {
      image:'zybia.jpg'
    }
  ]
}
  
  

const Home = () => {
     return <><div>
      
       <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div>
              <p className="hero-badge">Trusted Medical Partner</p>
              <h1 className="hero-title">
                Leading Medical Equipment Distribution in
                <span className="hero-accent"> Mongolia</span>
              </h1>
              <p className="hero-description">
                Providing healthcare professionals with world-class medical instruments and equipment. Serving
                hospitals, clinics, and medical facilities across Mongolia with reliable, certified medical solutions.
              </p>
              <div className="hero-buttons">
                <p className="hero-button-primary">
                  View Products
                </p>
                <a  className=" cta-button">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hero-image-container">
              <img
                src="/repomse920-2.jpg"height={500}width={600}
                alt="Medical equipment and instruments"
                className="hero-image"
              />
                <div className="certificate">
                    <p className="font">ISO Certified</p>
                    <p className="text0">Quality Assured</p>
                  </div>
              <div className="hero-badge-floating">
                <div className="flex items-center space-x-3">
                  <div className="hero-badge-icon">
                    <p className="h-6 w-6" />
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        
        <div className="f1">
             
            <h1>500+</h1>
            <p>Medical Devices</p>
        </div>
       
        <div className="f2">
            
            
        <h1>150+</h1>
        <p>Healthcare Partners</p>
        </div>
        
        <div className="f3">
        
           
        <h1>15+</h1>
        <p>Years Experience</p>
        </div>
        <div className="f3">
        
           
        <h1>24/7</h1>
        <p>Support Service</p>
        </div>
    </section>
    
    <BrandSliderDemo/>
    
     <section id="services" className="services-section">
        <div className="services-container">
          <div className="about-header">
            <div className="section-badge">Our Services</div>
            <h2 className="section-title-1">Complete Medical Equipment Solutions</h2>
          </div>

          <div className="services-grid">
            <div className="services-list">
              <div className="service-item">
                <div className="service-icon">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="service-title">Equipment Installation</h3>
                  <p className="service-description">
                    Professional installation and setup of medical equipment with comprehensive testing.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="service-title">Training & Support</h3>
                  <p className="service-description">
                    Comprehensive training programs for medical staff and ongoing technical support.
                  </p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="service-title">Maintenance Services</h3>
                  <p className="service-description">
                    Regular maintenance and calibration services to ensure optimal equipment performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="why-choose-us">
              <h3 className="why-choose-title">Why Choose Us?</h3>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <div className="benefit-dot">
                    <div className="benefit-dot-inner"></div>
                  </div>
                  <span className="benefit-text">15+ years of industry experience</span>
                </li>
                <li className="benefit-item">
                  <div className="benefit-dot">
                    <div className="benefit-dot-inner"></div>
                  </div>
                  <span className="benefit-text">Certified and quality-assured products</span>
                </li>
                <li className="benefit-item">
                  <div className="benefit-dot">
                    <div className="benefit-dot-inner"></div>
                  </div>
                  <span className="benefit-text">24/7 customer support</span>
                </li>
                <li className="benefit-item">
                  <div className="benefit-dot">
                    <div className="benefit-dot-inner"></div>
                  </div>
                  <span className="benefit-text">Nationwide delivery and service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
   <BrandSliderDemo/>
    <DailyLifeSection />
    



     </div>
     
     </>;
          
          
          
    
  };
  
  export default Home