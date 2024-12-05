import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Package, Users } from 'lucide-react';

export default function GuideSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const packages = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
      title: "Basic Enhancement",
      description: "Transform your first process and build systematic capability.",
      features: [
        "Process documentation",
        "Enhancement strategy",
        "AI prompt templates",
        "Implementation guidance",
        "Basic support"
      ]
    },
    {
      icon: <Package className="h-6 w-6 text-accent" />,
      title: "Premium Implementation",
      description: "Ensure seamless adoption across your key processes.",
      features: [
        "Everything in Basic",
        "Custom AI configuration",
        "Hands-on implementation",
        "Success validation",
        "Premium support"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Enterprise Transformation",
      description: "Scale process enhancement across your organization.",
      features: [
        "Full portfolio enhancement",
        "Team implementation",
        "Strategic support",
        "Leadership enablement",
        "Enterprise success program"
      ]
    }
  ];

  return (
    <section ref={ref} className="pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-handwritten font-bold text-ink [line-height:4.35rem]">
          Choose Your Path
        </h2>
        <p className="text-xl font-handwritten text-ink-light mt-line mb-[4.35rem]">
          Select the enhancement package that matches your needs.<br />
          Start small and scale as you see results.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                {pkg.icon}
                <h3 className="font-handwritten font-bold text-xl text-ink">
                  {pkg.title}
                </h3>
              </div>
              <p className="font-handwritten text-ink-light mb-4">
                {pkg.description}
              </p>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    <span className="font-handwritten text-ink-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}