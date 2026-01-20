import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    const { locale } = params
    return {
        title: locale === 'zh'
            ? '如何去除Instagram图片水印？完整教程 | EraseMark'
            : 'How to Remove Instagram Watermarks? Complete Guide | EraseMark',
        description: locale === 'zh'
            ? '详细教程：去除Instagram照片、Reels、Story水印的多种方法，包括在线工具和手机App。'
            : 'Complete tutorial on removing Instagram photo, Reels, and Story watermarks using online tools and mobile apps.',
    }
}

export default async function BlogPostPage({ params }) {
    const { locale } = params
    const common = await getTranslations(locale, 'common')

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header locale={locale} translations={common} />

            <main className="flex-1">
                <article className="max-w-4xl mx-auto px-4 py-12">
                    <nav className="text-sm text-gray-600 mb-6">
                        <Link href={`/${locale}`} className="hover:text-[#66000085]">{locale === 'zh' ? '首页' : 'Home'}</Link>
                        {' / '}
                        <Link href={`/${locale}/blog`} className="hover:text-[#66000085]">{locale === 'zh' ? '博客' : 'Blog'}</Link>
                        {' / '}
                        <span className="text-gray-900">{locale === 'zh' ? '去除Instagram水印' : 'Remove Instagram Watermarks'}</span>
                    </nav>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {locale === 'zh' ? '如何去除Instagram图片水印？完整教程' : 'How to Remove Instagram Watermarks? Complete Guide'}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-600 mb-8">
                        <span>📅 2025-01-18</span>
                        <span>📖 {locale === 'zh' ? '阅读时间：8分钟' : 'Read time: 8 min'}</span>
                        <span>🏷️ {locale === 'zh' ? '教程' : 'Tutorial'}</span>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {locale === 'zh' ? (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    Instagram 会在 Reels 和 Story 上自动添加水印。如果你想保存或分享无水印的图片，本文将介绍多种实用方法。
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ 版权提示</h3>
                                    <p>请仅下载和使用您拥有版权或获得授权的内容。尊重原创作者的权益，不要将去水印内容用于商业目的或冒充原创。</p>
                                </div>

                                <h2>Instagram 水印的类型</h2>

                                <h3>1. Reels 水印</h3>
                                <p>Instagram Reels 视频会在右下角显示 Instagram 标志和用户名水印。</p>

                                <h3>2. Story 水印</h3>
                                <p>Story 分享时可能包含用户名标记和位置信息。</p>

                                <h3>3. 用户名标记</h3>
                                <p>照片上的 @用户名 标记。</p>

                                <h2>方法一：使用在线去水印工具</h2>

                                <h3>步骤1：下载 Instagram 图片</h3>
                                <p>首先需要下载图片到本地：</p>
                                <ul>
                                    <li>在 Instagram 中打开图片</li>
                                    <li>点击右上角"..."菜单</li>
                                    <li>选择"复制链接"</li>
                                    <li>使用 Instagram 下载工具（如 SnapInsta）下载</li>
                                </ul>

                                <h3>步骤2：使用 AI 去水印工具</h3>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <h4 className="text-lg font-semibold mb-2">推荐：EraseMark</h4>
                                    <ul>
                                        <li>✅ 完全免费</li>
                                        <li>✅ AI 智能处理</li>
                                        <li>✅ 3-5秒完成</li>
                                        <li>✅ 效果自然</li>
                                    </ul>
                                    <p className="mt-2">
                                        <Link href={`/${locale}`} className="text-[#66000085] font-semibold">立即使用 →</Link>
                                    </p>
                                </div>

                                <h3>使用步骤：</h3>
                                <ol>
                                    <li>访问 <Link href={`/${locale}`} className="text-[#66000085]">EraseMark</Link></li>
                                    <li>上传下载的 Instagram 图片</li>
                                    <li>标记水印位置（用户名、LOGO等）</li>
                                    <li>点击"去除水印"</li>
                                    <li>等待3-5秒处理</li>
                                    <li>下载无水印图片</li>
                                </ol>

                                <h2>方法二：使用手机 App</h2>

                                <h3>iOS 用户推荐</h3>

                                <h4>1. Repost for Instagram</h4>
                                <ul>
                                    <li>专门用于 Instagram 内容保存</li>
                                    <li>可以去除部分水印</li>
                                    <li>App Store 免费下载</li>
                                </ul>

                                <h4>2. TouchRetouch</h4>
                                <ul>
                                    <li>专业的物体移除工具</li>
                                    <li>可以精确去除水印</li>
                                    <li>付费 App（约 $2）</li>
                                </ul>

                                <h4>3. Snapseed</h4>
                                <ul>
                                    <li>Google 出品的免费修图 App</li>
                                    <li>使用"修复"工具去除水印</li>
                                    <li>完全免费</li>
                                </ul>

                                <h3>Android 用户推荐</h3>

                                <h4>1. Remove Unwanted Object</h4>
                                <ul>
                                    <li>专门去除图片中的物体</li>
                                    <li>操作简单</li>
                                    <li>免费版有限制</li>
                                </ul>

                                <h4>2. Photo Retouch</h4>
                                <ul>
                                    <li>AI 智能去除</li>
                                    <li>效果不错</li>
                                    <li>部分功能需付费</li>
                                </ul>

                                <h2>方法三：使用 Photoshop</h2>

                                <p>如果你有 Photoshop，可以使用专业工具去除水印。</p>

                                <h3>使用内容感知填充：</h3>
                                <ol>
                                    <li>在 Photoshop 中打开图片</li>
                                    <li>使用套索工具选中水印区域</li>
                                    <li>编辑 → 填充 → 内容识别</li>
                                    <li>调整效果</li>
                                    <li>保存图片</li>
                                </ol>

                                <h3>优缺点：</h3>
                                <div className="grid grid-cols-2 gap-4 my-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">✅ 优点</h4>
                                        <ul>
                                            <li>效果专业</li>
                                            <li>可精细控制</li>
                                            <li>适合复杂情况</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">❌ 缺点</h4>
                                        <ul>
                                            <li>需要订阅（￥99/月）</li>
                                            <li>学习成本高</li>
                                            <li>处理耗时</li>
                                        </ul>
                                    </div>
                                </div>

                                <h2>方法四：裁剪法（最简单）</h2>

                                <p>如果水印在图片边缘，直接裁剪是最快的方法。</p>

                                <h3>适用场景：</h3>
                                <ul>
                                    <li>水印在四角位置</li>
                                    <li>可以接受画面损失</li>
                                    <li>需要快速处理</li>
                                </ul>

                                <h3>操作方法：</h3>
                                <ul>
                                    <li>使用手机自带的照片编辑功能</li>
                                    <li>或使用任何图片编辑 App</li>
                                    <li>裁剪掉水印区域</li>
                                </ul>

                                <h2>不同场景的最佳方案</h2>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-4 py-2">场景</th>
                                                <th className="border border-gray-300 px-4 py-2">推荐方法</th>
                                                <th className="border border-gray-300 px-4 py-2">原因</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">水印在角落</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">裁剪法</td>
                                                <td className="border border-gray-300 px-4 py-2">最快最简单</td>
                                            </tr>
                                            <tr className="bg-green-50">
                                                <td className="border border-gray-300 px-4 py-2">水印在中间</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">AI工具</td>
                                                <td className="border border-gray-300 px-4 py-2">效果好且快速</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">复杂背景</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">Photoshop</td>
                                                <td className="border border-gray-300 px-4 py-2">可精细调整</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">手机处理</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">Snapseed</td>
                                                <td className="border border-gray-300 px-4 py-2">免费且好用</td>
                                            </tr>
                                            <tr className="bg-green-50">
                                                <td className="border border-gray-300 px-4 py-2">批量处理</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">在线AI工具</td>
                                                <td className="border border-gray-300 px-4 py-2">支持批量上传</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2>常见问题</h2>

                                <h3>Q1: 如何下载 Instagram 图片？</h3>
                                <p>
                                    可以使用在线工具如 SnapInsta、Ingramer 等。复制图片链接，粘贴到下载工具即可。
                                </p>

                                <h3>Q2: 去除 Instagram 水印违法吗？</h3>
                                <p>
                                    下载自己发布的内容或获得授权的内容是合法的。但未经授权使用他人内容可能侵犯版权。
                                </p>

                                <h3>Q3: 为什么有些图片去水印效果不好？</h3>
                                <p>
                                    效果取决于：
                                </p>
                                <ul>
                                    <li>水印大小和位置</li>
                                    <li>背景复杂程度</li>
                                    <li>图片质量</li>
                                    <li>使用的工具</li>
                                </ul>

                                <h3>Q4: 可以去除 Reels 视频水印吗？</h3>
                                <p>
                                    视频水印去除更复杂，建议使用专门的视频编辑软件。查看我们的 <Link href={`/${locale}/blog/how-to-remove-video-watermarks`} className="text-[#66000085]">视频去水印教程</Link>。
                                </p>

                                <h2>使用技巧</h2>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">💡 获得最佳效果的技巧</h3>
                                    <ul>
                                        <li>✅ 下载最高质量的原图</li>
                                        <li>✅ 精确标记水印区域</li>
                                        <li>✅ 简单背景效果最好</li>
                                        <li>✅ 可以多次尝试不同工具</li>
                                        <li>✅ 保存原图备份</li>
                                    </ul>
                                </div>

                                <h2>总结</h2>

                                <p>去除 Instagram 图片水印的方法：</p>
                                <ol>
                                    <li><strong>最快速：</strong>裁剪法（适合边缘水印）</li>
                                    <li><strong>最推荐：</strong><Link href={`/${locale}`} className="text-[#66000085] font-semibold">AI 在线工具</Link>（免费、快速、效果好）</li>
                                    <li><strong>最专业：</strong>Photoshop（需要技能和订阅）</li>
                                    <li><strong>手机端：</strong>Snapseed（免费且好用）</li>
                                </ol>

                                <p>
                                    对于大多数用户，使用 <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark AI 工具</Link> 是最佳选择，完全免费，3秒完成，效果出色。
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">立即去除 Instagram 水印</h3>
                                    <p className="text-lg mb-6">AI 智能处理，3秒完成，完全免费</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        开始使用 →
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    Instagram automatically adds watermarks to Reels and Stories. If you want to save or share watermark-free images, this article introduces multiple practical methods.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ Copyright Notice</h3>
                                    <p>Please only download and use content you own or are authorized to use. Respect original creators' rights.</p>
                                </div>

                                <h2>Types of Instagram Watermarks</h2>

                                <h3>1. Reels Watermark</h3>
                                <p>Instagram Reels videos display the Instagram logo and username watermark in the bottom right corner.</p>

                                <h3>2. Story Watermark</h3>
                                <p>Stories may include username tags and location information when shared.</p>

                                <h2>Method 1: Use Online Watermark Removal Tools</h2>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <h4 className="text-lg font-semibold mb-2">Recommended: EraseMark</h4>
                                    <ul>
                                        <li>✅ Completely free</li>
                                        <li>✅ AI-powered processing</li>
                                        <li>✅ Done in 3-5 seconds</li>
                                        <li>✅ Natural results</li>
                                    </ul>
                                    <p className="mt-2">
                                        <Link href={`/${locale}`} className="text-[#66000085] font-semibold">Try Now →</Link>
                                    </p>
                                </div>

                                <h2>Method 2: Use Mobile Apps</h2>

                                <h3>For iOS Users</h3>
                                <ul>
                                    <li><strong>Snapseed</strong> - Free by Google</li>
                                    <li><strong>TouchRetouch</strong> - Professional tool (~$2)</li>
                                </ul>

                                <h2>Method 3: Use Photoshop</h2>
                                <p>Professional solution for complex watermarks.</p>

                                <h2>Conclusion</h2>
                                <p>
                                    For most users, <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark AI tool</Link> is the best choice - completely free, done in 3 seconds, excellent results.
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">Remove Instagram Watermarks Now</h3>
                                    <p className="text-lg mb-6">AI-powered, 3 seconds, completely free</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Get Started →
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </article>
            </main>

            <Footer translations={common} />
        </div>
    )
}
