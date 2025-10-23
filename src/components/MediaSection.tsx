import { Button } from "./ui/button";
import { Eye, Target, Zap } from "lucide-react";
import { motion } from "motion/react";

interface MediaSectionProps {
  onLearnMoreClick?: () => void;
}

export function MediaSection({ onLearnMoreClick }: MediaSectionProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-2xl text-white">
          <div className="text-sm font-bold text-gray-400 mb-4 tracking-wider">
            MEDIA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Media that drives results.<br />
            Not vanity metrics. Not empty reach.
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            We care about one thing: turning attention into action. That means knowing the platforms inside and out—where people spend their time, how they consume content, and what actually gets them to move.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Our approach blends smart planning, sharp ad buying, and constant optimization so every dollar is working as hard as possible. We don't just chase impressions—we chase relevance, conversions, and growth.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Because at the end of the day, media isn't about being seen. It's about being remembered and chosen.
          </p>
          
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
            onClick={onLearnMoreClick}
          >
            LEARN MORE
          </Button>
        </div>
        
        <div className="hidden lg:block flex-1 max-w-md">
          <div className="relative flex items-end justify-center space-x-4 h-64">
            {/* Animated Chart bars */}
            <motion.div 
              className="w-8 bg-white rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: 64 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="w-8 bg-white rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="w-8 bg-white rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: 128 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="w-8 bg-white rounded-t"
              initial={{ height: 0 }}
              whileInView={{ height: 160 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
            />
            
            {/* Animated attention & optimization icons */}
            <motion.div 
              className="absolute top-4 right-4 flex flex-col space-y-4"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Eye icon for attention */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Eye className="w-12 h-12 text-pink-500 stroke-2" />
              </motion.div>
              
              {/* Target icon for precision */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Target className="w-10 h-10 text-pink-400 stroke-2" />
              </motion.div>
              
              {/* Zap icon for optimization */}
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-8 h-8 text-pink-300 fill-pink-300 stroke-2" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}