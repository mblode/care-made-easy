import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site-url";
import { DECK_SUMMARY } from "@/lib/slides";

const glide = localFont({
  adjustFontFallback: "Arial",
  display: "swap",
  src: [
    { path: "./fonts/glide-variable.woff2", style: "normal" },
    { path: "./fonts/glide-variable-italic.woff2", style: "italic" },
  ],
  variable: "--font-glide",
  weight: "100 950",
});

const glideMono = localFont({
  display: "swap",
  src: "./fonts/glide-mono.woff2",
  variable: "--font-glide-mono",
  weight: "400",
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
  description: DECK_SUMMARY,
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
    // Every blode.co path shares one site name. The product is already in
    // og:title, so this slot says who made it. See zone-conventions.md Rule 9.
    siteName: "Matthew Blode",
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
    // `Product: what it does`, colon rather than a pipe, under 60 characters so
    // it does not truncate in the SERP. The subtitle is the deck's own.
    default: "Care made easy: encoding taste into code",
    template: "%s | Care made easy",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    site: "@mattblode",
    description:
      "Agents write the code. Taste is what ships. The open-source stack behind Done Bear, in 22 slides.",
    title: "Care made easy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${BASE_URL}/#webpage`,
      "@type": "WebPage",
      about: { "@id": `${BASE_URL}/#presentation` },
      breadcrumb: { "@id": `${BASE_URL}/#breadcrumb` },
      inLanguage: "en-US",
      isPartOf: { "@id": "https://blode.co/#website" },
      description:
        "Care made easy is a presentation by Matthew Blode on the open-source primitives — Strata Sync, Blode UI, Glide, Agent Skills — that encode taste into agent-driven development.",
      name: "Care made easy",
      publisher: { "@id": "https://blode.co/#organization" },
      url: BASE_URL,
    },
    {
      "@id": `${BASE_URL}/#presentation`,
      "@type": "PresentationDigitalDocument",
      isPartOf: { "@id": "https://blode.co/#website" },
      publisher: { "@id": "https://blode.co/#organization" },
      about: ["AI Engineering", "Claude Code", "Codex", "Done Bear", "Strata Sync", "Agent Skills"],
      author: {
        "@id": "https://blode.co/#person",
      },
      description:
        "A 22-slide presentation exploring how open-source primitives — sync, design tokens, agent skills, and diff tooling — let solo developers ship production-grade apps at agent speed.",
      headline: "Care made easy: the primitives behind Done Bear",
      name: "Care made easy",
      url: BASE_URL,
    },
    {
      "@id": `${BASE_URL}/#breadcrumb`,
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          item: "https://blode.co/",
          // Not "Home". This crumb is the one piece of chrome above the fold on
          // every zone, so it says who made the thing.
          name: "Matthew Blode",
          position: 1,
        },
        {
          "@type": "ListItem",
          item: "https://blode.co/projects",
          name: "Projects",
          position: 2,
        },
        { "@type": "ListItem", item: BASE_URL, name: "Care made easy", position: 3 },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${glide.variable} ${glideMono.variable}`} lang="en">
      <head>
        <link href={process.env.NEXT_PUBLIC_POSTHOG_HOST} rel="preconnect" />
        <script id="json-ld" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
