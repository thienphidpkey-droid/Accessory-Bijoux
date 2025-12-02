import React, { useState, useEffect } from 'react';

const showcaseImages = [
  "/featured-jewelry-1.png",
  "https://loremflickr.com/280/380/jewelry,diamond?lock=10",
  "https://loremflickr.com/280/380/jewelry,platinum?lock=12",
  "https://loremflickr.com/280/380/jewelry,gold?lock=11",
  "https://loremflickr.com/280/380/jewelry,necklace?lock=13",
];

export const VerticalShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      {/* Header */}
      <div className="mb-6 text-center lg:text-left w-full">
        <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-slate mb-2 block">
          Exclusive Gallery
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-luxury-black">
          Masterpiece <span className="italic text-luxury-silver">Showcase</span>
        </h3>
      </div>

      {/* 3D Carousel Container */}
      <div
        className="relative w-full perspective-1000"
        style={{ height: '420px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {showcaseImages.map((src, index) => {
          let offset = index - activeIndex;
          if (offset > showcaseImages.length / 2) offset -= showcaseImages.length;
          if (offset < -showcaseImages.length / 2) offset += showcaseImages.length;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= 1;

          const translateZ = -absOffset * 80;
          const translateY = offset * 15;
          const scale = 1 - absOffset * 0.25;
          const opacity = absOffset > 1 ? 0 : 1 - absOffset * 0.4;
          const rotateY = offset * -8;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out rounded-lg overflow-hidden cursor-pointer preserve-3d"
              style={{
                width: '280px',
                height: '380px',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: isActive
                  ? '0 25px 50px rgba(0, 0, 0, 0.35)'
                  : '0 15px 30px rgba(0, 0, 0, 0.2)',
                transform: `translate(-50%, -50%) translateZ(${translateZ}px) translateY(${translateY}px) scale(${scale}) rotateY(${rotateY}deg)`,
                opacity: opacity,
                zIndex: 10 - absOffset,
                pointerEvents: isVisible ? 'auto' : 'none',
                filter: isActive ? 'brightness(1.05)' : 'brightness(0.85) blur(1px)',
              }}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[9px] uppercase tracking-widest mb-1 block">Collection 2024</span>
                  <h4 className="font-serif text-lg">Luxe Piece #{index + 1}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-luxury-silver/30 hover:bg-luxury-black hover:text-white hover:border-luxury-black transition-all group flex items-center justify-center"
          aria-label="Previous"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform block text-sm">←</span>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-luxury-silver/30 hover:bg-luxury-black hover:text-white hover:border-luxury-black transition-all group flex items-center justify-center"
          aria-label="Next"
        >
          <span className="group-hover:translate-x-0.5 transition-transform block text-sm">→</span>
        </button>
      </div>
    </div>
  );
};
