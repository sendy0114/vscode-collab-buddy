import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Technology = () => {
  const technologies = {
    'Frontend': ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Ruby on Rails'],
    'Mobile': ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Xamarin'],
    'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'DynamoDB'],
    'Cloud & DevOps': ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins'],
    'Other Tools': ['Git', 'Jira', 'GraphQL', 'REST APIs', 'Microservices', 'Agile/Scrum']
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Technology Stack</h1>
            <p className="text-lg opacity-90">
              We leverage the latest technologies and frameworks to build cutting-edge solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <CardTitle className="text-xl">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-primary/10 text-sm rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
