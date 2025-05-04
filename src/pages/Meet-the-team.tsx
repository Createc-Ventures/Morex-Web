import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamCarousel from "@/components/TeamCarousel";








const Team: React.FC = () => {
  

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[776px] mb-36">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Person climbing mountain at sunset"
              src="/assets/images/meet.jpg"
            />
            <div className="absolute inset-0 bg-[#000000a6]" />
          </div>

          {/* Navigation Bar */}
          <Navbar startPosition="custom" />

          {/* Hero Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h1 className="[font-family:'Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl mb-6"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                MEET THE PEOPLE THAT MAKE IT HAPPEN
            </h1>
            <p className="[font-family:'Libre_Bodoni-Regular',Helvetica] font-normal text-white text-base max-w-xl mx-auto"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Creators of Your Experience
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className=" mb-20 ">
          <div className="flex flex-row gap-12">
            <div className="w-full">
              <TeamCarousel />

            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Team;