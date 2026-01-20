'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Stage, Layer, Image as KonvaImage } from 'react-konva'

const DEFAULT_BRUSH_SIZE = 24

export default function WatermarkRemover({ translations }) {
  const [img, setImg] = useState(null)
  const [imgSize, setImgSize] = useState({ width: 600, height: 400 })
  const [maskCanvas, setMaskCanvas] = useState(null)
  const [previewCanvas, setPreviewCanvas] = useState(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [brushSize, setBrushSize] = useState(DEFAULT_BRUSH_SIZE)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDetecting, setIsDetecting] = useState(false)
  const [hasMask, setHasMask] = useState(false)
  const [detectedRegions, setDetectedRegions] = useState([])
  const stageRef = useRef(null)
  const inputRef = useRef()

  const t = translations.upload
  const tools = translations.tools
  const tips = translations.tips

  useEffect(() => {
    const c = document.createElement('canvas')
    c.width = imgSize.width
    c.height = imgSize.height
    const ctx = c.getContext('2d')
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, c.width, c.height)
    setMaskCanvas(c)

    const p = document.createElement('canvas')
    p.width = imgSize.width
    p.height = imgSize.height
    const pctx = p.getContext('2d')
    pctx.clearRect(0, 0, p.width, p.height)
    setPreviewCanvas(p)
  }, [imgSize.width, imgSize.height])

  const handleUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new window.FileReader()
    reader.onload = () => {
      const image = new window.Image()
      image.src = reader.result
      image.onload = () => {
        setImg(image)
        setImgSize({ width: image.width, height: image.height })
      }
    }
    reader.readAsDataURL(file)
  }

  const handleClearMask = () => {
    if (!maskCanvas || !previewCanvas) return
    const mctx = maskCanvas.getContext('2d')
    mctx.fillStyle = 'black'
    mctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height)

    const pctx = previewCanvas.getContext('2d')
    pctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height)
    setHasMask(false)
    setDetectedRegions([])
    if (stageRef.current) stageRef.current.batchDraw()
  }

  const handleAutoDetect = async () => {
    if (!img) return

    setIsDetecting(true)

    try {
      const imgBlob = await (await fetch(img.src)).blob()
      const form = new FormData()
      form.append('image', imgBlob, 'image.png')

      const resp = await fetch('/api/detect-watermark', {
        method: 'POST',
        body: form,
      })

      if (!resp.ok) {
        throw new Error('Detection failed')
      }

      const data = await resp.json()

      if (data.success && data.regions && data.regions.length > 0) {
        setDetectedRegions(data.regions)

        if (previewCanvas && maskCanvas) {
          const pctx = previewCanvas.getContext('2d')
          const mctx = maskCanvas.getContext('2d')

          pctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height)
          mctx.fillStyle = 'black'
          mctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height)

          data.regions.forEach(region => {
            const padding = 5
            const x = Math.max(0, region.x - padding)
            const y = Math.max(0, region.y - padding)
            const w = region.width + padding * 2
            const h = region.height + padding * 2

            pctx.fillStyle = 'rgba(255, 0, 0, 0.35)'
            pctx.fillRect(x, y, w, h)

            mctx.fillStyle = 'white'
            mctx.fillRect(x, y, w, h)
          })

          setHasMask(true)
          if (stageRef.current) stageRef.current.batchDraw()
        }

        alert(`检测到 ${data.regions.length} 个可能的水印区域`)
      } else {
        alert('未检测到明显水印，请手动标记')
      }
    } catch (error) {
      console.error('Detection error:', error)
      alert('检测失败，请手动标记水印')
    } finally {
      setIsDetecting(false)
    }
  }

  const handleMouseDown = () => setIsDrawing(true)
  const handleMouseUp = () => setIsDrawing(false)
  const handleMouseMove = (e) => {
    if (!isDrawing || !maskCanvas) return
    const stage = stageRef.current

    // getPointerPosition返回的是相对于Stage容器的坐标（屏幕坐标）
    const pos = stage.getPointerPosition()

    // 计算缩放比例
    const scaleX = stage.scaleX()
    const scaleY = stage.scaleY()

    // 将屏幕坐标转换为原始图片坐标
    // 因为Stage应用了scaleX/scaleY，Layer中的内容被缩放了
    // 所以需要除以缩放比例来得到原始坐标
    const actualX = pos.x / scaleX
    const actualY = pos.y / scaleY

    setHasMask(true)

    const mctx = maskCanvas.getContext('2d')
    mctx.fillStyle = 'white'
    mctx.beginPath()
    mctx.arc(actualX, actualY, brushSize / 2, 0, Math.PI * 2)
    mctx.fill()

    if (previewCanvas) {
      const pctx = previewCanvas.getContext('2d')
      pctx.fillStyle = 'rgba(255,0,0,0.35)'
      pctx.beginPath()
      pctx.arc(actualX, actualY, brushSize / 2, 0, Math.PI * 2)
      pctx.fill()
      if (stageRef.current) stageRef.current.batchDraw()
    }
  }

  const handleRemoveWatermark = async () => {
    if (!img || !maskCanvas) {
      alert(tips.noImage)
      return
    }
    if (!hasMask) {
      alert(tips.noMask)
      return
    }

    setIsProcessing(true)

    try {
      const imgBlob = await (await fetch(img.src)).blob()
      const maskBlob = await new Promise((resolve) => maskCanvas.toBlob(resolve, 'image/png'))

      const form = new FormData()
      form.append('image', imgBlob, 'image.png')
      form.append('mask', maskBlob, 'mask.png')

      // 提交任务到队列
      const url = '/api/inpaint'
      const resp = await fetch(url, {
        method: 'POST',
        body: form,
      })

      if (!resp.ok) {
        alert(tips.error)
        setIsProcessing(false)
        return
      }

      const data = await resp.json()
      const taskId = data.task_id

      // 显示队列位置提示
      if (data.queue_position > 1) {
        console.log(`排队中，前面还有 ${data.queue_position - 1} 个任务`)
      }

      // 轮询任务状态
      const pollInterval = setInterval(async () => {
        try {
          const statusResp = await fetch(`/api/task/${taskId}`)

          if (statusResp.ok) {
            const contentType = statusResp.headers.get('content-type')

            if (contentType && contentType.includes('image')) {
              // 任务完成，获取到图片
              clearInterval(pollInterval)

              const blob = await statusResp.blob()
              const outUrl = URL.createObjectURL(blob)
              const out = new Image()
              out.src = outUrl
              out.onload = () => {
                // 更新图片
                setImg(out)
                setImgSize({ width: out.width, height: out.height })

                // 清空mask canvas
                const mctx = maskCanvas.getContext('2d')
                mctx.fillStyle = 'black'
                mctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height)

                // 清空preview canvas
                if (previewCanvas) {
                  const pctx = previewCanvas.getContext('2d')
                  pctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height)
                }

                setHasMask(false)
                setIsProcessing(false)

                // 强制重绘stage
                if (stageRef.current) {
                  stageRef.current.batchDraw()
                }
              }
            } else {
              // 还在处理中或排队中
              const status = await statusResp.json()
              console.log(status.message || '处理中...')
            }
          } else {
            // 错误
            clearInterval(pollInterval)
            alert(tips.error)
            setIsProcessing(false)
          }
        } catch (e) {
          console.error('轮询错误:', e)
        }
      }, 2000) // 每2秒查询一次

      // 60秒超时保护
      setTimeout(() => {
        clearInterval(pollInterval)
        if (isProcessing) {
          alert('处理超时，请重试')
          setIsProcessing(false)
        }
      }, 60000)
    } catch (error) {
      alert(tips.error)
      setIsProcessing(false)
    }
  }

  const handleDownload = () => {
    if (!img) return
    const link = document.createElement('a')
    link.href = img.src
    link.download = `removed-watermark-${Date.now()}.png`
    link.click()
  }

  const handleReset = () => {
    setImg(null)
    setHasMask(false)
    setIsProcessing(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="w-full">
      {!img ? (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-6">📸</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-gray-600 mb-8">{t.support}</p>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleUpload}
            style={{ display: 'none' }}
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-block bg-[#66000085] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            {t.button}
          </label>
          <p className="text-sm text-gray-500 mt-4">{t.dragHint}</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-600">
                  {tools.brushSize}: {brushSize}px
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #66000085 0%, #66000085 ${((brushSize - 10) / 40) * 100}%, #e5e7eb ${((brushSize - 10) / 40) * 100}%, #e5e7eb 100%)`
                  }}
                  className="w-48 h-2 rounded-lg appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-4 
                    [&::-webkit-slider-thumb]:h-4 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:border-0
                    [&::-moz-range-thumb]:w-4 
                    [&::-moz-range-thumb]:h-4 
                    [&::-moz-range-thumb]:rounded-full 
                    [&::-moz-range-thumb]:border-0 
                    [&::-moz-range-thumb]:shadow-md"
                />
                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    background-color: #660000 !important;
                  }
                  input[type="range"]::-moz-range-thumb {
                    background-color: #660000 !important;
                  }
                `}</style>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAutoDetect}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  disabled={isDetecting || isProcessing}
                >
                  {isDetecting ? '🔍 检测中...' : '🤖 AI自动检测'}
                </button>
                <button
                  onClick={handleClearMask}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  disabled={!hasMask || isProcessing}
                >
                  {tools.clearMask}
                </button>
                <button
                  onClick={handleRemoveWatermark}
                  className="px-6 py-2 bg-[#66000085] text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity font-medium"
                  disabled={!hasMask || isProcessing}
                >
                  {isProcessing ? tips.processing : tools.removeWatermark}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="overflow-hidden flex justify-center items-center">
              {(() => {
                // 计算缩放比例，保持宽高比
                let scale = 1
                if (imgSize.width > 1200 || imgSize.height > 800) {
                  const scaleX = 1200 / imgSize.width
                  const scaleY = 800 / imgSize.height
                  scale = Math.min(scaleX, scaleY)
                }

                const displayWidth = imgSize.width * scale
                const displayHeight = imgSize.height * scale

                return (
                  <Stage
                    ref={stageRef}
                    width={displayWidth}
                    height={displayHeight}
                    scaleX={scale}
                    scaleY={scale}
                    style={{ cursor: 'crosshair', display: 'block' }}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseUp}
                  >
                    <Layer>
                      <KonvaImage image={img} width={imgSize.width} height={imgSize.height} />
                    </Layer>
                    {previewCanvas && (
                      <Layer>
                        <KonvaImage image={previewCanvas} width={imgSize.width} height={imgSize.height} />
                      </Layer>
                    )}
                  </Stage>
                )
              })()}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleReset}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              disabled={isProcessing}
            >
              {tools.reset}
            </button>
            <button
              onClick={handleDownload}
              className="px-6 py-2 bg-[#66000085] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              {tools.download}
            </button>
          </div>

          <p className="text-sm text-gray-700 text-center">
            💡 {tips.hint}
          </p>
        </div>
      )}
    </div>
  )
}
