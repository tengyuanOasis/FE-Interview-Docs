# 百里挑 15 个 Git 技巧

![图片](https://mmbiz.qpic.cn/mmbiz_png/g6znRZCbCbr6p6u0ibPnjAEAQhAVaa5iaYa4AGBLr7oqTGjYwYXpeQQVx9VXFCKaPxfMgZmibjJiaspdVVKabP0lpw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

### Git 基础

**01 - Git 全局设置**



```
- git config --global user.name "xxx" 配置用户名

- git config --global user.email "xxx@xxx.com" 配置用户邮箱

```

**02 - 创建新版本库**

```
git clone git@raw.githubusercontent.com:userName/repositoriesName.git

cd test

touch README.md

git add README.md

git commit -m "add README"

git push -u origin master
```

**02 - 链接远程仓库(已存在的文件夹)**

```
cd existing_folder

git init

git remote add origin git@raw.githubusercontent.com:userName/repositoriesName.git

git add .

git commit -m "Initial commit"

git push -u origin master

```

**03 - 已存在的 Git 版本库**

```
cd existing_repo

git remote rename origin old-origin

git remote add origin git@raw.githubusercontent.com:userName/repositoriesName.gi

git push -u origin --all

git push -u origin --tags

```

**04 - 开发完毕将要上传代码仓库**

```
git add .  增加当前子目录下所有更改过的文件至index

git commit -m "xxx" 提交

git push 推送改动到远端

git tag -a v0.0.1 -m "这是一个tag备注信息"  //新建tag及备注

git push --tag //将tag推送到远程仓库

git tag -ln //查看tag及其备注信息
```

**05 - 新建分支**

```
git branch <分支名> 创建新分支

git checkout <分支名> 切换到该分支

git push 如果是新建分支，push的时候需要跟远端仓库关联，一般会提示 git push --set-upstream 你的分支名 ， 复制提示信息并执行
```

**05 - 合并分支**

```
git pull origin master 多人协作，以防master已更新，本地代码版本没有更新，先同步一下master代码，以防产生合并冲突

git checkout master 先切换到主分支再合并

git merge <需要合并到master上的分支名> 合并某一个分支到该分支

```

**06 - 删除本地，远程分支**

```
- git branch -d <分支名> 删除本地某一分支

- git push origin --delete <分支名> 删除远端分支
```

**07 - 版本回退**

```
- git log 查看提交历史和commit 标记

- git reset --hard <commit 后面的字符串> 将代码回退到某一版本

- git push -f 远端仓库版本高于本地版本，需要强制推送上去
```

**08 - 取消所有本地修改**

```
git checkout .
```

**09 - 查看修改**

```
git show <commit日志>  显示详细更改
```

**10 - 查看某一文件所有修改历史**

```
 git log --pretty=on 相对路径/绝对路径

 git show <commit日志>
```

**11 - 生成 ssh key**

```
ssh-keygen -t rsa -C 'yourEmail@xxx.com'

```

**12 - 其他命令**

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

### 技巧

**1、设置错误的远程库怎么办？**

```
$ git remote -v
$ git remote set-url origin {{url}}
```

**2、Github Fork 的项目如何更新源项目更新？**

```
$ git remote add upstream {{url}}
# 1
$ git fetch upstream
$ git merge upstream/master
# 或者 2
$ git pull upstream main
```

**3、提交信息写错了怎么办？**

```
$ git commit --amend --only
$ git commit --amend --only -m 'xxx'
```

**4、提交时用了错误的用户名或邮箱？（单次）**

```
$ git commit --amend --no-edit --author "yunqian <yunqian@alibaba-inc.com>"
```

或者

```
$ git config --global author.name yunqian
$ git config --global author.email yunqian@alibaba-inc.com
$ git commit --amend --reset-author --no-edit
```

**5、最后一次提交不想要了？**

如果已推送。

```
$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branch]
```

如果还没推送。

```
$ git reset --soft HEAD@{1}
```

**6、提交内容需要修改怎么办？比如提交了敏感信息。**

修改或删除，

```
# 编辑后 add
$ git add sensitive_file
# 或删除
$ git rm sensitive_file
# 或只从 git 里删，但保留在本地，记得在 .gitignore 里加上他
$ git rm --cached sensitive_file
```

然后，

```
$ git commit --amend --no-edit
$ git push --force-with-lease origin [branch]
```

**7、在上一次提交的基础上增加改动？**

```
$ git commit --amend
```

**8、放弃本地未提交的修改？**

```
# 删除所有 staged 改动
$ git reset --hard HEAD
# 删除所有未 staged 改动
$ git clean -fd
# 加 -x 参数可删除所有 ignored 的文件
$ git clean -fdx
```

**9、不小心删除了分支怎么办？**

```
# 找到被删 branch 的 hash 值
$ git reflog
$ git checkout -b xxx
$ git reset --hard {{hash}}
```

**10、删除分支？**

```
# 删除远程分支
$ git push origin --delete foo
# 删除本地分支
$ git branch -d foo
# 删除没有被合并的分支要用 -D
$ git branch -D foo
# 批量删除分支
$ git branch | grep 'fix/' | xargs git branch -d
```

**11、在错误的分支上做了修改但未提交？**

```
$ git stash
$ git checkout correct_branch
$ git stash pop
```

**12、在错误的分支上做了修改同时已提交？（比如错误地提交到了主干）**

```
# 新建分支
$ git branch xxx
# 删除 master 分支的最后一次 commit
$ git reset HEAD~ --hard
# 删除的 commit 会切换到 xxx 分支上
$ git checkout xxx
```

**13、如何撤销一个之前的提交？**

```
# 找到要撤销的 commit hash
$ git log 或 git reflog
# 回滚
$ git revert {{hash}}
```

**14、如何撤销某一个文件的修改**

checkout 才是撤销文件的最佳选择？

```
# 找到要文件修改的前一个 commit hash
$ git log 或 git reflog
# 回滚文件
$ git checkout {{hash}} path/to/file
```

**15、git 被我搞乱了，想要重新来过？**

你可以这样，

```
$ cd ..
$ rm -rf fucking-repo-dir
$ git clone https://github.com/fucking-repo-dir.git
$ cd fucking-repo-dir
```

也可以这样，

```
$ git fetch origin
$ git checkout master
$ git reset --hard origin/master
$ git clean -d --force
```

