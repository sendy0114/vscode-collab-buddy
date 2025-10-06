import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Globe, Palette, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive, scalable web applications built with modern technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive digital experiences.',
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design, implementation, and optimization for your applications.',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, deployment, and management services for scalable infrastructure.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking for custom software development, web application development, or mobile app development, 
              Whitestone Infotech has the expertise and experience to deliver outstanding results. Contact us today to learn 
              more about how we can help your business grow and thrive.
            </p>
            <Link to="/about">
              <Button className="mt-6" size="lg">Know More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive solutions to meet the diverse needs of our clients with quality and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale group cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We have curated a custom agile approach to software development that is designed to deliver maximum 
              adaptability and exceptional technological expertise at affordable prices. Our team of experienced 
              developers works closely with each of our clients to understand their unique requirements and develop 
              customized solutions that meet their specific needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
