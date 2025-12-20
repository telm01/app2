import Product from "../components/product";

const MedicineInfo = () => {
  const products = [
  {
      name: 'Vitamin D',
      description: 'Vitamin D3 (cholecalciferol) – A vital fat-soluble vitamin from sunlight and foods like fish oil; recommended daily intake is 1,000–2,000 IU for adults.',
      price: 200,
      image: 'vd3.jpg',
      link:'https://www.muller-pharma.com/eshop/vitamin-d/',
  },
    // ... add more products as needed
];
  ;
    return <><div className="Compass"><p>/Products/general information</p></div>
    
    
    <div className="products">
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
            
        
       
      </div></>;
  };
  
  export default MedicineInfo;