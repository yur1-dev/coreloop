"use client"; // For Next.js 13+ client component

import React from "react";
import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Role",
      image: "/john.png",
      description: "Visionary leader driving innovation and growth.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jane Smith",
      role: "Role",
      image: "/jane.png",
      description: "Tech guru overseeing all development strategies.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Alice Johnson",
      role: "Role",
      image: "/alice.png",
      description: "Crafting seamless user experiences and visuals.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-4xl font-bold text-center text-white mb-12">
          Team
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#13171A] rounded-lg border border-[#468FAF] shadow-md hover:shadow-xl transition duration-300 text-gray-200 flex flex-col items-center text-center p-6"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 border-4 border-white rounded-full" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* Name & Role */}
              <div className="text-xl font-semibold text-white mb-1">
                {member.name}
              </div>
              <div className="text-sm text-gray-400 mb-3">{member.role}</div>

              {/* Description (Optional) */}
              {member.description && (
                <div className="text-sm text-gray-300 mb-4">
                  {member.description}
                </div>
              )}

              {/* Social Icons (Placeholders) */}
              <div className="flex space-x-3">
                {/* LinkedIn */}
                <a
                  href={member.socials?.linkedin || "#"}
                  className="text-gray-400 hover:text-white transition"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  🔗
                </a>
                {/* Twitter */}
                <a
                  href={member.socials?.twitter || "#"}
                  className="text-gray-400 hover:text-white transition"
                  aria-label={`${member.name}'s Twitter`}
                >
                  🐦
                </a>
                {/* GitHub */}
                <a
                  href={member.socials?.github || "#"}
                  className="text-gray-400 hover:text-white transition"
                  aria-label={`${member.name}'s GitHub`}
                >
                  💻
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
