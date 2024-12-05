import React from 'react';
import { motion } from 'framer-motion';

interface MetricsCardProps {
  label: string;
  value: string;
  color: string;
  delay?: number;
}

export default function MetricsCard({ label, value, color, delay = 0 }: MetricsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-${color}/10 p-4 rounded-lg`}
    >
      <p className="font-handwritten text-sm text-ink-light">{label}</p>
      <p className="font-handwritten text-3xl font-bold text-ink mt-1">{value}</p>
    </motion.div>
  );
}