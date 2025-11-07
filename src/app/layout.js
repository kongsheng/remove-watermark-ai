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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        {children}
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </body>
    </html>
  )
}
