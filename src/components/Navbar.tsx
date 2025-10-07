import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileMenu, closeMobileMenu } from '@/store/slices/uiSlice';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(closeMobileMenu());
    setOpenDropdown(null);
  }, [location, dispatch]);

  const menuItems = [
    {
      name: 'Services',
      hasDropdown: true,
      items: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app' },
        { name: 'E-commerce Solutions', path: '/services/ecommerce' },
        { name: 'UI/UX Design', path: '/services/design' },
      ],
    },
    {
      name: 'Technologies',
      hasDropdown: true,
      items: [
        { name: 'React & Next.js', path: '/technology/react' },
        { name: 'Node.js', path: '/technology/nodejs' },
        { name: 'Mobile Technologies', path: '/technology/mobile' },
      ],
    },
    {
      name: 'Industries',
      hasDropdown: true,
      items: [
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'E-commerce', path: '/industries/ecommerce' },
        { name: 'Finance', path: '/industries/finance' },
      ],
    },
    {
      name: 'Case Studies',
      path: '/portfolio',
      hasDropdown: false,
    },
    {
      name: 'Company',
      hasDropdown: true,
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
      ],
    },
  ];

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-xl font-bold text-primary-foreground">WS</span>
            </div>
            <span className="text-lg font-bold tracking-wide hidden sm:block">
              WHITESTONE IT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && item.items && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-background rounded-lg shadow-xl border border-border z-50 animate-fade-in">
                        <div className="py-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path!}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="font-medium">
                Hire Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="font-medium bg-gradient-to-r from-primary to-primary-glow shadow-md hover:shadow-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && item.items && (
                        <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path!}
                      className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Hire Us
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
