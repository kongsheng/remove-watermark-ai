// 静态生成的语言列表
export async function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }]
}

export const metadata = {
  title: '智能去水印工具 - Smart Watermark Remover',
  description: '免费在线智能去水印工具，支持快速去除图片水印、标记和不需要的元素',
}

export default function LocaleLayout({ children, params }) {
  return <>{children}</>
}
