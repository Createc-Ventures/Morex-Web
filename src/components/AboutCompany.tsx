import React from 'react';

const AboutCompany: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-10 p-3 bg-[#F5F5F5]">

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-900" style={{ fontFamily: "'Times New Roman', Times, serif" }}>ABOUT COMPANY</h2>
        <p className="text-gray-700 leading-relaxed"style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        Morex Asset Management is a registered Exempt Market Dealer (EMD) specializing in providing qualified investors with exclusive access
         to private investment opportunities. We are the distribution arm of the Morex Group, focused on raising capital for Morex Capital, 
         a leading Canadian Mortgage Investment Corporation (MIC) specializing in high-quality, income-generating residential mortgages.
        </p>
        <a
          href="/aboutus"
          className="text-yellow-600 font-bold uppercase tracking-wide hover:text-[#1e3a8a] transition duration-300"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Learn More About Us →
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
        <div className="rounded-lg overflow-hidden ">
          <img
            src="public\assets\images\2people.png" // Update to your correct path
            alt="Two Businessmen Discussing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
