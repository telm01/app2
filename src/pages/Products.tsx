import Product from "../components/product";
import productsInfo from '../pages/productsInfo'
import ImageSlider from "../Imageslider";

const Products = () => {
  
  ;
    return <><div className="Compass"><p>/Products/general information</p></div>
    
    <div className="pp">
            <section className="product-section">
        <h3>Comprehensive Medical Equipment Range</h3>
        <p>From diagnostic equipment to surgical instruments, we offer a complete range of medical devices from world-renowned manufacturers.</p>
         <div className="product-section2">
        <div className="product-description"> 
        <img    src="KitsForRespons.jpg" alt="Product Image" width={100} height={100}></img> 
            <h2>Biochemical reagents</h2>
            <p>Kits for full automated biochemical analyzer Respons systems.
            </p>
            <a href= "/productsInfo" className="cta-button">Learn more </a>
        </div>
        <div className="product-description">
        <img    src="BioBaseRefrigerator.jpg" alt="Product Image" width={70} height={70} ></img> 
            <h2>BPR-5V238 refrigaror</h2>
            <p> for laboratory
              Capacity - 238L
              Temp Range - 	2℃~8℃
              Microprocessor Control, Large Screen LED Display.</p>
            <a href="/productsInfo" className="cta-button">Contact</a>
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
          <img src="TrueNat-systems.jpg"  alt="" />
        </div>
        <div className="new"><div className="new-1">
        
      </div>
       <h3>TTelemedicine Monitor HES-7
       </h3>
        <p><strong>Mean parameters</strong>ECG-,HR , SPO2, PR, NIBP, TEMP, Urine,<strong>-</strong>Optiional  Glucose, Blood Lipid, WBC, Hemoglobin , UA,CRP, HbA1c, Liver function, Kidney function , Lung function , Weight, Vitamin D , Ultrasound-stethoscope  </p>
        <img src="KonsungMonitor-HES7.jpg" alt=""  width={400} height={400}/> <img src="KonsungMonitorWithAccessory.jpg" alt="" width={400} height={400}></img> <img src="konsung-1-monitor.jpg" alt=""  width={400} height={400}/>
          
      </div>
      </div>\
  
    
       
      </div></>;
  };
  
  export default Products;