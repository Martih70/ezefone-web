export default function Footer() {
  return (
    <footer className="bg-dark_gray text-white py-12 border-t border-dark_gray_light shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-phone rounded-lg flex items-center justify-center text-white text-xl font-bold">
                E
              </div>
              <span className="text-2xl font-bold">EzeFone</span>
            </div>
            <p className="text-gray-400">
              Everything you need, nothing you don't.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Downloads</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ezefone.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Google Play Store
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 cursor-not-allowed">
                  App Store (Coming Soon)
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@ezefone.app"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 mb-6">
            <p className="font-semibold text-white mb-2">Created in the UK by CallformLabs</p>
            <a
              href="mailto:info@callform.co.uk"
              className="text-gray-300 hover:text-white transition-colors text-lg"
            >
              info@callform.co.uk
            </a>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 EzeFone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
