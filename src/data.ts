import { CollectionItem, StorySection, Achievement, ShowcaseImage, Review } from './types';

export const HERO_MORPHING_TEXTS = [
  "Fashion Crafted For Confidence",
  "Premium Styles For Every Occasion",
  "Elegance Woven Into Every Detail",
  "Modern Fashion Meets Tradition",
  "Dress With Confidence",
  "Luxury That Speaks For You"
];

export const STORIES: StorySection[] = [
  {
    id: 1,
    title: "Our Journey",
    subtitle: "A Legacy Founded on Perfection",
    description: "Daniel Clothings began with a singular vision: to create a bridge between the vibrant heritage of West African apparel and the precision of modern bespoke tailoring. Every thread we weave is a pledge of excellence, crafted locally but celebrated universally. We seek to capture the soul of luxury through rigorous attention to detail.",
    accentText: "Est. 2018",
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Inspired By Nigerian Culture",
    subtitle: "A Symphony of Ankara & Heavy Embroidery",
    description: "Nigeria's cultural landscape is an infinite palette of colors, textiles, and statements. We draw directly from the royal heritage of Yoruba Agbadas, Igbo Senator attire, and the striking geometry of Ankara prints. By mixing these traditions with premium imported fabrics, we make cultural statements that transcend borders.",
    accentText: "Royal Roots",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Modern Corporate Excellence",
    subtitle: "The Power Dressing Revolution",
    description: "For the contemporary executive, clothing is armor. Our corporate menswear and ladies' luxury line merge Italian premium fabrics with sharp, body-sculpting silhouettes. From boardroom negotiations to evening galas, we deliver double-breasted excellence and tailored pant suits designed to demand respect.",
    accentText: "Boardroom Power",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Designed For Confidence",
    subtitle: "Your Ultimate Fashion Identity",
    description: "Luxury is not merely about label; it is the confidence you radiate the moment you walk into a room. At Daniel Clothings, every sizing is masterfully calibrated to your posture. We craft with premium, breathable Egyptian cottons, heavy cashmere blends, and fine silk linings, delivering garments that make you feel invincible.",
    accentText: "Pure Elegance",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800"
  }
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "col-ankara",
    name: "Ankara Collection",
    category: "Ankara",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600",
    description: "Bold, tailored statements featuring premium hand-dyed African prints integrated into modern, structural outfits.",
    designerNote: "Individually selected block-pattern wax cottons"
  },
  {
    id: "col-agbada",
    name: "Agbada Collection",
    category: "Agbada",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600",
    description: "Regal three-piece garments with extensive, high-density embroidery. Reimagining Nigerian royalty for the modern gentleman.",
    designerNote: "Heavy gold-thread embroidery on pure cashmere wool"
  },
  {
    id: "col-senator",
    name: "Senator Collection",
    category: "Senator",
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=600",
    description: "Crisp, minimal native wear characterized by asymmetric cuts, contrasting details, and impeccable geometric lines.",
    designerNote: "Egyptian linen with custom metallic clasp closures"
  },
  {
    id: "col-corporate",
    name: "Corporate Collection",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=600",
    description: "Bespoke suits, refined double-breasted jackets, and lightweight high-performance corporate shirts for absolute distinction.",
    designerNote: "Super 150s Merino Wool with gold silk inner lining"
  },
  {
    id: "col-women",
    name: "Women's Luxury Collection",
    category: "Women",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600",
    description: "Sophisticated silk wraps, structured gowns, and executive workwear designed for women who run the world.",
    designerNote: "Premium Japanese satin and structured tailoring"
  },
  {
    id: "col-casual",
    name: "Casual Luxury Collection",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600",
    description: "Relaxed linen coordinates, modern kaftans, and polo-shirts designed for leisurely weekends sans compromising style.",
    designerNote: "Breathable natural flax linen and soft mercerized cotton"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "Happy Customers",
    value: 10000,
    suffix: "+",
    description: "Handcrafted fits globally"
  },
  {
    id: "ach-2",
    title: "Corporate Clients",
    value: 500,
    suffix: "+",
    description: "Executive and company contracts"
  },
  {
    id: "ach-3",
    title: "Average Rating",
    value: 4.9,
    suffix: "★",
    description: "Unmatched customer service"
  },
  {
    id: "ach-4",
    title: "Nationwide Delivery",
    value: 36,
    suffix: " States",
    description: "Seamless door-to-door transit"
  }
];

export const SHOWCASE: ShowcaseImage[] = [
  {
    id: "sh-1",
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    title: "Double Breasted Luxury Executive Suit",
    category: "Corporate"
  },
  {
    id: "sh-2",
    url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600",
    title: "Traditional Print Clutch & Bespoke Kaftan",
    category: "Ankara"
  },
  {
    id: "sh-3",
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600",
    title: "Handcrafted Luxury Apparel Selection",
    category: "Bespoke"
  },
  {
    id: "sh-4",
    url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600",
    title: "Egyptian Linen Lounge kaftan Set",
    category: "Casual"
  },
  {
    id: "sh-5",
    url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600",
    title: "Agbada Inspired Ceremonial Cape and Dress",
    category: "Women"
  },
  {
    id: "sh-6",
    url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600",
    title: "Luxurious High-Density Brocade Materials",
    category: "Senator"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Chinedu Okafor",
    role: "Tech Entrepreneur",
    stars: 5,
    content: "Outstanding quality and excellent customer service. The fit was perfect. Ordering traditional Senator wear with custom adjustments was seamless, and the delivery arrived ahead of schedule.",
    date: "June 12, 2026"
  },
  {
    id: "rev-2",
    author: "Amara Adebayo",
    role: "Corporate Attorney",
    stars: 5,
    content: "Daniel Clothings exceeded my expectations. Elegant and professional. The corporate suits feature double-breasted configurations that command boardroom presence instantly. Truly luxurious.",
    date: "May 28, 2026"
  },
  {
    id: "rev-3",
    author: "Tunde Oyelese",
    role: "Investor",
    stars: 5,
    content: "Beautiful traditional attire! The Agbada was standard-setter at our family coronation ceremony last week. I received compliments throughout the event from everyone. High density gold weaving looks superb.",
    date: "June 05, 2026"
  },
  {
    id: "rev-4",
    author: "Fatima Yusuf",
    role: "Creative Director",
    stars: 5,
    content: "The craftsmanship is exceptional. Daniel Clothings doesn't just tailor; they tell stories. The Ankara design blends with premium Italian linen beautifully, bringing unmatched breathability.",
    date: "April 19, 2026"
  }
];
