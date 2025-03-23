"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen text-white py-16 px-6">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div className="relative max-w-[1400px] h-full mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Container */}
        <div className="md:w-1/2 space-y-4 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              SCALABLE SYSTEMS
            </span>{" "}
            FOR CRYPTO,
            <br />
            BLOCKCHAIN, BOTS, AI & SOCIAL AUTOMATION.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            We build scalable systems for Crypto, Blockchain, Bots, AI, and
            Social Automation.
          </p>
        </div>

        {/* Right Video Container */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-full max-w-[600px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              aria-hidden="true"
            >
              <source src="/hero-vid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
