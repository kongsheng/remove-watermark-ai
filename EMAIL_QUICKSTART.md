# 🚀 快速启用邮件功能

## 最简单的方式 - 使用 Resend (5分钟搞定)

### 步骤 1: 安装依赖
```bash
cd frontend-next
npm install resend
```

### 步骤 2: 获取 API Key
1. 访问 https://resend.com 注册（免费）
2. 登录后访问 https://resend.com/api-keys
3. 点击 "Create API Key"
4. 复制生成的 key (格式: `re_...`)

### 步骤 3: 配置环境变量
```bash
# 在 frontend-next 目录创建或编辑 .env.local
RESEND_API_KEY=re_你的API密钥
```

### 步骤 4: 修改接收邮箱
编辑 `src/app/api/contact/route.js` 第 39 行:
```javascript
to: 'your-email@example.com', // 改成你的邮箱
```

### 步骤 5: 测试
```bash
npm run dev
```
访问 http://localhost:3000/contact 测试发送邮件

---

## 使用 Gmail (如果不想用 Resend)

### 步骤 1: 安装依赖
```bash
cd frontend-next
npm install nodemailer
```

### 步骤 2: 获取 Gmail 应用密码
1. 访问 https://myaccount.google.com/security
2. 启用两步验证
3. 访问 https://myaccount.google.com/apppasswords
4. 生成应用密码（16位）

### 步骤 3: 配置环境变量
```bash
# .env.local
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=你的gmail@gmail.com
EMAIL_PASS=16位应用密码
EMAIL_TO=接收邮件的邮箱
```

### 步骤 4: 测试
```bash
npm run dev
```

---

## 📌 注意事项

1. **.env.local 不要提交到 Git**
2. **Resend 免费额度**: 100封/天, 3000封/月
3. **首次使用可能进垃圾箱**: 正常现象，标记为非垃圾邮件即可

---

详细配置文档: 查看 `EMAIL_SETUP.md`
