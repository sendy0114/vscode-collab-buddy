import { Search, Lightbulb, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'DISCOVER',
      description: 'We start with the most essential step of an in-depth understanding of our client\'s business requirements and objectives.',
    },
    {
      icon: Lightbulb,
      title: 'DESIGN',
      description: 'Our creative team develops stunning designs that capture your brand essence and engage your target audience.',
    },
    {
      icon: Code,
      title: 'BUILD',
      description: 'Following the design steps, we develop robust and scalable architectures for growth as per client requirements.',
    },
    {
      icon: Rocket,
      title: 'DELIVER',
      description: 'We ensure smooth deployment and provide ongoing support to keep your solution running optimally.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Refined</span>
            <span className="text-foreground"> Software Development </span>
            <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our hands-on approach and smooth development process guarantee exceptional results and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
          {/* Dotted line connector - hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 border-t-2 border-dotted border-primary/30 -z-10"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;