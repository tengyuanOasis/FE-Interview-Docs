[nginx基础知识](https://juejin.cn/post/7007346707767754765?utm_source=gold_browser_extension#heading-18)

[参考资料](https://juejin.cn/post/7064378702779891749?utm_source=gold_browser_extension)

## 一、Nginx是什么？

nginx官方介绍：

> "Nginx是一款轻量级的HTTP服务器，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的IO性能，时常用于服务端的反向代理和负载均衡。"

**nginx的优点**

- 支持海量高并发：采用IO多路复用epoll。官方测试Nginx能够支持5万并发链接，实际生产环境中可以支撑2-4万并发连接数。
- 内存消耗少
- 可商业化
- 配置文件简单

**除了这些优点还有很多，比如反向代理功能，灰度发布，负载均衡功能等**

## 二、安装

这里的文章不着重介绍怎么安装nginx，但是也给大家留下了安装的教程地址，自取

- [linux](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Flinux%2Fnginx-install-setup.html)

如果是centos大家也可以直接用yum安装也是很方便的

```shell
  xxxxxxxxxx yum -y install nginx复制代码
```

- [window](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Ftaiyonghai%2Fp%2F9402734.html)
- [通过docker安装（强烈推荐），熊猫之前弄过现成的，大家也可以拿来用](https://juejin.cn/post/7000652858353778695)

nginx.conf 文件是nginx总配置文件也是nginx读取配置的入口。

## 三、nginx文件介绍

nginx我们最常用到的文件，其实就是nginx的配置文件，其他的文件我们就带过了，当你能熟练编写nginx文件，其实就等于熟练使用nginx了

```
[wujianrong@localhost ~]# tree /usr/local/nginx
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

```

### 1. 配置文件（重点）

```js
conf //nginx所有配置文件目录   
nginx.conf //这个是Nginx的核心配置文件，这个文件非常重要，也是我们即将要学习的重点   
nginx.conf.default //nginx.conf的备份文件  
```

### 2. 日志

```
logs: 记录入门的文件，当nginx服务器启动后
这里面会有 access.log error.log 和nginx.pid三个文件出现。
```

### 3. 资源目录

```js
html //存放nginx自带的两个静态的html页面   
50x.html //访问失败后的失败页面   
index.html //成功访问的默认首页 
```

### 4. 备份文件

```js
fastcgi.conf:fastcgi  //相关配置文件
fastcgi.conf.default //fastcgi.conf的备份文件
fastcgi_params //fastcgi的参数文件
fastcgi_params.default //fastcgi的参数备份文件
scgi_params //scgi的参数文件
scgi_params.default //scgi的参数备份文件
uwsgi_params //uwsgi的参数文件
uwsgi_params.default //uwsgi的参数备份文件
mime.types //记录的是HTTP协议中的Content-Type的值和文件后缀名的对应关系
mime.types.default //mime.types的备份文件
```

### 5.编码文件

```
koi-utf、koi-win、win-utf这三个文件都是与编码转换映射相关的配置文件，
用来将一种编码转换成另一种编码
```

### 6. 执行文件

```
sbin: 是存放执行程序文件nginx
```

### 7. 命令

```
nginx: 是用来控制Nginx的启动和停止等相关的命令。
```

8.添加nginx为全局命令

```shell
ln -s /home/nginx/sbin/nginx /usr/local/bin/nginx
```



## 四、nginx常用命令

#### 常见2种启动命令

```js
> nginx //直接nginx启动，前提是配好nginx环境变量
> systemctl start nginx.service //使用systemctl命令启动
```

#### 常见的4种停止命令

```js
> nginx  -s stop //立即停止服务
> nginx -s quit // 从容停止服务 需要进程完成当前工作后再停止
> killall nginx //直接杀死nginx进程
> systemctl stop nginx.service //systemctl停止
```

#### 常见的2种重启命令

```js
> nginx -s reload //重启nginx
> systemctl reload nginx.service //systemctl重启nginx
```

#### 验证nginx配置文件是否正确

```js
> nginx -t //输出nginx.conf syntax is ok即表示nginx的配置文件正确
```

#### 查看nginx是否正常启动

```shell
ps -ef | grep nginx

终止进程后，你可以再次运行 ps aux | grep nginx 命令来验证是否成功关闭了所有的 Nginx 进程。确保没有任何与 Nginx 相关的进程正在运行。
```



## 五、nginx配置详细介绍

### 1. 配置文件的结构介绍

为了让大家有个简单的轮廓，这里先对配置文件做一个简单的描述：

```shell
worker_processes  1；                						# worker进程的数量
events {                              										# 事件区块开始
    worker_connections  1024；          		# 每个worker进程支持的最大连接数
}                               															# 事件区块结束
http {                           													#	 HTTP区块开始
    include       mime.types；         			# Nginx支持的媒体类型库文件
    include /usr/local/nginx/conf/host/*.conf;
    default_type  application/octet-stream；            # 默认的媒体类型
    sendfile        on；       				# 开启高效传输模式
    keepalive_timeout  65；       			# 连接超时
    server {            		                # 第一个Server区块开始，表示一个独立的虚拟主机站点
        listen       80；      			        # 提供服务的端口，默认80
        server_name  localhost；    			# 提供服务的域名主机名
        location / {            	        	# 第一个location区块开始
            root   html；       							# 站点的根目录，相当于Nginx的安装目录
            index  index.html index.htm；       	# 默认的首页文件，多个用空格分开
        }          				        # 第一个location区块结果
        error_page   500502503504  /50x.html；          # 出现对应的http状态码时，使用50x.html回应客户
        location = /50x.html {          	        # location区块开始，访问50x.html
            root   html；      		      	        # 指定对应的站点目录为html
        }
    }  
    ......
```

1. ngxin.conf 相当于是入口文件，nginx启动后会先从nginx.conf里面读取基础配置
2. conf 目录下面的各种xxx.conf文件呢，一般就是每一个应用的配置，比如a网站的nginx配置叫a.conf，b网站的叫b.conf，可以方便我们去便于管理
3. 加载conf目录下的配置，在主配置文件nginx.conf中，一般会有这么一行代码

### 2. nginx.conf主配置文件详细介绍

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79e0118d912c44cbb51b22906f70f163~tplv-k3u1fbpfcp-watermark.awebp)

### 3. xx.conf 子配置文件详细介绍

我们最常改动nginx的，就是子配置文件

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fae0c748b88476c98cfa8bc0c883929~tplv-k3u1fbpfcp-watermark.awebp)

### 4. 关于==location==匹配

```shell
    #优先级1,精确匹配，根路径
    location = / {
        return 400;
    }

    #优先级2,以某个字符串开头,以av开头的，优先匹配这里，区分大小写
    location ^~ /av {
       root /data/av/;
    }

    #优先级3，区分大小写的正则匹配，匹配/media*****路径
    location ~ /media {
          alias /data/static/;
    }

    #优先级4 ，不区分大小写的正则匹配，所有的****.jpg|gif|png 都走这里
    location ~* .*\.(jpg|gif|png|js|css)$ {
       root  /data/av/;
    }

    #优先7，通用匹配
    location / {
        return 403;
    }
```

[更多配置](https://link.juejin.cn/?target=https%3A%2F%2Fwww.runoob.com%2Fw3cnote%2Fnginx-setup-intro.html)

## 六、nginx反向代理、负载均衡 简单介绍

### 1. 反向代理

在聊反向代理之前，我们先看看正向代理，正向代理也是大家最常接触的到的代理模式，我们会从两个方面来说关于正向代理的处理模式，分别从软件方面和生活方面来解释一下什么叫正向代理，也说说正反向代理的区别

#### 正向代理

正向代理，"它代理的是客户端"，是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理 正向代理的用途：

- 访问原来无法访问的资源，如Google
- 可以做缓存，加速访问资源
- 对客户端访问授权，上网进行认证
- 代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息

#### 反向代理

反向代理，"它代理的是服务端"，主要用于服务器集群分布式部署的情况下，反向代理隐藏了服务器的信息 反向代理的作用：

- 保证内网的安全，通常将反向代理作为公网访问地址，Web服务器是内网
- 负载均衡，通过反向代理服务器来优化网站的负载

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43061611c1b842f49731c3ef560aa692~tplv-k3u1fbpfcp-watermark.awebp)

### 2. 负载均衡

服务器接收不同客户端发送的、Nginx反向代理服务器接收到的请求数量，就是我们说的负载量。 这些请求数量按照一定的规则进行分发到不同的服务器处理的规则，就是一种均衡规则。 所以，将服务器接收到的请求按照规则分发的过程，称为负载均衡
负载均衡也分硬件负载均衡和软件负载均衡两种，我们来讲的是软件负载均衡，关于硬件负载均衡的有兴趣的靓仔可以去了解下 负载均衡的算法:

- 轮询（默认、加权轮询、ip_hash）
- 插件（fair、url_hash），url_hash和ip_hash大同小异，一个基于ip一个基于url，就不过多介绍了

#### 默认轮询

每个请求按时间顺序逐一分配到不同的后端服务器，如果后端某个服务器宕机，能自动剔除故障系统。

```shell
# constPolling 作为存放负载均衡的变量
upstream constPolling {
    server localhost:10001; 
    server localhost:10002;
}
server {
    listen 10000;
    server_name localhost;
    location / {
    proxy_pass http://constPolling; #在代理的时候接入constPolling
    proxy_redirect default;
    }
}

```

#### 加权轮询

通过设置weight，值越大分配率越大 到的访问概率越高，主要用于后端每台服务器性能不均衡的情况下。其次是为在主从的情况下设置不同的权值，达到合理有效的地利用主机资源。

```
# constPolling 作为存放负载均衡的变量
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
```

权重越大，被访问的概率越大，比如上面就是33.33%和百分66.66%的访问概率 访问的效果：
localhost:10001、localhost:10002、localhost:10002、localhost:10001、localhost:10002、localhost:10002

#### ip_hash

每个请求都根据访问ip的hash结果分配，经过这样的处理，每个访客固定访问一个后端服务，如下配置（ip_hash可以和weight配合使用），`并且可以有效解决动态网页存在的session共享问题`

```
upstream constPolling {
       ip_hash; 
       server    localhost:10001 weight=1;
       server    localhost:10002 weight=2;
}
复制代码
```

#### fair

个人比较喜欢用的一种负载均衡算法，fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，响应时间短的优先分配。

1. 安装upstream_fair模块 [附上fair安装教程](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fxiaohanlin%2Fp%2F9904487.html)
2. 哪个服务器的响应速度快，就将请求分配到那个服务器上

```
upstream constPolling { 
 server    localhost:10001;
 server    localhost:10002;
 fair; 
} 
复制代码
```

## 七、nginx错误页面配置、开启Gzip压缩配置

### 1. nginx错误页面配置

当我们访问的地址不存在的时候，我们可以根据http状态码来做对应的处理，我们以404为例

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b36fcb83429a493b95bd790bdeb6da7b~tplv-k3u1fbpfcp-watermark.awebp) 当然除了404以为我们还可以根据其他的状态码显示的，比如500、502等，熊猫的公司项目中，因为多个项目的错误页面都是统一的，所以我们有单独维护的一套错误码页面放到了我们公司的中台项目中，然后根据客户端是PC/移动端，跳转到对应的错误页面

### 2.Gzip压缩

Gzip是网页的一种网页压缩技术，经过gzip压缩后，页面大小可以变为原来的30%甚至更小。更小的网页会让用户浏览的体验更好，速度更快。gzip网页压缩的实现需要浏览器和服务器的支持
**gzip是需要服务器和浏览器同时支持的。当浏览器支持gzip压缩时，会在请求消息中包含Accept-Encoding:gzip,这样Nginx就会向浏览器发送听过gzip后的内容，同时在相应信息头中加入Content-Encoding:gzip，声明这是gzip后的内容，告知浏览器要先解压后才能解析输出。** 如果项目是在ie或者一些兼容性比较低浏览器上运行的，需要去查阅确定是否浏览器支持gzip

```
server {

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
```

gzip_types对应需要什么格式，可以去查看content-Type

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c03f3fbb529446a7aedfb317af2b9d3f~tplv-k3u1fbpfcp-watermark.awebp?)

```
Content-Type: text/css
复制代码
# 成功开启gzip
Content-Encoding: gzip
复制代码
```

## 八、常用全局变量

> | 变量              | 含义                                                         |
> | ----------------- | ------------------------------------------------------------ |
> | $args             | 这个变量等于请求行中的参数，同$query_string                  |
> | $content length   | 请求头中的Content-length字段。                               |
> | $content_type     | 请求头中的Content-Type字段。                                 |
> | $document_root    | 当前请求在root指令中指定的值。                               |
> | $host             | 请求主机头字段，否则为服务器名称。                           |
> | $http_user_agent  | 客户端agent信息                                              |
> | $http_cookie      | 客户端cookie信息                                             |
> | $limit_rate       | 这个变量可以限制连接速率。                                   |
> | $request_method   | 客户端请求的动作，通常为GET或POST。                          |
> | $remote_addr      | 客户端的IP地址。                                             |
> | $remote_port      | 客户端的端口。                                               |
> | $remote_user      | 已经经过Auth Basic Module验证的用户名。                      |
> | $request_filename | 当前请求的文件路径，由root或alias指令与URI请求生成。         |
> | $scheme           | HTTP方法（如http，https）。                                  |
> | $server_protocol  | 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。                   |
> | $server_addr      | 服务器地址，在完成一次系统调用后可以确定这个值。             |
> | $server_name      | 服务器名称。                                                 |
> | $server_port      | 请求到达服务器的端口号。                                     |
> | $request_uri      | 包含请求参数的原始URI，不包含主机名，如”/foo/bar.php?arg=baz”。 |
> | $uri              | 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。 |
> | $document_uri     | 与$uri相同。                                                 |



## 九、nginx使用综合场景（在github里面会持续更新和补充）

### 1. 同一个域名通过不同目录指定不同项目目录

在开发过程中，有一种场景，比如有项目有多个子系统需要通过同一个域名通过不同目录去访问 在A/B Test 灰度发布等场景也会用上
比如：
访问 a.com/a/访问的是a系统
访问 a.com/b/访问的是b系统

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c3fb33f1ddd455087ff3af7a04da24d~tplv-k3u1fbpfcp-watermark.awebp?)

### 2. 自动适配PC/移动端页面

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0fca2ea4dcd42bca84cf2abe281efff~tplv-k3u1fbpfcp-watermark.awebp?)

### 3. 限制只能通过谷歌浏览器访问

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a21784e979046e7adbbed4de207d707~tplv-k3u1fbpfcp-watermark.awebp?)

### 4. 前端单页面应用刷新404问题
