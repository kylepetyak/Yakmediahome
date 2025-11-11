import { Button } from './ui/button';
import { motion } from 'motion/react';

interface MediaClosingCTAProps {
  onContactClick?: () => void;
}

export function MediaClosingCTA({ onContactClick }: MediaClosingCTAProps) {
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
            Ready to See What Smart Advertising Can Do?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Let&apos;s turn your ad spend into real growth. Book a free strategy call and we&apos;ll show you what&apos;s possible for your business in the next 30 days.
          </p>

          <Button
            onClick={onContactClick}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
