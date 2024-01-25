<!-- @format -->

### 1、为什么要 URL 解析

用于区分搜索栏输入的内容是 Url 还是搜索关键字

> - 如果是搜索关键字：
>
>   如果是搜索关键字，会将其拼接到默认搜索引擎的参数部分去搜索；如搜索栏输入：123 --> 最终 url 如下 👇👇
>
>   https://www.google.com.hk/search?q=123&oq=123&aqs=chrome..69i57j46i512j35i39j0i512j46i512l2j0i512l4.446j0j15&sourceid=chrome&ie=UTF-8
>
> - 如果是 URL：
>
>   浏览器会把不完整的 URL 合成完整的 URL。一个完整的 URL 应该是：`协议+主机+端口+路径[+参数][+锚点]`。比如我们在地址栏输入`www.baidu.com`，浏览器最终会将其拼接成`https://www.baidu.com/`,默认使用 443 端口。

### 1、地址解析和编码

> 我们在搜索栏输入 URL 后，浏览器会解析输入的字符串，判断是**URL**还是**搜索关键字**，如果是 URL 就开始编码。
>
> 一般来说 URL 只能使用英文字母、阿拉伯数字和某些标点符号，不能使用其他文字和符号，所以，如果 URL 中有文字就必须编码后使
>
> 用。
>
> Q : 为什么要编码？
>
> A : URL 编码很混乱，不同的操作系统、浏览器、网页字符集，会导致不同的编码结果。所以我们需要使用 JavaScript 先对 URL
>
> 编码，然后提交给服务器，不给浏览器插手的机会。我们通常会使用 encodeURI()函数或者 encodeURIComponent()函数来编码
>
> URL

### 2、缓存检查

![](https://raw.githubusercontent.com/tengyuanOasis/image/master/202202171355683.webp)

浏览器会先去查看强缓存（Expires 和 cache-control）判断是否过期，如果强缓存生效，直接从缓存中读取资源；

若不生效则进行协商缓存(Last-Modified / If-Modified-Since 和 Etag/If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商

缓存失效，那么代表该请求的缓存失效，返回 200，并重新返回资源和缓存标识，再次存入浏览器缓存中；

生效则返回 304，并从缓存中读取资源。（协商缓存之前要经过 DNS 域名解析，之后建立 TCP 链接）

详细可以看[《》]()

![image-20220217135238034](https://raw.githubusercontent.com/tengyuanOasis/image/master/202202171352110.png)
