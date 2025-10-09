import React from 'react';
import { Link } from 'react-router-dom';

interface LinkItem {
  name: string;
  path: string;
  description?: string;
  icon?: string;
}

interface MegaMenuLinksProps {
  links: LinkItem[];
  columns?: 1 | 2 | 3;
  onLinkHover?: (path: string) => void;
}

export const MegaMenuLinks: React.FC<MegaMenuLinksProps> = ({ 
  links, 
  columns = 2,
  onLinkHover
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-x-6 gap-y-1`}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          onMouseEnter={() => onLinkHover?.(link.path)}
          className="group block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
        >
          <div className="flex items-start space-x-2">
            {link.icon && (
              <span className="text-base flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
            )}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-gray-900 group-hover:text-orange-500 transition-colors">
                {link.name}
              </div>
              {link.description && (
                <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                  {link.description}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
