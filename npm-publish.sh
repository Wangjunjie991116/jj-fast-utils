#!/bin/bash

# 使用快捷发包命令, 需要提前赋予脚本文件执行权限, chmod +x npm-publish.sh
# pnpm publish major     # 发布 major 版本
# pnpm publish minor     # 发布 minor 版本
# pnpm publish patch     # 发布 patch 版本
# pnpm publish           # 默认 patch 版本
if [ -z "$1" ]; then
  npm version patch
elif [ "$1" == "major" ]; then
  npm version major
elif [ "$1" == "minor" ]; then
  npm version minor
elif [ "$1" == "patch" ]; then
  npm version patch
else
  echo "Invalid argument. Usage: publish.sh [major|minor|patch]"
  exit 1
fi
npm publish
echo "******************************** 牛啊小老弟儿, npm 包完成发版 ******************************** "

# 推送代码到 github
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE_BRANCH=$(git ls-remote --heads origin $BRANCH)
if [ -z "$REMOTE_BRANCH" ]; then
  echo "Remote branch $BRANCH does not exist. Creating new branch and pushing..."
  git push -u origin $BRANCH
else
  echo "Remote branch $BRANCH already exists. Pushing changes..."
  git push origin $BRANCH
fi

echo "******************************** 牛啊小老弟儿, github 完成推送 ******************************** "