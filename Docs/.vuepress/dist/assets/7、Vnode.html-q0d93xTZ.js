import{_ as s,o as n,c as a,e}from"./app-1sZ14lpL.js";const t={},p=e(`<h2 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode" aria-hidden="true">#</a> Vnode</h2><blockquote><p>Vue.js将DOM抽象成一个以JavaScript对象为节点的虚拟DOM树，以VNode节点模拟真实DOM，可以对这棵抽象树进行增删改节点等操作，在这个过程中，不需要对真实的DOM进行操作，只需要操作js对象后进行差异修改，再通过diff算法得出需要修改的最小单位，进行视图更新，只需要操作一次DOM ， 大大减少了DOM操作，提高性能</p></blockquote><p>打个比方，比如说我现在有这么一个VNode树</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;demo&#39;</span>
            <span class="token punctuation">}</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;hello,VNode&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染之后的结果就是这样的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;test&quot;&gt;
   &lt;span class=&quot;demo&quot;&gt;hello,VNode&lt;/span&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[p];function o(i,r){return n(),a("div",null,l)}const d=s(t,[["render",o],["__file","7、Vnode.html.vue"]]);export{d as default};
