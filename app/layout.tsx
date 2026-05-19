import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const editorialNew = localFont({
  adjustFontFallback: "Times New Roman",
  display: "swap",
  src: "../public/fonts/editorial-new.woff2",
  variable: "--font-editorial-new",
});

const glide = localFont({
  adjustFontFallback: "Arial",
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
    "Agents made code cheap — taste is the bottleneck now. A 22-slide deck on the open-source stack (Strata Sync, Blode UI, Agent Skills) behind Done Bear.",
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
    "Claude Code for Developers",
    "Melbourne",
    "agent-driven development",
    "AI engineering",
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    description:
      "The bottleneck shifted from writing code to encoding taste. 10 open-source tools that let you ship fast without shipping slop.",
    locale: "en_US",
    siteName: "Care Made Easy",
    title: "Care Made Easy",
    type: "website",
    url: BASE_URL,
  },
  other: {
    "theme-color": "#211f1e",
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
      "Agents write the code. Taste is what ships. The open-source stack behind Done Bear, in 22 slides.",
    title: "Care Made Easy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${BASE_URL}/#website`,
      "@type": "WebSite",
      description:
        "Care Made Easy is a presentation by Matthew Blode on the open-source primitives — Strata Sync, Blode UI, Glide, Agent Skills — that encode taste into agent-driven development.",
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
        "A 22-slide presentation exploring how open-source primitives — sync, design tokens, agent skills, and diff tooling — let solo developers ship production-grade apps at agent speed.",
      headline: "Care Made Easy: the primitives behind Done Bear",
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
