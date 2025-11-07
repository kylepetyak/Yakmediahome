import { Button } from './ui/button';
import { motion } from 'motion/react';

interface CreativeClosingCTAProps {
  onContactClick?: () => void;
}

export function CreativeClosingCTA({ onContactClick }: CreativeClosingCTAProps) {
  return (
    <section className="bg-gray-900 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Build Brand Relevance?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Let's create content that people actually want to watch. Start your journey to daily relevance today.
          </p>

          <Button
            onClick={onContactClick}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
