import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ReAgencyHeroProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export function ReAgencyHero({ onGetStarted, onLearnMore }: ReAgencyHeroProps) {
  return (
    <section className="relative bg-brand-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Brand name */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-brand-white tracking-tight">
              RE-AGENCY
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-blue to-brand-cyan mx-auto"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-white max-w-4xl mx-auto leading-tight">
            The Missing Piece In Your Growth
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We build the marketing that actually brings in customers.<br />
            No fluff. No confusion. Just results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.button
              onClick={onGetStarted}
              className="px-10 py-4 bg-brand-blue text-brand-white font-semibold rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg hover:bg-brand-blue/90 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <button
              onClick={onLearnMore}
              className="px-10 py-4 text-brand-white font-semibold hover:text-brand-blue transition-colors duration-300"
            >
              See How We Work
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-brand-blue/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-brand-blue rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
