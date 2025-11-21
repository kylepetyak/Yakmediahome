import { motion } from 'motion/react';

const industries = [
  "Healthcare & Wellness (chiropractors, med spas, clinics)",
  "Home Services (HVAC, roofing, contractors)",
  "Professional Services (consultants, agencies, B2B)",
  "Fitness & Training",
  "Real Estate",
  "Local Restaurants"
];

export function ReAgencyTargetAudience() {
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
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight">
              Who This Works For
            </h2>
            <p className="text-2xl text-brand-cyan font-semibold">
              We work best with service-based businesses that want more customers:
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-brand-charcoal border border-brand-blue/20 rounded-lg p-6 hover:border-brand-cyan hover:bg-brand-charcoal/80 transition-all duration-300">
                  <p className="text-lg text-brand-white">
                    {industry}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-center text-gray-300 max-w-3xl mx-auto pt-8"
          >
            If you serve customers and want to grow, we can help.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
