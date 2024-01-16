interface ProductProps {
  name: string;
  description: string;
  image: string;
  price: number;
  link:string;
}
export default function Product(props:any) {
    
        const product = [{
          name: 'ZIP-96V',
          description: 'This is product 1',
          price: 100,
          image: 'zip-96.jpg',
      },
      
  ]
    
    return (
      <div className="product-info">
    <a href={props.link}><img src={props.image} alt="" width={320} height={300}/></a> 
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
  </div>

      
    );
  }
   