import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  activeIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, activeIndex, onNext, onPrev, onSelect }) => {
  return (
    <div className="relative w-full h-full group">
      {/* Gambar Carousel */}
      {images.map((img, i) => (
        <img 
          key={i} 
          src={img} 
          alt={`Slide ${i}`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`} 
        />
      ))}
      
      {/* Overlay Gelap Tipis */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Indikator Titik (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={() => onSelect(i)}
            className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'bg-white w-6' : 'bg-white/40 w-1.5 hover:bg-white/60'}`} 
          />
        ))}
      </div>

      {/* Tombol Navigasi (Hanya muncul di Desktop saat Hover) */}
      <button 
        onClick={onPrev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>
      <button 
        onClick={onNext} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>
    </div>
  );
};

export default Carousel;