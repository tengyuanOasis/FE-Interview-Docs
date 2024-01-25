import{_ as a,o as e,c as n,e as s}from"./app-iph3vjA0.js";const i={},d=s(`<h3 id="_01、pm2是什么" tabindex="-1"><a class="header-anchor" href="#_01、pm2是什么" aria-hidden="true">#</a> 01、pm2是什么？</h3><p>pm2 是一款强大的node进程管理工具 ， 具体自行百度~</p><h3 id="_02、学习资料" tabindex="-1"><a class="header-anchor" href="#_02、学习资料" aria-hidden="true">#</a> 02、学习资料</h3><p>https://www.kancloud.cn/daiji/pm2/395273</p><h3 id="_03、pm2官网" tabindex="-1"><a class="header-anchor" href="#_03、pm2官网" aria-hidden="true">#</a> 03、PM2官网</h3><p>https://raw.githubusercontent.com/shipengqi/PM2-docs-Zh-CN/blob/master/guide/startup_hook.md</p><h3 id="_04、使用" tabindex="-1"><a class="header-anchor" href="#_04、使用" aria-hidden="true">#</a> 04、使用</h3><h4 id="_1、安装pm2" tabindex="-1"><a class="header-anchor" href="#_1、安装pm2" aria-hidden="true">#</a> 1、安装pm2</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">npm</span> i <span class="token parameter variable">-g</span> pm2
  <span class="token comment">#or</span>
  <span class="token function">npm</span> <span class="token function">install</span> cnpm <span class="token parameter variable">-g</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、显示所有的进程" tabindex="-1"><a class="header-anchor" href="#_2、显示所有的进程" aria-hidden="true">#</a> 2、显示所有的进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    pm2 <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、启动某个进程" tabindex="-1"><a class="header-anchor" href="#_3、启动某个进程" aria-hidden="true">#</a> 3、启动某个进程</h4><p>先进入项目pm2.json文件目录下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    pm2 start pm2.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4、查看调试的打印输出" tabindex="-1"><a class="header-anchor" href="#_4、查看调试的打印输出" aria-hidden="true">#</a> 4、查看调试的打印输出</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment">#pm2日志</span>
    pm2 logs
    
    <span class="token comment"># 按id输出某个进程的日志</span>
    pm2 logs <span class="token number">0</span>

    <span class="token comment"># 按name输出某个进程的日志</span>
    pm2 logs www_baidu_com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5、关闭进程" tabindex="-1"><a class="header-anchor" href="#_5、关闭进程" aria-hidden="true">#</a> 5、关闭进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 停止所有进程</span>
    pm2 stop all
    
    <span class="token comment"># 按id停止某个进程</span>
    pm2 stop <span class="token number">0</span>
    
    <span class="token comment"># 按name停止某个进程</span>
    pm2 stop www_baidu_com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6、重启进程" tabindex="-1"><a class="header-anchor" href="#_6、重启进程" aria-hidden="true">#</a> 6、重启进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 重启所有进程</span>
    pm2 restart all
    
    <span class="token comment"># 按id重启某个进程</span>
    pm2 restart <span class="token number">0</span>
    
    <span class="token comment"># 按name重启某个进程</span>
    pm2 restart www_baidu_com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7、杀死进程" tabindex="-1"><a class="header-anchor" href="#_7、杀死进程" aria-hidden="true">#</a> 7、杀死进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 杀死全部进程</span>
    pm2 delete all 
    
    <span class="token comment"># 按id杀死指定的进程</span>
    pm2 delete <span class="token number">0</span> 
    
    <span class="token comment"># 按name杀死指定的进程</span>
    pm2 delete www_baidu_com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、重载进程" tabindex="-1"><a class="header-anchor" href="#_8、重载进程" aria-hidden="true">#</a> 8、重载进程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment"># 重载全部进程</span>
    pm2 reload all 
    
    <span class="token comment"># 按id重载指定的进程</span>
    pm2 reload <span class="token number">0</span> 
    
    <span class="token comment"># 按name重载指定的进程</span>
    pm2 reload www_baidu_com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、查看指定进程的总体信息" tabindex="-1"><a class="header-anchor" href="#_9、查看指定进程的总体信息" aria-hidden="true">#</a> 9、查看指定进程的总体信息</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    pm2 show www_baidu_com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),l=[d];function r(c,m){return e(),n("div",null,l)}const p=a(i,[["render",r],["__file","pm2xuexiwendang.html.vue"]]);export{p as default};
