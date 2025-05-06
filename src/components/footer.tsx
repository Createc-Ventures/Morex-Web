import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#062244] text-[#e3c07b] p-10 flex flex-col items-center gap-12 mt-20">

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <img src="/assets/icons/phone.svg" alt="Phone" className="w-15 h-15" />
          <p className="font-bold font-serif">Phone</p>
          <p className=''>905-896-2642</p>
          
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src="assets/icons/location.svg" alt="Address" className="w-15 h-15" />
          <p className="font-bold font-serif">Address</p>
          <p className=''>5025 Orbitor Drive, Bldg. #2, Suite 200 Mississauga, Ontario L4W 4Y5</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src="assets/icons/mail-top.svg" alt="Email" className="w-15 h-15" />
          <p className="font-bold font-serif">Email</p>
          <p className=''>info@morexcapital.com</p>
         
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg">
        <h3 className="text-center text-lg mb-4 font-serif">
          If you got any questions<br />
          Please do not hesitate to send us a message.
        </h3>
        <form className="flex flex-col gap-4 font-serif">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" className="h-32" />
          <Button className="bg-[#e3c07b] text-black hover:bg-[#c7a872]">Send Message</Button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-6">
        {/*<a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">*/}
        {/*  <img src="/assets/icons/fb.svg" alt="Facebook" className="w-12 h-12 cursor-pointer" />*/}
        {/*</a>*/}
        <a href="info@morexasset.com">
          <img src="/assets/icons/mail.svg" alt="Mail" className="w-12 h-12 cursor-pointer" />
        </a>
        {/*<a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">*/}
        {/*  <img src="/assets/icons/in.svg" alt="Linkedin" className="w-12 h-12 cursor-pointer" />*/}
        {/*</a>*/}
        <a href="https://www.instagram.com/morexasset/profilecard/?igsh=bW5mdHU2dGw2MHZje" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/insta.svg" alt="Instagram" className="w-12 h-12 cursor-pointer" />
        </a>
        {/*<a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">*/}
        {/*  <img src="/assets/icons/x.svg" alt="X" className="w-12 h-12 cursor-pointer" />*/}
        {/*</a>*/}
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.57925759488!2d-79.60097392388516!3d43.65692137110189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b385398faaaab%3A0xa67f5900b1c01a27!2s5025%20Orbitor%20Dr%20Building%202.%20Suite%20200%2C%20Mississauga%2C%20ON%20L4W%204Y5%2C%20Canada!5e0!3m2!1sen!2sin!4v1746455143088!5m2!1sen!2sin"
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
          src="/assets/logo/logo.png"
          alt="Logo"
          className="w-32 h-auto mb-4"
        />
        <p className="text-center text-sm">© 2025 Your Company Name. All rights reserved.</p>
      </div>

    </footer>
  );
}
