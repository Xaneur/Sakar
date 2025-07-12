import React from 'react';
import { FaMapMarkerAlt, FaClock, FaBed, FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')", // replace with actual path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20 text-white">
        <span className="bg-red-600 text-xs font-semibold px-4 py-1 rounded-full mb-4">
          TOP PROJECT IN AHM
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          The Skyline <br /> Residences
        </h1>

        <div className="flex items-center gap-6 text-sm font-medium mt-4">
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg" />
            Shantigram
          </span>
          <span className="flex items-center gap-2">
            <FaClock className="text-lg" />
            ₹1.2M - ₹4.5M
          </span>
          <span className="flex items-center gap-2">
            <FaBed className="text-lg" />
            1–4 Bedroom Apartments
          </span>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-red-600 px-6 py-2 text-white rounded-md font-medium hover:bg-red-700">
            View Project
          </button>
          <button className="bg-white px-6 py-2 text-gray-800 rounded-md font-medium hover:bg-gray-100">
            Request Info
          </button>
        </div>

        {/* Search Filters */}
        <div className="w-full mt-20 flex flex-wrap gap-4 bg-black bg-opacity-40 p-4 rounded-md backdrop-blur-md">
          <input
            className="flex-1 px-4 py-2 rounded-md bg-white text-black placeholder-gray-500"
            placeholder="Location"
          />
          <select className="flex-1 px-4 py-2 rounded-md bg-white text-black">
            <option>Property Type</option>
          </select>
          <select className="flex-1 px-4 py-2 rounded-md bg-white text-black">
            <option>Price Range</option>
          </select>
          <button className="bg-white text-black px-4 py-2 rounded-md flex items-center gap-2">
            <FaSearch />
            Search Properties
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "More Filters",
            "Studio - 5+ BHK",
            "Ready to Move",
            "RERA Approved",
            "New Launch",
          ].map((label, idx) => (
            <span
              key={idx}
              className="px-4 py-1 rounded-full bg-white bg-opacity-20 backdrop-blur-md text-white text-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
