import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Configuration for different project status types.
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
  'prime-location': {
    label: 'Prime Location',
    className: 'bg-white text-black',
  },
  'retail-space': {
    label: 'Retail Space',
    className: 'bg-white text-black',
  },
  'co-working': {
    label: 'Co-Working',
    className: 'bg-white text-black',
  },
  'industrial': {
    label: 'Industrial',
    className: 'bg-white text-black',
  }
};

/**
 * Properties for the ProjectCard component.
 * 
 * @interface ProjectCardProps
 * @property {Object} project - The project data to display
 * @property {string} project.id - Unique identifier for the project
 * @property {string} project.title - Name/title of the project
 * @property {string} project.location - Location of the project
 * @property {string} project.price - Formatted price string (e.g., '₹4.3-8.5 Cr')
 * @property {string} project.type - Type of property (e.g., 'Prime 3 BHK flats')
 * @property {keyof typeof statusConfig} project.status - Project status from predefined config
 * @property {string} project.image - URL or path to the project image
 * @property {string} project.bhk - Number of bedrooms (e.g., '2 BHK', '3 BHK')
 * @property {string} [className] - Additional CSS classes for custom styling
 * @property {'top' | 'bottom'} [tagPosition='top'] - Position of the status tag
 */
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    location: string;
    price: string;
    type: string;
    status: keyof typeof statusConfig;
    image: string;
    bhk: string;
  };
  className?: string;
  tagPosition?: 'top' | 'bottom';
}

/**
 * A card component that displays information about a real estate project.
 * 
 * @component
 * @param {ProjectCardProps} props - The component props
 * @param {Object} props.project - The project data to display
 * @param {string} [props.className=''] - Additional CSS classes for custom styling
 * @param {'top'|'bottom'} [props.tagPosition='top'] - Position of the status tag
 * @returns {JSX.Element} The rendered ProjectCard component
 * 
 * @example
 * ```tsx
 * <ProjectCard 
 *   project={{
 *     id: '1',
 *     title: 'Luxury Apartments',
 *     location: 'Downtown',
 *     price: '$1.2M - $2.5M',
 *     type: 'Luxury Condos',
 *     status: 'new-launch',
 *     image: '/projects/luxury-apt.jpg',
 *     bhk: '3 BHK'
 *   }}
 *   className="custom-class"
 *   tagPosition="bottom"
 * />
 * ```
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  className = '',
  tagPosition = 'top'
}) => {
  const status = statusConfig[project.status] || statusConfig['new-launch'];
  
  return (
    <div className={`flex-none w-[360px] h-[280px] bg-[#0A0A0A] rounded-lg shadow-lg overflow-hidden flex flex-col ${className}`}>
      {/* Image Container */}
      <div className="relative w-full h-[160px] bg-gray-800">
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
        <div className={`absolute left-4 ${tagPosition === 'top' ? 'top-4' : 'bottom-4'}`}>
          <span className={`px-2 py-1 text-xs font-medium rounded ${status.className}`}>
            {status.label}
          </span>
        </div>
      </div>
      
      {/* Details Container */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-white text-lg font-medium leading-7">
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

export default ProjectCard;
