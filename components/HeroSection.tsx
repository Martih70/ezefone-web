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
              Ezefone strips away the complexity of modern smartphones. One
              screen, four buttons, total simplicity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://ezefone-backend-c8eadiyp.on-forge.com/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-lg"
                onClick={onDownloadClick}
              >
                Get Ezefone — £2.99
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-64 h-auto bg-white rounded-3xl border-8 border-gray-800 shadow-card-hover p-4" style={{boxShadow: "0 20px 40px rgba(31, 41, 55, 0.3)"}}>
              {/* Notch simulation */}
              <div className="h-6 bg-gray-900 rounded-b-2xl mb-2"></div>
              <div className="bg-gray-100 rounded-2xl aspect-[9/16] flex flex-col text-gray-800 overflow-hidden">
                {/* App header */}
                <div className="bg-emerald-800 px-3 py-2 flex justify-between items-center flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center text-white text-xs font-bold">E</div>
                    <span className="text-white text-xs font-bold">Ezefone</span>
                  </div>
                  <span className="text-white text-xs font-bold">10:30</span>
                </div>
                {/* My Favourites grid */}
                <div className="flex-1 p-2 flex flex-col gap-2">
                  <p className="text-center text-gray-400 text-[9px] font-bold tracking-wider uppercase">My Favourites</p>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    {[
                      { name: "Margaret", color: "bg-teal-500" },
                      { name: "James",    color: "bg-blue-500" },
                      { name: "Susan",    color: "bg-purple-500" },
                      { name: "David",    color: "bg-amber-600" },
                    ].map(p => (
                      <div key={p.name} className="bg-white rounded-xl flex flex-col items-center justify-center gap-1 py-2 shadow-sm">
                        <div className={`w-8 h-8 ${p.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                          {p.name[0]}
                        </div>
                        <span className="text-[9px] font-bold text-gray-700">{p.name}</span>
                        <span className="text-[8px] bg-emerald-600 text-white rounded-full px-1.5 py-0.5">Tap to call</span>
                      </div>
                    ))}
                  </div>
                  {/* SOS bar */}
                  <div className="bg-red-600 rounded-lg py-1.5 flex items-center justify-center gap-1">
                    <span className="text-white text-[9px] font-bold">🆘 Call for Help</span>
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
        </div>
      </div>
    </section>
  );
}
