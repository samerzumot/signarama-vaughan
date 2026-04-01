import type { Metadata } from "next";

export function createMetadata({
  title,
  description,
  path = "",
  image = "/images/og-image.jpg",
  noIndex = false,
  canonical,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}): Metadata {
  const url = `https://www.custombusinesssigns.ca${path}`;
  const fullImage = image.startsWith('http') ? image : `https://www.custombusinesssigns.ca${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Sign Fabrication & Installation Contractors",
      images: [{ url: fullImage, width: 1200, height: 630 }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImage],
      creator: "@signaramavaughan",
    },
    alternates: {
      canonical: canonical || url,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
