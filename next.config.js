/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Redirect standalone sign-type pages to their /services/ equivalents
      { source: "/channel-letters", destination: "/services/channel-letters", permanent: true },
      { source: "/storefront-signs", destination: "/services/storefront-signs", permanent: true },
      { source: "/vehicle-wraps", destination: "/services/vehicle-wraps", permanent: true },
      { source: "/illuminated-signs", destination: "/services/illuminated-signs", permanent: true },
      { source: "/pylon-signs", destination: "/services/pylon-signs", permanent: true },
      { source: "/office-signs", destination: "/services/indoor-signs", permanent: true },
      { source: "/window-graphics", destination: "/services/window-graphics", permanent: true },
      { source: "/construction-signs", destination: "/services/construction-signs", permanent: true },
      { source: "/custom-signs", destination: "/services", permanent: true },
    ];
  },
};

module.exports = nextConfig;
