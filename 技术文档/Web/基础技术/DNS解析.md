www.qq.com域名解析的过程
1、本地DNS服务器，缓存中有就返回
2、本地DNS无，就去根域名服务器拉取
3、根域名返回 .com域名服务器的地址
4、 .com域名服务器地址返回 qq.com对应的域名服务器
5、 qq.com对应的域名服务器返回 www.qq.com对应的ip
[DNS域名解析](https://www.cnblogs.com/crazylqy/p/7110357.html)