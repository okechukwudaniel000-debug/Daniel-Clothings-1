import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles } from 'lucide-react';
import { Theme } from '../types';

interface SmartSearchProps {
  theme: Theme;
}

export default function SmartSearch({ theme }: SmartSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className={`p-3 rounded-full border transition-all duration-300 ${
          theme === 'dark'
            ? 'glass text-[#D4AF37] hover:border-[#D4AF37]'
            : 'glass-light text-neutral-800 hover:border-neutral-400'
        }`}
      >
        <Search className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div
              className={`relative w-full max-w-lg rounded-2xl p-4 border shadow-2xl ${
                theme === 'dark' ? 'glass border-neutral-800' : 'glass-light border-neutral-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-[#D4AF37]" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="AI-powered search..."
                  className={`flex-1 bg-transparent outline-none font-sans ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}
                  autoFocus
                />
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5 opacity-50 hover:opacity-100" />
                </button>
              </div>
              {/* Mock results area */}
              <div className="h-32 flex items-center justify-center opacity-50 text-sm">
                Type to see AI-driven results...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
