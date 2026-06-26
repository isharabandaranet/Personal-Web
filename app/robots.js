export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/bodima/',
    },
    sitemap: 'https://isharabandara.com/sitemap.xml',
  };
}
