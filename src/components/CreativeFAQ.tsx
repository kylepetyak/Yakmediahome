import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function CreativeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who leads the creative and strategy at Yakmedia?',
      answer:
        'Our creative and strategy teams are led by industry veterans with unparalleled expertise in social-first marketing. Their deep understanding of platform dynamics and consumer behavior ensures every campaign is innovative, impactful, and designed for brand success.',
    },
    {
      question: 'How does strategic organic creative drive daily relevance for my brand?',
      answer:
        "It's simple: we create content people actually want to watch. We use nuanced audience cohorts to develop strategic, contextual content that aligns with where your audience's attention is today, ensuring higher engagement and a stronger connection with your brand.",
    },
    {
      question: 'Who are some of the clients you work with?',
      answer:
        "We're proud to partner with brands across industries including technology, healthcare, consumer goods, finance, and more. Our diverse client portfolio demonstrates our ability to create compelling creative that resonates across different markets and audiences.",
    },
    {
      question: 'What makes your creative approach different?',
      answer:
        'We put social media at the center of everything we do. Our approach is built on deep platform understanding, cultural awareness, and data-informed creativity. We create high volumes of contextual content designed specifically for where attention sits today—not where it was yesterday.',
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
            FAQS
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
