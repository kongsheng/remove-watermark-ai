import { getTranslations, createTranslator } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function FAQPage({ params }) {
  const { locale } = params
  
  const common = await getTranslations(locale, 'common')
  const faq = await getTranslations(locale, 'faq')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header locale={locale} translations={common} />
      
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{faq.title}</h1>
            <p className="text-xl text-gray-600">{faq.subtitle}</p>
          </div>

          {/* FAQ 列表 */}
          <div className="space-y-6">
            {Object.keys(faq.questions).map((key) => (
              <div key={key} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.questions[key].question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.questions[key].answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">{faq.cta.text}</p>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-[#66000085] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {faq.cta.button}
            </a>
          </div>
        </div>
      </main>
      
      <Footer translations={common} />
    </div>
  )
}
