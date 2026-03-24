import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.custombusinesssigns.ca/sitemap.xml',
  };
}
