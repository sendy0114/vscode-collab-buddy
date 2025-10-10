import React, { useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Smith", company: "Tech Innovations Inc.", avatar: "JS", rating: 5, text: "WhiteStone delivered an exceptional mobile app that exceeded our expectations. Their team was professional, responsive, and delivered on time." },
    { name: "Sarah Johnson", company: "Global Solutions Ltd.", avatar: "SJ", rating: 5, text: "Outstanding web development services! The team understood our requirements perfectly and created a solution that transformed our business operations." },
    { name: "Michael Chen", company: "Startup Ventures", avatar: "MC", rating: 5, text: "Working with WhiteStone was a game-changer for our startup. They built a scalable platform that helped us grow from 0 to 10,000 users in 6 months." },
    { name: "Emily Davis", company: "Creative Studio", avatar: "ED", rating: 5, text: "A highly skilled and friendly team! Their design and development work boosted our brand identity to a new level." },
    { name: "David Miller", company: "NextGen Solutions", avatar: "DM", rating: 5, text: "Professional, innovative, and detail-oriented. Highly recommended for any tech-driven business." },
  ];

  // duplicate once for seamless loop
  const items = [...testimonials, ...testimonials];

  const innerRef = useRef(null);       // moving element (translated)
  const baseX = useRef(0);            // current translateX (px), will be <= 0
  const rafId = useRef(null);
  const speedRef = useRef(0.6);       // pixels per frame (tweak to change speed)

  // animation loop:
  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    let mounted = true;

    const tick = () => {
      if (!mounted) return;
      const totalWidth = inner.scrollWidth / 2 || 1; // width of single set
      baseX.current -= speedRef.current;             // move left
      // fast wrap when it passes half width -> reduce magnitude by totalWidth
      if (Math.abs(baseX.current) >= totalWidth) {
        baseX.current += totalWidth;
      }
      inner.style.transform = `translateX(${baseX.current}px)`;
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      mounted = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [testimonials.length]);

  // normalize helper: keep baseX in (-totalWidth, 0]
  const normalizeBaseX = (inner) => {
    const totalWidth = inner.scrollWidth / 2 || 1;
    const mod = ((baseX.current % totalWidth) + totalWidth) % totalWidth; // 0..totalWidth-1
    baseX.current = mod === 0 ? 0 : mod - totalWidth; // convert to 0 or (-totalWidth..-1)
  };

  // buttons: modify baseX directly (affects transform used by loop)
  const scroll = (direction) => {
    const inner = innerRef.current;
    if (!inner) return;

    const visible = inner.parentElement.clientWidth || 0;
    const scrollAmount = Math.round(visible * 0.8); // how much each click moves

    if (direction === "left") {
      // left button -> show previous items -> move content right (increase baseX)
      baseX.current += scrollAmount;
    } else {
      // right button -> show next items -> move content left (decrease baseX)
      baseX.current -= scrollAmount;
    }

    normalizeBaseX(inner);
    inner.style.transform = `translateX(${baseX.current}px)`;
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">Client satisfaction is our top priority, and nothing speaks louder than the voices of those we've served.</p>
      </div>

      <div className="relative overflow-hidden">
        <div className="overflow-hidden">
          <div ref={innerRef} className="flex space-x-6 will-change-transform" style={{ transform: "translateX(0px)" }}>
            {items.map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 w-[350px] bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-left">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <button aria-label="previous" onClick={() => scroll("left")} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button aria-label="next" onClick={() => scroll("right")} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* optional: hide native scrollbars if you ever switch to an overflow scroller */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Testimonials;