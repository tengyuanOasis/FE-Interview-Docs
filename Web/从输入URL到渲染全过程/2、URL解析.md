### 1、地址解析和编码

> 我们输入URL后，浏览器会解析输入的字符串，判断是URL还是搜索关键字，如果是URL就开始编码。
>
> 一般来说URL只能使用英文字母、阿拉伯数字和某些标点符号，不能使用其他文字和符号，所以，如果URL中有文字就必须编码后使用。但是URL编码很混乱，不同的操作系统、浏览器、网页字符集，会导致不同的编码结果。所以我们需要使用JavaScript先对URL编码，然后提交给服务器，不给浏览器插手的机会。我们通常会使用encodeURI()函数或者encodeURIComponent()函数来编码URL



### 2、缓存检查

![](https://gitee.com/JuntengMa/imgae/raw/master/202202171355683.webp)

浏览器会先去查看强缓存（Expires和cache-control）判断是否过期，如果强缓存生效，直接从缓存中读取资源；

若不生效则进行协商缓存(Last-Modified / If-Modified-Since和Etag/If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商

缓存失效，那么代表该请求的缓存失效，返回200，并重新返回资源和缓存标识，再次存入浏览器缓存中；

生效则返回304，并从缓存中读取资源。（协商缓存之前要经过DNS域名解析，之后建立TCP链接）

![image-20220217135238034](https://gitee.com/JuntengMa/imgae/raw/master/202202171352110.png)

