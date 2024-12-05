import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

export default function ResultsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const results = [
    { before: "Monthly reporting process", fromTime: 45, toTime: 2 },
    { before: "Client proposal creation", fromTime: 30, toTime: 2 },
    { before: "Team status updates", fromTime: 8, toTime: 1 },
    { before: "Process documentation", fromTime: 40, toTime: 2 }
  ];

  return (
    <section ref={ref} className="pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-handwritten font-bold text-ink [line-height:4.35rem]">Time Saved, Quality Maintained</h2>
        <p className="text-xl font-handwritten text-ink-light mt-line mb-[4.35rem]">
          Here's how other professionals transformed their processes:
        </p>
        <div className="mt-line bg-paper-dark/20 p-8 rounded-lg">
          <ul className="space-y-4">
            {results.map((result, index) => (
              <motion.li
                key={result.before}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-3 font-handwritten text-ink-light"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span>
                  {result.before}: {result.fromTime} minutes → {result.toTime} minute{result.toTime > 1 ? 's' : ''}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}