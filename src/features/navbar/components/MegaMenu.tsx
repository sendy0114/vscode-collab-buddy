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
      className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-fade-in"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto grid grid-cols-12 gap-8 py-10 px-8">
        {/* Left Column - Description & Featured */}
        <div className="col-span-3 flex flex-col space-y-4 border-r border-gray-100 pr-6">
          <h3 className="text-lg font-bold text-site-maroon">
            {description.title}
          </h3>
          <p className="text-sm text-gray-600">{description.text}</p>
          
          <Link to={description.featured.link} className="mt-4 group block">
            <div className="rounded-xl overflow-hidden h-36 bg-gray-100">
              <img
                src={description.featured.imageUrl}
                alt={description.featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="block mt-2 text-sm font-semibold text-site-maroon group-hover:underline">
              {description.featured.title}
            </span>
            <span className="text-xs text-gray-500">
              {description.featured.text}
            </span>
          </Link>
        </div>

        {/* Middle Column - Links Grid */}
        <div className="col-span-5 grid grid-cols-2 gap-x-6">
          {links.map((linkItem) => (
            <div key={linkItem.path} className="mb-4">
              <Link
                to={linkItem.path}
                className="block text-sm font-semibold text-gray-900 hover:text-site-maroon transition-colors"
              >
                {linkItem.title}
              </Link>
              {linkItem.items && (
                <div className="mt-1 ml-2 space-y-1">
                  {linkItem.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block text-xs text-gray-500 hover:text-site-maroon transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column - Featured Solutions */}
        <div className="col-span-4 flex flex-col space-y-6">
          {featuredSolutions.map((solution) => (
            <Link
              key={solution.path}
              to={solution.path}
              className="group block rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-36">
                <img
                  src={solution.imageUrl ?? 'https://placehold.co/400x200'}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-site-maroon transition-colors">
                  {solution.title}
                </h4>
                {solution.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">
                    {solution.subtitle}
                  </p>
                )}
                {solution.buttonText && (
                  <span className="inline-block mt-2 text-xs font-semibold text-site-maroon group-hover:underline">
                    {solution.buttonText}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
