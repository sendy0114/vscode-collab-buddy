import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Database, Shield, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

const DotNetDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: '.NET Core Development',
      description: 'Cross-platform applications with .NET Core and ASP.NET'
    },
    {
      icon: Database,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise applications with SQL Server integration'
    },
    {
      icon: Shield,
      title: 'Cloud Integration',
      description: 'Azure cloud services and deployment solutions'
    },
    {
      icon: Cog,
      title: 'API Development',
      description: 'RESTful APIs and microservices architecture'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">.NET Development Company</h1>
            <p className="text-lg opacity-90 mb-8">
              Enterprise-grade .NET solutions for scalable, secure, and high-performance applications.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Quote
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

export default DotNetDevelopment;
