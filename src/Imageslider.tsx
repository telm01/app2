import React, { useState } from 'react';
import './csss/Imageslider.css';

const ImageSlider = () => {
 const [current, setCurrent] = useState(0);
 const length = images.length;

 const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
 };

 const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
 };

 const ImageSliderStyles = {
    transition: 'all .5s ease-in-out',
    transform: `translateX(-${current * (100 / length)}%)`,
 };

 return (
    <div className="slider">
      <div className="slider-wrapper" style={ImageSliderStyles}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <div onClick={prevSlide} className="prev">
          &#10094;
        </div>
        <div onClick={nextSlide} className="next">
          &#10095;
        </div>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={index === current ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
 );
};

const images = [
 'product1.jpg',
 'monitor.jpg',
 'repomse920-2.jpg',
 're940.jpg',
 'zip-96v.jpg',
 'zybio.jpg',
 'respons910.jpg',
 'reospons940.jpg',
 'minifine60.png',
 'mc15.jpg',
 'kt64000.jpg',
 'kt-8000.jpg',
 'kt-10.jpg',
 'GE300.jpg',
 'fa50.jpg',
 'ca540.jpg',
 'bk-600.jpg',
 'bk-200.jpg',
 
 
];

export default ImageSlider;
