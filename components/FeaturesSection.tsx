export default function FeaturesSection() {
  const features = [
    {
      icon: "☎️",
      title: "One-tap calling",
      color: "bg-phone",
      description:
        "Call anyone in your contacts with a single tap. No dialling, no confusion.",
    },
    {
      icon: "💬",
      title: "Easy messaging",
      color: "bg-messages",
      description: "Send messages simply. Just type and send.",
    },
    {
      icon: "👥",
      title: "Your contacts",
      color: "bg-contacts",
      description:
        "See all your contacts clearly. Add favourites for even faster access.",
    },
    {
      icon: "💚",
      title: "WhatsApp included",
      color: "bg-whatsapp",
      description:
        "WhatsApp built right in. Video calls, voice notes, messages - all in one place.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-bg_primary via-blue-50 to-bg_primary py-16 md:py-28 border-t-2 border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Designed around simplicity</h2>
          <p className="text-lg text-text_secondary">
            Everything you need, organized intuitively for easy access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-14">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 hover:shadow-2xl group transform hover:scale-105 duration-300">
              <div className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl group-hover:shadow-2xl transition-all`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-text_primary mb-3">
                {feature.title}
              </h3>
              <p className="text-lg text-text_secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Favorites Callout */}
        <div className="card p-8 border-2 border-accent shadow-card hover:shadow-card-hover bg-gradient-to-br from-white to-blue-50">
          <div className="text-center">
            <p className="text-xl text-accent font-bold mb-2">⭐ Pro Tip</p>
            <p className="text-lg text-text_primary font-semibold">
              Pin your most-called people as Favourites for instant one-tap
              access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
