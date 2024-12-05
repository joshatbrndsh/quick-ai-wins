import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export default function SuccessStoriesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stories = [
    {
      quote: "Our board wanted visible AI progress, but without disrupting operations. We transformed our monthly reporting from 45 minutes to 2 minutes, maintained quality, and scaled the success across five departments. Now we're seeing 300% ROI in productivity.",
      author: "Jennifer Martinez",
      role: "Director of Operations, Financial Services",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200"
    },
    {
      quote: "Instead of a massive AI overhaul, we started with one critical process. Turned our team's 30-minute strategy briefs into 2-minute wins. Quality improved 40%, team adoption hit 100%, and we've replicated this across all key workflows.",
      author: "David Chen",
      role: "VP of Product Strategy, Technology",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&h=200"
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
          Leadership Success Stories
        </h2>
        <p className="text-lg sm:text-xl font-handwritten text-ink-light mt-4 sm:mt-line mb-6 sm:mb-[4.35rem]">
          See how executives are driving measurable AI adoption across their organizations.
        </p>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/40 p-4 sm:p-6 rounded-lg relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent opacity-20" />
              <div className="flex gap-4 mb-4">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-handwritten font-bold text-base sm:text-lg text-ink">
                    {story.author}
                  </h3>
                  <p className="font-handwritten text-xs sm:text-sm text-ink-light">
                    {story.role}
                  </p>
                </div>
              </div>
              <p className="font-handwritten text-sm sm:text-base text-ink-light">
                "{story.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}