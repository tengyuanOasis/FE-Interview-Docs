- TerserPlugin

  > `TerserPlugin` 用于对 JavaScript 代码进行压缩和混淆。它基于 Terser 实现，Terser 是一个 JavaScript 压缩工具，它能够通过删除不必要的代码、变量重命名、函数内联等技术，将 JavaScript 代码的体积减小，从而提高页面加载速度，减少网络传输时间。
  >
  > TerserPlugin 的工作原理是基于 AST（抽象语法树）的静态分析。它首先会将 JavaScript 代码解析成 AST，然后通过遍历 AST 树来进行代码优化、混淆和压缩。在遍历过程中，TerserPlugin 会根据配置选项进行相应的处理，例如删除无用代码、重命名变量、压缩代码等。最后，将处理后的 AST 再转换回 JavaScript 代码，并输出到最终的构建文件中。
- FileManagerPlugin
- WebpackBar
- BundleAnalyzerPlugin
- SpeedMeasurePlugin
- friendlyErrorsWebpackPlugin
- HardSourceWebpackPlugin

  > `HardSourceWebpackPlugin` 是一个 Webpack 插件，用于提高构建速度和缓存构建结果。它通过将模块编译后的中间结果缓存到磁盘上，以便在后续的构建中重复使用，从而避免了重复的模块编译和文件读取，提高了构建速度。
  >
  > **原理：**
  >
  > `HardSourceWebpackPlugin` 的原理是将编译后的模块中间结果保存到磁盘上的缓存文件中。在每次构建过程中，它会检查缓存文件是否存在，并与当前模块的源文件进行比较，以确定是否需要重新编译。如果缓存文件存在且未过期，则直接使用缓存文件中的中间结果，而不进行模块编译和文件读取；如果缓存文件不存在或者已过期，则重新编译模块，并更新缓存文件。
  >
  > **作用：**
  >
  > `HardSourceWebpackPlugin` 的作用主要包括以下几个方面：
  >
  > 1. **加速构建速度：** 通过缓存模块编译后的中间结果，避免了重复的模块编译和文件读取，从而显著提高了构建速度，特别是在大型项目中可以获得更明显的效果。
  > 2. **减少 IO 操作：** 缓存中间结果可以减少文件的读取和写入操作，降低了 IO 操作的开销，从而进一步提高了构建速度。
  > 3. **持久化缓存：** 缓存文件可以持久化保存在磁盘上，可以在不同的构建之间共享缓存结果，从而避免了重复的构建过程，提高了整体的开发效率。
  > 4. **灵活配置：** `HardSourceWebpackPlugin` 支持丰富的配置选项，可以根据项目的实际需求来定制缓存的策略和行为，以达到最佳的优化效果。
  >
  > 总的来说，`HardSourceWebpackPlugin` 是一个用于提高 Webpack 构建速度和缓存构建结果的插件，通过缓存模块编译后的中间结果，避免了重复的模块编译和文件读取，从而显著提高了构建速度，提高开发效率。



#### 摇树优化

> Tree shaking（摇树优化）是一种用于消除 JavaScript 中未使用代码（dead code）的优化技术。它通过静态分析的方式，找出代码中没有被引用到的部分，然后将其从最终的构建结果中删除，从而减少文件大小，提高应用程序的性能。
>
> ### 何时会生效：
>
> 1. **ES6 模块（ES Modules）：** Tree shaking 主要针对 ES6 模块的静态分析。只有当代码采用 ES6 模块化语法并且模块之间的依赖关系是静态的（即在编译时可以确定），Tree shaking 才能生效。
> 2. **未被引用的代码：** Tree shaking 会识别出未被引用到的代码，并将其删除。因此，只有被引用到的代码才会被保留下来。
> 3. **Webpack、Rollup 等构建工具支持：** 使用支持 Tree shaking 的构建工具（如 Webpack、Rollup 等）并配置正确的模块化方式（例如，在 Webpack 中使用 `mode` 为 `'production'` 时会启用 Tree shaking），才能使 Tree shaking 生效。
>
> ### 何时会失效：
>
> 1. **动态导入（Dynamic Imports）：** 如果代码中使用了动态导入（例如 `import()` 函数），模块之间的依赖关系将变得动态，这样 Tree shaking 就无法准确地确定哪些代码是被使用的，因此可能导致 Tree shaking 失效。
> 2. **CommonJS 模块（require / module.exports）：** CommonJS 模块的导入和导出是动态的，不适合 Tree shaking。如果使用了 CommonJS 模块化方式，Tree shaking 也会失效。
> 3. **副作用（Side Effects）：** 如果代码中包含副作用（例如在导入时执行一些特定的操作，而不仅仅是导入模块），Tree shaking 也可能失效，因为这些副作用可能会影响代码的执行逻辑。
