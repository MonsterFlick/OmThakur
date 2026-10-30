import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter, Caveat, Geist_Mono } from "next/font/google"
import Script from "next/script"
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
  title: {
    default: "Om Thakur — Backend & Distributed Systems Engineer",
    template: "%s | Om Thakur",
  },
  description:
    "Om Thakur is a Backend & Distributed Systems Engineer in Mumbai building sub-10ms Edge APIs, 700ms GPU WebSocket pipelines, and scalable PostgreSQL systems.",
  generator: "Next.js",
  keywords: [
    "Om Thakur",
    "Backend Engineer",
    "Distributed Systems Engineer",
    "Scalable APIs",
    "TypeScript Backend Developer",
    "Python WebSockets CUDA",
    "PostgreSQL Supabase Engineer",
    "Flexbase Message Queues",
    "Qdrant RAG Engineer",
    "Software Engineer Mumbai",
  ],
  authors: [{ name: "Om Thakur", url: "https://omthakur.in" }],
  creator: "Om Thakur",
  publisher: "Om Thakur",
  metadataBase: new URL("https://omthakur.in"),
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
      "text/markdown": "/okf/index.md",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omthakur.in",
    siteName: "Om Thakur — Backend & Distributed Systems Portfolio",
    title: "Om Thakur — Backend & Distributed Systems Engineer",
    description:
      "Backend Engineer in Mumbai building distributed systems, 4-second async message queues, ~700ms CUDA WebSocket voice pipelines, and sub-10ms stateless Edge APIs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Om Thakur — Backend Engineer | Distributed Systems | Scalable APIs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Thakur — Backend & Distributed Systems Engineer",
    description:
      "Backend Engineer specializing in distributed systems, 15m→4s message queues, ~700ms GPU WebSocket pipelines, and sub-10ms Edge APIs.",
    creator: "@omthakur2366",
    images: ["/og-image.png"],
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
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF6F1",
}

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://omthakur.in/#website",
      "url": "https://omthakur.in",
      "name": "Om Thakur — Backend & Distributed Systems Portfolio",
      "description":
        "Personal engineering portfolio of Om Thakur: exploring distributed systems, low-latency WebSocket pipelines, asynchronous message queues, and reliable backend architectures.",
      "publisher": {
        "@id": "https://omthakur.in/#person",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Person",
      "@id": "https://omthakur.in/#person",
      "name": "Om Thakur",
      "alternateName": "MonsterFlick",
      "url": "https://omthakur.in",
      "image": "https://omthakur.in/og-image.png",
      "jobTitle": "Founding Software Engineer & Backend Systems Architect",
      "description":
        "Backend Engineer based in Mumbai, India, focused on distributed database-backed systems, 15m-to-4s Flexbase message queues, ~700ms Python/CUDA WebSocket pipelines, and sub-10ms stateless Edge APIs.",
      "email": "omthakur2366@gmail.com",
      "telephone": "+91-7756898550",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Sonubhau Baswant College, University of Mumbai",
      },
      "worksFor": [
        {
          "@type": "Organization",
          "name": "Krishora Technologies",
        },
        {
          "@type": "Organization",
          "name": "Cyber Intelligence and Research Lab (CIARL)",
        },
        {
          "@type": "Organization",
          "name": "Sumeru Technology Solutions Pvt. Ltd.",
        },
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "First Rank — B.Sc. in Information Technology (CGPA: 8.55/10)",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "EducationalOrganization",
            "name": "Sonubhau Baswant College, University of Mumbai",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Data Science Training Certification (ID: 263gl7b3rur)",
          "credentialCategory": "certificate",
          "url": "https://trainings.internshala.com/verify-certificate/?certificate_number=263gl7b3rur",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Internshala",
          },
        },
      ],
      "sameAs": [
        "https://github.com/MonsterFlick",
        "https://linkedin.com/in/omthakur2366",
        "https://twitter.com/omthakur2366",
        "https://www.instagram.com/omthakur.op",
        "https://blogs.omthakur.in",
      ],
      "knowsAbout": [
        "Backend Development",
        "Distributed Systems",
        "Scalable APIs",
        "Node.js",
        "TypeScript",
        "Python",
        "Deno",
        "PostgreSQL",
        "Supabase Row-Level Security",
        "Redis",
        "Qdrant Vector Database",
        "Retrieval-Augmented Generation (RAG)",
        "WebSockets",
        "CUDA Audio Streaming Pipelines",
        "Flexbase Message Queues",
        "Database Optimization & Outage RCA",
        "HMAC-SHA256 Authentication",
        "AES-256-GCM Encryption",
        "Kotlin Offline-First Android Architecture",
      ],
    },
  ],
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
        {/* Discovery files for AI engines & autonomous agents (AEO / GEO / AgentReady) */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt Summary Context" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLMs Technical Dossier" />
        <link rel="alternate" type="text/markdown" href="/okf/index.md" title="Open Knowledge Format (OKF) Bundle" />
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />

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
        {/* Site-Wide JSON-LD Structured Data (WebSite + Person entities) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bg-cream-100 text-charcoal-900 font-sans antialiased selection:bg-terracotta-200 selection:text-charcoal-950 min-h-screen relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:px-4 focus:py-2 focus:rounded focus:bg-[#1A1816] focus:text-[#FAF6F1] focus:font-mono focus:text-xs focus:shadow-lg"
        >
          Skip to main content
        </a>
        {/* Paper Grain Noise Overlay */}
        <div className="grain-layer" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
