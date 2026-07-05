import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowUpRight, Award } from 'lucide-react';
import { Theme, CollectionItem } from '../types';
import { COLLECTIONS } from '../data';

interface FeaturedCollectionsProps {
  theme: Theme;
  onExploreCollection: (item: CollectionItem) => void;
}

export default function FeaturedCollections({ theme, onExploreCollection }: FeaturedCollectionsProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Traditional' | 'Modern'>('All');

  // Filter categorization for premium UI feel
  const filteredCollections = COLLECTIONS.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Traditional') {
      return item.category === 'Ankara' || item.category === 'Agbada' || item.category === 'Senator';
    }
    if (activeFilter === 'Modern') {
      return item.category === 'Corporate' || item.category === 'Women' || item.category === 'Casual';
    }
    return true;
  });

  return (
    <section id="collections" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#080808]' : 'bg-white'
    }`}>
      {/* Background glow lines */}
      <div className="absolute right-0 top-1/3 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4 text-left">
            <p className="text-[#D4AF37] font-serif italic text-sm tracking-[0.15em] font-medium uppercase">The Collections</p>
            <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Curated Wardrobe
            </h2>
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>

          {/* Filter options for custom control */}
          <div className={`flex gap-2 self-start md:self-auto px-2 py-1.5 rounded-full border border-[#D4AF37]/20 backdrop-blur-md ${
            theme === 'dark' ? 'bg-[#111]/80' : 'bg-neutral-50/80'
          }`}>
            {(['All', 'Traditional', 'Modern'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`px-5 py-2 rounded-full font-cinzel text-[10px] tracking-[0.2em] font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#D4AF37] text-black shadow-[0_2px_12px_rgba(212,175,55,0.3)]'
                    : `text-neutral-400 hover:text-[#D4AF37] ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'}`
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredCollections.map((col, index) => {
              return (
                  <motion.button
                  layout
                  key={col.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={`relative rounded-xl overflow-hidden border group flex flex-col justify-between h-[480px] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] hover:gold-border cursor-pointer text-left w-full ${
                    theme === 'dark'
                      ? 'bg-[#111111]/80 border-neutral-800'
                      : 'bg-[#fcfcfc] border-neutral-200'
                  }`}
                  onClick={() => onExploreCollection(col)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onExploreCollection(col); } }}
                  aria-label={`Explore ${col.name} collection`}
                >
                  {/* Subtle hover shine slider overlay */}
                  <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-0 group-hover:animate-[spin_2.5s_linear_infinite]" 
                         style={{ animation: 'none', transform: 'translateX(250%)', transition: 'transform 1s ease' }} 
                    />
                  </div>

                  {/* Header metadata tag */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded bg-[#080808]/85 border border-[#D4AF37]/20">
                    <Award className="h-3 w-3 text-[#D4AF37]" />
                    <span className="text-[8px] font-cinzel text-[#D4AF37] tracking-[0.2em] font-bold uppercase">
                      Bespoke Tailoring
                    </span>
                  </div>

                  {/* Image viewport with dynamic zoom container */}
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <img
                      src={col.image}
                      alt={col.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  </div>

                  {/* Descriptions block */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans text-[#D4AF37] tracking-[0.25em] font-semibold uppercase block">
                        {col.category} Series
                      </span>
                      <h3 className={`font-cinzel text-xl font-bold tracking-wide group-hover:text-[#D4AF37] transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {col.name}
                      </h3>
                      <p className={`text-xs leading-relaxed font-sans line-clamp-2 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {col.description}
                      </p>
                    </div>

                    {/* Bottom row button and designer note */}
                    <div className="flex items-center justify-between border-t border-dashed border-neutral-800/20 pt-4 mt-auto">
                      <span className="text-[9px] font-serif italic text-neutral-400 leading-none">
                        &ldquo;{col.designerNote}&rdquo;
                      </span>
                      <button className="flex items-center gap-1.5 text-[10px] font-cinzel text-[#D4AF37] font-semibold tracking-wider group-hover:gold-text-glow">
                        EXPLORE
                        <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
