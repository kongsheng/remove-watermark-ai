import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000'

export async function GET(request, { params }) {
  try {
    const { taskId } = params

    // 查询后端任务状态
    const response = await fetch(`${BACKEND_URL}/api/task/${taskId}`)

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(errorData, { status: response.status })
    }

    const contentType = response.headers.get('content-type')

    // 如果是图片，直接返回
    if (contentType && contentType.includes('image')) {
      const imageBlob = await response.blob()
      return new NextResponse(imageBlob, {
        headers: {
          'Content-Type': contentType,
        },
      })
    }

    // 如果是JSON状态信息，返回JSON
    const data = await response.json()
    return NextResponse.json(data)

  } catch (error) {
    console.error('Task status error:', error)
    return NextResponse.json(
      { error: `Failed to get task status: ${error.message}` },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
