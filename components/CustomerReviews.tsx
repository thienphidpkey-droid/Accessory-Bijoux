import React, { useState } from 'react';
import { CustomerReview } from '../constants';
import { FadeIn } from './FadeIn';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface CustomerReviewsProps {
    reviews: CustomerReview[];
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const currentReview = reviews[currentIndex];

    return (
        <section className="py-20 md:py-32 bg-slate-50/50 border-y border-luxury-platinum/40">
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-[0.4em] text-luxury-slate mb-4 block">
                            Customer Stories
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-luxury-black">
                            Treasured <span className="text-luxury-silver italic">Moments</span>
                        </h2>
                    </div>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="relative">
                        {/* Review Card */}
                        <div className="bg-white border-2 border-luxury-platinum/30 p-8 md:p-12 shadow-lg">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={currentReview.avatar}
                                        alt={currentReview.name}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-luxury-silver/30"
                                    />
                                </div>

                                {/* Review Content */}
                                <div className="flex-grow">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(currentReview.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-luxury-slate text-luxury-slate"
                                            />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-6 italic">
                                        "{currentReview.review}"
                                    </p>

                                    {/* Reviewer Info */}
                                    <div className="border-t border-luxury-platinum/30 pt-4">
                                        <p className="font-serif text-lg text-luxury-black mb-1">
                                            {currentReview.name}
                                        </p>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            {currentReview.location} • {currentReview.date}
                                        </p>
                                        <p className="text-xs text-luxury-slate mt-2 tracking-wide">
                                            Purchased: {currentReview.product}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevReview}
                                className="p-3 border border-luxury-black/20 hover:bg-luxury-black hover:text-white transition-all"
                                aria-label="Previous review"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextReview}
                                className="p-3 border border-luxury-black/20 hover:bg-luxury-black hover:text-white transition-all"
                                aria-label="Next review"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                            ? 'bg-luxury-black w-8'
                                            : 'bg-luxury-platinum/40'
                                        }`}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
