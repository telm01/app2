import Product from "../components/product";

const contaimentInfo = () => {
  const products = [
<<<<<<< HEAD
  {
  }
        
     
    

 
  
 
  
  
  
 
  
=======
    {
      name: 'Biobase lab freezer',
      description: 'ZIP-96V – 96-well real-time PCR system with advanced optics and precise temperature control for pathogen detection, genotyping, and gene expression analysis.',
      price: 100,
      image: 'lab freezer.jpg',
      link:'https://www.biobase.cc/86-Freezer-588L-728L-838L-BDF-86V588-BDF-86V728-BDF-86V838-pd45907324.html',
  },
    {
        name: 'Biobase Biosafety cabinet',
        description: 'ZIP-96V – 96-well real-time PCR system with advanced optics and precise temperature control for pathogen detection, genotyping, and gene expression analysis.',
        price: 200,
        image: 'Biobase Biosafety cabinet.png',
        link:'https://www.biobase.cc/EN-Certified-Biological-Safety-Cabinet-pd42309205.html',
    },
   
  {
    name: 'Biobase laboratory refrigerator',
    description: 'respons®910 – Compact, fully automated benchtop analyzer for clinical chemistry, designed for efficiency, ease of use, and optimized workflow in laboratories.',
    price: 200,
    image: 'Biobase laboratory refrigerator.jpg',
    link:'https://www.biobase.cc/Laboratory-Refrigerator-pd527400598.html',
},   
{
    name: 'Biobase Water purifier',
    description: 'respons®910 – Compact, fully automated benchtop analyzer for clinical chemistry, designed for efficiency, ease of use, and optimized workflow in laboratories.',
    price: 200,
    image: 'Biobase Water purifier.jpg',
    link:'https://www.biobase.cc/Water-Purifier-RO-DI-Water-pd48406095.html',
},   
>>>>>>> c18304c8e88bcf2bf21757c7edd9eddb6d57dcee
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
  
  export default contaimentInfo;