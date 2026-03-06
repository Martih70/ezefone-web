"use client";

import { useState } from "react";

interface NavbarProps {
  onDownloadClick?: () => void;
}

export default function Navbar(_props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bg_primary border-b-2 border-border_light shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src="/favicon-48x48.png" alt="Ezefone" className="w-12 h-12 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-text_primary">Ezefone</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a
              href="https://ezefone-backend-c8eadiyp.on-forge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open App
            </a>
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
            <a
              href="https://ezefone-backend-c8eadiyp.on-forge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full block text-left"
            >
              Open App
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
