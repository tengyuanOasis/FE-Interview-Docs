<!-- @format -->

##### Http 是什么？

> 超文本传输协议，HTTP 协议用于客户端和服务器端之间的通信

##### http 报文的组成

> **请求报文：**
>
> 由请求方法、请求 URI、协议版本、可选的请求首部字段和内容实体构成的。
>
> **响应报文：**
>
> 由协议版本、状态码（表示请求成功或失败的数字代码）、用以解释状态码的原因短语、可选的响应首部字段以及实体主体构成。

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212213553880.png" alt="image-20220212213553880" style="zoom: 80%; float: left;" />

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212213602946.png" alt="image-20220212213602946" style="zoom: 80%; float: left;" />

##### http 协议状态

> HTTP 是一种不保存状态，即无状态（stateless）协议。
>
> HTTP 协议自身不对请求和响应之间的通信状态进行保存。
>
> 使用 HTTP 协议，每当有新的请求发送时，就会有对应的新响应产生。协议本身并不保留之前一切的请求或响应报文的信息。
>
> 可是，随着 Web 的不断发展，因无状态而导致业务处理变得棘手的情况增多了。比如，用户登录到一家购物网站，即使他跳转到该站的其他页面后，也需要能继续保持登录状态。针对这个实例，网站为了能够掌握是谁送出的请求，需要保存用户的状态。
>
> HTTP/1.1 虽然是无状态协议，但为了实现期望的保持状态功能，于是引入了 Cookie 技术。有了 Cookie 再用 HTTP 协议通信，就可以管理状态了。

##### http 协议方法

![image-20220212214234253](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212214234253.png)

##### Cookie 技术

> - 由于 HTTP 是无状态协议，由于不必保存状态，自然可减少服务器的 CPU 及内存资源的消耗。从另一侧面来说，也正是因为 HTTP 协议本身是非常简单的，所以才会被应用在各种场景里。
>
> - 保留无状态协议这个特征的同时又要解决类似的矛盾问题，于是引入了 Cookie 技术。Cookie 技术通过在请求和响应报文中写入 Cookie 信息来控制客户端的状态。

![image-20220212214951883](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212214951883.png)

![image-20220212215005056](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212215005056.png)

##### 持久连接

> HTTP 协议的初始版本中，每进行一次 HTTP 通信就要断开一次 TCP 连接。
>
> 现代浏览器访问页面资源都较多且复杂，每次的请求都会造成无谓的 TCP 连接建立和断开，增加通信量的开销。
>
> 为解决上述 TCP 连接的问题，HTTP/1.1 和一部分的 HTTP/1.0 想出了持久连接（HTTP Persistent Connections，也称为 HTTP **keep-alive** 或 HTTP connection reuse）的方法。
>
> 持久连接的特点是，只要任意一端没有明确提出断开连接，则保持 TCP 连接状态。

![image-20220212214539242](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212214539242.png)

> 持久连接的好处在于减少了 TCP 连接的重复建立和断开所造成的额外开销，减轻了服务器端的负载。
>
> 另外，减少开销的那部分时间，使 HTTP 请求和响应能够更早地结束，这样 Web 页面的显示速度也就相应提高了。
>
> **在 HTTP/1.1 中，所有的连接默认都是持久连接**，但在 HTTP/1.0 内并未标准化。虽然有一部分服务器通过非标准的手段实现了持久连接，但服务器端不一定能够支持持久连接。毫无疑问，除了服务器端，客户端也需要支持持久连接。

##### 管道化

持久连接使得多数请求以管线化（pipelining）方式发送成为可能。从前发送请求后需等待并收到响应，才能发送下一个请求。

管线化技术出现后，不用等待响应亦可直接发送下一个请求，这样就能够做到同时并行发送多个请求，而不需要一个接一个地等待响应了。

![image-20220307170057947](https://raw.githubusercontent.com/tengyuanOasis/image/master/202203071701168.png)

比如，当请求一个包含 10 张图片的 HTML Web 页面，与挨个连接相比，用持久连接可以让请求更快结束。而管线化技术则比持久连接还要快。请求数越多，时间差就越明显。

##### Http 内容协商

> 内容协商是指客户端和服务端就响应的资源内容进行交涉，然后返回给客户端最合适的字段
>
> 内容协商会以响应资源的语言、字符集、编码方式等作为判断的基准。
>
> - Accept
> - Accept-Charset
> - Accept-Encoding
> - Accept-Language
> - Content-Language

##### Http 状态码

![image-20220212215847589](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220212215847589.png)

| 状态码 | 原因                                                                                                                                                                                                                                                                              |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200    | 成功                                                                                                                                                                                                                                                                              |
| 204    | 成功，无返回实体（请求成功，但是没有资源可以返回），一般在只需要从客户端往服务器发送信息，而对客户端不需要发送新信息内容的情况下使用。                                                                                                                                            |
| 206    | 客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求，该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的 GET 请求。响应报文中包含由 Content-Range 指定范围的实体内容。 例： 一张图片 10000bits , 首次请求了 range 的 1~ 5000 bits , 第二次要后面大部分，会返回 206 |
| 301    | 永久性重定向，该状态码表示请求的资源已被分配了新的 URI                                                                                                                                                                                                                            |
| 302    | 临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问。                                                                                                                                                                                     |
| 303    | 303 状态码和 302 Found 状态码有着相同的功能，但 303 状态码明确表示客户端应当采用 GET 方法获取资源，                                                                                                                                                                               |
| 304    | 缓存                                                                                                                                                                                                                                                                              |
| 400    | 请求报文中存在语法错误                                                                                                                                                                                                                                                            |
| 401    | 需要认证                                                                                                                                                                                                                                                                          |
| 403    | 该状态码表明对请求资源的访问被服务器拒绝了。                                                                                                                                                                                                                                      |
| 404    | …                                                                                                                                                                                                                                                                                 |
| 500    | 服务器端在执行请求时发生了错误                                                                                                                                                                                                                                                    |
| 503    | 服务器暂时处于超负载或正在进行停机维护，现在无法处理请求                                                                                                                                                                                                                          |

6、http 缺点

- 明文通信，内容会被窃听
- 不验证通信双方身份，可能会遭遇伪装
- 无法验证报文的完整性，可能会被篡改

7、https

> HTTP+ 加密 + 认证 + 完整性保护=HTTPS

8、非对称加密原理

> 公开密钥加密使用一对**非对称的密钥**。一把叫做私有密钥（private key），另一把叫做公开密钥（public key）。顾名思义，私有密钥不能让其他任何人知道，而公开密钥则可以随意发布，任何人都可以获得。
>
> 使用公开密钥加密方式，发送密文的一方使用对方的公开密钥进行加密处理，对方收到被加密的信息后，再使用自己的私有密钥进行解密。利用这种方式，不需要发送用来解密的私有密钥，也不必担心密钥被攻击者窃听而盗走。
>
> 另外，要想根据密文和公开密钥，恢复到信息原文是异常困难的，因为解密过程就是在对离散对数进行求值，这并非轻而易举就能办到。退一步讲，如果能对一个非常大的整数做到快速地因式分解，那么密码破解还是存在希望的。但就目前的技术来看是不太现实的。
