import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BOOKING_URL = 'https://usemotion.com/meet/josh-huston/quickaIwins';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="start" className="pl-2 sm:pl-4 md:pl-20 leading-line pb-8 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem]">
          See How Simple AI Adoption Can Be
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-handwritten text-ink-light mt-3 sm:mt-4 mb-6 sm:mb-8">
          Schedule a free consultation to discover how we can transform your processes
        </p>
        <a 
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-accent text-white px-6 sm:px-8 md:px-10 h-12 sm:h-14 rounded-md hover:bg-accent-dark transition-colors font-handwritten text-lg sm:text-xl inline-flex items-center justify-center touch-manipulation"
        >
          Schedule Your Free Consultation
        </a>
      </motion.div>
    </section>
  );
}