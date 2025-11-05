/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // App Router 使用 middleware 处理多语言路由，不需要这里配置 i18n
  images: {
    domains: ['localhost'],
  },
  // 支持后端API代理
  async rewrites() {
    // 开发环境使用本地Flask，生产环境使用Replicate
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/inpaint',
          destination: 'http://127.0.0.1:5000/api/inpaint?engine=lama',
        },
      ]
    }
    // 生产环境不需要重写，直接使用 /api/inpaint 路由
    return []
  },
  // 解决 Konva 在浏览器中的 canvas 模块问题
  webpack: (config, { isServer }) => {
    // 在客户端排除 canvas 模块
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
        encoding: false,
      }
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
        fs: false,
      }
    }
    // 在服务端也忽略 canvas
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config
  },
}

module.exports = nextConfig
