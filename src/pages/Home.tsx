

import BackgroundSlider from"../BackgroundSlider"
import ImagePanel from "../ImagePanel";
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
              <div className="hero-badge-floating">
                <div className="flex items-center space-x-3">
                  <div className="hero-badge-icon">
                    <p className="h-6 w-6" />
                  </div>
                  <div className="certificate">
                    <p className="font">ISO Certified</p>
                    <p className="text0">Quality Assured</p>
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
      <section className="product-section">
        <h3>Comprehensive Medical Equipment Range</h3>
        <p>From diagnostic equipment to surgical instruments, we offer a complete range of medical devices from world-renowned manufacturers.</p>
         <div className="product-section2">
        <div className="product-description"> 
        <img    src="KitsForRespons.jpg" alt="Product Image" width={100} height={100}></img> 
            <h2>Biochemical reagents</h2>
            <p>Kits for full automated biochemical analyzer Respons systems.
            </p>
            <a href="/Product" className="cta-button">Contact</a>
        </div>
        <div className="product-description">
        <img    src="BioBaseRefrigerator.jpg" alt="Product Image" width={70} height={70} ></img> 
            <h2>BPR-5V238 refrigaror for laboratory</h2>
            <p>Capacity - 238L
              Temp Range - 	2℃~8℃
              Microprocessor Control, Large Screen LED Display.</p>
            <a href="/Product" className="cta-button">Contact</a>
        </div>
        
        <div className="product-description">
        <img    src="D3.jpg" alt="Product Image" width={120} height={150}></img> 
            <h2>Vitamin D3</h2>
            <p>Oral spray.It contains 500 IU of vitamin D3 in one dose.</p>
            <a href="/Product" className="cta-button">Contact</a>
        </div>
        </div>
    

        
    </section>
    <div className="up-coming">
        <h3 className="up">Up coming </h3>

      <div className="hot"><div className="hot-1">
        
      </div>
       <h3>Truenat systems
       </h3>
        <p>Truelab® Duo Real Time Quantitative micro PCR Analyzer <strong>-</strong>Trueprep® AUTO v2 Universal Cartridge Based Sample Prep Device <strong>-</strong>Truenat® Disease Specific Real Time micro PCR Chips   </p>
        <img src="TrueNat-systems.jpg" alt="" />
      </div>
     <div className="new">
        <h3>Telemedicine Monitor HES-7</h3>
    
     <p><strong>Mean parameters</strong>
     ECG-,HR , SPO2, PR, NIBP, TEMP, Urine,
     <h1>Optiional  Glucose, Blood Lipid, WBC, Hemoglobin , UA,CRP, HbA1c, Liver function, Kidney function , Lung function , Weight, Vitamin D , Ultrasound-stethoscope </h1>
     
      </p>
         <img src="KonsungMonitor-HES7.jpg" alt=""  />
     </div>
     
     
     <div className="pic" title="Moving laboratory">
    <img src="KonsungMonitorWithAccessory.jpg" alt="" width={100} height={10}></img>
    <h3>Mobile out-patient's clinic with lab</h3>
    <p>The instrument is light and potable and the medical staff can carry their handbags to complete the follow-up easily.</p>
     </div>
      </div>
    
    <h3 className="feat1">Daily life with us</h3>
    <div className="feat">
    
    <div className="feat2">
      <img src="with-czech.jpg" alt="" ></img></div>
      <div className="feat2">
       <img src="with-diasys.jpg" alt="" ></img>
       
       </div>
       <div className="feat2">
       <img src="hall.jpg" alt="" ></img></div>
       <div className="feat2">
       <img src="ech-urs.jpg" alt="" ></img></div>
       <div className="feat2">
       <img src="product1.jpg" alt="" ></img></div>
      </div>
      <div className="feat">
    
    <div className="feat2">
      <img src="at-factory.jpg" alt="" ></img></div>
      <div className="feat2">
       <img src="award.jpg" alt="" ></img>
       
       </div>
       <div className="feat2">
       <img src="at-companies.jpg" alt="" ></img></div>
       <div className="feat2">
       <img src="atdiasys2.jpg" alt="" ></img></div>
       <div className="feat2">
       <img src="award2.jpg" alt="" ></img></div>
      </div>



     </div>
     
     </>;
          
          
          
    
  };
  
  export default Home