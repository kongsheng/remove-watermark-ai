import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: '智能去水印工具 - Smart Watermark Remover',
  description: '免费在线智能去水印工具，支持快速去除图片水印、标记和不需要的元素',
}

export default function RootLayout({ children }) {
  // 注意：请替换为你的Google Analytics测量ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'
  
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
