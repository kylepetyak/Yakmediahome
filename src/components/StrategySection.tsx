import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { Target, MapPin, Rocket, CheckCircle2 } from "lucide-react";

interface StrategySectionProps {
  onLearnMoreClick?: () => void;
}

export function StrategySection({ onLearnMoreClick }: StrategySectionProps) {
  const roadmapSteps = [
    { icon: Target, label: 'Discover', description: 'Audit current state & identify opportunities', color: 'bg-orange-500' },
    { icon: MapPin, label: 'Strategize', description: 'Build data-driven growth roadmap', color: 'bg-blue-500' },
    { icon: Rocket, label: 'Execute', description: 'Launch campaigns & optimize daily', color: 'bg-green-500' },
    { icon: CheckCircle2, label: 'Scale', description: 'Double down on what works', color: 'bg-purple-500' },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-green-100 text-green-600 text-sm font-bold px-4 py-2 rounded-full mb-6">
                STRATEGY
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Growth Strategies Built for Phoenix Businesses
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We start with where you are today, map out where you want to be, and build a clear path to get there. No fluff, no buzzwords—just actionable strategy that drives growth.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-6 mb-8 border border-orange-100">
                <h4 className="font-bold text-gray-900 mb-4">What Makes Our Strategy Different</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">Phoenix market expertise—we know local competition and customer behavior</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">Data-driven decisions backed by real performance metrics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700">Agile execution—we pivot based on results, not egos</p>
                  </div>
                </div>
              </div>

              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-bold shadow-lg"
                onClick={onLearnMoreClick}
              >
                Get Your Strategy Session
              </Button>
            </motion.div>
          </div>

          {/* Roadmap Visual */}
          <div>
            <div className="space-y-6">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{index + 1}. {step.label}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-gray-900 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Avg. Time to First Results</div>
                  <div className="text-3xl font-black">30-60 Days</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">Avg. ROI Increase</div>
                  <div className="text-3xl font-black text-green-400">300%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
