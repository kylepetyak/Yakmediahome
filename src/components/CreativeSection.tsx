import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { Video, Camera, PenTool, Sparkles } from "lucide-react";

interface CreativeSectionProps {
  onLearnMoreClick?: () => void;
}

export function CreativeSection({ onLearnMoreClick }: CreativeSectionProps) {
  const contentTypes = [
    { icon: Video, label: 'Short-Form Video', color: 'from-red-500 to-orange-500' },
    { icon: Camera, label: 'Photography', color: 'from-purple-500 to-pink-500' },
    { icon: PenTool, label: 'Graphic Design', color: 'from-blue-500 to-cyan-500' },
    { icon: Sparkles, label: 'Brand Content', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Types Grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {contentTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`bg-gradient-to-br ${type.color} p-8 rounded-2xl aspect-square flex flex-col items-center justify-center text-center text-white hover:scale-105 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-12 h-12 mb-4" />
                      <h3 className="font-bold text-lg">{type.label}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full mb-6">
                CREATIVE
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Content That Stops the Scroll
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We create thumb-stopping content designed for how people actually consume media in 2025. Every piece is built to perform—whether it's a 15-second TikTok or a full brand campaign.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Platform-Native Creation</h4>
                    <p className="text-gray-600">We don't just repurpose—we create specifically for TikTok, Instagram, LinkedIn, YouTube</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Data-Informed Creativity</h4>
                    <p className="text-gray-600">Every creative decision is backed by performance data from real campaigns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Rapid Production</h4>
                    <p className="text-gray-600">Fast turnaround without sacrificing quality—because timing matters online</p>
                  </div>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold shadow-lg"
                onClick={onLearnMoreClick}
              >
                How We Help
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
