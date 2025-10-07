// src/components/Navbar/data/megaMenuData.ts
export const servicesMenuData = {
  description: {
    title: "Services",
    text: "Discover our expert solutions crafted for your business. From development to design, we cover it all.",
    featured: {
      title: "Staff Augmentation",
      text: "Expand your tech team with expert professionals easily.",
      link: "/services/staff-augmentation",
      imageUrl: "/images/services/staff.jpg",
    },
  },
  links: [
    {
      title: "Website Development",
      path: "/services/website-development",
      items: [
        { name: ".NET Development", path: "/services/dotnet" },
        { name: "Company Website", path: "/services/company-website" },
      ],
    },
    {
      title: "Mobile App Development",
      path: "/services/mobile",
      items: [
        { name: "iOS Apps", path: "/services/ios" },
        { name: "Android Apps", path: "/services/android" },
      ],
    },
    {
      title: "UI/UX Design",
      path: "/services/uiux",
    },
    {
      title: "CMS & CRM",
      path: "/services/cms-crm",
    },
    {
      title: "ERP",
      path: "/services/erp",
    },
    {
      title: "Graphics & Logo",
      path: "/services/graphics-logo",
    },
    {
      title: "AI / ML",
      path: "/services/ai-ml",
    },
  ],
  featuredSolutions: [
    {
      title: "AI Solutions for Retail",
      subtitle: "Skyrocket growth with predictive AI tools.",
      path: "/services/ai-solutions",
      buttonText: "Learn more",
      imageUrl: "/images/services/ai.jpg",
    },
    {
      title: "Revolutionizing Businesses with T2D2 AI",
      subtitle: "Innovative computer-vision systems for defect detection.",
      path: "/services/t2d2",
      buttonText: "Learn more",
      imageUrl: "/images/services/t2d2.jpg",
    },
  ],
};
