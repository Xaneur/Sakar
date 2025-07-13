'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryImage, galleryImages } from '@/data/gallery';

const ProjectGallery = () => {

  const [activeTab, setActiveTab] = React.useState<'photos' | 'videos'>('photos');

  return (
    <section className="w-full bg-black">
      <div className="max-w-[1440px] mx-auto px-16 py-20">
        <div className="flex flex-col gap-8 w-full">
          {/* Header */}
          <div className="flex justify-between items-center w-full relative z-10">
            <h2 className="text-2xl font-medium text-white font-['Bricolage_Grotesque']">
              Gallery
            </h2>
            
            <div className="flex gap-4">
              <button 
                className={`px-4 py-2 ${activeTab === 'photos' ? 'text-white border-b-2 border-white' : 'text-white/50'}`}
                onClick={() => setActiveTab('photos')}
              >
                <span className="text-lg font-normal">Photos</span>
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'videos' ? 'text-white border-b-2 border-white' : 'text-white/50'}`}
                onClick={() => setActiveTab('videos')}
              >
                <span className="text-lg font-normal">Videos</span>
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image) => (
                <div key={image.id} className="relative h-48 rounded overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4 hover:bg-black/50 transition-colors">
                    <span className="text-white font-medium">{image.category}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient overlay for scroll effect */}
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
