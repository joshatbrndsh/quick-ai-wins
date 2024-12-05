import React from 'react';
import { cn } from '../utils/cn';

interface NotePadPageProps {
  content: string;
  onChange: (content: string) => void;
  pageNumber: number;
}

export default function NotePadPage({ content, onChange, pageNumber }: NotePadPageProps) {
  return (
    <div className="relative bg-[#FFEFA1] rounded-sm shadow-lg transition-transform hover:shadow-xl">
      {/* Binding effect */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#8B4513] to-[#FFEFA1] rounded-t-sm">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B4513] opacity-20" />
      </div>

      {/* Perforation line */}
      <div className="absolute top-4 left-0 right-0 h-[1px] border-t border-dashed border-gray-400" />

      {/* Main content area */}
      <div className="pt-8 px-6 pb-6">
        <textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full min-h-[800px] bg-transparent resize-none",
            "font-mono text-[#000033] leading-[2.175rem]",
            "focus:outline-none",
            "bg-[radial-gradient(circle,_#B9D2DC_1px,_transparent_1px)_0_0]",
            "bg-[size:2.175rem_2.175rem]",
            "border-l-[1px] border-[#3B82F6]",
            "pl-4"
          )}
          style={{
            WebkitTextFillColor: '#000033',
            WebkitBackgroundClip: 'text',
          }}
        />
      </div>

      {/* Page number */}
      <div className="absolute bottom-2 right-4 text-sm text-gray-500">
        Page {pageNumber}
      </div>
    </div>
  );
}