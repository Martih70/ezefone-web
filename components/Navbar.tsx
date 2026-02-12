"use client";

import { useState } from "react";

interface NavbarProps {
  onDownloadClick?: () => void;
}

export default function Navbar({ onDownloadClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToDownload = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
    onDownloadClick?.();
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg_primary border-b-2 border-border_light shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-12 h-12 bg-phone rounded-xl flex items-center justify-center text-white text-2xl font-bold relative shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
              E
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full shadow-lg border-2 border-white"></div>
            </div>
            <span className="text-2xl font-bold text-text_primary">EzeFone</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={scrollToDownload}
              className="btn-primary"
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
              className="btn-primary w-full text-left"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
