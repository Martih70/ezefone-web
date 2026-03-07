"use client";

import { useState } from "react";

const steps = {
  iphone: [
    {
      num: 1,
      icon: "🧭",
      title: "Open Safari",
      detail: "Ezefone works best in Safari on iPhone. Make sure you are using Safari, not Chrome.",
    },
    {
      num: 2,
      icon: "📤",
      title: 'Tap the Share button',
      detail: 'Look for the box with an arrow pointing up at the bottom of the screen. Tap it.',
    },
    {
      num: 3,
      icon: "➕",
      title: "Tap \"Add to Home Screen\"",
      detail: 'Scroll down the list that appears and tap "Add to Home Screen", then tap "Add".',
    },
    {
      num: 4,
      icon: "✅",
      title: "Done — open Ezefone",
      detail: "The Ezefone icon now appears on your home screen. Tap it any time to open the app.",
    },
  ],
  android: [
    {
      num: 1,
      icon: "🌐",
      title: "Open Chrome",
      detail: "Ezefone works best in Chrome on Android. Make sure you are using the Chrome browser.",
    },
    {
      num: 2,
      icon: "⋮",
      title: "Tap the three dots menu",
      detail: "Look for three dots in the top right corner of your screen. Tap them.",
    },
    {
      num: 3,
      icon: "➕",
      title: "Tap \"Add to Home Screen\"",
      detail: 'Tap "Add to Home Screen" from the menu, then tap "Add" to confirm.',
    },
    {
      num: 4,
      icon: "✅",
      title: "Done — open Ezefone",
      detail: "The Ezefone icon now appears on your home screen. Tap it any time to open the app.",
    },
  ],
};

export default function InstallSection() {
  const [tab, setTab] = useState<"iphone" | "android">("iphone");

  return (
    <section className="py-16 md:py-24 bg-white border-t-2 border-border_light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-text_primary mb-3">
            Add Ezefone to your home screen
          </h2>
          <p className="text-lg text-text_secondary">
            No app store needed. Takes about 30 seconds.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-xl border-2 border-border_light overflow-hidden mb-8 max-w-xs mx-auto">
          <button
            onClick={() => setTab("iphone")}
            className={`flex-1 py-3 text-base font-bold transition-colors ${
              tab === "iphone"
                ? "bg-phone text-white"
                : "bg-white text-text_secondary hover:bg-green-50"
            }`}
          >
            📱 iPhone
          </button>
          <button
            onClick={() => setTab("android")}
            className={`flex-1 py-3 text-base font-bold transition-colors ${
              tab === "android"
                ? "bg-phone text-white"
                : "bg-white text-text_secondary hover:bg-green-50"
            }`}
          >
            🤖 Android
          </button>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps[tab].map((step) => (
            <div
              key={step.num}
              className="flex gap-5 items-start bg-bg_primary rounded-2xl p-5 border border-border_light"
            >
              <div className="w-11 h-11 rounded-full bg-phone text-white text-lg font-black flex items-center justify-center flex-shrink-0">
                {step.num}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{step.icon}</span>
                  <p className="text-base font-bold text-text_primary">{step.title}</p>
                </div>
                <p className="text-text_secondary text-sm leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <p className="text-center text-text_secondary text-sm mt-8">
          Already installed? <a href="https://ezefone-backend-c8eadiyp.on-forge.com/login" target="_blank" rel="noopener noreferrer" className="text-phone font-bold hover:underline">Sign in here</a>
        </p>

      </div>
    </section>
  );
}
