import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      quote: "I was skeptical about AI, but this approach just works. My monthly reports used to eat up an entire morning. Now they're done in minutes, and they're actually better than before.",
      author: "Sarah Chen",
      role: "Process Lead, Financial Services"
    },
    {
      quote: "The best part? Once you enhance one process, you start seeing opportunities everywhere. My whole team is saving hours every week using these same patterns.",
      author: "Michael Torres",
      role: "Team Lead, Software Development"
    }
  ];

  return (
    <section ref={ref} className="pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-handwritten font-bold text-ink [line-height:4.35rem]">From Hours to Minutes</h2>
        <p className="text-xl font-handwritten text-ink-light mt-line mb-[4.35rem]">
          Real stories from professionals like you:
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-line">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-6 rounded-lg relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent opacity-20" />
              <p className="font-handwritten text-ink-light mb-4">"{testimonial.quote}"</p>
              <div className="font-handwritten">
                <p className="font-bold text-ink">{testimonial.author}</p>
                <p className="text-ink-light text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}