import React from 'react';
import { FaMapMarkerAlt, FaPoundSign, FaBed, FaSearch, FaChevronDown } from 'react-icons/fa';
import { heroData } from '@/data/hero';

/**
 * Maps icon names to their corresponding React components.
 * 
 * @param {string} icon - The name of the icon to retrieve
 * @returns {JSX.Element | null} The corresponding icon component or null if not found
 */
const getInfoIcon = (icon: string) => {
  const iconMap = {
    location: <FaMapMarkerAlt className="text-white w-4 h-4" />,
    price: <FaPoundSign className="text-white w-4 h-4" />,
    bedroom: <FaBed className="text-white w-4 h-4" />,
    search: <FaSearch className="text-[#9CA3AF] w-4 h-4" />,
    dropdown: <FaChevronDown className="text-[#9CA3AF] w-3 h-3" />,
  };
  return iconMap[icon as keyof typeof iconMap] || null;
};

/**
 * Hero component that displays the main banner section of the landing page.
 * 
 * @component
 * @returns {JSX.Element} The rendered Hero component
 * 
 * @example
 * ```tsx
 * <Hero />
 * ```
 * 
 * @description
 * This component displays a full-width hero section with:
 * - Background image with gradient overlay
 * - Main heading with customizable text
 * - Information chips with icons
 * - Call-to-action buttons
 * - Search filters for property search
 */
const Hero = () => {
  const { 
    badge, 
    title, 
    infoChips, 
    ctaButtons, 
    searchFilters, 
    filterChips,
    backgroundImage 
  } = heroData;

  return (
    <section className="relative w-full h-[720px]">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), 
                         linear-gradient(360deg, #1A1A1A -1.25%, rgba(26, 26, 26, 0.02) 41.94%), 
                         url(${backgroundImage})`,
          borderRadius: '0px',
        }}
      />
      
      <div className="relative z-10 flex flex-col justify-between h-full px-4 md:px-8 lg:px-16 pt-20 md:pt-32 pb-8 md:pb-16">
        {/* Main Content */}
        <div className="flex flex-col gap-4">
          {/* Top Project Badge */}
          {badge && (
            <div className="flex items-center justify-center w-fit bg-[#E50914] rounded-full px-4 py-1">
              <span className="text-white text-xs font-semibold leading-5">
                {badge}
              </span>
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.1] md:leading-[60px] font-['General_Sans'] w-full md:w-3/4">
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {/* Info Chips */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4">
            {infoChips.map((chip, index) => (
              <div key={index} className="flex items-center gap-2">
                {getInfoIcon(chip.icon)}
                <span className="text-[#F7F7F7] text-sm md:text-lg leading-6 tracking-[0.03em] font-['Bricolage_Grotesque']">
                  {chip.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mt-6">
            {ctaButtons.map((button, index) => (
              <button
                key={index}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium font-['Bricolage_Grotesque'] text-sm md:text-base leading-6 ${
                  button.variant === 'primary'
                    ? 'bg-[#E50914] text-white'
                    : 'bg-white/20 backdrop-blur-md text-white'
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>

        {/* Search Filters */}
        <div className="w-full max-w-[1312px] mx-auto mt-8 md:mt-0">
          <div className="flex flex-wrap gap-3 md:gap-4">
            {searchFilters.map((filter) => (
              <div key={filter.id} className="relative flex-1 min-w-[200px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {getInfoIcon(filter.icon)}
                </div>
                {filter.type === 'select' ? (
                  <>
                    <select 
                      className="w-full h-12 pl-10 pr-10 bg-[#333333] text-white rounded-lg appearance-none font-['Bricolage_Grotesque'] text-sm focus:outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>{filter.placeholder}</option>
                      {filter.options?.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      {getInfoIcon('dropdown')}
                    </div>
                  </>
                ) : (
                  <input
                    type={filter.type}
                    className="w-full h-12 pl-10 pr-4 bg-[#333333] text-white rounded-lg font-['Bricolage_Grotesque'] text-sm placeholder-[#9CA3AF] focus:outline-none"
                    placeholder={filter.placeholder}
                  />
                )}
              </div>
            ))}

            {/* Search Button */}
            <button className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 text-white rounded-lg bg-[#E50914] font-['Bricolage_Grotesque'] text-sm font-medium leading-5 whitespace-nowrap">
              <FaSearch className="w-4 h-4" />
              Search
            </button>
          </div>

          {/* Filter Chips */}
          {filterChips && filterChips.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {filterChips.map((chip) => (
                <button
                  key={chip.id}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-colors ${
                    chip.active
                      ? 'bg-white text-[#0A0A0A]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;