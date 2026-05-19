import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const editorialNew = localFont({
  display: "swap",
  src: "../public/fonts/editorial-new.woff2",
  variable: "--font-editorial-new",
});

const glide = localFont({
  display: "swap",
  src: "../public/fonts/Glide-Variable.woff2",
  variable: "--font-glide",
  weight: "400 900",
});

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
  },
  appleWebApp: {
    title: "Care Made Easy",
  },
  authors: [{ name: "Matthew Blode", url: "https://matthewblode.com" }],
  creator: "Matthew Blode",
  description:
    "Care Made Easy: a behind-the-scenes look at Done Bear and the open-source tools that make shipping with care possible.",
  keywords: [
    "Care Made Easy",
    "Blode Stack",
    "Done Bear",
    "Claude Code",
    "Codex",
    "Agent Skills",
    "Strata Sync",
    "Blode UI",
    "Blode Icons",
    "AllMD",
    "DiffHub",
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    description:
      "How to build a to-do list app in 2026: care, simplicity, and the open-source tools behind Done Bear.",
    locale: "en_US",
    siteName: "Care Made Easy",
    title: "Care Made Easy",
    type: "website",
    url: BASE_URL,
  },
  other: {
    "theme-color": "#f0f0f0",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: "Care Made Easy | Matthew Blode",
    template: "%s | Care Made Easy",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description:
      "How to build a to-do list app in 2026: care, simplicity, and the open-source tools behind Done Bear.",
    title: "Care Made Easy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${BASE_URL}/#website`,
      "@type": "WebSite",
      description: "Care Made Easy: the open-source tools behind Done Bear.",
      name: "Care Made Easy",
      publisher: {
        "@id": `${BASE_URL}/#person`,
      },
      url: BASE_URL,
    },
    {
      "@id": `${BASE_URL}/#person`,
      "@type": "Person",
      email: "m@blode.co",
      name: "Matthew Blode",
      sameAs: [
        "https://github.com/mblode",
        "https://x.com/mattblode",
        "https://twitter.com/mattblode",
      ],
      url: "https://matthewblode.com",
    },
    {
      "@id": `${BASE_URL}/#presentation`,
      "@type": "PresentationDigitalDocument",
      about: ["AI Engineering", "Claude Code", "Codex", "Done Bear", "Strata Sync", "Agent Skills"],
      author: {
        "@id": `${BASE_URL}/#person`,
      },
      description:
        "How to build a to-do list app in 2026 with care, simplicity, and open-source tools.",
      headline: "How to build a to-do list app in 2026",
      name: "Care Made Easy",
      url: BASE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script id="json-ld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </head>
      <body className={`${inter.variable} ${editorialNew.variable} ${glide.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
