import React, { useEffect, useState } from "react";

/**
 * AnnouncementBar Component
 * Hides on scroll down and reappears on scroll up.
 */
const AnnouncementBar = ({
  ctaLink = "https://rocket.new",
  message = "Experience our new AI powered Web and Mobile app building platform 🚀 rocket.new. Build any app with simple prompts - no code required.",
  linkText = "rocket.new. Build any app with simple prompts - no code required. →",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🧠 Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down → hide bar
        setIsVisible(false);
      } else {
        // Scrolling up → show bar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <a
      href={ctaLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 shadow-xl
        ${isVisible&& "-translate-y-full"}`}
    >
      <div
        className="flex items-center justify-center p-3 text-white text-sm font-medium text-center 
                   bg-blue-600 bg-opacity-90 
                   lg:bg-gradient-to-r lg:from-blue-600 lg:via-indigo-600 lg:to-purple-800"
      >
        <p className="max-w-4xl text-sm md:text-base cursor-pointer hover:opacity-90 transition-opacity">
          <span className="hidden sm:inline">
            Experience our new AI powered Web and Mobile app building platform
          </span>
          <span className="sm:hidden">New AI platform</span>
          <span className="font-bold underline ml-1 hover:text-yellow-200 transition-colors">
            🚀 {linkText}
          </span>
        </p>
      </div>
    </a>
  );
};

export default AnnouncementBar;
