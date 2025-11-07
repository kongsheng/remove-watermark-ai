// 测试邮件配置脚本
// 运行: node test-email.js

// 手动加载 .env.local 文件
const fs = require('fs')
const path = require('path')

try {
  const envPath = path.join(__dirname, '.env.local')
  const envContent = fs.readFileSync(envPath, 'utf8')
  envContent.split('\n').forEach(line => {
    line = line.trim()
    if (line && !line.startsWith('#')) {
      const [key, ...values] = line.split('=')
      if (key && values.length) {
        process.env[key.trim()] = values.join('=').trim()
      }
    }
  })
} catch (error) {
  console.log('⚠️  Warning: Could not load .env.local file')
}

async function testEmail() {
  console.log('🧪 Testing email configuration...\n')

  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Email from Contact Form',
    message: 'This is a test message to verify email configuration.',
  }

  // 检查配置
  console.log('📋 Environment Variables:')
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Not set')
  console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Not set')
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set' : '❌ Not set')
  console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY ? '✅ Set' : '❌ Not set')
  console.log()

  // 方案 1: Resend
  if (process.env.RESEND_API_KEY) {
    console.log('🚀 Testing Resend...')
    try {
      const { Resend } = require('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'taotao123521@gmail.com', // 您的接收邮箱
        subject: 'Test Email from Watermark Remover',
        html: '<h1>✅ Test Email Successful!</h1><p>Your email configuration is working correctly.</p><p>This test email was sent from your Watermark Remover contact form.</p>',
      })

      console.log('✅ Resend test successful!')
      console.log('Email ID:', result.id)
      console.log('📧 Test email sent to: taotao123521@gmail.com')
      console.log('Please check your inbox (and spam folder)')
      return
    } catch (error) {
      console.log('❌ Resend test failed:', error.message)
    }
  }

  // 方案 2: Nodemailer
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    console.log('📧 Testing Nodemailer (Gmail/SMTP)...')
    try {
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

      // 验证连接
      await transporter.verify()
      console.log('✅ SMTP connection verified')

      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: 'Test Email',
        html: '<h1>Test Email</h1><p>This is a test.</p>',
      })

      console.log('✅ Nodemailer test successful!')
      console.log('Message ID:', info.messageId)
      return
    } catch (error) {
      console.log('❌ Nodemailer test failed:', error.message)
    }
  }

  // 方案 3: SendGrid
  if (process.env.SENDGRID_API_KEY) {
    console.log('📬 Testing SendGrid...')
    try {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)

      await sgMail.send({
        to: 'test@example.com', // 改为您的测试邮箱
        from: 'noreply@watermark-remover.com', // 需要在 SendGrid 验证
        subject: 'Test Email',
        html: '<h1>Test Email</h1><p>This is a test.</p>',
      })

      console.log('✅ SendGrid test successful!')
      return
    } catch (error) {
      console.log('❌ SendGrid test failed:', error.message)
    }
  }

  console.log('\n⚠️  No email service configured!')
  console.log('Please set up one of the following in .env.local:')
  console.log('  - RESEND_API_KEY')
  console.log('  - EMAIL_USER + EMAIL_PASS')
  console.log('  - SENDGRID_API_KEY')
}

testEmail().catch(console.error)
