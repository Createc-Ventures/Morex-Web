import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MICInfoCardMobile = () => {
  return (
    <Card className="w-full max-w-sm mx-auto bg-[#d1bc8e] shadow-md rounded-xl overflow-hidden p-4">
      {/* Image Section */}
      <img
        src="public\assets\images\mic.png" // Replace with actual image path
        alt="Living room interior"
        className="w-full h-60 object-cover rounded-sm"
      />

      {/* Text Content Section */}
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#012c51]">
        What is a Mortgage Investment Corporation (MIC)?
        </h2>
        <p className="text-[#1f2937] text-sm leading-relaxed">
        A Mortgage Investment Corporation (MIC) is a pooled investment vehicle that lends money, primarily through residential mortgages secured by real estate. Investors in a MIC earn income through the interest paid on these loans, typically receiving regular monthly distributions. MICs oﬀer an attractive way to access the real estate market without owning physical property, providing both diversification and a steady stream of income.
        </p>
        <div className="flex justify-center">
  <a href="/learn#mic">
    <Button
      className="h-[45px] w-[150px] flex-1 bg-[#012c51] rounded-[15px] text-[#cdb989] hover:text-[#cdb989] text-[16px] font-serif mt-10 ease-in"
    >
      Learn More
    </Button>
  </a>
</div>

          
      
      </CardContent>
    </Card>
  );
};

export default MICInfoCardMobile;
