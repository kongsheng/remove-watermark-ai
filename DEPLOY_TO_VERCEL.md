# 🚀 快速部署到Vercel

## 方法1：通过GitHub自动部署（推荐）

### 步骤1：推送代码到GitHub

```bash
# 在frontend-next目录下
cd I:\shopProject\comyui\remove-watermark-ai\frontend-next

# 初始化git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Ready for deployment"

# 添加远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/你的用户名/watermark-remover.git

# 推送
git push -u origin main
```

### 步骤2：导入到Vercel

1. 访问 https://vercel.com/signup
2. 选择 "Continue with GitHub" 登录
3. 点击 "New Project"
4. 选择你的 GitHub 仓库
5. 配置项目：
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (默认)
   - **Build Command**: `npm run build` (默认)
   - **Output Directory**: `.next` (默认)

6. **添加环境变量**（重要！）：
   ```
   REPLICATE_API_TOKEN=your_replicate_token_here
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_BASE_URL=https://你的项目名.vercel.app
   ```

7. 点击 "Deploy"

### 步骤3：等待部署完成

- 部署时间：约2-3分钟
- 完成后会得到一个URL：`https://你的项目名.vercel.app`

---

## 方法2：使用Vercel CLI（快速）

### 步骤1：安装Vercel CLI

```powershell
npm i -g vercel
```

### 步骤2：登录

```powershell
vercel login
```

### 步骤3：部署

```powershell
cd I:\shopProject\comyui\remove-watermark-ai\frontend-next

# 首次部署
vercel

# 按提示操作：
# - Set up and deploy? Yes
# - Which scope? (选择你的账号)
# - Link to existing project? No
# - Project name? (输入项目名或直接回车)
# - Directory? ./ (直接回车)
# - Override settings? No (直接回车)

# 部署到生产环境
vercel --prod
```

### 步骤4：添加环境变量

```powershell
# 添加Replicate Token
vercel env add REPLICATE_API_TOKEN
# 粘贴: your_replicate_token_here

# 添加其他环境变量
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_BASE_URL

# 重新部署让环境变量生效
vercel --prod
```

---

## ✅ 部署成功检查

访问你的Vercel URL，测试以下功能：

1. ✅ 页面正常加载
2. ✅ 语言切换工作（中/英文）
3. ✅ 上传图片
4. ✅ 涂抹水印区域
5. ✅ 点击"开始处理"
6. ✅ 等待2-5秒
7. ✅ 看到处理后的图片
8. ✅ 可以下载图片

---

## 🔧 常见问题

### 1. 部署失败

检查：
- 是否在 `frontend-next` 目录下
- `package.json` 是否存在
- 依赖是否完整

### 2. API调用失败

检查：
- Vercel环境变量是否正确添加
- `REPLICATE_API_TOKEN` 是否正确
- 访问 Vercel Dashboard → Settings → Environment Variables

### 3. 图片处理超时

正常情况：
- 第一次处理：5-10秒（冷启动）
- 后续处理：2-5秒
- 如果>30秒超时，检查Replicate账号是否正常

---

## 🌐 自定义域名（可选）

### 在Vercel绑定域名：

1. 进入项目 Settings → Domains
2. 输入你的域名（如：watermark-remover.com）
3. 按提示配置DNS记录
4. 等待DNS生效（几分钟到几小时）

### 配置Cloudflare（加速）：

1. 在Cloudflare添加你的域名
2. 修改DNS记录指向Vercel
3. 开启CDN代理（橙色云朵）
4. 设置缓存规则

---

## 📊 监控和分析

### Vercel Analytics
- 访问量自动统计
- 查看：Dashboard → Analytics
- 免费版有基础数据

### Google Analytics
- 详细用户行为分析
- 需要在 `.env` 中配置 `NEXT_PUBLIC_GA_ID`

### Replicate Dashboard
- API使用量监控
- 费用统计
- 访问：https://replicate.com/account

---

## 🎯 部署后操作

1. ✅ 测试所有功能
2. ✅ 分享给朋友测试
3. ✅ 申请Google AdSense
4. ✅ 提交到Google Search Console
5. ✅ 在ProductHunt发布
6. ✅ 社交媒体推广

---

## 💡 提示

- ✅ 每次代码修改后，`git push` 会自动触发部署
- ✅ Vercel提供无限制的预览部署
- ✅ 可以回滚到任何历史版本
- ✅ 完全免费（Hobby计划）

---

**恭喜！你的网站即将上线！** 🎉
