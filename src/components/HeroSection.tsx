import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './Navigation';
import { Play } from 'lucide-react';

const agencyTypes = ['creative agency.', 'marketing agency.', 'media agency.'];

interface HeroSectionProps {
  onBlogClick: () => void;
  onServicesClick: (service?: string) => void;
  onLogoClick: () => void;
  onContactClick?: () => void;
}

export function HeroSection({ onBlogClick, onServicesClick, onLogoClick, onContactClick }: HeroSectionProps) {
  const [currentAgencyIndex, setCurrentAgencyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAgencyIndex((prev) => (prev + 1) % agencyTypes.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-400 flex flex-col">
      <Navigation onBlogClick={onBlogClick} onServicesClick={onServicesClick} onLogoClick={onLogoClick} onContactClick={onContactClick} />
      <div className="flex-1 px-6 flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            We're not just a{' '}
            <span className="text-pink-500">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentAgencyIndex}
                  initial={{ opacity: 0, rotateX: 90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  exit={{ opacity: 0, rotateX: -90 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  style={{ display: "inline-block" }}
                >
                  {agencyTypes[currentAgencyIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            We're your partner for growth.
          </p>
        </div>
        
        <div className="hidden lg:block flex-1 max-w-lg">
          <div className="relative">
            <div className="w-full aspect-video bg-gray-900 rounded-lg shadow-lg flex items-center justify-center group cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-opacity-30 transition-all">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-white text-lg font-medium">Watch Our Story</p>
                <p className="text-gray-300 text-sm">See how we help brands grow</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}