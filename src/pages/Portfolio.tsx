import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'Diamond Portal - B2B Trading Platform',
      category: 'Enterprise Web Application',
      tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop',
      description: 'Real-time diamond trading platform with secure payment gateway, advanced search filters, and live price updates. Handles 10,000+ daily transactions with 99.9% uptime.'
    },
    {
      title: 'TeleMed Pro - Healthcare Platform',
      category: 'Healthcare & Telemedicine',
      tags: ['React Native', 'AWS', 'HIPAA', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      description: 'HIPAA-compliant telemedicine app with video consultations, e-prescriptions, health records, and appointment scheduling. Serving 50,000+ patients across 15 states.'
    },
    {
      title: 'FinanceFlow - Investment Dashboard',
      category: 'FinTech Application',
      tags: ['Angular', 'D3.js', 'Python', 'AWS Lambda'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      description: 'AI-powered financial analytics dashboard with real-time market data, portfolio tracking, risk analysis, and automated trading alerts for institutional investors.'
    },
    {
      title: 'ShipTrack360 - Logistics Platform',
      category: 'Supply Chain & Logistics',
      tags: ['Vue.js', 'PostgreSQL', 'Google Maps API', 'IoT'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
      description: 'End-to-end logistics management with GPS tracking, route optimization, warehouse management, and predictive delivery analytics. Managing 100,000+ shipments monthly.'
    },
    {
      title: 'SocialHub - Community Platform',
      category: 'Social Media & Networking',
      tags: ['Next.js', 'GraphQL', 'Redis', 'Elasticsearch'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
      description: 'Feature-rich social platform with real-time messaging, content feeds, video sharing, and AI-powered content recommendations. Scaled to 500,000+ active users.'
    },
    {
      title: 'RestoPro - Restaurant Management',
      category: 'Hospitality & F&B',
      tags: ['Flutter', 'Firebase', 'Stripe', 'QR Codes'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
      description: 'Comprehensive restaurant suite with POS system, contactless ordering, inventory management, staff scheduling, and analytics dashboard. Used by 200+ restaurants.'
    },
    {
      title: 'EduLearn - E-Learning Platform',
      category: 'Education Technology',
      tags: ['React', 'Node.js', 'MongoDB', 'Video Streaming'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
      description: 'Interactive learning platform with live classes, course marketplace, progress tracking, certificates, and AI-based personalized recommendations for 50,000+ students.'
    },
    {
      title: 'PropManage - Real Estate CRM',
      category: 'Real Estate & CRM',
      tags: ['React', '.NET Core', 'SQL Server', 'Azure'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      description: 'All-in-one real estate management system with property listings, tenant portals, payment processing, maintenance tracking, and document management for 1,000+ properties.'
    },
    {
      title: 'FitTrack Pro - Fitness & Wellness',
      category: 'Health & Fitness',
      tags: ['React Native', 'Firebase', 'ML Kit', 'HealthKit'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop',
      description: 'Smart fitness app with workout tracking, meal planning, AI coach, wearable integration, and social challenges. 100,000+ downloads with 4.8★ rating.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-glow text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg opacity-90">
              Showcasing our successful projects and innovative solutions across various industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge>{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
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

export default Portfolio;
