import { motion } from 'motion/react';

export function MediaServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Paid Social That Actually Converts',
      subtitle: 'We run paid social campaigns that get real results — not vanity metrics.',
      description:
        'From new customer acquisition to retargeting past visitors, we manage your full ad funnel so every click has a purpose.',
      features: [
        'Facebook & Instagram ads that drive calls, form fills, and messages',
        'TikTok and YouTube ads that build awareness and local authority',
        'Retargeting systems that turn attention into repeat business',
      ],
    },
    {
      number: '02',
      title: 'Digital Ads Built to Grow Your Local Reach',
      subtitle: 'Search, display, and video ads that make your business visible everywhere your customers are.',
      description:
        'We connect your paid channels into one cohesive system that maximizes efficiency and return.',
      features: [
        'Google Search campaigns that capture buyers when they\'re ready',
        'YouTube and Display ads that boost local visibility',
        'Smart budget allocation to cut waste and boost ROAS',
      ],
    },
    {
      number: '03',
      title: 'Performance Media Audits & Consulting',
      subtitle: 'Not ready for full management? No problem.',
      description:
        'Our team can audit your current campaigns, identify missed opportunities, and show you exactly how to improve your performance.',
      features: [
        'Deep-dive campaign analysis (Meta + Google)',
        'Clear action plan to fix tracking, targeting, and creative gaps',
        'Guidance to scale what\'s working and cut what\'s not',
      ],
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
                <div className="text-blue-500 text-8xl font-black mb-6 opacity-20">
                  {service.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {service.subtitle}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="text-sm">Media performance showcase</p>
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
