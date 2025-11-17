import { NextResponse } from 'next/server'

const locales = ['zh', 'en']
const defaultLocale = 'en' // 改为英文

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // 检查是否已经有语言前缀
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 如果已经有语言前缀，直接返回
  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // 根路径重定向到默认语言（使用 308 永久重定向）
  if (pathname === '/') {
    const response = NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 308)
    // 添加规范链接头
    response.headers.set('Link', `<https://erasemark.com/${defaultLocale}>; rel="canonical"`)
    return response
  }

  // 其他路径添加语言前缀（使用 308 永久重定向）
  const response = NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url), 308)
  response.headers.set('Link', `<https://erasemark.com/${defaultLocale}${pathname}>; rel="canonical"`)
  return response
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next)、API路由、静态文件
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
}
