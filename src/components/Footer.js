import Link from 'next/link'

export default function Footer({ translations }) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">
            {translations.footer.disclaimer}
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-600 mb-4 flex-wrap">
            <Link href="/privacy" className="hover:text-[#6003] transition-colors">
              {translations.nav.privacy}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#6003] transition-colors">
              {translations.nav.terms}
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#6003] transition-colors">
              {translations.nav.contact}
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
