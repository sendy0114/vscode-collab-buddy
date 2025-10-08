import React from 'react';
import { Link } from 'react-router-dom';
import { MegaMenuContent } from '../types';

interface MegaMenuProps {
  content: MegaMenuContent;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ 
  content, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const { description, links, featuredSolutions } = content;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 z-50 animate-fade-in"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-8 py-12 px-8">
          {/* Left Column - Description & Featured Card */}
          <div className="col-span-3 flex flex-col space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {description.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description.text}
              </p>
            </div>
            
            <Link 
              to={description.featured.link} 
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={description.featured.imageUrl}
                  alt={description.featured.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h4 className="font-bold text-base mb-1">
                    {description.featured.title}
                  </h4>
                  <p className="text-sm text-white/90 mb-3">
                    {description.featured.text}
                  </p>
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-lg group-hover:bg-orange-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle Column - Service Links */}
          <div className="col-span-5 px-4">
            <div className="grid grid-cols-1 gap-1">
              {links.map((linkItem, index) => (
                <div key={linkItem.path}>
                  <Link
                    to={linkItem.path}
                    className="group flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-50 text-orange-500 mr-4 group-hover:bg-orange-100 transition-colors flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {linkItem.title}
                      </span>
                      {linkItem.items && linkItem.items.length > 0 && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {linkItem.items.map(item => item.name).join(', ')}
                        </p>
                      )}
                    </div>
                  </Link>
                  {index < links.length - 1 && (
                    <div className="h-px bg-gray-100 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Solution Cards */}
          <div className="col-span-4 flex flex-col space-y-4">
            {featuredSolutions.map((solution) => (
              <Link
                key={solution.path}
                to={solution.path}
                className="group block rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-orange-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={solution.imageUrl ?? 'https://placehold.co/400x200'}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {solution.title}
                  </h4>
                  {solution.subtitle && (
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {solution.subtitle}
                    </p>
                  )}
                  {solution.buttonText && (
                    <span className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                      {solution.buttonText}
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
