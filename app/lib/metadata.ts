import type { Metadata } from "next";

export function createMetadata({
  title,
  description,
  path = "",
  image,
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
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.custombusinesssigns.ca${path}`,
      images: image ? [{ url: image }] : undefined,
    },
    alternates: {
      canonical: canonical || `https://www.custombusinesssigns.ca${path}`,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
