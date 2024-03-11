<!-- @format -->

### 01/ DNS 解析

DNS 解析的过程就是在寻找哪台机器上有你需要的资源的全过程，当你在浏览器中输入一个地址时,将网址转换为 IP 的过程叫做 DNS 解析

`www.qq.com`域名解析的过程
1、本地 DNS 服务器，缓存中有就返回
2、本地 DNS 无，就去根域名服务器拉取
3、根域名返回 .com 域名服务器的地址
4、 .com 域名服务器地址返回 qq.com 对应的域名服务器
5、 qq.com 对应的域名服务器返回 ` www.qq.com`对应的 ip
[DNS 域名解析](https://www.cnblogs.com/crazylqy/p/7110357.html)

#### DNS 解析过程

DNS 解析本质上是一个递归查询的过程

![](https://raw.githubusercontent.com/tengyuanOasis/image/master/202202171403053.jpeg)

![](https://raw.githubusercontent.com/tengyuanOasis/image/master/202202171401104.png)

上图是查找 `www.google.com`这个网址的过程

1. 在 `本地域名服务器`中查询 IP 地址-->无
2. `本地域名服务器`向 `根域名服务器`发送请求-->无
3. `本地域名服务器` 向 `COM顶级域名服务器`发送请求-->无
4. ......
5. 最后本地服务器得到 Google 的 IP 的字号并缓存到本地,供下次使用

由上可以看出网址解析是一个 从右到左的过程:
`com` --> `google.com` --> `www.google.com`
根域名服务器呢?
默认情况下所有网址最后一位都是. , 即 `www.google.com.`,方便用户一般都会省略,浏览器在请求 DNS 的时候会自动加上,
即 NDS 解析流程:
`.`-->`com.`-->`google.com.`-->`www.google.com.`
