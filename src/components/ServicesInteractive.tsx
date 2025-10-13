import React, { useState, useEffect } from 'react';

// --- Self-contained Icon Definitions (Fixed: Removed duplicate strokeLinecap attributes) ---
const Globe = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
const Smartphone = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>;
const Palette = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 6L8 20l-4-4 14-6"/><path d="M11 2a4 4 0 0 0-4 4c0 3 3 5 3 5L8 20l4-4 14-6-4-4-6 6z"/><path d="M16 4h2l2 2"/></svg>;
const Database = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>;
const Shield = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Rocket = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5-.7-2.5-2.2-2.5-4s1-3.3 2.5-4M9 16.5c-1.5-.7-2.5-2.2-2.5-4s1-3.3 2.5-4"/><path d="M15 16.5c-1.5-.7-2.5-2.2-2.5-4s1-3.3 2.5-4"/><path d="M22 14V10"/><path d="M14 2c2.2 0 4 1.8 4 4v.5c0 2.2-1.8 4-4 4s-4-1.8-4-4V6c0-2.2 1.8-4 4-4z"/></svg>;
// --------------------------------------------------------------------------

// --- Simple Button Component (replacing component import) ---
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);
// ------------------------------------------------------------

// Define custom Tailwind configuration for aesthetics
const tailwindConfig = `
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#0e7490', // Cyan 700 for a deep corporate blue
            'primary-foreground': '#ffffff',
            foreground: '#1f2937', // Dark Gray
            background: '#f9fafb', // Light Gray background
            'muted-foreground': '#6b7280',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
    }
  </script>
`;

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

const App = React.memo(() => { 
  const [activeService, setActiveService] = useState(0);
  // State to manage pause functionality only for the details area
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle service logic is now conditional on the isPaused state
  useEffect(() => {
    if (isPaused) return;

    // Timer set to 4000ms (4 seconds)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, [services.length, isPaused]); // Now depends on isPaused

  // Handlers for pausing the timer on hover/touch
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const ActiveIcon = services[activeService].icon;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      <section className="py-12 md:py-20 bg-background font-sans min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="text-foreground">Services we </span>
              <span className="text-primary">offer</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We understand that every business is unique, and we tailor our services to meet your specific needs and objectives.
            </p>
          </div>

          {/* Button section - NO hover pause here */}
          <div className="mb-6 md:mb-8">
            <div 
              className="flex flex-wrap justify-center gap-3 pb-3 px-4"
            >
              {services.map((service, index) => (
                <button
                  key={service.id}
                  // Simple onClick: sets active service
                  onClick={() => setActiveService(index)}
                  className={`
                    px-5 md:px-7 py-2.5 md:py-3.5 
                    rounded-xl font-semibold 
                    whitespace-nowrap 
                    text-center 
                    transition-all duration-150
                    text-sm md:text-base 
                    shadow-md border 
                    ${
                      activeService === index
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50 transform scale-105 border-primary'
                        : 'bg-gray-200 text-gray-700 border-gray-200' // No hover effect here
                    }
                  `}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Service Display - Hover pause is applied here */}
          <div 
            className="bg-gray-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl max-w-6xl mx-auto"
            onMouseEnter={handleMouseEnter} // Hover over details pauses cycle
            onMouseLeave={handleMouseLeave} // Leaving resumes cycle
            onTouchStart={handleMouseEnter} // Touch start pauses cycle
            onTouchEnd={handleMouseLeave} // Touch end resumes cycle
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <ActiveIcon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
                {/* Using the simple inline Button component */}
                <Button className="w-fit bg-primary hover:bg-primary/90 text-sm md:text-base shadow-lg transition duration-150">
                  Explore {services[activeService].title} →
                </Button>
              </div>

              {/* Right Side - Icon Background. Placed above content on mobile (order-1) */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 p-8 md:p-12 flex items-center justify-center min-h-[200px] md:min-h-[300px] order-1 lg:order-2">
                <ActiveIcon className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 text-white/5" />
                <span className="absolute text-5xl font-extrabold text-primary/10 select-none">
                    {services[activeService].title.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default App;
