import{_ as e,r as i,o as c,c as o,b as n,d as s,f as t,e as l}from"./app-1sZ14lpL.js";const p={},d=n("h4",{id:"_1、nginx安装卸载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1、nginx安装卸载","aria-hidden":"true"},"#"),s(" 1、nginx安装卸载")],-1),r=n("p",null,"https://cloud.tencent.com/developer/article/1801077",-1),v=n("h4",{id:"_2、location-匹配规则",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2、location-匹配规则","aria-hidden":"true"},"#"),s(" 2、location 匹配规则")],-1),u=n("p",null,"参考文档：",-1),k={href:"https://juejin.cn/post/7064378702779891749?utm_source=gold_browser_extension#heading-0",target:"_blank",rel:"noopener noreferrer"},m={href:"https://juejin.cn/post/7007346707767754765?utm_source=gold_browser_extension#heading-4",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>    <span class="token comment">#优先级1,精确匹配，根路径</span>
    <span class="token directive"><span class="token keyword">location</span> =/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">400</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级2,以某个字符串开头,以av开头的，优先匹配这里，区分大小写</span>
    <span class="token directive"><span class="token keyword">location</span> ^~ /av</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">root</span> /data/av/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级3，区分大小写的正则匹配，匹配/media*****路径</span>
    <span class="token directive"><span class="token keyword">location</span> ~ /media</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">alias</span> /data/static/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级4 ，不区分大小写的正则匹配，所有的****.jpg|gif|png 都走这里</span>
    <span class="token directive"><span class="token keyword">location</span> ~* .*\\.(jpg|gif|png|js|css)$</span> <span class="token punctuation">{</span>
       <span class="token directive"><span class="token keyword">root</span>  /data/av/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先7，前缀匹配 , 匹配是按照最长匹配 , 与顺序无关</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意的是，nginx的匹配优先顺序按照上面的顺序进行优先匹配，而且注意的是<strong>一旦某一个匹配命中直接退出，不再进行往下的匹配</strong>;</p><h5 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级： <code>=</code> &gt; <code>^~</code> &gt; <code>~</code> &gt; <code>~*</code> &gt; <code>/ </code></h5><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  1；                														<span class="token comment"># worker进程的数量</span>
error_log  /var/log/nginx/error.log warn</span><span class="token punctuation">;</span>              <span class="token comment"># 错误日志存放目录</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>                              																			<span class="token comment"># 事件区块开始</span>
    worker_connections  1024；          										 <span class="token comment"># 每个worker进程支持的最大连接数</span>
<span class="token punctuation">}</span>                               																								 <span class="token comment"># 事件区块结束</span>

<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>                           																							<span class="token comment"># HTTP区块开始</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types；         													 <span class="token comment"># Nginx支持的媒体类型库文件（如服务器校验文件等，如下配置）</span>
    
    <span class="token comment">#SSL证书</span>
    include xxxxxx</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/common/proxy-default.conf</span><span class="token punctuation">;</span>
  
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream；           <span class="token comment"># 默认的文件类型</span>
    
    access_log   /var/log/nginx/access.log  main</span><span class="token punctuation">;</span> 		<span class="token comment">#访问日志存放位置	</span>
  
    <span class="token directive"><span class="token keyword">sendfile</span>        on；       																					<span class="token comment"># 开启高效传输模式</span>
    keepalive_timeout  65；       																<span class="token comment"># 连接超时</span>
    
 server</span> <span class="token punctuation">{</span>       
    
    <span class="token directive"><span class="token keyword">listen</span>       80；      			      	<span class="token comment"># 服务端口，默认80，可自定义配置</span>
    server_name  localhost；    																	<span class="token comment"># 域名主机名</span>
    
	
    location /</span> <span class="token punctuation">{</span>																													
    	<span class="token directive"><span class="token keyword">root</span>  /home/project</span> <span class="token punctuation">;</span>																				<span class="token comment"># 服务默认启动目录</span>
      <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>														<span class="token comment"># 服务默认访问文件</span>
      
      <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
      
      <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>													<span class="token comment"># html设置history模式</span>
      
      <span class="token comment"># index.html文件不可以设置强缓存 设置协商缓存即可</span>
      <span class="token directive"><span class="token keyword">add_header</span> Cache-Control <span class="token string">&#39;no-cache, must-revalidate, proxy-revalidate, max-age=0&#39;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

    <span class="token comment"># 接口反向代理</span>
    <span class="token directive"><span class="token keyword">location</span> ^~ /api/</span> <span class="token punctuation">{</span>
        <span class="token comment"># 跨域处理 设置头部域名</span>
        <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Origin *</span><span class="token punctuation">;</span>
        <span class="token comment"># 跨域处理 设置头部方法</span>
        <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Methods <span class="token string">&#39;GET,POST,DELETE,OPTIONS,HEAD&#39;</span></span><span class="token punctuation">;</span>
        <span class="token comment"># 改写路径</span>
        <span class="token directive"><span class="token keyword">rewrite</span> ^/api/(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
        <span class="token comment"># 反向代理</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://static_env</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

      <span class="token directive"><span class="token keyword">location</span> ~* \\.(?:css(\\.map)?|js(\\.map)?|gif|svg|jfif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$</span> <span class="token punctuation">{</span>
    <span class="token comment"># 静态资源设置七天强缓存</span>
    <span class="token directive"><span class="token keyword">expires</span> <span class="token number">7d</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">access_log</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(_,h){const a=i("ExternalLinkIcon");return c(),o("div",null,[d,r,v,u,n("p",null,[n("a",k,[s("《前端到底用nginx来做啥》"),t(a)])]),n("p",null,[n("a",m,[s("《前端仔也需要懂的nginx内容》"),t(a)])]),b])}const w=e(p,[["render",g],["__file","2、Nginxbiji.html.vue"]]);export{w as default};
