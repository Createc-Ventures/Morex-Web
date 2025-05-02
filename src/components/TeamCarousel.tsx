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
      "Mr. Manzoor is the founder, Chief Executive Officer, Director and President of Morex Capital Corp. He has over two decades of wide-ranging experience in all aspects of real estate investing...",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "JANE DOE",
    title: "Chief Financial Officer",
    description:
      "Jane brings 15+ years of experience in corporate finance and strategic planning, guiding fiscal strategy across diverse markets...",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "JOHN SMITH",
    title: "Chief Technology Officer",
    description:
      "John is responsible for leading innovation, overseeing the development and implementation of technology initiatives across the company...",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "EMILY PARK",
    title: "VP, Operations",
    description:
      "Emily oversees day-to-day operations, ensuring alignment between departments and maintaining high levels of organizational efficiency...",
    social: {
      facebook: "#",
      x: "#",
      linkedin: "#",
    },
  },
  {
    name: "DAVID LEE",
    title: "Head of Legal",
    description:
      "David provides strategic legal counsel to the leadership team and ensures compliance with all applicable regulations and standards...",
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
    <div className="relative bg-[#f5f0e6] text-[#1a1a1a] px-20 py-10 flex items-center justify-center min-h-[400px] overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-3xl"
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
          className="text-left max-w-2xl w-full absolute"
        >
          <h2 className="text-[#cdb989] text-3xl font-semibold mb-2">
            {current.name}
          </h2>
          <a href="#" className="text-blue-800 text-lg underline mb-4 block">
            {current.title}
          </a>
          <p className="text-sm mb-6">{current.description}</p>
          <div className="flex gap-4">
            <a href={current.social.facebook}>
              <Facebook className="text-black" />
            </a>
            <a href={current.social.x}>
              <X className="text-black" />
            </a>
            <a href={current.social.linkedin}>
              <Linkedin className="text-black" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-3xl"
      >
        &rarr;
      </button>
    </div>
  );
};

export default TeamCarousel;
