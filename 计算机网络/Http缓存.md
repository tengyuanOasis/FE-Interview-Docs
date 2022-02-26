[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching)

1、为什么要缓存

> 出于性能优化考虑，使用http缓存，下次请求使用上一次请求资源副本

2、http缓存种类

> HTTP缓存的类型很多，根据是否需要重新向服务器发起请求来分类包括两种：**强制缓存** 和 **对比缓存（协商缓存）**

3、假设浏览器有一个缓存数据库用于本地缓存，先看看浏览器请求资源的情况：

![image-20220224135545420](https://gitee.com/JuntengMa/imgae/raw/master/202202241355492.png)

4、强制缓存
在浏览器已经缓存数据的情况下，使用强制缓存去请求数据的流程是这样的：

![image-20220224135643725](https://gitee.com/JuntengMa/imgae/raw/master/202202241356816.png)

从流程图可以看到，强制缓存，在缓存数据未失效的情况下，可以直接使用缓存数据，不需要再请求服务器，那么浏览器是如何判断缓存数据是否失效呢？
对于强制缓存来说，响应header中会有两个字段来标明失效规则（Expires/Cache-Control）：

- Expires：

> Expires是HTTP1.0的产物了，现在默认浏览器均默认使用HTTP 1.1，所以它的作用基本忽略。但是很多网站还是对它做了兼容。它的值为服务端返回的到期时间，即下一次请求时，请求时间小于服务端返回的到期时间，直接使用缓存数据。
> 但有一个问题是到期时间是由服务端生成的，如果客户端时间跟服务器时间不一致，这就会导致缓存命中的误差。
> 在HTTP 1.1 的版本，Expires被Cache-Control替代。

- Cache-Control：

> Cache-Control是最重要的规则。常见的取值有private、public、no-cache、max-age，no-store，默认为private。
>
> （1） max-age：用来设置资源（representations）可以被缓存多长时间，单位为秒；
> （2） s-maxage：和max-age是一样的，不过它只针对代理服务器缓存而言；
> （3）public：指示响应可被**任何缓存区**缓存；
> （4）private：只能针对个人用户，而不能被代理服务器缓存；
> （5）no-cache：强制客户端直接向服务器发送请求,也就是说每次请求都必须向服务器发送。服务器接收到 请求，然后判断资源是否变更，是则返回新内容，否则返回304，未变更。这个很容易让人产生误解，使人误 以为是响应不被缓存。实际上`Cache-Control: no-cache`是会被缓存的，只不过每次在向客户端（浏览器）提供响应数据时，缓存都要向服务器评估缓存响应的有效性。
> （6）no-store：禁止一切缓存（这个才是响应不被缓存的意思）。

举个例子：
比如一个资源响应头是：

```lasso
cache-control: public , max-age=31536000
```

那么这个资源会被缓存31536000秒（365天），在365天内再次请求这条数据，都会直接获取缓存数据库中的数据，直接使用。
那么我们试试再次访问资源，会有以下的响应：
![img](https://image-static.segmentfault.com/160/128/1601280277-5e40f5a32b32e_articlex)

可以看到HTTP状态码是200，Size这个字段显示：disk cache，说明HTTP响应报文大小是0，浏览器确实走了强制缓存，没有再跟浏览器交互。
我们上面说了，不同的访问/刷新手段，会使浏览器使用不同的缓存策略，要让浏览器走强制缓存对请求方式有一个要求: **在URI输入栏中输入然后回车/通过书签访问**



#### 对比缓存：

在浏览器已经缓存数据的情况下，使用对比缓存去请求数据的流程是这样的：
![img](https://image-static.segmentfault.com/548/182/548182949-5adfe1970b276_articlex)

> 有同学可能会问，基于对比缓存的流程下，不管是否使用缓存，都需要向服务器发送请求，那么还用缓存干什么？
> 这个问题，我们现在来探讨一下。
> 对比缓存，顾名思义，需要进行比较判断是否可以使用缓存。
> 浏览器第一次请求数据时，服务器会将缓存标识与数据一起返回给浏览器，浏览器将二者备份至缓存数据库中。
> 当浏览器再次请求数据时，浏览器将备份的缓存标识发送给服务器，服务器根据缓存标识进行判断，判断成功后，返回304状态码，通知客户端比较成功，可以使用缓存数据。

举个例子：
第一次访问：
![img](https://image-static.segmentfault.com/260/447/2604473468-5e40f5a45288c_articlex)

第二次访问：
![img](https://image-static.segmentfault.com/335/478/3354782402-5e40f5a535480_articlex)

对比缓存，响应header中会有两个字段来标明规则

- Last-Modified / If-Modified-Since

  服务器用`Last-Modified`告诉浏览器资源`最后修改时间`

> **服务器响应请求时**，会通过`Last-Modified`HTTP头告诉浏览器资源的**最后修改时间**，浏览器本地对资源缓存起来，之后再请求的时候，会带上一个HTTP头`If-Modified-Since`，这个值就是服务器上一次给的`Last-Modified`的时间，服务器会拿着浏览器传过来的时间比对资源当前最后的修改时间，如果大于`If-Modified-Since`，则说明资源修改过了，浏览器不能再使用缓存，服务器重新一份完整的资源浏览器，否则浏览器可以继续使用缓存，并返回304状态码

- Etag / If-None-Match（**优先级高于Last-Modified / If-Modified-Since**）

> **服务器响应请求时**，通过`Etag`HTTP头部告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定），浏览器再次请求时，就会带上一个头`If-None-Match`，这个值就是服务器上一次给的`Etag`的值，服务器比对一下资源当前的Etag是否跟If-None-Match一致，不一致则说明资源修改过了，浏览器不能再使用缓存，否则浏览器可以继续使用缓存，并返回304状态码

值得注意的是：**Etag 的校验优先级高于 Last-Modified**
看个例子：
第一次请求，服务器的响应头包含了
![img](https://image-static.segmentfault.com/378/540/3785407674-5e40f5a5b622c_articlex)

第二次请求，浏览器的请求头
![img](https://image-static.segmentfault.com/251/216/251216282-5e40f5a63e9fb_articlex)

### 总结

我们再看一下HTTP缓存的一个总概流程图：
![img](https://image-static.segmentfault.com/155/525/1555253303-5b4b22be9160d_articlex)

- HTTP缓存主要分强制缓存和对比缓存
- 强制缓存的HTTP相关头部Cache-Control，Exipres（HTTP1.0）,浏览器直接读本地缓存，不会再跟服务器端交互，状态码200。
- 对比缓存的HTTP相关头部 Etag / If-None-Match 、Last-Modified / If-Modified-Since， (Etag优先级比Last-Modified / If-Modified-Since高)，每次请求需要让服务器判断一下资源是否更新过，从而决定浏览器是否使用缓存，如果是，则返回304，否则重新完整响应。

