import { motion } from 'motion/react';
import { ArrowRight, Zap, Video, Globe, Cog } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "Ad Campaigns That Convert",
    description: "We run your Facebook, Instagram, and Google ads so you get more leads and customers—without wasting money on what doesn't work.",
    color: "blue"
  },
  {
    icon: Video,
    title: "Content That Gets Attention",
    description: "Videos, posts, and ads designed to stop the scroll and make people take action. No corporate boring stuff.",
    color: "cyan"
  },
  {
    icon: Globe,
    title: "Websites That Work",
    description: "Fast, modern websites built to show up in Google and turn visitors into paying customers.",
    color: "blue"
  },
  {
    icon: Cog,
    title: "Marketing Systems",
    description: "We build and run your entire marketing operation—ads, content, follow-up—so it runs on autopilot while you run your business.",
    color: "cyan"
  }
];

export function ReAgencyServicesPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight">
              Services That Drive Growth
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to bring in more customers and grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const gradientColor = service.color === 'blue' ? 'from-brand-blue to-brand-blue/50' : 'from-brand-cyan to-brand-cyan/50';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-brand-charcoal border border-brand-blue/20 rounded-2xl p-8 hover:border-brand-blue hover:shadow-glow-blue transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-brand-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-brand-white mb-4 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <button className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-cyan transition-colors group">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300">
              Let's talk about which services make the most sense for your business.
            </p>
            <button className="px-12 py-5 bg-gradient-to-r from-brand-blue to-brand-cyan text-brand-white text-xl font-bold rounded-lg shadow-glow-blue hover:shadow-glow-blue-lg hover:scale-105 transition-all duration-300">
              Book A Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
