import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Menu } from "lucide-react";
import FundOverviewCard from "@/components/fundoverview";
import Graph1 from "@/components/graph1";
import Graph2 from "@/components/Graph2";
import React from "react";

export default function Invest(): JSX.Element {
  // Years data for the graph
  const years = [
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
  ];

  

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[] relative min-h-[3173px]">
        {/* Hero Section */}
        <div className="relative w-[] h-[900px] mx-auto  bg-[url(public/assets/images/InvestHero.jpg)] bg-cover bg-[50%_50%] ">
          <div className="absolute w-full h-full top-0 left-0 bg-[#000000a6] " />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl mb-10">
              INVEST
            </h1>
            <p className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-white text-base max-w-[800px]">
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
        

        <h2 className="text-center font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#012c51] text-5xl mt-10">
          FUND OVERVIEW
        </h2>
        <FundOverviewCard />

        

        <p className="text-center font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base mt-[40px] mx-auto max-w-[800px]">
          For a detailed overview of our fund's performance, strategy, and
          holdings, download the latest Fund Fact Sheet below.
        </p>

        <div className="flex justify-center mt-[50px]">
          <Button className="w-[430px] h-[72px] bg-[#012c51] rounded-[30px] shadow-[-8px_8px_10px_#00000040] font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#cdb989] text-[28px]">
            Access Fund fact sheet
          </Button>
        </div>

        {/* LTV Section */}
        <h3 className="text-center font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#012c51] text-[28px] mt-[135px]">
          LOW&nbsp;&nbsp;LOAN-TO-VALUE&nbsp;&nbsp;(LTV)
        </h3>

        {/* Graph Section */}
        <Graph1 />
        <Graph2 />

        {/* Yield Section */}

        <p className="text-center font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base mt-[20px]">
          Annualized Yield, February 1 2012 – March 31, 2024. Target Yield Is
          8.75% Per Annum, Subject To Change.
        </p>
      </div>
    </div>
  );
}
