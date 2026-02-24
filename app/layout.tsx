import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans, Nunito_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileCTABar } from "./components/MobileCTABar";
import { QuoteModal } from "./components/QuoteModal";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Custom Signs & Signage Company in Vaughan | Signarama",
    template: "%s | Signarama Vaughan",
  },
  description:
    "Signarama Vaughan designs, fabricates, and installs custom signs for businesses across the GTA. Channel letters, storefront signs, vehicle wraps & more. Call (905) 597-8635.",
  metadataBase: new URL("https://custombusinesssigns.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Signarama Vaughan",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Signarama Vaughan",
  description: "Custom signs and signage for businesses in the Greater Toronto Area",
  url: "https://custombusinesssigns.ca",
  telephone: "+19055978635",
  email: "info@signarama-vaughan.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7250 Keele St, Unit 286",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    postalCode: "L4K 1Z8",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.7872132,
    longitude: -79.4975323,
  },
  areaServed: "Greater Toronto Area",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${nunitoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header variant="full" />
        {children}
        <Footer />
        <MobileCTABar />
        <QuoteModal />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17956192139"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17956192139');
            gtag('config', 'AW-17956192139/8e71CI6OuvkbEIv_lvJC', {
              'phone_conversion_number': '905-597-8635'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
