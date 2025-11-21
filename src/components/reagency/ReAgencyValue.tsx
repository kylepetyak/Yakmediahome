import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ReAgencyValueProps {
  onServicesClick?: () => void;
  onResultsClick?: () => void;
}

export function ReAgencyValue({ onServicesClick, onResultsClick }: ReAgencyValueProps) {
  return (
    <section className="bg-brand-charcoal py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight">
            We Handle Your Marketing.<br />
            You Handle Your Business.
          </h2>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-brand-blue font-semibold max-w-4xl mx-auto">
            Creative that gets attention. Ads that bring customers. Systems that keep it running.
          </p>

          {/* Body */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Most businesses know they need better marketing. They just don&apos;t have the time, team, or know-how to make it happen. That&apos;s where we come in.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={onServicesClick}
              className="px-8 py-4 bg-brand-blue text-brand-white font-semibold rounded-lg hover:shadow-glow-blue transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={onResultsClick}
              className="px-8 py-4 border-2 border-brand-cyan text-brand-cyan font-semibold rounded-lg hover:bg-brand-cyan/10 transition-all duration-300"
            >
              See Results
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
