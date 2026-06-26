import { useState, useEffect } from 'react';
import { Theme } from '../types';

interface FooterProps {
  theme: Theme;
}

export default function Footer({ theme }: FooterProps) {
  const [lagosTime, setLagosTime] = useState('12:00 PM');

  useEffect(() => {
    const updateLagosTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Africa/Lagos',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat([], options);
        setLagosTime(formatter.format(new Date()));
      } catch (e) {
        // Fallback if internationalization fails
        setLagosTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      }
    };

    updateLagosTime();
    const interval = setInterval(updateLagosTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`py-12 px-6 md:px-16 border-t font-sans z-30 relative ${
      theme === 'dark' 
        ? 'bg-[#080808] border-neutral-800/60 text-[#ccc]' 
        : 'bg-white border-neutral-200 text-[#555]'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Left Side: Brand & Socials shortcut */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="space-y-1">
            <h3 className={`font-serif text-lg font-bold tracking-widest leading-none ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              DANIEL <span className="text-[#D4AF37]">CLOTHINGS</span>
            </h3>
            <p className="text-[10px] tracking-widest font-sans opacity-40 uppercase">
              LAGOS &bull; LONDON &bull; NEW YORK
            </p>
          </div>
          <div className="flex gap-4 md:border-l md:border-neutral-800/30 md:pl-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] tracking-widest opacity-50 hover:opacity-100 hover:text-[#D4AF37] transition-all uppercase"
            >
              INSTAGRAM
            </a>
            <a 
              href="https://wa.me/2349132715125" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] tracking-widest opacity-50 hover:opacity-100 hover:text-[#D4AF37] transition-all uppercase"
            >
              WHATSAPP
            </a>
          </div>
        </div>

        {/* Center: Legalese */}
        <div className="text-[9px] tracking-[0.3em] opacity-40 uppercase order-3 md:order-2">
          &copy; 2026 Daniel Clothings &bull; All Rights Reserved
        </div>

        {/* Right Side: Lagos Time clock indicator */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <span className="text-[10px] tracking-widest opacity-60 uppercase font-sans">
            Lagos Time {lagosTime}
          </span>
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

      </div>
    </footer>
  );
}
