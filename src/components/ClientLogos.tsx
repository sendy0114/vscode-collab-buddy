import React from 'react';

// Define the dummy client data, including the name and an associated icon path.
// In a real application, you would use actual logo SVGs here.
const DUMMY_CLIENTS = [
  { name: 'SITKA', icon: 'M12 2L2 22h20z' }, // Triangle
  { name: 'GP PAYROLL', icon: 'M10 20H4V4h6v16zm4 0h6V4h-6v16z' }, // Columns
  { name: 'FRESH STREET', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' }, // Circle
  { name: 'GUARDIAN GLASS', icon: 'M16 11V3H8v8c-1.71 0-3 1.29-3 3v2h14v-2c0-1.71-1.29-3-3-3z' }, // Shield
  { name: 'TECH SOLUTIONS', icon: 'M2 20h20V4H2v16zm4-4h4v-4H6v4zm0-6h4V6H6v4z' }, // Grid/Monitor
  { name: 'INNOVATE INC', icon: 'M12 5.69l5-2.88L12 1 7 2.81l5 2.88zM3 7l9 5 9-5L12 2 3 7zm0 10l9 5 9-5v-5l-9 5-9-5v5z' }, // Cube/3D
];

// Helper component to render the SVG logo
const ClientLogo = ({ client }) => (
  <div className="flex flex-col items-center justify-center space-y-1 w-48 mx-6 md:mx-10 lg:mx-12 p-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10 text-gray-300 group-hover:text-primary transition-colors duration-300"
    >
      <path d={client.icon} />
    </svg>
    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
      {client.name}
    </span>
  </div>
);

// The main component implementing the infinite scroll
const ClientLogos = () => {
  // To create the illusion of an infinite loop, we duplicate the list of clients
  // The animation starts with the first set and ends at the beginning of the second set,
  // then instantly resets, making the transition seamless.
  const allClients = [...DUMMY_CLIENTS, ...DUMMY_CLIENTS];
  
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      
      {/* Container for Heading (Same as original code) */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-gray-800">
          We have worked with large corporate teams
        </h2>
      </div>

      {/* Tailwind and custom CSS for the infinite scroll effect and hover pause */}
      <style>{`
        /* Define the animation for infinite horizontal scrolling */
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move exactly half the total width of the combined (duplicated) list to achieve the infinite loop */
            transform: translateX(-50%);
          }
        }
        
        /* Apply the animation to the inner track */
        .logo-track {
          animation: scroll-logos 40s linear infinite; /* 40s duration for speed, linear for constant speed */
          width: 200%; /* Double the width to hold the duplicated list */
        }

        /* PAUSE ON HOVER FIX: 
           When the parent element with class 'group' is hovered, 
           pause the animation of the child element with class 'logo-track'. */
        .group:hover .logo-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* The main scrolling container - The parent now holds the 'group' class */}
      <div 
        className="relative w-full flex flex-nowrap overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        {/* The inner track that actually moves - No longer has the 'group' class */}
        <div 
          className="logo-track flex items-center"
        >
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-full"
            >
              <ClientLogo client={client} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-10 text-sm text-gray-400">
        <p>Hover over the logos to pause the animation.</p>
      </div>
    </section>
  );
};

export default ClientLogos;
