import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Lightbulb, 
  Briefcase, 
  Video, 
  ClipboardCheck, 
  Zap, 
  Book, 
  Users, 
  Clock, 
  Target, 
  LineChart, 
  Presentation, 
  BarChart 
} from 'lucide-react';

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const plans = [
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "SOP Enhancements",
      description: "Transform your processes into documented AI wins.",
      features: [
        {
          icon: <Video className="h-5 w-5 text-accent" />,
          text: "Process Recording Review"
        },
        {
          icon: <ClipboardCheck className="h-5 w-5 text-accent" />,
          text: "Enhancement Strategy"
        },
        {
          icon: <Zap className="h-5 w-5 text-accent" />,
          text: "AI Implementation Guide"
        },
        {
          icon: <Book className="h-5 w-5 text-accent" />,
          text: "Success Documentation"
        }
      ],
      note: "Starts with your Loom video, ends with AI-enhanced SOP",
      perfect: "Teams ready to transform their day to day"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      title: "Team Training",
      description: "Build natural AI Intuition for your team.",
      features: [
        {
          icon: <Users className="h-5 w-5 text-accent" />,
          text: "AI Skills Workshops"
        },
        {
          icon: <Clock className="h-5 w-5 text-accent" />,
          text: "AI Office Hours"
        },
        {
          icon: <Target className="h-5 w-5 text-accent" />,
          text: "SOP Hackathons"
        },
        {
          icon: <LineChart className="h-5 w-5 text-accent" />,
          text: "Success Pattern Trainings"
        }
      ],
      note: "All sessions: 90 minutes, includes materials",
      perfect: "Teams building AI intuition together"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      title: "Leadership Advisory",
      description: "Strategic support for systematic adoption.",
      features: [
        {
          icon: <Presentation className="h-5 w-5 text-accent" />,
          text: "AI Adoption Strategy"
        },
        {
          icon: <Users className="h-5 w-5 text-accent" />,
          text: "Change Management Guide"
        },
        {
          icon: <Target className="h-5 w-5 text-accent" />,
          text: "Quick Win Framework"
        },
        {
          icon: <BarChart className="h-5 w-5 text-accent" />,
          text: "Success Metrics Dashboard"
        }
      ],
      note: "3-month engagement, with technical AI leadership",
      perfect: "Leaders driving organizational AI transformation and change"
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
          Start Your Natural AI Transformation
        </h2>
        <p className="text-lg sm:text-xl font-handwritten text-ink-light mt-4 sm:mt-line mb-6 sm:mb-[4.35rem]">
          Turn individual wins into systematic success with our unique methodology.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white/40 p-4 sm:p-6 rounded-lg flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                {plan.icon}
                <h3 className="font-handwritten font-bold text-lg sm:text-xl text-ink">
                  {plan.title}
                </h3>
              </div>
              <p className="font-handwritten text-sm sm:text-base text-ink-light mb-6">
                {plan.description}
              </p>
              <div className="space-y-4 flex-grow">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature.icon}
                    <span className="font-handwritten text-sm sm:text-base text-ink-light">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-line">
                <p className="font-handwritten text-ink-light text-xs sm:text-sm mb-4">
                  {plan.note}
                </p>
                <p className="font-handwritten text-ink font-bold mb-2">
                  Perfect for:
                </p>
                <p className="font-handwritten text-sm sm:text-base text-ink-light">
                  {plan.perfect}
                </p>
                <a
                  href="#start"
                  className="mt-6 bg-accent text-white w-full h-line rounded-md hover:bg-accent-dark transition-colors font-handwritten text-base sm:text-lg flex items-center justify-center"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}