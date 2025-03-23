"use client"; // If using Next.js 13+ app router

import React from "react";
import Image from "next/image";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 text-white bg-cover bg-center bg-no-repeat">
      {/* Dark Gradient Overlay for Contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] to-[#1A1A1A] opacity-80 bg-cover m-20 rounded-4xl"
        style={{ backgroundImage: "url('/bg-img-contact.png')" }}
      ></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <Image
          src="/hero-img.png"
          alt="Coreloop Logo"
          width={64} // 16*4 = 64px (w-16 equivalent)
          height={64} // 16*4 = 64px (h-16 equivalent)
          className="mx-auto mb-4"
        />

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h1>

        {/* Subtext */}
        <p className="text-gray-300 mb-8">
          We&apos;re always on the lookout for innovative partnerships.
          Let&rsquo;s join forces to build groundbreaking solutions and drive
          success together.
        </p>

        {/* Contact / Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            href="https://discord.gg/YourDiscordLink"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800">
              <FaDiscord className="w-6 h-6 text-white group-hover:text-[#468FAF]" />
            </div>
          </a>
          <a
            href="https://t.me/YourTelegramHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800">
              <FaTelegramPlane className="w-6 h-6 text-white group-hover:text-[#468FAF]" />
            </div>
          </a>
          <a
            href="https://twitter.com/YourTwitterHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800">
              <FaTwitter className="w-6 h-6 text-white group-hover:text-[#468FAF]" />
            </div>
          </a>
          <a
            href="https://linkedin.com/YourLinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800">
              <FaLinkedin className="w-6 h-6 text-white group-hover:text-[#468FAF]" />
            </div>
          </a>
          <a
            href="https://youtube.com/YourYouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800">
              <FaYoutube className="w-6 h-6 text-white group-hover:text-[#468FAF]" />
            </div>
          </a>
          <a
            href="https://github.com/YourGitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800">
              <FaGithub className="w-6 h-6 text-white group-hover:text-[#468FAF]" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
