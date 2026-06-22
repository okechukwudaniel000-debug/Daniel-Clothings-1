import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Theme } from '../types';
import { HERO_MORPHING_TEXTS } from '../data';

interface HeroProps {
  theme: Theme;
  onExploreClick: () => void;
  onShopClick: () => void;
}

export default function Hero({ theme, onExploreClick, onShopClick }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Text morphing timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % HERO_MORPHING_TEXTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Monitor scroll for Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Layered images representing requested collections
  const layeredImages = [
    {
      src: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400",
      label: "Bespoke Agbada",
      delay: 0,
      rotate: -15,
      x: "-120px",
      y: "-110px",
      size: "w-28 h-40 md:w-44 md:h-56"
    },
    {
      src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400",
      label: "Ankara Royal Dress",
      delay: 0.15,
      rotate: 12,
      x: "130px",
      y: "-140px",
      size: "w-32 h-44 md:w-48 md:h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400",
      label: "Senator Suit Cut",
      delay: 0.3,
      rotate: -8,
      x: "-140px",
      y: "110px",
      size: "w-24 h-36 md:w-40 md:h-52"
    },
    {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
      label: "Corporate Cashmere",
      delay: 0.45,
      rotate: 15,
      x: "120px",
      y: "125px",
      size: "w-28 h-36 md:w-36 md:h-48"
    },
    {
      src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=400",
      label: "Luxury Silk",
      delay: 0.6,
      rotate: 4,
      x: "0px",
      y: "0px",
      size: "w-36 h-48 md:w-56 md:h-72"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-20 py-24 overflow-hidden">
      {/* Background radial soft light & glow overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient Gold backlights */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#D4AF37]/3 blur-[100px] pointer-events-none" />

        {/* Floating Gold Particles (Layer 1) */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              top: `${15 + (i * 7) % 80}%`,
              left: `${10 + (i * 11) % 80}%`,
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              opacity: 0.15 + (i % 4) * 0.1,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + (i % 3) * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Extra glowing gold vector grids for luxury tone */}
        <div className="absolute inset-0 bg-transparent opacity-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <svg className="w-full h-full stroke-[#D4AF37]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" strokeWidth="0.05" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto z-10">
        
        {/* Column 1: Morphing typography and brand messaging */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          
          {/* Subtitle badge with shimmering border */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#111]/75 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.08)]"
          >
            <Sparkles className="h-4 w-4 text-[#D4AF37] animate-pulse" />
            <span className="text-[10px] md:text-xs font-cinzel tracking-[0.25em] text-[#D4AF37] font-medium uppercase">
              Daniel Clothings Nigeria
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <div className="space-y-4">
            <span className="font-serif italic text-[#D4AF37] text-lg md:text-xl block md:mb-1">The Essence of</span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`font-serif text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Confidence
              <span className="block font-serif font-light italic text-[#D4AF37] tracking-normal mt-1">
                & Style
              </span>
            </motion.h1>

            {/* Subtitle: High Precision Morphing Slider */}
            <div className="h-10 md:h-12 relative flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                  className={`text-lg md:text-2xl font-serif tracking-wide italic ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'
                  }`}
                >
                  {HERO_MORPHING_TEXTS[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-sm md:text-base max-w-lg leading-relaxed ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Experience the fusion of rich Nigerian tradition and modern corporate excellence. Handcrafted luxury for the global citizen, bespoke-detailed to empower your confidence.
            </motion.p>
          </div>

          {/* Luxurious Buttons (Primary & Secondary) */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Primary 'Shop' Button with Hover Glow & Subtle Ripple Effect */}
              <button
                onClick={onShopClick}
                className="relative overflow-hidden group px-8 py-4 bg-[#D4AF37] text-black font-cinzel font-semibold text-xs tracking-[0.2em] rounded-md transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:bg-[#F5D67B] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  SHOP NOW
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-none group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              {/* Secondary 'Explore' with Gold Border Outline and Light Background */}
              <button
                onClick={onExploreClick}
                className={`px-8 py-4 rounded-md font-cinzel font-semibold text-xs tracking-[0.2em] transition-all duration-300 border active:scale-95 cursor-pointer ${
                  theme === 'dark'
                    ? 'border-[#D4AF37]/50 bg-white/5 text-white hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]'
                    : 'border-neutral-800 bg-neutral-900/5 text-neutral-900 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                EXPLORE
              </button>
            </motion.div>

            {/* Trusted indicators anchored to the left banner column */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`flex items-center gap-4 border-t pt-6 ${
                theme === 'dark' ? 'border-neutral-800/60' : 'border-neutral-200'
              }`}
            >
              <div className="text-2xl font-serif font-bold text-[#D4AF37]">4.9★</div>
              <div className={`h-8 w-[1px] ${theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'}`}></div>
              <div className="text-[10px] uppercase tracking-widest opacity-60 font-medium">
                Trusted by 10k+<br/>global customers
              </div>
            </motion.div>
          </div>
        </div>

        {/* Column 2: Spiral Fashion Imagery Parallax Grid */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-12 lg:mt-0 select-none">
          <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10 animate-[spin_50s_linear_infinite] pointer-events-none" />
          <div className="absolute w-[80%] h-[80%] rounded-full border border-[#D4AF37]/5 animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />

          {/* Golden Aura Glow */}
          <div className="absolute h-48 w-48 rounded-full bg-[#D4AF37]/15 blur-[60px] animate-pulse pointer-events-none" />

          {/* Interactive Layered Ring of Clothing Categories */}
          <div className="relative w-full h-full flex items-center justify-center">
            {layeredImages.map((img, i) => {
              // Custom parallax multiplier based on scrolling offset
              const translateYOffset = scrollY * (0.05 + i * 0.03);
              const rotationOffset = scrollY * 0.02;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5, rotate: img.rotate }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: img.delay,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  style={{
                    x: img.x,
                    y: `calc(${img.y} + ${translateYOffset}px)`,
                    rotate: img.rotate + rotationOffset,
                  }}
                  whileHover={{
                    scale: 1.08,
                    zIndex: 40
                  }}
                  className={`absolute ${img.size} rounded-lg overflow-hidden border border-[#D4AF37]/40 shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition-shadow duration-300 z-${10 + i * 5}`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                    loading="eager"
                  />
                  {/* Subtle luxury text stripe in cards on mouse hold/hover */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-center">
                    <span className="block text-[8px] sm:text-[10px] font-cinzel text-white leading-none tracking-[0.2em]">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator matching Artistic Flair layout */}
      <div className="absolute right-6 top-[55%] -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-20 pointer-events-none">
        <span className="[writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-[0.6em] opacity-40 font-serif">
          SCROLL STORY
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
      </div>
    </section>
  );
}
