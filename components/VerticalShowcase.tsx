import React from 'react';

const showcaseImages = [
  "/featured-jewelry-1.png",
  "https://loremflickr.com/300/400/jewelry,diamond?lock=10",
  "https://loremflickr.com/300/400/jewelry,platinum?lock=12",
];

export const VerticalShowcase: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-slate mb-2 block">
          Exclusive Gallery
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-luxury-black">
          Masterpiece <span className="italic text-luxury-silver">Showcase</span>
        </h3>
      </div>
      
      {showcaseImages.map((src, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          style={{
            aspectRatio: '3/4',
            minHeight: '200px',
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[9px] uppercase tracking-widest mb-1 block opacity-80">
              Collection 2024
            </span>
            <h4 className="font-serif text-lg">Luxe Piece #{index + 1}</h4>
          </div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      ))}
    </div>
  );
};
