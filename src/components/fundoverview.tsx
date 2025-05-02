import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const fundOverviewPoints = [
    "Morex Capital Corp. is a Mortgage Investment Corporation (MIC) established in 2012 with its head office in Ontario, Canada",
    "Morex Capital Corp. is a non-bank provider of short term first and second mortgages to residential borrowers primarily in the Greater Toronto Area",
    "Focus on capital preservation combined with steady quarterly income distribution to investors",
    "Mortgage terms are 12 months or less; this short duration reduces risk and maximizes borrower turnover and resetting of terms to accommodate for changing market conditions",
    "Proven track record of stable, uncorrelated returns, paid quarterly Investments are eligible for: TFSA, RRSP, LIRA, RRIF",
    "We have a constant stream of mortgage investment opportunities available to our Fund through strategic alliances with Licenced Mortgage Brokers",
  ];

const InvestmentHighlight: React.FC = () => {
  return (
    <div className="w-full h-[650px] flex items-center justify-center">
      {/* Wrapper for image and text box */}
      <div className="relative w-[900px] h-[600px]">
        {/* Image */}
        <img
          src="public/assets/images/invest1.jpg"
          alt="Investment property"
          className="absolute w-[566px] h-[601px] object-cover left-[-60px] top-0"
        />

        {/* Text Box */}
        <Card className="absolute left-[220px] top-[80px] w-[849px] h-[430px] bg-[#cdb989] shadow-[-8px_8px_20px_5px_#00000040] border-none rounded-none z-10">
          <CardContent className="p-10">
            <ul className="list-disc pl-5 space-y-4 text-black text-base font-['Segoe_UI-Regular',Helvetica]">
              {fundOverviewPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentHighlight;
