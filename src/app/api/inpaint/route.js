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

    // 创建新的 FormData 发送到后端
    const backendFormData = new FormData()
    backendFormData.append('image', image)
    backendFormData.append('mask', mask)

    // 调用后端 API
    const response = await fetch(`${BACKEND_URL}/api/inpaint`, {
      method: 'POST',
      body: backendFormData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Backend error:', response.status, errorText)
      throw new Error(`Backend error: ${response.status} - ${errorText}`)
    }

    console.log('Got result from backend')

    // 直接返回处理后的图片
    const resultBlob = await response.blob()
    
    return new NextResponse(resultBlob, {
      headers: {
        'Content-Type': 'image/png',
      },
    })
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
