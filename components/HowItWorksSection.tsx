export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Download EzeFone",
      description: "Download EzeFone from the Google Play Store.",
      icon: "📲",
    },
    {
      number: "2",
      title: "Your contacts load automatically",
      description:
        "Open the app and your contacts load automatically from your phone.",
      icon: "📇",
    },
    {
      number: "3",
      title: "Find who you want to reach",
      description:
        "Tap a favourite contact, or browse all contacts to find who you want.",
      icon: "🔍",
    },
    {
      number: "4",
      title: "Call, message, or WhatsApp",
      description:
        "Choose to Call, Message, or WhatsApp them. Done! It's that easy.",
      icon: "✅",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Up and running in minutes</h2>
          <p className="text-lg text-text_secondary">
            Getting started with EzeFone is simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-border_light" />
              )}

              <div className="bg-bg_primary rounded-lg p-6 border border-border_light">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-phone rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-text_primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text_secondary">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
