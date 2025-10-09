import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffAugmentation = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Talent Pool',
      description: 'Access to highly skilled professionals with diverse technical expertise'
    },
    {
      icon: Clock,
      title: 'Flexible Scaling',
      description: 'Scale your team up or down based on project requirements'
    },
    {
      icon: Shield,
      title: 'Reduced Risk',
      description: 'Minimize hiring risks with pre-vetted, experienced professionals'
    }
  ];

  const services = [
    'Frontend Developers (React, Angular, Vue)',
    'Backend Developers (.NET, Node.js, Python)',
    'Full Stack Developers',
    'Mobile App Developers (iOS, Android)',
    'UI/UX Designers',
    'DevOps Engineers',
    'QA & Testing Specialists',
    'Project Managers'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Staff Augmentation</h1>
            <p className="text-lg opacity-90 mb-8">
              Expand your tech team with expert professionals easily. We provide skilled developers and IT specialists to boost your projects.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Staff Augmentation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Available Roles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Expand Your Team?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your staffing needs and find the perfect professionals for your projects.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StaffAugmentation;
