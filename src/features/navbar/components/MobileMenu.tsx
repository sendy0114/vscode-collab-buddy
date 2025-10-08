import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuItem, MegaMenuKey, MegaMenuContent } from '../types';

interface MobileMenuProps {
  menuItems: MenuItem[];
  megaMenuData: Record<MegaMenuKey, MegaMenuContent>;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  menuItems, 
  megaMenuData, 
  onClose 
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className="lg:hidden pb-4 bg-white shadow-xl mt-4 mx-4 rounded-lg animate-fade-in">
      <div className="flex flex-col space-y-1 p-2">
        {menuItems.map((item) => {
          const hasMegaContent = item.mega && megaMenuData[item.name as MegaMenuKey];
          
          return (
            <div key={item.name}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  {openDropdown === item.name && hasMegaContent && (
                    <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                      {megaMenuData[item.name as MegaMenuKey].links.map((linkItem) => (
                        <div key={linkItem.path}>
                          <Link
                            to={linkItem.path}
                            onClick={onClose}
                            className="block px-4 py-2 text-sm font-medium text-site-maroon hover:bg-gray-50 rounded-md transition-colors"
                          >
                            {linkItem.title}
                          </Link>
                          {linkItem.items?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={onClose}
                              className="block px-6 py-1 text-xs text-gray-600 hover:text-site-maroon hover:bg-gray-50 rounded-md transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path!}
                  onClick={onClose}
                  className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}

        <div className="pt-4 space-y-2 px-4">
          <Link to="/contact" onClick={onClose}>
            <Button
              variant="outline"
              className="w-full h-10 px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Hire Us
            </Button>
          </Link>
          <Link to="/contact" onClick={onClose}>
            <Button className="w-full h-10 px-6 bg-site-maroon hover:bg-site-maroon/90 text-site-cream">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
