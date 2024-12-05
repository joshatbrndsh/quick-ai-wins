import React from 'react';

export default function Divider() {
  return (
    <div className="py-8 relative">
      <svg className="w-full h-8 text-[#2B4B6F] opacity-40">
        <path
          d="M0,8 C150,24 300,-8 450,8 C600,24 750,-8 900,8 C1050,24 1200,-8 1350,8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="transform scale-x-110"
        />
      </svg>
    </div>
  );
}