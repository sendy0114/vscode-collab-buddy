import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedItem {
    title: string;
    subtitle?: string;
    description?: string;
    link: string;
    image?: string;
    buttonText?: string;
}

interface MegaMenuFeaturedProps {
    // Ensure 'items' is treated as an array, even if undefined in the prop data
    items: FeaturedItem[] | undefined | null;
}

export const MegaMenuFeatured: React.FC<MegaMenuFeaturedProps> = ({ items }) => {
    const featuredItems = items ?? [];

    return (
        <div className="space-y-4 transition-all duration-300">
            {featuredItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className="group block rounded-xl overflow-hidden bg-white border border-gray-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                >
                    {item.image && (
                        <div className="relative h-32 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}
                    <div className="p-4">
                        {item.subtitle && (
                            <div className="text-xs font-semibold text-orange-600 mb-1 uppercase tracking-wide">
                                {item.subtitle}
                            </div>
                        )}
                        <h4 className="font-bold text-sm text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                            {item.title}
                        </h4>
                        {item.description && (
                            <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                {item.description}
                            </p>
                        )}
                        {item.buttonText && (
                            <div className="flex items-center text-orange-600 text-xs font-semibold">
                                <span>{item.buttonText}</span>
                                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};