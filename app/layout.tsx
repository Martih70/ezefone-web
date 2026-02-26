import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EzeFone - Simple calling for the people you love",
  description:
    "EzeFone strips away the complexity of modern smartphones. One screen, four buttons, total simplicity. Download on Google Play.",
  keywords:
    "simple phone app, elderly, seniors, easy calling, large buttons, accessible",
  authors: [{ name: "CallformLabs", url: "https://callform.co.uk" }],
  creator: "CallformLabs",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
