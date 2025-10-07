import React from "react";
import { Link } from "react-router-dom";

export interface SubLink {
  name: string;
  path: string;
}

export interface MegaFeatured {
  title: string;
  text: string;
  link: string;
  imageUrl: string;
}

export interface MegaDescription {
  title: string;
  text: string;
  featured: MegaFeatured;
}

export interface MegaLinkItem {
  title: string;
  path: string;
  items?: SubLink[];
}

export interface MegaSolution {
  title: string;
  subtitle?: string;
  path: string;
  buttonText?: string;
  imageUrl?: string;
}

export interface MegaMenuContent {
  description: MegaDescription;
  links: MegaLinkItem[];
  featuredSolutions: MegaSolution[];
}

interface MegaMenuProps {
  content: MegaMenuContent;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ content }) => {
  const { description, links, featuredSolutions } = content;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50 animate-fade-in">
      <div className="container mx-auto grid grid-cols-12 gap-8 py-10 px-8">
        {/* Left column */}
        <div className="col-span-3 flex flex-col space-y-4 border-r border-gray-100 pr-6">
          <h3 className="text-lg font-bold text-[#991B1B]">{description.title}</h3>
          <p className="text-sm text-gray-600">{description.text}</p>
          <Link to={description.featured.link} className="mt-4 group block">
            <div className="rounded-xl overflow-hidden h-36 bg-gray-100">
              <img
                src={description.featured.imageUrl}
                alt={description.featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="block mt-2 text-sm font-semibold text-[#991B1B] group-hover:underline">
              {description.featured.title}
            </span>
            <span className="text-xs text-gray-500">{description.featured.text}</span>
          </Link>
        </div>

        {/* Middle column */}
        <div className="col-span-5 grid grid-cols-2 gap-x-6">
          {links.map((linkItem) => (
            <div key={linkItem.path} className="mb-3">
              <Link
                to={linkItem.path}
                className="block text-sm font-semibold text-gray-900 hover:text-[#991B1B]"
              >
                {linkItem.title}
              </Link>
              {linkItem.items && (
                <div className="mt-1 ml-2 space-y-1">
                  {linkItem.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className="block text-xs text-gray-500 hover:text-[#991B1B]"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="col-span-4 flex flex-col space-y-6">
          {featuredSolutions.map((solution) => (
            <Link
              key={solution.path}
              to={solution.path}
              className="group block rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative h-36">
                <img
                  src={solution.imageUrl ?? "https://placehold.co/400x200"}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#991B1B]">
                  {solution.title}
                </h4>
                {solution.subtitle && (
                  <p className="text-xs text-gray-500 mt-1">{solution.subtitle}</p>
                )}
                {solution.buttonText && (
                  <span className="inline-block mt-2 text-xs font-semibold text-[#991B1B] group-hover:underline">
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
