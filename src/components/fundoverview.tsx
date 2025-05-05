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
    <div className="w-full flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start">
        {/* Image */}
        <img
          src="assets/images/invest1.jpg"
          alt="Investment property"
          className="w-full md:w-[50%] object-cover rounded-t-md md:rounded-none md:rounded-l-md shadow-md"
        />

        {/* Text Box */}
        <Card className="w-full md:w-[50%] bg-[#cdb989] shadow-lg border-none rounded-none md:rounded-r-md">
          <CardContent className="p-6 md:p-10">
            <ul className="list-disc pl-5 space-y-4 text-black text-sm md:text-base font-['Segoe_UI-Regular',Helvetica]">
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
