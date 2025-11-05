# 免费/低成本部署方案

## ✅ 当前方案：Hugging Face Inference API（推荐）

### 优势
- ✅ **完全免费**：每月有充足的免费额度
- ✅ **无需信用卡**：注册即可使用
- ✅ **高质量模型**：使用相同的 LaMa 模型
- ✅ **快速响应**：专为 AI 推理优化

### 设置步骤

#### 1. 获取 Hugging Face API Token
1. 访问 https://huggingface.co/join 注册账号（免费）
2. 登录后访问 https://huggingface.co/settings/tokens
3. 点击 "New token" 创建新令牌
4. 选择 "Read" 权限即可
5. 复制生成的 token

#### 2. 配置环境变量
在 `.env.local` 文件中添加：
```bash
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

在部署平台（Vercel/Netlify）的环境变量中也添加这个 token。

#### 3. 部署到 Vercel（推荐）
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
cd frontend-next
vercel

# 生产部署
vercel --prod
```

在 Vercel Dashboard 中设置环境变量：
- `HUGGINGFACE_API_TOKEN` = 你的 token

#### 4. 或部署到 Netlify
```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
cd frontend-next
netlify deploy

# 生产部署
netlify deploy --prod
```

在 Netlify Dashboard 中设置环境变量：
- `HUGGINGFACE_API_TOKEN` = 你的 token

---

## 📊 方案对比

| 方案 | 成本 | 设置难度 | 质量 | 推荐度 |
|------|------|---------|------|--------|
| **Hugging Face** | 免费 | ⭐ 简单 | ⭐⭐⭐⭐ 高 | ⭐⭐⭐⭐⭐ |
| Replicate | $0.0013/次 | ⭐ 简单 | ⭐⭐⭐⭐⭐ 极高 | ⭐⭐⭐ |
| 本地部署 | 服务器费用 | ⭐⭐⭐ 复杂 | ⭐⭐⭐⭐⭐ 极高 | ⭐⭐ |

---

## 🎯 其他免费方案

### 方案 2：Together AI（备选）
- 免费额度：$25
- API: https://api.together.xyz
- 需要注册并获取 API key

### 方案 3：自建后端 + Railway/Render
**Railway 免费方案：**
- 每月 500 小时免费
- 512MB RAM
- 部署 Python 后端

**步骤：**
1. 注册 Railway.app
2. 连接 GitHub 仓库
3. 部署 `backend` 目录
4. 获取部署 URL
5. 在前端设置 `LOCAL_BACKEND_URL` 环境变量

---

## 🚀 推荐部署流程

### 生产环境配置

**前端部署：** Vercel/Netlify（免费）
**API服务：** Hugging Face（免费）

### 环境变量配置（生产）
```bash
# Vercel/Netlify 环境变量
HUGGINGFACE_API_TOKEN=hf_xxxxxxxxxxxxx
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

### 一键部署命令
```bash
cd frontend-next

# 构建测试
npm run build

# 部署到 Vercel
vercel --prod

# 或部署到 Netlify
netlify deploy --prod
```

---

## 💡 成本优化建议

1. **使用 Hugging Face 免费层**：适合中小流量（每月 < 10万次请求）
2. **添加请求限制**：防止滥用，节省配额
3. **图片压缩**：处理前压缩图片，减少计算成本
4. **缓存结果**：相同请求返回缓存结果

---

## 🔧 故障排查

### 如果 Hugging Face 返回 503 错误
模型可能正在冷启动，等待 20-30 秒后重试。

### 如果额度用完
切换到 Together AI 或部署本地后端。

### 性能优化
在 Hugging Face 中选择 "Accelerated Inference"（付费但便宜）。

---

## 📞 支持

- Hugging Face 文档：https://huggingface.co/docs/api-inference
- Vercel 文档：https://vercel.com/docs
- Netlify 文档：https://docs.netlify.com
