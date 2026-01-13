import { NextResponse } from 'next/server'

// 使用本地后端或部署的后端服务
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000'

export async function POST(request) {
  try {
    const formData = await request.formData()
    const image = formData.get('image')
    const mask = formData.get('mask')

    if (!image || !mask) {
      return NextResponse.json(
        { error: 'Missing image or mask' },
        { status: 400 }
      )
    }

    console.log('Starting watermark removal with backend...')
    console.log('Backend URL:', BACKEND_URL)

    // 将文件转换为 Buffer 或 Blob
    const imageBuffer = Buffer.from(await image.arrayBuffer())
    const maskBuffer = Buffer.from(await mask.arrayBuffer())

    // 创建 FormData（使用 form-data 包或原生 FormData）
    const backendFormData = new FormData()
    
    // 创建 Blob 对象并添加到 FormData
    const imageBlob = new Blob([imageBuffer], { type: image.type || 'image/png' })
    const maskBlob = new Blob([maskBuffer], { type: mask.type || 'image/png' })
    
    backendFormData.append('image', imageBlob, image.name || 'image.png')
    backendFormData.append('mask', maskBlob, mask.name || 'mask.png')

    // 调用后端 API 提交任务
    const response = await fetch(`${BACKEND_URL}/api/inpaint`, {
      method: 'POST',
      body: backendFormData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Backend error:', response.status, errorText)
      throw new Error(`Backend error: ${response.status} - ${errorText}`)
    }

    // 后端返回任务ID和队列信息
    const data = await response.json()
    console.log('Task submitted:', data)

    // 返回任务信息给前端，让前端轮询
    return NextResponse.json(data)
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: `Processing failed: ${error.message}` },
      { status: 500 }
    )
  }
}

// 使用 Node.js Runtime
export const runtime = 'nodejs'
