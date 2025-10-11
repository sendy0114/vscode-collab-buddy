import { useState, useEffect } from 'react';
import { Globe, Smartphone, Palette, Database, Shield, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesInteractive = () => {
  const services = [
    {
      id: 'web',
      title: 'Website Development',
      icon: Globe,
      description: 'Our team of skilled developers utilize the latest technologies to design innovative web solutions within agreed timelines and budgets. We offer services ranging from custom web applications, CMS development and e-commerce solutions to UI/UX design, maintenance and hosting.',
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: Smartphone,
      description: 'We create powerful mobile applications for iOS and Android platforms using cutting-edge technologies. Our mobile solutions are scalable, secure, and deliver exceptional user experiences.',
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Our design team crafts beautiful and intuitive interfaces that engage users and drive conversions. We focus on user-centered design principles to create memorable digital experiences.',
    },
    {
      id: 'cms',
      title: 'CMS & CRM',
      icon: Database,
      description: 'We implement robust content management and customer relationship management systems tailored to your business needs. Streamline your operations and enhance customer engagement.',
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      icon: Shield,
      description: 'Enterprise resource planning solutions that integrate all your business processes. Improve efficiency, reduce costs, and gain real-time insights into your operations.',
    },
    {
      id: 'graphics',
      title: 'Graphics and Logo',
      icon: Rocket,
      description: 'Professional graphic design services including logo design, branding, marketing materials, and visual identity development that makes your brand stand out.',
    },
  ];

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  const ActiveIcon = services[activeService].icon;

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Services we </span>
            <span className="text-primary">offer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            We understand that every business is unique, and we tailor our services to meet your specific needs and objectives.
          </p>
        </div>

        {/* Tab Buttons - Scrollable on mobile */}
        <div className="overflow-x-auto mb-6 md:mb-8 -mx-4 px-4 scrollbar-hide">
          <div className="flex md:justify-center gap-2 pb-2 min-w-max md:min-w-0">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium whitespace-nowrap transition-all text-sm md:text-base ${
                  activeService === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Service Display - Responsive */}
        <div className="bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <ActiveIcon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                {services[activeService].description}
              </p>
              <Button className="w-fit bg-primary hover:bg-primary/90 text-sm md:text-base">
                Explore →
              </Button>
            </div>

            {/* Right Side - Icon Background */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 flex items-center justify-center min-h-[200px] md:min-h-[300px]">
              <ActiveIcon className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInteractive;