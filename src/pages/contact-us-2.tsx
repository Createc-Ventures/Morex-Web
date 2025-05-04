import React from 'react';
import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="bg-white flex flex-row justify-center w-full font-times" data-model-id="0:633">
      <div className="bg-white overflow-hidden relative">
        <Navbar startPosition="custom" />
      {/* Hero Section */}
      <section className="relative w-full h-[450px]">
          <div className="absolute w-full h-[450px] top-0 left-0">
            <img
              className="absolute w-full h-[450px] top-0 left-0 object-cover"
              alt="Hero background"
              src="public/assets/images/contact-us-banner.jpg"
            />
            <div className="absolute w-full h-[450px] top-0 left-0 bg-[#000000a6]" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center">
          <div data-layer="Contact us" className="ContactUs" style={{color: '#CDB989', fontSize: 48, fontFamily: 'Libre Bodoni', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>Contact us</div>
            <div data-layer="Need an expert? you arc more than welcomed to leave your contact info and we will be in touch shortly." className="NeedAnExpertYouArcMoreThanWelcomedToLeaveYourContactInfoAndWeWillBeInTouchShortly" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Libre Bodoni', fontWeight: '400', wordWrap: 'break-word'}}>Need an expert? you arc more than welcomed to leave your contact<br/>info and we will be in touch shortly. </div>          </div>
        </section>

      {/* Info Cards */}
      <section className="py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: 'VISIT US',
            icon: '🏠',
            text: 'Lorem ipsum dolor amet, consectetur elit. Aliquam ullamcorper lorem.',
          },
          {
            title: 'CALL US',
            icon: '📞',
            text: '+6549816186\n+164843655',
          },
          {
            title: 'CONTACT US',
            icon: '✉️',
            text: 'Loremipsum55@gmail.com\nLorem9655@gmail.com',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="whitespace-pre-line">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Contact Form & Location */}
      <section className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-[#E0CDA9] p-6 md:p-10 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Get in Touch !</h2>
          <p className="mb-6">
            Lorem ipsum dolor amet, consectetur elit. Aliquam ullamcorper lorem.
          </p>
          <form className="flex flex-col space-y-4">
            {['Name', 'Email', 'Subject'].map((field, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={field}
                className="p-3 rounded-full outline-none"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 rounded-2xl resize-none outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-[#D4B968] py-3 px-6 rounded-full font-bold hover:bg-blue-800 transition-colors duration-300 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Location & Social */}
        <div>
          <h2 className="text-xl font-bold mb-2">Our location</h2>
          <p className="mb-4">
            Lorem ipsum dolor amet, consectetur elit. Aliquam ullamcorper lorem.
          </p>
          <div className="w-full h-60 mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://maps.google.com/maps?q=Lenexa%2C%20KS&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
          <h3 className="font-bold mb-2">Connect with us !</h3>
          <div className="flex space-x-4 mt-2">
            {[
              { icon: '📧', label: 'Email' },
              { icon: '📘', label: 'Facebook' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: '📸', label: 'Instagram' },
            ].map((social, i) => (
              <button
                key={i}
                className="bg-[#F5F5F5] text-2xl p-3 rounded-full shadow hover:shadow-md transition"
                aria-label={social.label}
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
