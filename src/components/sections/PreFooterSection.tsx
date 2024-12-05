import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PreFooterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="pl-4 md:pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="bg-paper-dark/20 p-4 sm:p-8 rounded-lg text-center"
      >
        <p className="text-lg sm:text-xl font-handwritten text-ink-light mb-6 sm:mb-8">
          Turn AI complexity into systematic wins.<br className="hidden sm:block" />
          Start with one process, scale with proven patterns.
        </p>
        <a 
          href="#start"
          className="bg-accent text-white px-8 sm:px-12 h-line rounded-md hover:bg-accent-dark transition-colors font-handwritten text-base sm:text-lg inline-flex items-center"
        >
          Begin Your AI Success Story
        </a>
      </motion.div>
    </section>
  );
}