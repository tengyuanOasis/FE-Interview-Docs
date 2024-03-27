# 聊一聊Vite

- 理念：vite运行速度会比较快，把它理解成@vue/cli。
- 学习资源：vite中文网 https://cn.vitejs.dev/guide/

- 为什么需要vite?
  - webpack作用是把项目模块，打包一个bundle（多个chunk）兼容支持浏览。webpack启动项目时，无论什么模块都打包。webpack对大项目不友好，启动速度慢，热更新也慢。
  - vite的优势，在构建本地开发服务器时速度非常好，热更新也快。

- vite和webpack的简单对比
  - 在vite眼中，一种是依赖（第三方包），一种是源码（你的代码），依赖和源码是分开的。在webpack眼中，一切皆模块，无论是依赖还是源码，都需要使用babel-loader进行加载处理。
  - vite是基于“浏览器已经普遍支持了ES Module语法”这一特性，所以vite在构建本地服务时，不对各种模块进行打包；webpack完全没有考虑浏览器的新特性，只要是模块，都一律使用各种loader进行处理，比如把ES6语法编译成ES5。
  - vite在启动本地服务，它不考虑编译的问题，它只考虑模块之间的依赖关系；当在浏览器中访问指定的页面时，浏览器才开始按需加载当前页面所需要的各种依赖，并且还会借助于浏览器的缓存功能把对应的资源缓存起来。 webpack在运行本地服务时，要对所有依赖和源码都编译，无论当前页面中有没有用到它，所以webpack特点是“先编译再运行”，所以页面越多、运行速度就越慢。
  - vite默认支持TS，但vite对TS代码不做校验了，把类型校验这个事儿交给IDE编辑器插件来负责；vite只负责把TS模块编译成JavaScript模块。webpack默认不支持TS，我们构建webpack的TS项目时，要自己安装typescript运行时，这个tsc会对TS代码校验和编译，既然要校验，所以启动项目时，就会比较慢。（以后做vite/webpack项目，都建议使用vscoode能够友好地校验TS类型）。
  - vite在HMR热更新的时候，也不进行编译，更新速度也会更快。webpack在项目代码变动，会重新编译，更新会很慢，大项目的时候会“卡住”。
  - vite是基于插件的，如果你想实现一些架构有关的技术，去插件市场寻找合适的插件。webpack是基于loader和plugin的。
  - vite虽然启动本地服务时无须打包，但正式发布时还是需要打包的，背后打包工具使用的是rollup；vite在发布项目也要打包，所以打包的速度和性能也是挺慢的。webpack无论是本地服务、还是打包上线，都需要对模块进行编译，所以两个环境都很慢。

- vite的一些若干细节
  - vite不执行TS类型检测，但会把.ts代码编译成javascript，背后使用的esbuild(不是tsc)这个构造工具来完成TS的转译，所以转译速度提升了20~30倍。
  - 为什么打包项目时用的是rollup，而不是esbuild呢？原因是，esbuild这个构建工具还处在开发中，对代码分割、TreeShaking还不够完善。
  - rollup -> 把JS代码，编译成各种不同模块化语法的包，比如AMD、CMD、UMD...
  - rollup和webpack一样，是一个比较成熟的构建工具。未来vite背后很有可能不再使用rollup了，完全使用esbuild来代替。
  - vite社区中有很多的插件，开箱即用。这些插件都需要在vite.config.js中进行配置，配置时还可以指定插件的运行顺序(enfore)、指定插件在哪个环境下起作用(apply)。
  - vite构建项目，默认使用项目根目录中的index.html作为单页面，在这个index.html中用script标签指定程序的入口文件。

  - 有兴趣的同学：rollup、esbuild、webpack、gulp


# 使用vite搭建前端工程化项目

- 注意：vite目前版本是v2，还处在发展阶段。
- 使用vite构建vue2、vue3、react项目（参考文档）

# vue3/vite技术栈总结

- vue3架构，比vue2，到底好在哪里？（解决了数据和逻辑不分离的问题）
- setup组合api，大约30+个，都要会用：ref、toRefs、reactive、computed、watch....
- 在vue3中，自定义Hooks解决“数据和逻辑不分离”
- 结合vue3文档中“vue2迁移”，学会查询，把vue3中若干变化的细节。
- vue3和vue2在响应式原理层面的变化，大家如果有兴趣，进一步深入研究，你可以看vue3源码。
- vue3在虚拟DOM和diff运算方面的优化，大家可以进一步搜索vue3文献资料研究。
- vite（rollup、esbuild）基本使用、系列特色功能、开发范式、社区插件。如果需要的话，你可以大胆地把vite放在工作进行实践。
- 议题1：因为vue3项目中语法极为灵活？你可以根据自己的理解，vue3最佳实践到底会走向何方？
- 议题2：vite的react领域，未来有没有前途？你也可以大胆去想象。