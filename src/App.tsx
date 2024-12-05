import React from 'react';
import Logo from './components/Logo';
import Divider from './components/Divider';
import HeroSection from './components/sections/HeroSection';
import PainPointsSection from './components/sections/PainPointsSection';
import ProcessSection from './components/sections/ProcessSection';
import TransformationSection from './components/sections/TransformationSection';
import SuccessStoriesSection from './components/sections/SuccessStoriesSection';
import ValuePropsSection from './components/sections/ValuePropsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import { bulletJournalPattern } from './utils/backgroundPatterns';
import { scrollToSection } from './utils/scrollToSection';

const BOOKING_URL = 'https://usemotion.com/meet/josh-huston/quickaIwins';

export default function App() {
  return (
    <div className="min-h-screen bg-paper-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-paper-light/80 backdrop-blur-sm z-50 border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => scrollToSection('top')} className="transform hover:scale-105 transition-transform">
              <Logo />
            </button>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-4 sm:px-6 h-10 sm:h-12 rounded-md hover:bg-accent-dark transition-colors font-handwritten text-base sm:text-lg inline-flex items-center touch-manipulation"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-16 sm:pt-20" id="top">
        {/* Blue margin line - hidden on mobile */}
        <div className="hidden lg:block fixed top-0 bottom-0 w-[1px] bg-accent z-10" style={{ left: 'min(1.25in, calc(50vw - 30rem - 1.25in))' }} />

        {/* Content with dot grid */}
        <div 
          className="min-h-screen relative"
          style={bulletJournalPattern.dotGridLarge}
        >
          <div className="max-w-5xl mx-auto">
            <HeroSection />
            <Divider />
            <PainPointsSection />
            <Divider />
            <ProcessSection />
            <Divider />
            <TransformationSection />
            <Divider />
            <SuccessStoriesSection />
            <Divider />
            <ValuePropsSection />
            <Divider />
            <PricingSection />
            <Divider />
            <FAQSection />
            <Divider />
            <CTASection />
          </div>
        </div>
      </main>
    </div>
  );
}