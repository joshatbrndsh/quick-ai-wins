import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Layers, Sparkles } from 'lucide-react';

export default function PainPointsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const painPoints = [
    {
      icon: <AlertTriangle className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Leadership Pressure Mounting",
      description: "Your board wants AI progress. Your market demands innovation. Your teams need direction."
    },
    {
      icon: <Layers className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Current Solutions Add Complexity",
      description: "Vendors push platform changes. Consultants recommend massive projects. Everyone has an opinion about AI adoption - but nobody focuses on what works: your people."
    },
    {
      icon: <Sparkles className="h-5 sm:h-6 w-5 sm:w-6 text-accent" />,
      title: "Success Feels Random",
      description: "You see pockets of AI wins across teams - a transformed process here, an innovation there. But turning these bright spots into systematic progress feels just out of reach."
    }
  ];

  return (
    <section ref={ref} id="transform" className="pl-4 md:pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[90vw] sm:max-w-none mx-auto sm:mx-0"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem]">
          Why Does AI Adoption Feel Overwhelming?
        </h2>
        <div className="grid gap-3 sm:gap-4 md:gap-line mt-4 sm:mt-6 md:mt-line">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-3 sm:p-4 md:p-6 rounded-lg"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                {point.icon}
                <h3 className="font-handwritten font-bold text-base sm:text-lg md:text-xl text-ink">{point.title}</h3>
              </div>
              <p className="font-handwritten text-sm sm:text-base text-ink-light">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}