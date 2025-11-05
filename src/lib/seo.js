// SEO元数据配置
export const seoConfig = {
  zh: {
    home: {
      title: '免费在线去水印工具 - AI智能图片去水印 | Smart Watermark Remover',
      description: '免费在线AI智能去水印工具，支持快速去除图片水印、标记和不需要的元素。简单易用，无需下载，保护隐私。',
      keywords: '去水印,图片去水印,在线去水印,AI去水印,免费去水印工具,水印移除,图片修复',
    },
    about: {
      title: '关于我们 - AI智能去水印工具',
      description: '了解我们的使命和愿景，我们致力于提供最好的AI智能图片去水印服务。',
      keywords: '关于,团队,使命,愿景,AI技术',
    },
    faq: {
      title: '常见问题 - AI智能去水印工具',
      description: '查看关于AI去水印工具的常见问题解答，了解如何使用、功能特点等。',
      keywords: '常见问题,FAQ,帮助,教程,使用指南',
    },
    contact: {
      title: '联系我们 - AI智能去水印工具',
      description: '有任何问题或建议？欢迎联系我们，我们将尽快回复。',
      keywords: '联系我们,客服,反馈,建议',
    },
    privacy: {
      title: '隐私政策 - AI智能去水印工具',
      description: '了解我们如何保护您的隐私和数据安全。',
      keywords: '隐私政策,数据保护,安全',
    },
    terms: {
      title: '服务条款 - AI智能去水印工具',
      description: '查看我们的服务条款和使用协议。',
      keywords: '服务条款,使用协议,法律声明',
    },
  },
  en: {
    home: {
      title: 'Free Online Watermark Remover - AI Smart Image Watermark Removal',
      description: 'Free online AI watermark remover tool. Quickly remove watermarks, marks and unwanted elements from images. Easy to use, no download required, privacy protected.',
      keywords: 'watermark remover,remove watermark,online watermark remover,AI watermark removal,free watermark remover,image editing',
    },
    about: {
      title: 'About Us - AI Smart Watermark Remover',
      description: 'Learn about our mission and vision. We are committed to providing the best AI smart image watermark removal service.',
      keywords: 'about,team,mission,vision,AI technology',
    },
    faq: {
      title: 'FAQ - AI Smart Watermark Remover',
      description: 'View frequently asked questions about AI watermark remover tool, learn how to use it, features and more.',
      keywords: 'FAQ,help,tutorial,user guide',
    },
    contact: {
      title: 'Contact Us - AI Smart Watermark Remover',
      description: 'Have any questions or suggestions? Feel free to contact us, we will reply as soon as possible.',
      keywords: 'contact,support,feedback,suggestions',
    },
    privacy: {
      title: 'Privacy Policy - AI Smart Watermark Remover',
      description: 'Learn how we protect your privacy and data security.',
      keywords: 'privacy policy,data protection,security',
    },
    terms: {
      title: 'Terms of Service - AI Smart Watermark Remover',
      description: 'View our terms of service and user agreement.',
      keywords: 'terms of service,user agreement,legal',
    },
  },
}

export function generateMetadata(locale, page) {
  const config = seoConfig[locale]?.[page] || seoConfig.zh[page]
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yoursite.com'
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${baseUrl}/${locale}${page === 'home' ? '' : '/' + page}`,
      siteName: 'Smart Watermark Remover',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${page === 'home' ? '' : '/' + page}`,
      languages: {
        'zh-CN': `${baseUrl}/zh${page === 'home' ? '' : '/' + page}`,
        'en-US': `${baseUrl}/en${page === 'home' ? '' : '/' + page}`,
      },
    },
  }
}
