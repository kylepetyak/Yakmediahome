import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from "./ui/button";
import { Play, Image, Megaphone } from "lucide-react";

const rotatingIcons = [
  { icon: Play, color: 'text-pink-500' },
  { icon: Image, color: 'text-cyan-400' },
  { icon: Megaphone, color: 'text-purple-500' }
];

interface CreativeSectionProps {
  onLearnMoreClick?: () => void;
}

export function CreativeSection({ onLearnMoreClick }: CreativeSectionProps) {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % rotatingIcons.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = rotatingIcons[currentIconIndex].icon;

  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-2xl text-white">
          <div className="text-sm font-bold text-gray-400 mb-4 tracking-wider">
            CREATIVE
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We're built for today's attention.
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Our focus is simple: create content that stops the scroll, drives conversations, and actually moves the needle for your brand. Every piece of creative is rooted in how people behave online—not just what we think looks good. That means testing, learning, and doubling down on what the audience responds to.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            From short-form videos on TikTok and LinkedIn to paid campaigns across Meta and Google, we blend organic storytelling with smart media buying to make sure your message gets seen by the right people, at the right time, in the right way.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            We don't separate "creative" from "media"—because in 2025, they have to work together. A social post can live as an ad, and an ad can feel like content. That's the game we play, and we play to win.
          </p>
          
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            onClick={onLearnMoreClick}
          >
            LEARN MORE
          </Button>
        </div>
        
        <div className="hidden lg:block flex-1 max-w-md">
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-white rounded-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIconIndex}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className={`${rotatingIcons[currentIconIndex].color}`}
                >
                  <CurrentIcon className="w-32 h-32 fill-current" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}