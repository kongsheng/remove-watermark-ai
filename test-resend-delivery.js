// 测试 Resend 实际发送能力
const fs = require('fs')
const path = require('path')

// 加载环境变量
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

async function testResendDelivery() {
  console.log('🧪 Testing Resend delivery capability...\n')

  if (!process.env.RESEND_API_KEY) {
    console.log('❌ RESEND_API_KEY not found')
    return
  }

  try {
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log('📧 Test 1: Sending to Resend test inbox (delivered@resend.dev)')
    const test1 = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Test 1: Resend Test Inbox',
      html: '<h1>Test 1</h1><p>This email was sent to Resend test inbox</p>',
    })
    console.log('✅ Test 1 successful! ID:', test1.id)
    console.log('   This proves your API key works.\n')

    console.log('📧 Test 2: Sending to your email (taotao123521@gmail.com)')
    const test2 = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'taotao123521@gmail.com',
      subject: 'Test Email from Watermark Remover',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 30px; border-radius: 10px; }
            h1 { color: #667eea; }
            .info { background: white; padding: 15px; margin: 10px 0; border-left: 3px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>✅ Email Test Successful!</h1>
            <p>If you're reading this, your email configuration is working correctly.</p>
            <div class="info">
              <strong>Sent from:</strong> onboarding@resend.dev<br>
              <strong>Sent to:</strong> taotao123521@gmail.com<br>
              <strong>Time:</strong> ${new Date().toLocaleString()}<br>
              <strong>API Key:</strong> ${process.env.RESEND_API_KEY.substring(0, 10)}...
            </div>
            <p>Your Watermark Remover contact form is ready to use! 🎉</p>
          </div>
        </body>
        </html>
      `,
    })
    console.log('✅ Test 2 successful! ID:', test2.id)
    console.log('\n📬 Email sent to: taotao123521@gmail.com')
    console.log('📌 Please check:')
    console.log('   1. Inbox folder')
    console.log('   2. Spam/Junk folder')
    console.log('   3. Promotions folder (if using Gmail)')
    console.log('   4. Resend dashboard: https://resend.com/emails\n')

    console.log('💡 Tip: If still not receiving, check Resend dashboard for delivery status')

  } catch (error) {
    console.log('❌ Error:', error.message)
    if (error.message.includes('API')) {
      console.log('\n⚠️  Possible issues:')
      console.log('   - API Key might be invalid')
      console.log('   - API Key might not have send permissions')
      console.log('   - Free tier might have restrictions')
    }
  }
}

testResendDelivery().catch(console.error)
