import { motion } from 'motion/react';
import { Layers, Scissors, Globe, Briefcase, Truck, Heart } from 'lucide-react';
import { Theme } from '../types';

interface WhyChooseProps {
  theme: Theme;
}

export default function WhyChoose({ theme }: WhyChooseProps) {
  const features = [
    {
      icon: Layers,
      title: "Premium Fabrics",
      desc: "Egyptian cottons, premium English cashmeres, Japanese satins, and pure silk lines that breathe beautifully and drop perfectly."
    },
    {
      icon: Scissors,
      title: "Exceptional Craftsmanship",
      desc: "Every cut, stitch, and lining is masterfully calibrated to your measurements, delivering zero bunching and pristine symmetry."
    },
    {
      icon: Globe,
      title: "Authentic Nigerian Fashion",
      desc: "Preserving cultural depth with rich, traditional royal wear—Agbada, Senator, and hand-selected vibrant Ankara materials."
    },
    {
      icon: Briefcase,
      title: "Modern Corporate Styles",
      desc: "Tailored executive power suits, structured jackets, and high-performance corporate wear crafted to inspire heavy board presence."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Reliable custom shipping logistics with secured door-to-door nationwide delivery tracking across all 36 Nigerian states."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      desc: "Our dedication is royal hospitality. Complete bespoke fitting adjustments until your outfit sits flawlessly on your crown stance."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-choose" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
    }`}>
      {/* Absolute decorative backlights */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <p className="text-[#D4AF37] font-serif italic text-sm tracking-[0.15em] font-medium uppercase">Our Philosophy</p>
          <h2 className={`font-serif text-3xl md:text-5xl font-bold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Why Choose Daniel Clothings
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-2" />
        </div>

        {/* Features Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feat, index) => {
            const Icon = feat.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-8 rounded-xl border relative overflow-hidden group transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)] hover:gold-border ${
                  theme === 'dark'
                    ? 'bg-[#111111]/90 border-neutral-800'
                    : 'bg-white border-neutral-200/60'
                }`}
              >
                {/* Thin top glowing border */}
                <span className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container with gold accent frame & glow */}
                <div className="h-14 w-14 rounded-full flex items-center justify-center border border-[#D4AF37]/30 bg-[#080808]/10 group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37] transition-all duration-300 mb-6 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                  <Icon className="h-6 w-6 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <h3 className={`font-cinzel text-lg font-bold tracking-wider mb-3 transition-colors group-hover:text-[#D4AF37] ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {feat.title}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed font-sans ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
