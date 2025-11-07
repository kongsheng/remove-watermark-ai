import { NextResponse } from 'next/server'

// 简单的内存速率限制（生产环境建议使用 Redis）
const rateLimitMap = new Map()

function rateLimit(identifier) {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1小时
  const maxRequests = 5 // 每小时最多5次

  if (!rateLimitMap.has(identifier)) {
    rateLimitMap.set(identifier, [])
  }

  const requests = rateLimitMap.get(identifier)
  const recentRequests = requests.filter(time => now - time < windowMs)
  
  if (recentRequests.length >= maxRequests) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(identifier, recentRequests)
  return true
}

// 清理旧的速率限制数据（每小时）
setInterval(() => {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000
  for (const [key, requests] of rateLimitMap.entries()) {
    const recent = requests.filter(time => now - time < windowMs)
    if (recent.length === 0) {
      rateLimitMap.delete(key)
    } else {
      rateLimitMap.set(key, recent)
    }
  }
}, 60 * 60 * 1000)

export async function POST(request) {
  try {
    // 获取客户端 IP（用于速率限制）
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // 速率限制检查
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { name, email, subject, message } = await request.json()

    // 验证数据
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // 验证长度限制
    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length' },
        { status: 400 }
      )
    }

    // 简单的 XSS 防护
    const sanitize = (str) => str.replace(/[<>]/g, '')
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      subject: sanitize(subject),
      message: sanitize(message),
    }

    // ============ 方案 1: Resend (推荐) ============
    if (process.env.RESEND_API_KEY) {
      const { Resend } = require('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                     color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${sanitizedData.name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${sanitizedData.email}</div>
              </div>
              <div class="field">
                <div class="label">📋 Subject:</div>
                <div class="value">${sanitizedData.subject}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from Watermark Remover Contact Form</p>
              <p>Time: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `

      await resend.emails.send({
        from: 'onboarding@resend.dev', // 开发环境，生产环境需要改为您的域名
        to: 'taotao123521@gmail.com', // 您的接收邮箱
        replyTo: sanitizedData.email,
        subject: `[Contact Form] ${sanitizedData.subject}`,
        html: emailHtml,
      })

      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      })
    }

    // ============ 方案 2: Nodemailer (Gmail/SMTP) ============
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = require('nodemailer')
      
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      })

      const emailHtml = `
        <h2 style="color: #667eea;">📧 New Contact Form Submission</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-left: 3px solid #667eea;">
            ${sanitizedData.message.replace(/\n/g, '<br>')}
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Time: ${new Date().toLocaleString()}
          </p>
        </div>
      `

      await transporter.sendMail({
        from: `"Watermark Remover" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: sanitizedData.email,
        subject: `[Contact Form] ${sanitizedData.subject}`,
        html: emailHtml,
      })

      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      })
    }

    // ============ 方案 3: SendGrid ============
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      const emailHtml = `
        <h2 style="color: #667eea;">📧 New Contact Form Submission</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-left: 3px solid #667eea;">
            ${sanitizedData.message.replace(/\n/g, '<br>')}
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">
            Time: ${new Date().toLocaleString()}
          </p>
        </div>
      `

      await sgMail.send({
        to: 'support@watermark-remover.com', // 改为您的接收邮箱
        from: 'noreply@watermark-remover.com', // 需要在 SendGrid 验证
        replyTo: sanitizedData.email,
        subject: `[Contact Form] ${sanitizedData.subject}`,
        html: emailHtml,
      })

      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      })
    }

    // 如果没有配置任何邮件服务
    return NextResponse.json(
      { error: 'Email service not configured. Please set up RESEND_API_KEY, EMAIL_USER/EMAIL_PASS, or SENDGRID_API_KEY' },
      { status: 500 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    )
  }
}
