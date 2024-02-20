import{_ as t,r as l,o as d,c,b as n,d as a,f as s,e as i}from"./app-1sZ14lpL.js";const r={},o={href:"https://juejin.cn/post/7007346707767754765?utm_source=gold_browser_extension#heading-18",target:"_blank",rel:"noopener noreferrer"},p={href:"https://juejin.cn/post/7064378702779891749?utm_source=gold_browser_extension",target:"_blank",rel:"noopener noreferrer"},u=i('<h2 id="一、nginx是什么" tabindex="-1"><a class="header-anchor" href="#一、nginx是什么" aria-hidden="true">#</a> 一、Nginx是什么？</h2><p>nginx官方介绍：</p><blockquote><p>&quot;Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。&quot;</p></blockquote><p><strong>nginx的优点</strong></p><ul><li>支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。</li><li>内存消耗少</li><li>可商业化</li><li>配置文件简单</li></ul><p><strong>除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等</strong></p><h2 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h2><p>这里的文章不着重介绍怎么安装nginx，但是也给大家留下了安装的教程地址，自取</p>',8),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Flinux%2Fnginx-install-setup.html",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>如果是centos大家也可以直接用yum安装也是很方便的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  xxxxxxxxxx yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Ftaiyonghai%2Fp%2F9402734.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://juejin.cn/post/7000652858353778695",target:"_blank",rel:"noopener noreferrer"},g=i(`<p>nginx.conf 文件是nginx总配置文件也是nginx读取配置的入口。</p><h2 id="三、nginx文件介绍" tabindex="-1"><a class="header-anchor" href="#三、nginx文件介绍" aria-hidden="true">#</a> 三、nginx文件介绍</h2><p>nginx我们最常用到的文件，其实就是nginx的配置文件，其他的文件我们就带过了，当你能熟练编写nginx文件，其实就等于熟练使用nginx了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[wujianrong@localhost ~]# tree /usr/local/nginx
/usr/local/nginx
├── client_body_temp
├── conf                             # Nginx所有配置文件的目录
│   ├── fastcgi.conf                 # fastcgi相关参数的配置文件
│   ├── fastcgi.conf.default         # fastcgi.conf的原始备份文件
│   ├── fastcgi_params               # fastcgi的参数文件
│   ├── fastcgi_params.default       
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types                   # 媒体类型
│   ├── mime.types.default
│   ├── nginx.conf                   # Nginx主配置文件
│   ├── nginx.conf.default
│   ├── scgi_params                  # scgi相关参数文件
│   ├── scgi_params.default  
│   ├── uwsgi_params                 # uwsgi相关参数文件
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp                     # fastcgi临时数据目录
├── html                             # Nginx默认站点目录
│   ├── 50x.html                     # 错误页面优雅替代显示文件，例如当出现502错误时会调用此页面
│   └── index.html                   # 默认的首页文件
├── logs                             # Nginx日志目录
│   ├── access.log                   # 访问日志文件
│   ├── error.log                    # 错误日志文件
│   └── nginx.pid                    # pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件
├── proxy_temp                       # 临时目录
├── sbin                             # Nginx命令目录
│   └── nginx                        # Nginx的启动命令
├── scgi_temp                        # 临时目录
└── uwsgi_temp                       # 临时目录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-配置文件-重点" tabindex="-1"><a class="header-anchor" href="#_1-配置文件-重点" aria-hidden="true">#</a> 1. 配置文件（重点）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>conf <span class="token comment">//nginx所有配置文件目录   </span>
nginx<span class="token punctuation">.</span>conf <span class="token comment">//这个是Nginx的核心配置文件，这个文件非常重要，也是我们即将要学习的重点   </span>
nginx<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>default <span class="token comment">//nginx.conf的备份文件  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-日志" tabindex="-1"><a class="header-anchor" href="#_2-日志" aria-hidden="true">#</a> 2. 日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>logs: 记录入门的文件，当nginx服务器启动后
这里面会有 access.log error.log 和nginx.pid三个文件出现。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-资源目录" tabindex="-1"><a class="header-anchor" href="#_3-资源目录" aria-hidden="true">#</a> 3. 资源目录</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>html <span class="token comment">//存放nginx自带的两个静态的html页面   </span>
50x<span class="token punctuation">.</span>html <span class="token comment">//访问失败后的失败页面   </span>
index<span class="token punctuation">.</span>html <span class="token comment">//成功访问的默认首页 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-备份文件" tabindex="-1"><a class="header-anchor" href="#_4-备份文件" aria-hidden="true">#</a> 4. 备份文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fastcgi<span class="token punctuation">.</span>conf<span class="token operator">:</span>fastcgi  <span class="token comment">//相关配置文件</span>
fastcgi<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>default <span class="token comment">//fastcgi.conf的备份文件</span>
fastcgi_params <span class="token comment">//fastcgi的参数文件</span>
fastcgi_params<span class="token punctuation">.</span>default <span class="token comment">//fastcgi的参数备份文件</span>
scgi_params <span class="token comment">//scgi的参数文件</span>
scgi_params<span class="token punctuation">.</span>default <span class="token comment">//scgi的参数备份文件</span>
uwsgi_params <span class="token comment">//uwsgi的参数文件</span>
uwsgi_params<span class="token punctuation">.</span>default <span class="token comment">//uwsgi的参数备份文件</span>
mime<span class="token punctuation">.</span>types <span class="token comment">//记录的是HTTP协议中的Content-Type的值和文件后缀名的对应关系</span>
mime<span class="token punctuation">.</span>types<span class="token punctuation">.</span>default <span class="token comment">//mime.types的备份文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-编码文件" tabindex="-1"><a class="header-anchor" href="#_5-编码文件" aria-hidden="true">#</a> 5.编码文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>koi-utf、koi-win、win-utf这三个文件都是与编码转换映射相关的配置文件，
用来将一种编码转换成另一种编码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-执行文件" tabindex="-1"><a class="header-anchor" href="#_6-执行文件" aria-hidden="true">#</a> 6. 执行文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sbin: 是存放执行程序文件nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-命令" tabindex="-1"><a class="header-anchor" href="#_7-命令" aria-hidden="true">#</a> 7. 命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx: 是用来控制Nginx的启动和停止等相关的命令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8.添加nginx为全局命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ln</span> <span class="token parameter variable">-s</span> /home/nginx/sbin/nginx /usr/local/bin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、nginx常用命令" tabindex="-1"><a class="header-anchor" href="#四、nginx常用命令" aria-hidden="true">#</a> 四、nginx常用命令</h2><ol><li>常见2种启动命令</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> nginx <span class="token comment">//直接nginx启动，前提是配好nginx环境变量</span>
<span class="token operator">&gt;</span> systemctl start nginx<span class="token punctuation">.</span>service <span class="token comment">//使用systemctl命令启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>常见的4种停止命令</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> nginx  <span class="token operator">-</span>s stop <span class="token comment">//立即停止服务</span>
<span class="token operator">&gt;</span> nginx <span class="token operator">-</span>s quit <span class="token comment">// 从容停止服务 需要进程完成当前工作后再停止</span>
<span class="token operator">&gt;</span> killall nginx <span class="token comment">//直接杀死nginx进程</span>
<span class="token operator">&gt;</span> systemctl stop nginx<span class="token punctuation">.</span>service <span class="token comment">//systemctl停止</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>常见的2种重启命令</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> nginx <span class="token operator">-</span>s reload <span class="token comment">//重启nginx</span>
<span class="token operator">&gt;</span> systemctl reload nginx<span class="token punctuation">.</span>service <span class="token comment">//systemctl重启nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>验证nginx配置文件是否正确</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&gt;</span> nginx <span class="token operator">-</span>t <span class="token comment">//输出nginx.conf syntax is ok即表示nginx的配置文件正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="五、nginx配置详细介绍" tabindex="-1"><a class="header-anchor" href="#五、nginx配置详细介绍" aria-hidden="true">#</a> 五、nginx配置详细介绍</h2><h3 id="_1-配置文件的结构介绍" tabindex="-1"><a class="header-anchor" href="#_1-配置文件的结构介绍" aria-hidden="true">#</a> 1. 配置文件的结构介绍</h3><p>为了让大家有个简单的轮廓，这里先对配置文件做一个简单的描述：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes  <span class="token number">1</span>；                						<span class="token comment"># worker进程的数量</span>
events <span class="token punctuation">{</span>                              										<span class="token comment"># 事件区块开始</span>
    worker_connections  <span class="token number">1024</span>；          		<span class="token comment"># 每个worker进程支持的最大连接数</span>
<span class="token punctuation">}</span>                               															<span class="token comment"># 事件区块结束</span>
http <span class="token punctuation">{</span>                           													<span class="token comment">#	 HTTP区块开始</span>
    include       mime.types；         			<span class="token comment"># Nginx支持的媒体类型库文件</span>
    default_type  application/octet-stream；            <span class="token comment"># 默认的媒体类型</span>
    sendfile        on；       				<span class="token comment"># 开启高效传输模式</span>
    keepalive_timeout  <span class="token number">65</span>；       			<span class="token comment"># 连接超时</span>
    server <span class="token punctuation">{</span>            		                <span class="token comment"># 第一个Server区块开始，表示一个独立的虚拟主机站点</span>
        listen       <span class="token number">80</span>；      			        <span class="token comment"># 提供服务的端口，默认80</span>
        server_name  localhost；    			<span class="token comment"># 提供服务的域名主机名</span>
        location / <span class="token punctuation">{</span>            	        	<span class="token comment"># 第一个location区块开始</span>
            root   html；       							<span class="token comment"># 站点的根目录，相当于Nginx的安装目录</span>
            index  index.html index.htm；       	<span class="token comment"># 默认的首页文件，多个用空格分开</span>
        <span class="token punctuation">}</span>          				        <span class="token comment"># 第一个location区块结果</span>
        error_page   <span class="token number">500502503504</span>  /50x.html；          <span class="token comment"># 出现对应的http状态码时，使用50x.html回应客户</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>          	        <span class="token comment"># location区块开始，访问50x.html</span>
            root   html；      		      	        <span class="token comment"># 指定对应的站点目录为html</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  
    <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>ngxin.conf 相当于是入口文件，nginx启动后会先从nginx.conf里面读取基础配置</li><li>conf 目录下面的各种xxx.conf文件呢，一般就是每一个应用的配置，比如a网站的nginx配置叫a.conf，b网站的叫b.conf，可以方便我们去便于管理</li><li>加载conf目录下的配置，在主配置文件nginx.conf中，一般会有这么一行代码</li></ol><h3 id="_2-nginx-conf主配置文件详细介绍" tabindex="-1"><a class="header-anchor" href="#_2-nginx-conf主配置文件详细介绍" aria-hidden="true">#</a> 2. nginx.conf主配置文件详细介绍</h3><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79e0118d912c44cbb51b22906f70f163~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png"></p><h3 id="_3-xx-conf-子配置文件详细介绍" tabindex="-1"><a class="header-anchor" href="#_3-xx-conf-子配置文件详细介绍" aria-hidden="true">#</a> 3. xx.conf 子配置文件详细介绍</h3><p>我们最常改动nginx的，就是子配置文件</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fae0c748b88476c98cfa8bc0c883929~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png"></p><h3 id="_4-关于-location-匹配" tabindex="-1"><a class="header-anchor" href="#_4-关于-location-匹配" aria-hidden="true">#</a> 4. 关于==location==匹配</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    <span class="token comment">#优先级1,精确匹配，根路径</span>
    location <span class="token operator">=</span> / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">400</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级2,以某个字符串开头,以av开头的，优先匹配这里，区分大小写</span>
    location ^~ /av <span class="token punctuation">{</span>
       root /data/av/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级3，区分大小写的正则匹配，匹配/media*****路径</span>
    location ~ /media <span class="token punctuation">{</span>
          <span class="token builtin class-name">alias</span> /data/static/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先级4 ，不区分大小写的正则匹配，所有的****.jpg|gif|png 都走这里</span>
    location ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpg<span class="token operator">|</span>gif<span class="token operator">|</span>png<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
       root  /data/av/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#优先7，通用匹配</span>
    location / <span class="token punctuation">{</span>
        <span class="token builtin class-name">return</span> <span class="token number">403</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fw3cnote%2Fnginx-setup-intro.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="六、nginx反向代理、负载均衡-简单介绍" tabindex="-1"><a class="header-anchor" href="#六、nginx反向代理、负载均衡-简单介绍" aria-hidden="true">#</a> 六、nginx反向代理、负载均衡 简单介绍</h2><h3 id="_1-反向代理" tabindex="-1"><a class="header-anchor" href="#_1-反向代理" aria-hidden="true">#</a> 1. 反向代理</h3><p>在聊反向代理之前，我们先看看正向代理，正向代理也是大家最常接触的到的代理模式，我们会从两个方面来说关于正向代理的处理模式，分别从软件方面和生活方面来解释一下什么叫正向代理，也说说正反向代理的区别</p><h4 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h4><p>正向代理，&quot;它代理的是客户端&quot;，是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理 正向代理的用途：</p><ul><li>访问原来无法访问的资源，如Google</li><li>可以做缓存，加速访问资源</li><li>对客户端访问授权，上网进行认证</li><li>代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息</li></ul><h4 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h4><p>反向代理，&quot;它代理的是服务端&quot;，主要用于服务器集群分布式部署的情况下，反向代理隐藏了服务器的信息 反向代理的作用：</p><ul><li>保证内网的安全，通常将反向代理作为公网访问地址，Web服务器是内网</li><li>负载均衡，通过反向代理服务器来优化网站的负载</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43061611c1b842f49731c3ef560aa692~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png"></p><h3 id="_2-负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-负载均衡" aria-hidden="true">#</a> 2. 负载均衡</h3><p>服务器接收不同客户端发送的、Nginx反向代理服务器接收到的请求数量，就是我们说的负载量。 这些请求数量按照一定的规则进行分发到不同的服务器处理的规则，就是一种均衡规则。 所以，将服务器接收到的请求按照规则分发的过程，称为负载均衡 负载均衡也分硬件负载均衡和软件负载均衡两种，我们来讲的是软件负载均衡，关于硬件负载均衡的有兴趣的靓仔可以去了解下 负载均衡的算法:</p><ul><li>轮询（默认、加权轮询、ip_hash）</li><li>插件（fair、url_hash），url_hash和ip_hash大同小异，一个基于ip一个基于url，就不过多介绍了</li></ul><h4 id="默认轮询" tabindex="-1"><a class="header-anchor" href="#默认轮询" aria-hidden="true">#</a> 默认轮询</h4><p>每个请求按时间顺序逐一分配到不同的后端服务器，如果后端某个服务器宕机，能自动剔除故障系统。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># constPolling 作为存放负载均衡的变量</span>
upstream constPolling <span class="token punctuation">{</span>
    server localhost:10001<span class="token punctuation">;</span> 
    server localhost:10002<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    listen <span class="token number">10000</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    location / <span class="token punctuation">{</span>
    proxy_pass http://constPolling<span class="token punctuation">;</span> <span class="token comment">#在代理的时候接入constPolling</span>
    proxy_redirect default<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="加权轮询" tabindex="-1"><a class="header-anchor" href="#加权轮询" aria-hidden="true">#</a> 加权轮询</h4><p>通过设置weight，值越大分配率越大 到的访问概率越高，主要用于后端每台服务器性能不均衡的情况下。其次是为在主从的情况下设置不同的权值，达到合理有效的地利用主机资源。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># constPolling 作为存放负载均衡的变量
upstream constPolling {
    server localhost:10001 weight=1; 
    server localhost:10002 weight=2;
}
server {
    listen 10000;
    server_name localhost;
    location / {
    proxy_pass http://constPolling; #在代理的时候接入constPolling
    proxy_redirect default;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>权重越大，被访问的概率越大，比如上面就是33.33%和百分66.66%的访问概率 访问的效果： localhost:10001、localhost:10002、localhost:10002、localhost:10001、localhost:10002、localhost:10002</p><h4 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip_hash</h4><p>每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务，如下配置（ip_hash可以和weight配合使用），<code>并且可以有效解决动态网页存在的session共享问题</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream constPolling {
       ip_hash; 
       server    localhost:10001 weight=1;
       server    localhost:10002 weight=2;
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="fair" tabindex="-1"><a class="header-anchor" href="#fair" aria-hidden="true">#</a> fair</h4><p>个人比较喜欢用的一种负载均衡算法，fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，响应时间短的优先分配。</p>`,25),f={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fxiaohanlin%2Fp%2F9904487.html",target:"_blank",rel:"noopener noreferrer"},_=n("li",null,"哪个服务器的响应速度快，就将请求分配到那个服务器上",-1),w=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream constPolling { 
 server    localhost:10001;
 server    localhost:10002;
 fair; 
} 
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、nginx错误页面配置、开启gzip压缩配置" tabindex="-1"><a class="header-anchor" href="#七、nginx错误页面配置、开启gzip压缩配置" aria-hidden="true">#</a> 七、nginx错误页面配置、开启Gzip压缩配置</h2><h3 id="_1-nginx错误页面配置" tabindex="-1"><a class="header-anchor" href="#_1-nginx错误页面配置" aria-hidden="true">#</a> 1. nginx错误页面配置</h3><p>当我们访问的地址不存在的时候，我们可以根据http状态码来做对应的处理，我们以404为例</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b36fcb83429a493b95bd790bdeb6da7b~tplv-k3u1fbpfcp-watermark.awebp" alt="image.png"> 当然除了404以为我们还可以根据其他的状态码显示的，比如500、502等，熊猫的公司项目中，因为多个项目的错误页面都是统一的，所以我们有单独维护的一套错误码页面放到了我们公司的中台项目中，然后根据客户端是PC/移动端，跳转到对应的错误页面</p><h3 id="_2-gzip压缩" tabindex="-1"><a class="header-anchor" href="#_2-gzip压缩" aria-hidden="true">#</a> 2.Gzip压缩</h3><p>Gzip是网页的一种网页压缩技术，经过gzip压缩后，页面大小可以变为原来的30%甚至更小。更小的网页会让用户浏览的体验更好，速度更快。gzip网页压缩的实现需要浏览器和服务器的支持 <strong>gzip是需要服务器和浏览器同时支持的。当浏览器支持gzip压缩时，会在请求消息中包含Accept-Encoding:gzip,这样Nginx就会向浏览器发送听过gzip后的内容，同时在相应信息头中加入Content-Encoding:gzip，声明这是gzip后的内容，告知浏览器要先解压后才能解析输出。</strong> 如果项目是在ie或者一些兼容性比较低浏览器上运行的，需要去查阅确定是否浏览器支持gzip</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {

    listen 12089;

    index index.php index.html;

    error_log /var/log/nginx/error.log;

    access_log /var/log/nginx/access.log;

    root /var/www/html/gzip;
    # 开启gzip压缩

    gzip on;

    # http请求版本

    gzip_http_version 1.0;

    # 设置什么类型的文件需要压缩

    gzip_types text/css text/javascript application/javascript image/png image/jpeg image/gif;

    location / {

    index index.html index.htm index.php;

    autoindex off;

    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gzip_types对应需要什么格式，可以去查看content-Type</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c03f3fbb529446a7aedfb317af2b9d3f~tplv-k3u1fbpfcp-watermark.awebp?" alt="image.png"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Content-Type: text/css
复制代码
# 成功开启gzip
Content-Encoding: gzip
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、常用全局变量" tabindex="-1"><a class="header-anchor" href="#八、常用全局变量" aria-hidden="true">#</a> 八、常用全局变量</h2><blockquote><table><thead><tr><th>变量</th><th>含义</th></tr></thead><tbody><tr><td>$args</td><td>这个变量等于请求行中的参数，同$query_string</td></tr><tr><td>$content length</td><td>请求头中的Content-length字段。</td></tr><tr><td>$content_type</td><td>请求头中的Content-Type字段。</td></tr><tr><td>$document_root</td><td>当前请求在root指令中指定的值。</td></tr><tr><td>$host</td><td>请求主机头字段，否则为服务器名称。</td></tr><tr><td>$http_user_agent</td><td>客户端agent信息</td></tr><tr><td>$http_cookie</td><td>客户端cookie信息</td></tr><tr><td>$limit_rate</td><td>这个变量可以限制连接速率。</td></tr><tr><td>$request_method</td><td>客户端请求的动作，通常为GET或POST。</td></tr><tr><td>$remote_addr</td><td>客户端的IP地址。</td></tr><tr><td>$remote_port</td><td>客户端的端口。</td></tr><tr><td>$remote_user</td><td>已经经过Auth Basic Module验证的用户名。</td></tr><tr><td>$request_filename</td><td>当前请求的文件路径，由root或alias指令与URI请求生成。</td></tr><tr><td>$scheme</td><td>HTTP方法（如http，https）。</td></tr><tr><td>$server_protocol</td><td>请求使用的协议，通常是HTTP/1.0或HTTP/1.1。</td></tr><tr><td>$server_addr</td><td>服务器地址，在完成一次系统调用后可以确定这个值。</td></tr><tr><td>$server_name</td><td>服务器名称。</td></tr><tr><td>$server_port</td><td>请求到达服务器的端口号。</td></tr><tr><td>$request_uri</td><td>包含请求参数的原始URI，不包含主机名，如”/foo/bar.php?arg=baz”。</td></tr><tr><td>$uri</td><td>不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。</td></tr><tr><td>$document_uri</td><td>与$uri相同。</td></tr></tbody></table></blockquote><h2 id="九、nginx使用综合场景-在github里面会持续更新和补充" tabindex="-1"><a class="header-anchor" href="#九、nginx使用综合场景-在github里面会持续更新和补充" aria-hidden="true">#</a> 九、nginx使用综合场景（在github里面会持续更新和补充）</h2><h3 id="_1-同一个域名通过不同目录指定不同项目目录" tabindex="-1"><a class="header-anchor" href="#_1-同一个域名通过不同目录指定不同项目目录" aria-hidden="true">#</a> 1. 同一个域名通过不同目录指定不同项目目录</h3><p>在开发过程中，有一种场景，比如有项目有多个子系统需要通过同一个域名通过不同目录去访问 在A/B Test 灰度发布等场景也会用上 比如： 访问 a.com/a/访问的是a系统 访问 a.com/b/访问的是b系统</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c3fb33f1ddd455087ff3af7a04da24d~tplv-k3u1fbpfcp-watermark.awebp?" alt="image.png"></p><h3 id="_2-自动适配pc-移动端页面" tabindex="-1"><a class="header-anchor" href="#_2-自动适配pc-移动端页面" aria-hidden="true">#</a> 2. 自动适配PC/移动端页面</h3><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0fca2ea4dcd42bca84cf2abe281efff~tplv-k3u1fbpfcp-watermark.awebp?" alt="image.png"></p><h3 id="_3-限制只能通过谷歌浏览器访问" tabindex="-1"><a class="header-anchor" href="#_3-限制只能通过谷歌浏览器访问" aria-hidden="true">#</a> 3. 限制只能通过谷歌浏览器访问</h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a21784e979046e7adbbed4de207d707~tplv-k3u1fbpfcp-watermark.awebp?" alt="image.png"></p><h3 id="_4-前端单页面应用刷新404问题" tabindex="-1"><a class="header-anchor" href="#_4-前端单页面应用刷新404问题" aria-hidden="true">#</a> 4. 前端单页面应用刷新404问题</h3>`,22);function j(y,z){const e=l("ExternalLinkIcon");return d(),c("div",null,[n("p",null,[n("a",o,[a("nginx基础知识"),s(e)])]),n("p",null,[n("a",p,[a("参考资料"),s(e)])]),u,n("ul",null,[n("li",null,[n("a",v,[a("linux"),s(e)])])]),m,n("ul",null,[n("li",null,[n("a",h,[a("window"),s(e)])]),n("li",null,[n("a",b,[a("通过docker安装（强烈推荐），熊猫之前弄过现成的，大家也可以拿来用"),s(e)])])]),g,n("p",null,[n("a",x,[a("更多配置"),s(e)])]),k,n("ol",null,[n("li",null,[a("安装upstream_fair模块 "),n("a",f,[a("附上fair安装教程"),s(e)])]),_]),w])}const N=t(r,[["render",j],["__file","1、Nginx.html.vue"]]);export{N as default};
