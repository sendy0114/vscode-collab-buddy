import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SiReact, SiNodedotjs, SiPython, SiAngular, SiMongodb, SiDocker, SiKubernetes, SiAmazon } from 'react-icons/si';

const Hero = () => {
  const techIcons = [
    { Icon: SiReact, name: 'React', delay: '0s' },
    { Icon: SiNodedotjs, name: 'Node.js', delay: '0.2s' },
    { Icon: SiPython, name: 'Python', delay: '0.4s' },
    { Icon: SiAngular, name: 'Angular', delay: '0.6s' },
    { Icon: SiMongodb, name: 'MongoDB', delay: '0.8s' },
    { Icon: SiDocker, name: 'Docker', delay: '1s' },
    { Icon: SiKubernetes, name: 'K8s', delay: '1.2s' },
    { Icon: SiAmazon, name: 'AWS', delay: '1.4s' },
  ];

  const testimonials = [
    { name: 'Yashwant Ray', company: 'Diamond Portal', rating: 5 },
    { name: 'Darren Mason', company: 'Dealership 360 CRM', rating: 5 },
    { name: 'Manohar Kumar', company: 'Diamond Portal', rating: 5 },
  ];

  const ratings = [
    { platform: 'Clutch', score: '5.0', stars: 5 },
    { platform: 'GoodFirms', score: '4.9', stars: 5 },
    { platform: 'Google', score: '5.0', stars: 5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 animate-fade-in">
            {/* Badge */}
            <Link to="/technology" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all group">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-medium">Specialized in AI & Modern Technologies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Build Your Vision with{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Expert Developers
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Get top-tier development services tailored to your needs. Whether you need a dedicated developer or a complete project solution, we've got you covered.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow shadow-lg hover:shadow-xl">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg">
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Rating Cards */}
            <div className="flex flex-wrap gap-4 pt-4">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                  <div className="flex">
                    {[...Array(rating.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold">{rating.score}</span>
                    <span className="text-xs text-muted-foreground">{rating.platform}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Tech Icons Grid */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {techIcons.map(({ Icon, name, delay }, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-20 h-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate-float"
                  style={{ animationDelay: delay }}
                >
                  <Icon className="w-10 h-10 text-primary" />
                </div>
              ))}
            </div>

            {/* Testimonial Cards */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{testimonial.name}</span>
                      <span className="text-yellow-400 text-sm">{testimonial.rating}.0</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Bubble */}
            <div className="mt-6 p-4 bg-white rounded-xl shadow-lg animate-bounce">
              <p className="text-sm font-medium">👋 Hi there! How can we help you?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
