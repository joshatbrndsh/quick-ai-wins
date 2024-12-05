import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scrollToSection } from '../../utils/scrollToSection';

const BOOKING_URL = 'https://usemotion.com/meet/josh-huston/quickaIwins';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="pl-2 sm:pl-4 md:pl-20 pt-8 sm:pt-12 md:pt-24 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[95vw] sm:max-w-none mx-auto sm:mx-0 px-4 sm:px-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem] tracking-wide">
          We Simplify the <span className="text-accent">AI Adoption </span><br className="hidden sm:block" />
          Process
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-handwritten text-ink-light mt-3 sm:mt-4 md:mt-line mb-6 sm:mb-8 md:mb-[4.35rem] max-w-[95vw] sm:max-w-none">
          Transform <span className="text-accent">Quick AI Wins</span> into enterprise-wide patterns &<br className="hidden sm:block" />
          Build lasting momentum by training AI intuition within your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-white px-6 sm:px-8 md:px-10 h-12 sm:h-14 rounded-md hover:bg-accent-dark transition-colors font-handwritten text-lg sm:text-xl inline-flex items-center justify-center touch-manipulation"
          >
            Begin Your AI Success Story
          </a>
        </div>
      </motion.div>
    </section>
  );
}