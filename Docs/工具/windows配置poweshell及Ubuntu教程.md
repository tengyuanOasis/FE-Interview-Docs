# **windows配置poweshell及Ubuntu教程**

1. 软件安装

**- windows商店搜索`windows powershell`,先安装windows terminal ， 再安装Ubuntu**

​                 ![img](https://docimg5.docs.qq.com/image/FcPfk2cEuSO9HV8DsItyiA?w=1436&h=683)        

**- windows terminal安装完成如下**

​                 ![img](https://docimg2.docs.qq.com/image/EPeoDaCvdz0BJwnswOKB-g?w=1202&h=776)        

**- ununtu下载完成点击启动，它会自己下载一些依赖，不用任何操作等他下载完成**                 ![img](https://docimg3.docs.qq.com/image/HwSGYLBx_ZJuieQWwJgC7A?w=1450&h=767)        

**- 下载完成之后创建用户和密码，这里自己随便起，最好是英文名**

​                 ![img](https://docimg5.docs.qq.com/image/uLvYQoUHuS64E9yoyB6jEA?w=1446&h=724)        

**- 创建完用户之后，重启window powershell，即可看到ubuntu**

​                 ![img](https://raw.githubusercontent.com/JuntengMa/image/master/Im9CeCOivMkBIr72cRz-yA)        

**- 设置启动项，改完记得保存**                 ![img](https://raw.githubusercontent.com/JuntengMa/image/master/Wh-DT1Xi5IBBlr09J1cEDQ)        

**- 设置默认启动目录（按需配置，也可以先不配，有需要再改），改完记得保存**

​                 ![img](https://docimg8.docs.qq.com/image/YO70PFsYyW-YYzMU9EJuWg?w=1694&h=927)        



1. **ununtu安装nvm（node版本切换工具）**

2. 1. **安装（按照教程安装即可）：** https://www.jianshu.com/p/8c3e782c7be1
   2. **安装完成之后，进入到nvm目录下，设置一些全局索引**

1. cd /home/user(自己的用户名)
2. ll
3.  source ~/.nvm/nvm.sh  (这个命令的作用就是全局引用，任何地方都能使用nvm脚本

​        **c) nvm安装完成之后按需下载node版本**

​        **d) node安装完成，安装nrm  npm i -g nrm**

1. **ununtu安装配置git**

2. 1. **安装,基础配置** https://blog.csdn.net/qq_34160841/article/details/104838269
   2. **显示git分支：**https://zhuanlan.zhihu.com/p/133291342

**- 修改bashrc文件（ ）**                  ![img](https://raw.githubusercontent.com/JuntengMa/image/master/pLuScGYX10Za2kKyP3Lm4w)        

**-** 直接拖到文件最后，把下面代码贴进去保存并重启（如果没有显示项目git分支，找一下这个文件里面有没有跟下面差不多的代码，删掉即可）

```shell
# 显示git分支

git_branch()
{
   branch=`git rev-parse --abbrev-ref HEAD 2>/dev/null`
   if [ "${branch}" != "" ]
   then
       if [ "${branch}" = "(no branch)" ]
       then
           branch="(`git rev-parse --short HEAD`...)"
       fi
       echo "($branch)"
   fi
}

PS1='${debian_chroot:+($debian_chroot)}\u@\h:\W$(git_branch)\$ '
PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\W$(git_branch)\[\033[00m\]\$ '
```

**踩坑日记**

```
Cloning into 'alessandrococco.gitlab.io'
error: chmod on /mnt/c/Users/alessandro/Projects/alessandrococco.gitlab.io/.git/config.lock failed: Operation not permitted
fatal: could not set 'core.filemode' to 'false'
```

我刚刚在我刚格式化的笔记本电脑上重新安装了Ubuntu WSL。一切似乎都正常工作，但我在克隆我的 git 存储库之一时遇到了一个烦人的问题：

这里的问题是 的内容

```
/mnt/c
```

位于 NTFS 分区上，因此

```
chmod
```

不起作用。

在对Microsoft 文档进行了一些挖掘之后，我找到了一个简单的解决方案：

启动 Ubuntu WSL

```
/etc/wsl.conf
```

如果文件不存在则创建

打开文件（例如：）

```
nano /etc/wsl.conf
```

并添加以下行：

```
[automount]
options = "metadata"
```

保存文件并关闭

```
wsl --shutdown
```

从PowerShell启动的 WSL，重新启动 Ubuntu WSL

```
metadata
```

选项允许 Windows 支持Linux 系统权限：现在所有chmod、chown相关的东西都可以正常工作！