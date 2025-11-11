import { Button } from './ui/button';
import { motion } from 'motion/react';

interface IntegratedClosingCTAProps {
  onContactClick?: () => void;
}

export function IntegratedClosingCTA({ onContactClick }: IntegratedClosingCTAProps) {
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
            Ready to Stop Juggling Multiple Agencies?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Let&apos;s bring your creative, media, and strategy under one roof—and start driving real results from day one.
          </p>

          <Button
            onClick={onContactClick}
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-orange-600 hover:from-purple-700 hover:via-purple-800 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
