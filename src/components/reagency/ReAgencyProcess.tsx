import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "We Learn Your Business",
    description: "We figure out who your best customers are and what makes them buy."
  },
  {
    number: "02",
    title: "We Build What Works",
    description: "Ads, content, and campaigns designed to get attention and drive sales."
  },
  {
    number: "03",
    title: "We Launch & Test",
    description: "We get your campaigns live fast, then track what's working."
  },
  {
    number: "04",
    title: "We Scale The Winners",
    description: "More of what works, less of what doesn't. Simple."
  },
  {
    number: "05",
    title: "We Keep It Running",
    description: "You get consistent results without having to think about marketing."
  }
];

export function ReAgencyProcess() {
  return (
    <section className="bg-brand-charcoal py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight">
              How We Work
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6 group">
                  {/* Number */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center group-hover:shadow-glow-blue transition-shadow duration-300">
                    <span className="text-3xl font-bold text-brand-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-white mb-3 group-hover:text-brand-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-8 bg-gradient-to-b from-brand-blue/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
