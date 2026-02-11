export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-white py-16 md:py-24 border-t border-border_light"
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

        <div className="card border-2 border-phone p-8 md:p-12 max-w-md mx-auto shadow-card hover:shadow-card-hover transition-all">
          <div className="text-center mb-8">
            <p className="text-sm text-text_secondary mb-2 font-semibold">One-time purchase</p>
            <p className="text-6xl font-bold text-phone">£2.99</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-phone text-xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-text_primary">No subscriptions</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-phone text-xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-text_primary">No hidden fees</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-phone text-xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-text_primary">Free updates forever</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-phone text-xl font-bold flex-shrink-0">
                ✓
              </span>
              <p className="text-text_primary">Works on all Android phones</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-text_secondary text-xl font-bold flex-shrink-0">
                ◎
              </span>
              <p className="text-text_secondary">iOS coming soon</p>
            </div>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.ezefone.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full block text-center text-lg"
          >
            Download on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
