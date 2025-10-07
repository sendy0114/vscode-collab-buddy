import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServicesInteractive from '@/components/ServicesInteractive';
import Process from '@/components/Process';
import Industries from '@/components/Industries';
import Stats from '@/components/Stats';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import Chatbot from '@/components/Chatbot';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ClientLogos />
      <ServicesInteractive />
      <Process />
      <Industries />
      <Stats />
      <PortfolioShowcase />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Chatbot />
    </div>
  );
};

export default Home;
