import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg_primary">
      {/* Header */}
      <div className="bg-gradient-to-br from-bg_primary to-blue-50 py-12 border-b-2 border-border_light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text_primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-text_secondary">
            Simple. Honest. No surprises.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Intro */}
          <section>
            <p className="text-lg text-text_secondary leading-relaxed">
              At EzeFone, we believe in simplicity. That includes being simple
              and honest about how we handle your information. This policy
              explains what data we collect, why, and how we protect it.
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
                  (e.g., which features you use) to help us improve the app.
                  This is anonymous and helps us understand what works well.
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
                  <strong>No call recordings</strong> - We don't record your calls
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  <strong>No location tracking</strong> - We don't track where
                  you are
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  <strong>No personal data selling</strong> - We never sell your
                  information
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl text-phone font-bold flex-shrink-0">
                  ✓
                </span>
                <p className="text-lg">
                  <strong>No ads or tracking</strong> - EzeFone is simple. No
                  targeted ads, no tracking pixels
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
                    Your contacts stay on your phone and are never sent to us
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
                <li className="flex items-start gap-3">
                  <span className="text-phone font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    We don't share data with third parties (except where legally
                    required)
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
                <li className="flex items-start gap-3">
                  <span className="text-contacts font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-lg">
                    Contact us with privacy questions
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="card p-8">
            <h2 className="text-3xl font-bold text-text_primary mb-4">
              Third-Party Services
            </h2>
            <div className="space-y-4 text-text_secondary">
              <p className="text-lg leading-relaxed">
                EzeFone uses a few third-party services:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-text_primary mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-lg">
                    When you use WhatsApp through EzeFone, you're using Meta's
                    WhatsApp. Messages go through WhatsApp's servers. Read
                    their privacy policy for details.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text_primary mb-1">
                    Analytics
                  </h3>
                  <p className="text-lg">
                    We use basic analytics to understand app usage. This is
                    anonymous and doesn't track individual users.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Children */}
          <section className="card p-8 bg-gradient-to-b from-white to-blue-50">
            <h2 className="text-3xl font-bold text-messages mb-4">
              Children's Privacy
            </h2>
            <p className="text-lg text-text_secondary leading-relaxed">
              EzeFone is designed for adults and older adults. We don't knowingly
              collect data from children under 13. If we discover this has
              happened, we'll delete that data immediately.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="card p-8">
            <h2 className="text-3xl font-bold text-text_primary mb-4">
              Changes to This Policy
            </h2>
            <p className="text-lg text-text_secondary leading-relaxed">
              If we change this privacy policy, we'll update it here and notify
              you in the app. We'll only make changes that improve your privacy,
              never weaken it.
            </p>
          </section>

          {/* Contact Us */}
          <section className="card p-8 border-2 border-phone shadow-xl">
            <h2 className="text-3xl font-bold text-phone mb-4">
              Questions? Contact Us
            </h2>
            <p className="text-lg text-text_secondary mb-4 leading-relaxed">
              If you have any questions about our privacy practices or want to
              exercise your rights, get in touch:
            </p>
            <a
              href="mailto:support@ezefone.app"
              className="text-xl font-bold text-phone hover:text-emerald-700 transition-colors"
            >
              support@ezefone.app
            </a>
            <p className="text-sm text-text_secondary mt-4">
              We'll respond within 7 days.
            </p>
          </section>

          {/* Last Updated */}
          <div className="text-center text-text_secondary mt-12 pt-8 border-t-2 border-border_light">
            <p className="text-base">Last updated: February 2026</p>
            <p className="text-sm mt-2">
              This policy is simple by design. We believe privacy should be easy
              to understand.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-phone text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
