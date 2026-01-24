import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Om Thakur | Backend Engineer",
  description:
    "Om Thakur is a skilled Backend Engineer specializing in building scalable systems, real-time APIs, and high-performance applications. Explore projects, skills, and experience.",
  generator: "v0.app",
  keywords: [
    "Om Thakur",
    "Backend Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Node.js",
    "Python",
    "Go",
    "Rust",
    "API Development",
    "Scalable Systems",
    "Real-time Applications",
    "Portfolio",
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
    siteName: "Om Thakur Portfolio",
    title: "Om Thakur | Backend Engineer",
    description:
      "Backend Engineer specializing in building scalable systems and real-time APIs. View my projects, skills, and professional experience.",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "Om Thakur - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Thakur | Backend Engineer",
    description:
      "Backend Engineer specializing in building scalable systems and real-time APIs.",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XPGMFRY0D0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
              jobTitle: "Backend Engineer",
              description:
                "Backend Engineer specializing in building scalable systems and real-time APIs",
              sameAs: [
                "https://github.com/MonsterFlick",
                "https://linkedin.com/in/omthakur2366",
                "https://twitter.com/omthakur2366",
              ],
              knowsAbout: [
                "Backend Development",
                "API Development",
                "Node.js",
                "Python",
                "Go",
                "Rust",
                "Scalable Systems",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
