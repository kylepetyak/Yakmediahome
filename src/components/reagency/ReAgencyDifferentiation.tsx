import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const features = [
  "Ads that actually convert",
  "Content people want to watch",
  "Websites that turn visitors into customers",
  "Everything running without you having to manage it",
  "Clear reporting on what's working"
];

export function ReAgencyDifferentiation() {
  return (
    <section className="bg-brand-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Heading */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight">
              We Don&apos;t Just Make Ads.<br />
              We Make You Money.
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Other agencies talk strategy and send reports. We build campaigns that fill your calendar and increase your revenue—then we keep them running while you focus on serving customers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-brand-charcoal border border-brand-blue/20 rounded-lg p-6 hover:border-brand-blue hover:shadow-glow-blue transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <Check className="w-5 h-5 text-brand-blue group-hover:text-brand-white" />
                    </div>
                    <p className="text-lg text-brand-white leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl text-center text-brand-white font-semibold pt-12"
          >
            No jargon. No excuses. Just growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
