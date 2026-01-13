import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: '去水印教程与技巧 - 博客 | EraseMark',
  description: '学习如何使用AI工具去除图片水印，获取专业的去水印教程、技巧和最佳实践。',
}

const blogPosts = [
  {
    slug: 'how-to-remove-watermark-from-photos',
    titleZh: '如何免费去除照片水印？5种方法详解',
    titleEn: 'How to Remove Watermarks from Photos for Free? 5 Methods Explained',
    descZh: '详细介绍5种免费去除照片水印的方法，包括AI工具、Photoshop、手机App等。',
    descEn: 'Detailed guide on 5 free methods to remove watermarks from photos, including AI tools, Photoshop, mobile apps.',
    date: '2025-11-08',
    categoryZh: '教程',
    categoryEn: 'Tutorial',
  },
  {
    slug: 'best-free-watermark-removers-2025',
    titleZh: '2025年最佳免费去水印工具推荐',
    titleEn: 'Best Free Watermark Removers in 2025',
    descZh: '对比评测10款主流免费去水印工具，帮你找到最适合的解决方案。',
    descEn: 'Compare 10 popular free watermark removal tools to find the best solution for you.',
    date: '2025-11-07',
    categoryZh: '评测',
    categoryEn: 'Review',
  },
  {
    slug: 'remove-tiktok-watermark',
    titleZh: '如何去除抖音/TikTok视频水印？',
    titleEn: 'How to Remove TikTok Video Watermarks?',
    descZh: '教你快速去除抖音、TikTok视频水印的3种实用方法。',
    descEn: '3 practical methods to quickly remove TikTok video watermarks.',
    date: '2025-11-06',
    categoryZh: '教程',
    categoryEn: 'Tutorial',
  },
  {
    slug: 'ai-watermark-removal-technology',
    titleZh: 'AI去水印技术原理：深度学习如何修复图片',
    titleEn: 'AI Watermark Removal Technology: How Deep Learning Repairs Images',
    descZh: '深入了解AI去水印技术的工作原理，包括LaMa模型、图像修复算法等。',
    descEn: 'Deep dive into AI watermark removal technology, including LaMa model and image inpainting algorithms.',
    date: '2025-11-05',
    categoryZh: '技术',
    categoryEn: 'Technology',
  },
  {
    slug: 'remove-watermark-from-screenshots',
    titleZh: '如何去除截图水印？文档、网页、App截图去水印教程',
    titleEn: 'How to Remove Watermarks from Screenshots? Complete Guide',
    descZh: '详细教程：去除文档截图、网页截图、App截图上的水印。',
    descEn: 'Complete tutorial on removing watermarks from document, web, and app screenshots.',
    date: '2025-11-04',
    categoryZh: '教程',
    categoryEn: 'Tutorial',
  },
  {
    slug: 'watermark-removal-tips-and-tricks',
    titleZh: '去水印高级技巧：如何获得最佳效果',
    titleEn: 'Advanced Watermark Removal Tips: How to Get Best Results',
    descZh: '分享专业的去水印技巧，帮你处理复杂水印，获得完美效果。',
    descEn: 'Professional tips for handling complex watermarks and achieving perfect results.',
    date: '2025-11-03',
    categoryZh: '技巧',
    categoryEn: 'Tips',
  },
]

export default async function BlogPage({ params }) {
  const { locale } = params
  const common = await getTranslations(locale, 'common')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header locale={locale} translations={common} />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'zh' ? '去水印教程与技巧' : 'Watermark Removal Tutorials & Tips'}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {locale === 'zh'
              ? '学习如何使用AI工具去除图片水印，获取专业的去水印教程、技巧和最佳实践。'
              : 'Learn how to remove watermarks from images using AI tools, get professional tutorials, tips and best practices.'
            }
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="text-sm text-[#66000085] font-semibold mb-2">
                    {locale === 'zh' ? post.categoryZh : post.categoryEn}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-[#66000085]">
                      {locale === 'zh' ? post.titleZh : post.titleEn}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {locale === 'zh' ? post.descZh : post.descEn}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="text-[#66000085] font-semibold hover:underline"
                    >
                      {locale === 'zh' ? '阅读更多 →' : 'Read More →'}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SEO 内容 */}
          <section className="mt-16 prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'zh' ? '关于去水印的常见问题' : 'Common Questions About Watermark Removal'}
              </h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {locale === 'zh' ? '1. 什么是水印？' : '1. What is a watermark?'}
                  </h3>
                  <p>
                    {locale === 'zh'
                      ? '水印是指在图片、视频或文档上添加的可见或不可见标记，通常用于版权保护、品牌标识或防止盗用。常见的水印包括文字、LOGO、图案等。'
                      : 'A watermark is a visible or invisible mark added to images, videos, or documents, typically used for copyright protection, branding, or preventing unauthorized use. Common watermarks include text, logos, and patterns.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {locale === 'zh' ? '2. 去水印合法吗？' : '2. Is watermark removal legal?'}
                  </h3>
                  <p>
                    {locale === 'zh'
                      ? '去除自己创作或拥有版权的图片水印是完全合法的。但去除他人版权保护的水印可能违反著作权法。请确保只处理您拥有合法权限的图片。'
                      : 'Removing watermarks from images you created or own is completely legal. However, removing watermarks from copyrighted content may violate copyright laws. Please ensure you only process images you have legal rights to.'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {locale === 'zh' ? '3. AI去水印效果如何？' : '3. How effective is AI watermark removal?'}
                  </h3>
                  <p>
                    {locale === 'zh'
                      ? 'AI去水印工具使用深度学习技术，能够智能分析图片内容并自然填充水印区域。对于简单背景和清晰水印，效果通常非常好。复杂背景可能需要多次尝试或手动调整。'
                      : 'AI watermark removal tools use deep learning to intelligently analyze image content and naturally fill watermark areas. Results are usually excellent for simple backgrounds and clear watermarks. Complex backgrounds may require multiple attempts or manual adjustments.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer translations={common} />
    </div>
  )
}
