---
title: ssh配置
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2021-03-12 09:51:54
categories: Git
tags: Git
top: 86 #是否置顶
permalink:
---

### Git 配置多个 SSH-Key 方法

<!--more-->

一般情况下，当有一台电脑需要多个 git 账号，提交人就会有问题，例如：

- github 账号
- gitlab 账号

**解决方案**

解决办法很简单，新建一个 config 文件就可以了。

#### 1、本地生成 SSH-Key

生成一个 gitee 用的 SSH-Key

```
$ ssh-keygen -t rsa -C 'xxxxx@163.com' -f ~/.ssh/gitee_id_rsa
```

生成一个 github 用的 SSH-Key

```
$ ssh-keygen -t rsa -C 'xxxxx@163.com' -f ~/.ssh/github_id_rsa
```

生成一个公司用 gitlab 的 SSH-Key

```
$ ssh-keygen -t rsa -C 'xxxxx@company.com' -f ~/.ssh/gitlab_id_rsa
```

在默认以下地址会生成ssh文件

```shell
~/.ssh
```

若报以下错误，用gitbash重新输入上面的命令即可：

```
Saving key “~/.ssh/gitee_id” failed: No such file or directory 
```

#### 2、git 平台设置中

将 .pub 文件中内容复制到相应的平台 SSH 设置中，例如：

gitee_id_rsa.pub 中的文件内容复制到码云的 SSH 公钥中。

#### 3、新建 config 文件

在 ~/.ssh 目录下新建一个 config 文件，添加如下内容：

```
# gitee
Host gitee.com
   HostName gitee.com
   User git
   IdentityFile ~/.ssh/gitee_id_rsa

# github
Host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/github_id_rsa

# gitlab
Host xxxx.com #公司gitlab地址
HostName xxxx.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/xxxx_id_rsa

```

其中 Host 和 HostName 填写 git 服务器的域名，IdentityFile 指定私钥的路径。
实在不晓得 Host 和 HostName 怎么填的呢，譬如不知道公司内部的服务器域名，可以在 known_hosts 文件中查看。

#### 4、测试是否连通

用 ssh 命令分别测试，@后面跟着的是域名

```
$ ssh -T git@github.com
$ ssh -T git@gitee.com
$ ssh -T git@公司私有域名或IP地址
```

You've successfully authenticated, but GitHub does not provide shell access.

当出现这句话的时候说明你已经配置完成啦，然后就可以快乐coding喽~

