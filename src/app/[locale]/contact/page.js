import { getTranslations } from '@/lib/i18n'
import ContactPageClient from './page-client'

export default async function ContactPage({ params }) {
  const { locale } = params
  
  const common = await getTranslations(locale, 'common')
  const contact = await getTranslations(locale, 'contact')

  return <ContactPageClient params={params} common={common} contact={contact} />
}
