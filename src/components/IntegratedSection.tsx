import { Button } from "./ui/button";
import { Share2, Layers, Workflow, Zap } from "lucide-react";
import { motion } from "motion/react";

interface IntegratedSectionProps {
  onLearnMoreClick?: () => void;
}

export function IntegratedSection({ onLearnMoreClick }: IntegratedSectionProps) {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-2xl text-white">
          <div className="text-sm font-bold text-gray-400 mb-4 tracking-wider">
            INTEGRATED
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Integrated to maximize impact.<br />
            Because nothing works in silos anymore.
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            We bring everything together—strategy, content, paid media, analytics, and more—so every piece of the puzzle is aligned and working toward the same outcome: growth. With social at the core, our model is built for how people actually consume and engage today.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-8 max-w-xl">
            Whether we're running a single campaign or managing the full funnel, we close the gap between creative and media, making sure both push in the same direction. That's how you get work that's not just seen, but felt—and that drives real business results.
          </p>
          
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3"
            onClick={onLearnMoreClick}
          >
            LEARN MORE
          </Button>
        </div>
        
        <div className="hidden lg:block flex-1 max-w-md">
          <div className="relative flex items-center justify-center">
            {/* Integration network diagram */}
            <div className="w-64 h-64 relative">
              {/* Central hub - integration core */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Share2 className="w-16 h-16 text-pink-500 stroke-2" />
                </motion.div>
              </motion.div>
              
              {/* Orbiting service elements */}
              <motion.div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Layers className="w-12 h-12 text-pink-400 stroke-2" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    x: [0, 8, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Workflow className="w-14 h-14 text-pink-300 stroke-2" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    y: [0, 8, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Zap className="w-10 h-10 text-white fill-white stroke-2" />
                </motion.div>
              </motion.div>
              
              {/* Connecting energy pulses */}
              <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <svg className="w-full h-full" viewBox="0 0 256 256">
                  {/* Pulsing connection lines */}
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="80"
                    stroke="rgba(236, 72, 153, 0.4)"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    fill="none"
                    animate={{ 
                      strokeDashoffset: [0, -16],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.circle
                    cx="128"
                    cy="128"
                    r="120"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="2,6"
                    fill="none"
                    animate={{ 
                      strokeDashoffset: [0, 16],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
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