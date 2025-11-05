'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header({ locale, translations }) {
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (newLocale) => {
    // 替换当前路径中的语言
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }
  //text-[#66000085]
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 flex-wrap gap-4">
          {/* Logo 区域 */}
          <div className="flex flex-col">
            <Link href={`/${locale}`} className="text-2xl font-bold text-[#66000085] hover:opacity-80 transition-opacity">
              {translations.title}
            </Link>
            <p className="text-sm text-gray-600 mt-1">{translations.subtitle}</p>
          </div>

          {/* 导航区域 */}
          <nav className="flex items-center gap-6 flex-wrap">
            {/* 语言选择器 */}
            <select
              value={locale}
              onChange={(e) => changeLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all cursor-pointer"
            >
              <option value="zh">🇨🇳 中文</option>
              <option value="en">🇺🇸 English</option>
            </select>

            {/* 导航链接 */}
            <div className="flex gap-5">
              {[
                { href: `/${locale}`, label: translations.nav.home, key: 'home' },
                { href: `/${locale}/about`, label: translations.nav.about, key: 'about' },
                { href: `/${locale}/faq`, label: translations.nav.faq, key: 'faq' },
                { href: `/${locale}/contact`, label: translations.nav.contact, key: 'contact' },
                { href: `/${locale}/privacy`, label: translations.nav.privacy, key: 'privacy' },
                { href: `/${locale}/terms`, label: translations.nav.terms, key: 'terms' },
              ].map(({ href, label, key }) => (
                <Link 
                  key={key}
                  href={href}
                  className="text-sm font-medium text-gray-600 hover:text-[#66000085] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
