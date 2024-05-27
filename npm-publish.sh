#!/bin/bash

## 发布 npm
# 使用快捷发包命令, 若出现权限问题, 执行 chmod +x npm-publish.sh 赋予脚本文件执行权限
# pnpm publish major     # 发布 major 版本
# pnpm publish minor     # 发布 minor 版本
# pnpm publish patch     # 发布 patch 版本
# pnpm publish           # 默认 patch 版本
if [ -z "$1" ]; then
  VERSION="patch"
elif [ "$1" == "major" ]; then
  VERSION="major"
elif [ "$1" == "minor" ]; then
  VERSION="minor"
elif [ "$1" == "patch" ]; then
  VERSION="patch"
else
  echo "Invalid argument. Usage: publish.sh [major|minor|patch]"
  exit 1
fi
# 获取包当前版本
CURRENT_VERSION=$(npm view <jj-fast-utils> version)
# 获取包当前版本
echo "Current version: $CURRENT_VERSION"
# 检查是否已经升级到目标版本
if [[ $CURRENT_VERSION == *"${VERSION}-"* ]]; then
  echo "Package is already at $VERSION version. Skipping version bump and publishing."
else
  # 执行版本升级
  npm version $VERSION
  # 发布包
  npm publish
  # 发布完成
  echo "******************************** 牛啊小老弟儿, npm 包完成发版 ******************************** "
fi

## 推送 github
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE_BRANCH=$(git ls-remote --heads origin $BRANCH)
# 检查 remote 是否有此分支
if [ -z "$REMOTE_BRANCH" ]; then
  echo "Remote branch $BRANCH does not exist. Creating new branch and pushing..."
  git push -u origin $BRANCH
else
  echo "Remote branch $BRANCH already exists. Pushing changes..."
  git push origin $BRANCH
fi
# 推送完成
echo "******************************** 牛啊小老弟儿, github 完成推送 ******************************** "
