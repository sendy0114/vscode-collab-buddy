import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Code, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Websites that look perfect on all devices and screen sizes'
    },
    {
      icon: Code,
      title: 'Modern Technologies',
      description: 'Built with React, Next.js, and latest web frameworks'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Optimized for mobile users with fast load times'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast websites with optimal SEO performance'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Website Development</h1>
            <p className="text-lg opacity-90 mb-8">
              Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
