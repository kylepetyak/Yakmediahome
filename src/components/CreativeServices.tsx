import { motion } from 'motion/react';

export function CreativeServices() {
  const services = [
    {
      number: '01',
      title: 'Social-First Creative That Sells',
      subtitle: 'We make creative that turns attention into action.',
      description:
        'From Reels and TikToks to Facebook ads and YouTube Shorts, every piece we produce is built to attract local customers—not just rack up likes.',
      features: [
        'Platform-specific creative (built for each platform, not just resized)',
        'Shot and edited locally for your market',
        'Fast turnaround so you can stay relevant in real time',
      ],
    },
    {
      number: '02',
      title: 'Digital Ads Built for Local Growth',
      subtitle: 'Your customers scroll—a lot. We make sure they see you.',
      description:
        'We combine organic social media with paid advertising to make your brand show up everywhere your customers spend time. Our ads don\'t chase impressions—they drive calls, messages, and foot traffic.',
      features: [
        'Meta + Google ads optimized for small business budgets',
        'Retargeting campaigns that bring people back',
        'Local SEO video and content built to dominate your city',
      ],
    },
    {
      number: '03',
      title: 'Social Content & Production Made Simple',
      subtitle: 'You don\'t need a Hollywood budget to look like a big brand online.',
      description:
        'We shoot, edit, and deliver everything you need to show up consistently—without the big-agency nonsense.',
      features: [
        'Monthly content days for your business',
        'All-in-one creative, ads, and analytics',
        'Consistent social presence that builds trust and drives sales',
      ],
    },
  ];

  return (
    <section id="creative" className="bg-white">
      {services.map((service, index) => (
        <div key={service.number}>
          <div className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 md:grid-cols-2 md:items-start"
            >
              <div>
                <div className="text-sm font-semibold text-gray-500">{service.number}</div>
                <h2 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="mt-2 text-gray-700">{service.subtitle}</p>
                <div className="mt-4 text-gray-800 leading-relaxed">
                  <p>{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-sm">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="order-first md:order-none">
                <div className="aspect-video rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Creative showcase image</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Showcase image placeholder between sections */}
          {index < services.length - 1 && (
            <div className="px-6 max-w-6xl mx-auto -mt-8 md:-mt-10 mb-8">
              <div className="aspect-[3/1] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-sm">Additional showcase carousel / image strip</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
