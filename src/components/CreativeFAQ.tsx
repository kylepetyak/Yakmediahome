import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function CreativeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who leads the creative and strategy at Yak Media?',
      answer:
        'Our creative and strategy are led by people who actually run campaigns for small businesses every day—not career "brand strategists." We know what works locally because we\'ve built it, shot it, and scaled it right here in Phoenix.',
    },
    {
      question: 'How does creative content help my small business grow?',
      answer:
        'People buy from brands they recognize and trust. Our content keeps you in front of your audience daily—building credibility, engagement, and consistent inbound leads.',
    },
    {
      question: 'Who do you work with?',
      answer:
        'We work with local businesses of all sizes—from solo operators to multi-location clinics and restaurants. Whether you need new content, better ads, or a full marketing system, we tailor our work to fit your budget and goals.',
    },
    {
      question: 'What makes Yak Media different?',
      answer:
        'We\'re not a typical agency. We don\'t charge $10K retainers or speak in buzzwords. We create what works—content that looks great, converts fast, and makes you money. Everything we build is tested, tracked, and tied to real results.',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 text-center">
            FAQs
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Everything you need to know about our creative services
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
