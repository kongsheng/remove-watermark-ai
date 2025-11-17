// 静态生成的语言列表
export async function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }]
}

export function generateMetadata({ params }) {
  const { locale } = params
  const baseUrl = 'https://erasemark.com'
  
  return {
    title: locale === 'zh' ? '智能去水印工具 - EraseMark' : 'Smart Watermark Remover - EraseMark',
    description: locale === 'zh' 
      ? '免费在线智能去水印工具，支持快速去除图片水印、标记和不需要的元素'
      : 'Free online AI-powered watermark remover. Quickly remove watermarks, marks and unwanted elements from images',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: locale === 'zh' ? '智能去水印工具 - EraseMark' : 'Smart Watermark Remover - EraseMark',
      description: locale === 'zh' 
        ? '免费在线智能去水印工具，支持快速去除图片水印、标记和不需要的元素'
        : 'Free online AI-powered watermark remover',
      url: `${baseUrl}/${locale}`,
      siteName: 'EraseMark',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
  }
}

export default function LocaleLayout({ children, params }) {
  return <>{children}</>
}
