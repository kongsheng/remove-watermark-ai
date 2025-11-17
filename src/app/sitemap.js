export default function sitemap() {
  const baseUrl = 'https://erasemark.com'
  
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
        alternates: {
          languages: {
            'zh': `${baseUrl}/zh${route}`,
            'en': `${baseUrl}/en${route}`,
          },
        },
      })
    })
  })
  
  return sitemapEntries
}
