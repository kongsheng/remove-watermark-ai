@echo off
echo ========================================
echo 部署到Vercel
echo ========================================
echo.

cd /d I:\shopProject\comyui\remove-watermark-ai\frontend-next

echo [1/5] 检查git状态...
git status

echo.
echo [2/5] 添加所有文件...
git add .

echo.
echo [3/5] 提交更改...
set /p commit_msg="请输入提交信息 (直接回车使用默认): "
if "%commit_msg%"=="" set commit_msg=Update for deployment
git commit -m "%commit_msg%"

echo.
echo [4/5] 推送到GitHub...
echo 如果是首次推送，请先设置远程仓库：
echo git remote add origin https://github.com/你的用户名/仓库名.git
echo.
pause
git push origin main

echo.
echo [5/5] 完成！
echo.
echo 现在访问 https://vercel.com 导入你的GitHub仓库
echo 或者运行: vercel --prod
echo.
pause
