export default function sitemap() {
  const baseUrl = 'https://erasemark.com'

  const routes = ['', '/about', '/faq', '/contact', '/privacy', '/terms', '/blog']
  const locales = ['zh', 'en']

  // 博客文章列表
  const blogPosts = [
    'how-to-remove-watermark-from-photos',
    'best-free-watermark-removers-2025',
    'remove-tiktok-watermark',
    'ai-watermark-removal-technology',
    'remove-watermark-from-screenshots',
    'watermark-removal-tips-and-tricks',
  ]

  const sitemapEntries = []

  // 添加主要页面
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

  // 添加博客文章
  locales.forEach(locale => {
    blogPosts.forEach(slug => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            'zh': `${baseUrl}/zh/blog/${slug}`,
            'en': `${baseUrl}/en/blog/${slug}`,
          },
        },
      })
    })
  })

  return sitemapEntries
}
