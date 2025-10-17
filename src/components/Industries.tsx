const categoryList = [
  { name: "Education & Learning", emoji: "📚" },
  { name: "Gym Management", emoji: "🏋️" },
  { name: "Healthcare", emoji: "🏥" },
  { name: "Grocery App", emoji: "🛒" },
  { name: "Events & Tickets", emoji: "🎫" },
  { name: "Shopping", emoji: "🛍️" },
  { name: "Travel", emoji: "✈️" },
  { name: "Photo & Video", emoji: "📸" },
  { name: "Taxi Booking", emoji: "🚖" },
  { name: "Finance", emoji: "💰" },
  { name: "Media & Entertainment App", emoji: "🎬" },
  { name: "Travel Booking App", emoji: "🌍" },
  { name: "Sports & Fantasy App", emoji: "🏅" },
  { name: "Food & Restaurants App", emoji: "🍔" },
  { name: "Doctors Appointment App", emoji: "🩺" }
];

const Industries = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Industries</span>
            <span className="text-foreground"> We Serve</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {categoryList.map((industry, index) => (
            <div
              key={index}
              className="group relative h-15"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-primary p-6">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {industry.emoji}
                </div>
                <h3 className="text-2xl text-center">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
