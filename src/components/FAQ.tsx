import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of businesses do you typically work with?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises across various industries including healthcare, e-commerce, finance, real estate, and more.',
    },
    {
      question: 'I have an idea for a project. How should I reach out to you?',
      answer: 'Simply fill out our contact form or give us a call at +91 99788 09533. We offer a free initial consultation to discuss your project requirements and provide expert guidance.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our discovery phase.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes! We offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements to ensure your solution runs optimally.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern technologies including React, Node.js, Python, Angular, MongoDB, Docker, AWS, and more. We stay updated with the latest industry trends to deliver cutting-edge solutions.',
    },
    {
      question: 'What is your development process?',
      answer: 'Our refined process includes four key phases: Discover (understanding requirements), Design (creating stunning designs), Build (developing robust solutions), and Deliver (ensuring smooth deployment and support).',
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Absolutely! We understand the importance of confidentiality and are happy to sign NDAs to protect your intellectual property and business ideas.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically work on a milestone-based payment structure. This includes an initial deposit, followed by payments at key project milestones, with the final payment upon project completion and approval.',
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