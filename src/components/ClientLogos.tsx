const ClientLogos = () => {
  const clients = [
    'SITKA',
    'GP PAYROLL',
    'FRESH STREET',
    'GUARDIAN GLASS',
    'TECH SOLUTIONS',
    'INNOVATE INC',
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          We have worked with large corporate teams
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <div className="text-2xl font-bold text-gray-400 hover:text-primary transition-colors">
                {client}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;