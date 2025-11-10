import { motion } from 'motion/react';

export function CreativeServices() {
  const services = [
    {
      number: '01',
      title: 'Social at the Center Creative AOR',
      description:
        'The modern creative AOR built to win daily relevance by deeply understanding platforms and culture. We create and scale socially-informed campaigns that people actually care about — executing best-in-class ads and commercials that balance consumer needs with brand goals across every channel as scoped.',
      image: '/images/creative-social.jpg', // Placeholder
    },
    {
      number: '02',
      title: 'DIGITAL CREATIVE AOR',
      description:
        'Where culture meets conversion. We deliver organic + paid social and digital ads designed for attention, not just impressions. Our approach combines platform nuance, consumer insight, and brand strategy to create high-performing creative across every digital touchpoint— ensuring your brand shows up where it matters most.',
      image: '/images/creative-digital.jpg', // Placeholder
    },
    {
      number: '03',
      title: 'SOCIAL CREATIVE & PRODUCTION AOR',
      description:
        'The best in class consumer-centric social media ads to build brand. We drive daily relevance and build your brand with a commitment to "perfect" social content by using nuanced audience insights to create a high volume of contextual creative built for where attention sits today.',
      image: '/images/creative-production.jpg', // Placeholder
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
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
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
