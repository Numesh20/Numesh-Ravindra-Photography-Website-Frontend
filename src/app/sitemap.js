export default async function sitemap() {
  const baseUrl = 'https://www.numeshravindra.me';

  const staticPages = [
    { route: '',          priority: 1.0,  freq: 'weekly'  },
    { route: '/gallery',  priority: 0.9,  freq: 'weekly'  },
    { route: '/services', priority: 0.9,  freq: 'monthly' },
    { route: '/booking',  priority: 0.9,  freq: 'monthly' },
    { route: '/blog',     priority: 0.85, freq: 'weekly'  },
    { route: '/about',    priority: 0.7,  freq: 'monthly' },
    { route: '/contact',  priority: 0.7,  freq: 'monthly' },
  ].map(({ route, priority, freq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));

  const albums = [
    'anu-karunathilaka',
    'manavi-photo-shoot',
    'savindi-edit',
    'amandi-edit',
    'sathya-birthday-shoot',
  ].map(album => ({
    url: `${baseUrl}/gallery/${album}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogPosts = [
    'best-wedding-venues-sri-lanka-photography',
    'how-to-prepare-portrait-photography-session',
    'wildlife-photography-sri-lanka-guide',
    'why-hire-professional-photographer-wedding-sri-lanka',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...albums, ...blogPosts];
}
