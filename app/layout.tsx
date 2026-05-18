import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Agentation } from "agentation";
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
    title: "Unblocking yourself with AI",
  },
  authors: [
    { name: "Matthew Blode", url: "https://matthewblode.com" },
    {
      name: "Mrudula Vysyaraju",
      url: "https://www.linkedin.com/in/mrudulavysyaraju/",
    },
  ],
  creator: "Matthew Blode and Mrudula Vysyaraju",
  description:
    "Concrete workflows from two engineers shipping with Claude Code, Codex, and Devin. MCPs, plan mode, worktrees, skills, and how to keep up to date.",
  keywords: [
    "AI Engineering",
    "Claude Code",
    "Codex",
    "Devin",
    "MCP",
    "Plan Mode",
    "Agent Skills",
    "Developer Tooling",
  ],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    description:
      "Concrete workflows from two engineers shipping with Claude Code, Codex, and Devin.",
    locale: "en_US",
    siteName: "Unblocking yourself with AI",
    title: "Unblocking yourself with AI",
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
    default: "Unblocking yourself with AI | Matthew Blode & Mrudula Vysyaraju",
    template: "%s | Unblocking yourself with AI",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description:
      "Concrete workflows from two engineers shipping with Claude Code, Codex, and Devin.",
    title: "Unblocking yourself with AI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${BASE_URL}/#website`,
      "@type": "WebSite",
      description:
        "Concrete workflows from two engineers shipping with Claude Code, Codex, and Devin.",
      name: "Unblocking yourself with AI",
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
      about: [
        "AI Engineering",
        "Claude Code",
        "Codex",
        "Devin",
        "Model Context Protocol",
        "Agent Skills",
      ],
      author: {
        "@id": `${BASE_URL}/#person`,
      },
      description:
        "Frameworks for decomposing problems, choosing MCPs, picking between Devin / Claude Code / Codex, and the skills, prompts, and habits we use to keep up to date.",
      headline: "Concrete workflows from two engineers shipping with AI tools",
      name: "Unblocking yourself with AI",
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
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
