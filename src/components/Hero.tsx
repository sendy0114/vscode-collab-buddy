import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import VerticalTestimonialCarousel from './VerticalTestimonialCarousel';
import { Link } from "react-router-dom";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiAngular,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { useState, useEffect } from "react";

const Hero = () => {
  const [activeReview, setActiveReview] = useState(0);

  const platforms = [
    {
      name: "GoodFirms",
      rating: 4.9,
      stars: 5,
      url: "https://www.goodfirms.co/company/whitestone-infotech",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Clutch",
      rating: 5.0,
      stars: 5,
      url: "https://clutch.co/profile/whitestone-infotech",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Upwork",
      rating: 5.0,
      stars: 5,
      url: "https://www.upwork.com/agencies/prolanceit/",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Glassdoor",
      rating: 4.8,
      stars: 5,
      url: "https://www.glassdoor.co.in/Overview/Working-at-ProLance-IT-EI_IE10055345.11,22.htm",
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "AmbitionBox",
      rating: 4.7,
      stars: 5,
      url: "https://www.ambitionbox.com/reviews/prolance-it-reviews",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const testimonials = [
    {
      name: "Yashwant Ray",
      company: "Diamond Portal",
      rating: 5,
      avatar: "👨‍💼",
      platform: "Clutch",
      url: "https://clutch.co/profile/whitestone-infotech",
      delay: "0s",
    },
    {
      name: "Darren Mason",
      company: "Dealership 360 CRM",
      rating: 5,
      avatar: "👔",
      platform: "GoodFirms",
      url: "https://www.goodfirms.co/company/whitestone-infotech",
      delay: "0.2s",
    },
    {
      name: "Manohar Kumar",
      company: "Diamond Portal",
      rating: 5,
      avatar: "👨",
      platform: "Upwork",
      url: "https://www.upwork.com/agencies/prolanceit/",
      delay: "0.4s",
    },
  ];

  const techIcons = [
    { Icon: SiReact, name: "React", color: "text-blue-500", delay: "0s" },
    { Icon: SiNodedotjs, name: "Node.js", color: "text-green-600", delay: "0.1s" },
    { Icon: SiPython, name: "Python", color: "text-yellow-500", delay: "0.2s" },
    { Icon: SiAngular, name: "Angular", color: "text-red-600", delay: "0.3s" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500", delay: "0.4s" },
    { Icon: SiDocker, name: "Docker", color: "text-blue-400", delay: "0.5s" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 pt-20 pb-12 px-4 md:pt-24 md:pb-16">
      {/* Background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow hidden md:block" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow hidden md:block"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* -------- COLUMN 1: Platforms (Desktop Only) -------- */}
          <aside className="lg:col-span-2 hidden lg:block">
            <div className="space-y-4">
              {platforms.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block animate-float-slow hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-gray-900">
                        {platform.name}
                      </span>
                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}
                      >
                        {platform.rating}
                      </span>
                      <div className="flex">
                        {[...Array(platform.stars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </aside>

          {/* -------- COLUMN 2: Center Hero (Priority on Mobile) -------- */}
          <article className="lg:col-span-6 mt-[15%] space-y-6 text-center lg:text-left order-first lg:order-none">
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all group animate-fade-in text-sm md:text-base"
            >
              <span className="text-xl md:text-2xl">✨</span>
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Specialized in AI & Modern Technologies
              </span>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform" />
            </Link>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Build Your Vision with{" "}
              <span className="bg-gradient-to-r from-primary via-red-600 to-red-800 bg-clip-text text-transparent">
                Expert Developers
              </span>
            </h1>

            <p
              className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Get top-tier development services tailored to your needs. Whether
              you need a dedicated developer or a complete project solution,
              we've got you covered.
            </p>

            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-primary shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-white">
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="shadow-md hover:shadow-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-105"
                >
                  Hire Developer
                </Button>
              </Link>
            </div>

            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {techIcons.map(({ Icon, name, color, delay }, idx) => (
                <div key={idx} className="group relative" style={{ animationDelay: delay }}>
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center animate-float-slow">
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* -------- COLUMN 3: Testimonials (Desktop Only) -------- */}
          <aside className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <VerticalTestimonialCarousel />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;