import Product from "../components/product";

import ImageSlider from "../Imageslider";

const Products = () => {
  const products = [
    {
      name: 'ZIP-96V',
      description: 'Zip 96V',
      price: 100,
      image: 'zip-96.jpg',
      link:'https://www.zybio.com/productxq/40/106.html',
  },
    {
        name: 'zybia',
        description: 'zybia',
        price: 200,
        image: 'zybia.jpg',
        link:'https://www.omnia-health.com/product/z3',
    },
    {
      name: 'Vitamin D',
      description: 'Vitamin D',
      price: 200,
      image: 'vd3.jpg',
      link:'https://www.muller-pharma.com/eshop/vitamin-d/',
  },
  {
    name: 'Respons 910',
    description: 'Respons 910',
    price: 200,
    image: 'respons910.png',
    link:'https://www.diasys-diagnostics.com/products/instruments/respons910/',
},    {
  name: 'Respons 940',
  description: 'Respons 940',
  price: 200,
  image: 'reospons940.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/responsr940/',
},    {
  name: 'minifine 60',
  description: 'minifine 60',
  price: 200,
  image: 'minifine60.png',
  link:'https://www.omnia-health.com/product/z3',
},    {
  name: 'MC 15',
  description: 'MC 15',
  price: 200,
  image: 'mc15.jpg',
  link:'https://www.diasys-diagnostics.com/products/instruments/stardust-mc15/',
},    {
  name: 'KT 6400',
  description: 'KT 6400',
  price: 200,
  image: 'kt64000.jpg',
  link:'https://www.genrui-bio.com/products/diff-hematology-kt-6400-3.html',
},    {
  name: 'kt-8000',
  description: 'kt-8000',
  price: 200,
  image: 'kt-8000.jpg',
  link:'https://www.genrui-bio.com/products/kt-8000-simply-more-efficient.html',
}, {
  name: 'kt-10',
  description: 'kt-10',
  price: 200,
  image: 'kt-10.jpg',
  link:'https://www.genrui-bio.com/products/poct-hematology-analyzer-kt-10.html',
}, {
  name: ' GE 300',
  description: 'GE 300',
  price: 200,
  image: 'GE300.jpg',
  link:'https://www.genrui-bio.com/products/electrolyte-analyzer-ge300.html',
}, {
  name: 'CA 540',
  description: 'CA 540',
  price: 200,
  image: 'ca540.jpg',
  link:'https://www.omnia-health.com/product/z3',
}, {
  name: 'bk-600',
  description: 'bk-600',
  price: 200,
  image: 'bk-600.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-600-pd47733905.html',
}, {
  name: 'bk-200',
  description: 'bk-200',
  price: 200,
  image: 'bk-200.jpg',
  link:'https://www.biobase.cc/Auto-Chemistry-Analyzer-BK-200-pd42186305.html',
},
    // ... add more products as needed
];
  ;
    return <>
    <ImageSlider></ImageSlider>
    <div className="pp">
   
    <div className="products">
            {products.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </div>
       
      </div></>;
  };
  
  export default Products;