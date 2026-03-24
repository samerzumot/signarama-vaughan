export interface Testimonial {
  quote: string;
  author: string;
  date: string;
  rating: number;
  googleLink: string;
  serviceSlugs?: string[];
}

export const testimonials: Testimonial[] = [
  // Storefront / Window Signs
  {
    quote: "The team did an amazing job installing my window vinyl and store sign. Trudy especially was very helpful.",
    author: "Erin Shine",
    date: "2 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/35mfkCvLcXiCAf256",
    serviceSlugs: ["storefront-signs", "window-graphics"],
  },
  // General Signs / Replace Old Signs
  {
    quote: "Great quality of signs. They were quickly able to replace my old signs at a great price. No issues.",
    author: "Martin Hupa",
    date: "5 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/fWkkoeDCbube8rXP9",
    serviceSlugs: ["storefront-signs", "illuminated-signs", "channel-letters"],
  },
  // Signage design / general
  {
    quote: "Abe was wonderful to work with! He was patient with us until we got it right! Our signage is exactly what we envisioned!",
    author: "Chhaya Tailor",
    date: "3 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/jFqdpLrH2vS7os3K6",
    serviceSlugs: ["channel-letters", "storefront-signs", "indoor-signs"],
  },
  // General recommendation
  {
    quote: "Signarama came highly recommended. Abe was very easy to deal with, patient and considerate.",
    author: "Rhea Uy",
    date: "2 years ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/tRiTVz3HTAzWG8bD6",
  },
  // Print / Business cards
  {
    quote: "ABSOLUTELY BRILLIANT... new Incredible Business cards delivered on time as promised. High quality thick card stock...",
    author: "Steve Birtles",
    date: "3 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/dJTnuMEE9SUEJXj57",
  },
];

/** Returns up to `count` testimonials, prioritizing ones tagged for `serviceSlug`. */
export function getTestimonialsForService(serviceSlug: string, count = 2): Testimonial[] {
  const tagged = testimonials.filter(t => t.serviceSlugs?.includes(serviceSlug));
  if (tagged.length >= count) return tagged.slice(0, count);
  // Fill remaining slots with untagged or differently-tagged reviews
  const remaining = testimonials.filter(t => !tagged.includes(t));
  return [...tagged, ...remaining].slice(0, count);
}
