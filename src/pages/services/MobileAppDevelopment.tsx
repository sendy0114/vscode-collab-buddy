import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Apple, Chrome, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppDevelopment = () => {
  const platforms = [
    {
      icon: Apple,
      title: 'iOS Development',
      description: 'Native iOS apps with Swift for optimal performance'
    },
    {
      icon: Chrome,
      title: 'Android Development',
      description: 'Native Android apps with Kotlin and Java'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'React Native and Flutter for multi-platform apps'
    },
    {
      icon: Zap,
      title: 'Progressive Web Apps',
      description: 'Web apps that work like native mobile applications'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-lg opacity-90 mb-8">
              Native and cross-platform mobile applications for iOS and Android with seamless user experiences.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Build Your App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <platform.icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{platform.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;
