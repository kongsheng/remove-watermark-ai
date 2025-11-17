import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // 生成静态站点地图和robots.txt
  output: 'standalone',
  
  // 添加尾部斜杠
  trailingSlash: false,
  
  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // 压缩
  compress: true,
  
  // 页面扩展名
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // 重定向配置
  async redirects() {
    return [
      // 确保所有非语言前缀的路径都重定向到英文版本
      {
        source: '/about',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/en/faq',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/en/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/en/terms',
        permanent: true,
      },
    ]
  },
  
  // Headers 配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
};

export default nextConfig;
