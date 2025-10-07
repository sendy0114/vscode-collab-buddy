import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMobileMenu, closeMobileMenu } from '@/store/slices/uiSlice';
import { NavLinkItem, MenuItem as NavMenuItem, SubLink } from './Nav/NavLinkItem';
import { MegaMenu } from './Nav/ServicesMegaMenu';

// --- Types for Mega Menu content ---
type MegaMenuKey = 'Services' | 'Technologies' | 'Industries' | 'Company';

interface MegaFeatured {
  title: string;
  text: string;
  link: string;
  imageUrl: string;
  placeholderColor?: string;
}

interface MegaDescription {
  title: string;
  text: string;
  featured: MegaFeatured;
}

interface MegaLinkItem {
  title: string;
  path: string;
  items?: SubLink[];
}

interface MegaSolution {
  title: string;
  subtitle?: string;
  path: string;
  buttonText?: string;
  imageUrl?: string;
  placeholderColor?: string;
}

interface MegaMenuContent {
  description: MegaDescription;
  links: MegaLinkItem[];
  featuredSolutions: MegaSolution[];
}

// --- Mega menu data (now fully typed) ---
const megaMenuContent: Record<MegaMenuKey, MegaMenuContent> = {
  Services: {
    description: {
      title: 'Services',
      text: "Discover our expert solutions crafted for your business. From development to design, we cover it all.",
      featured: {
        title: 'Staff Augmentation',
        text: 'Expand your tech team with expert professionals easily.',
        link: '/services/staff-augmentation',
        imageUrl: 'https://placehold.co/600x400/800000/F5F5DC?text=Staff',
        placeholderColor: '#800000',
      },
    },
    links: [
      {
        title: 'Website Development',
        path: '/services/web-development',
        items: [{ name: '.NET Development Company', path: '/services/dotnet' }],
      },
      { title: 'Mobile App Development', path: '/services/mobile-app' },
      { title: 'UI/UX Design', path: '/services/design' },
      { title: 'CMS & CRM', path: '/services/cms-crm' },
      { title: 'ERP', path: '/services/erp' },
      { title: 'Graphics and Logo', path: '/services/graphics' },
      { title: 'AI/ML', path: '/services/ai-ml' },
    ],
    featuredSolutions: [
      {
        title: 'AI Solutions for Regulated Industries',
        subtitle: 'Skypoint - AI Agent for Healthcare',
        path: '/solutions/healthcare-ai',
        buttonText: 'Learn More',
        imageUrl: 'https://placehold.co/400x200/800000/F5F5DC?text=AI+Solution',
        placeholderColor: '#800000',
      },
      {
        title: 'Revolutionizing Building Inspections with AI',
        subtitle: 'T2D2 AI',
        path: '/solutions/t2d2',
        buttonText: 'Read More',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/800000?text=T2D2',
        placeholderColor: '#F5F5DC',
      },
    ],
  },

  Technologies: {
    description: {
      title: 'Technologies',
      text: "Explore our core tech stack and frameworks, powering scalable and robust applications.",
      featured: {
        title: 'Framework Focus',
        text: 'React, Next.js, Angular, and Vue.js for modern frontends.',
        link: '/technology/frontend',
        imageUrl: 'https://placehold.co/600x400/800000/F5F5DC?text=Tech+Focus',
        placeholderColor: '#800000',
      },
    },
    links: [
      { title: 'React & Next.js', path: '/technology/react' },
      { title: 'Angular & Vue', path: '/technology/angular-vue' },
      { title: 'Node.js & Python', path: '/technology/backend' },
      { title: 'Cloud/DevOps', path: '/technology/cloud' },
      { title: 'Databases', path: '/technology/databases' },
      { title: 'Mobile Technologies', path: '/technology/mobile' },
      { title: 'QA & Testing', path: '/technology/qa' },
    ],
    featuredSolutions: [
      {
        title: 'Modernizing Legacy Systems',
        subtitle: 'Architecture Review',
        path: '/solutions/architecture',
        buttonText: 'See Details',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/800000?text=Architecture',
        placeholderColor: '#F5F5DC',
      },
      {
        title: 'Microservices & Serverless',
        subtitle: 'Scalable Backends',
        path: '/solutions/microservices',
        buttonText: 'Read Whitepaper',
        imageUrl: 'https://placehold.co/400x200/800000/F5F5DC?text=Serverless',
        placeholderColor: '#800000',
      },
    ],
  },

  Industries: {
    description: {
      title: 'Industries',
      text: "We specialize in digital transformation for key market segments.",
      featured: {
        title: 'Industry Spotlight',
        text: 'How we build secure Finance applications.',
        link: '/industries/finance',
        imageUrl: 'https://placehold.co/600x400/800000/F5F5DC?text=Finance+App',
        placeholderColor: '#800000',
      },
    },
    links: [
      { title: 'Healthcare', path: '/industries/healthcare' },
      { title: 'E-commerce', path: '/industries/ecommerce' },
      { title: 'Finance & Fintech', path: '/industries/finance' },
      { title: 'Logistics', path: '/industries/logistics' },
      { title: 'Real Estate', path: '/industries/real-estate' },
      { title: 'EdTech', path: '/industries/edtech' },
      { title: 'Travel & Hospitality', path: '/industries/travel' },
    ],
    featuredSolutions: [
      {
        title: 'HIPAA Compliant Software',
        subtitle: 'Healthcare Focus',
        path: '/solutions/hipaa',
        buttonText: 'View Case Study',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/800000?text=HIPAA',
        placeholderColor: '#F5F5DC',
      },
      {
        title: 'Custom B2B E-commerce Platforms',
        subtitle: 'Retail Transformation',
        path: '/solutions/b2b-ecommerce',
        buttonText: 'Explore',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/800000?text=B2B+Ecomm',
        placeholderColor: '#800000',
      },
    ],
  },

  Company: {
    description: {
      title: 'Company',
      text: "Learn about our mission, values, and the people behind our success.",
      featured: {
        title: 'Join Our Team',
        text: 'See open positions and career growth.',
        link: '/careers',
        imageUrl: 'https://placehold.co/600x400/800000/F5F5DC?text=Careers',
        placeholderColor: '#800000',
      },
    },
    links: [
      { title: 'About Us', path: '/about' },
      { title: 'Leadership', path: '/about/leadership' },
      { title: 'Careers', path: '/careers' },
      { title: 'Partnerships', path: '/company/partnerships' },
      { title: 'Client Testimonials', path: '/testimonials' },
      { title: 'Contact Us', path: '/contact' },
    ],
    featuredSolutions: [
      {
        title: 'Our Process',
        subtitle: 'How We Work',
        path: '/company/process',
        buttonText: 'See Details',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/800000?text=Process',
        placeholderColor: '#F5F5DC',
      },
      {
        title: 'Get a Free Quote',
        subtitle: 'Project Estimate',
        path: '/contact',
        buttonText: 'Start Now',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/800000?text=Quote',
        placeholderColor: '#800000',
      },
    ],
  },
};

// ---------------------------------------------
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector((s) => s.ui.isMobileMenuOpen);

  const menuItems: NavMenuItem[] = [
    { name: 'Services', hasDropdown: true, mega: true, path: '/services' },
    { name: 'Technologies', hasDropdown: true, mega: true, path: '/technology' },
    { name: 'Industries', hasDropdown: true, mega: true, path: '/industries' },
    { name: 'Case Studies', path: '/portfolio', hasDropdown: false },
    { name: 'Company', hasDropdown: true, mega: true, path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 80) {
        setShowNavbar(currentScrollY < lastScrollY);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    dispatch(closeMobileMenu());
    setOpenDropdown(null);
  }, [location, dispatch]);

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
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
          <Link to="/" className="flex flex-col justify-center h-full">
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 rounded-full bg-site-maroon flex items-center justify-center mr-1">
                <span className="text-sm font-bold text-site-cream">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#1a1a1a]">
                PROLANCE<span className="text-site-maroon">IT</span>
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-gray-500 hidden sm:block -mt-1 ml-9">
              PROFESSIONALS FOR YOUR INNOVATION
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const hasMegaContent = item.mega && Object.prototype.hasOwnProperty.call(megaMenuContent, item.name);
              return (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
                >
                  <NavLinkItem item={item} isOpen={openDropdown === item.name} />
                  {/* Mega menu */}
                  {openDropdown === item.name && hasMegaContent && (
                    <MegaMenu content={megaMenuContent[item.name as MegaMenuKey]} />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="font-medium h-10 px-6 border-gray-300 text-gray-700 hover:bg-gray-50">
                Hire Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="font-medium h-10 px-6 bg-site-maroon hover:bg-site-maroon/90 text-site-cream shadow-md">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-site-maroon transition-colors"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden pb-4 bg-white shadow-xl mt-4 mx-4 rounded-lg animate-fade-in">
          <div className="flex flex-col space-y-1 p-2">
            {menuItems.map((item) => {
              const hasMegaContent = item.mega && Object.prototype.hasOwnProperty.call(megaMenuContent, item.name);
              return (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mobile dropdown uses typed data */}
                      {openDropdown === item.name && hasMegaContent && (
                        <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                          {megaMenuContent[item.name as MegaMenuKey].links.map((linkItem: MegaLinkItem) => (
                            <div key={linkItem.path}>
                              <Link to={linkItem.path} className="block px-4 py-2 text-sm font-medium text-site-maroon hover:bg-accent rounded-md transition-colors">
                                {linkItem.title}
                              </Link>
                              {linkItem.items &&
                                linkItem.items.map((subItem: SubLink) => (
                                  <Link key={subItem.path} to={subItem.path} className="block px-6 py-1 text-xs text-muted-foreground hover:text-site-maroon hover:bg-accent rounded-md transition-colors">
                                    {subItem.name}
                                  </Link>
                                ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.path!} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors">
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4 space-y-2 px-4">
              <Link to="/contact">
                <Button variant="outline" className="w-full h-10 px-6 border-gray-300 text-gray-700 hover:bg-gray-50">
                  Hire Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="w-full h-10 px-6 bg-site-maroon hover:bg-site-maroon/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
