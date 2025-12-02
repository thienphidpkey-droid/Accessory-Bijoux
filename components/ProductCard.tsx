import React from 'react';
import { Product } from '../types';
import { ArrowRight, Gem, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = React.memo(({ product }) => {
  return (
    <div className="group w-full aspect-square perspective-1000 cursor-pointer">
      <div className="relative w-full h-full duration-700 preserve-3d group-hover:rotate-y-180 transition-transform ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_20px_50px_rgba(0,0,0,0.1)]">

        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-sm overflow-hidden bg-white border border-luxury-platinum">
          {/* Zoom effect on image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-95 group-hover:opacity-100"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />

          <div className="absolute top-4 left-4 z-20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white border border-white/30 px-3 py-1 bg-black/20 backdrop-blur-sm">
              {product.category}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 z-20 w-[90%]">
            {/* Animated Glint on Text Hover */}
            <h3 className="text-xl font-serif italic text-white mb-2 relative inline-block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-luxury-silver group-hover:to-white group-hover:animate-shimmer bg-[length:200%_auto]">
              {product.name}
            </h3>
            <div className="flex items-center gap-4 text-sm font-sans tracking-widest">
              <span className="text-white font-light">{product.price}</span>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-sm overflow-hidden bg-white border border-luxury-platinum flex flex-col items-center justify-center p-8 text-center shadow-inner">
          {/* Shimmering gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-slate-50 to-transparent opacity-50 animate-shimmer bg-[length:200%_200%] pointer-events-none"></div>

          {/* Subtle glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-luxury-platinum/30 rounded-full blur-3xl -z-0"></div>

          <div className="relative z-10 flex flex-col items-center h-full justify-center w-full">
            <Gem className="w-6 h-6 text-luxury-silver mb-5 opacity-80" />
            <h4 className="text-xl font-serif text-luxury-black mb-3 tracking-wide">{product.name}</h4>
            <div className="w-8 h-px bg-luxury-silver/40 mx-auto mb-5"></div>
            <p className="text-gray-500 text-xs leading-loose mb-6 font-light tracking-wide uppercase">
              {product.fullDescription}
            </p>

            <div className="flex flex-col gap-3 w-full px-2">
              <button className="group/btn flex items-center justify-center gap-2 w-full text-[10px] uppercase tracking-[0.2em] bg-luxury-black text-white px-6 py-3 hover:bg-luxury-slate transition-all duration-300">
                Details
                <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
              </button>
              {/* Quick View Button */}
              <button className="group/view flex items-center justify-center gap-2 w-full text-[10px] uppercase tracking-[0.2em] border border-luxury-silver text-luxury-black px-6 py-2 hover:bg-luxury-charcoal transition-all duration-300">
                Quick View
                <Eye className="w-3 h-3" />
              </button>
              <span className="text-[10px] text-gray-400 line-through mt-1">{product.originalPrice}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});