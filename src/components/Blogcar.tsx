import React, { useRef, useState } from "react";

const cardData = [
  {
    title: "Research and Thought Leadership",
    subtitle: "The Role of Alternative Investments in a Modern Portfolio.",
    image: "/assets/images/card1.jpg",
    link: "/research-and-thought-leadership",
  },
  {
    title: "Adapting to Evolving Customer Needs",
    subtitle: "Understanding shifting expectations and staying ahead with customer-first thinking.",
    image: "/assets/images/card2.jpg",
    link: "/adapting-to-customer-needs",
  },
  {
    title: "From Ideas to Impact",
    subtitle: "Turning smart thinking into real-world business results.",
    image: "/assets/images/card3.jpg",
    link: "/from-ideas-to-impact",
  },
  {
    title: "Innovating for the Future",
    subtitle: "Harnessing technology to drive tomorrow's solutions.",
    image: "/assets/images/card4.jpg",
    link: "/innovating-for-the-future",
  },
  {
    title: "Strategic Insights",
    subtitle: "Deep dives into emerging market trends and opportunities.",
    image: "/assets/images/card5.jpg",
    link: "/strategic-insights",
  },
  {
    title: "Customer-Centric Growth",
    subtitle: "Elevating business strategies with customer-first approaches.",
    image: "/assets/images/card6.jpg",
    link: "/customer-centric-growth",
  },
];

const ScrollableCards: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = scrollRef.current;
    if (!slider) return;
    setIsDown(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const slider = scrollRef.current;
    if (!isDown || !slider) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto w-full cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex gap-6 px-4 min-w-[180%] py-6 select-none">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] bg-white border border-[#e0e0e0] rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-[230px] w-full object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#b79d60] mb-2 text-left">
                {card.title}
              </h3>
              <p className="text-sm text-gray-800 text-left mb-6">
                {card.subtitle}
              </p>
              <a
                href={card.link}
                className="inline-block bg-white border border-[#cdb989] text-[#012c51] text-sm font-semibold px-5 py-2 mt-28 rounded-full hover:shadow-md transition text-left"
              >
                READ
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableCards;
