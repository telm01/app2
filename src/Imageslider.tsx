import { useState } from 'react';
import './csss/Imageslider.css';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const number = images.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? number - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === number - 1 ? 0 : current + 1);
  };

  const ImageSliderStyles = {
    transform: `translateX(-${current * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={ImageSliderStyles}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="slider-nav">
        <div onClick={prevSlide} className="prev" aria-label="Previous slide">
          &#10094;
        </div>
        <div onClick={nextSlide} className="next" aria-label="Next slide">
          &#10095;
        </div>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`dot ${index === current ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const images = [
  'zybia.jpg',
  're940.jpg',
  'zip-96.jpg',
];

export default ImageSlider;