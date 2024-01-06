

import BackgroundSlider from"../BackgroundSlider"
const Home = () => {
     return <><div>
      
      <div className="hero1">
          <h1>Medical solution for your Business</h1>
            <p>Areas of our activity:
              <p>
              Import, sell, repair and repair laboratory and medical equipment
 <p>
 <a href="/Contact" className="cta-button">Contact now</a>
</p>
              </p>
            </p>
      </div>
      <section className="product-section">
      <div className="product-description">
        <img    src="product1.jpg" alt="Product Image"></img> 
            <h2>Discover Our Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus.</p>
            <a href="#" className="cta-button">Buy Now</a>
        </div>
        <div className="product-description">
        <img    src="product1.jpg" alt="Product Image"></img> 
            <h2>Discover Our Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus.</p>
            <a href="#" className="cta-button">Buy Now</a>
        </div>
        
        <div className="product-description">
        <img    src="product1.jpg" alt="Product Image"></img> 
            <h2>Discover Our Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus.</p>
            <a href="#" className="cta-button">Buy Now</a>
        </div>
        
    </section>

      
<BackgroundSlider></BackgroundSlider>
      <div className="hot">
       
        <p>The respons®910 is a compact, automated benchtop analyzer for efficient clinical chemistry, designed with user-friendly operation.</p><img src="910.jpg" alt="" width={500}  height={100}/>
        
        
        
       
      
      </div>




     <div className="new">
        
     <p>The respons®940 is an automated clinical chemistry analyzer with a minimum throughput of 400 tests/h, reaching 640 tests/h with the optional ISE module.</p>
         <img src="re940.jpg" alt="" width={450}  height={300}/>
        
        
     </div>
     <div className="hot">
        
        <p>Remote patient monitors track vital signs and health data outside traditional healthcare settings for continuous monitoring and personalized care..</p><img src="monitor.jpg" alt="" width={450}  height={300}/>
        
        
        
       
      
      </div>




     <div className="new">
        
        <p>
        Vitamin D3, synthesized by the skin in sunlight, can be supplemented with fish oil, liver, or egg yolk. Czech Republic's Ministry of Health recommends 1,000–2,000 IU daily for adults.</p>
        <img src="D3.jpg" alt="" width={450}  height={300}/>
        
        
     </div>
     <div className="pic">
    <img src="lab.jpg" alt="" width={100}  height={100}></img>
    <p>This a lab that is made for daily movement . It can perform basic analyzing that any common lab can do </p>
     </div>
     
     
     <section className="features-section">
        
        <div className="f1">
             
            <h3 >Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
       
        <div className="f2">
            
            <h3>Feature 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div className="f3">
        
            <h3>Feature 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
       
    </section>
    <section className="feat">
    <div className="feat1">
      <img src="re940.jpg" alt="" width={100}  height={100}></img></div>
    <div className="feat2">
      <img src="product1.jpg" alt="" width={100}  height={100}></img>
      <div className="feat2">
       <img src="product1.jpg" alt="" width={100}  height={100}></img>
       </div>
       </div>
       
      </section>
      



     </div></>;
          
          
          
    
  };
  
  export default Home