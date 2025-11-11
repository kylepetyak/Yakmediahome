import { motion } from 'motion/react';

export function StrategyServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Brand Strategy & Positioning for Local Businesses',
      subtitle: 'We help you clarify your brand — what makes you different, who you serve, and how you show up.',
      description:
        'Then we build a plan to make sure your story hits the right audience, in the right way, across every channel.',
      features: [
        'Clarify your brand voice and identity',
        'Create a message that connects with your ideal customers',
        'Build a consistent online presence that drives recognition and trust',
      ],
    },
    {
      number: '02',
      title: 'Digital Strategy That Modernizes Your Marketing',
      subtitle: 'Most small businesses are running on outdated marketing habits.',
      description:
        'We help you modernize by building a digital strategy that connects your website, social media, and paid ads into one system that actually works together.',
      features: [
        'Audit your current marketing setup and fix the gaps',
        'Identify new digital opportunities in your local market',
        'Create a simple roadmap that ties creative, content, and ads into one ecosystem',
      ],
    },
    {
      number: '03',
      title: 'Growth Strategy & Planning That Drives Real Revenue',
      subtitle: 'Growth doesn\'t happen by accident — it\'s engineered.',
      description:
        'We analyze your data, map out your funnel, and build step-by-step plans that scale what\'s already working while opening new revenue streams.',
      features: [
        'Track the right metrics (leads, ROAS, LTV — not vanity numbers)',
        'Find high-ROI opportunities hidden in your current marketing',
        'Build repeatable systems for lead generation and retention',
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
                <div className="text-purple-500 text-8xl font-black mb-6 opacity-20">
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
