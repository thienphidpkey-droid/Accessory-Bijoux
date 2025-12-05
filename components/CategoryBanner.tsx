import React from 'react';

interface CategoryBannerProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    id?: string;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({
    title,
    subtitle,
    imageUrl,
    id
}) => {
    return (
        <div
            id={id}
            className="relative w-full h-[400px] md:h-[500px] overflow-hidden border border-luxury-platinum/40 group"
        >
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundAttachment: 'fixed'
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

            {/* Glassmorphism Content Container */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 px-12 py-8 md:px-20 md:py-12 shadow-2xl">
                    {subtitle && (
                        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/90 mb-3 text-center font-light">
                            {subtitle}
                        </p>
                    )}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white text-center tracking-tight">
                        {title}
                    </h2>
                </div>
            </div>

            {/* Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-silver to-transparent" />
        </div>
    );
};
