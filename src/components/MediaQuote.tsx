import { motion } from 'motion/react';

export function MediaQuote() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-32 px-6">
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
            The best media strategy isn&apos;t about reaching everyone - it&apos;s about reaching the right people at the right time with the right message. That&apos;s where real growth happens
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white/20 mb-4 flex items-center justify-center">
              <span className="text-3xl">👤</span>
            </div>
            <cite className="not-italic">
              <div className="text-xl font-bold text-white mb-1">Media Strategy Team</div>
              <div className="text-sm text-white/80">Performance Media Experts</div>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
