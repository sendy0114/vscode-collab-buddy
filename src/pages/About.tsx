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
              Founded with a vision to transform businesses through innovative technology solutions, Whitestone IT has grown 
              from a small team of passionate developers into a trusted global partner for digital transformation. With over 
              6 years of excellence in software development, we've helped businesses across industries unlock their full potential 
              through custom technology solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our journey is defined by our commitment to excellence, innovation, and client success. We combine deep technical 
              expertise with a business-first approach, ensuring that every solution we deliver not only meets technical requirements 
              but also drives measurable business outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're proud to serve clients worldwide, from ambitious startups to established enterprises, helping them 
              navigate the complexities of digital transformation with confidence. Our team of 50+ dedicated professionals brings 
              expertise in cutting-edge technologies, agile methodologies, and industry best practices to every project.
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
                <h3 className="font-semibold mb-2 text-primary">🎯 Proven Track Record</h3>
                <p className="text-muted-foreground">100+ successful projects delivered across healthcare, fintech, e-commerce, and enterprise sectors with 95% client retention rate.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">⚡ Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">Expertise in AI/ML, cloud architecture, microservices, and modern frameworks ensuring future-proof solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">🛡️ Quality Assurance</h3>
                <p className="text-muted-foreground">Rigorous testing protocols, 99.9% uptime guarantee, and continuous monitoring for optimal performance.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">🤝 Partnership Approach</h3>
                <p className="text-muted-foreground">We don't just build software—we become your technology partner, invested in your long-term success.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">🌍 Global Reach, Local Touch</h3>
                <p className="text-muted-foreground">Serving clients across 15+ countries with cultural understanding and timezone-friendly collaboration.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">💡 Innovation-Driven</h3>
                <p className="text-muted-foreground">Continuous R&D in emerging technologies to keep your business ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
