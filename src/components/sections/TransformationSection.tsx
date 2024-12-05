import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock } from 'lucide-react';
import MetricsCard from '../MetricsCard';
import TransformationRow from '../TransformationRow';

export default function TransformationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const metrics = [
    { label: "Avg. Time Reduction", value: "85%", color: "blue-100" },
    { label: "Pattern Success", value: "92%", color: "green-100" },
    { label: "Quality Score", value: "96%", color: "purple-100" },
    { label: "ROI Multiple", value: "3.2x", color: "yellow-100" }
  ];

  const transformations = [
    { task: "Email Creation", fromTime: 25, toTime: 3, category: "Content Development" },
    { task: "Doc Generation", fromTime: 45, toTime: 5, category: "Content Development" },
    { task: "Report Production", fromTime: 90, toTime: 8, category: "Content Development" },
    { task: "Process Documentation", fromTime: 75, toTime: 6, category: "Content Development" },
    { task: "Doc Analysis", fromTime: 35, toTime: 4, category: "Information Processing" },
    { task: "Data Interpretation", fromTime: 60, toTime: 7, category: "Information Processing" }
  ];

  return (
    <section ref={ref} className="pl-2 sm:pl-4 md:pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[95vw] sm:max-w-none mx-auto sm:mx-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem]">
          Measurable Business Impact
        </h2>
        <p className="text-sm sm:text-lg md:text-xl font-handwritten text-ink-light mt-2 sm:mt-4 md:mt-line mb-4 sm:mb-6">
          See how our pattern-based approach transforms key processes:
        </p>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8">
          {metrics.map((metric, index) => (
            <MetricsCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              color={metric.color}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Transformation Table */}
        <div className="bg-white/40 rounded-lg p-3 sm:p-4 md:p-6 shadow-sm [background:rgb(255_255_255_/_0.4)]">
          {transformations.map((transform, index) => (
            <TransformationRow
              key={transform.task}
              task={transform.task}
              fromTime={transform.fromTime}
              toTime={transform.toTime}
              category={transform.category}
              categoryColor={
                transform.category === "Content Development"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-purple-100 text-purple-800"
              }
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom Impact Statement */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 md:p-6 bg-white/40 rounded-lg shadow-sm [background:rgb(255_255_255_/_0.4)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
            </div>
            <div>
              <h4 className="font-handwritten font-bold text-base sm:text-lg text-ink text-center sm:text-left">
                Time to Value = Competitive Edge
              </h4>
              <p className="font-handwritten text-sm sm:text-base text-ink-light text-center sm:text-left">
                When you transform a 45-minute process into a 2-minute win, you're not just saving time.<br className="hidden sm:block" />
                You're accelerating decisions and building lasting competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}