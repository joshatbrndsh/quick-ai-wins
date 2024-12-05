import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Scale, Brain } from 'lucide-react';

export default function EnhancementFlywheel() {
  const steps = [
    { icon: FileText, label: 'Document\nProcess', color: '#1A365D' },
    { icon: Brain, label: 'Enhance with\nAI Prompts', color: '#3B82F6' },
    { icon: Scale, label: 'Measure\nResults', color: '#1A365D' },
    { icon: Sparkles, label: 'Scale\nSuccess', color: '#3B82F6' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square p-8">
      {/* Hand-drawn circle */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <path
          d="M200,50 
          C 320,50 350,180 350,200
          C 350,320 320,350 200,350
          C 80,350 50,320 50,200
          C 50,80 80,50 200,50"
          fill="none"
          stroke="#B9D2DC"
          strokeWidth="4"
          strokeLinecap="round"
          className="hand-drawn"
          style={{
            filter: 'url(#roughness)',
          }}
        />
        
        {/* Rough filter effect */}
        <defs>
          <filter id="roughness">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>

        {/* Connecting arrows */}
        <g className="hand-drawn-arrows">
          {steps.map((_, index) => {
            const angle = (index * 360) / steps.length;
            const nextAngle = ((index + 1) * 360) / steps.length;
            const startX = 200 + 120 * Math.cos((angle - 45) * (Math.PI / 180));
            const startY = 200 + 120 * Math.sin((angle - 45) * (Math.PI / 180));
            const endX = 200 + 120 * Math.cos((nextAngle - 45) * (Math.PI / 180));
            const endY = 200 + 120 * Math.sin((nextAngle - 45) * (Math.PI / 180));
            
            const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 20;
            const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 20;

            return (
              <path
                key={`arrow-${index}`}
                d={`M ${startX},${startY} Q ${midX},${midY} ${endX},${endY}`}
                fill="none"
                stroke="#B9D2DC"
                strokeWidth="3"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
                className="hand-drawn"
              />
            );
          })}
        </g>

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="#B9D2DC"
              className="hand-drawn"
            />
          </marker>
        </defs>
      </svg>

      {/* Step circles with icons */}
      {steps.map((Step, index) => {
        const angle = (index * 360) / steps.length - 45;
        const x = 50 + Math.cos(angle * (Math.PI / 180)) * 50;
        const y = 50 + Math.sin(angle * (Math.PI / 180)) * 50;

        return (
          <motion.div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative">
              <div 
                className="w-20 h-20 rounded-full bg-white/80 border-2 border-line flex items-center justify-center shadow-lg"
                style={{
                  boxShadow: '4px 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <Step.icon 
                  size={32}
                  className="text-accent"
                  style={{ color: Step.color }}
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-pre-line text-center">
                <span className="font-handwritten text-sm font-bold text-ink" style={{ color: Step.color }}>
                  {Step.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}