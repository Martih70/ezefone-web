export default function ComparisonSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-border_light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Why EzeFone?</h2>
          <p className="text-lg text-text_secondary">
            See the difference between a typical smartphone and EzeFone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Typical Smartphone */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-56 h-80 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-card-hover p-2" style={{boxShadow: "0 20px 40px rgba(31, 41, 55, 0.2)"}}>
              {/* Notch */}
              <div className="h-5 bg-black rounded-b-2xl mb-1"></div>
                <div className="bg-gray-100 rounded-2xl w-full h-full flex flex-col items-center justify-start p-4 overflow-hidden">
                  <p className="text-xs font-semibold text-gray-600 mt-4">
                    9:41
                  </p>
                  <div className="grid grid-cols-4 gap-2 mt-4 w-full flex-1">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-text_primary mb-2">😕</p>
            <h3 className="text-xl font-bold text-text_primary">
              A typical smartphone
            </h3>
            <p className="text-text_secondary mt-2">
              Dozens of apps, notifications, settings. Confusing for anyone
              just wanting to call a loved one.
            </p>
          </div>

          {/* Right: EzeFone */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-56 h-80 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-card-hover p-2" style={{boxShadow: "0 20px 40px rgba(31, 41, 55, 0.2)"}}>
              {/* Notch */}
              <div className="h-5 bg-black rounded-b-2xl mb-1"></div>
                <div className="bg-bg_primary rounded-2xl w-full h-full flex flex-col items-center justify-center p-4">
                  <div className="space-y-3 w-full">
                    <button className="w-full py-4 bg-phone rounded-lg font-bold text-white text-lg hover:bg-emerald-700 transition-colors">
                      ☎️ Phone
                    </button>
                    <button className="w-full py-4 bg-messages rounded-lg font-bold text-white text-lg hover:bg-sky-700 transition-colors">
                      💬 Messages
                    </button>
                    <button className="w-full py-4 bg-contacts rounded-lg font-bold text-white text-lg hover:bg-amber-700 transition-colors">
                      👥 Contacts
                    </button>
                    <button className="w-full py-4 bg-whatsapp rounded-lg font-bold text-white text-lg hover:bg-teal-700 transition-colors">
                      💬 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-text_primary mb-2">✅</p>
            <h3 className="text-xl font-bold text-text_primary">EzeFone</h3>
            <p className="text-text_secondary mt-2">
              4 things. That's it. Phone, Messages, Contacts, WhatsApp. Simple,
              clear, focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
