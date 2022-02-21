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
```
//全局安装webpack及webpack-cli模块
yarn global add webpack webpack--cli
//本地安装项目模块（一般本地安装，防止本地和全局版本不一致）
yarn add webpack webpack-cli -dev(-D)
//打包命令
npx webpack
```
### 4.插件


#### 1. webpack-dev-server
```node
devServer: {//这里做开发服务器配置
    port: 3000,
    contentBase: path.join(__dirname, 'dist'),//_dirname：表示在当前目录
    compress: true,//启动gzip压缩
}
```
#### 2.  HtmlWebpackPlugin
```
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
