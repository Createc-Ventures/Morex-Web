import React from "react";

export default function InvestmentIntro() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mb-10 bg-white">
      <div className="md:w-1/2 text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0A1F44]">
          Investment Fundamentals: A Guide To Getting Started
        </h1>
        <p className="text-base text-gray-700 leading-relaxed ">
          At Morex, we believe informed investing leads to confident decisions.
          Whether you're just starting out or looking to sharpen your financial
          knowledge, you’ve come to the right place. This page is your go-to
          resource for understanding key investment tools from flexible accounts
          like TFSAs and RRSPs to alternative options like EMDs and MICs.
          <br /><br />
          Each topic is designed to break down complex concepts into clear,
          helpful insights, so you can grow your knowledge, plan wisely, and
          make empowered financial choices.
          <br />
          Let’s get learning.
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="public\assets\images\YearofInception.png" // Replace with actual path
          alt="Investment guide illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
