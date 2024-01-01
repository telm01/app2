import Product from "../components/product";

import ImageSlider from "../Imageslider";

const Products = () => {
  const products = [
    {
        name: 'Product 3',
        description: 'This is product 1',
        price: 100,
        image: 'rm.jpg',
    },
    {
        name: 'Product 2',
        description: 'This is product 2',
        price: 200,
        image: 're940.jpg',
    },
    {
      name: 'Product 2',
      description: 'This is product 2',
      price: 200,
      image: 'vd3.jpg',
  },
    // ... add more products as needed
];
  <img src="hurgugch.jpg" alt="" width={100} height={100} />;
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