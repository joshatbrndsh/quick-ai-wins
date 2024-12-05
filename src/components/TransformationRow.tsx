import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TransformationRowProps {
  task: string;
  fromTime: number;
  toTime: number;
  category: string;
  categoryColor: string;
  delay?: number;
}

export default function TransformationRow({
  task,
  fromTime,
  toTime,
  category,
  categoryColor,
  delay = 0
}: TransformationRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="grid grid-cols-8 md:grid-cols-12 items-center gap-2 md:gap-4 py-2 md:py-3 border-b border-line last:border-b-0"
    >
      <div className="col-span-4 font-handwritten text-sm md:text-base text-ink">{task}</div>
      <div className="col-span-4 flex items-center gap-1 md:gap-2 font-handwritten text-sm md:text-base">
        <Clock className="h-3 w-3 md:h-4 md:w-4 text-accent" />
        <span className="text-red-500">{fromTime}m</span>
        <span className="text-ink">→</span>
        <span className="text-green-500">{toTime}m</span>
      </div>
      <div className="hidden md:flex col-span-4 justify-end">
        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-handwritten ${categoryColor}`}>
          {category}
        </span>
      </div>
    </motion.div>
  );
}