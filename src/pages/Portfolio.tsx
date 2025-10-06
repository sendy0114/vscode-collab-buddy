import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
      description: 'A comprehensive e-commerce solution with advanced features and seamless user experience.'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      tags: ['React Native', 'Firebase', 'Healthcare'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      description: 'Patient management system with telemedicine capabilities and health tracking.'
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      tags: ['Angular', 'D3.js', 'Finance'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      description: 'Real-time financial analytics dashboard with interactive visualizations.'
    },
    {
      title: 'Logistics Management System',
      category: 'Enterprise Software',
      tags: ['Vue.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
      description: 'End-to-end logistics tracking and management platform for global operations.'
    },
    {
      title: 'Social Media Platform',
      category: 'Web Development',
      tags: ['React', 'GraphQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
      description: 'Community-driven social platform with real-time messaging and content sharing.'
    },
    {
      title: 'Restaurant Management App',
      category: 'Mobile Development',
      tags: ['Flutter', 'Firebase', 'Food'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
      description: 'Complete restaurant operations management with POS and inventory tracking.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg opacity-90">
              Showcasing our successful projects and innovative solutions across various industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge>{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
