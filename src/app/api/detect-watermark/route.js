import { NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000'

export async function POST(request) {
    try {
        const formData = await request.formData()
        const image = formData.get('image')

        if (!image) {
            return NextResponse.json(
                { error: 'Missing image' },
                { status: 400 }
            )
        }

        console.log('Detecting watermark with backend...')

        const imageBuffer = Buffer.from(await image.arrayBuffer())
        const backendFormData = new FormData()
        const imageBlob = new Blob([imageBuffer], { type: image.type || 'image/png' })
        backendFormData.append('image', imageBlob, image.name || 'image.png')

        const response = await fetch(`${BACKEND_URL}/api/detect-watermark`, {
            method: 'POST',
            body: backendFormData,
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Backend error:', response.status, errorText)
            throw new Error(`Backend error: ${response.status}`)
        }

        const data = await response.json()
        return NextResponse.json(data)

    } catch (error) {
        console.error('API error:', error)
        return NextResponse.json(
            { error: `Detection failed: ${error.message}` },
            { status: 500 }
        )
    }
}

export const runtime = 'nodejs'
