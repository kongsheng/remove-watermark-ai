import { getTranslations, createTranslator } from '@/lib/i18n'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateWebsiteSchema, generateOrganizationSchema, generateSoftwareAppSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// 动态导入 WatermarkRemover，禁用 SSR
const WatermarkRemover = dynamic(
  () => import('@/components/WatermarkRemover'),
  { ssr: false, loading: () => <div className="text-center py-12">加载中...</div> }
)

export async function generateMetadata({ params }) {
  return genMeta(params.locale, 'home')
}

export default async function Home({ params }) {
  const { locale } = params

  // 获取翻译
  const common = await getTranslations(locale, 'common')
  const home = await getTranslations(locale, 'home')

  const t = createTranslator({ common, home })

  // 生成结构化数据
  const websiteSchema = generateWebsiteSchema(locale)
  const orgSchema = generateOrganizationSchema()
  const appSchema = generateSoftwareAppSchema(locale)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Header locale={locale} translations={common} />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* 水印去除工具 */}
          <WatermarkRemover translations={home} />

          {/* 功能特点 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {home.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['aiPowered', 'easyToUse', 'privacy', 'highQuality'].map((key) => (
                <div key={key} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">
                    {key === 'aiPowered' && '🤖'}
                    {key === 'easyToUse' && '✨'}
                    {key === 'privacy' && '🔒'}
                    {key === 'highQuality' && '🎨'}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {home.features[key].title}
                  </h3>
                  <p className="text-gray-600">
                    {home.features[key].desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 使用步骤 */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {home.steps.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['step1', 'step2', 'step3'].map((key, index) => (
                <div key={key} className="relative h-full">
                  <div className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col">
                    <div className="w-12 h-12 bg-[#66000085] rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {home.steps[key].title}
                    </h3>
                    <p className="text-gray-600 flex-1">
                      {home.steps[key].desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SEO 内容区域 */}
          <section className="mt-16 prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'zh' ? '为什么选择 EraseMark AI 去水印工具？' : 'Why Choose EraseMark AI Watermark Remover?'}
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  {locale === 'zh'
                    ? 'EraseMark 是一款基于先进 AI 技术的免费在线去水印工具，能够智能识别并去除图片、照片、截图中的水印、LOGO、文字标记等不需要的元素。我们采用 LaMa（Large Mask Inpainting）深度学习模型，确保去除水印后的图片效果自然，无痕迹。'
                    : 'EraseMark is a free online AI-powered watermark remover that intelligently identifies and removes watermarks, logos, text marks from images, photos, and screenshots. We use LaMa (Large Mask Inpainting) deep learning model to ensure natural, seamless results after watermark removal.'
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {locale === 'zh' ? '主要优势：' : 'Key Benefits:'}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>{locale === 'zh' ? '✅ 100% 免费使用，无需注册' : '✅ 100% Free, no signup required'}</li>
                  <li>{locale === 'zh' ? '🤖 AI 智能修复，效果自然' : '🤖 AI-powered repair, natural results'}</li>
                  <li>{locale === 'zh' ? '🔒 本地处理，保护隐私安全' : '🔒 Local processing, privacy protected'}</li>
                  <li>{locale === 'zh' ? '⚡ 快速处理，无需等待' : '⚡ Fast processing, no waiting'}</li>
                  <li>{locale === 'zh' ? '📱 支持各种图片格式（JPG、PNG、WebP 等）' : '📱 Support various formats (JPG, PNG, WebP, etc.)'}</li>
                  <li>{locale === 'zh' ? '🎨 适用于照片、海报、截图等多种场景' : '🎨 Perfect for photos, posters, screenshots'}</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {locale === 'zh' ? '适用场景：' : 'Use Cases:'}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>{locale === 'zh' ? '📸 社交媒体图片去水印（抖音、快手、小红书等）' : '📸 Remove watermarks from social media (TikTok, Instagram, etc.)'}</li>
                  <li>{locale === 'zh' ? '🖼️ 产品图片去除品牌 LOGO' : '🖼️ Remove brand logos from product images'}</li>
                  <li>{locale === 'zh' ? '📄 文档截图去除水印' : '📄 Clean watermarks from document screenshots'}</li>
                  <li>{locale === 'zh' ? '🎭 艺术作品去除签名' : '🎭 Remove signatures from artworks'}</li>
                  <li>{locale === 'zh' ? '💼 商业图片处理' : '💼 Professional image editing'}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 博客文章推荐 */}
          <section className="mt-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {locale === 'zh' ? '📚 去水印教程与技巧' : '📚 Tutorials & Tips'}
              </h2>
              <Link
                href={`/${locale}/blog`}
                className="text-[#66000085] font-semibold hover:underline"
              >
                {locale === 'zh' ? '查看全部 →' : 'View All →'}
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  slug: 'ai-watermark-removal-technology',
                  titleZh: 'AI去水印技术原理',
                  titleEn: 'AI Watermark Removal Technology',
                  emoji: '🤖'
                },
                {
                  slug: 'watermark-removal-tips-and-tricks',
                  titleZh: '去水印高级技巧',
                  titleEn: 'Advanced Tips & Tricks',
                  emoji: '💡'
                },
                {
                  slug: 'how-to-remove-video-watermarks',
                  titleZh: '如何去除视频水印',
                  titleEn: 'How to Remove Video Watermarks',
                  emoji: '🎬'
                }
              ].map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{post.emoji}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {locale === 'zh' ? post.titleZh : post.titleEn}
                  </h3>
                  <span className="text-[#66000085] text-sm font-medium">
                    {locale === 'zh' ? '阅读更多 →' : 'Read More →'}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer translations={common} />
    </div>
  )
}
