import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Posts | Ezefone",
  description: "Latest news and updates from Ezefone on Facebook.",
};

const posts = [
  {
    id: 1,
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ibduyPFZXQm13rGpYqiNmW2t8BGRqdYRNquwPhK1qzLUyQeNe3BoGEVagouHwB8Cl%26id%3D61582031554811&show_text=true&width=500",
    fbUrl:
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02ibduyPFZXQm13rGpYqiNmW2t8BGRqdYRNquwPhK1qzLUyQeNe3BoGEVagouHwB8Cl&id=61582031554811",
  },
];

export default function MediaPosts() {
  return (
    <main className="min-h-screen bg-bg_primary">
      {/* Header */}
      <div className="bg-dark_gray text-white py-12 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 mb-6 w-fit">
            <img src="/favicon-48x48.png" alt="Ezefone" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold">Ezefone</span>
          </a>
          <h1 className="text-4xl font-bold mb-3">Media Posts</h1>
          <p className="text-gray-300 text-lg">Latest news and updates from Ezefone.</p>
        </div>
      </div>

      {/* Posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.id} className="card p-6">
              <div className="flex justify-center mb-4">
                <iframe
                  src={post.src}
                  width="500"
                  height="404"
                  style={{ border: "none", overflow: "hidden", maxWidth: "100%" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
              <div className="text-center">
                <a
                  href={post.fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View post &amp; comments on Facebook →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
            ← Back to Ezefone
          </a>
        </div>
      </div>
    </main>
  );
}
