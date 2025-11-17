// SEO元数据配置
export const seoConfig = {
  zh: {
    home: {
      title: '免费在线去水印工具 - AI智能图片水印去除 | EraseMark',
      description: '🚀 100%免费AI去水印工具，一键去除图片水印、LOGO、文字标记。支持照片、截图、海报水印去除，无需下载安装，保护隐私安全。智能修复画面，效果自然。',
      keywords: '去水印,图片去水印,在线去水印,AI去水印,免费去水印工具,照片去水印,截图去水印,水印移除,图片修复,抖音去水印,快手去水印,视频去水印,LOGO去除,文字水印去除,智能去水印',
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
      title: 'Free AI Watermark Remover - Remove Watermarks from Photos Online | EraseMark',
      description: '🚀 100% Free AI-powered watermark remover. Instantly remove watermarks, logos, text from photos, screenshots, posters. No download, no signup. Privacy-first, natural results.',
      keywords: 'watermark remover,remove watermark,online watermark remover,AI watermark removal,free watermark remover,photo watermark remover,remove logo,erase watermark,image editing,watermark eraser,clean images,remove text from image,AI photo editor',
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
  const baseUrl = 'https://erasemark.com'
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${baseUrl}/${locale}${page === 'home' ? '' : '/' + page}`,
      siteName: 'EraseMark',
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
