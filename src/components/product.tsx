export default function Product(props:any) {
    return (
      <div className="product-info">
    <a href={props.link}><img src={props.image} alt="" width={320} height={300}/></a> 
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      
  </div>

      
    );
  }
   