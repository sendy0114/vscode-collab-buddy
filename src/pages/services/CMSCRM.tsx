import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Users, Settings, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CMSCRM = () => {
  const solutions = [
    {
      icon: Database,
      title: 'Content Management',
      description: 'Custom CMS solutions for easy content management'
    },
    {
      icon: Users,
      title: 'Customer Relations',
      description: 'CRM systems to manage customer interactions'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automated processes for efficiency'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data insights and custom reporting tools'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">CMS & CRM Solutions</h1>
            <p className="text-lg opacity-90 mb-8">
              Custom content management and customer relationship management systems tailored to your business needs.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMSCRM;
