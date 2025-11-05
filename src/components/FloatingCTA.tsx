import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

interface FloatingCTAProps {
  onContactClick?: () => void;
}

export function FloatingCTA({ onContactClick }: FloatingCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px down
      setVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={onContactClick}
            className="group bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 flex items-center gap-2 font-bold text-base md:text-lg"
            aria-label="Book free strategy call"
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">Book Free Strategy Call</span>
            <span className="sm:hidden">Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
