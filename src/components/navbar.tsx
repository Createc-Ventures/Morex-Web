import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ startPosition = 'default' }) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseClass =
    'fixed z-50 transition-all duration-500 ease-in-out bg-white shadow-[0px_4px_4px_2px_#00000040] px-6';

  const scrolledClass =
    'top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] rounded-[40px]';

  const defaultStartClass =
    'top-6 left-[65%] transform -translate-x-[60%] w-[800px] h-[68px] rounded-[30px]';

  const customStartClass =
    'top-6 left-1/2 transform -translate-x-1/2 w-[800px] h-[60px] rounded-[30px]';

  const insightItems = [
    {
      title: 'What is an Exempt Market Dealer (EMD)?',
      desc: 'Access high-potential private investments beyond traditional markets.',
    },
    {
      title: 'What is an RRSP?',
      desc: 'Grow your investments tax-deferred for retirement.',
    },
    {
      title: 'What is a Mortgage Investment Corporation (MIC)?',
      desc: 'Exposure to real estate through secured lending and regular income streams.',
    },
    {
      title: 'What is a TFSA?',
      desc: 'Invest and withdraw tax-free with a TFSA.',
    },
    {
      title: 'What is an RESP?',
      desc: 'Fund education with government grants and tax-deferred growth.',
    },
    {
      title: 'What is an ETF?',
      desc: 'Flexible, diversified investment vehicles that trade like stocks.',
    },
    {
      title: 'ETF vs Mutual Fund?',
      desc: 'Understand key differences to make informed decisions.',
    },
    {
      title: 'Non-Registered Account?',
      desc: 'Discover flexible accounts with liquidity and alternative assets.',
    },
  ];

  return (
    <header
      className={`${baseClass} ${
        scrolled
          ? scrolledClass
          : startPosition === 'custom'
          ? customStartClass
          : defaultStartClass
      }`}
    >
      <div
        className="flex items-center justify-between w-full h-full relative"
        onMouseLeave={() => setShowDropdown(false)}
      >
        {scrolled && (
          <div className="flex-shrink-0">
            <img
              src="/assets/logo/single.png"
              alt="Logo"
              className="h-10 w-10 transition-all duration-500 ease-in-out"
            />
          </div>
        )}

        {/* Centered Nav Items */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-8 transition-all duration-500">
          {['HOME', 'INVEST', 'INSIGHT', 'ABOUT US'].map((item, i) => {
            let href = '#';
            if (item === 'HOME') href = '/';
            else if (item === 'ABOUT US') href = '/aboutus';
            const isInsight = item === 'INSIGHT';

            return (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => isInsight && setShowDropdown(true)}
              >
                <Link
                  to={href}
                  className="text-blue-900 hover:text-[#D4B968] font-bold transition-colors duration-300"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Contact Button */}
        <div className="flex-shrink-0 ml-auto">
          <Link
            to="/contactus"
            className="bg-blue-900 text-[#D4B968] px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors duration-300"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            CONTACT
          </Link>
        </div>

        {/* DROPDOWN - RENDERED OUTSIDE NAV LINKS */}
        {showDropdown && (
          <div className="absolute top-full mt-[15px] left-1/2 transform -translate-x-1/2 w-[800px] bg-white shadow-xl rounded-[30px] py-6 px-8 z-50 transition-all duration-300">
            <h3 className="text-[#D4B968] font-bold mb-4 text-sm tracking-widest">
              LEARN OVERVIEW →
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Explore essential investment tools and strategies to expand your financial expertise.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-4">
              {insightItems.map((item, index) => (
                <Link
                  to="#"
                  key={index}
                  className="group flex flex-col border border-gray-200 p-4 rounded-xl hover:bg-[#F9F9F9] transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-blue-900 font-bold text-sm group-hover:text-[#D4B968]">
                      {item.title}
                    </h4>
                    <span className="text-blue-900 group-hover:text-[#D4B968]">→</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
