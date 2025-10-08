import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { 
  setScrolled, 
  setShowNavbar, 
  setOpenDropdown, 
  toggleMobileMenu, 
  closeAllDropdowns 
} from '../store/navbarSlice';
import { megaMenuData, navMenuItems } from '../data/megaMenuData';
import { MegaMenuKey } from '../types';
import { NavLogo } from './NavLogo';
import { NavMenuItem } from './NavMenuItem';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  
  const { showNavbar, openDropdown, isMobileMenuOpen } = useAppSelector(
    (state) => state.navbar
  );

  // Scroll handling
  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      dispatch(setScrolled(currentScrollY > 20));

      if (currentScrollY > 80) {
        dispatch(setShowNavbar(currentScrollY < lastScrollY));
      } else {
        dispatch(setShowNavbar(true));
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  // Close menus on route change
  useEffect(() => {
    dispatch(closeAllDropdowns());
  }, [location, dispatch]);

  const handleMouseEnter = (menuName: string) => {
    dispatch(setOpenDropdown(menuName));
  };

  const handleMouseLeave = () => {
    dispatch(setOpenDropdown(null));
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-transform duration-300 ease-in-out bg-transparent py-4 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl h-20 px-6 flex items-center justify-between">
          {/* Logo */}
          <NavLogo />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navMenuItems.map((item) => {
              const hasMegaContent = item.mega && megaMenuData[item.name as MegaMenuKey];
              const isOpen = openDropdown === item.name;

              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                >
                  <NavMenuItem
                    item={item}
                    isOpen={isOpen}
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  />
                  
                  {isOpen && hasMegaContent && (
                    <MegaMenu
                      content={megaMenuData[item.name as MegaMenuKey]}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="font-medium h-10 px-6 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Hire Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-medium h-10 px-6 bg-site-maroon hover:bg-site-maroon/90 text-site-cream shadow-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-site-maroon transition-colors"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          menuItems={navMenuItems}
          megaMenuData={megaMenuData}
          onClose={() => dispatch(closeAllDropdowns())}
        />
      )}
    </nav>
  );
};
