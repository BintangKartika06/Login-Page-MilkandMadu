import { useState, useEffect } from "react";
import imgAlexanderStartsevNdNw6QgrCUnsplash1 from "image/image2.png";
import imgBrunaBrancoT8HTmte4OGUnsplash1 from "image/image3.png";
import imgMaeMuTkzdkVn1AyAUnsplash1 from "image/image1.png";
import svgPaths from "../imports/svg-fjrt8ztqe1";

const images = [
  imgMaeMuTkzdkVn1AyAUnsplash1,
  imgBrunaBrancoT8HTmte4OGUnsplash1,
  imgAlexanderStartsevNdNw6QgrCUnsplash1,
];

const imageCredits = [
  { name: "Mae Mu", unsplashUrl: "https://unsplash.com/@picoftasty" },
  { name: "Bruna Branco", unsplashUrl: "https://unsplash.com/@brunabranco" },
  { name: "Alexander Startsev", unsplashUrl: "https://unsplash.com/@alexanderstarsev" },
];

export function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={img}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 size-12 cursor-pointer hover:opacity-80 transition-opacity z-10"
        aria-label="Previous slide"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
          <g opacity="0.53">
            <circle cx="25" cy="25" fill="white" fillOpacity="0.26" r="25" />
            <g>
              <path d={svgPaths.p16d28800} fill="#D9D9D9" />
              <path d={svgPaths.p1573d4f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 size-12 cursor-pointer hover:opacity-80 transition-opacity z-10"
        aria-label="Next slide"
      >
        <div className="-scale-y-100 rotate-180">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
            <g opacity="0.53">
              <circle cx="25" cy="25" fill="white" fillOpacity="0.26" r="25" />
              <g>
                <path d={svgPaths.p16d28800} fill="#D9D9D9" />
                <path d={svgPaths.p1573d4f0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </g>
          </svg>
        </div>
      </button>

      {/* Slider dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-2.5 w-12 z-10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 10">
          <g>
            {[0, 26, 46].map((cx, index) => (
              <circle
                key={index}
                cx={cx}
                cy="5"
                fill="white"
                opacity={index === currentIndex ? 1 : 0.5}
                r="5"
                className="cursor-pointer"
                onClick={() => goToSlide(index)}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Photo Credit */}
      <div className="absolute bottom-4 left-4 z-10">
        <a
          href={imageCredits[currentIndex].unsplashUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white text-sm font-['Poppins:Regular',sans-serif] transition-colors backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full"
        >
          Photo by {imageCredits[currentIndex].name}
        </a>
      </div>
    </>
  );
}