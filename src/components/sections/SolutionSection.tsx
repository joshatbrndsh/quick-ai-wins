import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Target, Clock } from 'lucide-react';

export default function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    { 
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Map Your Process",
      desc: "We'll help you document your current workflow and spot the perfect enhancement opportunities"
    },
    {
      icon: <Brain className="h-6 w-6 text-accent" />,
      title: "Add Strategic AI",
      desc: "Transform key steps with proven AI prompts that maintain quality while saving time"
    },
    {
      icon: <Target className="h-6 w-6 text-accent" />,
      title: "See Instant Results",
      desc: "Watch as your hour-long processes become 2-minute tasks with consistent quality"
    },
    {
      icon: <Bot className="h-6 w-6 text-accent" />,
      title: "Multiply Your Success",
      desc: "Apply the same proven patterns across all your time-consuming procedures"
    }
  ];

  return (
    <section ref={ref} id="solution" className="pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-handwritten font-bold text-ink [line-height:4.35rem]">Here's How We Do It</h2>
        <p className="text-xl font-handwritten text-ink-light mt-line mb-[4.35rem]">
          A simple, proven approach that transforms your procedures<br />
          into consistent 2-minute wins.
        </p>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-line">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                {step.icon}
                <h3 className="font-handwritten font-bold text-xl text-ink">{step.title}</h3>
              </div>
              <p className="font-handwritten text-ink-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}