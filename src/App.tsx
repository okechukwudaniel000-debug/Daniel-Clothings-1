import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Scissors, ShoppingBag, Eye, ShieldCheck, HelpCircle } from 'lucide-react';

import { Theme, CollectionItem } from './types';
import { AuthProvider } from './features/auth/AuthContext';
import { CartProvider } from './features/cart/CartContext';

import FloatingNav from './components/FloatingNav';
const Hero = lazy(() => import('./components/Hero'));
const StorytellingScroller = lazy(() => import('./components/StorytellingScroller'));
const FeaturedCollections = lazy(() => import('./components/FeaturedCollections'));
const WhyChoose = lazy(() => import('./components/WhyChoose'));
const Showcase = lazy(() => import('./components/Showcase'));
const Reviews = lazy(() => import('./components/Reviews'));
const TrustIndicators = lazy(() => import('./components/TrustIndicators'));
const BrandAbout = lazy(() => import('./components/BrandAbout'));
const ContactSocials = lazy(() => import('./components/ContactSocials'));
const Footer = lazy(() => import('./components/Footer'));
import BackToTop from './components/BackToTop';
import SmartSearch from './components/SmartSearch';

import { SkeletonHero, SkeletonCard, SkeletonReview } from './components/Skeletons';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('daniel_clothings_theme') as Theme) || 'dark';
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);

  // Sync theme with body background colours
  useEffect(() => {
    const nextBodyBg = theme === 'dark' ? '#080808' : '#ffffff';
    const nextBodyColor = theme === 'dark' ? '#ffffff' : '#111111';
    
    document.body.style.backgroundColor = nextBodyBg;
    document.body.style.color = nextBodyColor;
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('daniel_clothings_theme', theme);
  }, [theme]);

  // Simulated Luxury Asset Loading Stage (1.8s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Callback to auto-scroll when Hero buttons are clicked
  const handleScrollToId = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className={`min-h-screen relative w-full ${
          theme === 'dark' ? 'bg-[#080808] text-white' : 'bg-white text-neutral-900'
        }`}>
          
          {/* 1. Loading Skeleton Screen Layer */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading-screen"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed inset-0 z-50 overflow-y-auto ${
                  theme === 'dark' ? 'bg-[#080808]' : 'bg-white'
                }`}
              >
                {/* Shimmer loading title */}
                <div className="flex flex-col items-center justify-center pt-16 pb-8 text-center space-y-2">
                  <h1 className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.3em]">
                    DANIEL <span className="text-[#D4AF37]">CLOTHINGS</span>
                  </h1>
                  <div className="h-0.5 w-12 bg-[#D4AF37] animate-pulse" />
                  <p className="text-[9px] font-sans tracking-widest text-[#D4AF37] uppercase">Initializing Atelier...</p>
                </div>

                {/* Structured Skeletons mimicry */}
                <div className="space-y-16 pb-24">
                  <SkeletonHero theme={theme} />
                  
                  <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...Array(3)].map((_, i) => (
                      <div key={i}>
                        <SkeletonCard theme={theme} />
                      </div>
                    ))}
                  </div>

                  <div className="max-w-4xl mx-auto px-6">
                    <SkeletonReview theme={theme} />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Main Render Layer */}
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
                {/* Floating Hamburger Nav */}
                <SmartSearch theme={theme} />
                <FloatingNav 
                  theme={theme} 
                  toggleTheme={toggleTheme} 
                  isOpen={isNavOpen} 
                  setIsOpen={setIsNavOpen} 
                />

                {/* Luxury Floating Logo Header (Static branding for layout balance) */}
                <header className="absolute top-6 right-6 md:right-12 z-40 flex items-center gap-1.5 focus:outline-none pointer-events-none">
                  <h1 className="font-cinzel text-md md:text-lg font-black tracking-widest leading-none drop-shadow-sm">
                    DANIEL <span className="text-[#D4AF37]">CLOTHINGS</span>
                  </h1>
                </header>

                {/* Hero Section */}
                <Hero 
                  theme={theme} 
                  onExploreClick={() => handleScrollToId('#storytelling')} 
                  onShopClick={() => handleScrollToId('#collections')} 
                />

                {/* Trust telemetries & Numbers */}
                <TrustIndicators theme={theme} />

                {/* Storytelling Narrative Chapter Scroller */}
                <StorytellingScroller theme={theme} />

                {/* Featured Collections Gallery */}
                <FeaturedCollections 
                  theme={theme} 
                  onExploreCollection={(item) => setSelectedCollection(item)} 
                />

                {/* Features - Philosophy & Craftsmanship */}
                <WhyChoose theme={theme} />

                {/* Staggered Masonry Fashion Showcase */}
                <Showcase theme={theme} />

                {/* Testimonials Slideshow Slider */}
                <Reviews theme={theme} />

                {/* About Brand Essay paragraph */}
                <BrandAbout theme={theme} />

                {/* Contact Direct Social Media Access */}
                <ContactSocials theme={theme} />

                {/* Elegant Luxury Minimal Footer */}
                <Footer theme={theme} />
                <BackToTop theme={theme} />
              </Suspense>
            </motion.div>
          )}

          {/* Custom Slide-Out Details Modal drawer for Collections */}
          <AnimatePresence>
            {selectedCollection && (
              <>
                {/* Modal glass panel backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedCollection(null)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
                />

                {/* Detail Drawer frame */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 30 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className={`fixed z-50 max-w-2xl w-full rounded-2xl border overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col ${
                    theme === 'dark' 
                      ? 'bg-[#111] border-neutral-800 text-white' 
                      : 'bg-white border-neutral-200 text-neutral-900'
                  }`}
                >
                  {/* Media image banner */}
                  <div className="relative h-[240px] w-full overflow-hidden">
                    <img
                      src={selectedCollection.image}
                      alt={selectedCollection.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCollection(null)}
                      className="absolute top-4 right-4 h-10 w-10 rounded-full flex items-center justify-center bg-black/75 border border-[#D4AF37]/30 text-white hover:text-[#D4AF37] transition-all cursor-pointer hover:scale-105"
                      aria-label="Close Details"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Overlaid Title context */}
                    <div className="absolute bottom-4 left-6 space-y-0.5 text-left">
                      <span className="text-[10px] font-sans text-[#D4AF37] tracking-[0.2em] font-bold uppercase">
                        Collection Highlight
                      </span>
                      <h3 className="font-cinzel text-xl md:text-2xl font-black text-white tracking-wider">
                        {selectedCollection.name}
                      </h3>
                    </div>
                  </div>

                  {/* Informational content drawer */}
                  <div className="p-8 space-y-6 text-left">
                    
                    <div className="space-y-3">
                      <h4 className="font-cinzel text-xs tracking-[0.15em] font-bold text-[#D4AF37] uppercase">The Narrative</h4>
                      <p className={`text-sm leading-relaxed font-sans ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                        {selectedCollection.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-dashed border-neutral-800/10">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-cinzel text-neutral-400 font-bold uppercase">
                          <Scissors className="h-3.5 w-3.5 text-[#D4AF37]" />
                          Tailor Method
                        </div>
                        <p className={`text-xs font-sans ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          {selectedCollection.designerNote}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-cinzel text-neutral-400 font-bold uppercase">
                          <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                          Authenticity Label
                        </div>
                        <p className={`text-xs font-sans ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                          Original Daniel Clothings Signature Fit
                        </p>
                      </div>
                    </div>

                    {/* Call-to-action layout row */}
                    <div className="pt-6 flex flex-wrap gap-4 items-center justify-between border-t border-neutral-800/10">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4.5 w-4.5 text-[#D4AF37]" />
                        <span className="text-[10px] font-sans text-neutral-400 tracking-wider">
                          Consultation requires zero deposit
                        </span>
                      </div>

                      <a
                        href="https://wa.me/2349132715125"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setSelectedCollection(null)}
                        className="px-6 py-3 bg-[#D4AF37] text-black font-cinzel font-bold text-[10px] tracking-[0.2em] rounded hover:bg-[#F5D67B] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
                      >
                        CONSULT FITTING
                        <ShoppingBag className="h-3.5 w-3.5" />
                      </a>
                    </div>

                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>
      </CartProvider>
    </AuthProvider>
  );
}
