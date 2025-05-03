import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
} from "lucide-react";
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
    <div className="bg-white flex flex-row justify-center w-full font-times" data-model-id="0:633">
      <div className="bg-white overflow-hidden relative">
        <Navbar startPosition="custom" />

        <section className="relative w-full h-[450px]">
          <div className="absolute w-full h-[450px] top-0 left-0">
            <img
              className="absolute w-full h-[450px] top-0 left-0 object-cover"
              alt="Hero background"
              src="public/assets/images/hero.png"
            />
            <div className="absolute w-full h-[450px] top-0 left-0 bg-[#000000a6]" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center">
            <h1 className="font-bold text-[#cdb989] text-5xl" style={{ fontFamily: "'Times New Roman', Times, serif" }}>ABOUT US</h1>
            <p className="mt-6 font-normal text-white text-base" style={{ fontFamily: "'Times New Roman', Times, serif" }}>-More Than Mortgages-</p>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between px-36 py-16">
          <div className="w-[517px]">
            <img className="w-full h-[604px] object-cover" alt="Our journey" src="public\assets\images\journey.png" />
          </div>

          <div className="w-[591px] flex flex-col items-center">
            <h2 className="font-bold text-[#012c51] text-5xl mb-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>OUR JOURNEY</h2>
            <p className="font-normal text-black text-base text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              At Morex Asset Management, our story is rooted in a clear vision — to empower qualified
              investors with access to exclusive, high-quality private investment opportunities...
              <br /><br />
              At Morex Asset Management, our story is rooted in a clear vision — to empower qualified investors with access to exclusive, 
              high-quality private investment opportunities. As a registered Exempt Market Dealer (EMD), we serve as the dedicated distribution 
              arm of the Morex Group, guiding our clients toward smart, income-generating investments in a rapidly evolving financial landscape.
              Our journey began with a commitment to connect discerning investors with reliable, performance-driven opportunities. This vision led 
              us to partner closely with Morex Capital, one of Canada’s leading Mortgage Investment Corporations (MICs), known for its expertise in 
              high-quality, income-producing residential mortgages.
              Together, we’ve built a trusted platform that emphasizes integrity, transparency, and excellence — offering not just 
              investment solutions, but long-term partnerships rooted in shared success. At Morex Asset Management, we continue to grow by staying 
              true to our mission: delivering value through thoughtful capital raising and strategic access to the private markets.
            </p>

            <div className="mt-12">
              <h3 className="font-bold text-[#cdb989] text-[28px] mb-4">Want To Know More?</h3>
              <div className="flex justify-center">
                <Button className="w-40 h-12 bg-[#012c51] rounded-[30px] font-bold text-[#cdb989] text-base">
                  LET&apos;S CONNECT
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 flex justify-center items-center">
          <div className="absolute left-0 top-0">
            <img className="w-[392px] h-[292px] object-cover" alt="Purpose visual left" src="public\assets\images\perpose-1.png" />
          </div>

          <div className="w-[423px] flex flex-col items-center z-10">
            <h2 className="font-bold text-[#cdb989] text-5xl mb-6">OUR PURPOSE</h2>
            <p className="font-normal text-black text-base text-center">
            We connect investors with alternative investment solutions designed to deliver stable income and diversify 
            portfolios beyond traditional public markets. Our disciplined, investor-first approach prioritizes transparency, 
            risk management, and long-term value creation.
            </p>
          </div>

          <div className="absolute right-0 bottom-0">
            <img className="w-[420px] h-[322px] object-cover" alt="Purpose visual right" src="public\assets\images\perpose-2.png" />
          </div>
        </section>

        <section className="py-16 px-12">
          <Card className="w-[1032px] h-[580px] mx-auto bg-[url(public/assets/images/group.png)] bg-cover relative overflow-hidden rounded-[30px]">
            <div className="absolute inset-0 bg-[#00000080] rounded-[30px]"></div>
            <CardContent className="relative z-10 p-16">
              <h2 className="font-bold text-[#cdb989] text-5xl mb-12">OUR GROUP</h2>
              <h3 className="font-bold text-white text-base mb-2">MOREX CAPITAL</h3>
              <p className="font-normal text-white text-base w-[456px] mb-8">
              Established in 2012, Morex Capital is a Mortgage Investment Corporation (MIC) with a 
              proven track record of delivering stable, predictable returns by investing in short-term, 
              owner-occupied residential mortgages primarily in Ontario’s Golden Horseshoe region.
              </p>
              <Button className="w-40 h-12 bg-[#012c51] rounded-[30px] font-bold text-[#cdb989] text-base">
                LEARN MORE
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="w-full bg-neutral-100 py-16">
          <div className="flex flex-row px-16">
            <div className="w-[328px]">
              <h2 className="font-bold text-[#012c51] text-5xl">
                Why Partner With Morex Asset Management?
              </h2>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-6 ml-16">
              {partnerBenefits.map((benefit, index) => (
                <Card key={index} className="h-[107px] bg-[#cdb989] rounded-lg shadow-[-8px_8px_10px_#00000040]">
                  <CardContent className="flex items-center justify-center h-full p-5">
                    <p className="font-bold text-[#012c51] text-base text-center">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-bold text-[#012c51] text-5xl mb-6">Our Team</h2>
            <p className="font-normal text-[#012c51] text-base text-center max-w-[900px]">
              Get to know the passionate professionals driving our mission...
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="w-[261px] h-[124px] bg-neutral-100 rounded-[30px_30px_30px_0px] shadow-[-8px_8px_10px_#00000040]">
                <CardContent className="flex flex-col items-center justify-center h-full p-4">
                  <h3 className="font-bold text-[#012c51] text-base text-center">{member.name}</h3>
                  <p className="font-normal text-[#cdb989] text-base text-center mt-2">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end pr-12">
            <a href="/aboutus/team" className="font-bold text-[#012c51] text-base text-center underline">
              MORE DETAILS→
            </a>
          </div>
        </section>

       
        <Testimonials />

        <Footer />
      </div>
    </div>
  );
}
