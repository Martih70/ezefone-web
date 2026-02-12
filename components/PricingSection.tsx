interface PricingSectionProps {
  onDownloadClick?: () => void;
}

export default function PricingSection({ onDownloadClick }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-green-50 py-16 md:py-28 border-t-2 border-border_light"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-text_primary mb-4">
            Simple pricing, just like the app
          </h2>
          <p className="text-lg text-text_secondary">
            One price. No surprises.
          </p>
        </div>

        <div className="card border-3 border-phone p-10 md:p-14 max-w-lg mx-auto shadow-2xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300 bg-gradient-to-b from-white to-green-50">
          <div className="text-center mb-10">
            <p className="text-base text-phone mb-2 font-bold uppercase tracking-wide">One-time purchase</p>
            <p className="text-7xl font-bold text-phone">£2.99</p>
            <p className="text-sm text-text_secondary mt-2">No recurring charges ever</p>
          </div>

          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-4">
              <span className="text-phone text-3xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-lg text-text_primary font-semibold">No subscriptions</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-phone text-3xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-lg text-text_primary font-semibold">No hidden fees</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-phone text-3xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-lg text-text_primary font-semibold">Free updates forever</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-phone text-3xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-lg text-text_primary font-semibold">Works on all Android phones</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-text_secondary text-3xl font-bold flex-shrink-0">
                ◎
              </span>
              <p className="text-lg text-text_secondary">iOS coming soon</p>
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.ezefone.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full block text-center text-lg"
            onClick={onDownloadClick}
          >
            Download on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
