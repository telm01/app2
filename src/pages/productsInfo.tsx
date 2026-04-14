import Product from "../components/product";

const productsInfo = () => {
  const products = [
    {
      name: 'ZIP-96V',
      description: 'ZIP-96V – 96-well real-time PCR system with advanced optics and precise temperature control for pathogen detection, genotyping, and gene expression analysis.',
      price: 100,
      image: 'zip-96.jpg',
      link:'https://www.zybio.com/productxq/40/106.html',
      brand:'Zybio',
  },
  
    
  {
    name: 'Respons 910',
    description: 'respons®910 – Compact, fully automated benchtop analyzer for clinical chemistry, designed for efficiency, ease of use, and optimized workflow in laboratories.',
    price: 200,
    image: 'respons910.png',
    link:'https://www.diasys-diagnostics.com/user/textbausteine/instruments/',
    brand:'Diasys',
},    {
  name: 'Respons 940',
  description: 'lorem ishjcbvudbirespons®940 – Automated clinical chemistry analyzer with 400 tests/h throughput (expandable to 640 tests/h with ISE), supporting mono- and two-component reagents.',
  price: 200,
  image: 'reospons940.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-line/responsr940/',
brand:'Diasys',
},      {
  name: 'Stardust MC 15',
  description: 'StarDust MC15 – High-speed semi-automated photometer processing 15 tests/minute (endpoint) or 15 tests/4 minutes (kinetic) with integrated incubation and mixing. ',
  price: 200,
  image: 'mc15.jpg',
link:'https://www.diasys-diagnostics.com/products/instruments/stardust-mc15/',
brand:'Diasys',
},  {
  name: 'Electrolyte Analyzer GE300',
  description: 'Genrui GE300 – Reliable electrolyte analyzer testing 60 samples/hour for ions & TCO2, with intuitive software and efficient reagent integration',
  price: 200,
  image: 'GE300.jpg',
  link:'https://www.genrui-bio.com/products/electrolyte-analyzer-ge300.html',
brand:'Genrui Bio',
}, {
  name: 'Auto Chemistry Analyzer BK-600 ',
  description: ' It is used to quantitatively analyze the clinical chemistry of human serum, plasma, urine, cerebrospinal fluid and other samples. Do not use for other purposes.',
  price: 200,
  image: 'bk-600.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-600-pd47733905.html',
brand:'Biobase',
}, {
  name: 'Auto Chemistry Analyzer BK-200 ',
  description: 'It is used to quantitatively analyze the clinical chemistry of human serum, plasma, urine, cerebrospinal fluid and other samples. Do not use for other purposes.',
  price: 200,
  image: 'bk-200.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-200-pd42186305.html',
brand:'Biobase',
},
{
  name: 'Zonci XL1000 Coagulation analyzer',
  description: 'The XL1000 Coagulation analyzer is a fully automated blood coagulation analyzer designed for efficient, accurate, and reliable testing. Using coagulation and immunoturbidimetric methods, it supports routine and specialized assays with high throughput. Its intelligent automation, stable temperature control, intuitive software, and LIS connectivity ensure consistent results, reduced manual errors, and dependable performance for modern clinical laboratories',
  price: 200,
  image: 'zonci Coagulation analyzer.jpg',
  link:' http://www.zonci.com/details_en/651.html',
brand:'Zonci' ,
},{
  name: 'Respons 420c Biochemistry analyzer',
  description: 'Experience laboratory work redefined. respons®420c is a fully automated random access analyzer designed to deliver reliable results with a constant throughput of up to 420 tests per hour (620 tests/hour incl. ISE). Due to its optimal cost-effectiveness and ease of use, it perfectly fits in small to medium sized laboratories.',
  price: 200,
  image: 'respons 420c Biochemistry analyzer.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-c-line/respons420c/',
brand:'Diasys' ,
},{
  name: 'Respons 600c Biochemistry analyzer',
  description: 'The respons®600c is a fully automated random access analyzer for medium-sized laboratories, delivering up to 600 tests per hour, or 800 with ISE. Its compact design, 120-sample rack loader, low reaction volumes, maintenance-free photometer, and intuitive software ensure efficient workflow, cost-effectiveness, and reliable performance for demanding laboratory workloads.',
  price: 200,
  image: 'respons 600c Biochemistry analyzer.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-c-line/respons600c/',
brand:'Diasys' ,
},{
  name:' Respons 240c Biochemistry analyzer',
  description: 'Experience efficient and reliable laboratory testing with the respons®240c, a fully automated benchtop analyzer ideal for small laboratories. It delivers 240 tests per hour, or up to 400 with optional ISE. Its compact design, user-friendly interface, low operating costs, minimal maintenance, and precise results make it a valuable laboratory solution.',
  price: 200,
  image: 'respons240c Biochemistry analyzer.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-c-line/respons240c',
brand:'Diasys' ,
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
  
  export default productsInfo;

