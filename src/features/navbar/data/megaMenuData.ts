import { MegaMenuContent, MegaMenuKey } from '../types';

export const megaMenuData: Record<MegaMenuKey, MegaMenuContent> = {
  Services: {
    description: {
      title: 'Services',
      text: "Discover our expert solutions crafted for your business. From development to design, we cover it all.",
      featured: {
        title: 'Staff Augmentation',
        text: 'Expand your tech team with expert professionals easily.',
        link: '/services/staff-augmentation',
        imageUrl: 'https://placehold.co/600x400/991B1B/F5F5DC?text=Staff+Augmentation',
      },
    },
    links: [
      {
        title: 'Website Development',
        path: '/services/web-development',
        items: [
          { name: '.NET Development', path: '/services/dotnet' },
          { name: 'Company Website', path: '/services/company-website' },
        ],
      },
      {
        title: 'Mobile App Development',
        path: '/services/mobile',
        items: [
          { name: 'iOS Apps', path: '/services/ios' },
          { name: 'Android Apps', path: '/services/android' },
        ],
      },
      { title: 'UI/UX Design', path: '/services/uiux' },
      { title: 'CMS & CRM', path: '/services/cms-crm' },
      { title: 'ERP', path: '/services/erp' },
      { title: 'Graphics & Logo', path: '/services/graphics-logo' },
      { title: 'AI / ML', path: '/services/ai-ml' },
    ],
    featuredSolutions: [
      {
        title: 'AI Solutions for Retail',
        subtitle: 'Skyrocket growth with predictive AI tools.',
        path: '/services/ai-solutions',
        buttonText: 'Learn more',
        imageUrl: 'https://placehold.co/400x200/991B1B/F5F5DC?text=AI+Solutions',
      },
      {
        title: 'Revolutionizing Businesses with T2D2 AI',
        subtitle: 'Innovative computer-vision systems for defect detection.',
        path: '/services/t2d2',
        buttonText: 'Learn more',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/991B1B?text=T2D2+AI',
      },
    ],
  },

  Technologies: {
    description: {
      title: 'Technologies',
      text: "Explore our core tech stack and frameworks, powering scalable and robust applications.",
      featured: {
        title: 'Framework Focus',
        text: 'React, Next.js, Angular, and Vue.js for modern frontends.',
        link: '/technology/frontend',
        imageUrl: 'https://placehold.co/600x400/991B1B/F5F5DC?text=Tech+Stack',
      },
    },
    links: [
      { title: 'React & Next.js', path: '/technology/react' },
      { title: 'Angular & Vue', path: '/technology/angular-vue' },
      { title: 'Node.js & Python', path: '/technology/backend' },
      { title: 'Cloud/DevOps', path: '/technology/cloud' },
      { title: 'Databases', path: '/technology/databases' },
      { title: 'Mobile Technologies', path: '/technology/mobile' },
      { title: 'QA & Testing', path: '/technology/qa' },
    ],
    featuredSolutions: [
      {
        title: 'Modernizing Legacy Systems',
        subtitle: 'Architecture Review',
        path: '/solutions/architecture',
        buttonText: 'See Details',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/991B1B?text=Architecture',
      },
      {
        title: 'Microservices & Serverless',
        subtitle: 'Scalable Backends',
        path: '/solutions/microservices',
        buttonText: 'Read Whitepaper',
        imageUrl: 'https://placehold.co/400x200/991B1B/F5F5DC?text=Serverless',
      },
    ],
  },

  Industries: {
    description: {
      title: 'Industries',
      text: "We specialize in digital transformation for key market segments.",
      featured: {
        title: 'Industry Spotlight',
        text: 'How we build secure Finance applications.',
        link: '/industries/finance',
        imageUrl: 'https://placehold.co/600x400/991B1B/F5F5DC?text=Finance+App',
      },
    },
    links: [
      { title: 'Healthcare', path: '/industries/healthcare' },
      { title: 'E-commerce', path: '/industries/ecommerce' },
      { title: 'Finance & Fintech', path: '/industries/finance' },
      { title: 'Logistics', path: '/industries/logistics' },
      { title: 'Real Estate', path: '/industries/real-estate' },
      { title: 'EdTech', path: '/industries/edtech' },
      { title: 'Travel & Hospitality', path: '/industries/travel' },
    ],
    featuredSolutions: [
      {
        title: 'HIPAA Compliant Software',
        subtitle: 'Healthcare Focus',
        path: '/solutions/hipaa',
        buttonText: 'View Case Study',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/991B1B?text=HIPAA',
      },
      {
        title: 'Custom B2B E-commerce Platforms',
        subtitle: 'Retail Transformation',
        path: '/solutions/b2b-ecommerce',
        buttonText: 'Explore',
        imageUrl: 'https://placehold.co/400x200/991B1B/F5F5DC?text=B2B+Ecommerce',
      },
    ],
  },

  Company: {
    description: {
      title: 'Company',
      text: "Learn about our mission, values, and the people behind our success.",
      featured: {
        title: 'Join Our Team',
        text: 'See open positions and career growth.',
        link: '/careers',
        imageUrl: 'https://placehold.co/600x400/991B1B/F5F5DC?text=Careers',
      },
    },
    links: [
      { title: 'About Us', path: '/about' },
      { title: 'Leadership', path: '/about/leadership' },
      { title: 'Careers', path: '/careers' },
      { title: 'Partnerships', path: '/company/partnerships' },
      { title: 'Client Testimonials', path: '/testimonials' },
      { title: 'Contact Us', path: '/contact' },
    ],
    featuredSolutions: [
      {
        title: 'Our Process',
        subtitle: 'How We Work',
        path: '/company/process',
        buttonText: 'See Details',
        imageUrl: 'https://placehold.co/400x200/F5F5DC/991B1B?text=Process',
      },
      {
        title: 'Get a Free Quote',
        subtitle: 'Project Estimate',
        path: '/contact',
        buttonText: 'Start Now',
        imageUrl: 'https://placehold.co/400x200/991B1B/F5F5DC?text=Quote',
      },
    ],
  },
};

export const navMenuItems = [
  { name: 'Services', hasDropdown: true, mega: true, path: '/services' },
  { name: 'Technologies', hasDropdown: true, mega: true, path: '/technology' },
  { name: 'Industries', hasDropdown: true, mega: true, path: '/industries' },
  { name: 'Case Studies', path: '/portfolio', hasDropdown: false },
  { name: 'Company', hasDropdown: true, mega: true, path: '/about' },
];
