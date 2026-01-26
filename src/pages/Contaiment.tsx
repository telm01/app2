import Product from "../components/product";

const contaimentInfo = () => {
  const products = [
 {
      name: 'Biobase lab freezer',
      description: 'The -86 ℃ freezer ‌ is a kind of ultra-low temperature refrigeration equipment, which is widely used in scientific research, medical treatment, biological engineering and other fields. Its main function is to provide an extremely low temperature environment to preserve temperature-sensitive samples and materials.',
      price: 100,
      image: 'lab freezer.jpg',
      link:'https://www.biobase.cc/86-Freezer-588L-728L-838L-BDF-86V588-BDF-86V728-BDF-86V838-pd45907324.html',
      brand:'Biobase',
  },
    {
        name: 'Biobase Biosafety cabinet',
        description: 'This cabinet defined as class II A2 type microbiological safety cabinet. It totally meets that international standard for biological cabinet EN 12469:2000 standard. Microbiological safety cabinet is a kind of negative pressure filtration system for protecting operator, the laboratory environment and work material.',
        price: 200,
        image: 'Biobase Biosafety cabinet.png',
        link:'https://www.biobase.cc/EN-Certified-Biological-Safety-Cabinet-pd42309205.html',
        brand:'Biobase',
    },
   
  {
    name: 'Biobase laboratory refrigerator',
    description: 'The laboratory refrigerator is a device specifically designed for use in the laboratory environment with a set of key characteristics that make it ideal for storing reagents, media, proteins and other products, as well as other biomedical samples, in research, clinical and industrial laboratories.',
    price: 200,
    image: 'Biobase laboratory refrigerator.jpg',
    link:'https://www.biobase.cc/Laboratory-Refrigerator-pd527400598.html',
    brand:'Biobase',
},   
{
    name: 'Biobase Water purifier',
    description: 'Laboratory water purifier is a pure water preparation equipment specially used in laboratories, which converts tap water or other water sources into high-purity water that meets laboratory requirements through a series of physical and chemical processes. These processes include pretreatment, reverse osmosis, ion exchange, ultrafiltration, UV sterilization, etc., to ensure that the quality of the final produced water meets or exceeds the standards required by the laboratory.',
    price: 200,
    image: 'Biobase Water purifier.jpg',
    link:'https://www.biobase.cc/Water-Purifier-RO-DI-Water-pd48406095.html',
    brand:'Biobase',
},    
     
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