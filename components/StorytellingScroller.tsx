import { motion } from 'motion/react';
import { Theme } from '../types';
import { STORIES } from '../data';

interface StorytellingScrollerProps {
  theme: Theme;
}

export default function StorytellingScroller({ theme }: StorytellingScrollerProps) {
  return (
    <section id="storytelling" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
    }`}>
      {/* Structural vertical timeline guide in the center background */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent -translate-x-1/2 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
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
                    initial={{ opacity: 0, y: 70, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative group rounded-xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:gold-border transition-colors duration-500"
                  >
                    {/* Golden accent glow underneath */}
                    <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Parallax Hover Image */}
                    <div className="overflow-hidden aspect-video sm:aspect-4/3 md:aspect-16/10">
                      <img
                        src={story.image}
                        alt={story.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[15%] group-hover:grayscale-0"
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
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-sm font-sans font-semibold text-[#D4AF37] tracking-[0.25em]">
                      0{story.id}
                    </span>
                    <div className="h-px w-8 bg-[#D4AF37]/55" />
                    <span className={`text-[10px] font-cinzel tracking-widest uppercase ${
                      theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                    }`}>
                      Chapter
                    </span>
                  </motion.div>

                  {/* Narration Titles */}
                  <div className="space-y-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`font-serif text-2xl md:text-3.5xl font-bold tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {story.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-xs font-serif italic text-[#D4AF37] font-medium tracking-wide"
                    >
                      {story.subtitle}
                    </motion.p>
                  </div>

                  {/* Prose Narrative */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-sm md:text-[14.5px] leading-relaxed font-sans ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {story.description}
                  </motion.p>

                  {/* Subtle brand commitment logo signet */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    viewport={{ once: true }}
                    className={`h-12 w-12 border border-[#D4AF37] rounded-full flex items-center justify-center font-cinzel text-[10px] font-bold ${
                      theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#AA820A]'
                    }`}
                  >
                    DC
                  </motion.div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
