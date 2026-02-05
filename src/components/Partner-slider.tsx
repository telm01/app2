import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partners = [
  {
    name: "Айти",
    logo: "/aiti.jpg?height=80&width=160",
    link:"https://itlaboratory.mn/",
  },
  {
    name: "Прецилаб",
    logo: "/pretsilab.jpg?height=80&width=160",
    link:"https://www.precilab.mn/",
  },
  {
    name: "Problab",
   logo: "/problab.jpg?height=80&width=160",
   link:"https://www.facebook.com/Protlaboratory/",
  },
  {
    name: "Tseenee clinic",
    logo: "tseenee.jpg?height=80&width=160",
    link:"https://www.tseene.mn/",
  },
  {
    name: "Darkhan Saruul Clinic",
    logo: "/darkhan.jpg?height=80&width=160",
    link:"https://www.facebook.com/darkhansaruulmed/",
  },
  {
    name: "Nalaikh district health center",
    logo: "nalaikh.jpg?height=80&width=160",
    link:" https://www.facebook.com/profile.php?id=100063494295121",
  },
  {
    name: "Sport, medicine and research center",
    logo: "/sport.jpg?height=80&width=160",
    link:" https://www.facebook.com/smrcmongolia/",
  },
  {
    name: "BGZ district central hospital",
    logo: "/bayanzurh.jpg?height=80&width=160",
    link:"https://www.facebook.com/BayanzurkhEmneleg/",
  },
  {
    name: "BGZ district health organization",
    logo: "/BGZ.jpg?height=80&width=160",
    link:"https://bzemn.ub.gov.mn/",
  },
  {
    name: "Health and safety of labour organization",
    logo: "/Habemt.jpg?height=80&width=160",
    link:"/",
  },
  {
    name: "Shinomed hospital",
    logo: "/SHinomed.jpg?height=80&width=160",
    link:"https://shinonmed.mn/",
  },
];

export function PartnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === partners.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? partners.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === partners.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="brand-slider-container">
      <div className="brand-slider-header">
        <h2>Domestic partners</h2>
        <p>Join thousands of companies that trust our platform</p>
      </div>

      <div
        className="brand-slider-main"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Main slider container */}
        <div className="brand-slider-inner">
          <div
            className="brand-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {partners.map((partners, index) => (
              <div
                key={index}
                className="brand-slide"
              ><a href={partners.link}>
                <img
                  src={partners.logo || "/placeholder.svg"}
                  alt={`${partners.name} logo`}
                  className="brand-logo"
                />
              </a>
                
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className="brand-slider-button brand-slider-button-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="brand-slider-icon" />
        </button>

        <button
          className="brand-slider-button brand-slider-button-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="brand-slider-icon" />
        </button>

        {/* Dots indicator */}
        <div className="brand-slider-dots">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`brand-slider-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Brand grid for larger screens */}
      <div className="brand-grid">
        {partners.slice(0, 4).map((partners, index) => (
          <div key={index} className="brand-grid-item">
            <img
              src={partners.logo || "/placeholder.svg"}
              alt={`${partners.name} logo`}
              className="brand-grid-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}