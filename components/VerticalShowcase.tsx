import React, { useState, useEffect, useMemo, useCallback } from 'react';

const showcaseImages = [
  "/featured-jewelry-1.png",
  "https://loremflickr.com/280/380/jewelry,diamond?lock=10",
  "https://loremflickr.com/280/380/jewelry,platinum?lock=12",
  "https://loremflickr.com/280/380/jewelry,gold?lock=11",
  "https://loremflickr.com/280/380/jewelry,necklace?lock=13",
];

export const VerticalShowcase: React.FC = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, []);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showcaseImages.map((src, index) => {
          let offset = index - activeIndex;
          if (offset > showcaseImages.length / 2) offset -= showcaseImages.length;
          if (offset < -showcaseImages.length / 2) offset += showcaseImages.length;

          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const isVisible = absOffset <= 2;

          // Same calculations as original carousel but for vertical cards
          const translateX = offset * 120; // Horizontal spacing between cards
          const scale = 1 - absOffset * 0.2;
          const zIndex = 10 - absOffset;
          const opacity = absOffset > 2 ? 0 : 1;
          const rotateY = offset * -15; // Strong rotation like original

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out rounded-lg overflow-hidden cursor-pointer"
              style={{
                width: '280px',
                height: '380px',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: isActive ? '0 30px 60px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.15)',
                cursor: 'pointer',
                zIndex: zIndex,
                opacity: opacity,
                transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                pointerEvents: isVisible ? 'auto' : 'none',
                filter: isActive ? 'brightness(1.05)' : 'brightness(0.9) blur(1px)',
              }}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest mb-1 block">Collection 2024</span>
                  <h3 className="font-serif text-xl">Luxe Piece #{index + 1}</h3>
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
});
