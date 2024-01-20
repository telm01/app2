import React, { Component } from 'react';
import './csss/backgroundslider.css';
interface AutoImageSliderProps {}

interface AutoImageSliderState {
  images: string[];
  currentIndex: number;
}

class AutoImageSlider extends Component<AutoImageSliderProps, AutoImageSliderState> {
  private interval: NodeJS.Timeout | null = null;

  constructor(props: AutoImageSliderProps) {
    super(props);

    this.state = {
      images: [
        're940.jpg',
        'zip-96.jpg',
        'zybia.jpg',
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
        "D3.jpg",
        
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.startAutoSlider();
  }

  componentWillUnmount() {
    this.stopAutoSlider();
  }

  startAutoSlider = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.images.length,
      }));
    }, 3000); // Change image every 3 seconds (adjust as needed)
  }

  stopAutoSlider = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="auto-slider-container">
        <div className="auto-slider">
          <img width={500} height={300} 
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
      </div>
    );
  }
}

export default AutoImageSlider;

