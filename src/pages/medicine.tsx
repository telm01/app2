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
      name: 'Zoncai coaulation reagents',
      description: 'This coagulation reagent range supports comprehensive hemostasis testing, including PT, APTT, TT, FIB, D-Dimer, FDP, and ATIII assays. Available in lyophilized or liquid formats, it also includes calibrators and controls to ensure accuracy, consistency, and reliable quality control for routine and specialized coagulation analysis in clinical laboratories.',
      price: 200,
      image: 'Zoncai coaulation reagents.png',
      link:'http://www.zonci.com/coagulation_reagent_en.html',
      brand:'Zoncai' ,
  },
    {
      name: 'Genrui electrolyte reagents and hematology reagent.',
      description: 'Genrui electrolyte and hematology reagents are designed to deliver accurate, stable, and reproducible results for routine laboratory testing. Covering essential electrolytes and hematology parameters, these reagents ensure reliable performance, excellent compatibility with automated analyzers, and consistent quality control, supporting efficient workflows and dependable diagnostics in clinical laboratories.',
      price: 200,
      image: 'Genrui.Electrolyte reagnents and hemotology reagent.jpg',
      link:'/',
      brand:'Genrui Bio',
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