import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Custom Business Signs Toronto",
  description: "Thank you for requesting a quote with Custom Business Signs Toronto.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: "https://www.custombusinesssigns.ca/thank-you",
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
