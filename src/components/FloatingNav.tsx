import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles, ShoppingBag, MessageSquare, Compass, Phone } from 'lucide-react';
import { Theme } from '../types';

interface FloatingNavProps {
  theme: Theme;
  toggleTheme: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function FloatingNav({ theme, toggleTheme, isOpen, setIsOpen }: FloatingNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on ESC press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  // Close on Outside Click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        // Only close if not clicking the toggle button itself (to avoid double trigger)
        const toggleButton = document.getElementById('hamburger-toggle');
        if (toggleButton && !toggleButton.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, setIsOpen]);

  const menuItems = [
    { label: 'Home', target: '#home', icon: Compass },
    { label: 'Collections', target: '#collections', icon: ShoppingBag },
    { label: 'Reviews', target: '#reviews', icon: MessageSquare },
    { label: 'About', target: '#about', icon: Sparkles },
    { label: 'Contact', target: '#contact', icon: Phone },
  ];

  const handleScroll = (targetId: string) => {
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  return (
    <>
      {/* Floating Toggle Button (Fixed top-left) */}
      <div className="fixed top-6 left-6 z-50">
        <button
          id="hamburger-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full flex items-center justify-center border border-[#D4AF37]/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:border-[#D4AF37] focus:outline-none ${
            theme === 'dark' 
              ? 'bg-[#111]/80 text-[#D4AF37] hover:text-white' 
              : 'bg-white/80 text-[#D4AF37] hover:text-[#AA820A]'
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Full-Screen Blur Overlay & Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-lg z-40"
            />

            {/* Navigation Drawer */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className={`fixed top-0 left-0 h-full w-full sm:w-[380px] z-45 border-r border-[#D4AF37]/20 flex flex-col justify-between p-8 pt-24 ${
                theme === 'dark' ? 'bg-[#0a0a0aa0]' : 'bg-white/95'
              } shadow-[5px_0_30px_rgba(0,0,0,0.5)]`}
            >
              {/* Menu content */}
              <div className="space-y-12">
                <div className="border-b border-dashed border-[#D4AF37]/30 pb-6">
                  <h2 className={`font-cinzel text-2xl tracking-widest font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#111]'
                  }`}>
                    DANIEL
                    <span className="block text-xs font-sans tracking-[0.3em] text-[#D4AF37] mt-1">CLOTHINGS</span>
                  </h2>
                </div>

                {/* Items */}
                <nav className="flex flex-col gap-5">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.button
                        key={item.label}
                        onClick={() => handleScroll(item.target)}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className={`flex items-center gap-4 text-lg font-cinzel text-left group pr-4 py-2 border-b border-transparent hover:border-[#D4AF37]/30 transition-all ${
                          theme === 'dark' ? 'text-[#ccc] hover:text-[#D4AF37]' : 'text-neutral-700 hover:text-[#D4AF37]'
                        }`}
                      >
                        <span className="p-2 rounded-lg bg-neutral-900/10 border border-neutral-800/20 group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/10 transition-colors">
                          <IconComponent className="h-5 w-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        </span>
                        <span className="font-medium tracking-wide">{item.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom (Theme Switcher & Tagline) */}
              <div className="border-t border-[#D4AF37]/20 pt-8 space-y-6">
                {/* Theme Toggle Button */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm tracking-wider font-cinzel ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Appearance
                  </span>
                  <button
                    onClick={toggleTheme}
                    className={`h-11 px-4 rounded-full flex items-center gap-2 border border-[#D4AF37]/30 transition-all hover:border-[#D4AF37] ${
                      theme === 'dark' ? 'bg-[#111] text-yellow-400' : 'bg-neutral-100 text-[#AA820A]'
                    }`}
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="h-4 w-4" />
                        <span className="text-xs font-medium tracking-widest">LIGHT</span>
                      </>
                    ) : (
                      <>
                        <Moon className="h-4 w-4" />
                        <span className="text-xs font-medium tracking-widest">DARK</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-[10px] font-sans tracking-widest text-neutral-500 uppercase">
                  © 2026 Daniel Clothings
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
