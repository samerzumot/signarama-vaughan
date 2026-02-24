import type { Metadata } from "next";

export function createMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://custombusinesssigns.ca${path}`,
      images: image ? [{ url: image }] : undefined,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
