import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    const { locale } = params
    return {
        title: locale === 'zh'
            ? '如何去除视频水印？完整指南2025 | EraseMark'
            : 'How to Remove Video Watermarks? Complete Guide 2025 | EraseMark',
        description: locale === 'zh'
            ? '详细教程：使用专业软件、在线工具和AI技术去除视频水印，包括抖音、YouTube等平台视频。'
            : 'Comprehensive tutorial on removing video watermarks using professional software, online tools, and AI technology for TikTok, YouTube, and more.',
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
                        <span className="text-gray-900">{locale === 'zh' ? '去除视频水印指南' : 'Remove Video Watermarks Guide'}</span>
                    </nav>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {locale === 'zh' ? '如何去除视频水印？完整指南2025' : 'How to Remove Video Watermarks? Complete Guide 2025'}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-600 mb-8">
                        <span>📅 2025-01-17</span>
                        <span>📖 {locale === 'zh' ? '阅读时间：10分钟' : 'Read time: 10 min'}</span>
                        <span>🏷️ {locale === 'zh' ? '教程' : 'Tutorial'}</span>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {locale === 'zh' ? (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    视频水印比图片水印更难处理，因为需要逐帧处理。本文将介绍多种去除视频水印的方法，从简单到专业，总有一款适合你。
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ 法律提示</h3>
                                    <p>请仅处理您拥有版权或获得授权的视频。未经授权去除他人视频水印并用于商业目的可能违反版权法。</p>
                                </div>

                                <h2>视频水印的类型</h2>
                                <ul>
                                    <li><strong>静态水印</strong> - 位置固定，如平台LOGO</li>
                                    <li><strong>动态水印</strong> - 位置移动或闪烁</li>
                                    <li><strong>半透明水印</strong> - 覆盖整个画面</li>
                                    <li><strong>嵌入式水印</strong> - 融入视频内容</li>
                                </ul>

                                <h2>方法一：使用专业视频编辑软件</h2>

                                <h3>1. Adobe Premiere Pro</h3>
                                <p>专业级视频编辑软件，功能最强大。</p>

                                <h4>操作步骤：</h4>
                                <ol>
                                    <li><strong>导入视频</strong> - 将视频拖入时间轴</li>
                                    <li><strong>添加遮罩</strong>
                                        <ul>
                                            <li>效果 → 视频效果 → 生成 → 4点多边形</li>
                                            <li>调整遮罩覆盖水印区域</li>
                                        </ul>
                                    </li>
                                    <li><strong>模糊处理</strong>
                                        <ul>
                                            <li>添加高斯模糊效果</li>
                                            <li>或使用马赛克效果</li>
                                        </ul>
                                    </li>
                                    <li><strong>导出视频</strong></li>
                                </ol>

                                <div className="grid grid-cols-2 gap-4 my-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">✅ 优点</h4>
                                        <ul>
                                            <li>功能强大</li>
                                            <li>效果专业</li>
                                            <li>可精细控制</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">❌ 缺点</h4>
                                        <ul>
                                            <li>订阅费贵（￥149/月）</li>
                                            <li>学习曲线陡峭</li>
                                            <li>处理耗时</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>2. Final Cut Pro（Mac专用）</h3>
                                <p>苹果的专业视频编辑软件，操作类似Premiere。</p>
                                <ul>
                                    <li>价格：￥1998（一次性购买）</li>
                                    <li>仅支持macOS</li>
                                    <li>性能优化好</li>
                                </ul>

                                <h3>3. DaVinci Resolve（免费）</h3>
                                <p>专业级免费视频编辑软件。</p>
                                <ul>
                                    <li>✅ 完全免费</li>
                                    <li>✅ 功能强大</li>
                                    <li>✅ 跨平台支持</li>
                                    <li>❌ 学习成本高</li>
                                </ul>

                                <h2>方法二：使用在线视频去水印工具</h2>

                                <h3>推荐工具：</h3>
                                <ul>
                                    <li><strong>Apowersoft在线去水印</strong> - 简单易用</li>
                                    <li><strong>123APPS Video Watermark Remover</strong> - 免费</li>
                                    <li><strong>Kapwing</strong> - 在线视频编辑器</li>
                                </ul>

                                <h3>使用步骤（以Apowersoft为例）：</h3>
                                <ol>
                                    <li>访问网站并上传视频</li>
                                    <li>选择水印区域</li>
                                    <li>选择去除方式（模糊/裁剪）</li>
                                    <li>处理并下载</li>
                                </ol>

                                <h3>注意事项：</h3>
                                <ul>
                                    <li>免费版通常有时长限制（5-10分钟）</li>
                                    <li>需要上传到服务器（隐私问题）</li>
                                    <li>处理速度取决于网速</li>
                                    <li>可能降低视频质量</li>
                                </ul>

                                <h2>方法三：使用手机App</h2>

                                <h3>iOS推荐：</h3>
                                <ul>
                                    <li><strong>Video Eraser</strong> - 专门去水印</li>
                                    <li><strong>InShot</strong> - 综合视频编辑</li>
                                    <li><strong>CapCut（剪映）</strong> - 免费强大</li>
                                </ul>

                                <h3>Android推荐：</h3>
                                <ul>
                                    <li><strong>Remove & Add Watermark</strong></li>
                                    <li><strong>Video Eraser</strong></li>
                                    <li><strong>剪映</strong></li>
                                </ul>

                                <h3>CapCut去水印教程：</h3>
                                <ol>
                                    <li>导入视频到剪映</li>
                                    <li>使用"贴纸"功能覆盖水印</li>
                                    <li>或使用"裁剪"功能裁掉水印区域</li>
                                    <li>导出视频</li>
                                </ol>

                                <h2>方法四：裁剪法（最简单）</h2>
                                <p>如果水印在边缘位置，直接裁剪是最简单的方法。</p>

                                <h3>适用场景：</h3>
                                <ul>
                                    <li>水印在视频四角</li>
                                    <li>可以接受画面损失</li>
                                    <li>快速处理需求</li>
                                </ul>

                                <h3>工具选择：</h3>
                                <ul>
                                    <li>任何视频编辑软件都支持裁剪</li>
                                    <li>在线工具：Clideo、Online Video Cutter</li>
                                    <li>手机App：剪映、InShot</li>
                                </ul>

                                <h2>方法五：AI智能去水印（未来趋势）</h2>
                                <p>AI视频去水印技术正在快速发展：</p>

                                <h3>技术原理：</h3>
                                <ul>
                                    <li>逐帧检测水印位置</li>
                                    <li>使用AI修复每一帧</li>
                                    <li>保持视频连贯性</li>
                                </ul>

                                <h3>现状：</h3>
                                <ul>
                                    <li>技术还在发展中</li>
                                    <li>处理速度较慢</li>
                                    <li>对硬件要求高</li>
                                    <li>商业工具价格昂贵</li>
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
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">短视频（&lt;5分钟）</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">在线工具</td>
                                                <td className="border border-gray-300 px-4 py-2">无需安装软件</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">手机拍摄视频</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">剪映App</td>
                                                <td className="border border-gray-300 px-4 py-2">免费且功能强</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">专业项目</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">Premiere Pro</td>
                                                <td className="border border-gray-300 px-4 py-2">效果最好</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">预算有限</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">DaVinci Resolve</td>
                                                <td className="border border-gray-300 px-4 py-2">免费且专业</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2>视频去水印 vs 图片去水印</h2>
                                <p>视频去水印更复杂，因为：</p>
                                <ul>
                                    <li>需要处理每一帧（30fps = 每秒30张图）</li>
                                    <li>要保持帧与帧之间的连贯性</li>
                                    <li>文件更大，处理更慢</li>
                                    <li>对硬件要求更高</li>
                                </ul>

                                <p>
                                    如果你需要去除<strong>图片水印</strong>，推荐使用 <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark</Link>，AI智能处理，3秒完成，效果出色。
                                </p>

                                <h2>常见问题</h2>

                                <h3>Q1: 去除视频水印会降低画质吗？</h3>
                                <p>
                                    取决于方法。裁剪法不会降低画质，但会损失画面。模糊法会在水印区域产生模糊。专业软件处理得当可以最小化质量损失。
                                </p>

                                <h3>Q2: 可以去除动态水印吗？</h3>
                                <p>
                                    可以，但更困难。需要逐帧追踪水印位置并处理，建议使用专业软件如Premiere Pro的运动追踪功能。
                                </p>

                                <h3>Q3: 处理一个10分钟视频需要多久？</h3>
                                <p>
                                    取决于方法和硬件：
                                </p>
                                <ul>
                                    <li>裁剪法：1-2分钟</li>
                                    <li>在线工具：5-15分钟</li>
                                    <li>专业软件：10-30分钟</li>
                                </ul>

                                <h2>总结</h2>
                                <p>视频去水印方法选择建议：</p>
                                <ol>
                                    <li><strong>快速需求</strong> → 裁剪法或在线工具</li>
                                    <li><strong>手机处理</strong> → 剪映App</li>
                                    <li><strong>专业项目</strong> → Premiere Pro或Final Cut Pro</li>
                                    <li><strong>免费方案</strong> → DaVinci Resolve</li>
                                </ol>

                                <p>
                                    对于<strong>图片去水印</strong>，<Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark</Link> 是最佳选择，AI智能处理，完全免费。
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">需要去除图片水印？</h3>
                                    <p className="text-lg mb-6">使用 EraseMark AI 工具，3秒完成</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        立即使用 →
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    Video watermarks are more challenging than image watermarks because they require frame-by-frame processing. This article introduces multiple methods from simple to professional.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ Legal Notice</h3>
                                    <p>Please only process videos you own or are authorized to use. Removing watermarks from others' videos without permission for commercial use may violate copyright law.</p>
                                </div>

                                <h2>Method 1: Professional Video Editing Software</h2>

                                <h3>1. Adobe Premiere Pro</h3>
                                <p>Professional-grade video editing software with the most powerful features.</p>

                                <h3>2. DaVinci Resolve (Free)</h3>
                                <p>Professional-grade free video editing software.</p>
                                <ul>
                                    <li>✅ Completely free</li>
                                    <li>✅ Powerful features</li>
                                    <li>✅ Cross-platform support</li>
                                </ul>

                                <h2>Method 2: Online Video Watermark Removal Tools</h2>
                                <p>Simple and convenient for short videos.</p>

                                <h2>Method 3: Mobile Apps</h2>
                                <p>Perfect for quick edits on the go.</p>

                                <h2>Method 4: Cropping (Simplest)</h2>
                                <p>If the watermark is at the edge, cropping is the simplest method.</p>

                                <h2>Conclusion</h2>
                                <p>
                                    For <strong>image watermark removal</strong>, <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark</Link> is the best choice, AI-powered and completely free.
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">Need to Remove Image Watermarks?</h3>
                                    <p className="text-lg mb-6">Use EraseMark AI tool, done in 3 seconds</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        Try Now →
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
