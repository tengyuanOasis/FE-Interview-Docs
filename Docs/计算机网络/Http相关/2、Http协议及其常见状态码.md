
HTTPS的一些知识

<!--more-->

### 1/什么是HTTP协议

- HTTP协议是超文本传输协议的简称,规定了服务端和客户端(前后端)通信方式以及占用的接口
- HTTP协议是一个基于TCP/IP通信协议来传输数据的
  
### 2/HTTP协议的特性

- HTTP协议支持客户端/服务端模式,也是一种请求/响应模式的协议
- 简单快速,客户端向服务器请求服务时,只需要提供请求方法和URL.常用的有 GET,PSOT,DELETE,HEAD等
- 无连接:HTTP协议规定浏览器和服务端只能保持短暂的链接,浏览器的每次请求都需要与服务器建立一个TCP链接,服务器处理完成后立即断开TCP链接
- 无状态:无状态是指服务器不跟踪也不记录请求过的状态,后续如果需要前面的信息,必须重传.
- 但是可以借助cookie和session记住来做身份认证和状态记录

### 3/HTTP报文组成
#### 请求报问
- 请求行
- 请求头(Request Header)
- 请求正文

#### 响应报文
- 状态行
- 响应头(Response Header)
- 响应正文

### 4/常见请求方法

- GET
- HEAD:类似GET请求,但是返回的响应中没有具体内容,用于获取报头
- POST
- PUT:从客户端向服务器传送的数据取代指定的文档的内容
- DELETE:请求服务器删除指定页面

### 5/响应状态码
状态码分类：

- 1XX- 信息型，服务器收到请求，需要请求者继续操作。
- 2XX- 成功型，请求成功收到，理解并处理。
- 3XX - 重定向，需要进一步的操作以完成请求。
- 4XX - 客户端错误，请求包含语法错误或无法完成请求。
- 5XX - 服务器错误，服务器在处理请求的过程中发生了错误。

### 6/常见状态码 w
- 200 OK 请求正常处理

- 204 请求处理成功 但是没有任何资源返回给客户端(一般用于只需客户端向服务端发送消息)

- 206 对资源的某一部分请求 响应报文中包含由 Content-Range 指定范围的实体内容

- 301永久重定向 如果把资源对应的URI保存为书签，则此时书签会根据Localtion首部字段提示的URI重新保存

- 302 临时重定向 临时地从旧地址A跳转到地址B

- 303 和301，302类似 当使用post方法访问一个资源时，把客户端以get的方式重定向到对应的URI，返回303状态码

- 304 资源已经找到，但是不满足条件，所以不把资源返回给客户端。常用于协商缓存。

- 400 请求报文内有语法错误

- 401 该状态码表示发送的请求需要通过HTTP认证，初次收到401响应浏览器弹出认证的对话窗口。若收到第二次401状态码，则说明第一次验证失败。（例如git push 出现弹窗或报错）

- 403 请求资源的访问被服务器拒绝，一般是未获得文件系统的访问权限，访问权限出现问题。

- 404 服务器上找不到请求资源 或路径错误

- 405 请求方法被服务端识别，但是服务端禁止使用该方法。可以用OPTIONS来查看服务器允许哪些访问方法

- 500 服务器端在执行请求时出错，一般是因为web应用出现bug

- 502 代理服务器或网关从上游服务器中收到无效响应

- 503 服务器暂时处于超负载或停机维护，目前无法处理请求

