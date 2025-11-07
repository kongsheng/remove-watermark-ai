# 📧 邮件发送功能配置指南

联系表单支持三种邮件发送方式，选择其中一种配置即可。

---

## 🎯 方案 1: Resend (推荐 - 最简单)

### 优点
- ✅ 配置超级简单，只需要一个 API Key
- ✅ 专为开发者设计的现代 API
- ✅ 免费配额充足 (100封/天, 3000封/月)
- ✅ 不需要 SMTP 服务器
- ✅ 发送速度快，可靠性高

### 配置步骤

1. **注册 Resend 账号**
   - 访问: https://resend.com
   - 使用 GitHub 或邮箱注册（免费）

2. **获取 API Key**
   - 登录后访问: https://resend.com/api-keys
   - 点击 "Create API Key"
   - 复制生成的 API Key (格式: `re_...`)

3. **验证域名（可选，用于生产环境）**
   - 访问: https://resend.com/domains
   - 添加您的域名并按照提示设置 DNS 记录
   - 开发阶段可以使用 `onboarding@resend.dev` 发送

4. **配置环境变量**
   ```bash
   # frontend-next/.env.local
   RESEND_API_KEY=re_your_api_key_here
   ```

5. **安装依赖**
   ```bash
   cd frontend-next
   npm install resend
   ```

6. **修改 API 代码中的邮箱地址**
   打开 `src/app/api/contact/route.js`，修改:
   ```javascript
   from: 'onboarding@resend.dev', // 开发阶段使用这个
   to: 'your-email@example.com',  // 改成您的接收邮箱
   ```

---

## 📨 方案 2: Gmail SMTP (传统方案)

### 优点
- ✅ 使用自己的 Gmail 账号
- ✅ 免费
- ✅ 可靠稳定

### 配置步骤

1. **启用两步验证**
   - 访问: https://myaccount.google.com/security
   - 找到 "两步验证" 并启用

2. **生成应用专用密码**
   - 访问: https://myaccount.google.com/apppasswords
   - 选择 "应用": 邮件
   - 选择 "设备": 其他（自定义名称）
   - 生成密码并保存（16位密码，没有空格）

3. **配置环境变量**
   ```bash
   # frontend-next/.env.local
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   EMAIL_TO=support@your-domain.com
   ```

4. **安装依赖**
   ```bash
   cd frontend-next
   npm install nodemailer
   ```

### 其他邮箱服务配置

**QQ 邮箱**
```bash
EMAIL_HOST=smtp.qq.com
EMAIL_PORT=465
EMAIL_USER=your-qq@qq.com
EMAIL_PASS=授权码（在QQ邮箱设置中获取）
```

**163 邮箱**
```bash
EMAIL_HOST=smtp.163.com
EMAIL_PORT=465
EMAIL_USER=your-email@163.com
EMAIL_PASS=授权码（在163邮箱设置中获取）
```

**Outlook**
```bash
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

---

## 🚀 方案 3: SendGrid (企业级)

### 优点
- ✅ 专业的邮件服务
- ✅ 免费配额: 100封/天
- ✅ 提供详细的发送统计和分析

### 配置步骤

1. **注册 SendGrid 账号**
   - 访问: https://sendgrid.com
   - 注册免费账号

2. **创建 API Key**
   - 访问: https://app.sendgrid.com/settings/api_keys
   - 点击 "Create API Key"
   - 选择 "Full Access" 权限
   - 复制生成的 API Key

3. **验证发件人邮箱**
   - 访问: https://app.sendgrid.com/settings/sender_auth
   - 添加并验证您的发件邮箱

4. **配置环境变量**
   ```bash
   # frontend-next/.env.local
   SENDGRID_API_KEY=SG.your_api_key_here
   ```

5. **安装依赖**
   ```bash
   cd frontend-next
   npm install @sendgrid/mail
   ```

6. **修改 API 代码中的邮箱地址**
   ```javascript
   to: 'support@your-domain.com',    // 接收邮箱
   from: 'noreply@your-domain.com',  // 已验证的发件邮箱
   ```

---

## 🧪 测试邮件功能

1. **启动开发服务器**
   ```bash
   cd frontend-next
   npm run dev
   ```

2. **访问联系页面**
   - 打开: http://localhost:3000/contact

3. **填写并提交表单**
   - 填写所有字段
   - 点击发送
   - 查看浏览器控制台是否有错误

4. **检查邮箱**
   - 查看配置的接收邮箱
   - 应该会收到一封包含表单内容的邮件

---

## ❗ 常见问题

### 1. Gmail 提示 "Less secure app access"
- 解决: 必须使用应用专用密码，不能使用账号密码

### 2. Resend 发送失败
- 检查 API Key 是否正确
- 开发阶段使用 `onboarding@resend.dev` 作为发件人
- 生产环境必须验证自己的域名

### 3. SMTP 连接超时
- 检查防火墙是否阻止了 SMTP 端口
- 尝试使用 465 端口（SSL）而不是 587 端口（TLS）

### 4. 邮件进入垃圾箱
- 配置 SPF、DKIM 记录
- 使用已验证的域名发送
- 避免使用触发垃圾邮件的词汇

---

## 📝 生产环境建议

1. **使用 Resend + 自定义域名**
   - 专业且可靠
   - 配置简单
   - 价格合理

2. **设置邮件模板**
   - 创建专业的 HTML 邮件模板
   - 包含公司 logo 和品牌元素

3. **添加速率限制**
   - 防止表单滥用
   - 使用 CAPTCHA 验证

4. **记录发送日志**
   - 保存邮件发送记录
   - 便于追踪和调试

---

## 🔒 安全注意事项

1. **永远不要提交 .env.local 文件到 Git**
   ```bash
   # 确保 .gitignore 包含
   .env.local
   .env*.local
   ```

2. **使用环境变量管理敏感信息**
   - API Keys
   - 邮箱密码
   - SMTP 凭据

3. **验证用户输入**
   - 邮箱格式验证
   - 内容长度限制
   - XSS 防护

4. **添加速率限制**
   - 防止暴力提交
   - 建议每个 IP 每小时最多 5 次提交

---

## 📚 参考文档

- Resend 文档: https://resend.com/docs
- Nodemailer 文档: https://nodemailer.com
- SendGrid 文档: https://docs.sendgrid.com
- Gmail SMTP 设置: https://support.google.com/mail/answer/7126229

---

**推荐选择**: 新项目使用 **Resend**，配置最简单，功能强大。
