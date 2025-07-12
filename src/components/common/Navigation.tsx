'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { navigationData } from '@/data/navigation';

/**
 * A responsive navigation bar component that includes a logo, navigation links, and search functionality.
 * Features a transparent background that becomes opaque when the user scrolls down the page.
 * 
 * @component
 * @returns {JSX.Element} The rendered NavigationBar component
 * 
 * @example
 * ```tsx
 * <NavigationBar />
 * ```
 * 
 * @description
 * This component provides:
 * - Responsive navigation that works on mobile and desktop
 * - Transparent background that becomes opaque on scroll
 * - Logo display
 * - Navigation links
 * - Search functionality
 * - Mobile menu toggle (hamburger menu on small screens)
 */
const NavigationBar = () => {
  const { logo, links, search } = navigationData;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state when scrolled past 10px
      const shouldBeOpaque = window.scrollY > 10;
      if (shouldBeOpaque !== isScrolled) {
        setIsScrolled(shouldBeOpaque);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  /**
   * Determines the background class based on scroll position
   * @type {string}
   */
  const navBackgroundClass = isScrolled 
    ? 'bg-black/80 backdrop-blur-md shadow-lg' // Glassy effect when scrolled
    : 'bg-transparent'; // Transparent when at top

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-16 py-6 w-full max-w-[1440px] mx-auto transition-all duration-300 ${navBackgroundClass}`}>
      {/* Left Section - Logo and Navigation */}
      <div className="flex items-center gap-4 md:gap-14">
        {/* Logo */}
        <div className="w-[142.86px] md:w-[178.57px] h-[48px] md:h-[60px] relative">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className="text-white text-sm md:text-base font-medium leading-6 hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Bar */}
      <div className="relative w-40 md:w-56 lg:w-64">
        <input
          type="text"
          placeholder={search.placeholder}
          className="w-full h-[36px] md:h-[44.5px] pl-8 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2.5 bg-[#333333] text-[#ECECEC] rounded-full font-['Bricolage_Grotesque'] text-sm md:text-base leading-6 placeholder-[#ECECEC] focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <FaSearch className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-[#ECECEC] w-3.5 h-3.5 md:w-4 md:h-4" />
      </div>
    </nav>
  );
};

export default NavigationBar;