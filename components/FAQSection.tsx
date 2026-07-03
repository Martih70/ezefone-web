"use client";

import { useState } from "react";

const installSteps = {
  iphone: [
    { num: 1, icon: "🧭", title: "Open Safari", detail: "Ezefone works best in Safari on iPhone. Make sure you are using Safari, not Chrome." },
    { num: 2, icon: "📤", title: "Tap the Share button", detail: "Look for the box with an arrow pointing up at the bottom of the screen. Tap it." },
    { num: 3, icon: "➕", title: 'Tap "Add to Home Screen"', detail: 'Scroll down the list that appears and tap "Add to Home Screen", then tap "Add".' },
    { num: 4, icon: "✅", title: "Done — open Ezefone", detail: "The Ezefone icon now appears on your home screen. Tap it any time to open the app." },
  ],
  android: [
    { num: 1, icon: "🌐", title: "Open Chrome", detail: "Ezefone works best in Chrome on Android. Make sure you are using the Chrome browser." },
    { num: 2, icon: "⋮", title: "Tap the three dots menu", detail: "Look for three dots in the top right corner of your screen. Tap them." },
    { num: 3, icon: "➕", title: 'Tap "Add to Home Screen"', detail: 'Tap "Add to Home Screen" from the menu, then tap "Add" to confirm.' },
    { num: 4, icon: "✅", title: "Done — open Ezefone", detail: "The Ezefone icon now appears on your home screen. Tap it any time to open the app." },
  ],
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [installTab, setInstallTab] = useState<"iphone" | "android">("iphone");

  const faqs: { question: string; answer?: string; install?: true }[] = [
    {
      question: "Do I need to be tech-savvy to use Ezefone?",
      answer: "Not at all. If you can tap a button, you can use Ezefone. The whole design is centered around simplicity and ease of use.",
    },
    {
      question: "Will it replace my regular phone app?",
      answer: "Ezefone works alongside your existing phone. It's a simpler way to access calling, messaging, and WhatsApp. You can use both apps as you prefer.",
    },
    {
      question: "How do I add Ezefone to my home screen?",
      install: true,
    },
    {
      question: "What if I need help?",
      answer: "We're here to help! You can contact us at anytime at info@ezefone.co.uk",
    },
    {
      question: "Can I add my own contacts?",
      answer: "Yes! Ezefone reads your existing contacts and lets you add new ones easily. You have full control over who's in your contact list.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-bg_primary to-indigo-50 py-16 md:py-28 border-t-2 border-border_light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Questions? We&apos;ve got answers</h2>
          <p className="text-lg text-text_secondary">
            Find answers to common questions about Ezefone
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-card-hover transition-all">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-text_primary">
                  {faq.question}
                </span>
                <span className={`text-2xl text-phone transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-border_light">
                  {faq.install ? (
                    <div>
                      <p className="text-text_secondary text-sm mb-4">No app store needed. Takes about 30 seconds.</p>

                      {/* Tab switcher */}
                      <div className="flex rounded-xl border-2 border-border_light overflow-hidden mb-5 max-w-xs">
                        <button
                          onClick={() => setInstallTab("iphone")}
                          className={`flex-1 py-2 text-sm font-bold transition-colors ${installTab === "iphone" ? "bg-phone text-white" : "bg-white text-text_secondary hover:bg-green-50"}`}
                        >
                          📱 iPhone
                        </button>
                        <button
                          onClick={() => setInstallTab("android")}
                          className={`flex-1 py-2 text-sm font-bold transition-colors ${installTab === "android" ? "bg-phone text-white" : "bg-white text-text_secondary hover:bg-green-50"}`}
                        >
                          🤖 Android
                        </button>
                      </div>

                      {/* Steps */}
                      <div className="space-y-3">
                        {installSteps[installTab].map((step) => (
                          <div key={step.num} className="flex gap-4 items-start bg-white rounded-xl p-4 border border-border_light">
                            <div className="w-9 h-9 rounded-full bg-phone text-white text-sm font-black flex items-center justify-center flex-shrink-0">
                              {step.num}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span>{step.icon}</span>
                                <p className="text-sm font-bold text-text_primary">{step.title}</p>
                              </div>
                              <p className="text-text_secondary text-sm leading-relaxed">{step.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-text_secondary leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
