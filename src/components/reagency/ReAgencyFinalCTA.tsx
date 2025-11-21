import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

interface ReAgencyFinalCTAProps {
  onBookCall?: () => void;
  onEmailUs?: () => void;
}

export function ReAgencyFinalCTA({ onBookCall, onEmailUs }: ReAgencyFinalCTAProps) {
  return (
    <section className="relative bg-brand-black py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-blue/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          {/* Heading */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight">
              Ready To Grow?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
              Let&apos;s build a marketing system that actually works for your business.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <motion.button
              onClick={onBookCall}
              className="px-12 py-5 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-white text-xl font-bold rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Book A Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <button
              onClick={onEmailUs}
              className="px-12 py-5 border-2 border-brand-white/30 text-brand-white text-xl font-semibold rounded-lg hover:border-brand-white hover:bg-brand-white/5 transition-all duration-300 group"
            >
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Email Us Instead
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="pt-16">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent"></div>
          </div>

          {/* Contact info */}
          <div className="text-gray-400 space-y-2 pt-8">
            <p className="text-lg">Questions? Reach out anytime:</p>
            <a
              href="mailto:hello@re-agency.co"
              className="text-brand-cyan hover:text-brand-blue transition-colors text-xl font-semibold"
            >
              hello@re-agency.co
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
