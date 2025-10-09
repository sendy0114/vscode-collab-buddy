import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Bot, LineChart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIML = () => {
  const solutions = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models for predictive analytics'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI solutions'
    },
    {
      icon: LineChart,
      title: 'Data Analytics',
      description: 'Advanced data analysis and insights'
    },
    {
      icon: Sparkles,
      title: 'Computer Vision',
      description: 'Image recognition and processing solutions'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">AI & Machine Learning</h1>
            <p className="text-lg opacity-90 mb-8">
              Cutting-edge AI and machine learning solutions to transform your business with intelligent automation.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore AI Solutions
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

export default AIML;
