import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MICInfoCardMobile = () => {
  return (
    <Card className="w-full max-w-sm mx-auto bg-[#d1bc8e] shadow-md rounded-xl overflow-hidden p-4">
      {/* Image Section */}
      <img
        src="public\assets\images\mic.png" // Replace with actual image path
        alt="Living room interior"
        className="w-full h-60 object-cover"
      />

      {/* Text Content Section */}
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#012c51]">
          What is a MIC?
        </h2>
        <p className="text-[#1f2937] text-sm leading-relaxed">
          A MIC (Mortgage Investment Corporation) is a Canadian company that connects investors with borrowers. It pools funds from individuals looking to earn strong, steady returns and lends that money to people who need flexible mortgage solutions.
        </p>
        <p className="text-[#1f2937] text-sm leading-relaxed">
          Whether you're self-employed, new to Canada, or don't meet the strict requirements of traditional banks, MICs provide a real opportunity. With faster approvals and personalized lending options, they offer an alternative that's more accessible and responsive.
        </p>
      </CardContent>
    </Card>
  );
};

export default MICInfoCardMobile;
