import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter, Caveat, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Om Thakur — Author's Monograph & Engineering Ledger",
  description:
    "Om Thakur is a Backend Engineer & Distributed Systems Architect specializing in scalable architectures, real-time APIs, and high-performance developer instruments.",
  generator: "Next.js",
  keywords: [
    "Om Thakur",
    "Backend Engineer",
    "System Architect",
    "Distributed Systems",
    "Node.js",
    "Go",
    "Python",
    "Rust",
    "PostgreSQL",
    "Redis",
    "API Development",
    "Scalable Systems",
    "Real-time Applications",
    "Engineering Monograph",
  ],
  authors: [{ name: "Om Thakur", url: "https://omthakur.in" }],
  creator: "Om Thakur",
  publisher: "Om Thakur",
  metadataBase: new URL("https://omthakur.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omthakur.in",
    siteName: "Om Thakur — Engineering Monograph",
    title: "Om Thakur — Backend Engineer & Systems Architect",
    description:
      "The digital monograph of Om Thakur: exploring distributed systems, low-level tools, autonomous agents, and real-time backend architectures.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Om Thakur — Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Thakur — Backend Engineer",
    description:
      "Backend Engineer & Systems Architect specializing in scalable systems, real-time APIs, and high-performance tools.",
    creator: "@omthakur2366",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#FAF6F1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XPGMFRY0D0"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XPGMFRY0D0');
          `}
        </Script>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Om Thakur",
              url: "https://omthakur.in",
              jobTitle: "Backend Engineer & Distributed Systems Architect",
              description:
                "Backend Engineer specializing in building scalable systems, real-time APIs, and high-performance instruments",
              sameAs: [
                "https://github.com/MonsterFlick",
                "https://linkedin.com/in/omthakur2366",
                "https://twitter.com/omthakur2366",
              ],
              knowsAbout: [
                "Backend Development",
                "Distributed Systems",
                "API Development",
                "Node.js",
                "Go",
                "Python",
                "Rust",
                "Database Optimization",
                "Scalable Architecture",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream-100 text-charcoal-900 font-sans antialiased selection:bg-terracotta-200 selection:text-charcoal-950 min-h-screen relative">
        {/* Paper Grain Noise Overlay */}
        <div className="grain-layer" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
