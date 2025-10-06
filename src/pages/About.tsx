import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'We prioritize our clients needs and work closely with them to deliver customized solutions.'
    },
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'Committed to delivering high-quality solutions with rigorous testing and quality control.'
    },
    {
      icon: Award,
      title: 'Excellence in Delivery',
      description: 'Timely delivery of projects with exceptional technological expertise and innovation.'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Cultural understanding and global reach to serve clients worldwide effectively.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg opacity-90">
              Your trusted partner in software development and digital transformation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At Whitestone Infotech, we specialize in providing high-quality, cost-effective offshore software 
              development services to our clients. Our team of experts is committed to delivering timely and 
              efficient solutions that meet the unique needs of each of our clients.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer affordable and comprehensive custom development solutions to meet the diverse needs of our 
              clients. Our team works closely with each client to ensure that all their requirements are met, and 
              we guarantee the quality of our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">Expertise & Experience</h3>
                <p className="text-muted-foreground">6+ years of delivering exceptional software solutions across various industries.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Agile Methodology</h3>
                <p className="text-muted-foreground">Custom agile approach for maximum adaptability and efficiency in development.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cost-Effective Solutions</h3>
                <p className="text-muted-foreground">Affordable pricing without compromising on quality or functionality.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dedicated Team</h3>
                <p className="text-muted-foreground">50+ talented IT professionals committed to your success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
