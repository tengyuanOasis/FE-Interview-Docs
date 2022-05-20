# <center>WebAssembly学习笔记</center>
#### Mac下安装
1、cmake安装
* [下载地址](https://cmake.org/download/)
* 打开Tools >> Tools–>How to install Fow Command Line Use,按照提示添加环境变量
* cmake --version 确认安装成功

2、emsdk安装 
```
$ git clone https://raw.githubusercontent.com/juj/emsdk.git
$ cd emsdk
$ ./emsdk install latest
$ ./emsdk activate latest
```
#### Hello Word
````
mkdir hello
cd hello
touch hello.c
emrun --no_browser --port 8080 .
````
#### 特点
1. 不能操作Dom，只能进行计算
2. 比较适合于大计算量，并且要求性能比较高的应用，对于普通网站基本适用不到。
3. 目前多应用于游戏行业

#### 其他疑惑
webassembly可以在Node中适用，因此对于 webassembly和node C++插件的区别比较有疑惑。
* 插件: 用C++来写插件，也是能做一些高性能的东西，但是编写比较复杂，使用起来比较简单
* webassembly: 可多种语言编写，编写简单，但是使用比较麻烦

#### 相关资料
[WebAssembly官网](http://webassembly.org.cn/)
[WebAssembly完全入门：了解wasm的前世今身](https://www.infoq.cn/article/lwlcldGJyC7lye95EWl8)
[WebAssembly安装环境配置](https://blog.csdn.net/wngzhem/article/details/103683371)
