import { useState } from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[600px] bg-gray-200 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/api/placeholder/1200/800" 
          alt="Aerial view of suburban houses" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Navigation Bar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-4">
          {/* Logo in shield shape */}
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="text-gold font-bold">
              <span className="text-2xl">M</span>
              <div className="text-sm text-gold">MOREX</div>
              <div className="text-xs text-gold">Asset Management</div>
            </div>
          </div>
          
          {/* Text logo version */}
          <div className="hidden md:flex items-center text-gold">
            <div className="border border-gold rounded-full p-1 mr-2">
              <span className="text-xl">M</span>
            </div>
            <div>
              <div className="text-sm font-semibold">MOREX</div>
              <div className="text-xs">Asset Management</div>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-gold uppercase font-medium text-sm">Home</a>
          <a href="#" className="text-white hover:text-gold uppercase font-medium text-sm">Invest</a>
          <a href="#" className="text-white hover:text-gold uppercase font-medium text-sm">Insight</a>
          <a href="#" className="text-white hover:text-gold uppercase font-medium text-sm">About Us</a>
          <a href="#" className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 uppercase font-medium text-sm rounded">Contact Us</a>
        </nav>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
            CANADA'S <span className="text-gold">PREMIER</span>
          </h1>
          <h2 className="text-gold text-3xl md:text-4xl font-bold mb-2">
            MORTGAGE INVESTMENT
          </h2>
          <h3 className="text-white text-3xl md:text-4xl font-bold">
            CORPORATION
          </h3>
        </div>
        
        {/* Right side text */}
        <div className="absolute right-8 bottom-32 text-right">
          <p className="text-white text-sm font-medium mb-1">YOUR TRUSTED PARTNER</p>
          <p className="text-white text-sm font-medium">IN HOME FINANCING</p>
        </div>
        
        {/* CTA Button */}
        <div className="absolute right-8 bottom-16">
          <button className="bg-gold hover:bg-yellow-600 text-gray-900 px-6 py-3 rounded font-bold text-sm">
            START YOUR JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
}