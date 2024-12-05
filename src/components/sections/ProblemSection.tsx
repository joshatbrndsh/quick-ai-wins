import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, AlertCircle, Frown } from 'lucide-react';

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const problems = [
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "You Know AI Could Help, But...",
      description: "Every vendor pushes complex solutions that require complete overhauls of your existing processes. You need practical improvements, not a technical revolution."
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-accent" />,
      title: "Random Wins Aren't Enough",
      description: "You've had those moments where AI saves hours on a task. But these wins feel random and unrepeatable. You need a systematic way to capture this value."
    },
    {
      icon: <Frown className="h-6 w-6 text-accent" />,
      title: "Time is Running Out",
      description: "While you're spending hours on manual processes, your competitors are getting faster and more efficient. You need to transform your procedures now."
    }
  ];

  return (
    <section ref={ref} id="problem" className="pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-handwritten font-bold text-ink [line-height:4.35rem]">Sound Familiar?</h2>
        <div className="grid gap-line mt-line">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                {problem.icon}
                <h3 className="font-handwritten font-bold text-xl text-ink">{problem.title}</h3>
              </div>
              <p className="font-handwritten text-ink-light">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}