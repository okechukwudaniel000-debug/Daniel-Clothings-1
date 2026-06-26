import { motion } from 'motion/react';
import { Theme } from '../types';
import { SHOWCASE } from '../data';

interface ShowcaseProps {
  theme: Theme;
}

export default function Showcase({ theme }: ShowcaseProps) {
  // Stagger configurations for our masonry grid feel
  const heights = [
    "h-[320px] md:h-[420px]", // Item 1
    "h-[240px] md:h-[300px]", // Item 2
    "h-[280px] md:h-[380px]", // Item 3
    "h-[260px] md:h-[340px]", // Item 4
    "h-[340px] md:h-[450px]", // Item 5
    "h-[220px] md:h-[280px]", // Item 6
  ];

  return (
    <section id="showcase" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
    }`}>
      {/* Background soft lighting */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-[#D4AF37] font-serif italic text-sm tracking-[0.15em] font-medium uppercase">The Atelier Grid</p>
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Fashion Showcase Gallery
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Dynamic Masonry-Style Grid Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:balance]">
          {SHOWCASE.map((item, index) => {
            const hClass = heights[index % heights.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
                whileHover={{ scale: 1.015 }}
                className={`break-inside-avoid relative rounded-xl overflow-hidden group border shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.2)] hover:gold-border transition-all duration-300 ${hClass} ${
                  theme === 'dark' 
                    ? 'bg-[#111] border-neutral-800' 
                    : 'bg-white border-neutral-200/60'
                }`}
              >
                {/* Lazy loaded image frame */}
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-700 ease-out select-none"
                  loading="lazy"
                />

                {/* Dark gradient gloss overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Floating metadata block revealing on hover */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <span className="text-[9px] font-sans font-semibold text-[#D4AF37] tracking-[0.25em] uppercase mb-1">
                    {item.category} Category
                  </span>
                  <h3 className="font-cinzel text-sm sm:text-base text-white tracking-wide font-bold line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-[#D4AF37] mt-2.5 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
