import VideoMaskSection from "@/components/VideoMaskSection"; // Adjust the path if needed
import { ArrowUpRight } from 'lucide-react'; // optional if you want the same style arrow
import Kipscards from "@/components/kipscards";
import { Link, useNavigate } from 'react-router-dom';
import Blogcard from "@/components/Blogcar";
import Graph from "@/components/graph";
import Graph1 from "@/components/graph1";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutCompany from "@/components/AboutCompany";
import AlternativeInvestments from "@/components/Alternate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";

export default function Homepage() {
  // Navigation items

  // Why MIC is better data
  const micBenefitsData = [
    {
      title: "For Investors",
      content:
        "MICs oﬀer investors a compelling opportunity to enhance their financial portfolios with steady\n" +
          "monthly earnings. They provide a reliable and eﬃcient way to grow your wealth through\n" +
          "consistent, monthly returns backed by real estate investments. As an investor, you benefit from a\n" +
          "professionally managed collection of diverse mortgage assets, designed to deliver robust\n" +
          "performance and dependable income. Additionally, you can include your MIC investment in\n" +
          "RRSPs, TFSAs, or RESPs to enjoy significant tax advantages. MICs are a smart choice for building a\n" +
          "stable financial future, with a focus on transparency, security, and long-term growth.",
      buttonText: "INVEST",
      buttonLink: "/Invest",
    },
    {
      title: "For Borrowers",
      content:
        "Mortgage Investment Corporations (MICs) provide borrowers with a flexible and customized\n" +
          "approach to home financing. Whether individuals are self-employed, new to Canada, or seeking\n" +
          "a mortgage that aligns with their specific circumstances, MICs oﬀer clear and tailored solutions\n" +
          "that facilitate the progression of their financial objectives. With expedited approvals, responsive\n" +
          "support, and a team committed to personalized collaboration, MICs assist in transforming\n" +
          "aspirations into reality. This approach to mortgage lending is designed to be more accessible,\n" +
          "focusing on the individual rather than a standardized checklist.",
      buttonText: "APPLY NOW",
      buttonLink: "https://morexcapital.com/",
    },
  ];

  // Fund KPIs data
  const fundKpisData = [
    {
      title: "Annual Return Percentage",
      description:
        "Shows the percentage of profit the fund has generated for investors over a year—reflecting overall performance.",
    },
    {
      title: "Fund under management",
      description:
        "Fund Under Management refers to the total capital currently invested in the MIC. It reflects the fund's scale, investor trust, and the value of mortgage assets being managed.",
    },
    {
      title: "Year of Inception",
      description:
        "Year of Inception indicates when the MIC was established. It highlights the fund's experience, track record, and longevity in the mortgage investment space.",
    },
  ];

  // Blog posts data
  const blogPostsData = [
    {
      title: "Lorem ipsum dolor",
      author: "Lorem ipsum dolor",
      readTime: "10 min Read",
    },
    {
      title: "Lorem ipsum dolor",
      author: "Lorem ipsum dolor",
      readTime: "7 min Read",
    },
    {
      title: "Lorem ipsum dolor",
      author: "Lorem ipsum dolor",
      readTime: "5 min Read",
    },
  ];

  // Years for performance chart
  const performanceYears = ["2015", "2017", "2019", "2021", "2023"];
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1280px] relative">
        {/* Hero Section */}
        <Navbar/>
        <VideoMaskSection/>
        {/* Navigation */}


        {/* Logo */}
        <img
            className="absolute w-[336px] h-[143px] top-[30px] left-0"
            alt="Logo"
            src="assets/logo/logo.png"
        />

        {/* Hero Content */}
        <div
            className="absolute w-[673px] h-[209px] top-[558px] left-[29px] bg-[#d9d9d980] rounded-[30px] backdrop-blur-[5px]">
          <h1 className="absolute w-[638px] top-4 left-[18px] font-serif font-bold text-5xl"
              style={{fontFamily: "'Times New Roman', Times, serif"}}>
            <span className="text-white block">Accelerating Wealth </span>
            <span className="text-[#012c51] block">Through </span>
            <span className="text-white">Mortgage Investing </span>
            <div className="font-bold text-base mt-4 text-[#012c51]"
                 style={{fontFamily: "'Times New Roman', Times, serif"}}>

              ONE OF CANADA’S TOP-PERFORMING MIC FUNDS.
            </div>
          </h1>

        </div>


        <a href="#start">
          <Button
              className="absolute w-52 h-12 top-[792px] left-[1055px] bg-[#cdb989] rounded-[30px] font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-base hover:text-[#cdb989] ">
            START YOUR JOURNEY
          </Button>
        </a>

        {/* CTA Card */}
        <Card className="absolute w-[285px] h-[276px] top-[480px] left-[965px] bg-[#012c51] rounded-[30px] border-none">
          <CardContent className="p-7">
            <div className="flex items-start mb-4">
              <h3 className="w-[193px] font-['Segoe_UI-Bold',Helvetica] font-bold text-[#cdb989] text-base">
                DISCOVER MORE WITH MOREX CAPITAL
              </h3>
              <img className="w-12 h-[49px]" alt="Image" src="assets/logo/Morex Cap.png"/>
            </div>

            <p className="font-['Segoe_UI-Regular',Helvetica] text-white text-base mb-4">
              Ready for mortgage solutions built around you? Learn how Morex
              Capital can help you move forward with confidence.
            </p>

            <div className="flex justify-center ">
              <a href="https://morexcapital.com/">
                <Button
                    className="w-[123px] h-[42px] mb-5 bg-[#cdb989] rounded-[30px] font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-base hover:text-[#cdb989] ">
                  LEARN MORE
                </Button>

              </a>
            </div>
          </CardContent>
        </Card>


        {/* Tagline Section */}
        <section id="start" className="flex flex-col md:flex-row mt-20 px-7 gap-8 ">
          <h2 className="font-['Mate_SC-Regular',Helvetica] font-normal text-[#012c51] text-xl max-w-[783px]"
              style={{fontFamily: "'Times New Roman', Times, serif"}}>
            Our mortgage investment strategies are particularly well-suited for high-net-worth investors
            seeking to diversify beyond traditional asset classes and enhance portfolio performance. Oﬀering
            consistent income and low correlation to public markets, private mortgage investments serve as
            a reliable anchor of stability in a well-constructed portfolio.
          </h2>

        </section>

        {/* Featured Image */}
        <section className="mt-20 flex justify-center">
          <img
              className="w-auto max-w-[1096px] h-auto"
              alt="Modern architecture"
              src="assets/images/house.png"
          />
        </section>

        {/* Second Tagline Section */}
        <h2 className="mt-10 font-normal text-[#012c51] text-5xl text-left md:text-right font-serif">
          ONE OF CANADA'S FASTEST-GROWING<br></br> NON-BANK LENDERS.
        </h2>
        <section className="flex flex-col md:flex-row mt-20 px-7 gap-8">
          <img
              className="w-full md:w-[670px] h-auto"
              alt="Whatsapp image"
              src="assets/images/Person.png"
          />

          <div className="flex flex-col justify-end">


            <p className="font-['Mate_SC-Regular',Helvetica] font-normal text-[#012c51] text-[28px] mt-8 text-left md:text-right"
               style={{fontFamily: "'Times New Roman', Times, serif"}}>
              “We deliver expert guidance and tailored investment ideas designed to help investors
              generate stable income and build truly diversified, resilient portfolios.”
            </p>
          </div>
        </section>

        {/* About Company Section */}
        <AboutCompany/>

        {/* What Is MIC Section */}
        <section className="mt-20 relative w-full">
          <Card
              className="w-full max-w-[1216px] h-[490px] bg-[#cdb989] shadow-[0px_4px_4px_#00000040] border-none mx-auto">
            <CardContent className="flex flex-col md:flex-row p-0">
              <img
                  className="w-[490px] h-[490px] object-cover"
                  alt="Colin meg"
                  src="assets/images/mic.png"
              />

              <div className="p-8 flex flex-col justify-center">
                <h2 className="font-serif font-normal text-[#012c51] text-5xl mb-6">
                  What is a Mortgage Investment Corporation (MIC)?
                </h2>

                <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#012c51] text-base">
                  A Mortgage Investment Corporation (MIC) is a pooled investment vehicle that lends money,
                  primarily through residential mortgages secured by real estate. Investors in a MIC earn income
                  through the interest paid on these loans, typically receiving regular monthly distributions. MICs
                  oﬀer an attractive way to access the real estate market without owning physical property,
                  providing both diversification and a steady stream of income.
                </p>
                <a href="/learn#mic">
                  <Button
                      className="h-[45px] w-[250px] flex-1 bg-[#012c51] rounded-[15px]  text-[#cdb989] hover:text-[#cdb989] text-[18px] font-serif mt-10 ease-in">
                    Learn More
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Is MIC Better Section */}
        <section className="mt-20 px-7">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Static Title Card */}
            <div className="w-[228px] h-[229px] bg-[#012c51] shadow-[-8px_8px_10px_#00000040] flex items-end p-7">
              <h2 className="font-normal text-[#cdb989] text-[28px] font-serif">
                Why Choose
                <br/>
                MICs?
              </h2>
            </div>

            {/* Dynamic Info Cards */}
            {micBenefitsData.map((benefit, index) => (
                <div
                    key={index}
                    className="flex-1 bg-neutral-100 rounded-xl shadow-[-8px_8px_10px_#00000040] p-7 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-[#cdb989] text-[28px] font-serif font-normal mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-[#012c51] text-base font-['Segoe_UI-Regular',Helvetica]">
                      {benefit.content}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a href={benefit.buttonLink}>
                      <Button
                          className="w-full sm:w-[180px] h-[45px] bg-[#012c51] rounded-[12px] text-[#cdb989] font-serif text-[16px]">
                        {benefit.buttonText}
                      </Button>
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Exempt Market Dealer Section */}
        <section
            className="mt-20 relative w-full h-[656px] bg-cover bg-center"
            style={{
              backgroundImage:
                  "url(/assets/images/exemptmarketdealer.png)",
            }}
        >

          <Card
              className="absolute w-[594px] h-[326px] top-[302px] left-[27px] bg-[#00000080] rounded-[30px] backdrop-blur-[7.5px] border-none">
            <CardContent className="p-7">
              <h2 className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#cdb989] text-[28px] mb-4"
                  style={{fontFamily: "'Times New Roman', Times, serif"}}>
                Exempt Market Dealer
              </h2>

              <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-white text-base mb-4">
                As a registered Exempt Market Dealer (EMD), MOREX offers
                investors exclusive access to private investment opportunities
                that are not available on public markets. Our EMD status ensures
                that all investments are fully compliant with regulatory
                standards, providing transparency, investor protection, and
                suitability for your financial goals. Ready to learn more about
                how EMDs work and how they can benefit your portfolio?
              </p>

              <div className="flex gap-2">
                <a href="/learn#emd">
                  <Button
                      className="h-[65px] w-[350px] flex-1 bg-[#cdb989] rounded-[15px]  text-[#012c51] hover:text-[#cdb989] text-[28px] font-serif">
                    Learn More
                  </Button>
                </a>

                <a
                    href="/learn#emd"
                    className="w-[113px] h-[65px] bg-[#cdb989] rounded-[15px] flex items-center justify-center group transition-all duration-300 hover:bg-[#012c51]"
                >
                  <ArrowUpRight
                      className="text-[#012c51] group-hover:text-[#cdb989] group-hover:rotate-45 transition-all duration-300 "/>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* MICs and GICs Section */}
        <section className="mt-20 px-7 ml-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Text Card */}
            <Card className="w-full md:w-[587px] bg-neutral-100 rounded-[30px] border-none flex gap-4">
              <CardContent className="p-7 bg-gray-300 h-full rounded-[30px] border-none">
                <h2 className="font-['Libre_Bodoni-Regular',Helvetica] font-bold text-[#012c51] text-[26px] mb-6"
                    style={{fontFamily: "'Times New Roman', Times, serif"}}>
                  Morex MIC Vs. GICs: A Smarter Way to Earn Income
                </h2>
                <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base">
                  When it comes to building wealth, not all income is created equal. Traditional 1-year GIC rates
                  are known for their safety, yet they currently oﬀer an average return of just 3.70%. In contrast,
                  Morex Capital Corporation has consistently delivered annual returns exceeding 7%, currently at
                  9.25%, through a conservative, real estate-backed lending strategy.
                  This approach yields more than twice the income without the daily volatility of the public
                  markets. Investors seeking higher returns without excessive risk may find Morex Capital's
                  strategy appealing. By focusing on secured real estate lending, the company mitigates potential
                  losses while capitalizing on a robust Canadian property market. This balanced approach allows
                  investors to potentially earn significantly more than traditional fixed-income investments, while
                  maintaining a level of security that is not typically associated with higher-yield options.
                </p>
              </CardContent>
            </Card>

            {/* Right Visual Section */}
            <div className="flex flex-col gap-4 items-start">
              {/* Top Row with Two Small Cards */}
              <div className="flex gap-4 items-start">
                {/* Text Card */}
                <Card className="w-[267px] h-56 bg-[#012c51] rounded-[30px] border-none">
                  <CardContent className="p-4 flex items-center justify-center h-full rounded-[30px] border-none">
                    <h3 className="text-center font-normal text-[#cdb989] text-[24px]"
                        style={{fontFamily: "'Times New Roman', Times, serif"}}>
                      Morex MIC vs GICs: Different Paths to Growth
                    </h3>
                  </CardContent>
                </Card>

                {/* First Image */}
                <img
                    src="assets/images/pic.png"
                    alt="Living room"
                    className="w-[285px] h-55 object-cover rounded-[30px]"
                />
              </div>

              {/* Bottom Image */}
              <img
                  src="assets/images/coin.png"
                  alt="Stacked coins"
                  className="w-full h-[230px] object-cover rounded-[30px]"
              />
            </div>
          </div>


        </section>

        {/* Performance Chart Section */}
        <h3 className=" font-normal text-[#012c51] text-5xl text-center mt-14 font-serif">
          OUR PERFORMANCE OVER THE YEARS
        </h3>
        <Graph1/>

        {/* Performance Chart Section */}

        {/* Fund KPIs Section */}
        {/*<section className="mt-20 px-7">*/}
        {/*  <h2 className=" font-normal text-[#012c51] text-5xl text-center mb-4 font-serif  " >*/}
        {/*    Fund KPIs*/}
        {/*  </h2>*/}

        {/*  <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base text-center mb-12 max-w-[1152px] mx-auto" >*/}
        {/*    Fund KPIs For A Mic (Mortgage Investment Corporation) Track*/}
        {/*    Performance Through Key Metrics Like Annual Returns, Loan-to-value*/}
        {/*    Ratios, Mortgages Funded, And Monthly Distributions. These Indicators*/}
        {/*    Help Investors Assess The Fund's Stability, Income Potential, And*/}
        {/*    Overall Health.*/}
        {/*  </p>*/}

        {/*  */}

        {/*</section>*/}
        {/*<Kipscards />*/}

        {/* Alternative Investments Section */}
        <AlternativeInvestments/>

        {/* Latest Blogs Section */}
        {/*<section className="mt-20 px-7">*/}
        {/*<a*/}
        {/*      href="/Blog & Article"*/}
        {/*      className="font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-base text-center underline"*/}
        {/*    >*/}
        {/*      View All*/}
        {/*    </a>*/}
        {/*    <Blogcard/>*/}

        {/*  */}
        {/*    */}
        {/*  */}
        {/*</section>*/}

        {/* Contact Section */}
        <Footer/>
      </div>

    </div>

  );
}

