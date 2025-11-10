import { motion } from 'motion/react';

export function StrategyQuote() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-700 py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8">
            <span className="text-8xl text-white/20">"</span>
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-12">
            The best strategies don&apos;t live in decks - they live in execution. We build plans designed to be implemented, not admired
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white/20 mb-4 flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <cite className="not-italic">
              <div className="text-xl font-bold text-white mb-1">Strategy Team</div>
              <div className="text-sm text-white/80">Strategic Planning Experts</div>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
