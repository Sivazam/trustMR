import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malladi Ramarao Trust | Serving Society Selflessly Since 2015",
  description: "Registered charitable trust serving society for over 10 years through healthcare, education, women empowerment, and interfaith harmony initiatives in Kakinada.",
  keywords: ["Malladi Ramarao Trust", "Charity", "NGO", "Social Service", "Healthcare", "Education", "Women Empowerment", "Interfaith Harmony", "Kakinada"],
  authors: [{ name: "Malladi Ramarao Trust" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Malladi Ramarao Trust | Serving Society Selflessly",
    description: "10+ years of compassionate social service through healthcare, education, women empowerment, and interfaith harmony.",
    url: "https://malladiramarao-trust.org",
    siteName: "Malladi Ramarao Trust",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malladi Ramarao Trust",
    description: "10+ years of compassionate social service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Malladi Ramarao Trust",
              url: "https://malladiramarao-trust.org",
              logo: "https://malladiramarao-trust.org/logo.svg",
              description: "Registered charitable trust serving society for over 10 years through healthcare, education, women empowerment, and interfaith harmony initiatives.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kakinada",
                addressRegion: "Andhra Pradesh",
                addressCountry: "IN",
              },
              foundingDate: "2015",
              taxID: "29/2015",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
