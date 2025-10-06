import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Globe, Palette, Database, Cloud, Settings, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements. We develop scalable, secure, and high-performance applications.',
      features: ['Enterprise Solutions', 'Legacy System Modernization', 'API Development', 'Microservices Architecture']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.',
      features: ['React & Angular', 'E-commerce Platforms', 'CMS Development', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging and intuitive digital experiences for your customers.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design, implementation, and optimization for efficient data management and storage.',
      features: ['SQL Databases', 'NoSQL Solutions', 'Data Migration', 'Performance Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, deployment, and management services for scalable and reliable infrastructure.',
      features: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and technical support to ensure your applications run smoothly and efficiently.',
      features: ['24/7 Support', 'Bug Fixes', 'Updates', 'Monitoring']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your digital infrastructure.',
      features: ['Technology Strategy', 'Digital Transformation', 'System Architecture', 'Best Practices']
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg opacity-90">
              Comprehensive software development services tailored to meet your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
