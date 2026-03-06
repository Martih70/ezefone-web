export default function ComparisonSection() {
  return (
    <section className="bg-white py-16 md:py-28 border-t-2 border-border_light shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">Why Ezefone?</h2>
          <p className="text-lg text-text_secondary">
            See the difference between a typical smartphone and Ezefone
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

          {/* Right: Ezefone */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-56 h-80 bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-card-hover p-2" style={{boxShadow: "0 20px 40px rgba(31, 41, 55, 0.2)"}}>
                {/* Notch */}
                <div className="h-5 bg-black rounded-b-2xl mb-1"></div>
                <div className="bg-gray-100 rounded-2xl w-full h-full flex flex-col overflow-hidden">
                  {/* App header */}
                  <div className="bg-emerald-800 px-3 py-1.5 flex justify-between items-center flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-white/20 rounded-md flex items-center justify-center text-white text-xs font-bold">E</div>
                      <span className="text-white text-xs font-bold">Ezefone</span>
                    </div>
                    <span className="text-white text-xs font-bold">10:30</span>
                  </div>
                  {/* My Favourites grid */}
                  <div className="flex-1 p-2 flex flex-col gap-1.5">
                    <p className="text-center text-gray-400 text-[8px] font-bold tracking-wider uppercase">My Favourites</p>
                    <div className="grid grid-cols-2 gap-1.5 flex-1">
                      {[
                        { name: "Margaret", color: "bg-teal-500" },
                        { name: "James",    color: "bg-blue-500" },
                        { name: "Susan",    color: "bg-purple-500" },
                        { name: "David",    color: "bg-amber-600" },
                      ].map(p => (
                        <div key={p.name} className="bg-white rounded-xl flex flex-col items-center justify-center gap-1 py-1.5 shadow-sm">
                          <div className={`w-7 h-7 ${p.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                            {p.name[0]}
                          </div>
                          <span className="text-[8px] font-bold text-gray-700">{p.name}</span>
                          <span className="text-[7px] bg-emerald-600 text-white rounded-full px-1.5 py-0.5">Tap to call</span>
                        </div>
                      ))}
                    </div>
                    {/* SOS bar */}
                    <div className="bg-red-600 rounded-lg py-1 flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">🆘 Call for Help</span>
                    </div>
                  </div>
                  {/* Bottom nav */}
                  <div className="bg-white border-t border-gray-200 flex justify-around py-1 flex-shrink-0">
                    {["⭐", "📞", "💬", "⚙️"].map((icon, i) => (
                      <div key={i} className={`flex flex-col items-center ${i === 0 ? "text-emerald-700" : "text-gray-400"}`}>
                        <span className="text-xs">{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-text_primary mb-2">✅</p>
            <h3 className="text-xl font-bold text-text_primary">Ezefone</h3>
            <p className="text-text_secondary mt-2">
              Your four favourite people, front and centre. One tap to call.
              WhatsApp built in. Nothing else to think about.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
