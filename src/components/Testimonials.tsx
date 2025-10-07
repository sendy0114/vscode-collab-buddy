import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Innovations Inc.',
      avatar: 'JS',
      rating: 5,
      text: 'WhiteStone delivered an exceptional mobile app that exceeded our expectations. Their team was professional, responsive, and delivered on time.',
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Solutions Ltd.',
      avatar: 'SJ',
      rating: 5,
      text: 'Outstanding web development services! The team understood our requirements perfectly and created a solution that transformed our business operations.',
    },
    {
      name: 'Michael Chen',
      company: 'Startup Ventures',
      avatar: 'MC',
      rating: 5,
      text: 'Working with WhiteStone was a game-changer for our startup. They built a scalable platform that helped us grow from 0 to 10,000 users in 6 months.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Client satisfaction is our top priority, and nothing speaks louder than the voices of those we've served.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;