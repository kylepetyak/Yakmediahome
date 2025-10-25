import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { Layers, Zap, TrendingUp, Target } from "lucide-react";

interface IntegratedSectionProps {
  onLearnMoreClick?: () => void;
}

export function IntegratedSection({ onLearnMoreClick }: IntegratedSectionProps) {
  const integrationBenefits = [
    {
      icon: Layers,
      title: 'Creative + Media Alignment',
      description: 'Content designed specifically for ad performance, not just aesthetic appeal',
      metric: '+180% CTR',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Unified Targeting',
      description: 'Same audience strategy across organic and paid channels for maximum impact',
      metric: '-42% CAC',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Iteration',
      description: 'Ad performance informs creative direction, creating a continuous feedback loop',
      metric: '+250% ROAS',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Speed to Market',
      description: 'Integrated teams move faster than siloed agencies—launch campaigns in days, not weeks',
      metric: '3-5 Days',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-purple-500/20 text-purple-400 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-purple-500/30">
              INTEGRATED
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              When Creative + Media Work Together,
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Results Multiply
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Most agencies silo creative and media teams. We integrate them from day one—so every piece of content is built to perform, and every ad campaign has killer creative behind it.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {integrationBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{benefit.title}</h4>
                      <div className="text-right">
                        <div className="text-lg font-black text-green-400">{benefit.metric}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ready to See What Integrated Marketing Can Do?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We'll show you exactly how we align creative and media to maximize your marketing ROI.
            </p>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-bold shadow-lg shadow-purple-500/30"
              onClick={onLearnMoreClick}
            >
              See How We Integrate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
