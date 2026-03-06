export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Open Ezefone",
      description: "Visit ezefone.co.uk on your phone — no app store needed. Tap 'Add to Home Screen' for instant access.",
      icon: "🌐",
    },
    {
      number: "2",
      title: "Add your contacts",
      description:
        "Import straight from your phone's address book, or add contacts one by one.",
      icon: "📇",
    },
    {
      number: "3",
      title: "Set your favourites",
      description:
        "Star up to four people — they appear as big, easy-tap cards on your home screen.",
      icon: "⭐",
    },
    {
      number: "4",
      title: "Call or WhatsApp",
      description:
        "Tap a card to call instantly, or use the ··· button to open WhatsApp. That's it!",
      icon: "✅",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16 md:py-28 border-t-2 border-border_light">
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
                <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-1 bg-gradient-to-r from-border_light to-transparent" />
              )}

              <div className="card p-6 hover:shadow-card-hover group">
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
