import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog, TrendingUp, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ERP = () => {
  const features = [
    {
      icon: Cog,
      title: 'Process Integration',
      description: 'Unified system for all business processes'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Real-time insights and analytics'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Solutions that grow with your business'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">ERP Solutions</h1>
            <p className="text-lg opacity-90 mb-8">
              Comprehensive enterprise resource planning systems to streamline your business operations and boost productivity.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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

export default ERP;
