import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Menu } from "lucide-react";
import FundOverviewCard from "@/components/fundoverview";
import Graph1 from "@/components/graph1";
import Graph2 from "@/components/Graph2";
import Footer from "@/components/footer";
import DonutCard1 from "@/components/DonutCard1";
import DonutCard2 from "@/components/DonutCard2";
import DonutCard3 from "@/components/DonutCard3";
import React from "react";


export default function Invest(): JSX.Element {
  // Years data for the graph
  const years = [
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

  

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[450px] mx-auto  bg-[url(/public/assets/images/InvestHero.jpg)] bg-cover bg-ceter">
          <div className="absolute inset-0 bg-[#000000a6]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl mb-10"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              INVEST
            </h1>
            <p className="font-['Libre_Bodoni-Regular',Helvetica] text-white text-base text-center max-w-md"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Explore exclusive opportunities designed to grow and protect your
              wealth through smart, alternative investments
            </p>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent"
            >
              <ChevronDown className="h-8 w-8 text-[#cdb989]" />
            </Button>
          </div>
        </div>

        {/* Navigation Bar */}
       <Navbar startPosition="custom" />
       

        {/* Fund Overview Section */}
        

        <h2 className="text-center font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#012c51] text-5xl mt-10"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          FUND OVERVIEW
        </h2>
        <FundOverviewCard />

        

        <p className="text-center font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base mt-[40px] mx-auto max-w-[800px]"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          For a detailed overview of our fund's performance, strategy, and
          holdings, download the latest Fund Fact Sheet below.
        </p>

        <div className="flex justify-center mt-[50px]">
            <a href = "https://morexcapital.com/wp-content/uploads/2025/04/Fund-Fact-Sheet-March-2025-Final-MMA.pdf">
                <Button className="w-[430px] h-[72px] bg-[#012c51] rounded-[30px] shadow-[-8px_8px_10px_#00000040] font-normal text-[#cdb989] text-[28px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    Access Fund fact sheet
                </Button>
            </a>
        </div>

        {/* LTV Section */}
        {/*<h3 className="text-center font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#012c51] text-[28px] mt-[135px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>*/}
        {/*  LOW&nbsp;&nbsp;LOAN-TO-VALUE&nbsp;&nbsp;(LTV)*/}
        {/*</h3>*/}

        {/*/!* Graph Section *!/*/}
        
        {/*<Graph2 />*/}
       {/* Donut Charts Section */}
       <div className="flex flex-wrap justify-center gap-8 mt-16">
        <DonutCard1 />
        <DonutCard2 />
        <DonutCard3 />
       </div>
        {/* Yield Section */}

        <p className="text-center font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base mt-[20px]">
          Mortgage Composition as of April, 2025 for Morex Capital Corporation
        </p>
        
        
        {/* Contact Section */}
        <Footer/>
      </div>
    </div>
  );
}
