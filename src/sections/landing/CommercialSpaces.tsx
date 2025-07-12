'use client';

import React from 'react';
import ProjectCard from '@/components/property/ProjectCard';
import { commercialSpaces } from '@/data/commercial-spaces';

/**
 * A component that displays a horizontal scrolling list of commercial properties.
 * 
 * @component
 * @returns {JSX.Element} The rendered CommercialSpaces section
 * 
 * @example
 * ```tsx
 * <CommercialSpaces />
 * ```
 * 
 * @description
 * This component displays a horizontally scrollable list of commercial properties with:
 * - Property images
 * - Status badges
 * - Location information
 * - Pricing
 * - Property size and type
 * - A 'See All' button that can be hooked up to navigate to a full listing page
 */
const CommercialSpaces = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-10 px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-white font-['Bricolage_Grotesque'] tracking-wide">
            Commercial Spaces
          </h2>
          <button 
            className="flex items-center text-white text-sm font-['Bricolage_Grotesque'] hover:opacity-80 transition-opacity underline"
            onClick={() => console.log('See all commercial spaces clicked')}
          >
            See All
          </button>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex space-x-6 overflow-x-auto pb-6 px-16 -mx-16" 
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingRight: 'calc(112px + 4rem)',
            }}
          >
            {commercialSpaces.map((space) => (
              <ProjectCard 
                key={space.id} 
                project={{
                  ...space,
                  bhk: space.size // Map size to bhk for the ProjectCard
                }} 
                className="w-[360px] h-[280px]"
                tagPosition="bottom"
              />
            ))}
          </div>
          
          {/* Gradient overlay for the right side */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{
              background: 'linear-gradient(270deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)',
            }}
          />
        </div>
      </div>
      
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-x-auto {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default CommercialSpaces;
