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
      <div className="absolute left-0 top-0 h-[1024px] w-[680px] overflow-hidden">
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
        className="absolute left-[37px] size-[50px] top-[487px] cursor-pointer hover:opacity-80 transition-opacity"
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
        className="absolute left-[566px] size-[50px] top-[487px] cursor-pointer hover:opacity-80 transition-opacity"
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
      <div className="absolute h-[10px] left-[290px] top-[970px] w-[51px]">
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
      <div className="absolute bottom-[40px] left-[20px] z-10">
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