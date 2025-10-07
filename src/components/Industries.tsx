const Industries = () => {
  const industries = [
    { name: 'Healthcare', emoji: '🏥' },
    { name: 'E-Commerce', emoji: '🛒' },
    { name: 'Automobile', emoji: '🚗' },
    { name: 'Food & Beverages', emoji: '🍔' },
    { name: 'Real Estate', emoji: '🏢' },
    { name: 'Telecommunication', emoji: '📡' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Industries</span>
            <span className="text-foreground"> We Cater</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative h-64 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {industry.emoji}
                </div>
                <h3 className="text-2xl font-bold text-center">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;