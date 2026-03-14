export default function Footer() {
  return (
    <footer className="bg-dark_gray text-white py-12 border-t border-dark_gray_light shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Media Posts */}
        <div className="mb-10 pb-10 border-b border-gray-700">
          <h3 className="font-semibold text-lg mb-6">Media Posts</h3>
          <div className="flex justify-center">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ibduyPFZXQm13rGpYqiNmW2t8BGRqdYRNquwPhK1qzLUyQeNe3BoGEVagouHwB8Cl%26id%3D61582031554811&show_text=true&width=500"
              width="500"
              height="404"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon-48x48.png" alt="Ezefone" className="w-10 h-10 rounded-lg" />
              <span className="text-2xl font-bold">Ezefone</span>
            </div>
            <p className="text-gray-400">
              Everything you need, nothing you don't.
            </p>
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
                  href="mailto:info@ezefone.co.uk"
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
              href="mailto:info@ezefone.co.uk"
              className="text-gray-300 hover:text-white transition-colors text-lg"
            >
              info@ezefone.co.uk
            </a>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2026 Ezefone. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
