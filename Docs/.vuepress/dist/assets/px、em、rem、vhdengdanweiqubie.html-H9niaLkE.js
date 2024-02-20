import{_ as o,r as t,o as l,c as p,a as c,b as n,d as e,f as i,w as a,e as s}from"./app-1sZ14lpL.js";const m={},v=s('<h1 id="css-单位-px-rem-em-vw-vh-的区别" tabindex="-1"><a class="header-anchor" href="#css-单位-px-rem-em-vw-vh-的区别" aria-hidden="true">#</a> Css 单位 px,rem,em,vw,vh 的区别</h1><img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220209174443138.png" alt="image-20220209174443138" style="zoom:80%;"><h4 id="一、px" tabindex="-1"><a class="header-anchor" href="#一、px" aria-hidden="true">#</a> <strong>一、<code>px</code></strong></h4><p>px 就是 pixel 像素的缩写，相对长度单位，网页设计常用的基本单位。像素 px 是相对于显示器屏幕分辨率而言的。</p><h4 id="二、em" tabindex="-1"><a class="header-anchor" href="#二、em" aria-hidden="true">#</a> <strong>二、<code>em</code></strong></h4>',5),u=s('<p>如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸</p><p><strong>特点：</strong></p><ol><li><p>em 的值并不是固定的</p></li><li><p>em 会继承父级元素的字体大小</p></li></ol><h4 id="三、rem" tabindex="-1"><a class="header-anchor" href="#三、rem" aria-hidden="true">#</a> <strong>三、<code>rem</code></strong></h4>',4),h=n("strong",null,"相对于 HTML 根元素的字体大小",-1),g=s('<p><img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220209173943319.png" alt="image-20220209173943319"></p><ul><li><p><strong>优点</strong>：只需要设置根目录的大小就可以把整个页面的成比例的调好</p></li><li><p><strong>rem 兼容性</strong>：除了 IE8 及更早版本外，所有浏览器均已支持 rem</p><p>如果你没有设置 html 的字体大小，就会以浏览器默认字体大小，一般是 16px</p></li><li><p><strong>em 与 rem 的区别：</strong></p><p>rem 是相对于根元素（html）的字体大小，而 em 是相对于其父元素的字体大小</p></li></ul><p><strong>两者使用规则：</strong></p><p>如果这个属性根据它的 font-size 进行测量，则使用 em 其他的一切事物属性均使用 rem</p><p><strong>具体区别</strong>：https://www.runoob.com/w3cnote/px-em-rem-different.html</p><h4 id="四、vw、vh" tabindex="-1"><a class="header-anchor" href="#四、vw、vh" aria-hidden="true">#</a> <strong>四、<code>vw、vh</code></strong></h4><p>vw、vh、vmax、vmin 这四个单位都是基于视口</p><ul><li><p>vw 是相对视口（viewport）的宽度而定的，长度等于视口宽度的 1/100</p><p>假如浏览器的宽度为 200px，那么 1vw 就等于 2px（200px/100）</p></li><li><p>vh 是相对视口（viewport）的高度而定的，长度等于视口高度的 1/100</p><p>假如浏览器的高度为 500px，那么 1vh 就等于 5px（500px/100）</p></li><li><p>vmin 和 vmax 是相对于视口的高度和宽度两者之间的最小值或最大值</p></li></ul><p><img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220209174301593.png" alt="image-20220209174301593"></p><h4 id="五、其他单位" tabindex="-1"><a class="header-anchor" href="#五、其他单位" aria-hidden="true">#</a> <strong>五、<code>其他单位</code>：</strong></h4><p>%（百分比）</p><p>一般来说就是相对于父元素</p><p>1、对于普通定位元素就是我们理解的父元素</p><p>2、对于 position: absolute;的元素是相对于已定位的父元素</p><p>3、对于 position: fixed;的元素是相对于 ViewPort（可视窗口）</p><h4 id="六、vm" tabindex="-1"><a class="header-anchor" href="#六、vm" aria-hidden="true">#</a> <strong>六、<code>vm</code></strong></h4><p>css3 新单位，相对于视口的宽度或高度中较小的那个</p><p>其中最小的那个被均分为 100 单位的 vm</p><p>比如：浏览器高度 900px，宽度 1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px</p><p>缺点：兼容性差</p><h4 id="七、常见问题" tabindex="-1"><a class="header-anchor" href="#七、常见问题" aria-hidden="true">#</a> <strong>七、<code>常见问题</code>：</strong></h4><p><strong>1、假如使用 em 来设置文字大小要注意什么？</strong></p><p>注意父元素的字体大小，因为 em 是根据父元素的大小来设置的。</p><p>比如同样是 1.5em，要是父元素是 20px，那 1.5em 就是 30px.要是父元素是 30px,1.5em 就是 45px（特别是在多重 div 嵌套里面更要注意）</p><p><strong>2、pc pt ch 一般用在什么场景？</strong></p><p>这些我们网页设计基本上用不到，在排版上会有用处</p><p><strong>3、如何使 1rem=10px？</strong></p><p>在设置 HTML{font-size：62.5%；}即可</p><p><strong>4、如果父元素没有指定高度，那么子元素的百分比的高度是多少？</strong></p><p>会按照子元素的实际高度，设置百分比则没有效果</p><p>5、<strong>实际中使用:</strong></p>',31),x={href:"https://www.webpackjs.com/loaders/postcss-loader/",target:"_blank",rel:"noopener noreferrer"},b=s(`<ul><li>下载</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i postcss-loader px2rem-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
module.exports = {
  mode: &quot;production&quot;,
  //入口文件
  entry: { ...entry },
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, &quot;css-loader&quot;],
      },
      {
        test: /\\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          &quot;css-loader&quot;,
          &quot;less-loader&quot;,
          &quot;postcss-loader&quot;,
          {
            loader: &quot;px2rem-loader&quot;,
            options: {
              remUnit: 75,
              remPrecision: 8,
            },
          },
        ],
      },
    ],
  },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function _(f,w){const r=t("font"),d=t("ExternalLinkIcon");return l(),p("div",null,[c(" @format "),v,n("p",null,[e("em 是相对长度单位。相对于**"),i(r,{color:"red"},{default:a(()=>[e("当前对象内文本的字体尺寸 ")]),_:1}),e("**（参考物是父元素的 font-size）")]),u,n("p",null,[e("rem 是 CSS3 新增的一个相对单位，rem 是"),i(r,{color:"red"},{default:a(()=>[h]),_:1}),e("（font-size）来计算的长度单位")]),g,n("ul",null,[n("li",null,[n("p",null,[e("像素比转换插件 "),n("a",x,[e("postcss-loader"),i(d)])]),b])])])}const C=o(m,[["render",_],["__file","px、em、rem、vhdengdanweiqubie.html.vue"]]);export{C as default};
