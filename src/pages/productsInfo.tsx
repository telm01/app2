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
        name: 'respons 420c Biochemistry analyzer',
        description: 'ZIP-96V – 96-well real-time PCR system with advanced optics and precise temperature control for pathogen detection, genotyping, and gene expression analysis.',
        price: 200,
        image: 'zybia.jpg',
        link:'https://www.omnia-health.com/product/z3',
        brand:'Omnia Health',
    },
    
  {
    name: 'Respons 910',
    description: 'respons®910 – Compact, fully automated benchtop analyzer for clinical chemistry, designed for efficiency, ease of use, and optimized workflow in laboratories.',
    price: 200,
    image: 'respons910.png',
    link:'https://www.diasys-diagnostics.com/products/instruments/respons910/',
    brand:'Diasys',
},    {
  name: 'Respons 940',
  description: 'lorem ishjcbvudbirespons®940 – Automated clinical chemistry analyzer with 400 tests/h throughput (expandable to 640 tests/h with ISE), supporting mono- and two-component reagents.',
  price: 200,
  image: 'reospons940.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-line/responsr940/',
brand:'Diasys',
},    {
  name: 'Automatic immunoassay analyzer minifine 60',
  description: 'Minifinee 60 – Compact benchtop analyzer for clinical diagnostics, automating chemiluminescence/enzyme immunoassay testing on plasma & whole blood samples.',
  price: 200,
  image: 'minifine60.png',
  link:'https://www.medicalexpo.com/prod/genrui-biotech-inc/product-116737-1055285.html',
brand:'Medicalexpo',
},    {
  name: 'Stardust MC 15',
  description: 'StarDust MC15 – High-speed semi-automated photometer processing 15 tests/minute (endpoint) or 15 tests/4 minutes (kinetic) with integrated incubation and mixing. ',
  price: 200,
  image: 'mc15.jpg',
link:'https://www.diasys-diagnostics.com/products/instruments/stardust-mc15/',
brand:'Diasys',
},    {
  name: 'Genrui KT 6400',
  description: 'Genrui KT 6400 – Efficient 3-part hematology analyzer (60 T/H) with optimized reagents for accurate low-PLT results, low consumption, and streamlined workflow',
  price: 200,
  image: 'kt64000.jpg',
  link:'https://www.genrui-bio.com/products/diff-hematology-kt-6400-3.html',
brand:'Genrui Bio',
},    {
  name: 'kt-8000',
  description: 'KT-8000 – Fully automated hematology analyzer with auto-loader, smart counting mode, and dual loading options for efficient, hands-free operation',
  price: 200,
  image: 'kt-8000.jpg',
  link:'https://www.genrui-bio.com/products/kt-8000-simply-more-efficient.html',
brand:'Genrui Bio',
}, {
  name: 'respons240c Biochemitry Anlyzer',
  description: 'kt-10',
  price: 200,
  image: 'kt-10.jpg',
  link:'https://www.genrui-bio.com/products/poct-hematology-analyzer-kt-10.html',
brand:'genrui Bio',
}, {
  name: 'Electrolyte Analyzer GE300',
  description: 'Genrui GE300 – Reliable electrolyte analyzer testing 60 samples/hour for ions & TCO2, with intuitive software and efficient reagent integration',
  price: 200,
  image: 'GE300.jpg',
  link:'https://www.genrui-bio.com/products/electrolyte-analyzer-ge300.html',
brand:'Genrui Bio',
}, {
  name: 'respons 600c Biochemistry analyzer',
  description: 'CA 540',
  price: 200,
  image: 'ca540.jpg',
  link:'https://www.omnia-health.com/product/z3',
brand:'Omnia Health',
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
  name: 'Zoncai XL1000 Coagulation analyzer',
  description: 'The XL1000 Coagulation analyzer is a fully automated blood coagulation analyzer designed for efficient, accurate, and reliable testing. Using coagulation and immunoturbidimetric methods, it supports routine and specialized assays with high throughput. Its intelligent automation, stable temperature control, intuitive software, and LIS connectivity ensure consistent results, reduced manual errors, and dependable performance for modern clinical laboratories',
  price: 200,
  image: 'zonci Coagulation analyzer.jpg',
  link:' http://www.zonci.com/details_en/651.html',
brand:'Zoncai' ,
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

