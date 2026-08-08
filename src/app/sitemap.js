export default async function sitemap() {
  const baseUrl = 'https://www.numeshravindra.me';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/gallery'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));

  const albums = [
    'anu-karunathilaka',
    'manavi-photo-shoot',
    'savindi-edit',
    'amandi-edit'
  ].map(album => ({
    url: `${baseUrl}/gallery/${album}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticPages, ...albums];
}
