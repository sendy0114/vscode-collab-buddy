import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Whitestone Infotech</h3>
            <p className="text-sm opacity-90">
              Delivering high-quality, cost-effective offshore software development services.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:opacity-80 transition-opacity">Home</Link></li>
              <li><Link to="/about" className="hover:opacity-80 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-80 transition-opacity">Services</Link></li>
              <li><Link to="/portfolio" className="hover:opacity-80 transition-opacity">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-80 transition-opacity">Custom Software Development</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Web Development</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">Mobile App Development</a></li>
              <li><a href="#" className="hover:opacity-80 transition-opacity">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@whitestoneinfotech.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Global Presence</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Whitestone Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
