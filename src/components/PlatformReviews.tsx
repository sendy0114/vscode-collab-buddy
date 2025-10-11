import { Star, ExternalLink } from "lucide-react";

const PlatformReviews = () => {
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

  // Duplicate platforms for infinite scroll effect
  const allPlatforms = [...platforms, ...platforms];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-foreground">Trusted on </span>
          <span className="text-primary">Leading Platforms</span>
        </h2>
        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          Our commitment to excellence is recognized across the industry's top review platforms
        </p>
      </div>

      <style>{`
        @keyframes scroll-platforms {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .platform-track {
          animation: scroll-platforms 30s linear infinite;
          width: 200%;
        }

        .group:hover .platform-track {
          animation-play-state: paused;
        }
      `}</style>

      <div 
        className="relative w-full flex flex-nowrap overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="platform-track flex items-center gap-6 px-6">
          {allPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group/card"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105 w-64">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-gray-900">
                    {platform.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover/card:text-primary transition-colors" />
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`text-3xl font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}
                  >
                    {platform.rating}
                  </span>
                  <div className="flex">
                    {[...Array(platform.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformReviews;
