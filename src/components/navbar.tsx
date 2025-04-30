import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-in-out bg-white shadow-[0px_4px_4px_2px_#00000040] px-6
        ${
          scrolled
            ? 'top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] rounded-[40px]'
            : 'top-6 left-[65%] transform -translate-x-[60%] w-[800px] h-[68px] rounded-[30px]'
        }`}
    >
      <div className="flex items-center justify-between w-full h-full relative">
        {/* Logo - only visible when scrolled */}
        {scrolled && (
          <div className="flex-shrink-0">
            <img
              src="public/assets/logo/single.png"
              alt="Logo"
              className="h-10 w-10 transition-all duration-500 ease-in-out"
            />
          </div>
        )}

        {/* Navigation Links - always centered */}
        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-8 transition-all duration-500`}
        >
          {['HOME', 'INVEST', 'INSIGHT', 'ABOUT US'].map((item, i) => (
            <a
              key={i}
              href="#"
              className="text-blue-900 hover:text-[#D4B968] font-bold transition-colors duration-300"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact Button - always far right */}
        <div className="flex-shrink-0 ml-auto">
          <a
            href="#"
            className="bg-blue-900 text-[#D4B968] px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors duration-300"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
}
