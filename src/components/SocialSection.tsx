import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const rotatingWords = [
  { text: 'Brand', color: 'text-pink-500' },
  { text: 'Goals', color: 'text-cyan-400' },
  { text: 'Success', color: 'text-purple-500' }
];

export function SocialSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          We put your{' '}
          <span className={rotatingWords[currentWordIndex].color}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: -90 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{ display: "inline-block" }}
              >
                {rotatingWords[currentWordIndex].text}
              </motion.span>
            </AnimatePresence>
          </span>
          {' '}at the center of everything we do.
        </h2>
      </div>
    </section>
  );
}