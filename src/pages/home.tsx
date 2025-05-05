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
        "MICs offer a powerful way to grow your wealth with regular monthly income. MICs offer a secure and effective way to grow your wealth through consistent, monthly returns backed by real estate. As an investor, you gain access to a professionally managed pool of diversified mortgage assets, tailored to deliver strong performance and dependable income. You can also hold your MIC investment within RRSPs, TFSAs, or RESPs to take advantage of valuable tax benefits. With a focus on transparency, security, and long-term growth, MICs are a smart choice for building a stable financial future.",
    },
    {
      title: "For Borrowers",
      content:
        "MICs offer a flexible and personalized path to home financing. Whether you're self-employed, new to Canada, or simply looking for a mortgage that fits your unique situation, MICs provide clear, tailored solutions that make it easier to move forward. With quicker approvals, responsive support, and a team that works with you one-on-one, MICs help turn your goals into reality. It's mortgage lending made more accessible—designed around you, not a checklist.",
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
        <VideoMaskSection  />
          {/* Navigation */}
          

          {/* Logo */}
          <img
            className="absolute w-[336px] h-[143px] top-[30px] left-0"
            alt="Logo"
            src="assets/logo/logo.png"
          />

          {/* Hero Content */}
          <div className="absolute w-[673px] h-[209px] top-[558px] left-[29px] bg-[#d9d9d980] rounded-[30px] backdrop-blur-[5px]">
            <h1 className="absolute w-[638px] top-4 left-[18px] font-serif font-bold text-5xl" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              <span className="text-white">CANADA'S PREMIER </span>
              <span className="text-[#012c51]">MORTGAGE INVESTMENT </span>
              <span className="text-white">CORPORATION</span>
              <div className="font-bold text-white text-base mt-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>

            YOUR TRUSTED PARTNER IN HOME FINANCING
          </div>
            </h1>
            
          </div>

          

          <a href="#start">
            <Button className="absolute w-52 h-12 top-[792px] left-[1055px] bg-[#cdb989] rounded-[30px] font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-base hover:text-[#cdb989] ">
              START YOUR JOURNEY
            </Button>
          </a>

          {/* CTA Card */}
          <Card className="absolute w-[285px] h-[276px] top-[480px] left-[965px] bg-[#012c51] rounded-[30px] border-none">
            <CardContent className="p-7">
              <div className="flex items-start mb-4" >
                <h3 className="w-[193px] font-['Segoe_UI-Bold',Helvetica] font-bold text-[#cdb989] text-base" >
                  DISCOVER MORE WITH MOREX CAPITAL
                </h3>
                <img className="w-12 h-[49px]" alt="Image" src="assets/logo/Morex Cap.png" />
              </div>

              <p className="font-['Segoe_UI-Regular',Helvetica] text-white text-base mb-4" >
                Ready for mortgage solutions built around you? Learn how Morex
                Capital can help you move forward with confidence.
              </p>

              <div className="flex justify-center ">
              <a href="https://morexcapital.com/">
              <Button className="w-[123px] h-[42px] mb-5 bg-[#cdb989] rounded-[30px] font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-base hover:text-[#cdb989] ">
                LEARN MORE
              </Button>

              </a>
              </div>
            </CardContent>
          </Card>
        

        {/* Tagline Section */}
        <section id="start" className="flex flex-col md:flex-row mt-20 px-7 gap-8 ">
          <h2 className="font-['Mate_SC-Regular',Helvetica] font-normal text-[#012c51] text-5xl max-w-[783px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            WITH YEARS OF INDUSTRY EXPERIENCE AND A CUSTOMER-FIRST APPROACH,
            WE'VE HELPED THOUSANDS ACHIEVE THEIR DREAM.
          </h2>
          <img
            className="ml-auto w-[81px] h-[87px]"
            alt="Whatsapp image"
            src="assets/logo/single.png"
          />
        </section>

        {/* Featured Image */}
        <section className="mt-20 flex justify-center">
          <img
            className="w-full max-w-[1096px] h-auto"
            alt="Modern architecture"
            src="assets/images/house.png"
          />
        </section>

        {/* Second Tagline Section */}
        <h2 className="mt-10 font-normal text-[#012c51] text-5xl text-left md:text-right font-serif">
              REAL HELP FROM REAL PEOPLE <br></br>WHO'VE GOT YOUR BACK.
            </h2>
        <section className="flex flex-col md:flex-row mt-20 px-7 gap-8">
          <img
            className="w-full md:w-[670px] h-auto"
            alt="Whatsapp image"
            src="assets/images/Person.png"
          />

          <div className="flex flex-col justify-end">
            

            <p className="font-['Mate_SC-Regular',Helvetica] font-normal text-[#012c51] text-[28px] mt-8 text-left md:text-right" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              PROVIDING EXPERT SUPPORT AND PERSONALIZED LOAN OPTIONS TO GUIDE
              YOU TOWARD SMART, CONFIDENT HOMEOWNERSHIP DECISIONS.
            </p>
          </div>
        </section>

        {/* About Company Section */}
        <AboutCompany />

        {/* What Is MIC Section */}
        <section className="mt-20 relative w-full">
          <Card className="w-full max-w-[1216px] h-[490px] bg-[#cdb989] shadow-[0px_4px_4px_#00000040] border-none mx-auto">
            <CardContent className="flex flex-col md:flex-row p-0">
              <img
                className="w-[490px] h-[490px] object-cover"
                alt="Colin meg"
                src="assets/images/mic.png"
              />

              <div className="p-8 flex flex-col justify-center">
                <h2 className="font-serif font-normal text-[#012c51] text-5xl mb-6" >
                  What Is Mic?
                </h2>

                <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#012c51] text-base" >
                  A MIC (Mortgage Investment Corporation) is a Canadian company
                  that connects investors with borrowers. It pools funds from
                  individuals looking to earn strong, steady returns and lends
                  that money to people who need flexible mortgage solutions.
                  <br />
                  <br />
                  Whether you're self-employed, new to Canada, or don't meet the
                  strict requirements of traditional banks, MICs provide a real
                  opportunity. With faster approvals and personalized lending
                  options, they offer an alternative that's more accessible and
                  responsive.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Is MIC Better Section */}
        <section className="mt-20 px-7">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-[228px] h-[229px] bg-[#012c51] shadow-[-8px_8px_10px_#00000040] flex items-end p-7">
              <h2 className=" font-normal text-[#cdb989] text-[28px] font-serif" >
                Why Is
                <br />
                mic Better?
              </h2>
            </div>

            {micBenefitsData.map((benefit, index) => (
              <Card
                key={index}
                className="flex-1 h-[387px] bg-neutral-100 shadow-[-8px_8px_10px_#00000040] border-none"
              >
                <CardContent className="p-7">
                  <h3 className="font-serif font-normal text-[#cdb989] text-[28px] mb-6" >
                    {benefit.title}
                  </h3>
                  <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#012c51] text-base" >
                    {benefit.content}
                  </p>
                </CardContent>
              </Card>
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

          <Card className="absolute w-[594px] h-[326px] top-[302px] left-[27px] bg-[#00000080] rounded-[30px] backdrop-blur-[7.5px] border-none">
            <CardContent className="p-7">
              <h2 className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#cdb989] text-[28px] mb-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
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
                <Button className="h-[65px] flex-1 bg-[#cdb989] rounded-[15px] font-['Libre_Bodoni-Regular',Helvetica] text-[#012c51] hover:text-[#cdb989] text-[28px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  Learn More
                </Button>

                <Button className="w-[113px] h-[65px] bg-[#cdb989] rounded-[15px] flex items-center justify-center">
                <ArrowUpRight className="text-blue-900 w-5 h-5 hover:[#cdb989]" />
                </Button>
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
      <h2 className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#cdb989] text-[28px] mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        Exploring MICs and GICs
      </h2>
      <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base" >
        GICs and MICs are both popular ways to grow your savings, but
        they work a little differently. A GIC (Guaranteed Investment
        Certificate) gives you a fixed return over time and protects
        your original money, making it a very safe choice. However,
        the returns are usually lower. A MIC (Mortgage Investment
        Corporation) pools money from investors and lends it out as
        mortgages, offering the chance to earn higher monthly income.
        While MICs involve a little more risk than GICs, they are
        backed by real estate and can be a great option if you want
        better growth. Choosing between them depends on what you feel
        comfortable with and what you want to achieve with your money.
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
          <h3 className="text-center font-normal text-[#cdb989] text-[24px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            MICs and GICs: Different Paths to Growth
          </h3>
        </CardContent>
      </Card>

      {/* First Image */}
      <img 
        src="assets/images/pic.png"
        alt="Living room" 
        className="w-[267px] h-56 object-cover rounded-[30px]" 
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
        <h3 className=" font-normal text-[#012c51] text-5xl text-center mt-10 font-serif">
        OUR PERFORMANCE OVER THE YEARS
      </h3>
        <Graph1 />

        {/* Performance Chart Section */}

        {/* Fund KPIs Section */}
        <section className="mt-20 px-7">
          <h2 className=" font-normal text-[#012c51] text-5xl text-center mb-4 font-serif  " >
            Fund Kpis
          </h2>

          <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base text-center mb-12 max-w-[1152px] mx-auto" >
            Fund Kpis For A Mic (mortgage Investment Corporation) Track
            Performance Through Key Metrics Like Annual Returns, Loan-to-value
            Ratios, Default Rates, And Monthly Distributions. These Indicators
            Help Investors Assess The Fund's Stability, Income Potential, And
            Overall Health.
          </p>

          

        </section>
        <Kipscards />
              
        {/* Alternative Investments Section */}
        <AlternativeInvestments />

        {/* Latest Blogs Section */}
        <section className="mt-20 px-7">
        <a
              href="/Blog & Article"
              className="font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-base text-center underline"
            >
              View All
            </a>
            <Blogcard/>

          
            
          
        </section>

        {/* Contact Section */}
        <Footer/>
      </div>
      
    </div>
    
  );
}

