interface HeroSectionProps {
  onDownloadClick?: () => void;
}

export default function HeroSection({ onDownloadClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-bg_primary to-blue-50 py-16 md:py-28">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://ezefone.co.uk"
                className="btn-primary text-center text-lg"
                onClick={onDownloadClick}
              >
                Open Ezefone Free
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-64 h-auto bg-white rounded-3xl border-8 border-gray-800 shadow-card-hover p-4" style={{boxShadow: "0 20px 40px rgba(31, 41, 55, 0.3)"}}>
              {/* Notch simulation */}
              <div className="h-6 bg-gray-900 rounded-b-2xl mb-2"></div>
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
