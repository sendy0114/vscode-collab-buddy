import React from 'react';
import { Link } from 'react-router-dom';

interface MegaMenuDescriptionProps {
  title: string;
  description: string;
  featuredCard?: {
    title: string;
    description: string;
    link: string;
    image?: string;
  };
}

export const MegaMenuDescription: React.FC<MegaMenuDescriptionProps> = ({
  title,
  description,
  featuredCard,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {featuredCard && (
        <Link
          to={featuredCard.link}
          className="block group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 hover:shadow-lg transition-all duration-300"
        >
          {featuredCard.image ? (
            <div className="relative h-36 overflow-hidden">
              <img
                src={featuredCard.image}
                alt={featuredCard.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-bold text-sm mb-1">{featuredCard.title}</h4>
                <p className="text-xs opacity-90">{featuredCard.description}</p>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <h4 className="font-bold text-sm text-gray-900 mb-2">
                {featuredCard.title}
              </h4>
              <p className="text-xs text-gray-600">{featuredCard.description}</p>
              <div className="mt-3 flex items-center text-site-maroon text-xs font-semibold">
                <span>Learn more</span>
                <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </Link>
      )}
    </div>
  );
};