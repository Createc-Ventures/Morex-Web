import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const InvestmentCards = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 px-2">
        {/* Card 1 */}
        <Card className="w-[280px] sm:w-[300px] md:w-[360px] flex-shrink-0 h-[460px] bg-neutral-100 rounded-[30px] border-none shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <img
              src="assets/images/AnnualReturnPercentage.png"
              alt="Investment Diversification"
              className="w-[180px] h-[180px] mb-5 object-contain"
            />
            <h3 className="font-serif text-[20px] text-[#1f2937] mt-2 mb-3">
              Annual Return Percentage
            </h3>
            <p className="text-sm text-[#4b5563]">
              Diversification spreads investments across different assets to reduce
              risk and enhance potential returns, ensuring a more balanced portfolio.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="w-[280px] sm:w-[300px] md:w-[360px] flex-shrink-0 h-[460px] bg-neutral-100 rounded-[30px] border-none shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <img
              src="assets/images/Fundundermanagement.png"
              alt="Liquidity Access"
              className="w-[180px] h-[180px] mb-5 object-contain"
            />
            <h3 className="font-serif text-[20px] text-[#1f2937] mt-2 mb-3">
              Fund under Management
            </h3>
            <p className="text-sm text-[#4b5563]">
              Liquidity represents how easily investors can access their invested
              capital. A fund’s liquidity level is crucial for flexible financial
              planning and emergency needs.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="w-[280px] sm:w-[300px] md:w-[360px] flex-shrink-0 h-[460px] bg-neutral-100 rounded-[30px] border-none shadow-md hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <img
              src="assets/images/YearofInception.png"
              alt="Risk Management Strategy"
              className="w-[180px] h-[180px] mb-5 object-contain"
            />
            <h3 className="font-serif text-[20px] text-[#1f2937] mt-2 mb-3">
              Year of Inception
            </h3>
            <p className="text-sm text-[#4b5563]">
              Effective risk management identifies, assesses, and mitigates potential
              investment threats, safeguarding returns and preserving investor
              confidence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentCards;
