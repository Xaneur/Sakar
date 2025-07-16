'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the PropertyMap component with SSR disabled
const PropertyMap = dynamic(
  () => import('@/components/maps/PropertyMap'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-[#E8E8E8] rounded-lg flex items-center justify-center">
        <div className="text-black text-lg">Loading map...</div>
      </div>
    )
  }
);

const LocationAdvantages = () => {
  const advantages = [
    {
      icon: (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0C5.1865 0 2.5 2.6865 2.5 6C2.5 9.5 8.5 16 8.5 16C8.5 16 14.5 9.5 14.5 6C14.5 2.6865 11.8135 0 8.5 0ZM8.5 8C7.4395 8 6.5 7.0605 6.5 6C6.5 4.9395 7.4395 4 8.5 4C9.5605 4 10.5 4.9395 10.5 6C10.5 7.0605 9.5605 8 8.5 8Z" fill="#FF4C4C"/>
        </svg>
      ),
      title: 'Educational Institutions',
      description: 'Delhi Public School (2.5 km), Ahmedabad University (5 km)',
      multiLine: true
    },
    {
      icon: (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0C3.8135 0 0 3.8135 0 8.5C0 13.1865 3.8135 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.8135 13.1865 0 8.5 0ZM8.5 15.5C4.6345 15.5 1.5 12.3655 1.5 8.5C1.5 4.6345 4.6345 1.5 8.5 1.5C12.3655 1.5 15.5 4.6345 15.5 8.5C15.5 12.3655 12.3655 15.5 8.5 15.5Z" fill="#FF4C4C"/>
          <path d="M9 4H8V9H12V8H9V4Z" fill="#FF4C4C"/>
        </svg>
      ),
      title: 'Healthcare',
      description: 'Apollo Hospital (3 km), Care Institute (4.2 km)',
      multiLine: false
    },
    {
      icon: (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0C3.8135 0 0 3.8135 0 8.5C0 13.1865 3.8135 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.8135 13.1865 0 8.5 0ZM8.5 15.5C4.6345 15.5 1.5 12.3655 1.5 8.5C1.5 4.6345 4.6345 1.5 8.5 1.5C12.3655 1.5 15.5 4.6345 15.5 8.5C15.5 12.3655 12.3655 15.5 8.5 15.5ZM9 4H8V9H12V8H9V4Z" fill="#FF4C4C"/>
        </svg>
      ),
      title: 'Shopping & Entertainment',
      description: 'Ahmedabad One Mall (6 km), Alpha One Mall (7.5 km)',
      multiLine: true
    },
    {
      icon: (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0L0 8.5L8.5 17L17 8.5L8.5 0ZM8.5 15.5L1.5 8.5L8.5 1.5L15.5 8.5L8.5 15.5Z" fill="#FF4C4C"/>
          <path d="M8.5 4L4 8.5L8.5 13L13 8.5L8.5 4ZM8.5 11.5L6 9H11L8.5 11.5Z" fill="#FF4C4C"/>
        </svg>
      ),
      title: 'Business Hubs',
      description: 'GIFT City (15 km), Ahmedabad CBD (9 km)',
      multiLine: false
    }
  ];

  return (
    <section className="w-full bg-black px-16 py-20">
      <div className=" mx-auto">
        <div className="flex flex-col gap-6 max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-medium text-white font-['Bricolage_Grotesque']">
            Location & Advantages
          </h2>
          
          <div className="flex gap-8">
            {/* Map Section */}
            <div className="relative w-[66%] h-[372px] rounded-lg overflow-hidden">
              <Suspense fallback={
                <div className="absolute inset-0 bg-[#E8E8E8] rounded-lg flex items-center justify-center">
                  <div className="text-black text-lg">Loading map...</div>
                </div>
              }>
                <PropertyMap />
                
                {/* Location card */}
                <div className="absolute bottom-4 right-4 bg-[#565656] rounded-xl p-5 w-[359px] shadow-lg z-10">
                  <div className="flex gap-4">
                    <div className="relative w-[100px] h-[84px] rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gray-400">
                        {/* Property image placeholder */}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">The Skyline Residences</h3>
                      <p className="text-[#F7F7F7] text-sm">Future-ready living with seamless connectivity</p>
                    </div>
                  </div>
                </div>
              </Suspense>
            </div>
            
            {/* Advantages List */}
            <div className="w-[32%] bg-[#0A0A0A] rounded-lg p-8 shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_0px_2px_4px_rgba(255,255,255,0.12)]">
              <h3 className="text-white text-xl font-semibold mb-6">Proximity Highlights</h3>
              <div className="space-y-4">
                {advantages.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-0.5">
                      {item.icon}
                    </div>
                    <div className={item.multiLine ? 'leading-tight' : ''}>
                      <h4 className="text-white text-base font-medium">{item.title}</h4>
                      <p className="text-[#A5A5A5] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantages;
