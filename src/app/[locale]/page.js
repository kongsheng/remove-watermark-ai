import { getTranslations, createTranslator } from '@/lib/i18n'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateWebsiteSchema, generateOrganizationSchema, generateSoftwareAppSchema } from '@/lib/schema'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
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
        </div>
      </main>
      
      <Footer translations={common} />
    </div>
  )
}
