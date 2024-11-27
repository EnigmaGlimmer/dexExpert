"use client"
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Expert Web Design and IT Services</h1>
        <p className="text-lg md:text-xl mb-8">Freelance solutions for web design, SEO, and local IT services tailored to your needs.</p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">Contact</button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition">Learn</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
