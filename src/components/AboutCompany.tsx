import React from 'react';

const AboutCompany: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-10 p-3 bg-[#F5F5F5]">

      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-900" style={{ fontFamily: "'Times New Roman', Times, serif" }}>ABOUT COMPANY</h2>
        <p className="text-gray-700 leading-relaxed"style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper lorem vel molestie tempor.
          Aliquam ultrices nisl ac rhoncus ullamcorper. Aliquam erat volutpat. Morbi ultricies risus odio, a cursus
          nibh iaculis in. Cras suscipit tellus non purus molestie tincidunt.
          
          a. Maecenas vitae dui sed metus efficitur rutrum sed id sapien. Aenean eu diam rhoncus, varius lacus vel,
          placerat eros. Nam commodo metus massa. Aliquam ultrices nisl ac rhoncus ullamcorper. Aliquam erat
          volutpat. Morbi ultricies risus odio, a cursus nibh iaculis in.
        </p>
        <a
          href="#"
          className="text-yellow-600 font-bold uppercase tracking-wide hover:underline"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Learn More About Us →
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
        <div className="rounded-lg overflow-hidden ">
          <img
            src="public\assets\images\2people.png" // Update to your correct path
            alt="Two Businessmen Discussing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
