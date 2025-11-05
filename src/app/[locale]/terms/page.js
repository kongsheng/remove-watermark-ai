import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function TermsPage({ params }) {
  const { locale } = params
  
  const common = await getTranslations(locale, 'common')
  const terms = await getTranslations(locale, 'terms')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header locale={locale} translations={common} />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* 标题 */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{terms.title}</h1>
            <p className="text-gray-600">{terms.lastUpdated}</p>
          </div>

          {/* 简介 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <p className="text-gray-700">{terms.intro}</p>
          </div>

          {/* 条款内容 */}
          <div className="space-y-8">
            {Object.keys(terms.sections).map((key) => (
              <div key={key} className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {terms.sections[key].title}
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {terms.sections[key].content}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href={`/${locale}`}
              className="inline-block bg-[#66000085] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {terms.cta.text}
            </a>
          </div>
        </div>
      </main>
      
      <Footer translations={common} />
    </div>
  )
}
