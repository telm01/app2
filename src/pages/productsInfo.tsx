import Product from "../components/product";

const productsInfo = () => {
  const products = [
    {
      name: 'ZIP-96V',
      description: 'ZIP-96V – 96-well real-time PCR system with advanced optics and precise temperature control for pathogen detection, genotyping, and gene expression analysis.',
      price: 100,
      image: 'zip-96.jpg',
      link:'https://www.zybio.com/productxq/40/106.html',
  },
    {
        name: 'respons 420c Biochemistry analyzer',
        description: 'ZIP-96V – 96-well real-time PCR system with advanced optics and precise temperature control for pathogen detection, genotyping, and gene expression analysis.',
        price: 200,
        image: 'respons 420c Biochemistry analyzer.jpg',
        link:'https://www.diasys-diagnostics.com/products/instruments/respons-c-line/respons420c/',
    },
    
  {
    name: 'Respons 910',
    description: 'respons®910 – Compact, fully automated benchtop analyzer for clinical chemistry, designed for efficiency, ease of use, and optimized workflow in laboratories.',
    price: 200,
    image: 'respons910.png',
    link:'https://www.diasys-diagnostics.com/products/instruments/respons910/',
},    {
  name: 'Respons 940',
  description: 'lorem ishjcbvudbirespons®940 – Automated clinical chemistry analyzer with 400 tests/h throughput (expandable to 640 tests/h with ISE), supporting mono- and two-component reagents.',
  price: 200,
  image: 'reospons940.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-line/responsr940/',
},    {
  name: 'Automatic immunoassay analyzer minifine 60',
  description: 'Minifinee 60 – Compact benchtop analyzer for clinical diagnostics, automating chemiluminescence/enzyme immunoassay testing on plasma & whole blood samples.',
  price: 200,
  image: 'minifine60.png',
  link:'https://www.medicalexpo.com/prod/genrui-biotech-inc/product-116737-1055285.html',
},    {
  name: 'Stardust MC 15',
  description: 'StarDust MC15 – High-speed semi-automated photometer processing 15 tests/minute (endpoint) or 15 tests/4 minutes (kinetic) with integrated incubation and mixing. ',
  price: 200,
  image: 'mc15.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/stardust-mc15/',
},    {
  name: 'Genrui KT 6400',
  description: 'Genrui KT 6400 – Efficient 3-part hematology analyzer (60 T/H) with optimized reagents for accurate low-PLT results, low consumption, and streamlined workflow',
  price: 200,
  image: 'kt64000.jpg',
  link:'https://www.genrui-bio.com/products/diff-hematology-kt-6400-3.html',
},    {
  name: 'kt-8000',
  description: 'KT-8000 – Fully automated hematology analyzer with auto-loader, smart counting mode, and dual loading options for efficient, hands-free operation',
  price: 200,
  image: 'kt-8000.jpg',
  link:'https://www.genrui-bio.com/products/kt-8000-simply-more-efficient.html',
}, {
  name: 'respons240c Biochemitry Anlyzer',
  description: 'kt-10',
  price: 200,
  image: 'respons240c Biochemistry Analyzer.jpg',
  link:'http://www.zonci.com/introduction_en.html',
}, {
  name: 'Electrolyte Analyzer GE300',
  description: 'Genrui GE300 – Reliable electrolyte analyzer testing 60 samples/hour for ions & TCO2, with intuitive software and efficient reagent integration',
  price: 200,
  image: 'GE300.jpg',
  link:'https://www.genrui-bio.com/products/electrolyte-analyzer-ge300.html',
}, {
  name: 'respons 600c Biochemistry analyzer',
  description: 'CA 540',
  price: 200,
  image: 'respons 600c Biochemistry analyzer.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/respons-c-line/respons600c/',
}, {
  name: 'Auto Chemistry Analyzer BK-600 ',
  description: ' Quantitatively tests serum, plasma, urine, CSF; for medical use only',
  price: 200,
  image: 'bk-600.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-600-pd47733905.html',
}, {
  name: 'Auto Chemistry Analyzer BK-200 ',
  description: 'Analyzes human serum, plasma, urine, and CSF samples quantitatively',
  price: 200,
  image: 'bk-200.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-200-pd42186305.html',
},
{
  name: 'Zoncai Coagulation analyzer',
  description: 'Analyzes human serum, plasma, urine, and CSF samples quantitatively',
  price: 200,
  image: 'zonci Coagulation analyzer.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-200-pd42186305.html',
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

