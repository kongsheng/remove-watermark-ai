# 📧 联系表单邮件发送功能

## ✅ 已完成的工作

### 1. API 路由
- ✅ 创建 `/api/contact` 端点
- ✅ 支持 3 种邮件服务: Resend, Nodemailer (Gmail/SMTP), SendGrid
- ✅ 添加速率限制 (每小时5次/IP)
- ✅ 输入验证和 XSS 防护
- ✅ 美化的 HTML 邮件模板

### 2. 前端组件
- ✅ 更新联系页面调用真实 API
- ✅ 添加成功/失败提示
- ✅ 多语言支持 (中文/英文)

### 3. 配置文件
- ✅ `.env.local.example` - 环境变量示例
- ✅ `EMAIL_SETUP.md` - 详细配置指南
- ✅ `EMAIL_QUICKSTART.md` - 快速开始指南
- ✅ `test-email.js` - 邮件配置测试脚本

---

## 🚀 快速开始 (5分钟)

### 选择方案 1: Resend (推荐)

```bash
# 1. 安装依赖
npm install resend

# 2. 配置环境变量 (创建 .env.local)
RESEND_API_KEY=re_你的密钥

# 3. 修改接收邮箱
# 编辑 src/app/api/contact/route.js 第 93 行
to: 'your-email@example.com',

# 4. 测试
npm run test:email

# 5. 启动开发服务器
npm run dev
```

### 选择方案 2: Gmail

```bash
# 1. 安装依赖
npm install nodemailer

# 2. 配置环境变量
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
EMAIL_TO=support@example.com

# 3. 测试
npm run test:email

# 4. 启动
npm run dev
```

---

## 📁 相关文件

```
frontend-next/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js          # ⭐ API 路由
│   │   └── [locale]/
│   │       └── contact/
│   │           ├── page.js
│   │           └── page-client.js    # ⭐ 联系表单组件
├── public/
│   └── locales/
│       ├── en/
│       │   └── contact.json         # 英文翻译
│       └── zh/
│           └── contact.json         # 中文翻译
├── .env.local.example              # 环境变量示例
├── test-email.js                   # ⭐ 测试脚本
├── EMAIL_SETUP.md                  # 详细配置指南
└── EMAIL_QUICKSTART.md             # 快速开始
```

---

## 🔧 功能特性

### 安全性
- ✅ 速率限制 (每小时5次/IP)
- ✅ 邮箱格式验证
- ✅ 输入长度限制
- ✅ XSS 防护

### 用户体验
- ✅ 加载状态提示
- ✅ 成功/失败反馈
- ✅ 表单自动清空
- ✅ 多语言支持

### 邮件模板
- ✅ 美化的 HTML 样式
- ✅ 包含所有表单数据
- ✅ 时间戳
- ✅ 支持回复 (Reply-To)

---

## 🧪 测试

### 1. 测试邮件配置
```bash
npm run test:email
```

### 2. 测试完整流程
1. 启动开发服务器: `npm run dev`
2. 访问: http://localhost:3009/contact
3. 填写表单并提交
4. 检查接收邮箱

---

## 📊 邮件服务对比

| 服务 | 免费额度 | 配置难度 | 推荐指数 |
|------|---------|---------|---------|
| **Resend** | 100封/天, 3000封/月 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Gmail** | 无限制 | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **SendGrid** | 100封/天 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## ❓ 常见问题

### 1. 收不到邮件?
- 检查垃圾邮件箱
- 运行 `npm run test:email` 测试配置
- 查看终端控制台错误信息

### 2. "Too many requests" 错误?
- 速率限制生效，等待1小时后重试
- 或修改 `route.js` 中的限制参数

### 3. Gmail "Less secure app" 错误?
- 必须使用应用专用密码，不能用账号密码
- 确保已启用两步验证

### 4. Resend 发送失败?
- 开发环境使用 `onboarding@resend.dev`
- 生产环境必须验证自己的域名

---

## 🔐 安全提醒

⚠️ **永远不要提交 .env.local 到 Git!**

确保 `.gitignore` 包含:
```
.env.local
.env*.local
```

---

## 📞 支持

如有问题，请查看:
- `EMAIL_SETUP.md` - 详细配置指南
- `EMAIL_QUICKSTART.md` - 快速开始
- 或提交 Issue

---

## 📝 待办事项 (可选优化)

- [ ] 添加 CAPTCHA 防止滥用
- [ ] 集成数据库保存消息记录
- [ ] 添加邮件模板系统
- [ ] 发送确认邮件给用户
- [ ] 添加文件附件支持
- [ ] 集成客服系统 (如 Intercom)

---

**推荐**: 新项目使用 Resend，配置最简单，功能强大！
