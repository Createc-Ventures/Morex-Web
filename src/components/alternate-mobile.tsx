import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from 'lucide-react';


const MobileAltInvestments = () => {
  return (
    <div className="bg-white px-4 py-6 space-y-6">
      <div>
        <h2 className="text-[14px] font-serif font-bold text-gray-800">
          ALTERNATIVE INVESTMENTS
        </h2>
        <p className="text-[14px] text-gray-600 mt-2">
          Expanding Your Investment Choices: Discover Opportunities Beyond
          Traditional Paths. Take Your Portfolio Further By Exploring
          Alternative Investments Like MICs, Offering New Ways To Grow Your
          Wealth, Diversify Your Holdings, And Build A More Resilient Financial
          Future.
        </p>
      </div>

{/* TFSA Card */}
<div className="bg-[#F5E7D3] p-4 rounded-xl shadow-md space-y-2">
  <h3 className="font-semibold text-[14px] text-[#1f2937]">
    TFSA (Tax-Free Savings Account)
  </h3>
  <p className="text-sm text-gray-700">
    Expanding Your Investment Choices: Discover Opportunities Beyond
    Traditional Paths. Take your portfolio further by exploring
    alternative investments like MICs, offering new ways to grow your
    wealth, diversify your holdings, and build a more resilient financial
    future.
  </p>
  <div className="flex justify-end">
    <a href="/learn#tfsa">
      <div className="bg-[#093E6B] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
        <MoveRight className="w-4 h-4" />
      </div>
    </a>
  </div>
</div>

{/* RESP Card */}
<div className="bg-[#F2EAD3] p-4 rounded-xl shadow-md space-y-2">
  <h3 className="font-semibold text-[14px] text-[#1f2937]">
    RESP (Registered Education Savings Plan)
  </h3>
  <p className="text-[14px] text-gray-700">
    A Registered Education Savings Plan (RESP) is a
    specialized investment account that helps
    families save for a child's post-secondary
    education. Contributions grow tax-deferred,
    and the government provides additional grants
    to boost savings.
  </p>
  <div className="flex justify-end">
    <a href="/learn#resp">
      <div className="bg-[#093E6B] text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
        <MoveRight className="w-4 h-4" />
      </div>
    </a>
  </div>
</div>


      {/* RRSP Card */}
      <div className="bg-[#093E6B] p-4 rounded-xl shadow-md space-y-2 text-white">
        <h3 className="font-semibold text-[14px]">
          RRSP (Registered Retirement Savings Plan)
        </h3>
        <p className="text-[14px] text-white">
          An RRSP is a special savings account that helps you save money for
          retirement. The money you put in is tax-deductible, which means it can
          lower the amount of tax you pay today. Plus, your savings grow
          tax-free until you take the money out, usually when you retire.
        </p>
        <a href="/learn#rrsp">
        <Button className="bg-white text-[#093E6B] mt-2">Learn More</Button>
        </a>
      </div>
    </div>
  );
};

export default MobileAltInvestments;
