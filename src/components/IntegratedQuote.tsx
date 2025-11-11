import { motion } from 'motion/react';

export function IntegratedQuote() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-orange-600 py-32 px-6">
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
            Most businesses work with a creative agency, a media agency, and a strategy consultant. We bring all three under one roof — so everything moves faster, costs less, and performs better.
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white/20 mb-4 flex items-center justify-center">
              <span className="text-3xl">👥</span>
            </div>
            <cite className="not-italic">
              <div className="text-xl font-bold text-white mb-1">Yak Media Integrated Team</div>
              <div className="text-sm text-white/80">Full-Stack Marketing Experts</div>
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
