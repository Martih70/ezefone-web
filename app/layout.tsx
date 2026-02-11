import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EzeFone - Simple calling for the people you love",
  description:
    "EzeFone strips away the complexity of modern smartphones. One screen, four buttons, total simplicity. Download on Google Play.",
  keywords:
    "simple phone app, elderly, seniors, easy calling, large buttons, accessible",
  openGraph: {
    title: "EzeFone - Simple calling for the people you love",
    description:
      "EzeFone strips away the complexity of modern smartphones. One screen, four buttons, total simplicity.",
    url: "https://ezefone.app",
    siteName: "EzeFone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
