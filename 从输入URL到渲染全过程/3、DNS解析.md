### 01/ DNS解析



DNS解析的过程就是在寻找哪台机器上有你需要的资源的全过程，当你在浏览器中输入一个地址时,将网址转换为IP的过程叫做DNS解析

`www.qq.com`域名解析的过程
1、本地DNS服务器，缓存中有就返回
2、本地DNS无，就去根域名服务器拉取
3、根域名返回 .com域名服务器的地址
4、 .com域名服务器地址返回 qq.com对应的域名服务器
5、 qq.com对应的域名服务器返回` www.qq.com`对应的ip
[DNS域名解析](https://www.cnblogs.com/crazylqy/p/7110357.html)

#### DNS解析过程
DNS解析本质上是一个递归查询的过程

![](https://gitee.com/JuntengMa/imgae/raw/master/202202171403053.jpeg)

![](https://gitee.com/JuntengMa/imgae/raw/master/202202171401104.png)

上图是查找`www.google.com`这个网址的过程
1. 在`本地域名服务器`中查询IP地址-->无
2. `本地域名服务器`向`根域名服务器`发送请求-->无
3. `本地域名服务器` 向`COM顶级域名服务器`发送请求-->无
4. ......
5. 最后本地服务器得到Google的IP的字号并缓存到本地,功下次使用

由上可以看出网址解析是一个 从右到左的过程:
`com` --> `google.com` --> `www.google.com`
根域名服务器呢?
默认情况下所有网址最后一位都是. , 即`www.google.com.`,方便用户一般都会省略,浏览器在请求DNS的时候会自动加上,
即NDS解析流程:
`.`-->`com.`-->`google.com.`-->`www.google.com.`

