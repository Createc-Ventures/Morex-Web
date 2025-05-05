import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";

export default function ContactUs(): JSX.Element {
  // Contact card data
  const contactCards = [
    {
      icon: <Home className="w-12 h-12 text-[#cdb989]" />,
      title: "VISIT US",
      content:
        "5025 Orbitor Drive, Bldg.2, Suite 200 Mississauga, Ontario L4W 4Y5",
    },
    {
      icon: <Phone className="w-12 h-12 text-[#cdb989]" />,
      title: "CALL US",
      content: "905-896-2642",
    },
    {
      icon: <Mail className="w-12 h-12 text-[#cdb989] " />,
      title: "CONTACT US",
      content: "info@morexcapital.com",
    },
  ];

  // Navigation items
  

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[] relative">
        {/* Header/Navigation */}
        <Navbar startPosition="custom" />
        {/* Hero section */}
        <div className="w-full h-[450px] relative bg-[url(/public/assets/images/contactus.jpg)] bg-cover">
          <div className="absolute w-full h-full top-0 left-0 bg-[#000000a6]" />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-serif font-bold text-[#cdb989] text-5xl mb-8">
              CONTACT US
            </h1>

            <p className="font-serif font-normal text-white text-base">
              Need an expert? you arc more than welcomed to leave your contact
              <br />
              info and we will be in touch shortly.
            </p>
          </div>
        </div>

        {/* Contact cards section */}
        <div className="flex justify-center gap-16 mt-16">
          {contactCards.map((card, index) => (
            <Card
              key={index}
              className="w-80 h-[297px] bg-neutral-100 rounded-lg shadow-[-8px_8px_10px_#00000040] flex flex-col items-center justify-center"
            >
              <CardContent className="flex flex-col items-center pt-16">
                <div className="mb-8">{card.icon}</div>
                <h3 className="font-normal text-[#012c51] text-base mb-8 font-serif">
                  {card.title}
                </h3>
                {Array.isArray(card.content) ? (
                  <div className="text-center [font-family:'Segoe_UI-Semibold',Helvetica]">
                    {card.content.map((line, i) => (
                      <p
                        key={i}
                        className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-xs"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className=" font-normal text-black text-base text-center">
                    {card.content}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact form and location section */}
        <div className="flex mt-16 mb-16 gap-16 px-16">
          {/* Contact form */}
          <Card className="w-[557px] bg-[#cdb989a6] rounded-[30px] p-7">
            <CardContent className="p-0">
              <h2 className="font-serif font-normal text-[#012c51] text-[28px] mb-4">
                Get in Touch !
              </h2>

              <p className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-base mb-8">
                Lorem ipsum dolor amet, consectetur elit.&nbsp;&nbsp;Aliquam
                ullamcorper lorem dolor amet, consectetur
                elit.&nbsp;&nbsp;Aliquam ullamcorper lorem
              </p>

              <form className="space-y-4">
                <Input
                  placeholder="Name"
                  className="h-9 rounded-[30px] font-serif text-[#012c51] opacity-50"
                />

                <Input
                  placeholder="Email"
                  className="h-9 rounded-[30px] font-serif text-[#012c51] opacity-50"
                />

                <Input
                  placeholder="Subject"
                  className="h-9 rounded-[30px] font-serif text-[#012c51] opacity-50"
                />

                <Textarea
                  placeholder="Message"
                  className="h-[202px] rounded-[30px] font-serif text-[#012c51] opacity-50"
                />

                <Button className="bg-[#cdb989] text-[#012c51] rounded-[30px] h-[38px] w-[187px] font-serif font-normal">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Location section */}
          <div className="flex-1">
            <h2 className="font-serif font-normal text-[#012c51] text-[28px] mb-4">
              Our location
            </h2>

            <p className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-base mb-8">
              5025 Orbitor Drive, Bldg.2, Suite 200 Mississauga, Ontario L4W 4Y5
            </p>

            <div className="w-full h-[357px] mb-8">
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.3541223967415!2d-94.72788262402707!3d38.970548043796154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0fbf69b1323e3%3A0x5aeb5b69e5258fa0!2sLenexa%2C%20KS%2066200%2C%20USA!5e0!3m2!1sen!2sin!4v1714419847033!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
            </div>

            

            <div className="flex space-x-4 mt-16 ">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="assets/icons/fb.svg" alt="Facebook" className="w-12 h-12 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="assets/icons/in.svg" alt="Facebook" className="w-12 h-12 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="assets/icons/insta.svg" alt="Facebook" className="w-12 h-12 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <img src="assets/icons/x.svg" alt="Facebook" className="w-12 h-12 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
