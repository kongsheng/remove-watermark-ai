# 🚀 部署到Netlify（Vercel替代方案）

## 为什么选择Netlify？

- ✅ 注册简单（邮箱即可，不需要复杂验证）
- ✅ 完全免费
- ✅ 支持Next.js
- ✅ 全球CDN
- ✅ 自动HTTPS
- ✅ 100GB带宽/月

---

## 方法1：通过GitHub自动部署（推荐）

### 步骤1：推送代码到GitHub

```powershell
cd I:\shopProject\comyui\remove-watermark-ai\frontend-next

# 初始化git
git init
git add .
git commit -m "Initial commit"
git branch -M main

# 添加远程仓库（先在GitHub创建仓库）
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 步骤2：在Netlify导入

1. 访问 https://app.netlify.com/signup
2. 选择 **"Email"** 注册（或用GitHub）
3. 验证邮箱
4. 点击 **"Add new site"** → **"Import an existing project"**
5. 选择 **"Deploy with GitHub"**
6. 授权并选择你的仓库
7. 配置构建设置：
   ```
   Build command: npm run build
   Publish directory: .next
   ```
8. 添加环境变量：
   ```
   REPLICATE_API_TOKEN=your_replicate_token_here
   ```
9. 点击 **"Deploy site"**

---

## 方法2：使用Netlify CLI

```powershell
# 安装Netlify CLI
npm i -g netlify-cli

# 登录（会打开浏览器）
netlify login

# 部署
cd I:\shopProject\comyui\remove-watermark-ai\frontend-next
netlify deploy --prod
```

---

## 方法3：拖放部署（最简单）

1. 构建项目：
   ```powershell
   npm run build
   ```

2. 访问 https://app.netlify.com/drop

3. 将 `.next` 文件夹拖放到页面

4. 等待上传完成

5. 在设置中添加环境变量

---

## ✅ 配置环境变量

部署后：
1. 进入你的站点 Dashboard
2. **Site settings** → **Environment variables**
3. 添加：
   ```
   Key: REPLICATE_API_TOKEN
   Value: your_replicate_token_here
   ```
4. 保存并重新部署

---

## 🌐 获取你的URL

部署成功后，你会得到：
```
https://你的站点名.netlify.app
```

可以在设置中自定义子域名。

---

## 🎯 优势对比

| 功能 | Netlify | Vercel |
|------|---------|--------|
| 注册难度 | ⭐⭐⭐⭐⭐ 简单 | ⭐⭐⭐ 验证麻烦 |
| 免费额度 | 100GB/月 | 100GB/月 |
| Next.js支持 | ✅ 完美 | ✅ 完美 |
| 部署速度 | 快 | 快 |
| CDN | 全球 | 全球 |

---

## 💡 推荐

**先用Netlify！**
- 注册简单
- 功能一样强大
- 完全满足需求

如果以后Vercel账号验证通过了，再迁移也很容易。
