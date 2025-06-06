import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import {ChevronDown, Menu} from "lucide-react";
import React from "react";
import Footer from "@/components/footer";
import Insightmain from "@/components/insightmain";

export default function Insight(): JSX.Element {
  

  // Feature cards data
  const featureCards = [
    {
      title: "Stable, Predictable Income",
      description:
        "Mortgage interest payments are typically distributed monthly, offering a reliable cash flow stream.",
    },
    {
      title: "Collateral-Backed Security",
      description:
        "Investments are secured by real estate assets, providing an additional layer of protection compared to unsecured fixed-income products.",
    },
    {
      title: "Attractive Yields",
      description:
        "Private mortgages often offer higher returns relative to traditional bonds and GICs, especially in low-interest-rate environments.",
    },
  ];

  // Consideration cards data
  const considerationCards = [
    {
      title: "Illiquidity",
      description:
        "Private mortgage investments may have limited liquidity compared to publicly traded securities.",
    },
    {
      title: "Complexity",
      description:
        "Investors should conduct thorough due diligence or work with experienced investment professionals to assess opportunities.",
    },
    {
      title: "Suitability",
      description:
        "Alternative assets should align with an investor's risk tolerance, investment objectives, and time horizon.",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[] relative">
        {/* Hero Section */}
        <div
            className="relative w-full h-[450px] mx- auto bg-[url(/public/assets/images/insighthero.jpg)] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#000000a6]"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl mb-8"
                style={{fontFamily: "'Times New Roman', Times, serif"}}>
              INSIGHT
            </h1>
            <p className="font-['Libre_Bodoni-Regular',Helvetica] text-white text-base text-center max-w-md"
               style={{fontFamily: "'Times New Roman', Times, serif"}}>
              Timely insights to help you navigate the evolving investment
              landscape.
            </p>
          </div>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 bg-transparent"
            >
              <ChevronDown className="h-8 w-8 text-[#cdb989]"/>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 md:px-12 py-16">
          <Insightmain/>
          {/* First Section */}


          {/* The Power of Private Mortgage Investments Section */}
          <div className="mb-16">
            <h2 className="font-serif text-[#012c51] text-3xl text-center mb-6">
            The Power of Private Mortgage Investments
            </h2>
            <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base text-center mb-10 text-1xl" >
              Private mortgage investments, especially those organized through
              professionally managed Mortgage Investment Corporations (MICs),
              provide investors with a chance to engage in the real estate
              lending market without the need to directly own property. By
              investing in a pool of meticulously underwritten, short-term
              residential mortgages, investors can gain benefits from:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="bg-neutral-100 rounded-lg shadow-[-8px_8px_10px_#00000040]"
                >
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-[#cdb989] text-base text-center mb-4" >
                      {card.title}
                    </h3>
                    <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base text-center" >
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="relative w-full h-[445px] mb-16">
            <div className="absolute inset-0 bg-[#000000a6]">
              <img
                className="w-full h-full object-cover mix-blend-overlay"
                alt="Christina"
                src="assets/images/Private.jpg"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-['Libre_Bodoni-Regular',Helvetica] backdrop-blur-[10px] text-white font-bold text-[28px] text-center max-w-4xl px-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                At Morex Asset Management, we specialize in connecting investors to high-quality private market opportunities, helping you build a stronger, more resilient financial future.
              </p>
            </div>
          </div>

          {/* Enhancing Diversification Section */}
          <Card className="bg-neutral-100 rounded-[30px] shadow-[-8px_8px_15px_#00000040] mb-16">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-7">
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    alt="Markus kammermann"
                    src="assets/images/Diversification.jpg"
                  />
                </div>
                <div className="lg:w-1/2 p-7">
                  <h2 className="font-serif text-[#012c51] text-[28px] mb-6" >
                    Enhancing Diversification and Reducing Correlation
                  </h2>
                  <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base" >
                    Adding private mortgage investments to a portfolio may help
                    reduce overall portfolio risk due to their lower correlation
                    with equities and traditional fixed income. This
                    diversification benefit can improve portfolio stability
                    during market downturns, offering investors a valuable
                    source of resilience.
                    <br />
                    <br />
                    Moreover, the short-term nature of many private mortgages
                    provides flexibility to adjust the portfolio in response to
                    changing market dynamics, while maintaining a conservative
                    lending approach through disciplined underwriting and low
                    loan-to-value (LTV) ratios.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Considerations Section */}
          <Card className="bg-neutral-100 rounded-[30px] mb-16">
  <CardContent className="px-4 py-7 sm:px-7">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Side */}
      <div className="lg:w-1/2">
        <h2 className="font-serif text-[#012c51] text-2xl sm:text-4xl mb-6">
          Key Considerations for Investors
        </h2>
        <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base mb-6">
          While alternative investments present compelling advantages,
          it is important to understand their unique characteristics:
        </p>
        <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base">
          Professional advice, a disciplined investment process, and regular
          portfolio monitoring are essential to successfully integrating private
          mortgage investments into a broader strategy.
        </p>
      </div>

      {/* Right Side Cards */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        {considerationCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#cdb989] rounded-[30px_8px_8px_0px] shadow-[-8px_8px_10px_#00000040] p-6"
          >
            <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base">
              <span className="font-bold font-['Segoe_UI-Bold',Helvetica]">
                {card.title}:
              </span>{" "}
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>


          {/* Conclusion Section */}
          <div className="bg-neutral-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img
                  className="w-full h-full object-cover"
                  alt="Imagine buddy"
                  src="assets/images/Conclusion.jpg"
                />
              </div>
              <div className="lg:w-1/2 p-12">
                <h2 className="font-serif text-[#012c51] text-[28px] mb-6">
                  Building Stronger Portfolios with Alternatives
                </h2>
                <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base">
                  Incorporating alternative investments like MICs into a modern
                  portfolio can enhance income generation, improve
                  diversification, and strengthen risk management. For investors
                  seeking greater stability and consistent returns, private
                  mortgage investments represent a prudent addition to
                  traditional portfolios — offering a new dimension of growth
                  and resilience in an increasingly complex market environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Navigation */}
        <Navbar startPosition="custom" />

    
        <Footer />
        
      </div>
    </div>
  );
}
