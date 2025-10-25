import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";

interface MediaSectionProps {
  onLearnMoreClick?: () => void;
}

export function MediaSection({ onLearnMoreClick }: MediaSectionProps) {
  const platforms = [
    { name: 'Meta Ads', roi: '4.2x', color: 'bg-blue-500', spend: '$25K', results: '105K leads' },
    { name: 'Google Ads', roi: '3.8x', color: 'bg-green-500', spend: '$18K', results: '2.3M impr.' },
    { name: 'LinkedIn', roi: '5.1x', color: 'bg-cyan-500', spend: '$12K', results: '43K clicks' },
    { name: 'TikTok', roi: '6.3x', color: 'bg-pink-500', spend: '$8K', results: '850K views' },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-blue-500/20 text-blue-400 text-sm font-bold px-4 py-2 rounded-full mb-6 border border-blue-500/30">
                MEDIA
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Paid Ads That Drive Real ROI
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We manage over $500K annually in ad spend across Meta, Google, LinkedIn, and TikTok. Every dollar is optimized for maximum return—not vanity metrics.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-black">4.7x</span>
                  </div>
                  <div className="text-sm text-gray-400">Avg. ROAS</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-black">$2.3M</span>
                  </div>
                  <div className="text-sm text-gray-400">Revenue Generated</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-black">250K+</span>
                  </div>
                  <div className="text-sm text-gray-400">Leads Generated</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-orange-400" />
                    <span className="text-2xl font-black">98%</span>
                  </div>
                  <div className="text-sm text-gray-400">Client Retention</div>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-bold shadow-lg shadow-blue-500/30"
                onClick={onLearnMoreClick}
              >
                See Our Media Results
              </Button>
            </motion.div>
          </div>

          {/* Platform Performance */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                      <h4 className="text-white font-bold text-lg">{platform.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-green-400">{platform.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Spend:</span>
                      <span className="text-white font-bold ml-2">{platform.spend}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Results:</span>
                      <span className="text-white font-bold ml-2">{platform.results}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
