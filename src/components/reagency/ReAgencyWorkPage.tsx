import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const placeholderProjects = [
  {
    title: "Healthcare Client A",
    industry: "Med Spa",
    metric: "3x leads in 90 days",
    image: "placeholder"
  },
  {
    title: "Home Services Client B",
    industry: "HVAC",
    metric: "5x ROI on ad spend",
    image: "placeholder"
  },
  {
    title: "Professional Services Client C",
    industry: "B2B Consulting",
    metric: "$180K in new contracts",
    image: "placeholder"
  },
  {
    title: "Fitness Client D",
    industry: "Personal Training",
    metric: "127 new members",
    image: "placeholder"
  },
  {
    title: "Real Estate Client E",
    industry: "Luxury Homes",
    metric: "42% more qualified leads",
    image: "placeholder"
  },
  {
    title: "Restaurant Client F",
    industry: "Local Dining",
    metric: "220% increase in orders",
    image: "placeholder"
  }
];

export function ReAgencyWorkPage() {
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses we&apos;ve helped grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-brand-charcoal border border-brand-blue/20 rounded-xl overflow-hidden hover:border-brand-blue hover:shadow-glow-blue transition-all duration-300">
                  {/* Placeholder Image */}
                  <div className="aspect-video bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Case Study Coming Soon</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-brand-blue/20 text-brand-blue text-sm font-semibold rounded-full mb-3">
                      {project.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-white mb-2 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-brand-cyan text-lg font-semibold mb-4">
                      {project.metric}
                    </p>
                    <button className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-cyan transition-colors group">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-white">
              Want results like these?
            </h2>
            <p className="text-xl text-gray-300">
              Let&apos;s build a marketing system that works for your business.
            </p>
            <button className="px-12 py-5 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-white text-xl font-bold rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
