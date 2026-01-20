'use client'

import { useEffect } from 'react'

export default function AdBanner({
  adSlot = '1234567890',
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = {}
}) {
  useEffect(() => {
    try {
      // 推送广告
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className="ad-container my-6 flex justify-center" style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-6365736551179454"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  )
}

// 不同尺寸的广告组件
export function HorizontalAd() {
  return (
    <AdBanner
      adSlot="1234567890"
      adFormat="horizontal"
      style={{ minWidth: '320px', minHeight: '100px' }}
    />
  )
}

export function SquareAd() {
  return (
    <AdBanner
      adSlot="0987654321"
      adFormat="rectangle"
      style={{ width: '300px', height: '250px' }}
    />
  )
}

export function VerticalAd() {
  return (
    <AdBanner
      adSlot="1122334455"
      adFormat="vertical"
      style={{ width: '160px', height: '600px' }}
    />
  )
}

export function InArticleAd() {
  return (
    <AdBanner
      adSlot="5544332211"
      adFormat="fluid"
      style={{ minHeight: '250px' }}
    />
  )
}
