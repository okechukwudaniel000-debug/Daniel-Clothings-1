import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Theme } from '../types';

export default function BackToTop({ theme }: { theme: Theme }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Appear after scroll > 600px (hero height roughly)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 p-3 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-lg ${
            theme === 'dark'
              ? 'bg-[#111]/80 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
              : 'bg-white/80 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
