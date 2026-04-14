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
      name: 'Kits for respons',
      description: 'These kits for respons are portfolio supports routine and specialized clinical chemistry, immunology, and coagulation testing. It includes assays for enzymes, electrolytes, lipids, proteins, cardiac markers, inflammation, diabetes, renal and liver function, plus dedicated cleaners and ISE solutions, ensuring reliable performance, broad diagnostic coverage, and seamless compatibility with automated laboratory analyzers.',
      price: 200,
      image: 'kits for respons.jpg',
      link:'https://www.diasys-diagnostics.com/products/kit-lines/kits-for-respons/',
      brand:'Diasys',
  },
  {
      name: 'Zonci coaulation reagents',
      description: 'This coagulation reagent range supports comprehensive hemostasis testing, including PT, APTT, TT, FIB, D-Dimer, FDP, and ATIII assays. Available in lyophilized or liquid formats, it also includes calibrators and controls to ensure accuracy, consistency, and reliable quality control for routine and specialized coagulation analysis in clinical laboratories.',
      price: 200,
      image: 'Zoncai coaulation reagents.png',
      link:'http://www.zonci.com/coagulation_reagent_en.html',
      brand:'Zonci' ,
  },
    {
      name: 'OCUhyl C artificial tears ',
      description: 'GOCUhyl C are premium artificial tears containing hyaluronic acid and natural calendula extract. They provide intense moisturization and replace the damaged tear film on the surface of the eye. They have a protective, anti-inflammatory, and regenerative effect. Thanks to the absence of preservatives, they are also suitable for use with all types of contact lenses.',
      price: 200,
      image: 'ocuhyl.jpg',
      link:'https://www.unimedpharma.sk/en/product/ocuhyl-c',
      brand:'United Pharma',
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