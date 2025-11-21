import { motion } from 'motion/react';

export function ReAgencyAboutPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight">
              We&apos;re RE-AGENCY
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              The catalyst behind your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              <strong className="text-brand-white">We started RE-AGENCY because we were tired of seeing businesses waste money on marketing that doesn&apos;t work.</strong>
            </p>

            <p>
              Most agencies overcomplicate things. They talk about funnels and frameworks and brand archetypes. They send reports full of metrics that don&apos;t matter.
            </p>

            <p>
              We do the opposite. We build campaigns that bring in customers. We keep them running. And we make it simple to understand what&apos;s working and what&apos;s not.
            </p>

            <p className="text-brand-blue text-2xl font-semibold pt-8">
              No jargon. No excuses. Just growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How To Work With Us */}
      <section className="py-20 px-6 bg-brand-charcoal">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-white">
              How To Work With Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="bg-brand-black border border-brand-blue/20 rounded-xl p-8">
                <div className="text-brand-blue text-5xl font-bold mb-4">01</div>
                <h3 className="text-xl font-bold text-brand-white mb-3">Book A Call</h3>
                <p className="text-gray-300">
                  We&apos;ll talk about your business, your goals, and whether we&apos;re a good fit.
                </p>
              </div>

              <div className="bg-brand-black border border-brand-blue/20 rounded-xl p-8">
                <div className="text-brand-cyan text-5xl font-bold mb-4">02</div>
                <h3 className="text-xl font-bold text-brand-white mb-3">We Build Your System</h3>
                <p className="text-gray-300">
                  We create ads, content, and campaigns tailored to your business.
                </p>
              </div>

              <div className="bg-brand-black border border-brand-blue/20 rounded-xl p-8">
                <div className="text-brand-blue text-5xl font-bold mb-4">03</div>
                <h3 className="text-xl font-bold text-brand-white mb-3">You Grow</h3>
                <p className="text-gray-300">
                  We keep everything running while you focus on serving customers.
                </p>
              </div>
            </div>

            <div className="pt-12">
              <button className="px-12 py-5 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-white text-xl font-bold rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
