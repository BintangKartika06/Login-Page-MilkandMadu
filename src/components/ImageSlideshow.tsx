import React, { useState, useEffect } from 'react';
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';

const ImageSlideshow: React.FC = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageSlideshow;
