import { getTranslations } from '@/lib/i18n'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export async function generateMetadata({ params }) {
    const { locale } = params
    return {
        title: locale === 'zh'
            ? '如何去除PDF文档水印？5种方法详解 | EraseMark'
            : 'How to Remove PDF Watermarks? 5 Methods Explained | EraseMark',
        description: locale === 'zh'
            ? '详细教程：使用Adobe Acrobat、在线工具、转换法等多种方法去除PDF文档水印。'
            : 'Complete tutorial on removing PDF watermarks using Adobe Acrobat, online tools, conversion methods, and more.',
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
                        <span className="text-gray-900">{locale === 'zh' ? '去除PDF水印' : 'Remove PDF Watermarks'}</span>
                    </nav>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {locale === 'zh' ? '如何去除PDF文档水印？5种方法详解' : 'How to Remove PDF Watermarks? 5 Methods Explained'}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-600 mb-8">
                        <span>📅 2025-01-19</span>
                        <span>📖 {locale === 'zh' ? '阅读时间：9分钟' : 'Read time: 9 min'}</span>
                        <span>🏷️ {locale === 'zh' ? '教程' : 'Tutorial'}</span>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {locale === 'zh' ? (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    PDF 文档中的水印可能影响阅读和打印效果。本文将介绍5种去除 PDF 水印的方法，从免费到专业，总有一款适合你。
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ 法律提示</h3>
                                    <p>请仅处理您拥有版权或获得授权的 PDF 文档。去除版权保护的水印可能违反法律。</p>
                                </div>

                                <h2>PDF 水印的类型</h2>

                                <h3>1. 文字水印</h3>
                                <p>最常见的类型，如"机密"、"草稿"、公司名称等文字。</p>

                                <h3>2. 图片水印</h3>
                                <p>公司 LOGO、印章等图片形式的水印。</p>

                                <h3>3. 背景水印</h3>
                                <p>作为背景的半透明水印，覆盖整个页面。</p>

                                <h3>4. 页眉页脚水印</h3>
                                <p>固定在页面顶部或底部的水印。</p>

                                <h2>方法一：使用 Adobe Acrobat Pro（最专业）</h2>

                                <p>Adobe Acrobat Pro 是处理 PDF 的专业工具，可以直接删除水印。</p>

                                <h3>操作步骤：</h3>
                                <ol>
                                    <li>在 Adobe Acrobat Pro 中打开 PDF</li>
                                    <li>点击"工具" → "编辑 PDF"</li>
                                    <li>点击"水印" → "删除"</li>
                                    <li>确认删除</li>
                                    <li>保存文件</li>
                                </ol>

                                <div className="grid grid-cols-2 gap-4 my-6">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">✅ 优点</h4>
                                        <ul>
                                            <li>操作简单</li>
                                            <li>效果完美</li>
                                            <li>支持批量处理</li>
                                            <li>保持 PDF 质量</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h4 className="font-semibold mb-2">❌ 缺点</h4>
                                        <ul>
                                            <li>需要付费订阅（约 ￥100-200/月）</li>
                                            <li>仅适用于非加密 PDF</li>
                                            <li>需要下载安装</li>
                                        </ul>
                                    </div>
                                </div>

                                <h2>方法二：使用在线 PDF 编辑器（最方便）</h2>

                                <h3>推荐工具：</h3>

                                <h4>1. Sejda PDF Editor</h4>
                                <ul>
                                    <li>在线编辑 PDF</li>
                                    <li>可以删除文字和图片</li>
                                    <li>免费版有页数限制（3个任务/小时）</li>
                                </ul>

                                <h4>2. PDF24 Tools</h4>
                                <ul>
                                    <li>完全免费</li>
                                    <li>支持多种 PDF 操作</li>
                                    <li>可以编辑和删除元素</li>
                                </ul>

                                <h4>3. iLovePDF</h4>
                                <ul>
                                    <li>界面友好</li>
                                    <li>功能丰富</li>
                                    <li>免费版有限制</li>
                                </ul>

                                <h3>使用步骤（以 Sejda 为例）：</h3>
                                <ol>
                                    <li>访问 Sejda PDF Editor 网站</li>
                                    <li>上传 PDF 文件</li>
                                    <li>使用"删除"工具选中水印</li>
                                    <li>删除水印元素</li>
                                    <li>下载编辑后的 PDF</li>
                                </ol>

                                <h2>方法三：PDF 转图片再去水印（最灵活）</h2>

                                <p>将 PDF 转换为图片，使用图片去水印工具处理，再转回 PDF。</p>

                                <h3>完整流程：</h3>

                                <h4>步骤1：PDF 转图片</h4>
                                <ul>
                                    <li>使用在线工具（如 PDF2PNG、Convertio）</li>
                                    <li>或使用 Adobe Acrobat 导出为图片</li>
                                    <li>选择高分辨率（300 DPI）</li>
                                </ul>

                                <h4>步骤2：去除图片水印</h4>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <p className="font-semibold mb-2">推荐使用 EraseMark</p>
                                    <ul>
                                        <li>✅ AI 智能去除</li>
                                        <li>✅ 完全免费</li>
                                        <li>✅ 支持批量处理</li>
                                        <li>✅ 效果自然</li>
                                    </ul>
                                    <p className="mt-2">
                                        <Link href={`/${locale}`} className="text-[#66000085] font-semibold">立即使用 →</Link>
                                    </p>
                                </div>

                                <h4>步骤3：图片转回 PDF</h4>
                                <ul>
                                    <li>使用在线工具（如 JPG2PDF、Smallpdf）</li>
                                    <li>上传处理后的图片</li>
                                    <li>转换为 PDF</li>
                                    <li>下载最终文件</li>
                                </ul>

                                <h3>优缺点：</h3>
                                <ul>
                                    <li>✅ 可以处理任何类型的水印</li>
                                    <li>✅ 效果可控</li>
                                    <li>✅ 大部分工具免费</li>
                                    <li>❌ 步骤较多</li>
                                    <li>❌ 可能损失文字可选择性</li>
                                </ul>

                                <h2>方法四：使用 Python 脚本（适合技术用户）</h2>

                                <p>如果你有编程基础，可以使用 Python 自动化处理。</p>

                                <h3>使用 PyPDF2 库：</h3>

                                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg my-6 overflow-x-auto">
                                    <pre><code>{`# 安装依赖
pip install PyPDF2

# 示例代码
from PyPDF2 import PdfReader, PdfWriter

# 读取 PDF
reader = PdfReader("input.pdf")
writer = PdfWriter()

# 处理每一页
for page in reader.pages:
    # 移除水印（如果是简单的文字水印）
    page.merge_page(page)
    writer.add_page(page)

# 保存
with open("output.pdf", "wb") as output_file:
    writer.write(output_file)`}</code></pre>
                                </div>

                                <p><strong>注意：</strong>这个方法只适用于简单的水印，复杂水印需要更高级的处理。</p>

                                <h2>方法五：使用 PDF 编辑软件</h2>

                                <h3>推荐软件：</h3>

                                <h4>1. Foxit PDF Editor</h4>
                                <ul>
                                    <li>功能强大</li>
                                    <li>比 Adobe 便宜</li>
                                    <li>支持水印删除</li>
                                    <li>价格：付费软件（年订阅制）</li>
                                </ul>

                                <h4>2. PDF-XChange Editor</h4>
                                <ul>
                                    <li>性价比高</li>
                                    <li>功能全面</li>
                                    <li>免费版功能有限</li>
                                </ul>

                                <h4>3. Nitro PDF Pro</h4>
                                <ul>
                                    <li>界面友好</li>
                                    <li>功能专业</li>
                                    <li>价格适中</li>
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
                                                <td className="border border-gray-300 px-4 py-2">简单文字水印</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">Adobe Acrobat</td>
                                                <td className="border border-gray-300 px-4 py-2">一键删除</td>
                                            </tr>
                                            <tr className="bg-green-50">
                                                <td className="border border-gray-300 px-4 py-2">复杂图片水印</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">转图片+AI工具</td>
                                                <td className="border border-gray-300 px-4 py-2">效果最好</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">偶尔使用</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">在线工具</td>
                                                <td className="border border-gray-300 px-4 py-2">无需安装</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 px-4 py-2">频繁使用</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">PDF编辑软件</td>
                                                <td className="border border-gray-300 px-4 py-2">效率高</td>
                                            </tr>
                                            <tr className="bg-green-50">
                                                <td className="border border-gray-300 px-4 py-2">批量处理</td>
                                                <td className="border border-gray-300 px-4 py-2 font-semibold">Python脚本</td>
                                                <td className="border border-gray-300 px-4 py-2">自动化</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2>常见问题</h2>

                                <h3>Q1: 加密的 PDF 可以去水印吗？</h3>
                                <p>
                                    需要先解密 PDF。如果有密码，输入密码后可以编辑。如果没有密码，需要使用 PDF 解密工具（可能违反版权）。
                                </p>

                                <h3>Q2: 去除水印会降低 PDF 质量吗？</h3>
                                <p>
                                    使用 Adobe Acrobat 等专业工具直接删除不会降低质量。但如果使用转图片的方法，可能会有轻微质量损失。
                                </p>

                                <h3>Q3: 可以批量去除多个 PDF 的水印吗？</h3>
                                <p>
                                    可以。Adobe Acrobat Pro 支持批量处理。或者使用 Python 脚本自动化处理。
                                </p>

                                <h3>Q4: 为什么有些水印删除不了？</h3>
                                <p>
                                    可能原因：
                                </p>
                                <ul>
                                    <li>PDF 被加密保护</li>
                                    <li>水印是图片的一部分（不是独立元素）</li>
                                    <li>使用的工具不支持该类型水印</li>
                                </ul>

                                <h2>使用技巧</h2>

                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">💡 专业建议</h3>
                                    <ul>
                                        <li>✅ 处理前备份原文件</li>
                                        <li>✅ 选择高分辨率转换（如果转图片）</li>
                                        <li>✅ 检查处理后的文件质量</li>
                                        <li>✅ 确保有合法权限</li>
                                        <li>✅ 复杂水印可以尝试多种方法</li>
                                    </ul>
                                </div>

                                <h2>总结</h2>

                                <p>去除 PDF 水印的5种方法：</p>
                                <ol>
                                    <li><strong>Adobe Acrobat Pro</strong> - 最专业，适合频繁使用</li>
                                    <li><strong>在线 PDF 编辑器</strong> - 最方便，适合偶尔使用</li>
                                    <li><strong>转图片+AI工具</strong> - 最灵活，适合复杂水印</li>
                                    <li><strong>Python 脚本</strong> - 最自动化，适合批量处理</li>
                                    <li><strong>PDF 编辑软件</strong> - 性价比高，功能全面</li>
                                </ol>

                                <p>
                                    对于复杂的图片水印，推荐使用"转图片 + <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark AI工具</Link>"的方法，效果最好且完全免费。
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">处理 PDF 图片水印</h3>
                                    <p className="text-lg mb-6">将 PDF 转为图片，使用 AI 工具去水印</p>
                                    <Link href={`/${locale}`} className="inline-block bg-white text-[#66000085] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                        立即使用 →
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="lead text-xl text-gray-700 mb-8">
                                    Watermarks in PDF documents can affect reading and printing. This article introduces 5 methods to remove PDF watermarks, from free to professional.
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                                    <h3 className="text-lg font-semibold mb-2">⚠️ Legal Notice</h3>
                                    <p>Please only process PDF documents you own or are authorized to use.</p>
                                </div>

                                <h2>Types of PDF Watermarks</h2>
                                <ul>
                                    <li><strong>Text Watermarks</strong> - Most common type</li>
                                    <li><strong>Image Watermarks</strong> - Company logos, stamps</li>
                                    <li><strong>Background Watermarks</strong> - Semi-transparent overlays</li>
                                </ul>

                                <h2>Method 1: Adobe Acrobat Pro (Most Professional)</h2>
                                <p>The professional tool for PDF editing with direct watermark removal.</p>

                                <h2>Method 2: Online PDF Editors (Most Convenient)</h2>
                                <p>Free online tools like Sejda, PDF24, and iLovePDF.</p>

                                <h2>Method 3: Convert to Image + Remove Watermark (Most Flexible)</h2>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                                    <p className="font-semibold mb-2">Recommended: EraseMark</p>
                                    <ul>
                                        <li>✅ AI-powered removal</li>
                                        <li>✅ Completely free</li>
                                        <li>✅ Batch processing support</li>
                                    </ul>
                                    <p className="mt-2">
                                        <Link href={`/${locale}`} className="text-[#66000085] font-semibold">Try Now →</Link>
                                    </p>
                                </div>

                                <h2>Conclusion</h2>
                                <p>
                                    For complex image watermarks, the "Convert to Image + <Link href={`/${locale}`} className="text-[#66000085] font-semibold">EraseMark AI tool</Link>" method works best and is completely free.
                                </p>

                                <div className="bg-gradient-to-r from-[#66000085] to-[#990000cc] text-white rounded-xl p-8 my-12 text-center">
                                    <h3 className="text-2xl font-bold mb-4">Process PDF Image Watermarks</h3>
                                    <p className="text-lg mb-6">Convert PDF to images, use AI tool to remove watermarks</p>
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
