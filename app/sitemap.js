import { blogPosts } from '../data/blogData';

export default async function sitemap() {
  const baseUrl = 'https://isharabandara.com';

  // Static routes
  const routes = [
    '',
    '/services',
    '/portfolio',
    '/founder',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.dateISO || new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
