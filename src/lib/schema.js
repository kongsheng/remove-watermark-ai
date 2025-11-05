export function generateWebsiteSchema(locale) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: locale === 'zh' ? 'AI智能去水印工具' : 'AI Smart Watermark Remover',
    description: locale === 'zh' 
      ? '免费在线AI智能去水印工具，支持快速去除图片水印、标记和不需要的元素。'
      : 'Free online AI watermark remover tool. Quickly remove watermarks from images.',
    url: `${baseUrl}/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/${locale}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Smart Watermark Remover',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@yoursite.com',
    },
    sameAs: [
      'https://twitter.com/yourhandle',
      'https://facebook.com/yourpage',
    ],
  }
}

export function generateSoftwareAppSchema(locale) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: locale === 'zh' ? 'AI智能去水印工具' : 'AI Smart Watermark Remover',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: locale === 'zh'
      ? '免费在线AI智能去水印工具，简单易用，无需下载。'
      : 'Free online AI watermark remover tool. Easy to use, no download required.',
    screenshot: `${baseUrl}/screenshot.jpg`,
  }
}

export function generateBreadcrumbSchema(locale, items) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}/${locale}${item.path}`,
    })),
  }
}

export function generateFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
