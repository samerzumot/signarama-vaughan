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
    default: "Custom Business Signs Toronto | Fabrication & Installation",
    template: "%s | Custom Business Signs Toronto",
  },
  description:
    "Premium custom sign fabrication and installation in Toronto & the GTA. Channel letters, storefront signs, vehicle wraps, and illuminated signage. Call (905) 597-8635.",
  metadataBase: new URL("https://www.custombusinesssigns.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Custom Business Signs Toronto",
    title: "Custom Business Signs Toronto | Fabrication & Installation",
    description: "Premium custom sign fabrication and installation in Toronto & the GTA. Channel letters, storefront signs, vehicle wraps, and illuminated signage.",
    url: "https://www.custombusinesssigns.ca",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Custom Business Signs Toronto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Signs Toronto | Fabrication & Installation",
    description: "Premium custom sign fabrication and installation in Toronto & the GTA.",
    images: ["/images/og-image.jpg"],
    creator: "@signaramavaughan",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Custom Business Signs Toronto",
  "description": "Custom signs and signage for businesses in the Greater Toronto Area",
  "url": "https://www.custombusinesssigns.ca",
  "logo": "https://www.custombusinesssigns.ca/images/og-image.jpg",
  "image": "https://www.custombusinesssigns.ca/images/og-image.jpg",
  "telephone": "+19055978635",
  "email": "info@signarama-vaughan.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7250 Keele St, Unit 286",
    "addressLocality": "Vaughan",
    "addressRegion": "ON",
    "postalCode": "L4K 1Z8",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.7872132,
    "longitude": -79.4975323
  },
  "areaServed": "Greater Toronto Area",
  "openingHours": "Mo-Fr 09:00-17:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "125"
  },
  "sameAs": [
    "https://www.facebook.com/signaramavaughan",
    "https://www.instagram.com/signaramavaughan",
    "https://www.linkedin.com/company/signarama-vaughan"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.custombusinesssigns.ca",
  "name": "Custom Business Signs Toronto"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable} ${nunitoSans.variable}`}>
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXHK4BDB');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXHK4BDB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header variant="full" />
        {children}
        <Footer />
        <MobileCTABar />
        <QuoteModal />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-5R8M6V4M"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-5R8M6V4M');
            gtag('config', 'G-CKKMY10C0W');
            gtag('config', 'AW-17985903692/em0eCLCar4EcEMy4rIBD', {
              'phone_conversion_number': '905-597-8635'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
