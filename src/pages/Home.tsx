

import BackgroundSlider from"../BackgroundSlider"
import ImagePanel from "../ImagePanel";
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
        <h3>Best sellers</h3>
      <div className="product-description">
        <img    src="kt-8000.jpg" alt="Product Image"></img> 
            <h2>Discover Our Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus.</p>
            <a href="/Product" className="cta-button">Buy Now</a>
        </div>
        <div className="product-description">
        <img    src="minifine60.png" alt="Product Image"></img> 
            <h2>Discover Our Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus.</p>
            <a href="/Product" className="cta-button">Buy Now</a>
        </div>
        
        <div className="product-description">
        <img    src="D3.jpg" alt="Product Image"></img> 
            <h2>Discover Our Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus.</p>
            <a href="/Product" className="cta-button">Buy Now</a>
        </div>

        
    </section>
<h3 className="up">Up coming </h3>
      <div className="hot">
       <h3>The respons®910 is a compact,</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus. </p>
        <img src="room2.jpg" alt="" width={450}  height={300
        }/>
      </div>
     <div className="new">
        <h3>The respons®940 is an</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lectus at congue tempus. </p>
         <img src="room2.jpg" alt="" width={450}  height={300}/>
     </div>
     <BackgroundSlider></BackgroundSlider>
     
     <div className="pic" title="Moving laboratory">
    <img src="lab.jpg" alt="" width={100}  height={100}></img>
    <h3>Moving laboratory</h3>
    <p>This a lab that is made for daily movement . It can perform basic analyzing that any common lab can do </p>
     </div>
     
     
     <section className="features-section">
        
        <div className="f1">
             
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
       
        <div className="f2">
            
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div className="f3">
        
           
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </section>
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