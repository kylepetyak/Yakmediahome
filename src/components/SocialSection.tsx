import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export function SocialSection() {
  const platforms = [
    { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-700' },
    { icon: Linkedin, name: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
    { icon: Youtube, name: 'YouTube', color: 'from-red-500 to-red-600' },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
          >
            We Build Brands Where
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Your Customers Actually Are
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Social media isn't just about posting—it's about being where the conversation happens.
            We create content that stops the scroll and turns followers into customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 text-center transition-all duration-300 border-2 border-transparent hover:border-gray-200">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
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
          className="mt-16 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-orange-100"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-gray-900 mb-2">15M+</div>
              <div className="text-gray-600">Impressions Generated</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
