import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  setScrolled,
  setShowNavbar,
  closeAllDropdowns,
} from '../store/navbarSlice';
import { megaMenuData, navMenuItems } from '../data/megaMenuData';
import { MegaMenuKey } from '../types';
import { NavLogo } from './NavLogo';
import { NavMenuItem } from './NavMenuItem';
import { MegaMenu } from './MegaMenu/MegaMenu';
import { MobileMenu } from './MobileMenu';
import { useMegaMenuHover } from '@/hooks/useMegaMenuHover';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { showNavbar, isMobileMenuOpen } = useAppSelector(
    (state) => state.navbar
  );

  // Separate hover state for each menu item
  const servicesMenu = useMegaMenuHover({ openDelay: 200, closeDelay: 200 });
  const technologiesMenu = useMegaMenuHover({ openDelay: 200, closeDelay: 200 });
  const industriesMenu = useMegaMenuHover({ openDelay: 200, closeDelay: 200 });
  const companyMenu = useMegaMenuHover({ openDelay: 200, closeDelay: 200 });

  const menuHooks = {
    Services: servicesMenu,
    Technologies: technologiesMenu,
    Industries: industriesMenu,
    Company: companyMenu,
  };

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
    Object.values(menuHooks).forEach(hook => hook.forceClose());
  }, [location]);

  return (
    // <div>
    <nav
      className={`fixed left-0 right-0 z-50 transition-transform duration-300 ease-in-out py-4 ${
        showNavbar ? 'translate-y-0' : '-translate-y-[150%]'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="backdrop-blur-md rounded-lg shadow-xl h-20 px-6 flex items-center justify-between">
          {/* Logo */}
          <NavLogo />

          {/* Desktop Menu */}  
          <div className="hidden lg:flex items-center space-x-1">
            {navMenuItems.map((item) => {
              const hasMegaContent = item.mega && megaMenuData[item.name as MegaMenuKey];
              const menuHook = menuHooks[item.name as MegaMenuKey];

              return (
                <div key={item.name} className="relative h-full flex items-center">
                  <NavMenuItem
                    item={item}
                    isOpen={menuHook?.isOpen || false}
                    onMouseEnter={() => item.hasDropdown && menuHook?.handleMouseEnter()}
                    onMouseLeave={() => item.hasDropdown && menuHook?.handleMouseLeave()}
                  />

                  {hasMegaContent && menuHook && (
                    <MegaMenu
                      content={megaMenuData[item.name as MegaMenuKey]}
                      isOpen={menuHook.isOpen}
                      onMouseEnter={menuHook.handleMouseEnter}
                      onMouseLeave={menuHook.handleMouseLeave}
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
                className="group font-medium h-10 px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-1000 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Hire Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                className="group font-medium h-10 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-site-maroon transition-colors"
            onClick={() => dispatch(closeAllDropdowns())}
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
    // </div>

  );
};