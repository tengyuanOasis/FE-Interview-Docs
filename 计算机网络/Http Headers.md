Http1.1首部字段

## 通用首部字段

> 通用首部字段是指，请求报文和响应报文双方都会使用的首部

| 首部字段名        | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| Cache-Control     | 控制是否缓存，例：`Cache-Control : no-cache, no-store, max-age=0, must-revalidate` |
|                   | 详情看《图解Http》 p86                                       |
| Connection        | 逐跳首部、连接的管理 , 例：`connection : keep-alive`         |
| Date              | 创建报文的日期时间 , 例 `Date : Fri, 11 Mar 2022 03:04:29 GMT ` |
| Pragma            | 报文指令, 例 `Pragma: no-cache `                             |
| Trailer           | 报文末端的首部一览                                           |
| Transfer-Encoding | 指定报文主体的传输编码方式                                   |
| Upgrade           | 升级为其他协议                                               |
| Via               | 代理服务器的相关信息                                         |
| Warning           | 错误通知                                                     |

## 请求首部字段

| 首部字段名                                              | 说明                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| Accept                                                  | 用户代理可处理的媒体( 数据 )类型，例：` Accept: application/json, text/plain, */*` |
| Accept-Charset                                          | 优先的字符集                                                 |
| Accept-Encoding                                         | 优先的内容编码,  例 `Accept-Encoding: gzip, deflate `        |
| Accept-Language                                         | 优先的语言（自然语言）, 例 `Accept-Language: zh-CN,zh;q=0.9` |
| Authorization                                           | Web认证信息                                                  |
| Expect                                                  | 期待服务器的特定行为                                         |
| From                                                    | 用户的电子邮箱地址                                           |
| Host                                                    | 请求资源所在服务器                                           |
| If-Match                                                | 比较文件Eatg是否过期 （对比缓存使用，且优先级高于If - Modified - since） |
| If-Modified-Since                                       | 比较资源的更新时间                                           |
| If-None-Match                                           | 比较实体标记（与 If-Match 相反）                             |
| If-Range                                                | 资源未更新时发送实体 Byte 的范围请求 ( 常见206状态码)        |
| Range                                                   | 实体的字节范围请求                                           |
| If-Unmodified-Since                                     | 比较资源的更新时间（与If-Modified-Since相反）                |
| [Max-Forwards](https://www.shuzhiduo.com/A/kvJ3oK3OJg/) | 最大传输逐跳数                                               |
| Referer                                                 | 对请求中 URI 的原始获取方                                    |
| User-Agent                                              | HTTP 客户端程序的信息,一般记录一下浏览器的版本信息等         |

## 响应首部字段

| 首部字段名         | 说明                         |
| ------------------ | ---------------------------- |
| Accept-Ranges      | 是否接受字节范围请求         |
| Age                | 推算资源创建经过时间         |
| ETag               | 资源的匹配信息（资源hash值） |
| Location           | 令客户端重定向至指定URI      |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发起请求的时机要求     |
| Server             | HTTP服务器的安装信息         |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器对客户端的认证信息     |


## 实体首部字段

| 首部字段名         | 说明                         |
| ------------------ | ---------------------------- |
|Allow      | 资源可支持的HTTP方法         |
| Content-Encoding | 实体主体适用的编码方式 |
| Content-Language | 实体主体的自然语言 |
| Content-Length | 实体主体的大小（单位：字节） |
| Content-Location | 替代对应资源的URI |
| Content-MD5 | 实体主体的报文摘要 |
| Content-Range | 实体主体的位置范围 |
| Content-Type   | 实体主体的媒体类型 |
| Expires | 实体主体过期的日期时间 |
| Last-Modified | 资源的最后修改日期时间 |

