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
        <div className="grid grid-cols-12 gap-6 py-10 px-6">
          {/* Left Column - Description & Featured Card */}
          <div className="col-span-3 flex flex-col space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">
                {description.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description.text}
              </p>
            </div>
            
            <Link 
              to={description.featured.link} 
              className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mt-auto"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={description.featured.imageUrl}
                  alt={description.featured.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-sm mb-1">
                    {description.featured.title}
                  </h4>
                  <p className="text-xs text-white/90 mb-2">
                    {description.featured.text}
                  </p>
                  <div className="inline-flex items-center justify-center w-9 h-9 bg-orange-500 rounded-lg group-hover:bg-orange-600 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle Column - Service Links */}
          <div className="col-span-5 px-3">
            <div className="grid grid-cols-1 gap-0.5">
              {links.map((linkItem, index) => (
                <div key={linkItem.path}>
                  <Link
                    to={linkItem.path}
                    className="group flex items-start py-2.5 px-3 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-7 h-7 rounded-md bg-orange-50 text-orange-500 mr-3 mt-0.5 group-hover:bg-orange-100 transition-colors flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {linkItem.title}
                      </div>
                      {linkItem.items && linkItem.items.length > 0 && (
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {linkItem.items.map(item => item.name).join(', ')}
                        </p>
                      )}
                    </div>
                  </Link>
                  {index < links.length - 1 && (
                    <div className="h-px bg-gray-100 mx-3" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Solution Cards */}
          <div className="col-span-4 flex flex-col space-y-3">
            {featuredSolutions.map((solution) => (
              <Link
                key={solution.path}
                to={solution.path}
                className="group block rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={solution.imageUrl ?? 'https://placehold.co/400x200'}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {solution.title}
                  </h4>
                  {solution.subtitle && (
                    <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                      {solution.subtitle}
                    </p>
                  )}
                  {solution.buttonText && (
                    <span className="inline-flex items-center text-xs font-semibold text-orange-600 group-hover:text-orange-700">
                      {solution.buttonText}
                      <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
