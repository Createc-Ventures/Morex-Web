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
      "Mr. Manzoor is the founder, Chief Executive Oﬃcer, Director and President of Morex Asset\n" +
        "Management and Morex Capital Corp. He has over two decades of wide-ranging experience in all\n" +
        "aspects of real estate investing. He is licensed as a Mortgage Broker and Mortgage Administrator\n" +
        "with the Financial Services Regulatory Authority of Ontario (FSRA). In addition to leading the\n" +
        "Morex Capital team, Moe is the Director of the Canadian Mortgage Group Corp — an established\n" +
        "mortgage brokerage serving the GTA and Golden Horseshoe.",
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
      "Ms. Tilotta is the co-founder, Vice President, and Director of Morex Capital Corp. She also serves\n" +
        "as the Chief Compliance Oﬃcer, Executive Vice President and Director of Morex Asset\n" +
        "Management, and as Manager and Mortgage Broker at Canadian Mortgage Group Corp.\n" +
        "Additionally, Maria is a licensed mortgage broker with the Financial Services Regulatory\n" +
        "Authority of Ontario (FSRA).",
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
      "Atul is co-founder, Vice President and Director of Morex Capital Corp, as\n" +
        "well as founding partner and Managing Director of M & Co. Chartered Accountants Professional\n" +
        "Corporation and is a co- founder and Director of the Canadian Mortgage Group Corp. He is\n" +
        "licensed as a Mortgage Broker under FSRA and holds CPA designations in both Canada and the\n" +
        "U.S. Atul brings over 20 years of experience working in corporate and commercial finance, public\n" +
        "and private capital markets, and has an extensive network of commercial, retail and institutional\n" +
        "investors.",
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
      "With over two decades of experience in Canada’s investment industry, Mr. Saleh has worked for\n" +
        "some of the nation’s largest investment firms and banks, earning a reputation for empowering\n" +
        "ultra-high-net-worth (UHNW) clients and families to construct resilient, diversified, and\n" +
        "sustainably growth-oriented portfolios. His track record at leading institutions such as BMO\n" +
        "Private Wealth, Fidelity Investments, and Invesco includes implementing innovative solutions\n" +
        "that resulted in over $3 billion in new assets under management. Fluent in five languages and\n" +
        "possessing a global perspective, Mr. Saleh brings exceptional expertise and commitment to the\n" +
        "organization's objective of delivering superior value and strategic growth to clients.",
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
          className="max-w-lg w-full mx-auto text-left px-6"
        >
          <h2 className="text-[#cdb989] text-2xl md:text-3xl font-semibold mb-2 font-serif"  >
            {current.name}
          </h2>
          <a href="#" className="text-blue-800 text-base md:text-lg underline mb-4 block [font-family:'Segoe_UI-Semibold',Helvetica]"  >
            {current.title}
          </a>
          <p className="text-sm md:text-base mb-6 [font-family:'Segoe_UI-Semibold',Helvetica]" >{current.description}</p>
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
