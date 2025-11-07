# 📧 邮件发送流程说明

## 整体架构

```
用户填写表单
    ↓
前端验证 (page-client.js)
    ↓
POST /api/contact
    ↓
后端验证 + 速率限制 (route.js)
    ↓
选择邮件服务
    ├─→ Resend API
    ├─→ Gmail SMTP
    └─→ SendGrid API
    ↓
发送邮件
    ↓
返回结果给前端
    ↓
显示成功/失败提示
```

---

## 详细流程

### 1️⃣ 用户提交表单

**文件**: `src/app/[locale]/contact/page-client.js`

```javascript
用户填写:
├── 姓名 (name)
├── 邮箱 (email)
├── 主题 (subject)
└── 留言 (message)
```

### 2️⃣ 前端处理

```javascript
handleSubmit() {
  1. 阻止默认提交
  2. 设置状态为 "sending"
  3. 调用 fetch('/api/contact', {...})
  4. 根据响应显示成功/失败
  5. 3秒后清除提示
}
```

### 3️⃣ API 路由处理

**文件**: `src/app/api/contact/route.js`

```javascript
POST /api/contact {
  
  // 步骤 1: 速率限制
  检查 IP 是否超过限制 (5次/小时)
    ├─ 超过 → 返回 429 错误
    └─ 未超过 → 继续
  
  // 步骤 2: 数据验证
  验证必填字段
  验证邮箱格式
  验证长度限制
  XSS 防护
    ├─ 验证失败 → 返回 400 错误
    └─ 验证通过 → 继续
  
  // 步骤 3: 选择邮件服务
  if (RESEND_API_KEY 存在) {
    使用 Resend 发送
  } else if (EMAIL_USER 存在) {
    使用 Nodemailer/SMTP 发送
  } else if (SENDGRID_API_KEY 存在) {
    使用 SendGrid 发送
  } else {
    返回 500 错误: 未配置邮件服务
  }
  
  // 步骤 4: 发送邮件
  构建 HTML 邮件模板
  调用邮件服务 API
    ├─ 成功 → 返回 200 + success
    └─ 失败 → 返回 500 + error
}
```

---

## 速率限制机制

```javascript
内存 Map 存储:
{
  "IP地址": [时间戳1, 时间戳2, ...],
  "192.168.1.1": [1699000000, 1699001000],
}

检查逻辑:
1. 过滤出1小时内的请求
2. 如果 >= 5次 → 拒绝
3. 如果 < 5次 → 允许并记录新时间戳

清理机制:
每小时清理一次过期数据
```

---

## 三种邮件服务对比

### 🎯 Resend (推荐)

```
优势:
✅ API 最简单
✅ 发送速度快
✅ 免费额度充足
✅ 专为开发者设计

工作原理:
应用 → Resend API → 收件人邮箱

配置:
RESEND_API_KEY=re_xxx
```

### 📧 Gmail SMTP

```
优势:
✅ 使用自己的邮箱
✅ 完全免费
✅ 稳定可靠

工作原理:
应用 → Gmail SMTP服务器 → 收件人邮箱

配置:
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=app-password
```

### 🚀 SendGrid

```
优势:
✅ 企业级服务
✅ 详细统计
✅ 高可靠性

工作原理:
应用 → SendGrid API → 收件人邮箱

配置:
SENDGRID_API_KEY=SG.xxx
```

---

## 安全措施

### 1. 速率限制
```
目的: 防止滥用
限制: 5次/小时/IP
实现: 内存 Map (生产建议用 Redis)
```

### 2. 输入验证
```
✅ 必填字段检查
✅ 邮箱格式验证 (正则)
✅ 长度限制:
   - 姓名: ≤100字符
   - 主题: ≤200字符
   - 留言: ≤2000字符
```

### 3. XSS 防护
```javascript
sanitize(str) {
  return str.replace(/[<>]/g, '')
}
// 移除 < > 防止注入脚本
```

### 4. 环境变量
```
✅ API Key 不写死在代码中
✅ 使用 .env.local 存储
✅ .gitignore 防止泄露
```

---

## 邮件模板结构

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* 美化样式 */
  </style>
</head>
<body>
  <div class="container">
    <!-- 头部: 渐变背景 + 标题 -->
    <div class="header">
      📧 New Contact Form Submission
    </div>
    
    <!-- 内容: 表单数据 -->
    <div class="content">
      <div class="field">
        <div class="label">👤 Name:</div>
        <div class="value">用户姓名</div>
      </div>
      <!-- 其他字段... -->
    </div>
    
    <!-- 底部: 时间戳 -->
    <div class="footer">
      Sent from Watermark Remover
      Time: 2024-01-01 10:00:00
    </div>
  </div>
</body>
</html>
```

---

## 测试流程

```bash
# 1. 配置测试
npm run test:email
    ↓
检查环境变量
    ↓
尝试发送测试邮件
    ↓
显示结果 (成功/失败)

# 2. 集成测试
npm run dev
    ↓
访问 /contact
    ↓
填写表单提交
    ↓
检查:
  ├─ 浏览器控制台 (前端错误)
  ├─ 终端输出 (后端日志)
  └─ 接收邮箱 (邮件内容)
```

---

## 错误处理

```javascript
错误类型:
├─ 400 Bad Request
│   ├─ 必填字段缺失
│   ├─ 邮箱格式错误
│   └─ 输入超长
│
├─ 429 Too Many Requests
│   └─ 超过速率限制
│
├─ 500 Internal Server Error
│   ├─ 邮件服务未配置
│   ├─ API Key 无效
│   └─ 网络错误
│
└─ 前端处理
    ├─ 显示错误提示
    ├─ 3秒后自动消失
    └─ 允许重新提交
```

---

## 生产环境建议

### 1. 使用 Resend + 自定义域名
```
why: 专业、可靠、价格合理
步骤:
1. 在 Resend 添加域名
2. 配置 DNS 记录
3. 修改发件人地址
```

### 2. 添加 CAPTCHA
```javascript
// Google reCAPTCHA v3
安装: npm install react-google-recaptcha-v3
配置: NEXT_PUBLIC_RECAPTCHA_SITE_KEY
验证: 在 API 中验证 token
```

### 3. 使用 Redis 存储速率限制
```javascript
// 替换内存 Map
安装: npm install redis
连接: await redis.connect()
存储: await redis.incr(`rate:${ip}`)
```

### 4. 记录日志
```javascript
// 使用 Winston/Pino
记录:
├─ 发送成功的邮件
├─ 发送失败的错误
├─ 被限流的 IP
└─ 异常请求
```

---

## 监控指标

```
应该监控:
├─ 邮件发送成功率
├─ 平均响应时间
├─ 速率限制触发次数
├─ 错误类型分布
└─ 每日发送量
```

---

这样整个邮件功能就完整实现了！🎉
