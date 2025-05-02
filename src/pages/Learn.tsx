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
    description:
      "Learn how EMDs provide accredited and eligible investors access to high-potential private investments beyond traditional stock and bond markets.",
    content:
      "An Exempt Market Dealer (EMD) is a licensed entity that connects accredited and qualified investors with private market investment opportunities unavailable through public exchanges. EMDs adhere to strict regulatory standards and provide investors with access to options such as Mortgage Investment Corporations (MICs), private equity, and other alternative assets.\n\nEMDs offer investments like MICs, limited partnerships, and private debt funds—opportunities generally unavailable through banks or traditional brokerages.",
  },
  {
    id: "mic",
    title: "What is a Mortgage Investment Corporation (MIC)?",
    description:
      "Understand how MICs offer investors exposure to the real estate market through secured mortgage lending, providing regular income streams.",
    content:
      "MICs pool investor capital and lend it as mortgages primarily on residential properties.\n\nThis allows investors to earn regular income through interest while reducing risk via diversified holdings.",
  },
  {
    id: "non-registered",
    title: "What is a Non-Registered Investment Account?",
    description:
      "Learn about flexible investment accounts that provide liquidity and access to alternative assets.",
    content:
      "These accounts are not tax-sheltered, allowing greater flexibility for withdrawals and investment choices.\n\nThey are ideal for income-focused or short-term goals and can hold alternative investments.",
  },
  {
    id: "rrsp",
    title: "What is an RRSP?",
    description:
      "Explore how Registered Retirement Savings Plans can grow investments tax-deferred for retirement planning.",
    content:
      "RRSPs let you contribute pre-tax income and defer taxes until withdrawal.\n\nInvestments grow tax-free until retirement, when withdrawals are typically taxed at a lower rate.",
  },
  {
    id: "tfsa",
    title: "What is a TFSA?",
    description:
      "Discover how Tax-Free Savings Accounts allow investments to grow and be withdrawn without taxation.",
    content:
      "TFSA contributions are made with after-tax dollars, and growth or withdrawals are not taxed.\n\nIdeal for short or long-term goals with flexibility and tax-free benefits.",
  },
  {
    id: "resp",
    title: "What is an RESP?",
    description:
      "Learn how Registered Education Savings Plans can help fund a child's education with government grants and tax-deferred growth.",
    content:
      "RESPs allow for tax-deferred growth and government grants such as the CESG.\n\nFunds can be used for post-secondary education, with flexible withdrawal rules.",
  },
  {
    id: "etf",
    title: "What is an ETF?",
    description:
      "Explore Exchange-Traded Funds: diversified, flexible investment vehicles that trade like stocks.",
    content:
      "ETFs provide exposure to broad markets or specific sectors with low fees.\n\nThey combine the diversification of mutual funds with the tradability of stocks.",
  },
  {
    id: "etf-vs-mutual",
    title: "What is the Difference Between an ETF and a Mutual Fund?",
    description:
      "Understand key differences to make more informed portfolio decisions.",
    content:
      "ETFs trade on exchanges and are often passively managed, while mutual funds are traded once daily and often actively managed.\n\nETFs usually have lower fees and greater flexibility.",
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
              src="/assets/images/learn.jpg"
            />
            <div className="absolute inset-0 bg-[#000000a6]" />
          </div>

          {/* Navigation Bar */}
          <Navbar startPosition="custom" />

          {/* Hero Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <h1 className="[font-family:'Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl mb-6">
              YOUR INVESTMENT GUIDE
            </h1>
            <p className="[font-family:'Libre_Bodoni-Regular',Helvetica] font-normal text-white text-base max-w-xl mx-auto">
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
              <h3 className="[font-family:'Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-[28px] mb-6">
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
                          <h4 className="[font-family:'Segoe_UI-Semibold',Helvetica] font-bold text-[#012c51] text-base mb-4">
                            {topic.title}
                          </h4>
                          <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-black text-base">
                            {topic.description}
                          </p>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="px-7 py-4">
                        <div className="pl-0 pr-12 max-w-4xl">
                          <p className="[font-family:'Segoe_UI-Regular',Helvetica] text-black text-base mb-4">
                            {paragraphs[0]}
                          </p>

                          {paragraphs.length > 1 && (
                            <details className="text-[#cdb989] cursor-pointer">
                              <summary className="[font-family:'Segoe_UI-Semibold',Helvetica] text-sm mb-2 list-none outline-none">
                                Read More
                              </summary>
                              <div className="mt-2">
                                <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-black text-base">
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