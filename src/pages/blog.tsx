import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
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

        {/* Menu Toggle Button (Mobile) */}
        <div className="fixed w-10 h-10 top-[52px] left-[45px] rotate-[90.00deg] z-10">
          <ChevronDown className="w-7 h-7 text-[#012c51]" />
        </div>

        {/* Hero Section */}
        <div className="relative w-full h-[776px] mb-36">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Person climbing mountain at sunset"
                      src="public\assets\images\bloghero.jpg"
                    />
                    <div className="absolute inset-0 bg-[#000000a6]" />
                  </div>
        
                  {/* Navigation Bar */}
                  <Navbar startPosition="custom" />
        
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

          <div className="flex flex-wrap justify-center gap-6 mt-12 relative">
            {articles.slice(0, 3).map((article, index) => (
              <Card
                key={index}
                className="w-[366px] h-[516px] rounded-lg shadow-[-8px_8px_10px_#00000040] overflow-hidden"
              >
                <CardContent className="p-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[207px] object-cover"
                  />

                  <div className="p-10">
                    <h3 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-2xl mb-4">
                      {article.title}
                    </h3>

                    <p className="font-['Segoe_UI-Regular',Helvetica] font-normal text-black text-base">
                      {article.description}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="absolute bottom-0 w-full h-[108px] bg-gradient-to-t from-[#f5f5f5] to-transparent">
                  <Button
                    variant="outline"
                    className="w-[95px] h-8 rounded-[30px] ml-[38px] mt-11 bg-white"
                  >
                    <span className="font-['Segoe_UI-Bold',Helvetica] font-bold text-[#012c51] text-xs">
                      READ
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            ))}

           
            
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-full h-[479px] mt-24 bg-neutral-100 flex">
          <div className="w-[733px] h-full">
            <img
              src="public\assets\images\sub.jpg"
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
                  className="h-[54px] bg-[#d9d9d9] placeholder:text-[#012c5180] placeholder:text-center"
                />
                <Input
                  placeholder="Last Name"
                  className="h-[54px] bg-[#d9d9d9] placeholder:text-[#012c5180] placeholder:text-center"
                />
              </div>

              <Input
                placeholder="Your Email"
                className="h-[54px] bg-[#d9d9d9] placeholder:text-[#012c5180] placeholder:text-center"
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
        <div className="flex justify-center space-x-8 mt-16 mb-6">
          <Button variant="ghost" size="icon" className="w-12 h-12">
            <Facebook className="w-6 h-6 text-[#012c51]" />
          </Button>

          <Button variant="ghost" size="icon" className="w-12 h-12">
            <Twitter className="w-6 h-6 text-[#012c51]" />
          </Button>

          <Button variant="ghost" size="icon" className="w-12 h-12">
            <Linkedin className="w-6 h-6 text-[#012c51]" />
          </Button>

          <Button variant="ghost" size="icon" className="w-12 h-12">
            <Instagram className="w-6 h-6 text-[#012c51]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
