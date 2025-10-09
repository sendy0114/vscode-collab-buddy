import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Users, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
  const services = [
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Beautiful, modern interfaces that captivate users'
    },
    {
      icon: Users,
      title: 'User Research',
      description: 'Data-driven insights to understand your users'
    },
    {
      icon: Layers,
      title: 'Prototyping',
      description: 'Interactive prototypes to validate concepts'
    },
    {
      icon: Sparkles,
      title: 'Design Systems',
      description: 'Scalable design systems for consistency'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-lg opacity-90 mb-8">
              User-centered design solutions that create engaging and intuitive digital experiences for your customers.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Designing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
