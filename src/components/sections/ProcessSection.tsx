import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, TrendingUp, LineChart } from 'lucide-react';

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: <Users className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Begin With Natural Wins",
      description: "Transform the work people already do. Build confidence through immediate success. Create momentum from day one."
    },
    {
      icon: <BookOpen className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Document What Works",
      description: "Turn each success into a proven pattern. Build your organization's playbook. Make transformation repeatable."
    },
    {
      icon: <TrendingUp className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Scale Naturally",
      description: "Let patterns drive adoption. Watch success multiply across teams. Build systematic capability."
    },
    {
      icon: <LineChart className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Measure Impact",
      description: "Track transformation metrics. Celebrate team success. Build lasting momentum."
    }
  ];

  return (
    <section ref={ref} id="process" className="pl-4 md:pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[90vw] sm:max-w-none mx-auto sm:mx-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem]">
          Start With People, Scale Through Patterns
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-handwritten text-ink-light mt-3 sm:mt-4 md:mt-line mb-4 sm:mb-6 md:mb-[4.35rem]">
          Build systematic AI adoption through natural team momentum.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-x-16 md:gap-y-line">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-3 sm:p-4 md:p-6 rounded-lg"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                {step.icon}
                <h3 className="font-handwritten font-bold text-base sm:text-lg md:text-xl text-ink">{step.title}</h3>
              </div>
              <p className="font-handwritten text-sm sm:text-base text-ink-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}