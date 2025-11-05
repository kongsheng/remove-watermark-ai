// Hugging Face Inference API 配置
// 使用免费的 LaMa 模型进行图片修复

const HF_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN
// 注意：Hugging Face 已更新 API 端点
const HF_API_URL = "https://api-inference.huggingface.co"
const HF_MODEL = "akhaliq/lama"

export async function removeWatermark(imageBase64, maskBase64) {
  try {
    console.log('Calling Hugging Face API with token:', HF_API_TOKEN ? 'Set' : 'Not set')
    
    // 转换 base64 为 blob
    const imageBlob = await fetch(imageBase64).then(r => r.blob())
    const maskBlob = await fetch(maskBase64).then(r => r.blob())
    
    const formData = new FormData()
    formData.append('image', imageBlob)
    formData.append('mask', maskBlob)
    
    console.log('Request to Hugging Face API')
    console.log('API URL:', `${HF_API_URL}/models/${HF_MODEL}`)
    
    const response = await fetch(`${HF_API_URL}/models/${HF_MODEL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HF_API_TOKEN}`,
      },
      body: formData,
    })

    console.log('Hugging Face response status:', response.status)

    if (!response.ok) {
      const responseText = await response.text()
      console.log('Hugging Face response:', responseText)
      throw new Error(`Hugging Face API error: ${response.status} - ${responseText}`)
    }

    // 直接返回图片 blob
    const resultBlob = await response.blob()
    
    // 转换为 data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(resultBlob)
    })
  } catch (error) {
    console.error('Hugging Face error:', error)
    throw error
  }
}
