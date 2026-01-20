import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    const { locale } = params
    return {
        title: locale === 'zh'
            ? '手机去水印App完整教程：iOS和Android最佳选择 | EraseMark'
            : 'Mobile Watermark Removal Apps: Best Choices for iOS & Android | EraseMark',
        description: locale === 'zh'
            ? '详细评测iOS和Android平台最好用的去水印App，包括免费和付费选项，附使用教程。'
            : 'Comprehensive review of the best watermark removal apps for iOS and Android, including free and paid options with tutorials.',
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
                        <span className="text-gray-900">{locale === 'zh' ? '手机去水印App指南' : 'Mobile Watermark Removal Guide'}</span>
                    </nav>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {locale === 'zh' ? '手机去水印App完整教程：iOS和Android最佳选择' : 'Mobile Watermark Removal Apps: Complete Guide for iOS & Android'}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-600 mb-8">
                        <span>📅 2025-01-20</span>
                        <span>📖 {locale === 'zh' ? '阅读时间：10分钟' : 'Read time: 10 min'}</span>
                        <span>🏷️ {locale === 'zh' ? '教程' : 'Tutorial'}</span>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {locale === 'zh' ? (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    手机上去水印比电脑更方便快捷。本文详细评测 iOS 和 Android 平台最好用的去水印 App，帮你找到最适合的工具。
                                </p>

                                <h2>为什么选择手机 App？</h2>
                                <ul>
                                    <li>✅ 随时随地处理</li>
                                    <li>✅ 操作简单直观</li>
                                    <li>✅ 无需电脑</li>
                                    <li>✅ 处理速度快</li>
                                    <li>✅ 可以直接分享</li>
                                </ul>

                                <h2>iOS 平台最佳 App</h2>

                                <h3>1. TouchRetouch（最推荐）</h3>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <p className="font-semibold mb-2">⭐⭐⭐⭐⭐ (5/5)</p>
                                    <ul>
                                        <li><strong>价格：</strong>付费 App（约 $2，一次性购买）</li>
                                        <li><strong>大小：</strong>约 50MB</li>
                                        <li><strong>评分：</strong>App Store 高分好评</li>
                                    </ul>
                                </div>

                                <h4>主要功能：</h4>
                                <ul>
                                    <li>🎯 智能物体移除</li>
                                    <li>🖌️ 画笔和套索工具</li>
                                    <li>📏 线条移除（去除电线、划痕）</li>
                                    <li>🔄 支持撤销/重做</li>
                                    <li>💾 高质量导出</li>
                                </ul>

                                <h4>使用教程：</h4>
                                <ol>
                                    <li>打开 App，导入照片</li>
                                    <li>选择"物体移除"工具</li>
                                    <li>用手指涂抹水印区域</li>
                                    <li>点击"Go"按钮</li>
                                    <li>等待处理（2-5秒）</li>
                                    <li>保存或分享</li>
                                </ol>

                                <h4>优缺点：</h4>
                                <div className="grid grid-cols-2 gap-4 my-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h5 className="font-semibold mb-2">✅ 优点</h5>
                                        <ul>
                                            <li>效果非常好</li>
                                            <li>操作简单</li>
                                            <li>处理速度快</li>
                                            <li>一次付费永久使用</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h5 className="font-semibold mb-2">❌ 缺点</h5>
                                        <ul>
                                            <li>需要付费</li>
                                            <li>复杂背景效果一般</li>
                                            <li>不支持批量处理</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3>2. Snapseed（最佳免费选择）</h3>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                    <p className="font-semibold mb-2">⭐⭐⭐⭐ (4/5)</p>
                                    <ul>
                                        <li><strong>价格：</strong>完全免费</li>
                                        <li><strong>开发商：</strong>Google</li>
                                        <li><strong>大小：</strong>约 80MB</li>
                                    </ul>
                                </div>

                                <h4>主要功能：</h4>
                                <ul>
                                    <li>🔧 修复工具（去水印）</li>
                                    <li>🎨 29种专业工具</li>
                                    <li>📸 RAW 文件支持</li>
                                    <li>💾 保留 EXIF 信息</li>
                                </ul>

                                <h4>使用教程：</h4>
                                <ol>
                                    <li>打开 Snapseed，导入照片</li>
                                    <li>选择"工具" → "修复"</li>
                                    <li>用手指涂抹水印</li>
                                    <li>App 自动修复</li>
                                    <li>导出照片</li>
                                </ol>

                                <h3>3. Retouch（简单易用）</h3>
                                <p><strong>价格：</strong>免费（有内购）</p>
                                <p><strong>特点：</strong>界面简洁，适合新手，基础功能免费。</p>

                                <h3>4. Adobe Photoshop Fix（专业）</h3>
                                <p><strong>价格：</strong>免费</p>
                                <p><strong>特点：</strong>Adobe 出品，功能专业，但学习成本较高。</p>

                                <h2>Android 平台最佳 App</h2>

                                <h3>1. Remove Unwanted Object（最推荐）</h3>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <p className="font-semibold mb-2">⭐⭐⭐⭐⭐ (5/5)</p>
                                    <ul>
                                        <li><strong>价格：</strong>免费（有广告和内购）</li>
                                        <li><strong>下载量：</strong>百万级用户</li>
                                        <li><strong>评分：</strong>Google Play 高分好评</li>
                                    </ul>
                                </div>

                                <h4>主要功能：</h4>
                                <ul>
                                    <li>🤖 AI 智能去除</li>
                                    <li>🖌️ 手动选择工具</li>
                                    <li>📦 批量处理</li>
                                    <li>🎯 高精度处理</li>
                                </ul>

                                <h4>使用教程：</h4>
                                <ol>
                                    <li>打开 App，选择照片</li>
                                    <li>使用画笔标记水印</li>
                                    <li>点击"Remove"</li>
                                    <li>等待 AI 处理</li>
                                    <li>保存结果</li>
                                </ol>

                                <h3>2. Photo Retouch（AI 驱动）</h3>
                                <p><strong>价格：</strong>免费（有内购）</p>
                                <p><strong>特点：</strong>AI 技术，自动识别水印，效果好。</p>

                                <h3>3. PicsArt（多功能）</h3>
                                <p><strong>价格：</strong>免费（有内购）</p>
                                <p><strong>特点：</strong>综合修图工具，功能丰富，包含去水印功能。</p>

                                <h3>4. TouchRetouch（Android 版）</h3>
                                <p><strong>价格：</strong>付费 App（约 $2）</p>
                                <p><strong>特点：</strong>与 iOS 版功能相同，效果出色。</p>

                                <h2>跨平台在线工具（推荐）</h2>

                                <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#66000085] p-6 my-6">
                                    <h3 className="text-xl font-semibold mb-3">🌐 EraseMark 在线工具</h3>
                                    <p className="mb-3">无需下载 App，手机浏览器直接使用！</p>
                                    <ul className="mb-4">
                                        <li>✅ 完全免费，无广告</li>
                                        <li>✅ AI 智能处理</li>
                                        <li>✅ 支持 iOS 和 Android</li>
                                        <li>✅ 无需注册</li>
                                        <li>✅ 3-5秒完成</li>
                                        <li>✅ 支持批量处理</li>
                                    </ul>
                                    <p>
                                        <Link href={`/${locale}`} className="text-[#66000085] font-semibold text-lg">
                                            立即使用 →
                                        </Link>
                                    </p>
                                </div>

                                <h2>App 对比表</h2>

                                <div className="overflow-x-auto my-6">
                                    <table className="min-w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="border border-gray-300 px-4 py-2">App</th>
                                                <th className="border border-gray-300 px-4 py-2">平台</th>
                                                <th className="border border-gray-300 px-4 py-2">价格</th>
                                                <th className="border border-gray-300 px-4 py-2">效果</th>
                                                <th className="border border-gray-300 px-4 py-2">易用性</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-green-50">
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">TouchRetouch</td>
                                                <td className="border border-gray-300 px-4 py-2">iOS/Android</td>
                                                <td className="border border-gray-300 px-4 py-2">约 $2</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐⭐</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">Snapseed</td>
                                                <td className="border border-gray-300 px-4 py-2">iOS/Android</td>
                                                <td className="border border-gray-300 px-4 py-2">免费</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">Remove Unwanted Object</td>
                                                <td className="border border-gray-300 px-4 py-2">Android</td>
                                                <td className="border border-gray-300 px-4 py-2">免费</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐⭐</td>
                                            </tr>
                                            <tr className="bg-blue-50">
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">EraseMark 在线</td>
                                                <td className="border border-gray-300 px-4 py-2">全平台</td>
                                                <td className="border border-gray-300 px-4 py-2">免费</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐⭐</td>
                                                <td className="border border-gray-300 px-4 py-2">⭐⭐⭐⭐⭐</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2>使用技巧</h2>

                                <h3>1. 提高去水印效果</h3>
                                <ul>
                                    <li>✅ 使用高分辨率原图</li>
                                    <li>✅ 精确选择水印区域</li>
                                    <li>✅ 简单背景效果最好</li>
                                    <li>✅ 可以多次尝试</li>
                                    <li>✅ 调整工具大小</li>
                                </ul>

                                <h3>2. 节省时间的方法</h3>
                                <ul>
                                    <li>批量处理相似图片</li>
                                    <li>使用快捷工具</li>
                                    <li>保存常用设置</li>
                                </ul>

                                <h3>3. 避免常见错误</h3>
                                <ul>
                                    <li>❌ 选择区域过大</li>
                                    <li>❌ 图片质量太低</li>
                                    <li>❌ 不保存原图</li>
                                    <li>❌ 过度处理</li>
                                </ul>

                                <h2>常见问题</h2>

                                <h3>Q1: 免费 App 和付费 App 差别大吗？</h3>
                                <p>
                                    付费 App（如 TouchRetouch）效果更好，功能更专业。但免费 App（如 Snapseed）对于一般需求也够用。
                                </p>

                                <h3>Q2: 手机 App 和电脑软件哪个效果好？</h3>
                                <p>
                                    电脑软件（如 Photoshop）功能更强大，但手机 App 更方便。对于简单水印，手机 App 完全够用。
                                </p>

                                <h3>Q3: 为什么有些 App 需要联网？</h3>
                                <p>
                                    使用 AI 技术的 App 可能需要联网进行云端处理。本地处理的 App 不需要联网。
                                </p>

                                <h3>Q4: 处理后的图片会被压缩吗？</h3>
                                <p>
                                    大多数 App 支持原质量导出。注意在设置中选择"高质量"或"原始质量"。
                                </p>

                                <h2>选择建议</h2>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">💡 如何选择？</h3>

                                    <p className="font-semibold mt-4">如果你：</p>
                                    <ul>
                                        <li><strong>预算有限</strong> → Snapseed（iOS/Android）</li>
                                        <li><strong>追求效果</strong> → TouchRetouch（约 $2）</li>
                                        <li><strong>偶尔使用</strong> → EraseMark 在线工具（免费）</li>
                                        <li><strong>批量处理</strong> → EraseMark 在线工具</li>
                                        <li><strong>Android 用户</strong> → Remove Unwanted Object</li>
                                        <li><strong>iOS 用户</strong> → TouchRetouch 或 Snapseed</li>
                                    </ul>
                                </div>

                                <h2>总结</h2>

                                <p><strong>最佳选择：</strong></p>
                                <ol>
                                    <li><strong>iOS 付费：</strong>TouchRetouch（约 $2）</li>
                                    <li><strong>iOS 免费：</strong>Snapseed</li>
                                    <li><strong>Android 免费：</strong>Remove Unwanted Object</li>
                                    <li><strong>跨平台免费：</strong><Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark 在线工具</Link></li>
                                </ol>

                                <p>
                                    如果你不想下载 App，或者需要批量处理，推荐使用 <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark 在线工具</Link>，完全免费，手机浏览器直接使用，效果出色。
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">无需下载 App</h3>
                                    <p className="text-lg mb-6">手机浏览器直接使用，AI 智能去水印</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        立即使用 →
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    Removing watermarks on mobile is more convenient than on desktop. This article reviews the best watermark removal apps for iOS and Android.
                                </p>

                                <h2>Why Choose Mobile Apps?</h2>
                                <ul>
                                    <li>✅ Process anytime, anywhere</li>
                                    <li>✅ Simple and intuitive</li>
                                    <li>✅ No computer needed</li>
                                    <li>✅ Fast processing</li>
                                </ul>

                                <h2>Best iOS Apps</h2>

                                <h3>1. TouchRetouch (Most Recommended)</h3>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <p className="font-semibold mb-2">⭐⭐⭐⭐⭐ (5/5)</p>
                                    <ul>
                                        <li><strong>Price:</strong> Paid app (~$2, one-time)</li>
                                        <li><strong>Rating:</strong> Highly rated on App Store</li>
                                    </ul>
                                </div>

                                <h3>2. Snapseed (Best Free Option)</h3>
                                <p><strong>Price:</strong> Free</p>
                                <p><strong>Developer:</strong> Google</p>

                                <h2>Best Android Apps</h2>

                                <h3>1. Remove Unwanted Object</h3>
                                <p><strong>Price:</strong> Free (with ads)</p>
                                <p><strong>Users:</strong> Millions of users</p>

                                <h2>Cross-Platform Online Tool (Recommended)</h2>

                                <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-[#66000085] p-6 my-6">
                                    <h3 className="text-xl font-semibold mb-3">🌐 EraseMark Online Tool</h3>
                                    <p className="mb-3">No app download needed, use directly in mobile browser!</p>
                                    <ul className="mb-4">
                                        <li>✅ Completely free, no ads</li>
                                        <li>✅ AI-powered processing</li>
                                        <li>✅ Works on iOS and Android</li>
                                        <li>✅ No registration required</li>
                                    </ul>
                                    <p>
                                        <Link href={`/${locale}`} className="text-[#66000085] font-semibold text-lg">
                                            Try Now →
                                        </Link>
                                    </p>
                                </div>

                                <h2>Conclusion</h2>
                                <p>
                                    If you don't want to download an app, or need batch processing, we recommend <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark online tool</Link> - completely free, use directly in mobile browser, excellent results.
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">No App Download Needed</h3>
                                    <p className="text-lg mb-6">Use directly in mobile browser, AI-powered watermark removal</p>
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
