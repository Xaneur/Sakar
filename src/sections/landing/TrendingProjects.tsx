import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { trendingProjects, TrendingProject } from '../../data/trending-projects';

interface ProjectCardProps {
  id: number;
  title: string;
  location: string;
  image: string;
  rank: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, location, image, rank }) => {
  return (
    <Link 
      href={`/projects/${id}`} 
      className="group relative block w-full h-full overflow-hidden rounded-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-8 h-8 bg-red-600 text-white flex items-center justify-center text-sm font-bold">
          {rank}
        </div>
      </div>
      <div className="bg-[#262626] p-4">
        <h3 className="text-white text-lg font-medium truncate">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{location}</p>
      </div>
    </Link>
  );
};

const TrendingProjects: React.FC = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-12 sm:py-16 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">Top 10 Trending Projects This Week</h2>
          <Link href="/projects/trending" className="text-red-500 hover:underline">
            See All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {trendingProjects.map((project: TrendingProject) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects;
