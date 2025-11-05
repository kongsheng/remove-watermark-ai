# Replicate API 版本说明

## 422 错误解决方案

如果遇到 `422 - Invalid version or not permitted` 错误，请尝试以下步骤：

### 1. 检查 API Token
访问 https://replicate.com/account/api-tokens 确保：
- Token 有效且未过期
- Token 已正确添加到 `.env.local` 文件中

### 2. 查找最新的 LaMa 模型版本

访问 Replicate 的 LaMa 模型页面：
- https://replicate.com/lucataco/lama

点击右侧的 "API" 标签，查看最新的版本 ID。

### 3. 更新版本 ID

在 `src/lib/replicate.js` 文件中更新 `LAMA_VERSIONS` 数组：

```javascript
const LAMA_VERSIONS = [
  "你的最新版本ID", // 从 Replicate 网站复制
  "652124c71895e8a264a0c7ec5c4454a3c43af0e7c95bb48af7e44c5a734d8a94",
]
```

### 4. 或者使用模型名称方式

如果版本 ID 方式不work，可以使用模型名称：

```javascript
// 在 replicate.js 中
const requestBody = {
  model: "lucataco/lama",
  input: {
    image: imageBase64,
    mask: maskBase64,
  },
}
```

### 5. 检查权限

某些模型可能需要特定权限，确保：
- 你的账号可以访问该模型
- 模型是公开的或你有权限使用

### 6. 备用模型

如果 LaMa 模型不可用，可以尝试其他图像修复模型：
- https://replicate.com/pollinations/modnet
- https://replicate.com/sczhou/codeformer
- https://replicate.com/tencentarc/gfpgan

## 当前配置的版本

目前使用的版本 ID：
- 主版本：`652124c71895e8a264a0c7ec5c4454a3c43af0e7c95bb48af7e44c5a734d8a94`
- 备用版本：`0e3a841c5bba0528c8fe43c87ebb0b7533276ec152c9034ea7014bb20ec95c0d`
