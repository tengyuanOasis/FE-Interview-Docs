---
title: '自己比较常用的一些git命令'
categories: tools
tags: Git
top: 88 #是否置顶
cover: https://drscdn.500px.org/photo/266684907/q%3D80_h%3D450/v2?sig=fddd93a565bfc0a0a823bc71cd0423438214b85fcf84920f0a505614f87b5e75
coverWidth: 1200
coverHeight: 750
height: 750
---

# GIT 常用命令

<!--more-->

## 01 - Git 全局设置

```
- git config --global user.name "xxx" 配置用户名

- git config --global user.email "xxx@xxx.com" 配置用户邮箱

```

## 02 - 创建新版本库

```
git clone git@github.com:userName/repositoriesName.git

cd test

touch README.md

git add README.md

git commit -m "add README"

git push -u origin master
```

## 02 - 链接远程仓库(已存在的文件夹)

```
cd existing_folder

git init

git remote add origin git@github.com:userName/repositoriesName.git

git add .

git commit -m "Initial commit"

git push -u origin master

```

## 03 - 已存在的 Git 版本库

```
cd existing_repo

git remote rename origin old-origin

git remote add origin git@github.com:userName/repositoriesName.gi

git push -u origin --all

git push -u origin --tags

```

## 04 - 开发完毕将要上传代码仓库

```
git add .  增加当前子目录下所有更改过的文件至index

git commit -m "xxx" 提交

git push 推送改动到远端

git tag -a v0.0.1 -m "这是一个tag备注信息"  //新建tag及备注

git push --tag //将tag推送到远程仓库

git tag -ln //查看tag及其备注信息
```

## 05 - 新建分支

```
git branch <分支名> 创建新分支

git checkout <分支名> 切换到该分支

git push 如果是新建分支，push的时候需要跟远端仓库关联，一般会提示 git push --set-upstream 你的分支名 ， 复制提示信息并执行
```

## 05 - 合并分支

```
git pull origin master 多人协作，以防master已更新，本地代码版本没有更新，先同步一下master代码，以防产生合并冲突

git checkout master 先切换到主分支再合并

git merge <需要合并到master上的分支名> 合并某一个分支到该分支

```

## 06 - 删除本地，远程分支

```
- git branch -d <分支名> 删除本地某一分支

- git push origin --delete <分支名> 删除远端分支
```

## 07 - 版本回退

```
- git log 查看提交历史和commit 标记

- git reset --hard <commit 后面的字符串> 将代码回退到某一版本

- git push -f 远端仓库版本高于本地版本，需要强制推送上去
```

## 08 - 取消所有本地修改

```
git checkout .
```

## 09 - 查看修改

```
git show <commit日志>  显示详细更改
```

## 10 - 查看某一文件所有修改历史

```
 git log --pretty=on 相对路径/绝对路径

 git show <commit日志>
```

## 11 - 生成 ssh key

```
ssh-keygen -t rsa -C 'yourEmail@xxx.com'

```

## 12 - 其他命令

```
git tag  查看tag

git tag -v 0.0.1 -m "测试tag"

git push --tag  (git push 不会将tag推送到远程，需要用到该命令)

git pull 从当前分支远端拉取代码

git pull origin <分支名> 拉取某一分支的代码并合并到当前分支

git branch 显示远程仓库分支

git branch -a 显示所有分支

git branch -v 查看分支及其最新一次提交记录

git branch --merged 显示所有已合并到当前分支的分支

git branch --no-merged 显示所有未合并到当前分支的分支

git push origin master 推送到主分支

git pull origin <分支名> 拉取远程分支合并到当前分支

git log 显示提交日志

git diff 显示所有变更

git diff HEAD^ 显示与上个版本的差异

git rm xxx 除某文件
```
