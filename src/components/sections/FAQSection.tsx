import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQAccordion from '../FAQAccordion';

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const faqData = {
    approach: {
      title: "Understanding Our Approach",
      items: [
        {
          question: "What makes Quick AI Wins different from other AI adoption approaches?",
          answer: "Unlike consultants who push for complete system changes or complex technical projects, we start with your existing processes and the people who know them best. We show you how to enhance what's already working, document the success, and help that naturally spread to similar processes."
        },
        {
          question: "What kind of processes work best?",
          answer: "The best starting points are processes that: take more than 10 minutes currently, have 3-10 clear steps, are performed at least weekly, follow consistent steps each time, don't require complex approvals, and don't have heavy regulatory requirements."
        },
        {
          question: "What processes should we avoid starting with?",
          answer: "Some processes that aren't ideal first candidates: processes with fewer than 3 steps, tasks that take less than 10 minutes, processes that change frequently, highly variable or creative work, tasks requiring complex judgment, and processes needing multiple approvals."
        }
      ]
    },
    howItWorks: {
      title: "How It Works",
      items: [
        {
          question: "Why start with adding AI steps to existing processes?",
          answer: "This approach helps teams discover practical ways to use AI tools in their daily work. As we document which AI enhancements work best, we often identify opportunities for more advanced solutions - like automating repetitive tasks or building custom AI tools. It's a practical way to see where AI brings the most value to your organization."
        },
        {
          question: "How exactly do you enhance our processes?",
          answer: "We look at your existing Standard Operating Procedures (SOPs) and identify specific points where AI tools like ChatGPT could help. We then add clear prompts and instructions at those points, showing exactly when and how to use AI during your normal workflow. Think of it like adding \"AI checkpoints\" to your existing process - you'll know precisely when to use AI tools and what to ask them."
        },
        {
          question: "What does an enhanced process look like?",
          answer: "You'll get your existing SOP with new AI-powered steps clearly marked. Each AI step includes: exactly when to use AI in your workflow, the specific prompt to use, how to check the AI's output, and when to edit or refine results. This way, you maintain quality while saving time on repetitive tasks."
        },
        {
          question: "How long does implementation take?",
          answer: "After approving your process submission, we deliver enhancement documentation within 5 business days. Most teams start seeing improvements in their first week using the enhanced process."
        }
      ]
    },
    teamImpact: {
      title: "Team Impact",
      items: [
        {
          question: "How do teams usually respond to these changes?",
          answer: "Teams adapt naturally because we start with processes they know well and focus on making their work easier while maintaining quality. As they see success, they often identify other processes they want to enhance."
        },
        {
          question: "What kind of support do you provide?",
          answer: "Our support includes: clear process documentation, team training sessions, implementation guidance, success validation, and pattern recognition support."
        },
        {
          question: "Can you help with technical implementation needs we identify?",
          answer: "Yes. Through our partnership with BRNDSH, a technical consulting firm, we can support everything from process enhancement to complex system integration. This lets us help you implement any technical solutions identified during process enhancement."
        }
      ]
    },
    measuringSuccess: {
      title: "Measuring Success",
      items: [
        {
          question: "How do you measure success?",
          answer: "We track success at three levels: individual process improvements (time saved, quality maintained), team adoption and pattern recognition, and systematic scaling of successful patterns."
        },
        {
          question: "What results do teams typically see?",
          answer: "Teams typically see: significant time savings on enhanced processes, maintained or improved quality, natural adoption of improvements, clear patterns they can apply elsewhere, and growing confidence with AI tools."
        },
        {
          question: "How do you ensure lasting impact?",
          answer: "By documenting success patterns and enabling natural adoption, improvements become part of your team's regular workflow. Each enhancement creates patterns that can be applied to similar processes, building lasting capability."
        }
      ]
    }
  };

  return (
    <section ref={ref} className="pl-4 md:pl-20 leading-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-handwritten font-bold text-ink [line-height:1.2] sm:[line-height:4.35rem]">
          Frequently Asked Questions
        </h2>
        <p className="text-lg sm:text-xl font-handwritten text-ink-light mt-4 sm:mt-line mb-6 sm:mb-[4.35rem]">
          Learn how we help teams enhance their processes with AI
        </p>

        <div className="space-y-8">
          {Object.entries(faqData).map(([key, category]) => (
            <div key={key}>
              <h3 className="font-handwritten font-bold text-xl text-ink mb-4">
                {category.title}
              </h3>
              <FAQAccordion items={category.items} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}