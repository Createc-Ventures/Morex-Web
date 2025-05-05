import React from "react";

const ThreeColumnInvestment: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 py-14 items-start">
      {/* Column 1: Text Content (span 2 columns) */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-3xl  text-[#1f365c] leading-snug font-serif " >
          How Non-Traditional Assets Like Private Mortgage Investments Enhance
          Diversification, Income, and Risk-Adjusted Returns
        </h2>
        <p className="text-gray-700 text-base leading-relaxed" >
          In the dynamic financial landscape of today, alternative investments
          have become a crucial element of a modern, well-diversified portfolio.
          Among these alternatives, private mortgage investments—such as those
          offered through Mortgage Investment Corporations (MICs)—have garnered
          significant attention for their capacity to provide steady income,
          enhance portfolio diversification, and improve overall risk-adjusted
          returns.
        </p>
        <h3 className="text-3xl  text-[#1f365c] font-serif">
          Why Consider Alternative Investments?
        </h3>
        <p className="text-gray-700 text-base leading-relaxed" >
          Portfolios that consist solely of stocks and bonds may be more
          susceptible to volatility and market fluctuations. In contrast,
          alternative investments offer new sources of return and diverse risk
          exposures that can enhance traditional asset classes. These
          non-traditional assets often behave differently in various market
          conditions, helping to stabilize overall portfolio performance during
          periods of public market turbulence.
        </p>
      </div>

      {/* Column 2: Tall Image */}
      <div className="lg:col-span-1 rounded-2xl overflow-hidden h-full">
        <img
          src="assets/images/Insight1.jpg"
          alt="Main investment document"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Column 3: Small image + text card */}
      <div className="lg:col-span-1 flex flex-col gap-6 h-full">
        {/* Top Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="assets/images/Insight2.jpg"
            alt="Chart"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Box */}
        <div className="bg-[#1f365c] text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg h-full">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold font-serif text-center">
              The Role of Alternative Investments in a Modern Portfolio
            </h3>
            <p className="text-lg leading-relaxed text-center text-[#cdb989]" >
              How non-traditional assets like private mortgage investments
              enhance diversification, income, and risk-adjusted returns.
            </p>
          </div>
          <button className="bg-[#cdb989] text-[#1f365c] font-semibold px-4 py-2 rounded mt-4 w-max text-center">
            READ ARTICLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnInvestment;
