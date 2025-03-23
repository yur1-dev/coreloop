import React from "react";
import { FaLink, FaBolt, FaBrain, FaTwitter } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="h-screen px-4 bg-[#0E0E0E]">
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-3xl font-bold mb-2 text-center text-white">
          What We Do
        </div>

        {/* Description */}
        <div className="text-center text-gray-300 mb-8">
          Coreloop is a development studio focused on high-performance systems
          and rapid execution. We specialize in:
        </div>

        {/* Bento Grid: 1 col on small screens, 2 cols on md, 5 cols on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Card 1: Big (top-left), spans 3 of 5 columns at lg */}
          <div
            className="flex p-6 bg-[#13171A] rounded-lg border border-[#468FAF] shadow-md hover:shadow-xl transition duration-300 text-white 
                          md:col-span-2 lg:col-span-3"
          >
            <div className="flex-none flex justify-center items-center mr-4 mb-4 w-14 h-14 rounded-full border-2 border-[#468FAF] overflow-hidden">
              <FaLink size={28} color="white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">
                Blockchain &amp; DeFi infrastructure
              </div>
              <p className="font-light">
                Scalable and secure solutions for next-generation financial
                systems.
              </p>
            </div>
          </div>

          {/* Card 2: Smaller (top-right), spans 2 of 5 columns at lg */}
          <div
            className="flex p-6 bg-[#13171A] rounded-lg border border-[#468FAF] shadow-md hover:shadow-xl transition duration-300 text-white 
                          md:col-span-2 lg:col-span-2"
          >
            <div className="flex-none flex justify-center items-center mr-4 mb-4 w-14 h-14 rounded-full border-2 border-[#468FAF] overflow-hidden">
              <FaBolt size={28} color="white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">
                High-frequency trading bots
              </div>
              <p className="font-light">
                Lightning-fast algorithms designed to capitalize on market
                inefficiencies.
              </p>
            </div>
          </div>

          {/* Card 3: Smaller (bottom-left), spans 2 of 5 columns at lg */}
          <div
            className="flex p-6 bg-[#13171A] rounded-lg border border-[#468FAF] shadow-md hover:shadow-xl transition duration-300 text-white 
                          md:col-span-2 lg:col-span-2"
          >
            <div className="flex-none flex justify-center items-center mr-4 mb-4 w-14 h-14 rounded-full border-2 border-[#468FAF] overflow-hidden">
              <FaBrain size={28} color="white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">
                AI-powered automation
              </div>
              <p className="font-light">
                Intelligent systems that learn and optimize workflows at scale.
              </p>
            </div>
          </div>

          {/* Card 4: Big (bottom-right), spans 3 of 5 columns at lg */}
          <div
            className="flex p-6 bg-[#13171A] rounded-lg border border-[#468FAF] shadow-md hover:shadow-xl transition duration-300 text-white 
                          md:col-span-2 lg:col-span-3"
          >
            <div className="flex-none flex justify-center items-center mr-4 mb-4 w-14 h-14 rounded-full border-2 border-[#468FAF] overflow-hidden">
              <FaTwitter size={28} color="white" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xl font-semibold mb-2">
                Twitter and social media integrations
              </div>
              <p className="font-light">
                Expand your reach and automate interactions across key social
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
