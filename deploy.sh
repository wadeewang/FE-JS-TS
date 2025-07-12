#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 安装根目录依赖
yarn

# 进入vuepress目录
cd vuepress

# 安装vuepress目录的依赖
yarn

# 构建项目
yarn build

# 检查构建结果
echo "Build completed. Checking dist directory:"
ls -la .vuepress/dist/

# 返回根目录
cd ..

