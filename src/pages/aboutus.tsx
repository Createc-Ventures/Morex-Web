import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Testimonials from "@/components/Testimonials";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutUs(): JSX.Element {
  const teamMembers = [
    { name: "Moe Manzoor", title: "President & CEO, Founder" },
    { name: "Maria Tilotta", title: "Chief Compliance Officer, Co-Founder" },
    { name: "Atul Mehra", title: "Vice President" },
    { name: "Djamal Saleh", title: "Investor Relations" },
  ];

  const partnerBenefits = [
    "Access to high-quality private market opportunities",
    "Conservative lending philosophy with capital preservation focus",
    "Institutional-grade due diligence and underwriting standards",
    "Professional and regulatory compliant investor onboarding experience",
  ];

  return (
    <div className="bg-white w-full font-times">
      <Navbar startPosition="custom" />

      <section className="relative w-full h-[450px]">
        <div className="absolute w-full h-full">
          <img
            className="w-full h-full object-cover"
            alt="Hero background"
            src="assets/images/hero.png"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-[#000000a6]" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif font-bold text-[#cdb989] text-4xl md:text-5xl">ABOUT US</h1>
          <p className="mt-4 text-white text-base font-serif">-More Than Mortgages-</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-36 py-16 gap-10">
        <div className="w-full md:w-[517px]">
          <img className="w-full max-h-[600px] object-cover" alt="Our journey" src="assets/images/journey.png" />
        </div>
        <div className="w-full md:w-[591px] flex flex-col items-center text-center">
          <h2 className="text-[#012c51] font-bold text-3xl md:text-5xl mb-6 font-serif">OUR JOURNEY</h2>
          <p className="text-black text-sm md:text-base font-serif">
            At Morex Asset Management, our story is rooted in a clear vision — to empower qualified
            investors with access to exclusive, high-quality private investment opportunities...
            <br /><br />
            As a registered Exempt Market Dealer (EMD), we guide clients toward smart, income-generating investments in a rapidly evolving financial landscape...
          </p>
          <div className="mt-8">
            <h3 className="font-bold text-[#cdb989] text-xl mb-3 font-serif">Want To Know More?</h3>
            <Button className="w-40 h-12 bg-[#012c51] rounded-[30px] font-bold text-[#cdb989] text-base font-serif">
              LET&apos;S CONNECT
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 flex flex-col items-center text-center px-4 md:px-0">
        <div className="absolute left-0 top-0 hidden md:block">
          <img className="w-[392px] h-[292px]" alt="Purpose visual left" src="assets/images/perpose-1.png" />
        </div>
        <div className="max-w-lg z-10">
          <h2 className="text-[#cdb989] font-bold text-3xl md:text-5xl mb-6 font-serif">OUR PURPOSE</h2>
          <p className="text-black text-sm md:text-base font-serif">
          We connect investors with alternative investment solutions designed to deliver stable 
          income and diversify portfolios beyond traditional public markets. Our disciplined, 
          investor-first approach prioritizes transparency, risk management, and long-term value creation.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 hidden md:block">
          <img className="w-[420px] h-[322px]" alt="Purpose visual right" src="assets/images/perpose-2.png" />
        </div>
      </section>

      <section className="py-16 px-4 md:px-12">
        <Card className="w-full max-w-[1032px] h-auto mx-auto bg-[url(/public/assets/images/group.png)] bg-cover relative rounded-[30px]">
          <div className="absolute inset-0 bg-[#00000080] rounded-[30px]"></div>
          <CardContent className="relative z-10 p-6 md:p-16 text-white">
            <h2 className="text-[#cdb989] font-bold text-3xl md:text-5xl mb-6 font-serif">OUR GROUP</h2>
            <h3 className="font-bold mb-2 font-serif">MOREX CAPITAL</h3>
            <p className="mb-6 text-sm md:text-base max-w-md font-serif">
            Established in 2012, Morex Capital is a Mortgage Investment Corporation (MIC) with a proven track record of delivering stable, 
            predictable returns by investing in short-term, owner-occupied residential mortgages primarily in Ontario’s Golden Horseshoe region.
            </p>
            <Button className="bg-[#012c51] text-[#cdb989] rounded-[30px] text-base font-bold w-40 h-12 font-serif">
              LEARN MORE
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="w-full bg-neutral-100 py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 md:px-12">
          <div className="md:w-[328px]">
            <h2 className="text-[#012c51] font-bold text-3xl md:text-5xl font-serif">
              Why Partner With Morex Asset Management?
            </h2>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="bg-[#cdb989] h-auto rounded-lg shadow-[-8px_8px_10px_#00000040]">
                <CardContent className="p-4 flex items-center justify-center h-14">
                  <p className="text-[#012c51] font-bold text-center text-sm md:text-base font-serif">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-[#012c51] font-bold text-3xl md:text-5xl mb-4 font-serif">Our Team</h2>
          <p className="text-[#012c51] text-sm md:text-base max-w-2xl mx-auto font-serif">
            Get to know the passionate professionals driving our mission...
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="w-[90%] sm:w-[261px] bg-neutral-100 rounded-[30px_30px_30px_0px] shadow-[-8px_8px_10px_#00000040]">
              <CardContent className="flex flex-col items-center justify-center h-[124px] p-4">
                <h3 className="text-[#012c51] font-bold text-center text-sm font-serif">{member.name}</h3>
                <p className="text-[#cdb989] text-center mt-2 text-sm font-serif">{member.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-end pr-4 mt-6">
          <a href="/aboutus/team" className="text-[#012c51] font-bold underline text-sm font-serif">MORE DETAILS →</a>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}
