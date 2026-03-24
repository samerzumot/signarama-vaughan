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
    default: "Custom Sign Fabrication & Installation | GTA Sign Company",
    template: "%s | Sign Fabrication & Installation",
  },
  description:
    "We design, fabricate, and install custom signs for businesses across the GTA. Channel letters, storefront signs, vehicle wraps & more. Call (905) 597-8635.",
  metadataBase: new URL("https://www.custombusinesssigns.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Custom Sign Fabrication",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "Sign Fabrication & Installation Contractors",
  description: "Custom signs and signage for businesses in the Greater Toronto Area",
  url: "https://www.custombusinesssigns.ca",
  logo: "https://www.custombusinesssigns.ca/images/og-image.jpg",
  image: "https://www.custombusinesssigns.ca/images/og-image.jpg",
  foundingDate: "1986",
  telephone: "+19055978635",
  email: "info@signarama-vaughan.com",
  sameAs: [
    "https://www.facebook.com/signaramavaughan",
    "https://www.instagram.com/signaramavaughan",
    "https://www.linkedin.com/company/signarama-vaughan"
  ],
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
  openingHours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "125"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Signage Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Channel Letters" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storefront Signs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vehicle Wraps & Graphics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Illuminated Signs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pylon Signs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Indoor Signs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Signs & Lettering" } }
    ]
  },
  knowsAbout: [
    "Sign Fabrication",
    "Channel Letters",
    "Vehicle Wraps",
    "Illuminated Signs",
    "Sign Installation",
    "Graphic Design"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.custombusinesssigns.ca",
  name: "Signarama Vaughan",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.custombusinesssigns.ca/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
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
