'use client';

import React from 'react';
import Image from 'next/image';
import { locationCollections } from '@/data/location-collections';

/**
 * A component that displays a collection of locations with their respective property counts.
 * 
 * @component
 * @returns {JSX.Element} The rendered LocationCollections section
 * 
 * @example
 * ```tsx
 * <LocationCollections />
 * ```
 * 
 * @description
 * This component displays a horizontally scrollable list of locations with:
 * - Location images with gradient overlays
 * - Location titles
 * - Property counts for each location
 * - Interactive hover effects
 * - A 'See All' button that can be hooked up to navigate to a full locations page
 */
const LocationCollections = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-white font-['Bricolage_Grotesque'] tracking-wide">
            Location-wise Collections
          </h2>
          <button 
            className="flex items-center text-white text-sm font-['Bricolage_Grotesque'] hover:opacity-80 transition-opacity underline"
            onClick={() => console.log('See all locations clicked')}
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
            {locationCollections.map((location) => (
              <div 
                key={location.id} 
                className="flex-none w-[310px] h-[240px] bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden relative"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={location.image}
                    alt={location.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
                
                {/* Location Info */}
                <div className="absolute left-4 bottom-4 z-10">
                  <h3 className="text-white text-lg font-medium font-['General_Sans'] tracking-wide">
                    {location.title}
                  </h3>
                  <p className="text-[#E0E0E0] text-sm font-['Bricolage_Grotesque'] mt-1">
                    {location.propertyCount} Properties
                  </p>
                </div>
              </div>
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
        
        /* Custom font faces */
        @font-face {
          font-family: 'Bricolage Grotesque';
          src: url('/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
        
        @font-face {
          font-family: 'General Sans';
          src: url('/fonts/GeneralSans-Variable.ttf') format('truetype');
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </section>
  );
};

export default LocationCollections;
