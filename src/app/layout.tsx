import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NovaAI | AI Solutions for Enterprise",
    template: "%s | NovaAI",
  },
  description: "Transforming businesses through cutting-edge AI solutions. From strategy to deployment, we deliver excellence in artificial intelligence consulting, machine learning, and generative AI.",
  keywords: ["AI", "artificial intelligence", "machine learning", "AI consulting", "enterprise AI", "generative AI"],
  authors: [{ name: "NovaAI" }],
  creator: "NovaAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaai.com",
    siteName: "NovaAI",
    title: "NovaAI | AI Solutions for Enterprise",
    description: "Transforming businesses through cutting-edge AI solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NovaAI - AI Solutions for Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaAI | AI Solutions for Enterprise",
    description: "Transforming businesses through cutting-edge AI solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
