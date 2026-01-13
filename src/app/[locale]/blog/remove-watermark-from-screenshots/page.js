import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    const { locale } = params
    return {
        title: locale === 'zh'
            ? '如何去除截图水印？文档、网页、App截图去水印教程 | EraseMark'
            : 'How to Remove Watermarks from Screenshots? Document, Web, App Tutorial | EraseMark',
        description: locale === 'zh'
            ? '详细教程：去除文档截图、网页截图、App截图上的水印，包括PDF水印、Word水印、微信截图水印等。'
            : 'Detailed tutorial on removing watermarks from document screenshots, web screenshots, app screenshots including PDF, Word, WeChat watermarks.',
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
                        <span className="text-gray-900">{locale === 'zh' ? '截图去水印' : 'Screenshot Watermark Removal'}</span>
                    </nav>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {locale === 'zh' ? '如何去除截图水印？文档、网页、App截图去水印教程' : 'How to Remove Watermarks from Screenshots?'}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-600 mb-8">
                        <span>📅 2025-11-04</span>
                        <span>📖 {locale === 'zh' ? '阅读时间：7分钟' : 'Read time: 7 min'}</span>
                        <span>🏷️ {locale === 'zh' ? '教程' : 'Tutorial'}</span>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {locale === 'zh' ? (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    截图是我们日常工作中经常使用的功能，但很多截图都带有水印。本文将教你如何去除各种类型截图上的水印。
                                </p>

                                <h2>常见的截图水印类型</h2>
                                <ul>
                                    <li><strong>文档水印</strong> - PDF、Word、Excel等文档的"机密"、"草稿"水印</li>
                                    <li><strong>网页水印</strong> - 付费内容、版权保护的网页水印</li>
                                    <li><strong>App截图水印</strong> - 微信、抖音、小红书等App的水印</li>
                                    <li><strong>图片网站水印</strong> - 图库、设计网站的版权水印</li>
                                </ul>

                                <h2>方法一：使用AI去水印工具（推荐）</h2>
                                <p>
                                    <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark</Link> 是处理截图水印的最佳选择，特别适合处理文字类水印。
                                </p>

                                <h3>操作步骤：</h3>
                                <ol>
                                    <li>访问 <Link href={`/${locale}`} className="text-[#66000085]">EraseMark.com</Link></li>
                                    <li>上传带水印的截图</li>
                                    <li>用画笔工具涂抹水印区域</li>
                                    <li>点击"去除水印"</li>
                                    <li>下载处理后的图片</li>
                                </ol>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">✅ 为什么推荐EraseMark？</h3>
                                    <ul>
                                        <li>AI智能识别，效果自然</li>
                                        <li>特别擅长处理文字水印</li>
                                        <li>完全免费，无需注册</li>
                                        <li>本地处理，保护隐私</li>
                                    </ul>
                                </div>

                                <h2>方法二：文档水印处理</h2>

                                <h3>PDF水印去除</h3>
                                <p>如果你有PDF源文件，可以尝试以下方法：</p>
                                <ol>
                                    <li><strong>Adobe Acrobat</strong> - 编辑 → 水印 → 删除</li>
                                    <li><strong>在线PDF编辑器</strong> - 如Smallpdf、iLovePDF</li>
                                    <li><strong>截图后用AI去水印</strong> - 最简单的方法</li>
                                </ol>

                                <h3>Word文档水印去除</h3>
                                <ol>
                                    <li>打开Word文档</li>
                                    <li>点击"设计"选项卡</li>
                                    <li>选择"水印" → "删除水印"</li>
                                </ol>
                                <p>如果是截图，直接使用 <Link href={`/${locale}`} className="text-[#66000085]">EraseMark</Link> 处理更方便。</p>

                                <h2>方法三：网页截图水印</h2>
                                <p>很多付费内容网站会在页面上添加水印，截图后水印也会保留。</p>

                                <h3>处理方法：</h3>
                                <ol>
                                    <li>先截图保存</li>
                                    <li>使用AI去水印工具处理</li>
                                    <li>对于重复的水印图案，可以分区域多次处理</li>
                                </ol>

                                <h2>方法四：App截图水印</h2>

                                <h3>微信截图</h3>
                                <p>微信聊天截图通常没有水印，但朋友圈图片可能有。处理方法：</p>
                                <ul>
                                    <li>保存原图（如果可以）</li>
                                    <li>截图后用AI工具去水印</li>
                                </ul>

                                <h3>小红书截图</h3>
                                <p>小红书图片通常带有用户ID水印：</p>
                                <ol>
                                    <li>截图保存图片</li>
                                    <li>使用EraseMark涂抹水印区域</li>
                                    <li>AI会自动修复背景</li>
                                </ol>

                                <h3>抖音截图</h3>
                                <p>抖音视频截图会有抖音logo和用户ID：</p>
                                <ul>
                                    <li>视频截图后用AI去水印</li>
                                    <li>或使用专门的抖音去水印工具下载无水印视频</li>
                                </ul>

                                <h2>处理技巧</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">💡 获得最佳效果的技巧</h3>
                                    <ul>
                                        <li><strong>精确选择</strong> - 只涂抹水印区域，不要选择过大范围</li>
                                        <li><strong>分次处理</strong> - 多个水印可以分开处理</li>
                                        <li><strong>高清截图</strong> - 使用高分辨率截图，效果更好</li>
                                        <li><strong>简单背景优先</strong> - 纯色背景的水印最容易去除</li>
                                    </ul>
                                </div>

                                <h2>注意事项</h2>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ 法律提醒</h3>
                                    <p>
                                        请仅处理您拥有版权或获得授权的内容。去除他人版权保护水印可能违反法律。本教程仅供学习和合法用途。
                                    </p>
                                </div>

                                <h2>常见问题</h2>

                                <h3>Q1: 半透明水印能去除吗？</h3>
                                <p>可以。AI工具能够识别半透明水印并智能修复，但效果取决于水印的透明度和背景复杂度。</p>

                                <h3>Q2: 满屏重复水印怎么处理？</h3>
                                <p>可以分区域多次处理，或者选择水印较少的区域截图。</p>

                                <h3>Q3: 去水印后图片质量会下降吗？</h3>
                                <p>使用AI工具处理，图片质量基本不会下降。但如果原图本身质量较低，效果可能受影响。</p>

                                <h2>总结</h2>
                                <p>去除截图水印的最佳方法是使用AI去水印工具：</p>
                                <ol>
                                    <li>🥇 <strong>EraseMark</strong> - 免费、简单、效果好</li>
                                    <li>🥈 <strong>源文件编辑</strong> - 如果有原文档</li>
                                    <li>🥉 <strong>手动编辑</strong> - 使用PS等软件</li>
                                </ol>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">立即去除截图水印</h3>
                                    <p className="text-lg mb-6">AI智能处理，效果自然</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        开始使用 →
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    Screenshots are commonly used in daily work, but many come with watermarks. This article teaches you how to remove watermarks from various types of screenshots.
                                </p>

                                <h2>Common Screenshot Watermark Types</h2>
                                <ul>
                                    <li><strong>Document watermarks</strong> - "Confidential", "Draft" in PDF, Word, Excel</li>
                                    <li><strong>Web page watermarks</strong> - Paid content, copyright protection</li>
                                    <li><strong>App screenshot watermarks</strong> - TikTok, Instagram, etc.</li>
                                    <li><strong>Stock photo watermarks</strong> - Image library copyright marks</li>
                                </ul>

                                <h2>Method 1: AI Watermark Removal Tool (Recommended)</h2>
                                <p>
                                    <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark</Link> is the best choice for screenshot watermarks, especially text watermarks.
                                </p>

                                <h3>Steps:</h3>
                                <ol>
                                    <li>Visit <Link href={`/${locale}`} className="text-[#66000085]">EraseMark.com</Link></li>
                                    <li>Upload the watermarked screenshot</li>
                                    <li>Paint over the watermark area</li>
                                    <li>Click "Remove Watermark"</li>
                                    <li>Download the processed image</li>
                                </ol>

                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">✅ Why EraseMark?</h3>
                                    <ul>
                                        <li>AI smart recognition, natural results</li>
                                        <li>Excellent for text watermarks</li>
                                        <li>Completely free, no registration</li>
                                        <li>Local processing, privacy protected</li>
                                    </ul>
                                </div>

                                <h2>Method 2: Document Watermarks</h2>

                                <h3>PDF Watermark Removal</h3>
                                <p>If you have the PDF source file:</p>
                                <ol>
                                    <li><strong>Adobe Acrobat</strong> - Edit → Watermark → Remove</li>
                                    <li><strong>Online PDF editors</strong> - Smallpdf, iLovePDF</li>
                                    <li><strong>Screenshot + AI removal</strong> - Simplest method</li>
                                </ol>

                                <h3>Word Document Watermarks</h3>
                                <ol>
                                    <li>Open Word document</li>
                                    <li>Click "Design" tab</li>
                                    <li>Select "Watermark" → "Remove Watermark"</li>
                                </ol>

                                <h2>Method 3: Web Page Screenshots</h2>
                                <p>Many paid content websites add watermarks that appear in screenshots.</p>

                                <h3>Solution:</h3>
                                <ol>
                                    <li>Take the screenshot</li>
                                    <li>Process with AI watermark removal tool</li>
                                    <li>For repeating patterns, process in sections</li>
                                </ol>

                                <h2>Tips for Best Results</h2>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">💡 Pro Tips</h3>
                                    <ul>
                                        <li><strong>Precise selection</strong> - Only paint watermark area</li>
                                        <li><strong>Process separately</strong> - Handle multiple watermarks one by one</li>
                                        <li><strong>High-res screenshots</strong> - Better quality = better results</li>
                                        <li><strong>Simple backgrounds</strong> - Solid colors are easiest</li>
                                    </ul>
                                </div>

                                <h2>Legal Notice</h2>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ Important</h3>
                                    <p>
                                        Only process content you own or are authorized to use. Removing copyright protection watermarks may violate laws. This tutorial is for educational and legal purposes only.
                                    </p>
                                </div>

                                <h2>Summary</h2>
                                <p>Best methods for removing screenshot watermarks:</p>
                                <ol>
                                    <li>🥇 <strong>EraseMark</strong> - Free, simple, excellent results</li>
                                    <li>🥈 <strong>Source file editing</strong> - If you have original document</li>
                                    <li>🥉 <strong>Manual editing</strong> - Using Photoshop etc.</li>
                                </ol>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">Remove Screenshot Watermarks Now</h3>
                                    <p className="text-lg mb-6">AI-powered, natural results</p>
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
