'use client';

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Home,
  Phone,
  Mail,
} from "lucide-react";
import React from "react";

export default function ContactUs(): JSX.Element {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    // TODO: Add your backend API integration here
    alert("Form submitted successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
    recaptchaRef.current?.reset();
  };

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
      icon: <Mail className="w-12 h-12 text-[#cdb989]" />,
      title: "CONTACT US",
      content: "info@morexcapital.com",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        <Navbar startPosition="custom" />
        <div className="w-full h-[450px] relative bg-[url(/assets/images/contactus.jpg)] bg-cover">
          <div className="absolute w-full h-full top-0 left-0 bg-[#000000a6]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="font-serif font-bold text-[#cdb989] text-5xl mb-8">CONTACT US</h1>
            <p className="font-serif font-normal text-white text-base">
              Need an expert? you are more than welcomed to leave your contact<br />
              info and we will be in touch shortly.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-16 mt-16">
          {contactCards.map((card, index) => (
            <Card key={index} className="w-80 h-[297px] bg-neutral-100 rounded-lg shadow-[-8px_8px_10px_#00000040] flex flex-col items-center justify-center">
              <CardContent className="flex flex-col items-center pt-16">
                <div className="mb-8">{card.icon}</div>
                <h3 className="font-normal text-[#012c51] text-base mb-8 font-serif">{card.title}</h3>
                <p className="font-normal text-black text-base text-center">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex mt-16 mb-16 gap-16 px-16">
          {/* Contact Form */}
          <Card className="w-[557px] bg-[#cdb989a6] rounded-[30px] p-7">
            <CardContent className="p-0">
              <h2 className="font-serif font-normal text-[#012c51] text-[28px] mb-4">Get in Touch !</h2>
              <p className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-base mb-8">
                Drop in your contact details and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="h-9 rounded-[30px] font-serif text-[#012c51] opacity-50" />
                <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="h-9 rounded-[30px] font-serif text-[#012c51] opacity-50" />
                <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="h-9 rounded-[30px] font-serif text-[#012c51] opacity-50" />
                <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="h-[202px] rounded-[30px] font-serif text-[#012c51] opacity-50" />

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LdHVEYrAAAAAPAyPAqOXKIVopnud5oJaneImCkY"
                  onChange={handleCaptcha}
                  theme="light"
                />

                <Button type="submit" className="bg-[#cdb989] text-[#012c51] rounded-[30px] h-[38px] w-[187px] font-serif font-normal">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Location Section */}
          <div className="flex-1">
            <h2 className="font-serif font-normal text-[#012c51] text-[28px] mb-4">Our location</h2>
            <p className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-black text-base mb-8">
              5025 Orbitor Drive, Bldg.2, Suite 200 Mississauga, Ontario L4W 4Y5
            </p>
            <div className="w-full h-[357px] mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex space-x-4 mt-16">
              <a href="https://www.instagram.com/morexasset/profilecard/?igsh=bW5mdHU2dGw2MHZje" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/insta.svg" alt="Instagram" className="w-12 h-12 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
