import React from 'react';
import { PRODUCTS } from './constants';
import { ProductCard } from './components/ProductCard';
import { ParallaxBackground } from './components/ParallaxBackground';
import { FadeIn } from './components/FadeIn';
import { VerticalShowcase } from './components/VerticalShowcase';
import { ChevronDown, ShoppingBag, Menu, Search } from 'lucide-react';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-[1px]">
    <div className="text-2xl font-serif text-luxury-black tracking-widest">
      LUXE <span className="text-luxury-silver font-light italic">BIJOUX</span>
    </div>
    <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans font-medium">
      <a href="#" className="hover:text-luxury-black transition-colors">High Jewelry</a>
      <a href="#" className="hover:text-luxury-black transition-colors">Rings</a>
      <a href="#" className="hover:text-luxury-black transition-colors">Necklaces</a>
      <a href="#" className="hover:text-luxury-black transition-colors">Gifts</a>
    </div>
    <div className="flex items-center gap-8 text-luxury-black/80">
      <Search className="w-4 h-4 cursor-pointer hover:text-luxury-slate transition-colors" />
      <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-luxury-slate transition-colors" />
      <Menu className="w-5 h-5 md:hidden cursor-pointer" />
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20">
    <div className="max-w-7xl mx-auto w-full z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - PURE PLATINUM Content */}
        <FadeIn className="text-center lg:text-left">
          <div className="mb-6 inline-block">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-luxury-slate border-b border-luxury-silver/40 pb-3">
              Winter 2024 Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-luxury-black mb-8 leading-[0.9] tracking-tight">
            PURE <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-luxury-silver via-gray-400 to-gray-600 italic">
              PLATINUM
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-sans font-light tracking-wide max-w-xl lg:mx-0 mx-auto mb-12 leading-relaxed">
            Handcrafted silver and platinum masterpieces. <br />
            <span className="text-luxury-black mt-2 block">Designed for the modern era.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start items-center">
            <button className="px-10 py-4 bg-luxury-black text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-slate transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              Shop Collection
            </button>
            <button className="px-10 py-4 bg-transparent border border-luxury-black/20 text-luxury-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-black hover:text-white transition-all">
              View Lookbook
            </button>
          </div>
        </FadeIn>

        {/* Right Column - Masterpiece Showcase Vertical Cards */}
        <FadeIn delay={200} className="flex justify-center lg:justify-end">
          <VerticalShowcase />
        </FadeIn>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <ChevronDown className="text-luxury-black w-5 h-5" />
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-slate-50 py-24 px-6 border-t border-luxury-platinum">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
      <div>
        <div className="text-2xl font-serif text-luxury-black tracking-widest mb-6">
          LUXE <span className="text-luxury-silver italic">BIJOUX</span>
        </div>
        <p className="text-gray-500 text-xs tracking-widest uppercase max-w-sm leading-7">
          Purveyors of fine silver and platinum since 1924. <br />
          Paris • New York • Tokyo
        </p>
      </div>
      <div className="flex flex-col md:items-end gap-6">
        <div className="flex gap-8 text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-luxury-black transition-colors">Concierge</a>
          <a href="#" className="hover:text-luxury-black transition-colors">Boutiques</a>
          <a href="#" className="hover:text-luxury-black transition-colors">Legal</a>
        </div>
        <p className="text-gray-400 text-[10px] tracking-wider">© 2024 Luxe Bijoux House. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative min-h-screen text-luxury-black font-sans selection:bg-luxury-silver selection:text-white">
      <ParallaxBackground />
      <Navbar />

      <Hero />

      <main className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b border-luxury-platinum pb-8 gap-4">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black">
              Curated <span className="text-luxury-silver italic">Selection</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Autumn / Winter 2024
            </span>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 100}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-40 mb-20">
          <div className="relative w-full overflow-hidden bg-slate-100 border border-white group cursor-pointer shadow-lg">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-100 to-slate-200 opacity-80"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-silver/50 to-transparent"></div>

            <div className="relative z-10 px-8 py-24 md:py-36 text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-slate mb-4 block">The Privilege Club</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-luxury-black">
                THE <span className="italic text-luxury-silver">SILVER</span> CIRCLE
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-light tracking-wide mb-12 max-w-xl mx-auto leading-loose">
                Join our exclusive members-only circle for early access to rare platinum acquisitions and private showroom viewings.
              </p>
              <button className="px-12 py-4 bg-transparent border border-luxury-black text-luxury-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-black hover:text-white transition-all duration-500">
                Request Invitation
              </button>
            </div>
          </div>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}