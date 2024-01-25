import{_ as a,r as d,o as s,c as r,b as e,d as n,f as l,e as o}from"./app-iph3vjA0.js";const c={},t=e("h3",{id:"js可选链",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#js可选链","aria-hidden":"true"},"#"),n(" Js可选链")],-1),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining",target:"_blank",rel:"noopener noreferrer"},u=o(`<div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>//先Demo：
const adventurer = {
  name: &quot;Alice&quot;,
  cat: {
    name: &quot;Dinah&quot;,
  },
 };

// 01、取 adventurer 中 dog的name
const dogName = adventurer.dog.name  // 报错 Cannot read properties of undefined (reading &#39;name&#39;)

// 02、加一层判断
if(adventurer.dog &amp;&amp; adventurer.dog.name){
  console.log(adventurer.dog.name)
}

//03、可选链优化
const dogName = adventurer.dog?.name // undefined

//04、设置默认值
const dogName = adventurer.dog?.name ?? &quot;Tom&quot; // Tom

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(b,_){const i=d("ExternalLinkIcon");return s(),r("div",null,[t,e("p",null,[e("a",v,[n("MDN"),l(i)])]),u])}const p=a(c,[["render",m],["__file","17、JSkexuanlian.html.vue"]]);export{p as default};
