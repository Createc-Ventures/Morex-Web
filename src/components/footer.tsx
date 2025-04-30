import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Home, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#062244] text-[#e3c07b] p-10 flex flex-col items-center gap-12 mt-20" >

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <Phone className="w-8 h-8" />
          <p className="font-bold">Phone</p>
          <p>+6584916168</p>
          <p>+1644846305</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Home className="w-8 h-8" />
          <p className="font-bold">Address</p>
          <p>Lorem ipsum dolor amet, consectetur elit. Aliquam ullamcorper lorem</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Mail className="w-8 h-8" />
          <p className="font-bold">Email</p>
          <p>loremipsum55@gmail.com</p>
          <p>lorem2665@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg">
        <h3 className="text-center text-lg mb-4">If you got any questions<br/>Please do not hesitate to send us a message.</h3>
        <form className="flex flex-col gap-4">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" className="h-32" />
          <Button className="bg-[#e3c07b] text-black hover:bg-[#c7a872]">Send Message</Button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-6">
        <Facebook className="w-8 h-8 cursor-pointer" />
        <Mail className="w-8 h-8 cursor-pointer" /> {/* placeholder for an X (Twitter alternative) */}
        <Linkedin className="w-8 h-8 cursor-pointer" />
        <Instagram className="w-8 h-8 cursor-pointer" />
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl">
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

      {/* Footer Logo */}
      <div className="flex flex-col items-center mt-8">
        <img
          src="public\assets\logo\logo.png"
          alt="Logo"
          className="w-32 h-auto mb-4"
        />
        <p className="text-center text-sm">© 2025 Your Company Name. All rights reserved.</p>

      </div>

    </footer>
  );
}