import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const VerticalTestimonialCarousel = () => {
    const testimonials = [
        {
            id: 1,
            name: "Manohar Kumar",
            company: "Diamond Portal",
            rating: 5.0,
            image: "https://ui-avatars.com/api/?name=Manohar+Kumar&background=1e40af&color=fff&size=128"
        },
        {
            id: 2,
            name: "Junyoung Kim",
            company: "NewBizStart",
            rating: 5.0,
            image: "https://ui-avatars.com/api/?name=Junyoung+Kim&background=7c3aed&color=fff&size=128"
        },
        {
            id: 3,
            name: "Kieran Osborne",
            company: "B-Cart's Triumph",
            rating: 5.0,
            image: "https://ui-avatars.com/api/?name=Kieran+Osborne&background=059669&color=fff&size=128"
        },
        {
            id: 4,
            name: "John Madison",
            company: "Diamond Portal",
            rating: 5.0,
            image: "https://ui-avatars.com/api/?name=John+Madison&background=dc2626&color=fff&size=128"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused, testimonials.length]);

    const getVisibleIndices = () => {
        const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
        const next = (currentIndex + 1) % testimonials.length;
        return { prev, current: currentIndex, next };
    };

    const { prev, current, next } = getVisibleIndices();

    const TestimonialCard = ({ testimonial, position }) => {
        const isCenter = position === 'center';

        return (
            <div
                className={`
          absolute w-full transition-all duration-500 ease-out
          ${position === 'top' ? 'top-0 opacity-40 scale-90' : ''}
          ${position === 'center' ? 'top-1/2 -translate-y-1/2 opacity-100 scale-100 z-10' : ''}
          ${position === 'bottom' ? 'bottom-0 opacity-40 scale-90' : ''}
        `}
            >
                <div className={`
          flex items-center gap-3 mx-auto w-fit
          ${isCenter ? 'bg-white px-5 py-4 rounded-2xl shadow-xl' : 'bg-gray-50 px-4 py-3 rounded-xl'}
        `}>
                    {/* Avatar */}
                    <div className={`
            rounded-full overflow-hidden flex-shrink-0
            ${isCenter ? 'w-14 h-14 ring-4 ring-blue-100' : 'w-12 h-12'}
          `}>
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col">
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-0.5">
                            <span className={`
                font-bold
                ${isCenter ? 'text-base text-yellow-500' : 'text-sm text-yellow-400'}
              `}>
                                {testimonial.rating}
                            </span>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`
                      fill-current
                      ${isCenter ? 'w-3.5 h-3.5 text-yellow-500' : 'w-3 h-3 text-yellow-400'}
                    `}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Name */}
                        <div className={`
              font-bold leading-tight
              ${isCenter ? 'text-base text-blue-900' : 'text-sm text-gray-700'}
            `}>
                            {testimonial.name}
                        </div>

                        {/* Company */}
                        <div className={`
              ${isCenter ? 'text-sm text-blue-600' : 'text-xs text-gray-500'}
            `}>
                            {testimonial.company}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
            <div
                className="relative w-80 h-96"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradient overlays */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 to-transparent z-20 pointer-events-none" />

                {/* Cards */}
                <div className="relative w-full h-full">
                    <TestimonialCard testimonial={testimonials[prev]} position="top" />
                    <TestimonialCard testimonial={testimonials[current]} position="center" />
                    <TestimonialCard testimonial={testimonials[next]} position="bottom" />
                </div>

                {/* Navigation dots */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${idx === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}
              `}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VerticalTestimonialCarousel;