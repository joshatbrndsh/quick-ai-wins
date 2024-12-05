import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Gauge, TrendingUp } from 'lucide-react';

export default function ValuePropsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const valueProps = [
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "Immediate Impact",
      description: "Transform your first process today. See results in minutes, not months. Build momentum through quick wins."
    },
    {
      icon: <Gauge className="h-6 w-6 text-accent" />,
      title: "Maintain Quality",
      description: "Our enhancement patterns ensure consistent quality while dramatically reducing execution time."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-accent" />,
      title: "Natural Growth",
      description: "As you transform processes, you'll naturally develop AI capability that scales across your team."
    }
  ];

  return (
    <section ref={ref} className="pl-4 md:pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem]">
          Why It Works
        </h2>
        <p className="text-lg sm:text-xl font-handwritten text-ink-light mt-4 sm:mt-line mb-6 sm:mb-[4.35rem]">
          Our approach delivers immediate value while building<br className="hidden sm:block" />
          lasting capability through systematic enhancement.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-4 sm:p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                {prop.icon}
                <h3 className="font-handwritten font-bold text-lg sm:text-xl text-ink">
                  {prop.title}
                </h3>
              </div>
              <p className="font-handwritten text-sm sm:text-base text-ink-light">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}