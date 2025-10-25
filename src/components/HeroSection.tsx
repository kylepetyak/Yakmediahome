import { motion } from 'motion/react';
import { Navigation } from './Navigation';
import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';

interface HeroSectionProps {
  onBlogClick: () => void;
  onServicesClick: (service?: string) => void;
  onLogoClick: () => void;
  onContactClick?: () => void;
}

export function HeroSection({ onBlogClick, onServicesClick, onLogoClick, onContactClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <Navigation onBlogClick={onBlogClick} onServicesClick={onServicesClick} onLogoClick={onLogoClick} onContactClick={onContactClick} />

      <div className="flex-1 px-6 flex items-center justify-center pt-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-5xl mx-auto">
            {/* Phoenix badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">Phoenix's Fastest-Growing Marketing Agency</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-8"
            >
              Marketing That
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Actually Moves
              </span>
              <br />
              The Needle
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We turn creative content and paid media into measurable growth for Phoenix businesses. No fluff. Just results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button
                onClick={onContactClick}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Get Your Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onServicesClick()}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold text-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              >
                See Our Work
              </button>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <div className="text-3xl md:text-4xl font-black text-white">250%</div>
                </div>
                <div className="text-sm text-gray-400">Avg. Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <div className="text-3xl md:text-4xl font-black text-white">150+</div>
                </div>
                <div className="text-sm text-gray-400">Local Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <div className="text-3xl md:text-4xl font-black text-white">4.9★</div>
                </div>
                <div className="text-sm text-gray-400">Client Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
