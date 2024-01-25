#### 1、nginx安装卸载

https://cloud.tencent.com/developer/article/1801077

#### 2、location 匹配规则

参考文档：

[《前端到底用nginx来做啥》](https://juejin.cn/post/7064378702779891749?utm_source=gold_browser_extension#heading-0)

[《前端仔也需要懂的nginx内容》](https://juejin.cn/post/7007346707767754765?utm_source=gold_browser_extension#heading-4)



```nginx
    #优先级1,精确匹配，根路径
    location =/ {
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

    #优先7，前缀匹配 , 匹配是按照最长匹配 , 与顺序无关
    location / {
        return 403;
    }

```

注意的是，nginx的匹配优先顺序按照上面的顺序进行优先匹配，而且注意的是**一旦某一个匹配命中直接退出，不再进行往下的匹配**;

##### 优先级：  `=`    >   `^~`   >  `~`    >   `~*` >   `/ `



```nginx
worker_processes  1；                														# worker进程的数量
error_log  /var/log/nginx/error.log warn;              # 错误日志存放目录
events {                              																			# 事件区块开始
    worker_connections  1024；          										 # 每个worker进程支持的最大连接数
}                               																								 # 事件区块结束

http {                           																							# HTTP区块开始
    include       mime.types；         													 # Nginx支持的媒体类型库文件（如服务器校验文件等，如下配置）
    
    #SSL证书
    include xxxxxx;
    include /etc/nginx/conf.d/common/proxy-default.conf;
  
    default_type  application/octet-stream；           # 默认的文件类型
    
    access_log   /var/log/nginx/access.log  main; 		#访问日志存放位置	
  
    sendfile        on；       																					# 开启高效传输模式
    keepalive_timeout  65；       																# 连接超时
    
 server {       
    
    listen       80；      			      	# 服务端口，默认80，可自定义配置
    server_name  localhost；    																	# 域名主机名
    
	
    location / {																													
    	root  /home/project ;																				# 服务默认启动目录
      index index.html index.htm;														# 服务默认访问文件
      
      proxy_set_header Host $host;
      
      try_files $uri $uri/ /index.html;													# html设置history模式
      
      # index.html文件不可以设置强缓存 设置协商缓存即可
      add_header Cache-Control 'no-cache, must-revalidate, proxy-revalidate, max-age=0';
  }

    # 接口反向代理
    location ^~ /api/ {
        # 跨域处理 设置头部域名
        add_header Access-Control-Allow-Origin *;
        # 跨域处理 设置头部方法
        add_header Access-Control-Allow-Methods 'GET,POST,DELETE,OPTIONS,HEAD';
        # 改写路径
        rewrite ^/api/(.*)$ /$1 break;
        # 反向代理
        proxy_pass http://static_env;
        proxy_set_header Host $http_host;
    }

      location ~* \.(?:css(\.map)?|js(\.map)?|gif|svg|jfif|ico|cur|heic|webp|tiff?|mp3|m4a|aac|ogg|midi?|wav|mp4|mov|webm|mpe?g|avi|ogv|flv|wmv)$ {
    # 静态资源设置七天强缓存
    expires 7d;
    access_log off;
}
```

