import React from "react";

interface Testimonial {
  name: string;
  role: string;
  imageUrl: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jennifer Lee",
    role: "Real Estate Investor",
    imageUrl: "/images/jennifer.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    name: "Robert Johnson",
    role: "Business Owner",
    imageUrl: "/images/robert.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    name: "Jason Cavil",
    role: "Real Estate Investor",
    imageUrl: "/images/jason.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis justo id pulvinar suscipit. Pellentesque habitant morbi tristique senectus et netus.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-blue-900 mb-2 font-serif">
        Hear From Those We’ve Worked With
      </h2>
      <p className="text-gray-600 mb-12 [font-family:'Segoe_UI-Semibold',Helvetica]">We Make It Easy—Here’s How</p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-0 [font-family:'Segoe_UI-Semibold',Helvetica]">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 max-w-sm text-left transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-5xl text-blue-900 mb-2">“</div>
            <p className="text-gray-700 mb-4">{t.text}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.imageUrl}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-blue-900">{t.name}</p>
                <p className="text-sm" style={{ color: "#d4b968" }}>
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
