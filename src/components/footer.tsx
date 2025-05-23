
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Footer() {
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
      alert('Please complete the CAPTCHA');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, token: captchaToken }),
    });

    const result = await res.json();
    if (result.success) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      recaptchaRef.current?.reset();
    } else {
      alert('Error: ' + result.error);
    }
  };

  return (
    <footer className="bg-[#062244] text-[#e3c07b] p-10 flex flex-col items-center gap-12 mt-20">
      {/* Contact Form */}
      <div className="w-full max-w-lg">
        <h3 className="text-center text-lg mb-4 font-serif">
          If you got any questions<br />
          Please do not hesitate to send us a message.
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-serif">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            placeholder="Message"
            className="h-32"
            value={formData.message}
            onChange={handleChange}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdHVEYrAAAAAPAyPAqOXKIVopnud5oJaneImCkY"
            onChange={handleCaptcha}
            theme="light"
          />
          <Button
            type="submit"
            className="bg-[#e3c07b] text-black hover:bg-[#c7a872]"
          >
            Send Message
          </Button>
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
        <p className="text-center text-sm">© 2025 Morex Asset Management Group. All rights reserved.</p>
      </div>

    </footer>
  );
}
