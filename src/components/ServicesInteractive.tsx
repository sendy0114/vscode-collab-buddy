import React, { useState } from "react";
import DeveloperIllustration from "./DeveloperIllustration";

// --- Icons (Lucide SVGs) ---
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const SmartphoneIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const AndroidIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10h16M4 14h16M8 18h8M9 6l-1-2M15 6l1-2M6 6h12v12H6z" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const RocketIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.75-2 3.5-2 5.5a1 1 0 0 0 1 1c2 0 3.75-.5 5.5-2m6-13.5c.7-.7 1.5-1.25 2.5-1.5 1.5-.5 3 0 4 1s1.5 2.5 1 4c-.25 1-.8 1.8-1.5 2.5M12 12l-1.5 1.5M6 18l1.5-1.5" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
  </svg>
);

const PaletteIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

// --- Services Data ---
const services = [
  {
    id: "web",
    title: "Web Development",
    icon: GlobeIcon,
    subtitle: "React, Node.js, Laravel, TypeScript, WordPress, MySQL, Python",
  },
  {
    id: "ios",
    title: "Native iOS Development",
    icon: SmartphoneIcon,
    subtitle: "Objective-C, Swift, Xcode",
  },
  {
    id: "android",
    title: "Native Android Development",
    icon: AndroidIcon,
    subtitle: "Java, Kotlin, XML, Android Studio, Firebase",
  },
  {
    id: "react-native",
    title: "React-Native Development",
    icon: ShieldIcon,
    subtitle: "React, JavaScript, Redux",
  },
  {
    id: "flutter",
    title: "Flutter Development",
    icon: RocketIcon,
    subtitle: "Flutter SDK, Dart",
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: PaletteIcon,
    subtitle: "App, Website, Logo, Figma, XD, Photoshop",
  },
];

const ServicesInteractive = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const customStyles = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(1deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .float-animation {
      animation: float 4s ease-in-out infinite;
    }
    @media (max-width: 1023px) {
      .float-animation {
        animation: none;
      }
    }
  `;

  const Card = ({ service }) => {
    const Icon = service.icon;
    return (
      <div
        onMouseEnter={() => setHoveredService(service)}
        onMouseLeave={() => setHoveredService(null)}
        className="bg-white rounded-2xl p-6 cursor-pointer border-2 border-stone-200 shadow-lg 
        hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 
        hover:border-red-700 transition-all duration-300 ease-in-out group"
      >
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 
            bg-red-100 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-700 group-hover:bg-[#801515] 
            group-hover:shadow-xl "
          >
            <Icon className="w-7 h-7 text-red-800 transition-all duration-300 group-hover:text-white group-hover:scale-125" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-extrabold text-stone-800 mb-1 transition-colors group-hover:text-red-800">
              {service.title}
            </h3>
            <p className="text-xs md:text-sm text-stone-500 leading-relaxed transition-colors">
              {service.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{customStyles}</style>

      <section className="py-12 md:py-20 bg-stone-50 font-sans min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className="text-stone-900">Expert Technology </span>
              <span className="text-red-900">Services</span>
            </h2>
            <p className="text-base md:text-lg text-stone-700 max-w-3xl mx-auto px-4">
              We deliver tailored web, mobile, and design solutions crafted with innovation and precision.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left */}
            <div className="lg:col-span-4 space-y-5">
              {services.slice(0, 3).map((service) => (
                <Card key={service.id} service={service} />
              ))}
            </div>

            <div className="lg:col-span-4 flex items-center justify-center py-8 lg:py-0 group ">
              <DeveloperIllustration className="w-full h-auto rounded-xl" />
            </div>

            {/* Right */}
            <div className="lg:col-span-4 space-y-5">
              {services.slice(3, 6).map((service) => (
                <Card key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesInteractive;
