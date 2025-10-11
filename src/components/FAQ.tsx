import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What services does Whitestone IT offer?',
      answer: 'We provide comprehensive IT services including Custom Software Development, Mobile App Development (iOS & Android), Web Development, UI/UX Design, Cloud Solutions, AI/ML Integration, DevOps Services, Quality Assurance & Testing, Staff Augmentation, and Ongoing Maintenance & Support.',
    },
    {
      question: 'What types of businesses do you work with?',
      answer: 'We serve businesses of all sizes—from innovative startups to Fortune 500 enterprises—across diverse industries including Healthcare, Finance & Banking, E-commerce & Retail, Real Estate, Education, Manufacturing, Logistics, and SaaS platforms.',
    },
    {
      question: 'How do I get started with my project?',
      answer: 'Getting started is simple: 1) Contact us via our website or phone, 2) Schedule a free consultation to discuss your needs, 3) Receive a detailed proposal with timeline and cost, 4) Sign agreement and kickoff your project. We typically respond within 24 hours.',
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with four key phases: Discovery (requirements gathering & analysis), Design (wireframing, mockups & prototyping), Development (iterative coding with regular demos), and Deployment (testing, launch & handover). We maintain transparent communication throughout with regular updates and milestone reviews.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Timeline depends on project complexity: Simple websites (3-6 weeks), Mobile apps (8-16 weeks), Enterprise solutions (3-9 months), MVP development (6-10 weeks). We provide accurate estimates after understanding your requirements.',
    },
    {
      question: 'Do you provide post-launch support and maintenance?',
      answer: 'Yes! We offer comprehensive post-launch support including 30-day warranty, bug fixes, security updates, performance monitoring, feature enhancements, and dedicated support channels. We also provide flexible maintenance packages for ongoing support.',
    },
    {
      question: 'What technologies and platforms do you work with?',
      answer: 'We specialize in: Frontend (React, Angular, Vue.js, Next.js), Backend (Node.js, Python, .NET, PHP), Mobile (React Native, Flutter, Swift, Kotlin), Cloud (AWS, Azure, Google Cloud), Databases (MongoDB, PostgreSQL, MySQL, Firebase), and emerging technologies like AI/ML, Blockchain, and IoT.',
    },
    {
      question: 'How much does it cost to build a custom solution?',
      answer: 'Costs vary based on project scope, complexity, and timeline. Simple websites start from $5,000, mobile apps from $15,000, and enterprise solutions from $50,000+. We provide transparent, detailed quotes with no hidden fees after understanding your requirements.',
    },
    {
      question: 'Can you work with our existing codebase or team?',
      answer: 'Absolutely! We excel at integrating with existing projects and teams. Whether you need to modernize legacy systems, add new features, or augment your in-house team with specialized expertise, we adapt to your workflow and tools.',
    },
    {
      question: 'Do you sign NDAs and protect intellectual property?',
      answer: 'Yes, confidentiality is paramount. We sign NDAs before any project discussions and ensure complete IP rights transfer upon project completion. All our contracts include strict confidentiality clauses and data protection measures.',
    },
    {
      question: 'What makes Whitestone IT different from other development companies?',
      answer: 'Our differentiators include: 6+ years of proven expertise, 95% client retention rate, dedicated project managers, agile methodology with weekly sprints, transparent communication, competitive pricing without quality compromise, post-launch support, and a team passionate about your success.',
    },
    {
      question: 'Can you help scale my application as my business grows?',
      answer: 'Absolutely! We build scalable architectures from day one using cloud-native technologies, microservices, and best practices. We also provide ongoing optimization, infrastructure scaling, and performance tuning as your user base grows.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently asked{' '}
              <span className="text-primary">questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to key questions about our software development services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 shadow-md hover:shadow-lg transition-shadow border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;