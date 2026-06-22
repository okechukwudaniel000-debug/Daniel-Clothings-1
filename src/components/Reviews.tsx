import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Theme } from '../types';
import { REVIEWS } from '../data';

interface ReviewsProps {
  theme: Theme;
}

export default function Reviews({ theme }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Trigger auto sliding loop every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#080808]' : 'bg-white'
    }`}>
      {/* Absolute decorative layouts */}
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/3 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-[#D4AF37] font-serif italic text-sm tracking-[0.15em] font-medium uppercase">The Patrons</p>
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Bespoke Testimonials
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Carousel Visual Frame */}
        <div className="relative min-h-[360px] md:min-h-[280px] flex items-center justify-center px-4">
          
          {/* Huge quotation background marks */}
          <div className="absolute top-0 left-4 text-[#D4AF37]/5 pointer-events-none">
            <Quote className="h-32 w-32 -scale-x-100" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`p-10 md:p-12 rounded-2xl border flex flex-col items-center justify-between hover:swap-gold hover:gold-border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-[#111111]/80 border-neutral-800 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
                  : 'bg-[#fafafa] border-neutral-200 shadow-[0_15px_30px_rgba(0,0,0,0.05)]'
              }`}
            >
              {/* Star Configuration */}
              <div className="flex gap-1.5 mb-6 justify-center">
                {[...Array(REVIEWS[currentIndex].stars)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]" />
                ))}
              </div>

              {/* Prose narrative content */}
              <p className={`text-base md:text-lg font-serif italic leading-relaxed mb-6 max-w-2xl text-center ${
                theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
              }`}>
                &ldquo;{REVIEWS[currentIndex].content}&rdquo;
              </p>

              {/* Author profile and role */}
              <div className="flex flex-col items-center">
                <p className={`font-cinzel text-sm font-bold tracking-widest ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {REVIEWS[currentIndex].author.toUpperCase()}
                </p>
                <p className="text-[10px] font-sans text-[#D4AF37] tracking-[0.2em] uppercase font-bold mt-1">
                  {REVIEWS[currentIndex].role}
                </p>
                <p className="text-[9px] font-sans text-neutral-500 tracking-wider mt-1.5">
                  {REVIEWS[currentIndex].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          
          {/* Manual Prev Button */}
          <button
            onClick={handlePrev}
            className={`h-11 w-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              theme === 'dark'
                ? 'border-neutral-800 text-[#D4AF37] hover:border-white hover:text-white bg-neutral-900/40'
                : 'border-neutral-200 text-[#AA820A] hover:border-[#D4AF37] hover:bg-neutral-50'
            }`}
            aria-label="Previous Review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Indicator pagination dots */}
          <div className="flex gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 'right' : 'left');
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-[#D4AF37]'
                    : `w-2 ${theme === 'dark' ? 'bg-neutral-800 hover:bg-neutral-600' : 'bg-neutral-300 hover:bg-neutral-400'}`
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Manual Next Button */}
          <button
            onClick={handleNext}
            className={`h-11 w-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              theme === 'dark'
                ? 'border-neutral-800 text-[#D4AF37] hover:border-white hover:text-white bg-neutral-900/40'
                : 'border-neutral-200 text-[#AA820A] hover:border-[#D4AF37] hover:bg-neutral-50'
            }`}
            aria-label="Next Review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
