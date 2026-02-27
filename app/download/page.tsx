import Stripe from "stripe";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DownloadPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return <InvalidSession />;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let customerEmail = "";
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status !== "paid") {
      return <InvalidSession />;
    }
    customerEmail = session.customer_details?.email || "";
  } catch {
    return <InvalidSession />;
  }

  return (
    <main
      style={{ backgroundColor: "#fefdf8", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6 py-16"
    >
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#d1fae5" }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          className="font-bold mb-3"
          style={{ color: "#0f172a", fontSize: "2rem" }}
        >
          Payment confirmed!
        </h1>
        <p className="text-lg mb-2" style={{ color: "#64748b" }}>
          Thank you for purchasing EzeFone.
        </p>
        {customerEmail && (
          <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
            A receipt has been sent to {customerEmail}
          </p>
        )}

        {/* Download button */}
        <a
          href={`/api/download?session_id=${session_id}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg mb-6 transition-all"
          style={{
            backgroundColor: "#059669",
            boxShadow: "0 6px 20px rgba(5, 150, 105, 0.35)",
            textDecoration: "none",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download EzeFone APK
        </a>

        {/* Install instructions */}
        <div
          className="rounded-2xl p-6 text-left mt-4"
          style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}
        >
          <h3
            className="font-bold mb-4"
            style={{ color: "#0f172a", fontSize: "1rem" }}
          >
            How to install on Android:
          </h3>
          <ol className="space-y-2">
            {[
              "Tap the download button above to save the APK file",
              'Open your phone\'s Settings → Security → enable "Install unknown apps"',
              "Open the downloaded file from your notifications or file manager",
              "Tap Install and follow the prompts",
              "Open EzeFone and grant the requested permissions",
            ].map((step, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm"
                style={{ color: "#475569" }}
              >
                <span
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: "#059669" }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <p className="text-sm mt-8" style={{ color: "#94a3b8" }}>
          Need help?{" "}
          <a
            href="mailto:support@ezefone.co.uk"
            style={{ color: "#059669", textDecoration: "none" }}
          >
            Contact support
          </a>
        </p>

        <Link
          href="/"
          className="block mt-4 text-sm"
          style={{ color: "#94a3b8", textDecoration: "none" }}
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

function InvalidSession() {
  return (
    <main
      style={{ backgroundColor: "#fefdf8", minHeight: "100vh" }}
      className="flex flex-col items-center justify-center px-6 py-16"
    >
      <div className="max-w-lg w-full text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#fee2e2" }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <h1
          className="font-bold mb-3"
          style={{ color: "#0f172a", fontSize: "2rem" }}
        >
          Download link invalid
        </h1>
        <p className="text-lg mb-8" style={{ color: "#64748b" }}>
          This download link is not valid or has expired.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-lg"
          style={{
            backgroundColor: "#059669",
            boxShadow: "0 6px 20px rgba(5, 150, 105, 0.35)",
            textDecoration: "none",
          }}
        >
          ← Back to EzeFone
        </Link>
      </div>
    </main>
  );
}
