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
      description: "Send and receive messages simply. Just type and send.",
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
    <section className="bg-bg_primary py-16 md:py-24 border-t border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Designed around simplicity</h2>
          <p className="text-lg text-text_secondary">
            Everything you need, organized intuitively for easy access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:shadow-card-hover group">
              <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center text-3xl mb-4 shadow-button group-hover:shadow-card transition-all`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text_secondary">
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
