import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, Briefcase, Star, MapPin } from 'lucide-react';
import { Theme } from '../types';
import { ACHIEVEMENTS } from '../data';

interface TrustIndicatorsProps {
  theme: Theme;
}

export default function TrustIndicators({ theme }: TrustIndicatorsProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection observer hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const icons = [Users, Briefcase, Star, MapPin];

  return (
    <div 
      ref={ref}
      className={`py-16 border-y border-dashed ${
        theme === 'dark' 
          ? 'bg-[#111111]/40 border-neutral-800' 
          : 'bg-neutral-50/60 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {ACHIEVEMENTS.map((ach, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <div key={ach.id} className="space-y-3 group">
              
              {/* Stat Icon */}
              <div className="mx-auto h-12 w-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-all duration-300">
                <IconComponent className="h-5 w-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              </div>

              {/* STAT VALUE */}
              <div className="flex items-baseline justify-center gap-0.5">
                <AnimatedCounter 
                  targetValue={ach.value} 
                  inView={inView} 
                  isDecimal={ach.value === 4.9} 
                />
                <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#D4AF37]">
                  {ach.suffix}
                </span>
              </div>

              {/* STAT DESCRIPTION */}
              <div className="space-y-0.5">
                <p className={`font-cinzel text-xs sm:text-sm font-semibold tracking-wider ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {ach.title}
                </p>
                <p className={`text-[10px] sm:text-xs leading-normal ${
                  theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                }`}>
                  {ach.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

interface CounterProps {
  targetValue: number;
  inView: boolean;
  isDecimal?: boolean;
}

function AnimatedCounter({ targetValue, inView, isDecimal }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = targetValue;
    const duration = 1800; // ms
    const increment = end / (duration / 16); // ~60fps refresh rate

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, targetValue]);

  // Format the outputs beautifully
  if (isDecimal) {
    return (
      <span className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {count.toFixed(1)}
      </span>
    );
  }

  return (
    <span className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
      {Math.floor(count).toLocaleString()}
    </span>
  );
}
