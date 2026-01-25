import Product from "../components/product";

const contaimentInfo = () => {
  const products = [
  {
  }
        
     
    

 
  
 
  
  
  
 
  
    // ... add more products as needed
];
  ;
    return <><div className="Compass"><p>/Products/general information</p></div>
    
    
      <div className="products">
         <div className="products1">
                <div className="Products-header">
                  <h1>Featured Medical Products</h1>
              <p>
                High-precision laboratory instruments and trusted medical consumables
                designed for clinical accuracy, safety, and reliability.
              </p>
                </div>
                    <div className="Grid">
                             {products.map((product, index) => (
                                    <Product key={index} {...product} />
                                ))}
                          </div>
              </div>
          </div></>;
  };
  
  export default contaimentInfo;