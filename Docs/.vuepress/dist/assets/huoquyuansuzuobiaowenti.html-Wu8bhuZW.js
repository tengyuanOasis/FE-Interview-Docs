import{_ as i,o as n,c as l,a as s,b as e,e as d}from"./app-iph3vjA0.js";const a={},r=e("blockquote",null,[e("h4",null," JavaScript获取元素位置 ")],-1),v=d(`<h2 id="js获取元素相对于父级元素的高度" tabindex="-1"><a class="header-anchor" href="#js获取元素相对于父级元素的高度" aria-hidden="true">#</a> js获取元素相对于父级元素的高度</h2><h4 id="_1-offsetleft-、offsettop" tabindex="-1"><a class="header-anchor" href="#_1-offsetleft-、offsettop" aria-hidden="true">#</a> 1. offsetLeft 、offsetTop</h4><p>offsetLeft/offsetTop -  用于获取子元素相对于父元素的位移（左位移、上位移）</p><h4 id="_2-offsetwidth、offsetheight" tabindex="-1"><a class="header-anchor" href="#_2-offsetwidth、offsetheight" aria-hidden="true">#</a> 2. offsetWidth、offsetHeight</h4><p>offsetWidth/offsetHeight - 用于获取元素的可见宽度和可见高度</p><h4 id="_3-clientx-、clienty" tabindex="-1"><a class="header-anchor" href="#_3-clientx-、clienty" aria-hidden="true">#</a> 3. clientX 、clientY</h4><p>用于获取鼠标坐标（相对于页面的坐标）</p><p>var event = event || window.event;</p><ul><li>event.clientX</li><li>event.clientY</li></ul><h4 id="_4-offsetleft与style-left的区别" tabindex="-1"><a class="header-anchor" href="#_4-offsetleft与style-left的区别" aria-hidden="true">#</a> 4.offsetLeft与style.left的区别</h4><ol><li></li></ol><ul><li>style.left返回的是字符串      //30px</li><li>offsetLeft返回的是数值        //30</li></ul><ol start="2"><li></li></ol><ul><li>style.left可读可写</li><li>offsetLeft只读 3.</li><li>style.left的值需事先定义，否则取到的值为空</li><li>offsetLeft不需提前定义，直接获取</li></ul><h4 id="_5-兼容问题" tabindex="-1"><a class="header-anchor" href="#_5-兼容问题" aria-hidden="true">#</a> 5.兼容问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chrome：

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——相对当前坐标系的border左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

ff：

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——无
e.clientX——相对可视区域的坐标
e.x——无

opera：

e.pageX——相对整个页面的坐标
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

safari：（这个和chrome是一样的）

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——相对当前坐标系的border左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

IE9：

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标 + 滚动条滚过的距离（这个NB轰轰了····=。=）
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始

IE8：

e.pageX——无
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始

IE7：

e.pageX——无
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始

IE6：

e.pageX——无
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function t(c,u){return n(),l("div",null,[r,s("more"),v])}const o=i(a,[["render",t],["__file","huoquyuansuzuobiaowenti.html.vue"]]);export{o as default};
