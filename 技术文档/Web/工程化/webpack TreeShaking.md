Tree shaking的本质是消除无用的JavaScript代码。
因为ES6模块的出现，ES6模块依赖关系是确定的，`和运行时的状态无关`，可以进行可靠的静态分析，
这就是Tree shaking的基础。
[TreeShaking 算法](https://webpack.docschina.org/guides/tree-shaking/)
[Webpack Tree shaking 深入探究](https://juejin.cn/post/6844903687412776974)