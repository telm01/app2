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
  {
      name: 'Kits for respons',
      description: 'Vitamin D3 (cholecalciferol) – A vital fat-soluble vitamin from sunlight and foods like fish oil; recommended daily intake is 1,000–2,000 IU for adults.',
      price: 200,
      image: 'kits for respons.jpg',
      link:'https://www.diasys-diagnostics.com/products/kit-lines/kits-for-respons/',
  },
  {
      name: 'Zoncai coaulation reagents',
      description: 'Vitamin D3 (cholecalciferol) – A vital fat-soluble vitamin from sunlight and foods like fish oil; recommended daily intake is 1,000–2,000 IU for adults.',
      price: 200,
      image: 'Zoncai coaulation reagents.png',
      link:'http://www.zonci.com/coagulation_reagent_en.html',
  },
    {
      name: 'Genrui electrolyte reagents and hematology reagent.',
      description: 'Vitamin D3 (cholecalciferol) – A vital fat-soluble vitamin from sunlight and foods like fish oil; recommended daily intake is 1,000–2,000 IU for adults.',
      price: 200,
      image: 'Genrui.Electrolyte reagnents and hemotology reagent.jpg',
      link:'/',
  },
    // ... add more products as needed
];
  ;
    return <><div className="Compass"><p>/Products/general information</p></div>
    
    
<<<<<<< HEAD
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
=======
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
>>>>>>> c18304c8e88bcf2bf21757c7edd9eddb6d57dcee
  };
  
  export default MedicineInfo;