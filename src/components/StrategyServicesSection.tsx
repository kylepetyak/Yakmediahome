import { motion } from 'motion/react';

export function StrategyServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Brand Strategy & Positioning',
      description:
        'We help you define who you are, what you stand for, and how you show up in the market. From brand architecture to messaging frameworks, we create strategic foundations that guide every decision and drive long-term growth.',
      image: '/images/strategy-brand.jpg',
    },
    {
      number: '02',
      title: 'DIGITAL TRANSFORMATION STRATEGY',
      description:
        'Modernize your marketing approach for today&apos;s digital-first world. We audit your current state, identify opportunities, and build roadmaps that transform how you reach customers, measure performance, and scale what works.',
      image: '/images/strategy-digital.jpg',
    },
    {
      number: '03',
      title: 'GROWTH STRATEGY & PLANNING',
      description:
        'Strategic growth planning grounded in data and consumer insights. We analyze your market, identify high-value opportunities, and create actionable plans that drive sustainable business growth across all channels.',
      image: '/images/strategy-growth.jpg',
    },
  ];

  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-24 ${index === services.length - 1 ? 'mb-0' : ''}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-purple-500 text-8xl font-black mb-6 opacity-20">
                  {service.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">🎯</div>
                      <p className="text-sm">Strategy showcase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
