interface ProductProps {
    name: string;
    description: string;
    image: string;
    price: number;
  }
  export default function Product(props:any) {
      
          const product = {
            
            name: 'Sample Product',
            description: 'This is a sample product description.',
            // price: 19.99,
            
          };
      
      return (
        <div className="product-info">
      <a href="/Contact"><img src={props.image} alt="" width={320} height={300}/></a> 
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
    </div>
  
        
      );
    };
    