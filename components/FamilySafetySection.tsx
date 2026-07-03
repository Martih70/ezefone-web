export default function FamilySafetySection() {
  const features = [
    {
      icon: "📞",
      title: "Call for Help",
      color: "bg-red-100",
      description: "One tap calls the person they trust most, straight away.",
    },
    {
      icon: "🔑",
      title: "A family code word",
      color: "bg-amber-100",
      description:
        "So if someone calls pretending to be a relative in trouble, there's a simple way to check it's really them.",
    },
    {
      icon: "💌",
      title: "Daily check-in",
      color: "bg-green-100",
      description:
        "A gentle email to you if they haven't opened their phone by mid-morning. Nothing intrusive, just peace of mind.",
    },
    {
      icon: "💬",
      title: "One-tap Text",
      color: "bg-blue-100",
      description:
        "No fiddly typing to find a number, just tap and message the people who matter.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-bg_primary via-green-50 to-bg_primary py-16 md:py-28 border-t-2 border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Family Safety, built right in</h2>
          <p className="text-lg text-text_secondary">
            Ezefone isn&rsquo;t just simple to use &mdash; it&rsquo;s designed to keep the people you love a little safer, too.
          </p>
        </div>

        {/* Screenshot pair */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">

          {/*
            HOME SCREEN SCREENSHOT
            To use a real image, replace the inner <div> with:
              <img
                src="/screenshots/home-screen.png"
                alt="Ezefone home screen showing Call and Text buttons"
                className="w-full h-full object-cover"
              />
          */}
          <div className="flex-1 max-w-xs mx-auto sm:mx-0">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-[9/16] flex flex-col items-center justify-center shadow-2xl">
              <span className="text-4xl mb-3">📱</span>
              <p className="text-white text-sm font-semibold">Screenshot coming soon</p>
              <p className="text-white/60 text-xs mt-1 px-4 text-center">Home screen — Call &amp; Text buttons</p>
            </div>
          </div>

          {/*
            FAMILY SAFETY SETTINGS SCREENSHOT
            To use a real image, replace the inner <div> with:
              <img
                src="/screenshots/family-safety.png"
                alt="Ezefone Family Safety settings screen"
                className="w-full h-full object-cover"
              />
          */}
          <div className="flex-1 max-w-xs mx-auto sm:mx-0">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800 aspect-[9/16] flex flex-col items-center justify-center shadow-2xl">
              <span className="text-4xl mb-3">🛡️</span>
              <p className="text-white text-sm font-semibold">Screenshot coming soon</p>
              <p className="text-white/60 text-xs mt-1 px-4 text-center">Family Safety settings screen</p>
            </div>
          </div>
        </div>

        {/* Feature callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 hover:shadow-2xl group transform hover:scale-105 duration-300"
            >
              <div
                className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl group-hover:shadow-2xl transition-all`}
              >
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

      </div>
    </section>
  );
}
