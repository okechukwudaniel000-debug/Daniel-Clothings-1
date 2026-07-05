import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Theme } from '../types';
import { STORIES } from '../data';

interface StorytellingScrollerProps {
  theme: Theme;
}

export default function StorytellingScroller({ theme }: StorytellingScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax background effect
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Curtain reveal effect for section container
  const curtainOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const curtainScale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section 
      ref={containerRef}
      id="storytelling" 
      className={`py-24 px-6 md:px-20 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
      }`}
    >
      {/* Parallax background element */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[200px]" />
      </motion.div>

      {/* Structural vertical timeline guide in the center background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent -translate-x-1/2 pointer-events-none hidden md:block" />

      <motion.div 
        style={{ opacity: curtainOpacity, scale: curtainScale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        
        {/* Title and context */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p className="text-[#D4AF37] font-serif italic text-sm tracking-[0.15em] font-medium uppercase">The Narrative</p>
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Our Heritage &amp; Quality
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Storytelling Chapters Loop */}
        <div className="space-y-36">
          {STORIES.map((story, i) => {
            const isEven = i % 2 === 0;

            return (
              <div 
                key={story.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center"
              >
                
                {/* Visual Image Block (Odd columns left, Even columns right) */}
                <div className={`col-span-1 md:col-span-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group rounded-xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:gold-border transition-colors duration-500"
                  >
                    {/* Golden accent glow underneath */}
                    <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Image with subtle parallax */}
                    <div className="overflow-hidden aspect-video sm:aspect-4/3 md:aspect-16/10">
                      <motion.img
                        src={story.image}
                        alt={story.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out grayscale-[15%] group-hover:grayscale-0"
                        loading="lazy"
                      />
                    </div>

                    {/* Floating Accent Text Label */}
                    <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded bg-black/80 backdrop-blur-md border border-[#D4AF37]/30">
                      <span className="text-[10px] font-cinzel tracking-[0.2em] text-[#D4AF37] font-bold uppercase">
                        {story.accentText}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Narrative Text Block */}
                <div className={`col-span-1 md:col-span-6 space-y-6 ${isEven ? 'md:order-2 text-left' : 'md:order-1 text-left'}`}>
                  
                  {/* Sequence Count */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-sans font-semibold text-[#D4AF37] tracking-[0.25em]">
                      0{story.id}
                    </span>
                    <div className="h-px w-8 bg-[#D4AF37]/55" />
                    <span className={`text-[10px] font-cinzel tracking-widest uppercase ${
                      theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>
                      Chapter
                    </span>
                  </div>

                  {/* Narration Titles */}
                  <div className="space-y-1">
                    <h3
                      className={`font-serif text-2xl md:text-3.5xl font-bold tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {story.title}
                    </h3>
                    <p
                      className="text-xs font-serif italic text-[#D4AF37] font-medium tracking-wide"
                    >
                      {story.subtitle}
                    </p>
                  </div>

                  {/* Prose Narrative */}
                  <p
                    className={`text-sm md:text-[14.5px] leading-relaxed font-sans ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {story.description}
                  </p>

                  {/* Subtle brand commitment logo signet */}
                  <div
                    className={`h-12 w-12 border border-[#D4AF37] rounded-full flex items-center justify-center font-cinzel text-[10px] font-bold opacity-30 ${
                      theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#AA820A]'
                    }`}
                  >
                    DC
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
