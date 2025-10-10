import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const stats = [
    { number: 6, suffix: '+', label: 'Years of Excellence' },
    { number: 50, suffix: '+', label: 'Expert Developers' },
    { number: 100, suffix: '+', label: 'Projects Delivered' },
    { number: 95, suffix: '%', label: 'Client Retention' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.number) {
          currentCount = stat.number;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, interval);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reflection of <span className="text-orange-300">our Commitment</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            For us at WhiteStone Infotech, commitment isn't just a word – it's the foundation of everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-6xl md:text-7xl font-bold text-orange-300 mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-xl font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;