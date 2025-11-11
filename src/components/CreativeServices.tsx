import { motion } from 'motion/react';

export function CreativeServices() {
  const services = [
    {
      number: '01',
      title: 'Social-First Creative That Sells',
      subtitle: 'We make creative that turns attention into action.',
      description:
        'From Reels and TikToks to Facebook ads and YouTube Shorts, every piece we produce is built to attract local customers, not just rack up likes.',
      features: [
        'Platform-specific creative (we build for each platform, not just resize videos)',
        'Shot and edited locally for your market',
        'Fast turnaround so you can stay relevant in real time',
      ],
    },
    {
      number: '02',
      title: 'Digital Ads Built for Local Growth',
      subtitle: 'Your customers scroll — a lot. We make sure they see you.',
      description:
        'We combine organic social media with paid advertising to make your brand show up everywhere your customers spend time. Our ads don\'t chase impressions — they drive calls, messages, and foot traffic.',
      features: [
        'Meta + Google ads optimized for small business budgets',
        'Retargeting campaigns that bring people back',
        'Local SEO video and content built to dominate your city',
      ],
    },
    {
      number: '03',
      title: 'Social Content & Production Made Simple',
      subtitle: 'You don\'t need a Hollywood budget to get professional content.',
      description:
        'We shoot, edit, and deliver everything you need to look like a big brand online — without the big-agency nonsense.',
      features: [
        'Monthly content days for your business',
        'All-in-one creative, ads, and analytics',
        'Consistent social presence that builds trust and drives sales',
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
                <div className="text-orange-500 text-8xl font-black mb-6 opacity-20">
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
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-gray-800 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-sm">Creative showcase image</p>
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
