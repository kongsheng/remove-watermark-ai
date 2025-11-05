export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com'
  
  const routes = ['', '/about', '/faq', '/contact', '/privacy', '/terms']
  const locales = ['zh', 'en']
  
  const sitemapEntries = []
  
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      })
    })
  })
  
  return sitemapEntries
}
