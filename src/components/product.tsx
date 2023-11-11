export default function Product(props:any) {
    
        const product = {
          
          name: 'Sample Product',
          description: 'This is a sample product description.',
          price: 19.99,
          
        };
    
    return (
      <div className="product-info">
        <img src="hurgugch.jpg" alt="" width={320}  height={300}/>
          <><h2>{product.name}</h2>
        <p>{product.description}</p>
        
        <p>Price: ${product.price}</p>
        </>
      </div>
      
    );
  }
   