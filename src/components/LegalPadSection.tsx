import React from 'react';
import { cn } from '../utils/cn';

interface LegalPadSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function LegalPadSection({ children, className }: LegalPadSectionProps) {
  return (
    <div className={cn(
      "relative bg-[#FFEFA1] rounded-sm shadow-lg",
      "before:absolute before:top-0 before:left-[1.25in] before:bottom-0 before:w-[1px] before:bg-[#3B82F6]",
      className
    )}>
      {/* Binding effect */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#8B4513] to-[#FFEFA1] rounded-t-sm">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B4513] opacity-20" />
      </div>

      {/* Perforation line */}
      <div className="absolute top-4 left-0 right-0 h-[1px] border-t border-dashed border-gray-400" />

      {/* Content area with dot grid */}
      <div className={cn(
        "pt-8 px-6 pb-6 min-h-[400px]",
        "bg-[radial-gradient(circle,_#B9D2DC_1px,_transparent_1px)_0_0]",
        "bg-[size:2.175rem_2.175rem]",
      )}>
        <div className="pl-16">
          {children}
        </div>
      </div>
    </div>
  );
}