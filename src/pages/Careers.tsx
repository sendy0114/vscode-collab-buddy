import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase } from 'lucide-react';

const Careers = () => {
  const openings = [
    {
      title: 'Senior React Developer',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['React', 'TypeScript', 'Redux', 'Node.js']
    },
    {
      title: 'Full Stack Developer',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Mobile App Developer',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['React Native', 'iOS', 'Android', 'Firebase']
    },
    {
      title: 'UI/UX Designer',
      location: 'On-site',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'QA Engineer',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '2+ years',
      skills: ['Automation Testing', 'Selenium', 'Jest', 'CI/CD']
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg opacity-90">
              Build your career with a dynamic team of talented professionals
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-bold mb-2">Growth Opportunities</h3>
                <p className="text-sm text-muted-foreground">Continuous learning and career advancement</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-bold mb-2">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">Flexible working hours and remote options</p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg">
                <h3 className="font-bold mb-2">Great Culture</h3>
                <p className="text-sm text-muted-foreground">Collaborative and innovative environment</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Current Openings</h2>
            <div className="grid gap-6">
              {openings.map((job, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      <Button>Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.experience}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
