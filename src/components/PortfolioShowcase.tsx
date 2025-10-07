import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioShowcase = () => {
  const projects = [
    {
      name: 'Diamond ERP System',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      description: 'Comprehensive ERP solution for diamond industry management',
    },
    {
      name: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'Stripe', 'MongoDB'],
      description: 'Modern e-commerce platform with advanced features',
    },
    {
      name: 'Healthcare Portal',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      tech: ['React', 'Firebase', 'TailwindCSS'],
      description: 'Patient management and telemedicine platform',
    },
    {
      name: 'Real Estate App',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      tech: ['React Native', 'Express', 'MySQL'],
      description: 'Property listing and management mobile application',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Award-Winning Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Check out our award-winning portfolio! It's packed with our hard-earned projects and our bold, innovative approach to solving complex challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="lg">
                    View Case Study <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;