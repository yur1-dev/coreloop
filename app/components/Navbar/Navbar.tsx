"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll to toggle `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Classes applied when user has scrolled
  const scrolledClasses = `
    top-4 left-4 right-4
    bg-black/70
    backdrop-blur-sm
    border border-white/20
    rounded-xl
  `;

  // Classes applied when user is at the top
  const defaultClasses = `
    top-0 left-0 right-0
    bg-transparent
  `;

  return (
    <header
      className={`
        mx-16
        fixed z-50
        transition-all duration-300
        ${isScrolled ? scrolledClasses : defaultClasses}
      `}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Link href="/">
              <img
                className="h-8 w-auto"
                src="/coreloop-logo.svg"
                alt="Coreloop Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/intro"
              className="text-white hover:text-gray-300 transition-colors"
            >
              INTRO
            </Link>
            <Link
              href="/what-we-do"
              className="text-white hover:text-gray-300 transition-colors"
            >
              WHAT WE DO
            </Link>
            <Link
              href="/our-process"
              className="text-white hover:text-gray-300 transition-colors"
            >
              OUR PROCESS
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-gray-300 transition-colors"
            >
              TEAM
            </Link>
            <Link
              href="/contacts"
              className="text-white hover:text-gray-300 transition-colors"
            >
              CONTACTS
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-transparent px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/intro"
            className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 transition-colors"
          >
            INTRO
          </Link>
          <Link
            href="/what-we-do"
            className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 transition-colors"
          >
            WHAT WE DO
          </Link>
          <Link
            href="/our-process"
            className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 transition-colors"
          >
            OUR PROCESS
          </Link>
          <Link
            href="/team"
            className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 transition-colors"
          >
            TEAM
          </Link>
          <Link
            href="/contacts"
            className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 transition-colors"
          >
            CONTACTS
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
