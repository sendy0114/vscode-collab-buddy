import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Navbar } from "./features/navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Technology from "./pages/Technology";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import StaffAugmentation from "./pages/services/StaffAugmentation";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import DotNetDevelopment from "./pages/services/DotNetDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import CMSCRM from "./pages/services/CMSCRM";
import ERP from "./pages/services/ERP";
import GraphicsAndLogo from "./pages/services/GraphicsAndLogo";
import AIML from "./pages/services/AIML";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          
          <BackToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/dotnet-development-company" element={<DotNetDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/uiux-design" element={<UIUXDesign />} />
            <Route path="/services/cms-crm" element={<CMSCRM />} />
            <Route path="/services/erp" element={<ERP />} />
            <Route path="/services/graphics-and-logo" element={<GraphicsAndLogo />} />
            <Route path="/services/aiml" element={<AIML />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </Provider>
);

export default App;
