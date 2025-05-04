import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Blogcard from "@/components/Blogcar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
import Footer from "@/components/footer";

export default function BlogArticalPage(): JSX.Element {
  // Navigation menu items

  // Article data
  const articles = [
    {
      title: "Research and Thought Leadership",
      description: "The Role of Alternative Investments in a Modern Portfolio.",
      image: "",
    },
    {
      title: "Adapting to Evolving Customer Needs",
      description:
        "Understanding shifting expectations and staying ahead with customer-first thinking.",
      image: "",
    },
    {
      title: "From Ideas to Impact",
      description: "Turning smart thinking into real-world business results.",
      image: "",
    },
    {
      title: "From Ideas to Impact",
      description: "Turning smart thinking into real-world business results.",
      image: "",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[] relative">
        {/* Fixed Navigation */}
        <Navbar startPosition="custom" />

        

        {/* Hero Section */}
        <div className="relative w-full h-[776px] mb-36">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Person climbing mountain at sunset"
                      src="assets/images/bloghero.jpg"
                    />
                    <div className="absolute inset-0 bg-[#000000a6]" />
                  </div>
        
                  {/* Navigation Bar */}
                  
        
                  {/* Hero Content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                    <h1 className="[font-family:'Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl mb-6">
                        EXPLORING WHATS NEXT
                    </h1>
                    <p className="[font-family:'Libre_Bodoni-Regular',Helvetica] font-normal text-white text-base max-w-xl mx-auto">
                    Stay ahead with fresh perspectives, industry trends, and forward-thinking insights that shape tomorrow.
                    </p>
                  </div>
                </div>

        {/* Latest Articles Section */}
        <div className="mt-20 text-center">
          <h2 className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#012c51] text-[28px]">
            LATEST ARTICLES
          </h2>

          <Separator className="w-[125px] h-[5px] mx-auto mt-5 bg-[#012c51]" />

          <Blogcard/>
        </div>

        {/* Subscribe Section */}
        <div className="w-full h-[479px] mt-24 bg-neutral-100 flex mb-8">
          <div className="w-[733px] h-full">
            <img
              src="assets/images/sub.jpg"
              alt="Subscribe background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-8">
            <h2 className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#012c51] text-[28px] mb-4">
              SUBSCRIBE
            </h2>

            <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#012c51] text-base mb-2">
              Sign-up for our newsletter
            </p>

            <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#cdb989] text-base text-center max-w-[346px] mb-8">
              Get expert insights delivered straight to your inbox. We send
              valuable content twice a month.
            </p>

            <div className="w-full max-w-[419px] space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="First Name"
                  className="h-[54px] bg-[#d9d9d9] placeholder:text-[#012c5180] "
                />
                <Input
                  placeholder="Last Name"
                  className="h-[54px] bg-[#d9d9d9] placeholder:text-[#012c5180] "
                />
              </div>

              <Input
                placeholder="Your Email"
                className="h-[54px] bg-[#d9d9d9] placeholder:text-[#012c5180] "
              />

              <div className="flex items-center gap-2 mt-4">
                <Checkbox id="marketing" className="border-black" />
                <label
                  htmlFor="marketing"
                  className="font-['Segoe_UI-Regular',Helvetica] font-normal text-[#012c51] text-xs"
                >
                  I agree to receive marketing emails and can unsubscribe
                  anytime
                </label>
              </div>

              <div className="flex justify-center mt-4">
                <Button className="w-[108px] h-[34px] bg-[#cdb989] rounded-[30px]">
                  <span className="font-['Libre_Bodoni-Regular',Helvetica] font-normal text-[#012c51] text-base">
                    Subscribe
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Social Icons */}
        <Footer />
      </div>
    </div>
  );
}
