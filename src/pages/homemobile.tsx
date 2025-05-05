import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import VideoMaskSectionMobile from "@/components/VideoMaskSectionMobile";
import Grapgh1 from "@/components/graph1";
import Kipscards from "@/components/kipscards";
import Blogcard from "@/components/Blogcar";
import Footer from "@/components/footer";

function HeroSection() {
  return (
    <section className="relative bg-white w-full">
      {/* Top-right icon */}
      <div className="absolute top-4 right-4 z-50">
        <img src="assets/logo/logo.png" alt="Menu Icon" className=" h-6" />
      </div>

      <VideoMaskSectionMobile />
      <div className="p-4 absolute top-[675px] left-1 bg-[#d9d9d980] rounded-lg backdrop-blur-[5px] w-[210px] font-bold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <span className="text-white">Canada's</span>
        <span className="text-[#012c51]"> Premier Mortgage</span>
        <span className="text-white"> Investment Corporation</span>
        <div className="text-white text-xs mt-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          YOUR TRUSTED PARTNER IN HOME FINANCING
        </div>
      </div>

      <Button className="absolute w-[70px] h-[50px] top-[790px] left-[287px] bg-[#cdb989] rounded-lg p-0">
        <span className="text-[#012c51] text-[10px] font-bold text-center">
          START YOUR<br /> JOURNEY
        </span>
      </Button>

      <Card className="absolute w-[140px] h-[140px] top-[45px] left-[210px] bg-[#012c51] rounded-lg border-0">
        <CardContent className="p-2">
          <div className="w-28 h-[23px]">
            <div className="absolute w-[104px] text-[#cdb989] text-[8px] font-bold">
              DISCOVER MORE WITH MOREX CAPITAL
            </div>
            <img
              className="absolute w-[22px] h-[22px] top-[10px] left-[100px] object-cover"
              alt="Logo"
              src="assets/logo/Morex Cap.png"
            />
          </div>
          <p className="mt-5 text-white text-[8px]">
            Ready for mortgage solutions built around you? Learn how Morex
            Capital can help you move forward with confidence.
          </p>
        </CardContent>
        <CardFooter className="p-0 flex justify-center">
          <Button className="w-[65px] h-[19px] bg-[#cdb989] rounded-[30px] p-0">
            <span className="text-[#012c51] text-[8px] font-bold">
              LEARN MORE
            </span>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

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
    <div className="bg-white w-full overflow-hidden">
      <Navbar />
      <HeroSection />

      {/* Experience Section */}
      <section className="p-4 space-y-2 text-[#012c51] text-xs" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <p className="text-right">REAL HELP FROM REAL PEOPLE WHO'VE GOT YOUR BACK.</p>
        <img src="assets/images/house.png" alt="" />
        <p>
          WITH YEARS OF INDUSTRY EXPERIENCE AND A CUSTOMER-FIRST APPROACH, WE'VE HELPED THOUSANDS ACHIEVE THEIR DREAM.
        </p>
        <img src="assets/images/Person.png" alt="" />
        <p className="text-right">
          PROVIDING EXPERT SUPPORT AND PERSONALIZED LOAN OPTIONS TO GUIDE YOU TOWARD SMART, CONFIDENT HOMEOWNERSHIP DECISIONS.
        </p>
      </section>

      <section className="p-4">
 
  
        <Card className="bg-neutral-100">
          <CardContent className="p-4">
            <img src="public\assets\images\aboutusmob.jpg" alt="About Company" className="w-full mb-2 rounded" />
            <h3 className="text-[#012c51] font-semibold text-sm">ABOUT COMPANY</h3>
            <p className="text-[#012c51] text-xs mt-1">
            Morex Asset Management is a registered Exempt Market Dealer (EMD) specializing in providing 
            qualified investors with exclusive access to private investment opportunities. We are the distribution 
            arm of the Morex Group, focused on raising capital for Morex Capital, a leading Canadian Mortgage Investment 
            Corporation (MIC) specializing in high-quality, income-generating residential mortgages.
            </p>
            <a href="#" className="text-[#cdb989] text-xs underline mt-2 inline-block">
              LEARN MORE ABOUT US →
            </a>
          </CardContent>
        </Card>
      </section>

      

      {/* Why Is MIC Better Section */}
      <section className="p-4 relative">
        <div className="absolute -left-2 top-2 bg-[#012c51] rounded-xl px-3 py-2 shadow-md">
          <span className="text-[#cdb989] text-[10px] font-bold">Why Is<br />MIC Better?</span>
        </div>
        <div className="space-y-4 pl-20">
          <Card className="bg-[#f9f9f9] rounded-xl shadow-md">
            <CardContent className="p-4">
              <h4 className="text-[#cdb989] text-xs font-bold mb-2">For Investors</h4>
              <p className="text-[#012c51] text-[10px]">
                MICs offer a powerful way to grow your wealth with regular monthly income. MICs offer a secure and effective way to grow your wealth through consistent, monthly returns backed by real estate. As an investor, you gain access to a professionally managed pool of diversified mortgage assets, tailored to deliver strong performance and dependable income. You can also hold your MIC investment within RRSPs, TFSAs, or RESPs to take advantage of valuable tax benefits. With a focus on transparency, security, and long-term growth, MICs are a smart choice for building a stable financial future.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f9f9f9] rounded-xl shadow-md">
            <CardContent className="p-4">
              <h4 className="text-[#cdb989] text-xs font-bold mb-2">For Investors</h4>
              <p className="text-[#012c51] text-[10px]">
                MICs offer a flexible and personalized path to home financing. Whether you're self-employed, new to Canada, or simply looking for a mortgage that fits your unique situation, MICs provide clear, tailored solutions that make it easier to move forward. With quicker approvals, responsive support, and a team that works with you one-on-one, MICs help turn your goals into reality. It’s mortgage lending made more accessible —designed around you, not a checklist.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EMD Section */}
      <section className="p-4">
        <Card className="bg-[#012c51] text-white">
          <CardContent className="p-4">
            <h3 className="text-[#cdb989] text-sm">Exempt Market Dealer</h3>
            <p className="text-xs">
              As a registered Exempt Market Dealer (EMD), MOREX offers investors exclusive access...
            </p>
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

      {/* Fund KPIs Section */}
      <section className="p-4">
        <h3 className="text-[#012c51] text-sm font-semibold mb-2">Fund KPIs</h3>
        <p className="text-xs text-center mb-4">
          Fund KPIs for a MIC track performance through key metrics like annual returns...
        </p>
        <Kipscards />
      </section>

      {/* Blog Section */}
      <section className="p-4">
        <h3 className="text-[#cdb989] text-sm font-semibold">Latest Blogs and Newsletter</h3>
        <a href="/Blog & Article" className="text-[#012c51] text-xs underline font-bold">
          View All
        </a>
        <Blogcard />
      </section>
      <Footer />
    </div>
  );
}
