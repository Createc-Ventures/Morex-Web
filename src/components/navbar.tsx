import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ startPosition = "default" }) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null); // "learn", "about", null
  const [menuOpen, setMenuOpen] = useState(false); // For mobile hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setDropdown(null); // Close dropdowns on scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const learnItems = [
    {
      title: "What is EMD",
      desc: "Learn how EMDs provide accredited and eligible investors access to high-potential private investments beyond traditional stock and bond markets.",
      link: "/learn#emd",
    },
    {
      title: "What is MIC?",
      desc: "Understand how MICs offer investors exposure to the real estate market through secured mortgage lending, providing regular income streams.",
      link: "/learn#mic",
    },
    {
      title: "What is an RRSP?",
      desc: "Explore how Registered Retirement Savings Plans can grow investments tax-deferred for retirement planning.",
      link: "/learn#rrsp",
    },
    {
      title: "What is a Non-Registered Investment Account?",
      desc: "Learn about flexible investment accounts that provide liquidity and access to alternative assets.",
      link: "/learn#nonreg",
    },
    {
      title: "What is a TFSA?",
      desc: "Discover how Tax-Free Savings Accounts allow investments to grow and be withdrawn without taxation.",
      link: "/learn#tfsa",
    },
    {
      title: "What is a RESP?",
      desc: "Learn how Registered Education Savings Plans can help fund a child's education with government grants and tax-deferred growth.",
      link: "/learn#resp",
    },
    {
      title: "What is an ETF?",
      desc: "Explore Exchange-Traded Funds: diversified, flexible investment vehicles that trade like stocks",
      link: "/learn#etf",
    },
    {
      title: "What is the Difference Between an ETF and a Mutual Fund?",
      desc: "Understand key differences to make more informed portfolio decisions.",
      link: "/learn#etf-vs-mutual",
    },
  ];

  const aboutItems = [
    {
      title: "Meet the Team",
      desc: "Learn about the people behind our mission.",
      link: "/aboutus/team",
    },
    {
      title: "About Us",
      desc: "Explore our vision, values, and journey.",
      link: "/aboutus",
    },
  ];

  const baseClass =
    "fixed z-50 transition-all duration-500 ease-in-out bg-white shadow-[0px_4px_4px_2px_#00000040] px-6";
  const scrolledClass =
    "top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] rounded-[40px]";
  const defaultClass =
    "top-6 left-[65%] transform -translate-x-[60%] w-[800px] h-[68px] rounded-[30px]";
  const customClass =
    "top-6 left-1/2 transform -translate-x-1/2 w-[800px] h-[68px] rounded-[30px]";

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-8 h-8 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Main Navbar (Desktop) */}
      <header
        className={`${baseClass} ${
          scrolled
            ? scrolledClass
            : startPosition === "custom"
            ? customClass
            : defaultClass
        } hidden md:block`}
      >
        <div className="flex items-center justify-between w-full h-full relative">
          {scrolled && (
            <div className="flex-shrink-0">
            <a href="/" aria-label="Home">
              <img
                src="/assets/logo/single.png"
                alt="Logo"
                className="h-10 w-10 transition-all"
              />
            </a>
          </div>
          )}

          <div
            className={`flex space-x-9 transition-all duration-500 ${
              scrolled
                ? "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                : startPosition === "custom"
                ? "mx-auto"
                : "ml-4"
            }`}
          >
            <Link
              to="/"
              className="text-blue-900 hover:text-[#D4B968] font-bold font-serif"
              
            >
              HOME
            </Link>
            <Link
              to="/Invest"
              className="text-blue-900 hover:text-[#D4B968] font-bold font-serif"
              
            >
              INVEST
            </Link>
            <Link
              to="/insights"
              className="text-blue-900 hover:text-[#D4B968] font-bold font-serif"
              
            >
              INSIGHT
            </Link>

            {/* LEARN */}
            <div className="relative group">
              <Link
                to="/learn"
                className="text-blue-900 hover:text-[#D4B968] font-bold cursor-pointer"
                style={{ fontFamily: "Times New Roman, serif" }}
                onMouseEnter={() => setDropdown("learn")}
              >
                LEARN
              </Link>
              {dropdown === "learn" && (
                <div
                  className="fixed left-1/2 transform -translate-x-1/2 w-[800px] top-[68px] mt-4 bg-white shadow-xl rounded-[30px] py-6 px-8 z-50"
                  onMouseEnter={() => setDropdown("learn")}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <h3 className="text-[#D4B968] font-bold mb-4 text-sm tracking-widest">
                    LEARN OVERVIEW →
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Explore essential investment tools and strategies to expand
                    your financial expertise.
                  </p>
                  <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-4">
                    {learnItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        className="flex flex-col border border-gray-200 p-4 rounded-xl hover:bg-[#F9F9F9] hover:border-[#D4B968] transition-all duration-200 group"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-blue-900 font-bold text-sm group-hover:text-[#D4B968] transition-colors duration-200">
                            {item.title}
                          </h4>
                          <span className="text-blue-900 group-hover:translate-x-1 group-hover:text-[#D4B968] transition-transform">
                            →
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <div className="relative group">
              <Link
                to="/aboutus"
                className="text-blue-900 hover:text-[#D4B968] font-bold cursor-pointer"
                style={{ fontFamily: "Times New Roman, serif" }}
                onMouseEnter={() => setDropdown("about")}
              >
                ABOUT US
              </Link>
              {dropdown === "about" && (
                <div
                  className="fixed left-1/2 transform -translate-x-1/2 w-[800px] top-[68px] mt-4 bg-white shadow-xl rounded-[30px] py-6 px-8 z-50"
                  onMouseEnter={() => setDropdown("about")}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <h3 className="text-[#D4B968] font-bold mb-4 text-sm tracking-widest">
                    ABOUT US →
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm ">
                    Discover our mission and the people who bring it to life.
                  </p>
                  <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-4">
                    {aboutItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        className="flex flex-col border border-gray-200 p-4 rounded-xl hover:bg-[#F9F9F9] hover:border-[#D4B968] transition-all duration-200 group"
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="text-blue-900 font-bold text-sm group-hover:text-[#D4B968] transition-colors duration-200">
                            {item.title}
                          </h4>
                          <span className="text-blue-900 group-hover:translate-x-1 group-hover:text-[#D4B968] transition-transform">
                            →
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-shrink-0 ml-auto">
            <Link
              to="/contactus" 
              className="bg-[#002c51] text-[#D4B968] px-6 py-3 rounded-full font-bold hover:bg-[#e7d39f] hover:text-[#002c51] transition "
              
            >
              CONTACT
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 p-6 flex flex-col space-y-4 shadow-lg md:hidden">
          <button
            onClick={toggleMenu}
            className="self-end text-blue-900 text-xl font-bold"
          >
            ✕
          </button>
          <Link to="/" onClick={toggleMenu} className="text-blue-900 font-bold">
            HOME
          </Link>
          <Link
            to="/Invest"
            onClick={toggleMenu}
            className="text-blue-900 font-bold"
          >
            INVEST
          </Link>
          <Link
            to="/insights"
            onClick={toggleMenu}
            className="text-blue-900 font-bold"
          >
            INSIGHT
          </Link>
          <div>
            <h4 className="text-blue-900 font-bold mb-2">LEARN</h4>
            {learnItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={toggleMenu}
                className="block text-sm text-gray-700 mb-1"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="text-blue-900 font-bold mb-2">COMPANY</h4>
            {aboutItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                onClick={toggleMenu}
                className="block text-sm text-gray-700 mb-1"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            to="/contactus"
            onClick={toggleMenu}
            className="mt-4 inline-block bg-[#012c51] text-[#D4B968] px-6 py-2 rounded-full font-bold"
          >
            CONTACT
          </Link>
        </div>
      )}
    </>
  );
}
