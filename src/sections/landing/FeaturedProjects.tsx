'use client';

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { featuredProjects } from '@/data/featured-projects';

/**
 * Configuration for different project status types in the featured projects section.
 * Maps status keys to their display labels and corresponding CSS classes.
 */
const statusConfig = {
  'new-launch': {
    label: 'New Launch',
    className: 'bg-white text-black',
  },
  'rera-approved': {
    label: 'RERA Approved',
    className: 'bg-white text-black',
  },
  'ready-to-move': {
    label: 'Ready to Move',
    className: 'bg-white text-black',
  },
};

/**
 * A card component that displays information about a featured project.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {typeof featuredProjects[0]} props.project - The project data to display
 * @returns {JSX.Element} The rendered ProjectCard component
 * 
 * @example
 * ```tsx
 * <ProjectCard project={featuredProjects[0]} />
 * ```
 */
const ProjectCard = ({ project }: { project: typeof featuredProjects[0] }) => {
  const status = statusConfig[project.status];
  
  return (
    <div className="flex-none w-[420px] h-[308px] bg-[#0A0A0A] rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-[180px] bg-gray-800">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        )}
        
        {/* Status Badge */}
        <div className="absolute left-4 bottom-4">
          <span className={`px-2 py-1 text-xs font-medium rounded ${status.className}`}>
            {status.label}
          </span>
        </div>
      </div>
      
      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-white text-lg font-medium leading-7 tracking-wide">
          {project.title}
        </h3>
        
        <div className="flex items-center mt-1 text-[#E0E0E0] text-sm">
          <FaMapMarkerAlt className="w-4 h-4 text-[#9CA3AF] mr-1" />
          <span>{project.location}</span>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm bg-white/10 text-white px-2 py-1 rounded-md">
            {project.price}
          </span>
          <span className="text-sm text-[#E0E0E0]">
            {project.bhk}
          </span>
        </div>
        
        <div className="mt-2 text-sm text-[#E0E0E0]">
          {project.type}
        </div>
      </div>
    </div>
  );
};

/**
 * A component that displays a horizontal scrolling list of featured real estate projects.
 * 
 * @component
 * @returns {JSX.Element} The rendered FeaturedProjects section
 * 
 * @example
 * ```tsx
 * <FeaturedProjects />
 * ```
 * 
 * @description
 * This component displays a horizontally scrollable list of featured projects with:
 * - Project images
 * - Status badges
 * - Location information
 * - Pricing
 * - Property type and BHK configuration
 */
const FeaturedProjects = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-10 px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-white font-['Bricolage_Grotesque'] tracking-wide">
            Featured Projects
          </h2>
          <button 
            className="flex items-center text-white text-sm font-['Bricolage_Grotesque'] hover:opacity-80 transition-opacity underline"
            onClick={() => console.log('See all projects clicked')}
          >
            See All
          </button>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 overflow-x-auto pb-6 px-16 -mx-16" 
               style={{
                 scrollbarWidth: 'none',
                 msOverflowStyle: 'none',
                 paddingRight: 'calc(112px + 4rem)', // Account for gradient width + container padding
               }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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

export default FeaturedProjects;
