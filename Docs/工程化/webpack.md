---
title: webpack配置
coverWidth: 1200
coverHeight: 750
categories: tools
tags: Webpack
top:
cover: https://source.unsplash.com/random?count=14/1600x900
---
webpack基本配置
<!--more-->

### 1. 什么是 webpack
> webpack 是一个现代 javaScript 应用程序的静态模块打包器, 分析项目结构，处理模块化依赖，转换成为浏览器 可运行的代码。

### 2. webpack 用来做什么
> - 代码转换: TypeScript 编译成 JavaScript、SCSS,LESS 编译成 CSS。
> - 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片。
> - 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。
> - 模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件
> - 自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。

### 3.webpack安装
```shell
//全局安装webpack及webpack-cli模块
yarn global add webpack webpack--cli
//本地安装项目模块（一般本地安装，防止本地和全局版本不一致）
yarn add webpack webpack-cli -dev(-D)
//打包命令
npx webpack
```
### 4.webpack代码分割、动态引入原理

> 代码分割： 所有文件打包在一起文件过大，会影响性能，将代码按页面，按功能等分割一个个模块动态加载，按需引入有利于性能优化
>
> 动态引入： CommonJs 、AMD 、Es6 module等

#### 5. webpack loader 和 plugins区别 ， 谁先执行、谁后执行

> **loaders** ： ----> ==编译器==
>
> - 用于解析代码 ， 通过配置不同的loader对css、字体、图片等资源进行解析
>
> - Loader在module.rules中配置，也就是说作为模块的解析规则而存在
>
> - 执行顺序： 从右向左，从后向前 ，如解析 scss
>
>   ```js
>    rules: [
>         {
>           test: /\.s[ac]ss$/i,
>           use: [
>             // 将 JS 字符串生成为 style 节点
>             'style-loader',
>             // 将 CSS 转化成 CommonJS 模块
>             'css-loader',
>             // 将 Sass 编译成 CSS
>             'sass-loader',
>           ],
>         },
>    ]
>   ```
>
> plugins：-----> ==功能扩展器==
>
> - plugin可以扩展webpack的功能，让webpack具有更多的灵活性。
> - 在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。

### 5. Webpack打包原理

> 1. `初始化参数`。从配置文件和 `shell` 语句中合并的参数
> 2. `开始编译`。将上一步得到的参数初始化成 `complier对象`，加载所有的导入插件，执行对象的 run 方法开始执行编译；
> 3. `确定入口`。从配置的 `entry` 入口找出所有的入口文件
> 4. `编译模块`。根据入口文件的依赖，调用所有配置的`loader`进行转换。
> 5. `完成模块编译并输出`。根据入口文件之间的依赖关系，形成一个个代码块 `chunk`。
> 6. `输出完成`。将形成的代码块 `chunk` 输出到文件系统。

### 6.插件


#### 1. webpack-dev-server
```node
devServer: {//这里做开发服务器配置
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),//_dirname：表示在当前目录
    compress: true,//启动gzip压缩
}
```
#### 2.  HtmlWebpackPlugin

[原理](https://zhuanlan.zhihu.com/p/30669007)



```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  minify: {//用于对文件进行压缩
    removeAttributeQuotes: true,// 移除属性的引号
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  },
  hash: true
})
```
#### 3.  热更新
```
new webpack.HotModuleReplacementPlugin(),
```
#### 4. 打包分析插件
```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
//安装， 然后重启一下server， 然后就可以在http://127.0.0.1:8888/ 看到这个分析了。
```
#### 5.  开启进度条
```
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
new ProgressBarPlugin(),
```
#### 6. 打包时长测试
```
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
  plugins: [
    new MyPlugin(),
    new MyOtherPlugin()
  ]
});
```
