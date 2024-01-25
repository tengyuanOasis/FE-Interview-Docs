import{_ as s,r as l,o as i,c as t,a as p,b as e,d as r,f as c,e as n}from"./app-iph3vjA0.js";const o={},d=e("p",null,"webpack基本配置",-1),u=n(`<h3 id="_1-什么是-webpack" tabindex="-1"><a class="header-anchor" href="#_1-什么是-webpack" aria-hidden="true">#</a> 1. 什么是 webpack</h3><blockquote><p>webpack 是一个现代 javaScript 应用程序的静态模块打包器, 分析项目结构，处理模块化依赖，转换成为浏览器 可运行的代码。</p></blockquote><h3 id="_2-webpack-用来做什么" tabindex="-1"><a class="header-anchor" href="#_2-webpack-用来做什么" aria-hidden="true">#</a> 2. webpack 用来做什么</h3><blockquote><ul><li>代码转换: TypeScript 编译成 JavaScript、SCSS,LESS 编译成 CSS。</li><li>文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片。</li><li>代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载。</li><li>模块合并：在采用模块化的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件</li><li>自动刷新：监听本地源代码的变化，自动重新构建、刷新浏览器。</li></ul></blockquote><h3 id="_3-webpack安装" tabindex="-1"><a class="header-anchor" href="#_3-webpack安装" aria-hidden="true">#</a> 3.webpack安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//全局安装webpack及webpack-cli模块
<span class="token function">yarn</span> global <span class="token function">add</span> webpack webpack--cli
//本地安装项目模块（一般本地安装，防止本地和全局版本不一致）
<span class="token function">yarn</span> <span class="token function">add</span> webpack webpack-cli -dev<span class="token punctuation">(</span>-D<span class="token punctuation">)</span>
//打包命令
npx webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-webpack代码分割、动态引入原理" tabindex="-1"><a class="header-anchor" href="#_4-webpack代码分割、动态引入原理" aria-hidden="true">#</a> 4.webpack代码分割、动态引入原理</h3><blockquote><p>代码分割： 所有文件打包在一起文件过大，会影响性能，将代码按页面，按功能等分割一个个模块动态加载，按需引入有利于性能优化</p><p>动态引入： CommonJs 、AMD 、Es6 module等</p></blockquote><h4 id="_5-webpack-loader-和-plugins区别-谁先执行、谁后执行" tabindex="-1"><a class="header-anchor" href="#_5-webpack-loader-和-plugins区别-谁先执行、谁后执行" aria-hidden="true">#</a> 5. webpack loader 和 plugins区别 ， 谁先执行、谁后执行</h4><blockquote><p><strong>loaders</strong> ： ----&gt; ==编译器==</p><ul><li><p>用于解析代码 ， 通过配置不同的loader对css、字体、图片等资源进行解析</p></li><li><p>Loader在module.rules中配置，也就是说作为模块的解析规则而存在</p></li><li><p>执行顺序： 从右向左，从后向前 ，如解析 scss</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 将 JS 字符串生成为 style 节点</span>
          <span class="token string">&#39;style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 将 CSS 转化成 CommonJS 模块</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// 将 Sass 编译成 CSS</span>
          <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>plugins：-----&gt; ==功能扩展器==</p><ul><li>plugin可以扩展webpack的功能，让webpack具有更多的灵活性。</li><li>在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。</li></ul></blockquote><h3 id="_5-webpack打包原理" tabindex="-1"><a class="header-anchor" href="#_5-webpack打包原理" aria-hidden="true">#</a> 5. Webpack打包原理</h3><blockquote><ol><li><code>初始化参数</code>。从配置文件和 <code>shell</code> 语句中合并的参数</li><li><code>开始编译</code>。将上一步得到的参数初始化成 <code>complier对象</code>，加载所有的导入插件，执行对象的 run 方法开始执行编译；</li><li><code>确定入口</code>。从配置的 <code>entry</code> 入口找出所有的入口文件</li><li><code>编译模块</code>。根据入口文件的依赖，调用所有配置的<code>loader</code>进行转换。</li><li><code>完成模块编译并输出</code>。根据入口文件之间的依赖关系，形成一个个代码块 <code>chunk</code>。</li><li><code>输出完成</code>。将形成的代码块 <code>chunk</code> 输出到文件系统。</li></ol></blockquote><h3 id="_6-插件" tabindex="-1"><a class="header-anchor" href="#_6-插件" aria-hidden="true">#</a> 6.插件</h3><h4 id="_1-webpack-dev-server" tabindex="-1"><a class="header-anchor" href="#_1-webpack-dev-server" aria-hidden="true">#</a> 1. webpack-dev-server</h4><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>devServer: {//这里做开发服务器配置
    port: 3000,
    contentBase: path.join(__dirname, &#39;dist&#39;),//_dirname：表示在当前目录
    compress: true,//启动gzip压缩
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#_2-htmlwebpackplugin" aria-hidden="true">#</a> 2. HtmlWebpackPlugin</h4>`,16),v={href:"https://zhuanlan.zhihu.com/p/30669007",target:"_blank",rel:"noopener noreferrer"},b=n(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//用于对文件进行压缩</span>
    <span class="token literal-property property">removeAttributeQuotes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 移除属性的引号</span>
    <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">removeRedundantAttributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">removeScriptTypeAttributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">removeStyleLinkTypeAttributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">useShortDoctype</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-热更新" tabindex="-1"><a class="header-anchor" href="#_3-热更新" aria-hidden="true">#</a> 3. 热更新</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new webpack.HotModuleReplacementPlugin(),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-打包分析插件" tabindex="-1"><a class="header-anchor" href="#_4-打包分析插件" aria-hidden="true">#</a> 4. 打包分析插件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const BundleAnalyzerPlugin = require(&#39;webpack-bundle-analyzer&#39;).BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
//安装， 然后重启一下server， 然后就可以在http://127.0.0.1:8888/ 看到这个分析了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-开启进度条" tabindex="-1"><a class="header-anchor" href="#_5-开启进度条" aria-hidden="true">#</a> 5. 开启进度条</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const ProgressBarPlugin = require(&#39;progress-bar-webpack-plugin&#39;);
new ProgressBarPlugin(),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-打包时长测试" tabindex="-1"><a class="header-anchor" href="#_6-打包时长测试" aria-hidden="true">#</a> 6. 打包时长测试</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const SpeedMeasurePlugin = require(&quot;speed-measure-webpack-plugin&quot;);

const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
  plugins: [
    new MyPlugin(),
    new MyOtherPlugin()
  ]
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function k(m,h){const a=l("ExternalLinkIcon");return i(),t("div",null,[d,p("more"),u,e("p",null,[e("a",v,[r("原理"),c(a)])]),b])}const w=s(o,[["render",k],["__file","webpack.html.vue"]]);export{w as default};
