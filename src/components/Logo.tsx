import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollToSection';

export default function Logo() {
  return (
    <motion.div 
      className="flex items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <div className="flex items-center">
        <span className="text-2xl font-handwritten font-bold text-accent">Quick</span>
        <span className="text-2xl font-handwritten font-bold text-ink mx-[0.25em]">AI</span>
        <span className="text-2xl font-handwritten font-bold text-ink">Wins</span>
      </div>
    </motion.div>
  );
}