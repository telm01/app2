export default function Product(props:any) {
    return (
      
      <div className="product-info">
    <a href={props.link}>
      <div className="Image-box">
<img src={props.image} alt="" width={320} height={300}/>
      </div>
      </a> 
    <div className="product-1">
      <span className="tag">{props.brand}
      </span>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <div className="Learn-more">Learn more </div>
    </div>
      
      
  </div>

      
    );
  }