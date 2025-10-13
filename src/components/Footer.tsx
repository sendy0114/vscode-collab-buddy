import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1: Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link 
                  to="/services/website-development" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/website-development' ? 'text-primary' : ''}`}
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/mobile-app-development" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/mobile-app-development' ? 'text-primary' : ''}`}
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/uiux-design" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/uiux-design' ? 'text-primary' : ''}`}
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/cms-crm" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/cms-crm' ? 'text-primary' : ''}`}
                >
                  CMS & CRM
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/erp" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/erp' ? 'text-primary' : ''}`}
                >
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/graphics-and-logo" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/graphics-and-logo' ? 'text-primary' : ''}`}
                >
                  Graphics & Logo
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/aiml" 
                  className={`hover:text-white transition-colors ${location.pathname === '/services/aiml' ? 'text-primary' : ''}`}
                >
                  AI & ML
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link 
                  to="/" 
                  className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-primary' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`hover:text-white transition-colors ${location.pathname === '/about' ? 'text-primary' : ''}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className={`hover:text-white transition-colors ${location.pathname === '/portfolio' ? 'text-primary' : ''}`}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className={`hover:text-white transition-colors ${location.pathname === '/careers' ? 'text-primary' : ''}`}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`hover:text-white transition-colors ${location.pathname === '/contact' ? 'text-primary' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Technologies */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Technologies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link 
                  to="/technology" 
                  className={`hover:text-white transition-colors ${location.pathname === '/technology' ? 'text-primary' : ''}`}
                >
                  Front-end
                </Link>
              </li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Back-end</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Database</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Mobile</Link></li>
              <li><Link to="/technology" className="hover:text-white transition-colors">Cloud Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@whitestoneinfotech.com" className="hover:text-white transition-colors">
                  info@whitestoneinfotech.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+919978809533" className="hover:text-white transition-colors">
                  +91 99788 09533
                </a>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.linkedin.com/company/whitestone-it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/whitestone_it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://www.facebook.com/whitestoneit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/whitestone.it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://github.com/whitestone-it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="GitHub">
                <SiGithub size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} WhiteStone Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
