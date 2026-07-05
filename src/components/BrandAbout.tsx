import { motion } from 'motion/react';
import { Theme } from '../types';
import { Sparkles, Eye } from 'lucide-react';

interface BrandAboutProps {
  theme: Theme;
}

export default function BrandAbout({ theme }: BrandAboutProps) {
  return (
    <section id="about" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#080808]' : 'bg-white'
    }`}>
      {/* Absolute gold flares */}
      <div className="absolute top-[20%] left-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Signet */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center h-16 w-16 rounded-full border border-[#D4AF37]/50 relative"
          >
            <span className="font-cinzel text-lg font-bold text-[#D4AF37] tracking-widest">DC</span>
            <span className="absolute -inset-1 rounded-full border border-dashed border-[#D4AF37]/20 animate-[spin_40s_linear_infinite]" />
          </motion.div>
        </div>

        {/* Brand Core Title */}
        <div className="space-y-4">
          <p className="text-[#D4AF37] font-cinzel text-xs tracking-[0.3em] font-bold uppercase font-sans">The Legacy</p>
          <h2 className={`font-cinzel text-3xl md:text-5xl font-black tracking-wider ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            About Daniel Clothings
          </h2>
          <div className="h-1 w-12 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Styled copy block */}
        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`font-serif text-lg md:text-2xl leading-relaxed italic ${
              theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'
            }`}
          >
            &ldquo;We do not merely assemble textiles; we sew armor for your confidence, weaving the vibrant colors of West African royalty into structural modern elegance.&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-sm md:text-base leading-relaxed font-sans ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Daniel Clothings represents the high-water mark of contemporary African fashion innovation. Operating from the cultural epicenter of Nigeria, our atelier merges authentic handcraft traditions with futuristic bespoke silhouettes. We hold ourselves to a strict standard: selection of only the finest breathable cotton, premium Italian Merino cashmeres, and high-density gold threaded brocades. Every stitch, shoulder fall, and inner lining is masterfully calibrated to respect your posture and celebrate your cultural pride.
          </motion.p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-neutral-800/10">
          {[
            { tag: "EXCELLENCE", text: "Zero compromise bespoke sewing accuracy" },
            { tag: "AUTHENTICITY", text: "Honoring traditional West African patterns" },
            { tag: "SATISFACTION", text: "Calibrated fitting process and royal care" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="space-y-2 text-center"
            >
              <span className="text-[10px] font-cinzel text-[#D4AF37] tracking-[0.2em] font-bold block">{item.tag}</span>
              <p className={`text-xs ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'}`}>{item.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
