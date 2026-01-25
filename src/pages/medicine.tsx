import Product from "../components/product";

const MedicineInfo = () => {
  const products = [
  {
      name: 'Vitamin D',
      description: 'Vitamin D3 (cholecalciferol) – A vital fat-soluble vitamin from sunlight and foods like fish oil; recommended daily intake is 1,000–2,000 IU for adults.',
      price: 200,
      image: 'vd3.jpg',
      link:'https://www.muller-pharma.com/eshop/vitamin-d/',
      brand:'Muller Pharma',
  },
    {
      name: 'Vitamin D',
      description: 'Vitamin D3 (cholecalciferol) – A vital fat-soluble vitamin from sunlight and foods like fish oil; recommended daily intake is 1,000–2,000 IU for adults.',
      price: 200,
      image: 'vd3.jpg',
      link:'https://www.muller-pharma.com/eshop/vitamin-d/',
      brand:'Muller Pharma',
  },
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
  
  export default MedicineInfo;