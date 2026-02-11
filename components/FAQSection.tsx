"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to be tech-savvy to use EzeFone?",
      answer:
        "Not at all. If you can tap a button, you can use EzeFone. The whole design is centered around simplicity and ease of use.",
    },
    {
      question: "Will it replace my regular phone app?",
      answer:
        "EzeFone works alongside your existing phone. It's a simpler way to access calling, messaging, and WhatsApp. You can use both apps as you prefer.",
    },
    {
      question: "Is it available on iPhone?",
      answer: "Currently EzeFone is available on Android only. iOS is coming soon!",
    },
    {
      question: "What if I need help?",
      answer:
        "We're here to help! You can contact us anytime at support@ezefone.app or through the Google Play Store.",
    },
    {
      question: "Can I add my own contacts?",
      answer:
        "Yes! EzeFone reads your existing contacts and lets you add new ones easily. You have full control over who's in your contact list.",
    },
  ];

  return (
    <section className="bg-bg_primary py-16 md:py-24 border-t border-border_light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Questions? We've got answers</h2>
          <p className="text-lg text-text_secondary">
            Find answers to common questions about EzeFone
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-card-hover transition-all">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-text_primary">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-phone transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-border_light">
                  <p className="text-text_secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
