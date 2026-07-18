import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Konami } from "@/components/konami";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";



const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const baseUrl = site.url || "https://anuragjha.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  authors: [{ name: site.name }],
  keywords: [
    "Anurag Jha",
    "Anurag Jha portfolio",
    "Anurag Jha developer",
    "Anurag Jha software engineer",
    "Delhi developer",
    "Full Stack Developer Delhi",
    "smart india hackathon Anurag",
    "web developer Delhi",
    "Next.js portfolio",
    "TypeScript developer"
  ],
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
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    url: baseUrl,
    siteName: site.name,
    images: [
      {
        url: `${baseUrl}/icon.jpg`,
        width: 1200,
        height: 630,
        alt: `${site.name} Portfolio Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: [`${baseUrl}/icon.jpg`],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": site.name,
    "url": baseUrl,
    "jobTitle": site.role,
    "alumniOf": "SIH (Smart India Hackathon)",
    "gender": "male",
    "sameAs": [
      site.socials.github,
      site.socials.twitter,
      site.socials.linkedin,
      site.socials.medium
    ].filter(Boolean),
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Full Stack Development"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* set theme before paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light')}}catch(e){}})();`,
          }}
        />
        {/* Structured Schema Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sans.variable} ${mono.variable} ${serif.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <Nav />
          
          {/* Blueprint Vertical Dashed Guidelines */}
          <div className="pointer-events-none fixed bottom-0 top-0 left-1/2 -z-20 w-px -translate-x-[24rem] border-r border-dashed border-border/40 max-lg:hidden" />
          <div className="pointer-events-none fixed bottom-0 top-0 left-1/2 -z-20 w-px translate-x-[24rem] border-r border-dashed border-border/40 max-lg:hidden" />
          
          <main className="relative z-10">{children}</main>
          <Footer />
          <Konami />
          <Script src="/oneko.js" strategy="lazyOnload" />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}