export interface Testimonial {
  quote: string;
  author: string;
  date: string;
  rating: number;
  googleLink: string;
  serviceSlugs?: string[];
}

export const testimonials: Testimonial[] = [
  // Window Graphics / Storefront
  {
    quote: "The team did an amazing job installing my window vinyl and store sign, both look amazing. Trudy especially was very helpful & quick to respond to my many questions.",
    author: "Erin Shine",
    date: "2 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/35mfkCvLcXiCAf256",
    serviceSlugs: ["window-graphics", "storefront-signs"],
  },
  // Window Signage / Graphics
  {
    quote: "Signarama came highly recommended and did not disappoint. Abe was very easy to deal with, patient and considerate. Graphic quality was excellent. The window signage looks great.",
    author: "Rhea Uy",
    date: "2 years ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/tRiTVz3HTAzWG8bD6",
    serviceSlugs: ["window-graphics", "storefront-signs"],
  },
  // 3D / Lobby / Custom
  {
    quote: "Abe was very helpful and the replica of the sign we needed was very well done. We are very happy with the final product and would highly recommend their services.",
    author: "Paige Motta",
    date: "1 year ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/tRiTVz3HTAzWG8bD6", // Re-using local link for now as specific review link is hard to deep-link
    serviceSlugs: ["3d-signs-lettering", "indoor-signs"],
  },
  // Building Signs / Large Signs
  {
    quote: "Abe and his team were great to work with. They handled the installation of 3 new large signs on our building perfectly. Professional and efficient.",
    author: "Michael Calderone",
    date: "6 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/fWkkoeDCbube8rXP9",
    serviceSlugs: ["storefront-signs", "illuminated-signs", "pylon-signs"],
  },
  // General Signs / Graphics / Service
  {
    quote: "Abe is a person you can trust with any kind of signs and graphics project. He made our sign perfectly with a reasonable price. The whole process was smooth with no issues.",
    author: "Saniterica",
    date: "4 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/jFqdpLrH2vS7os3K6",
    serviceSlugs: ["vehicle-wraps", "digital-signs", "construction-signs"],
  },
  // Signage design / Vision
  {
    quote: "Abe was wonderful to work with! He was patient with us until we got it right! Our signage is exactly what we envisioned!",
    author: "Chhaya Tailor",
    date: "3 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/jFqdpLrH2vS7os3K6",
    serviceSlugs: ["channel-letters", "storefront-signs", "indoor-signs"],
  },
  // General Signs / Replace / Pricing
  {
    quote: "Great quality of signs. They were quickly able to replace my old signs at a great price. No issues.",
    author: "Martin Hupa",
    date: "5 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/fWkkoeDCbube8rXP9",
    serviceSlugs: ["pylon-signs", "awning-graphics", "led-backlit-signs"],
  },
  // Business cards / Print
  {
    quote: "ABSOLUTELY BRILLIANT... new Incredible Business cards delivered on time as promised. High quality thick card stock...",
    author: "Steve Birtles",
    date: "3 months ago",
    rating: 5,
    googleLink: "https://maps.app.goo.gl/dJTnuMEE9SUEJXj57",
  },
];

/** Returns up to `count` testimonials, prioritizing ones tagged for `serviceSlug`. */
export function getTestimonialsForService(serviceSlug: string, count = 3): Testimonial[] {
  // 1. Get exact matches
  const tagged = testimonials.filter(t => t.serviceSlugs?.includes(serviceSlug));
  
  if (tagged.length >= count) return tagged.slice(0, count);
  
  // 2. Fill remaining with generic or other reviews, avoiding duplicates
  const others = testimonials.filter(t => !tagged.includes(t));
  
  // Prioritize "high-quality" generic ones if possible (determined by presence or absence of slugs)
  const generic = others.sort((a, b) => {
    const aWeight = (a.serviceSlugs?.length || 0);
    const bWeight = (b.serviceSlugs?.length || 0);
    return aWeight - bWeight; // Smaller slug list = more generic
  });

  return [...tagged, ...generic].slice(0, count);
}
