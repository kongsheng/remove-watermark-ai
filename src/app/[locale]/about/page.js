import { getTranslations } from '@/lib/i18n'
import { generateMetadata as genMeta } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  return genMeta(params.locale, 'about')
}

export default async function AboutPage({ params }) {
  const { locale } = params
  
  const common = await getTranslations(locale, 'common')
  const about = await getTranslations(locale, 'about')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header locale={locale} translations={common} />
      
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {about.title}
            </h1>
            <p className="text-xl text-gray-600">
              {about.subtitle}
            </p>
          </div>

          {/* 使命 */}
          <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {about.mission.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {about.mission.content}
            </p>
          </section>

          {/* 故事 */}
          <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {about.story.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {about.story.content}
            </p>
          </section>

          {/* 核心价值观 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {about.values.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['quality', 'userFirst', 'privacy', 'innovation'].map((key) => (
                <div key={key} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">
                    {key === 'quality' && '🎯'}
                    {key === 'userFirst' && '👥'}
                    {key === 'privacy' && '🔒'}
                    {key === 'innovation' && '💡'}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {about.values[key].title}
                  </h3>
                  <p className="text-gray-600">
                    {about.values[key].desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 团队 */}
          <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {about.team.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {about.team.content}
            </p>
          </section>

          {/* 展望未来 */}
          <section className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {about.future.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {about.future.content}
            </p>
          </section>

          {/* CTA */}
          <div className="text-center bg-[#66000085] text-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              {about.cta.title}
            </h2>
            <Link 
              href={`/${locale}`}
              className="inline-block px-8 py-4 bg-white text-[#66000085] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              {about.cta.button}
            </Link>
          </div>
        </div>
      </main>
      
      <Footer translations={common} />
    </div>
  )
}
