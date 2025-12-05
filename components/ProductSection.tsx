import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { CategoryBanner } from './CategoryBanner';
import { FadeIn } from './FadeIn';
import { ArrowRight } from 'lucide-react';

interface ProductSectionProps {
    title: string;
    subtitle?: string;
    bannerImage: string;
    products: Product[];
    sectionId?: string;
    onViewAll?: () => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
    title,
    subtitle,
    bannerImage,
    products,
    sectionId,
    onViewAll
}) => {
    // Get first 8 products for display
    const displayProducts = products.slice(0, 8);

    return (
        <section className="mb-32">
            {/* Category Banner */}
            <FadeIn>
                <CategoryBanner
                    title={title}
                    subtitle={subtitle}
                    imageUrl={bannerImage}
                    id={sectionId}
                />
            </FadeIn>

            {/* Products Grid */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                {displayProducts.map((product, index) => (
                    <FadeIn key={product.id} delay={index * 80}>
                        <ProductCard product={product} />
                    </FadeIn>
                ))}
            </div>

            {/* View All Button */}
            <FadeIn delay={400}>
                <div className="mt-16 flex justify-center">
                    <button
                        onClick={onViewAll}
                        className="group flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-luxury-black/20 text-luxury-black text-xs font-bold uppercase tracking-[0.25em] hover:bg-luxury-black hover:text-white hover:border-luxury-black transition-all duration-300"
                    >
                        View All {title}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </FadeIn>
        </section>
    );
};
