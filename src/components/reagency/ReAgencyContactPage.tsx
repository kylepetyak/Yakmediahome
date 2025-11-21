import { motion } from 'motion/react';
import { Mail, Calendar } from 'lucide-react';

export function ReAgencyContactPage() {
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
              Let&apos;s Talk
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Ready to grow your business? Choose how you&apos;d like to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 border border-brand-blue/30 rounded-2xl p-10 hover:border-brand-blue hover:shadow-glow-blue transition-all duration-300 h-full text-center">
                <div className="w-20 h-20 bg-brand-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-10 h-10 text-brand-white" />
                </div>
                <h2 className="text-3xl font-bold text-brand-white mb-4">
                  Book A Call
                </h2>
                <p className="text-gray-300 mb-8">
                  Schedule a quick call to discuss your business and see if we&apos;re a good fit.
                </p>
                <button className="px-8 py-4 bg-brand-blue text-brand-white font-semibold rounded-lg hover:shadow-glow-blue transition-all duration-300">
                  Choose A Time
                </button>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 border border-brand-cyan/30 rounded-2xl p-10 hover:border-brand-cyan hover:shadow-glow-cyan transition-all duration-300 h-full text-center">
                <div className="w-20 h-20 bg-brand-cyan rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-10 h-10 text-brand-black" />
                </div>
                <h2 className="text-3xl font-bold text-brand-white mb-4">
                  Email Us
                </h2>
                <p className="text-gray-300 mb-8">
                  Prefer email? Send us a message and we&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:hello@re-agency.co"
                  className="inline-block px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-semibold rounded-lg hover:bg-brand-cyan/10 transition-all duration-300"
                >
                  hello@re-agency.co
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-6 bg-brand-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-brand-white">
              What To Expect
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              On our first call, we&apos;ll learn about your business, your goals, and your current marketing. Then we&apos;ll outline exactly how we can help you grow—and what it would cost to work together.
            </p>
            <p className="text-lg text-gray-400">
              No pressure. No sales pitch. Just an honest conversation about whether we&apos;re the right fit.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
