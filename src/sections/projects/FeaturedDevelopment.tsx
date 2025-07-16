import React from 'react';
import Image from 'next/image';

const FeaturedDevelopment = () => {
  return (
    <section className="w-full bg-black px-16 py-20">
      <div className=" mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-2xl font-medium text-white font-['Bricolage_Grotesque']">
            Featured Development
          </h2>
          <p className="text-[#F3F3F3] text-lg font-light leading-relaxed max-w-[1312px]">
            PASS provides essential programs and services for adults with developmental disabilities, 
            but their social media presence didn't reflect their full impact. They needed to communicate 
            their mission, showcase their programs, and engage with the community more effectively.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex gap-6 w-full h-[420px]">
          {/* Left Image */}
          <div className="relative w-[60%] h-full rounded-lg overflow-hidden">
            <Image
              src="/images/development-1.jpg"
              alt="Development showcase 1"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Image */}
          <div className="relative w-[40%] h-full rounded-lg overflow-hidden">
            <Image
              src="/images/development-2.jpg"
              alt="Development showcase 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopment;
