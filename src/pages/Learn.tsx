import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Components
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Learnmain from "@/components/learnmain";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Types
interface InvestmentTopic {
  id: string;
  title: string;
  description: string;
  content: string;
}

const investmentTopics: InvestmentTopic[] = [
  {
    id: "emd",
    title: "What is an Exempt Market Dealer (EMD)?",
    description:"Learn how EMDs provide accredited and eligible investors access to high-potential private investments beyond traditional stock and bond markets.",
    content: "An Exempt Market Dealer (EMD) is a licensed entity that connects accredited and qualified investors with private market investment opportunities unavailable through public exchanges. EMDs adhere to strict regulatory standards and provide investors with access to options such as Mortgage Investment Corporations (MICs), private equity, and other alternative assets. At Morex Asset Management, we guide investors through the exempt market with a disciplined, compliant, and client-focused approach. \n\n As an EMD, Morex Asset Management conducts thorough due diligence on investment opportunities before presenting them to clients. We prioritize transparency and education, ensuring our investors understand both the potential benefits and risks associated with exempt market investments. Our team of experienced professionals works closely with clients to align investment choices with their financial goals and risk tolerance. Exempt Market Dealers are registered with securities regulators and must meet strict know-your-client (KYC) and suitability obligations. This ensures that investment opportunities match clients' financial goals, risk tolerance, and investor status. EMDs offer investments like MICs, limited partnerships, and private debt funds—opportunities generally unavailable through banks or traditional brokerages. Working with a trusted EMD allows investors to diversify beyond public markets with the benefit of professional oversight. EMDs play a crucial role in Canada's financial ecosystem by offering alternative investment avenues for both companies and investors. They navigate a regulatory environment that balances access to capital with investor protection, ensuring a vibrant and compliant exempt market sector."
  },
  {
    id: "mic",
    title: "What is a Mortgage Investment Corporation (MIC)?",
    description:
      "Understand how MICs offer investors exposure to the real estate market through secured mortgage lending, providing regular income streams.",
    content:
      "Mortgage Investment Corporation (MIC) is a pooled investment vehicle that lends money, primarily through residential mortgages secured by real estate. Investors in a MIC earn income through the interest paid on these loans, typically receiving regular monthly distributions. MICs offer an attractive way to access the real estate market without owning physical property, providing both diversification and a steady stream of income.\n\n MICs are regulated under Canada’s Income Tax Act, which mandates that all taxable income is distributed to shareholders. Investments are secured by mortgages on real property, often with conservative loan-to-value ratios to prioritize capital preservation. MICs like Morex Capital focus on prime lending regions and maintain short-term loan structures to provide liquidity and risk control. Investors benefit from exposure to the real estate sector without the responsibilities of property ownership or management.",
  },
  {
    id: "non-registered",
    title: "What is a Non-Registered Investment Account?",
    description:
      "Learn about flexible investment accounts that provide liquidity and access to alternative assets.",
    content:
      "A non-registered investment account allows investors to grow wealth without the contribution limits or withdrawal restrictions of registered accounts like RRSPs or TFSAs. While income and gains are taxable annually, non-registered accounts offer maximum flexibility in terms of asset choice, liquidity, and timing of withdrawals. \n\n Non-registered accounts can hold a broad range of investments, including stocks, bonds, ETFs, MICs, and private offerings. They are ideal for investors who have maximized their registered account contributions or seek greater flexibility. Capital gains in a non-registered account are taxed at favorable rates compared to ordinary income, and losses may be used to offset gains for tax planning purposes.",
  },
  {
    id: "rrsp",
    title: "What is an RRSP?",
    description:
      "Explore how Registered Retirement Savings Plans can grow investments tax-deferred for retirement planning.",
    content:
      "A Registered Retirement Savings Plan (RRSP) is a government-registered account that allows Canadians to grow investments on a tax-deferred basis until retirement. Contributions to an RRSP reduce taxable income, and investment earnings within the plan are sheltered from taxes until withdrawn. RRSPs can hold a range of investments, including private offerings like those available through Morex Asset Management, helping investors build wealth efficiently for retirement.\n\n RRSP contributions grow tax-deferred, meaning investors pay no tax on earnings such as interest, dividends, or capital gains as long as the funds remain within the plan. Contributions are subject to annual limits, and unused room can be carried forward. Private investments like MICs can be held within an RRSP if structured appropriately, allowing investors to benefit from both tax deferral and private market exposure within a registered account.",
  },
  {
    id: "tfsa",
    title: "What is a TFSA?",
    description:
      "Discover how Tax-Free Savings Accounts allow investments to grow and be withdrawn without taxation.",
    content:
      "A Tax-Free Savings Account (TFSA) is a flexible investment account that allows Canadians to earn tax-free income and capital gains. Contributions are not tax-deductible, but all growth within the account and withdrawals are completely tax-free. TFSAs can hold a wide range of investments, including private market offerings.\n\n Unlike RRSPs, TFSA contributions do not impact taxable income, making them ideal for short-term savings or long-term growth. Withdrawals can be made at any time without penalties, and amounts withdrawn can be recontributed in future years. Investments held inside a TFSA—including MIC units, mutual funds, ETFs, or GICs—grow completely free of taxation, allowing for powerful compounding over time.",
  },
  {
    id: "resp",
    title: "What is an RESP?",
    description:
      "Learn how Registered Education Savings Plans can help fund a child's education with government grants and tax-deferred growth.",
    content:
      "A Registered Education Savings Plan (RESP) is a specialized investment account designed to help families save for a child's post-secondary education. Contributions grow tax-deferred, and the government provides additional grants to boost savings.\n\n The Canada Education Savings Grant (CESG) matches up to 20% of annual contributions up to a specified limit, increasing the overall savings potential. Investments held within an RESP can include a variety of asset types such as stocks, bonds, ETFs, and certain private investments. When funds are withdrawn for educational purposes, they are typically taxed in the hands of the student, who often pays little or no tax due to low income during schooling years.",
  },
  {
    id: "etf",
    title: "What is an ETF?",
    description:
      "Explore Exchange-Traded Funds: diversified, flexible investment vehicles that trade like stocks.",
    content:
      "An Exchange-Traded Fund (ETF) is an investment fund that holds a diversified basket of securities and trades on major stock exchanges. ETFs combine the diversification of mutual funds with the flexibility of individual stocks.\n\n ETFs are passively or actively managed and cover a wide range of investment themes, from broad market indices to specific sectors or asset classes. They are known for low management fees compared to mutual funds, intraday trading capabilities, and tax efficiency. Investors can use ETFs to gain instant diversification and adjust portfolio exposures quickly and cost-effectively.",
  },
  {
    id: "etf-vs-mutual",
    title: "What is the Difference Between an ETF and a Mutual Fund?",
    description:
      "Understand key differences to make more informed portfolio decisions.",
    content:
      "While both ETFs and mutual funds provide diversified exposure to investments, they differ in structure and trading flexibility. ETFs are traded like stocks throughout the day at market prices, while mutual funds are bought or sold based on the fund’s net asset value at day’s end.\n\n Mutual funds often involve higher management fees and may have minimum investment thresholds, while ETFs generally feature lower fees and greater accessibility. Mutual funds can offer active management strategies that seek to outperform benchmarks, whereas ETFs are commonly used for passive market exposure. Understanding both structures allows investors to tailor their portfolios according to their investment style and cost sensitivity.",
  },
];

const Learn: React.FC = () => {
  const location = useLocation();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);
  // Track open accordion items
  const [openItem, setOpenItem] = React.useState<string | undefined>();
  
  // Simpler, more reliable approach using React state
  useEffect(() => {
    // Clear any existing timeouts
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    const handleAccordionNavigation = () => {
      // If no hash provided, open the first accordion by default
      if (!location.hash) {
        const firstItemId = investmentTopics[0].id;
        setOpenItem(firstItemId);
        return;
      }
      
      // If hash is provided, open the corresponding accordion
      const targetId = location.hash.substring(1); // Remove the # character
      
      // Check if this is a valid accordion item
      const isValidSection = investmentTopics.some(topic => topic.id === targetId);
      
      if (isValidSection) {
        // Set the state to open this accordion item
        setOpenItem(targetId);
        
        // Scroll to the element with retries
        const scrollToTarget = (retries = 0) => {
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Wait a moment for the accordion to open before scrolling
            setTimeout(() => {
              window.scrollTo({
                top: targetElement.offsetTop - 120,
                behavior: "smooth"
              });
            }, 100);
            return true;
          } else if (retries < 5) {
            // Element not found yet, retry after a delay
            scrollTimeout.current = setTimeout(() => {
              scrollToTarget(retries + 1);
            }, 300);
            return false;
          } else {
            // Maximum retries reached
            console.warn(`Could not find element with ID: ${targetId}`);
            return false;
          }
        };
        
        // Start the scrolling process with a slight delay
        scrollTimeout.current = setTimeout(() => {
          scrollToTarget();
        }, 300);
      }
    };
    
    // Call the function
    handleAccordionNavigation();
    
    // Cleanup function
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [location.hash]);

  // Split content into paragraphs
  const splitContent = (content: string): string[] => {
    return content.split("\n\n");
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[776px] mb-36">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Person climbing mountain at sunset"
              src="assets/images/learn.jpg"
            />
            <div className="absolute inset-0 bg-[#000000a6]" />
          </div>

          {/* Navigation Bar */}
          <Navbar startPosition="custom" />

          {/* Hero Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h1 className="font-serif font-bold text-[#cdb989] text-5xl mb-6">
              YOUR INVESTMENT GUIDE
            </h1>
            <p className="font-serif font-normal text-white text-base max-w-xl mx-auto">
              Learn the basics, explore your options, and understand how smart
              investing can work for you.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-7 mb-20 m-10">
          <Learnmain />
          <div className="flex flex-row gap-12">
            <div className="w-full">
              <h3 className="font-serif font-bold text-[#cdb989] text-[28px] mb-6">
                Investment Fundamentals:
              </h3>

              <Accordion 
                type="single" 
                collapsible 
                className="w-full"
                ref={accordionRef}
                value={openItem}
                onValueChange={setOpenItem}
              >
                {investmentTopics.map((topic) => {
                  const paragraphs = splitContent(topic.content);
                  
                  return (
                    <AccordionItem
                      key={topic.id}
                      value={topic.id}
                      id={topic.id}
                      data-value={topic.id}
                      className="mb-4 bg-neutral-100 rounded-lg shadow-[-8px_8px_10px_#00000040] overflow-hidden"
                    >
                      <AccordionTrigger className="px-7 py-4 hover:no-underline">
                        <div className="w-full text-left">
                          <h4 className=" font-bold text-[#012c51] text-base mb-4">
                            {topic.title}
                          </h4>
                          <p className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-base">
                            {topic.description}
                          </p>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-7 py-4">
                        <div className="pl-0 pr-12 ">
                          <p className="[font-family:'Segoe_UI-Semibold',Helvetica] text-black text-base mb-4">
                            {paragraphs[0]}
                          </p>

                          {paragraphs.length > 1 && (
                            <details className="text-[#cdb989] cursor-pointer">
                              <summary className="[font-family:'Segoe_UI-Semibold',Helvetica] text-sm mb-2 list-none outline-none">
                                Read More
                              </summary>
                              <div className="mt-2">
                                <p className="font-serif font-normal text-black text-base">
                                  {paragraphs[1]}
                                </p>
                              </div>
                            </details>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Learn;