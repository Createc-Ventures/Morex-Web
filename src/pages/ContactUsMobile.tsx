import Navbar from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Home, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactUsMobile(): JSX.Element {
  const contactCards = [
    {
      icon: <Home className="w-8 h-8 text-[#cdb989]" />,
      title: "VISIT US",
      content: "5025 Orbitor Dr, Suite 200, Mississauga, ON",
    },
    {
      icon: <Phone className="w-8 h-8 text-[#cdb989]" />,
      title: "CALL US",
      content: "905-896-2642",
    },
    {
      icon: <Mail className="w-8 h-8 text-[#cdb989]" />,
      title: "EMAIL US",
      content: "info@morexcapital.com",
    },
  ];

  return (
    <div className="bg-white w-full">
      <Navbar startPosition="custom" />

      {/* Hero Section */}
      <div className="w-full h-60 relative bg-[url(/assets/images/contactus.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold font-serif text-[#cdb989] mb-2">CONTACT US</h1>
          <p className="text-white text-sm font-serif">
            Need an expert? Leave your contact info and we’ll be in touch.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="px-4 mt-8 space-y-4">
        {contactCards.map((card, i) => (
          <Card key={i} className="bg-neutral-100 shadow p-4">
            <CardContent className="flex items-center gap-4 p-0 py-2">
              {card.icon}
              <div>
                <h3 className="text-[#012c51] font-serif text-sm mb-1">{card.title}</h3>
                <p className="text-xs text-black">{card.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Form */}
      <div className="px-4 py-8">
        <h2 className="text-xl font-serif text-[#012c51] mb-2">Get in Touch!</h2>
        <p className="text-sm text-black mb-4">Drop in your contact details and we’ll reach out soon.</p>
        <form className="space-y-3">
          <Input type="text" name="name" placeholder="Name" className="rounded-full text-[#012c51]" />
          <Input type="email" name="email" placeholder="Email" className="rounded-full text-[#012c51]" />
          <Input type="text" name="subject" placeholder="Subject" className="rounded-full text-[#012c51]" />
          <Textarea placeholder="Message" className="rounded-3xl text-[#012c51]" />
          <Button className="w-full bg-[#cdb989] text-[#012c51] rounded-full">Send Message</Button>
        </form>
      </div>

      {/* Map */}
      <div className="px-4 mb-8">
       <iframe
       title="Morex Capital Office Location"
       src="https://www.google.com/maps/embed?pb=!1m18..."
       width="100%"
       height="200"
       style={{ border: 0 }}
       allowFullScreen={false}
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
      />
      </div>
    </div>
  );
}
