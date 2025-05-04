import React, { useState } from "react";
import { Facebook, Linkedin, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  social: {
    facebook: string;
    x: string;
    linkedin: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "MOE MANZOOR",
    title: "President & CEO, Founder",
    description:
      "Mr. Manzoor is the founder, Chief Executive Officer, Director and President of Morex Capital Corp. He has over two decades of wide-ranging experience in all aspects of real estate investing. He is licensed as a Mortgage Broker and Mortgage Administrator with the Financial Services Regulatory Authority of Ontario (FSRA). In addition to leading the Morex Capital team, Moe is CEO and Director of the Mortgage Manager, as well as a Director of the Canadian Mortgage Group Corp — an established mortgage brokerage serving the GTA and Golden Horseshoe.",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "MARIA TILOTTA",
    title: "Chief Compliance Officer, Co-Founder",
    description:
      "Ms. Tilotta is the co-founder, Chief Compliance Officer, Vice President, and Director of Morex Capital Corp. She also serves as the Executive Vice President and Director of The Mortgage Manager, and as Manager and Mortgage Broker at Canadian Mortgage Group Corp.. Additionally, Maria is a licensed mortgage broker with the Financial Services Regulatory Authority of Ontario (FSRA).",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "ATUL MEHRA",
    title: "Vice President",
    description:
      "Atul is co-founder, Chief Financial Officer, Vice President and Director of Morex Capital Corp, as well as founding partner and Managing Director of M & Co. Chartered Accountants Professional Corporation and is a co- founder and Director of the Canadian Mortgage Group Corp. He is licensed as a Mortgage Broker under FSRA, and holds CPA designations in both Canada and the U.S. Atul brings over 20 years of experience working in corporate and commercial finance, public and private capital markets, and has an extensive network of commercial, retail and institutional investors.",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "DJAMAL SALEH",
    title: "Investor Relations",
    description:
      "With over two decades of experience in Canada’s investment industry, Mr. Saleh has worked for some of the nation’s largest investment firms and banks, earning a reputation for empowering ultra-high-net-worth (UHNW) clients and families to construct resilient, diversified, and sustainably growth-oriented portfolios. His track record at leading institutions such as BMO Private Wealth, Fidelity Investments, and Invesco includes implementing innovative solutions that resulted in over $3 billion in new assets under management. Fluent in five languages and possessing a global perspective, Mr. Saleh brings exceptional expertise and commitment to the organization's objective of delivering superior value and strategic growth to clients.",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  
];

const TeamCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = teamMembers[index];

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <div className="relative bg-[#f5f0e6] text-[#1a1a1a] px-6 md:px-20 py-10 flex items-center justify-center min-h-[400px] overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-5 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl z-10"
      >
        &larr;
      </button>

      {/* AnimatePresence wraps the fading content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl w-full mx-auto text-left"
        >
          <h2 className="text-[#cdb989] text-2xl md:text-3xl font-semibold mb-2"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {current.name}
          </h2>
          <a href="#" className="text-blue-800 text-base md:text-lg underline mb-4 block"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            {current.title}
          </a>
          <p className="text-sm md:text-base mb-6"  style={{ fontFamily: "'Times New Roman', Times, serif" }}>{current.description}</p>
          <div className="flex gap-4">
            <a href={current.social.facebook}>
              <Facebook className="text-black w-5 h-5" />
            </a>
            <a href={current.social.x}>
              <X className="text-black w-5 h-5" />
            </a>
            <a href={current.social.linkedin}>
              <Linkedin className="text-black w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-5 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl z-10"
      >
        &rarr;
      </button>
    </div>
  );
};

export default TeamCarousel;
