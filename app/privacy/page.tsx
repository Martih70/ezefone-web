export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg_primary">
      {/* Header */}
      <div className="bg-gradient-to-br from-bg_primary to-blue-50 py-12 border-b-2 border-border_light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-text_primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-text_secondary">
            Simple. Honest. No surprises.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Intro */}
          <section>
            <p className="text-lg text-text_secondary leading-relaxed mb-4">
              At EzeFone, we believe in simplicity. That includes being simple
              and honest about how we handle your information. This policy
              explains what data we collect, why, and how we protect it.
            </p>
            <p className="text-base text-text_secondary italic">
              EzeFone is created in the UK by CallformLabs.
            </p>
          </section>

          {/* What We Collect */}
          <section className="card p-8">
            <h2 className="text-3xl font-bold text-text_primary mb-4">
              What Information Do We Collect?
            </h2>
            <div className="space-y-4 text-text_secondary">
              <div>
                <h3 className="text-xl font-bold text-text_primary mb-2">
                  Your Contacts
                </h3>
                <p className="leading-relaxed">
                  EzeFone reads your phone's existing contacts so you can call
                  and message them easily. We don't send this data anywhere. It
                  stays on your phone.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text_primary mb-2">
                  Basic Usage Data
                </h3>
                <p className="leading-relaxed">
                  We collect basic information about how you use EzeFone
                  to help us improve the app. This is anonymous.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text_primary mb-2">
                  Crash Reports
                </h3>
                <p className="leading-relaxed">
                  If the app crashes, we collect error information so we can
                  fix bugs. This helps us make EzeFone more reliable.
                </p>
              </div>
            </div>
          </section>

          {/* What We Don't Collect */}
          <section className="card p-8 bg-gradient-to-b from-white to-green-50">
            <h2 className="text-3xl font-bold text-phone mb-4">
              What We Don't Collect
            </h2>
            <div className="space-y-3 text-text_secondary">
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  No call recordings
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  No location tracking
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  No personal data selling
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  No ads or tracking
                </p>
              </div>
            </div>
          </section>

          {/* How We Protect Data */}
          <section className="card p-8">
            <h2 className="text-3xl font-bold text-text_primary mb-4">
              How Do We Protect Your Data?
            </h2>
            <div className="space-y-4 text-text_secondary">
              <p className="text-lg leading-relaxed">
                We take security seriously. Here's what we do:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-phone font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    All data sent to our servers is encrypted in transit
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-phone font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    Your contacts stay on your phone
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-phone font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    We only keep data for as long as needed
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="card p-8 bg-gradient-to-b from-white to-amber-50">
            <h2 className="text-3xl font-bold text-contacts mb-4">
              Your Rights
            </h2>
            <div className="space-y-4 text-text_secondary">
              <p className="text-lg leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-contacts font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    See what data we have about you
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-contacts font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    Delete your data at any time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-contacts font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    Opt out of usage analytics
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Us */}
          <section className="card p-8 border-2 border-phone shadow-xl">
            <h2 className="text-3xl font-bold text-phone mb-4">
              Questions? Contact Us
            </h2>
            <p className="text-lg text-text_secondary mb-4 leading-relaxed">
              If you have questions about our privacy practices, get in touch:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-text_secondary mb-1">Email:</p>
                <a
                  href="mailto:info@callform.co.uk"
                  className="text-xl font-bold text-phone hover:text-emerald-700 transition-colors"
                >
                  info@callform.co.uk
                </a>
              </div>
              <p className="text-sm text-text_secondary">
                We'll respond within 7 days.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center text-text_secondary mt-12 pt-8 border-t-2 border-border_light">
            <p className="text-base">Last updated: February 2026</p>
            <p className="text-sm mt-2">
              This policy is simple by design.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-block px-8 py-4 bg-phone text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
