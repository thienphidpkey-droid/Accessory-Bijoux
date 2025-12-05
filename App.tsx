import React, { useState } from 'react';
import { PRODUCTS, FEATURED_PRODUCTS, CUSTOMER_REVIEWS } from './constants';
import { ParallaxBackground } from './components/ParallaxBackground';
import { FadeIn } from './components/FadeIn';
import { VerticalShowcase } from './components/VerticalShowcase';
import { ProductSection } from './components/ProductSection';
import { FavoriteProducts } from './components/FavoriteProducts';
import { CustomerReviews } from './components/CustomerReviews';
import { ChevronDown, ShoppingBag, Menu, Search, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 bg-gradient-to-b from-white via-white/80 to-transparent backdrop-blur-[1px] border-b border-luxury-platinum/20">
        <div className="text-2xl font-serif text-luxury-black tracking-widest">
          LUXE <span className="text-luxury-silver font-light italic">BIJOUX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-sans font-medium">
          <button onClick={() => scrollToSection('favorites')} className="hover:text-luxury-black transition-colors">
            Favorites
          </button>
          <button onClick={() => scrollToSection('necklaces-1')} className="hover:text-luxury-black transition-colors">
            Necklaces
          </button>
          <button onClick={() => scrollToSection('bracelets')} className="hover:text-luxury-black transition-colors">
            Bracelets
          </button>
          <button onClick={() => scrollToSection('mens-rings')} className="hover:text-luxury-black transition-colors">
            Men's Rings
          </button>
          <button onClick={() => scrollToSection('womens-rings')} className="hover:text-luxury-black transition-colors">
            Women's Rings
          </button>
          <button onClick={() => scrollToSection('earrings')} className="hover:text-luxury-black transition-colors">
            Earrings
          </button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-luxury-black transition-colors">
            Reviews
          </button>
        </div>

        <div className="flex items-center gap-8 text-luxury-black/80">
          <Search className="w-4 h-4 cursor-pointer hover:text-luxury-slate transition-colors" />
          <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-luxury-slate transition-colors" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[80px] left-0 right-0 z-40 bg-white border-b border-luxury-platinum/40 md:hidden shadow-xl">
          <div className="flex flex-col gap-6 px-6 py-8 text-xs uppercase tracking-[0.25em] text-gray-600 font-medium">
            <button onClick={() => scrollToSection('favorites')} className="text-left hover:text-luxury-black transition-colors">
              Favorites
            </button>
            <button onClick={() => scrollToSection('necklaces-1')} className="text-left hover:text-luxury-black transition-colors">
              Necklaces
            </button>
            <button onClick={() => scrollToSection('bracelets')} className="text-left hover:text-luxury-black transition-colors">
              Bracelets
            </button>
            <button onClick={() => scrollToSection('mens-rings')} className="text-left hover:text-luxury-black transition-colors">
              Men's Rings
            </button>
            <button onClick={() => scrollToSection('womens-rings')} className="text-left hover:text-luxury-black transition-colors">
              Women's Rings
            </button>
            <button onClick={() => scrollToSection('earrings')} className="text-left hover:text-luxury-black transition-colors">
              Earrings
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left hover:text-luxury-black transition-colors">
              Reviews
            </button>
          </div>
        </div>
      )}
    </>
  );
};

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
            <button className="px-10 py-4 bg-luxury-black text-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-slate transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-2 border-luxury-black">
              Shop Collection
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-luxury-black/20 text-luxury-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-black hover:text-white transition-all">
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
  <footer className="bg-slate-50 py-24 px-6 border-t-2 border-luxury-platinum/40">
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
  // Get products by category
  const necklaces = PRODUCTS.filter(p => p.category === 'Necklaces');
  const bracelets = PRODUCTS.filter(p => p.category === 'Bracelets');
  const mensRings = PRODUCTS.filter(p => p.category === 'Mens-Rings');
  const womensRings = PRODUCTS.filter(p => p.category === 'Womens-Rings');
  const earrings = PRODUCTS.filter(p => p.category === 'Earrings');

  // Get featured products
  const favoriteProducts = PRODUCTS.filter(p => FEATURED_PRODUCTS.includes(p.id));

  return (
    <div className="relative min-h-screen text-luxury-black font-sans selection:bg-luxury-silver selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />

      <ParallaxBackground />
      <Navbar />

      <Hero />

      <main className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
        {/* Favorite Products Section */}
        <div id="favorites">
          <FavoriteProducts products={favoriteProducts} />
        </div>

        {/* Necklaces Section #1 */}
        <ProductSection
          sectionId="necklaces-1"
          title="NECKLACES"
          subtitle="Timeless Elegance"
          bannerImage="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1600&auto=format&fit=crop"
          products={necklaces.slice(0, 8)}
          onViewAll={() => console.log('View all necklaces')}
        />

        {/* Bracelets Section */}
        <ProductSection
          sectionId="bracelets"
          title="BRACELETS"
          subtitle="Wrist Sophistication"
          bannerImage="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1600&auto=format&fit=crop"
          products={bracelets}
          onViewAll={() => console.log('View all bracelets')}
        />

        {/* Men's Rings Section */}
        <ProductSection
          sectionId="mens-rings"
          title="MEN'S RINGS"
          subtitle="Bold Statements"
          bannerImage="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop"
          products={mensRings}
          onViewAll={() => console.log('View all men\'s rings')}
        />

        {/* Customer Reviews */}
        <div id="reviews">
          <CustomerReviews reviews={CUSTOMER_REVIEWS} />
        </div>

        {/* Women's Rings Section */}
        <ProductSection
          sectionId="womens-rings"
          title="WOMEN'S RINGS"
          subtitle="Eternal Beauty"
          bannerImage="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1600&auto=format&fit=crop"
          products={womensRings}
          onViewAll={() => console.log('View all women\'s rings')}
        />

        {/* Necklaces Section #2 */}
        <ProductSection
          sectionId="necklaces-2"
          title="DESIGNER NECKLACES"
          subtitle="Exclusive Collection"
          bannerImage="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop"
          products={necklaces.slice(8, 16)}
          onViewAll={() => console.log('View all designer necklaces')}
        />

        {/* Earrings Section */}
        <ProductSection
          sectionId="earrings"
          title="EARRINGS"
          subtitle="Radiant Grace"
          bannerImage="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1600&auto=format&fit=crop"
          products={earrings}
          onViewAll={() => console.log('View all earrings')}
        />
      </main>

      <Footer />
    </div>
  );
}