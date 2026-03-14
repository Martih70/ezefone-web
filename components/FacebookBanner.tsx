"use client";

import { useState, useEffect } from "react";

export default function FacebookBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in after 12 seconds
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 12000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Auto-dismiss after 30 seconds
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 30000);

    return () => clearTimeout(hideTimer);
  }, [visible]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
      style={{ width: "340px" }}
    >
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <img src="/favicon-48x48.png" alt="Ezefone" className="w-5 h-5 rounded" />
            <span className="text-sm font-semibold text-gray-700">Latest from Ezefone</span>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Facebook post iframe */}
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ibduyPFZXQm13rGpYqiNmW2t8BGRqdYRNquwPhK1qzLUyQeNe3BoGEVagouHwB8Cl%26id%3D61582031554811&show_text=true&width=340"
          width="340"
          height="380"
          style={{ border: "none", overflow: "hidden", display: "block" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
