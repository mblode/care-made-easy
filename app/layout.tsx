import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";

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
    title: "Care made easy",
  },
  authors: [{ name: "Matthew Blode", url: "https://blode.co" }],
  creator: "Matthew Blode",
  description:
    "Agents made code cheap — taste is the bottleneck now. A 22-slide deck on the open-source stack (Strata Sync, Blode UI, Agent Skills) behind Done Bear.",
  keywords: [
    "Care made easy",
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
    siteName: "Care made easy",
    title: "Care made easy",
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
    default: "Care made easy | Matthew Blode",
    template: "%s | Care made easy",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description:
      "Agents write the code. Taste is what ships. The open-source stack behind Done Bear, in 22 slides.",
    title: "Care made easy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${BASE_URL}/#website`,
      "@type": "WebSite",
      description:
        "Care made easy is a presentation by Matthew Blode on the open-source primitives — Strata Sync, Blode UI, Glide, Agent Skills — that encode taste into agent-driven development.",
      name: "Care made easy",
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
      url: "https://blode.co",
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
      headline: "Care made easy: the primitives behind Done Bear",
      name: "Care made easy",
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
        <link href={process.env.NEXT_PUBLIC_POSTHOG_HOST} rel="preconnect" />
        <script id="json-ld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </head>
      <body className={`${editorialNew.variable} ${glide.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
