import { Button } from "./ui/button";
import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

interface StrategySectionProps {
  onLearnMoreClick?: () => void;
}

export function StrategySection({ onLearnMoreClick }: StrategySectionProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-2xl text-white">
          <div className="text-sm font-bold text-gray-400 mb-4 tracking-wider">
            STRATEGY
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Strategy that starts with people.<br />
            Not just slides and buzzwords.
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            We build strategies rooted in culture, behavior, and what actually inspires people to take action. Every plan begins with understanding the audience—how they think, what they care about, and where their attention really lives.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Instead of one generic message for everyone, we craft tailored approaches that meet people where they are. Practical, empathetic, and built for the real world—not just a boardroom.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Because strategy isn't about theory. It's about creating a roadmap that makes growth inevitable.
          </p>
          
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3"
            onClick={onLearnMoreClick}
          >
            LEARN MORE
          </Button>
        </div>
        
        <div className="hidden lg:block flex-1 max-w-md">
          <div className="relative flex items-center justify-center">
            {/* Strategic thinking constellation */}
            <div className="w-64 h-64 relative">
              {/* Center lightbulb - big idea */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Lightbulb className="w-20 h-20 text-cyan-400 fill-cyan-400" />
                </motion.div>
              </motion.div>
              
              {/* Orbiting strategy elements */}
              <motion.div 
                className="absolute top-4 right-8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Target className="w-12 h-12 text-cyan-300 stroke-2" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 right-8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <TrendingUp className="w-10 h-10 text-cyan-500 stroke-2" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -6, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Users className="w-14 h-14 text-white stroke-2" />
                </motion.div>
              </motion.div>
              
              {/* Connecting lines */}
              <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <svg className="w-full h-full" viewBox="0 0 256 256">
                  <motion.path
                    d="M128 108 L200 60 M128 148 L200 200 M128 148 L56 200"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}