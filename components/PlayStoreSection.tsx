export default function PlayStoreSection() {
  return (
    <section className="bg-gradient-to-br from-green-600 to-green-800 py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Big news
        </div>

        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
          Ezefone is coming to Google Play!
        </h2>

        <p className="text-green-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          We&rsquo;re thrilled to announce that Ezefone will soon be officially available on the Google Play Store &mdash; giving Android users an even easier way to get set up. Give the people you love a simpler, safer phone experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-3 rounded-full text-lg">
            Coming soon to Google Play
          </div>
        </div>

        <p className="text-green-200 text-base max-w-xl mx-auto">
          <strong className="text-white">iPhone users &mdash; you&rsquo;re not forgotten!</strong> The iPhone version is on its way.
          In the meantime, add Ezefone to your home screen straight from Safari &mdash; it works exactly like an app, no download needed.
        </p>

      </div>
    </section>
  );
}
