import Product from "../components/product";

import ImageSlider from "../Imageslider";

const Products = () => {
  const products = [
    {
      name: 'ZIP-96V',
      description: 'This is product 1',
      price: 100,
      image: 'zip-96.jpg',
      link:'https://www.diasys-diagnostics.com',
  },
    {
        name: 'Product 2',
        description: 'This is product 2',
        price: 200,
        image: 'zybia.jpg',
    },
    {
      name: 'Product 2',
      description: 'This is product 2',
      price: 200,
      image: 'vd3.jpg',
  },
  {
    name: 'Product 2',
    description: 'This is product 2',
    price: 200,
    image: 'respons910.jpg',
},    {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'reospons940.jpg',
},    {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'minifine60.png',
},    {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'mc15.jpg',
},    {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'kt64000.jpg',
},    {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'kt-8000.jpg',
}, {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'kt-10.jpg',
}, {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'GE300.jpg',
}, {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'ca540.jpg',
}, {
  name: 'Product 2',
  description: 'This is product 2',
  price: 200,
  image: 'bk-600.jpg',
}, {
  name: 'Product 2',
  description: 'This is product 2',
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