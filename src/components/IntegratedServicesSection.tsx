import { motion } from 'motion/react';

export function IntegratedServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Creative + Media Integration',
      subtitle: 'When your content team and ad team work together, you stop wasting budget on creative that doesn\'t convert.',
      description:
        'We design every piece of content with performance in mind—so your Reels, TikToks, and static posts aren\'t just made to look good. They\'re built to drive clicks, calls, and conversions when you put ad dollars behind them.',
      features: [
        'Content optimized for both organic reach and paid performance',
        'Creative and media teams aligned on messaging and goals',
        'Faster iteration cycles—test, learn, and scale in real time',
      ],
    },
    {
      number: '02',
      title: 'Strategy That Connects Everything',
      subtitle: 'Most businesses run ads, post content, and hope it all works together. We make sure it does.',
      description:
        'Our strategy team sits between creative and media, making sure your brand message stays consistent across organic posts, paid ads, email, and every other channel you use.',
      features: [
        'Unified messaging across all channels and campaigns',
        'Clear customer journey from first touch to final conversion',
        'One source of truth for tracking, reporting, and optimization',
      ],
    },
    {
      number: '03',
      title: 'Full-Funnel Execution Under One Roof',
      subtitle: 'You shouldn\'t need three agencies to run one campaign.',
      description:
        'We handle creative production, paid media buying, strategy planning, and performance tracking—all in one place. That means faster launches, tighter collaboration, and better results.',
      features: [
        'End-to-end campaign management from concept to conversion',
        'Single point of contact for all your marketing needs',
        'Integrated reporting that shows real ROI, not vanity metrics',
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
                <div className="text-transparent bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-8xl font-black mb-6 opacity-30">
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
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 via-orange-500/20 to-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">🔗</div>
                      <p className="text-sm">Integration showcase</p>
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
