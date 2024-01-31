import Product from "../components/product";

import ImageSlider from "../Imageslider";

const Products = () => {
  const products = [
    {
      name: 'ZIP-96V',
      description: 'Zip 96V',
      price: 100,
      image: 'zip-96.jpg',
      link:'https://www.diasys-diagnostics.com',
  },
    {
        name: 'zybia',
        description: 'zybia',
        price: 200,
        image: 'zybia.jpg',
    },
    {
      name: 'Vitamin D',
      description: 'Vitamin D',
      price: 200,
      image: 'vd3.jpg',
  },
  {
    name: 'Respons 910',
    description: 'Respons 910',
    price: 200,
    image: 'respons910.png',
},    {
  name: 'Respons 940',
  description: 'Respons 940',
  price: 200,
  image: 'reospons940.jpg',
},    {
  name: 'minifine 60',
  description: 'minifine 60',
  price: 200,
  image: 'minifine60.png',
},    {
  name: 'MC 15',
  description: 'MC 15',
  price: 200,
  image: 'mc15.jpg',
},    {
  name: 'KT 6400',
  description: 'KT 6400',
  price: 200,
  image: 'kt64000.jpg',
},    {
  name: 'kt-8000',
  description: 'kt-8000',
  price: 200,
  image: 'kt-8000.jpg',
}, {
  name: 'kt-10',
  description: 'kt-10',
  price: 200,
  image: 'kt-10.jpg',
}, {
  name: ' GE 300',
  description: 'GE 300',
  price: 200,
  image: 'GE300.jpg',
}, {
  name: 'CA 540',
  description: 'CA 540',
  price: 200,
  image: 'ca540.jpg',
}, {
  name: 'bk-600',
  description: 'bk-600',
  price: 200,
  image: 'bk-600.jpg',
}, {
  name: 'bk-200',
  description: 'bk-200',
  price: 200,
  image: 'bk-200.jpg',
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