import { motion } from 'motion/react';

export function MediaServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Paid Social AOR',
      description:
        'Full-service social media advertising across all major platforms. We handle strategy, creative direction, media buying, and optimization to drive measurable ROI. From prospecting to retargeting, we build campaigns that convert at every stage of the funnel.',
      image: '/images/media-paid-social.jpg',
    },
    {
      number: '02',
      title: 'DIGITAL MEDIA AOR',
      description:
        'Comprehensive digital media management spanning paid search, display, video, and programmatic. We unify your digital presence with data-driven strategies that maximize efficiency and performance across channels. Every placement optimized, every impression counted.',
      image: '/images/media-digital.jpg',
    },
    {
      number: '03',
      title: 'PERFORMANCE MEDIA CONSULTING',
      description:
        'Strategic media consulting for brands that want expert guidance without full management. We audit your current approach, identify opportunities, and provide actionable recommendations to improve performance and scale what works.',
      image: '/images/media-consulting.jpg',
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
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
