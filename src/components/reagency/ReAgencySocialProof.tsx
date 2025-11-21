import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    industry: "Healthcare",
    metric: "3x more leads in 90 days",
    description: "Med spa increased qualified consultations and grew revenue 250% through targeted Facebook ads and conversion-optimized landing pages."
  },
  {
    industry: "Home Services",
    metric: "5x ROI on ad spend",
    description: "HVAC company generated 127 service calls in first month with strategic Google and Meta campaigns during peak season."
  },
  {
    industry: "Professional Services",
    metric: "$180K in new contracts",
    description: "B2B consultant booked 14 high-value clients through LinkedIn ads and automated email sequences in 120 days."
  }
];

export function ReAgencySocialProof() {
  return (
    <section className="bg-brand-charcoal py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
              Results That Matter
            </h2>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div className="bg-brand-black border border-brand-blue/20 rounded-xl p-8 hover:border-brand-blue hover:shadow-glow-blue transition-all duration-300 h-full flex flex-col">
                  {/* Industry Tag */}
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="px-4 py-1 bg-brand-blue/20 text-brand-blue text-sm font-semibold rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  {/* Metric */}
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-4 group-hover:text-brand-cyan transition-colors">
                    {study.metric}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    {study.description}
                  </p>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-cyan transition-colors group">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
