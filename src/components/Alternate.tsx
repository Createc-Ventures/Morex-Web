// components/AlternativeInvestmentsSection.tsx
import React from "react";
import { MoveUpRight } from "lucide-react";
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AlternativeInvestmentsSection: React.FC = () => {
  return (
    
    <section className="mt-20 px-7">
    <Card className="w-full h-[606px] rounded-[30px] border-none overflow-hidden">
      <CardContent className="p-0 relative">
        <img
          className="w-full h-full object-cover"
          alt="Micheile henderson"
          src="assets/images/leaf.png"
        />

        <div className="absolute inset-0 bg-[#00000080] rounded-[30px]">
          <div className="p-7">
            <h2 className="font-serif font-normal text-white text-5xl">
              ALTERNATE
              <br />
              INVESTMENTS
            </h2>

            <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#cdb989] text-base max-w-[542px] mt-7">
              Expanding Your Investment Choices: Discover Opportunities
              Beyond Traditional Paths. Take Your Portfolio Further By
              Exploring Alternative Investments Like Mics, Offering New
              Ways To Grow Your Wealth, Diversify Your Holdings, And Build
              A More Resilient Financial Future.
            </p>
          </div>

          {/* RSP Card */}
          <div className="absolute top-[38px] right-[130px] w-[469px] h-[233px] bg-[url(/public/assets/mask/subtract-2.svg)] bg-no-repeat">
            <div className="p-7">
              <h3 className="font-serif font-normal text-[#012c51] text-[28px] mb-2">
                RSP (Retirement Savings Plan)
              </h3>

              <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base">
                RSP is a general term for any retirement savings plan.{" "}
                <br />
                In most cases, when people say "RSP," they mean an RRSP.
                It's used to help you save money for <br />
                retirement with tax benefits, but sometimes <br />
                companies offer their own RSP programs, <br />
                which work similarly.
              </p>
            </div>
            <a href="/learn#rrsp">
            <div className="absolute w-[76px] h-[76px] top-[160px] right-[5px] bg-[#cdb989] rounded-[38px] hover:bg-[#012c51] flex items-center justify-center transition-colors duration-300 group">
              <MoveUpRight className="text-[#012c51] group-hover:text-[#cdb989] transition-colors duration-300" />
            </div>
            </a>
              
            
          </div>

          {/* TFSA Card */}
          <div className="absolute top-[350px] left-7 w-[550px] h-[268px] bg-[url(/public/assets/mask/subtract-1.svg)] bg-no-repeat">
            <div className="p-7">
              <h3 className="font-serif font-normal text-[#012c51] text-[28px] mb-2">
                TFSA (Tax-Free Savings Account)
              </h3>

              <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base max-w-[494px] mt-5">
                Expanding Your Investment Choices: Discover Opportunities
                Beyond Traditional Paths. Take your portfolio further by
                exploring alternative investments like MICs, offering new
                ways to grow your wealth, diversify your holdings, and
                build a more resilient wealth, diversify your holdings,
                and build a more resilient financial future.
              </p>
            </div>

            <a href="/learn#tfsa">
            <div className="absolute w-[76px] h-[76px] top-[0px] right-[5px] bg-[#cdb989] rounded-[38px] hover:bg-[#012c51] flex items-center justify-center transition-colors duration-300 group">
              <MoveUpRight className="text-[#012c51] group-hover:text-[#cdb989] transition-colors duration-300" />
            </div>

            </a>
          </div>

          {/* RRSP Card */}
          <div className="absolute top-[310px] right-[119px] w-[483px] h-[268px] bg-[url(/public/assets/mask/subtract.svg)] bg-no-repeat">
            <div className="p-7">
              <h3 className="font-serif font-normal text-[#cdb989] text-[28px] mb-0">
                RRSP (Registered Retirement Savings Plan)
              </h3>

              <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-neutral-100 text-base max-w-[427px] mb-0S">
                An RRSP is a special savings account that helps you save
                money for retirement. The money you put in is
                tax-deductible, which means it can lower the amount of tax
                you pay today. Plus, your savings grow tax-free until you
                take the money out, usually when 
                you retire.
              </p>
            </div>
          </div>
          <a href="/learn#rrsp">
          <Button className="absolute bottom-[70px] right-[130px] w-36 h-12 bg-[#012c51] hover:bg-[#cdb989] text-[#cdb989] text-base hover:text-[#012c51] rounded-[30px]">
            <span className="font-serif font-normal ] ">
              Learn More
            </span>
          </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  </section>

  );
};

export default AlternativeInvestmentsSection;
