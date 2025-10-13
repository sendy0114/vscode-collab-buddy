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
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openSubItems, setOpenSubItems] = useState<Record<string, boolean>>({});

  const handleSectionToggle = (menuName: string) => {
    setOpenSection((prev) => (prev === menuName ? null : menuName));
    setOpenSubItems({});
  };

  const handleSubItemToggle = (itemName: string) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto lg:hidden">
      <div className="flex flex-col h-full">
        {/* Header with buttons */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex gap-2">
            <Link to="/contact" onClick={onClose}>
              <Button
                variant="outline"
                className="h-10 px-6 border-primary text-primary hover:bg-primary/10"
              >
                Hire Us
              </Button>
            </Link>
            <Link to="/contact" onClick={onClose}>
              <Button className="h-10 px-6 bg-primary hover:bg-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-2">
            {menuItems.map((item) => {
              const hasMegaContent = item.mega && megaMenuData[item.name as MegaMenuKey];
              const isExpanded = openSection === item.name;
              
              return (
                <div key={item.name} className="border-b border-gray-100 last:border-0">
                  {item.hasDropdown && hasMegaContent ? (
                    <>
                      <button
                        onClick={() => handleSectionToggle(item.name)}
                        className="w-full flex items-center justify-between py-4 text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                      >
                        <span className={isExpanded ? 'text-primary' : ''}>{item.name}</span>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform ${isExpanded ? 'rotate-180 text-primary' : ''}`} 
                        />
                      </button>

                      {isExpanded && (
                        <div className="pb-4 space-y-1 animate-fade-in">
                          {megaMenuData[item.name as MegaMenuKey].links.map((linkItem, idx) => {
                            const hasSubItems = linkItem.items && linkItem.items.length > 0;
                            const isSubExpanded = openSubItems[linkItem.title];

                            return (
                              <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden">
                                {hasSubItems ? (
                                  <>
                                    <button
                                      onClick={() => handleSubItemToggle(linkItem.title)}
                                      className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                                    >
                                      <span>{linkItem.title}</span>
                                      <ChevronDown 
                                        size={16} 
                                        className={`transition-transform ${isSubExpanded ? 'rotate-180' : ''}`} 
                                      />
                                    </button>
                                    {isSubExpanded && linkItem.items && (
                                      <div className="bg-white border-t border-gray-200">
                                        {linkItem.items.map((subItem, subIdx) => (
                                          <Link
                                            key={subIdx}
                                            to={subItem.path}
                                            onClick={onClose}
                                            className="block px-6 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                                          >
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    to={linkItem.path}
                                    onClick={onClose}
                                    className="block px-4 py-3 text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-100 transition-colors"
                                  >
                                    {linkItem.title}
                                  </Link>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path!}
                      onClick={onClose}
                      className="block py-4 text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
