export default function HeroSection() {
  return (
    <section className="bg-bg_primary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h1 className="text-text_primary">
              Simple calling for the people you love
            </h1>

            <p className="text-xl text-text_secondary leading-relaxed">
              Everything you need, nothing you don't
            </p>

            <p className="text-lg text-text_secondary leading-relaxed">
              EzeFone strips away the complexity of modern smartphones. One
              screen, four buttons, total simplicity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.ezefone.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-phone text-white text-lg font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-center"
              >
                Download on Google Play
              </a>
              <button
                disabled
                className="px-8 py-3 bg-gray-300 text-gray-600 text-lg font-semibold rounded-lg cursor-not-allowed text-center"
              >
                App Store Coming Soon
              </button>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-64 h-auto bg-white rounded-3xl border-8 border-gray-800 shadow-2xl p-4">
              <div className="bg-gray-900 rounded-2xl aspect-[9/16] flex flex-col items-center justify-center text-white">
                <div className="text-center space-y-8 w-full px-4">
                  <div className="pt-6">
                    <div className="w-12 h-12 bg-phone rounded-lg mx-auto flex items-center justify-center text-white font-bold">
                      E
                    </div>
                    <p className="mt-2 font-semibold">EzeFone</p>
                  </div>

                  <div className="space-y-3 pb-6">
                    <button className="w-full py-4 bg-phone rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                      ☎️ Phone
                    </button>
                    <button className="w-full py-4 bg-messages rounded-lg font-semibold hover:bg-sky-700 transition-colors">
                      💬 Messages
                    </button>
                    <button className="w-full py-4 bg-contacts rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                      👥 Contacts
                    </button>
                    <button className="w-full py-4 bg-whatsapp rounded-lg font-semibold hover:bg-teal-700 transition-colors">
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
