import { motion } from 'motion/react';
import { Theme } from '../types';

interface ContactSocialsProps {
  theme: Theme;
}

export default function ContactSocials({ theme }: ContactSocialsProps) {
  const socialChannels = [
    {
      name: "WhatsApp",
      url: "https://wa.me/2349132715125",
      colorClass: "hover:bg-[#25D366]/10 hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:text-[#25D366]",
      svgPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.46h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"
    },
    {
      name: "Telegram",
      url: "https://t.me/DanielClothings000",
      colorClass: "hover:bg-[#0088cc]/10 hover:border-[#0088cc] hover:shadow-[0_0_20px_rgba(0,136,204,0.4)] hover:text-[#0088cc]",
      svgPath: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.24s-1.89 7.93-2.28 9.53c-.15.62-.64.76-1.15.46-1.07-.64-2.73-1.74-3.56-2.29-.44-.29-.68-.49.08-1.25.17-.17 3.01-2.76 3.56-3.23.24-.2-.05-.44-.31-.26-3.13 2.12-4.01 2.62-5.71 1.6-1.42-.85-2.02-1.06-2.02-1.06-.48-.15-.49-.49.06-.71 4.7-2.04 11.16-4.75 11.16-4.75.56-.24 1.05.08.82.91z"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@danielclothings_",
      colorClass: "hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:text-white dark:hover:text-black dark:hover:bg-white",
      svgPath: "M12 0a12 12 0 1012 12A12 12 0 0012 0zm6.062 9.043a3.52 3.52 0 01-2.112-.713v4.61a4.246 4.246 0 11-4.246-4.246 4.192 4.192 0 01.887.1v2.137a2.125 2.125 0 101.233 1.944l.004-6.8a6.38 6.38 0 004.234 1.488V5.442a4.234 4.234 0 010 3.6z"
    }
  ];

  return (
    <section id="contact" className={`py-24 px-6 md:px-20 relative overflow-hidden ${
      theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'
    }`}>
      {/* Absolute backlighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/4 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-4">
          <p className="text-[#D4AF37] font-cinzel text-xs tracking-[0.3em] font-bold uppercase font-sans">The Connection</p>
          <h2 className={`font-cinzel text-3xl md:text-5xl font-black tracking-wider ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>
            Connect With Daniel Clothings
          </h2>
          <div className="h-1 w-12 bg-[#D4AF37] mx-auto" />
          <p className={`text-xs md:text-sm max-w-lg mx-auto ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            Connect with our head stylists directly on social media. Click any icon below to initiate your tailoring exploration or confirm order queues.
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {socialChannels.map((soc) => {
            return (
              <motion.a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, translateY: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`h-20 w-20 rounded-full border border-[#D4AF37]/45 flex items-center justify-center text-[#D4AF37] bg-[#111]/80 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ${soc.colorClass}`}
                aria-label={`Connect via ${soc.name}`}
              >
                <svg 
                  className="h-8 w-8 fill-current" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={soc.svgPath} />
                </svg>
              </motion.a>
            );
          })}
        </div>

        {/* Quick Help Link */}
        <div className="pt-6">
          <p className="text-xs font-serif italic text-[#D4AF37] font-medium tracking-wide">
            Response average: ~15 mins (Available 24/7)
          </p>
        </div>

      </div>
    </section>
  );
}
