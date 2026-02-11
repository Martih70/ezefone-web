"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToDownload = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg_primary border-b border-border_light shadow-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 text-2xl font-bold group">
            <div className="w-10 h-10 bg-phone rounded-lg flex items-center justify-center text-white text-xl font-bold relative group-hover:shadow-card transition-all">
              E
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full"></div>
            </div>
            <span className="text-text_primary">EzeFone</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={scrollToDownload}
              className="px-6 py-2 bg-phone text-white rounded-lg font-semibold hover:bg-emerald-700 shadow-button hover:shadow-card transition-all"
            >
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text_primary hover:text-phone transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={scrollToDownload}
              className="w-full px-6 py-3 bg-phone text-white rounded-lg font-semibold hover:bg-emerald-700 shadow-button transition-all text-left"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
