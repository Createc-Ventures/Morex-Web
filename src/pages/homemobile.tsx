import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import VideoMaskSectionMobile from "@/components/VideoMaskSectionMobile";
import Grapgh1 from "@/components/graph1";
import Kipscards from "@/components/kipscards";
import Blogcard from "@/components/Blogcar";
import Footer from "@/components/footer";
import Mic from "@/components/mic-mobile";
import AlternativeInvestmentsSection from "@/components/alternate-mobile";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Top-right icon */}
      <div className="absolute top-4 right-4 z-50">
        <img src="assets/logo/logo.png" alt="Menu Icon" className="h-6" />
      </div>

      <div className="z-0">
        <VideoMaskSectionMobile />
      </div>

        <div
            className=" font-serif absolute top-[750px] left-4 z-20 bg-[#d9d9d980] rounded-lg backdrop-blur-[5px] w-[210px] p-2 font-bold text-xs space-y-1">
            <span className="text-white block">Accelerating Wealth </span>
            <span className="text-[#012c51] block">Through </span>
            <span className="text-white">Mortgage Investing </span>
            <div className="text-[#012c51] text-[10px]">
                YOUR TRUSTED PARTNER IN HOME FINANCING
            </div>
        </div>
        <a href="#start">
            <Button className="  absolute top-[790px] right-[5px] w-[70px] h-[50px] bg-[#cdb989] rounded-lg z-20 p-0">
        <span className="text-[#012c51] text-[10px] font-bold text-center leading-tight href">
          START YOUR<br />JOURNEY
        </span>
      </Button>
      </a>
      <Card className="absolute top-[45px] right-[15px] w-[140px] h-[140px] bg-[#012c51] rounded-lg border-none z-30">
        <CardContent className="p-2">
          <div className="w-28 h-[23px]">
            <div className="text-[#cdb989] text-[8px] font-bold">
              DISCOVER MORE WITH MOREX CAPITAL
            </div>
            <img
              className="w-[22px] h-[22px] mt-2"
              alt="Logo"
              src="assets/logo/Morex Cap.png"
            />
          </div>
          <p id="house" className="mt-5 text-white text-[8px]">
            Ready for mortgage solutions built around you? Learn how Morex
            Capital can help you move forward with confidence.
          </p>
        </CardContent>
        <CardFooter className="p-0 flex justify-center">
          <Button className="w-[65px] h-[19px] bg-[#cdb989] rounded-[30px] p-0 text-[8px] font-bold text-[#012c51]">
            LEARN MORE
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default function LandingPhone(): JSX.Element {
  const blogPosts = [
    {
      title: "Lorem ipsum dolor",
      subtitle: "Lorem ipsum dolor",
      readTime: "10 min Read",
    },
    {
      title: "Lorem ipsum dolor",
      subtitle: "Lorem ipsum dolor",
      readTime: "6 min Read",
    },
  ];

  return (
    <div className="flex flex-col bg-white w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Experience Section */}
      <section id="start" className="flex flex-col space-y-4 p-4 text-[#012c51] text-xs" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <p className="text-right">REAL HELP FROM REAL PEOPLE WHO'VE GOT YOUR BACK.</p>
        <img src="assets/images/house.png" alt="house" />
        <p>WITH YEARS OF INDUSTRY EXPERIENCE AND A CUSTOMER-FIRST APPROACH, WE'VE HELPED THOUSANDS ACHIEVE THEIR DREAM.</p>
        <img src="assets/images/Person.png" alt="person" />
        <p className="text-right">PROVIDING EXPERT SUPPORT AND PERSONALIZED LOAN OPTIONS TO GUIDE YOU TOWARD SMART, CONFIDENT HOMEOWNERSHIP DECISIONS.</p>
      </section>

      {/* About Section */}
      <section className="p-4">
        <Card className="bg-neutral-100">
          <CardContent className="p-4">
            <img src="assets/images/aboutusmob.jpg" alt="About Company" className="w-full mb-2 rounded" />
            <h3 className="text-[#012c51] font-semibold text-sm">ABOUT COMPANY</h3>
            <p className="text-[#012c51] text-xs mt-1">
            Morex Asset Management is a registered Exempt Market Dealer (EMD) 
            specializing in providing qualified investors with exclusive access to 
            private investment opportunities. We are the distribution arm of the Morex
             Group, focused on raising capital for Morex Capital, a leading Canadian Mortgage
              Investment Corporation (MIC) specializing in high-quality, income-generating residential mortgages.
            </p>
            <a href="/aboutus" className="text-[#cdb989] text-xs underline mt-2 inline-block">LEARN MORE ABOUT US →</a>
          </CardContent>
        </Card>
      </section>
      <Mic/>
      {/* Why MIC */}
      <section className="p-4 relative">
        <div className="absolute -left-2 top-2 bg-[#012c51] rounded-xl px-3 py-2 shadow-md z-10 ml-5">
          <span className="text-[#cdb989] text-[10px] font-bold">Why Is<br />MIC Better?</span>
        </div>
        <div className="flex flex-col space-y-4 pl-20">
          {["For Investors", "For Borrowers"].map((title, idx) => (
            <Card key={idx} className="bg-[#f9f9f9] rounded-xl shadow-md">
              <CardContent className="p-4">
                <h4 className="text-[#cdb989] text-xs font-bold mb-2">{title}</h4>
                <p className="text-[#012c51] text-[10px]">
                  {title === "For Investors" ?
                    "MICs offer a powerful way to grow your wealth with regular monthly income. MICs offer a secure and effective way to grow your wealth through consistent, monthly returns backed by real estate. As an investor, you gain access to a professionally managed pool of diversified mortgage assets, tailored to deliver strong performance and dependable income. You can also hold your MIC investment within RRSPs, TFSAs, or RESPs to take advantage of valuable tax benefits. With a focus on transparency, security, and long-term growth, MICs are a smart choice for building a stable financial future" :
                    "MICs offer a flexible and personalized path to home financing. Whether you're self-employed, new to Canada, or simply looking for a mortgage that fits your unique situation, MICs provide clear, tailored solutions that make it easier to move forward. With quicker approvals, responsive support, and a team that works with you one-on-one, MICs help turn your goals into reality. It's mortgage lending made more accessible—designed around you, not a checklist."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* EMD Section */}
      <section className="p-4">
        <Card className="bg-[#012c51] text-white">
          <CardContent className="p-4">
            <h3 className="text-[#cdb989] text-sm">Exempt Market Dealer</h3>
            <p className="text-xs">As a registered Exempt Market Dealer (EMD), MOREX offers investors exclusive access to private investment opportunities that are not available on public markets. Our EMD status ensures that all investments are fully compliant with regulatory standards, providing transparency, investor protection, and suitability for your financial goals. Ready to learn more about how EMDs work and how they can benefit your portfolio?</p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button className="bg-[#cdb989] text-[#012c51] text-xs rounded">Learn More</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Performance Section */}
      <section className="p-4">
        <Grapgh1 />
        <h3 className="text-[#012c51] text-sm font-semibold mb-2">OUR PERFORMANCE OVER THE YEARS</h3>
        <div className="bg-neutral-100 p-4 text-center text-xs">
          <p>Annualized Yield, February 1 2012 – March 31, 2024. Target Yield Is 8.75% Per Annum.</p>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="p-4">
        <h3 className="text-[#012c51] text-sm font-semibold mb-2">Fund KPIs</h3>
        <p className="text-xs text-center mb-4">Fund KPIs for a MIC track performance through key metrics...</p>
        <Kipscards />
      </section>
      <section className="p-4">
        <AlternativeInvestmentsSection />
      </section>    
      {/* Blog Section */}
      <section className="p-4">
        <h3 className="text-[#cdb989] text-sm font-semibold">Latest Blogs and Newsletter</h3>
        <a href="/Blog & Article" className="text-[#012c51] text-xs underline font-bold">View All</a>
        <Blogcard />
      </section>

      <Footer />
    </div>
  );
}
