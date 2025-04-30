import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/navbar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
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

export default function AboutUs(): JSX.Element {
  // Navigation items
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "INSIGHT", href: "#" },
    { label: "INVEST", href: "#" },
    { label: "ABOUT US", href: "#" },
    { label: "LEARN", href: "#" },
  ];

  // Stats data
  const statsData = [
    { value: "3m", description: "Weekly turnover of the company" },
    { value: "237", description: "Clients working with us" },
    { value: "18%", description: "Average profit of our clients" },
    {
      value: "92%",
      description: "So many years we help people to manage their money",
    },
  ];

  // Services data
  const servicesData = [
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit.",
    },
    {
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, amet consectetur adipiscing elit.",
    },
  ];

  // Values data
  const valuesData = [
    {
      title: "'Integrity'",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien lacus, gravida vitae fermentum vitae,",
    },
    {
      title: "'Excellence'",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien lacus, gravida vitae fermentum vitae,",
    },
    {
      title: "'Transparency'",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien lacus, gravida vitae fermentum vitae,",
    },
    {
      title: "'Innovation'",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien lacus, gravida vitae fermentum vitae,",
    },
    {
      title: "'Client Focus'",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien lacus, gravida vitae fermentum vitae,",
    },
    {
      title: "'Sustainability'",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien lacus, gravida vitae fermentum vitae,",
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Phone className="w-12 h-12" />,
      items: ["+6549816186", "+1644843655"],
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      items: [
        "Lorem ipsum dolor amet, consectetur elit. Aliquam ullamcorper lorem",
      ],
    },
    {
      icon: <Mail className="w-12 h-12" />,
      items: ["Loremipsum55@gamil.com", "Loremi9655@gamil.com"],
    },
  ];

  // Social media data
  const socialMedia = [
    { icon: <Facebook className="w-12 h-12" />, href: "#" },
    { icon: <Linkedin className="w-12 h-12" />, href: "#" },
    { icon: <Instagram className="w-12 h-12" />, href: "#" },
    { icon: <Twitter className="w-12 h-12" />, href: "#" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1280px] relative">
        {/* Navigation Bar */}
        <Navbar/>
        
        {/* Hero Section */}
        <section className="relative w-full h-[314px]">
          <div className="absolute inset-0 bg-[#000000a6]" />
          <img
            className="w-full h-full object-cover"
            alt="Hero Background"
            src=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-5xl text-[#cdb989]">
              OUR STORY
            </h1>
            <p className="font-['Libre_Bodoni-Regular',Helvetica] text-white text-base mt-6">
              -More Than Mortgages-
            </p>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="flex flex-col md:flex-row gap-8 px-8 py-16">
          <div className="md:w-1/2">
            <img
              className="w-full h-auto object-cover"
              alt="Team Working"
              src=""
            />
          </div>
          <div className="md:w-1/2 flex flex-col">
            <h2 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-5xl text-[#012c51] mb-8 text-center md:text-left">
              Our Journey
            </h2>
            <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sapien lacus, gravida vitae fermentum vitae, molestie id lorem.
              Quisque quis ex nisi. Nam tempus erat arcu, et molestie purus
              porttitor id. Donec mollis velit augue, non pellentesque tortor
              volutpat vitae. Phasellus varius odio id metus iaculis aliquam.
              Cras elementum ut eros in convallis.
              <br />
              <br />
              Ut venenatis pharetra erat ac efficitur. Ut ultrices magna ut
              neque elementum, sit amet mollis ipsum pulvinar. Nulla congue in
              mi sed elementum. Donec mauris ipsum, condimentum vel convallis
              nec, condimentum sed ipsum. Integer euismod ligula vitae nulla
              rhoncus fringilla. Vivamus purus nulla, auctor nec vestibulum nec,
              rhoncus sit amet lacus. Nam tincidunt egestas porttitor. Vivamus
              rhoncus, ligula et ornare congue, sapien purus rhoncus est.
              <br />
              <br />
              Suspendisse eget nulla eget ante finibus ultrices vitae ut arcu.
              Aenean malesuada, lacus nec suscipit pellentesque, nibh urna
              bibendum diam, et dignissim est ligula vitae metus. Phasellus
              consectetur turpis id cursus faucibus. Nam sit amet ipsum euismod,
              lacinia dolor ut, consectetur augue. Praesent fringilla nulla ut
              metus tempus, nec fermentum elit accumsan. Nullam sit amet sodales
              leo, sed mollis.
              <br />
              <br />
              Sed efficitur, nisl eget efficitur consequat, ipsum odio rutrum
              dui, at suscipit ipsum quam non magna. Praesent maximus eu sapien
              at cursus. Nam interdum lacinia lacus iaculis commodo. Nulla id
              euismod erat. Aenean venenatis dignissim mauris eget facilisis.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative w-full h-[220px] bg-[#012c51bf] flex items-center justify-center">
          <img
            className="absolute inset-0 w-full h-full object-cover -z-10"
            alt="Stats Background"
            src=""
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl px-4">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl">
                  {stat.value}
                </span>
                <p className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-white text-base mt-4">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-neutral-100 py-12 shadow-[-8px_8px_10px_#00000040]">
          <h2 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#cdb989] text-5xl text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <div className="flex-shrink-0 flex items-start justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    {/* Icon placeholder */}
                  </div>
                </div>
                <div>
                  <h3 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-black text-base">
                    {service.title}
                  </h3>
                  <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Organizational Values Section */}
        <section className="py-16">
          <h2 className="font-['Libre_Bodoni-Bold',Helvetica] font-bold text-[#012c51] text-5xl text-center mb-2">
            Our Organizational Values
          </h2>
          <p className="font-['Libre_Bodoni-Regular',Helvetica] text-[#012c51] text-base text-center mb-12">
            -What keeps us moving-
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            {valuesData.map((value, index) => (
              <Card
                key={index}
                className="relative bg-neutral-100 rounded-[30px_30px_100px_30px] shadow-[-8px_8px_10px_#00000040]"
              >
                <CardContent className="pt-12 pb-8 px-6">
                  <h3 className="font-['Libre_Bodoni-Regular',Helvetica] text-[#012c51] text-[28px] text-center mb-4">
                    {value.title}
                  </h3>
                  <p className="font-['Segoe_UI-Regular',Helvetica] text-black text-base text-center">
                    {value.description}
                  </p>
                </CardContent>
                {index === 0 && (
                  <div className="absolute -top-12 -left-4 text-5xl text-[#cdb989]">
                    "
                  </div>
                )}
                {index === 5 && (
                  <div className="absolute -top-12 -right-4 text-5xl text-[#cdb989]">
                    "
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#012c51] py-12">
          <h2 className="font-['Libre_Bodoni-Regular',Helvetica] text-[#cdb989] text-[28px] text-center mb-12">
            Get in touch with us !
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 text-[#cdb989]">{info.icon}</div>
                <h3 className="font-['Libre_Bodoni-Regular',Helvetica] text-[#cdb989] text-base mb-4">
                  {index === 0 ? "Phone" : index === 1 ? "Address" : "Email"}
                </h3>
                {info.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="font-['Segoe_UI-Regular',Helvetica] text-white text-xs text-center"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <Separator className="bg-white/20 mb-12" />

          <div className="text-center mb-8">
            <h3 className="font-['Libre_Bodoni-Regular',Helvetica] text-[#cdb989] text-[28px] mb-4">
              If you got any questions
            </h3>
            <p className="font-['Libre_Bodoni-Regular',Helvetica] text-[#cdb989] text-[28px]">
              Please do not hesitate to send us a message.
            </p>
          </div>

          <div className="max-w-md mx-auto px-4 mb-12">
            <form className="flex flex-col gap-4">
              <Input
                placeholder="Name"
                className="h-9 bg-white text-[#012c51] font-['Libre_Bodoni-Regular',Helvetica]"
              />
              <Input
                placeholder="Email"
                className="h-9 bg-white text-[#012c51] font-['Libre_Bodoni-Regular',Helvetica]"
              />
              <Input
                placeholder="Subject"
                className="h-9 bg-white text-[#012c51] font-['Libre_Bodoni-Regular',Helvetica]"
              />
              <Textarea
                placeholder="Message"
                className="h-[202px] bg-white text-[#012c51] font-['Libre_Bodoni-Regular',Helvetica]"
              />
              <Button className="w-[187px] h-[38px] bg-[#cdb989] text-[#012c51] rounded-[30px] mx-auto">
                Send Message
              </Button>
            </form>
          </div>

          <div className="text-center mb-8">
            <h3 className="font-['Libre_Bodoni-Regular',Helvetica] text-[#cdb989] text-[28px] mb-4">
              Connect with us !
            </h3>
            <div className="flex justify-center gap-6 mt-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-[#cdb989] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="w-full h-[468px] relative">
              <img src="" alt="Map" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-center py-8">
              <img src="" alt="Company Logo" className="h-[165px]" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
