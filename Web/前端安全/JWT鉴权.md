---
cover: 'https://images.unsplash.com/photo-1606376448013-6af1d4570006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
coverWidth: 1200
coverHeight: 750
date: 2020-11-27
title: JWT鉴权
categories: 前端安全
tags: 前端安全
top:
permalink:
---

前端安全之 - JWT
<!-- more -->

####  JWT(	JSON Web Token	)

#### 01/ 什么是JWT

- JWT是JSON Web Token的缩写,是一种易用且无状态的鉴权方式

- 用于在各方之间以JSON对象安全传输信息。这些信息可以通过数字签名进行验证和信任。

- 简单来说就是server端把JSON数据经过加密做成Token,以授权给client端

#### 02/ 栗子:

当Client端登录完成以后，Server端要返回一个7天有效的token，那么对应的Python的样例代码会是这样的：
（[使用了PyJWT包：pip install pyjwt](https://link.zhihu.com/?target=https%3A//github.com/jpadilla/pyjwt)）

```
import time

import jwt

exp = int(time.time()) + 86400 * 7  # 失效时间
user = 'liriansu'  # 用户表示
key = 'hunter2'  # 密钥
payload = {'exp': exp, 'user': user}  # JSON 数据
token = jwt.encode(payload, key)

print(token)
# token可能会长这样子
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.EoKoMCjq_zGqUg5HDfqw4EN7EiG6gMjkUZle0uGJDGU
```

然后Client端每次在authorization header或者是query string里带上token。
Server端收到请求的时候，
用`payload = jwt.decode(token, key)`验证权限就行了。
验证通过以后，payload中就是整个JSON数据。
理论上你可以往token payload里塞任何**_非敏感**_数据。

#### 03 / 使用场景

- 鉴权

  用户一旦登录,后续的每个请求都需要携带jwt,允许该用户访问该令牌允许的路由,服务和资源.

  单点登录是当前使用最广泛的JWT的一项功能,因为开销较小,并且能够跨域使用

- 信息交换

  JWT是在各方之间安全传输信息的好方式,因为JWT可以签名：例如使用公钥/私钥对，所以可以确定发件人是他们自称的人。此外，由于使用标头和有效载荷计算签名，因此您还可以验证内容是否未被篡改。

#### 04 /  JWT结构

` eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.EoKoMCjq_zGqUg5HDfqw4EN7EiG6gMjkUZle0uGJDGU`

如上所示,JWT输出的是三个由点分隔的`xxxx.yyyy.zzzz`Base64-URL字符串，可以在HTML和HTTP环境中轻松传递，

他们分别代表:

- Header
  - Header通常由两部分组成：令牌的类型，即JWT。和常用的散列算法
  - Header部分的JSON被Base64Url编码，形成JWT的第一部分。
- Payload
  - 存放沟通讯息的地方
  - Registered claims（注册声明）
  - Public claims（公开声明）
  - Private claims（私有声明）
- Signature
  - 用来验证发送请求者身份，由前两部分加密形成。

#### 04/ 所以综合来说，

假如使用JWT作为鉴权方式，
有以下几个特性：

1. Client端不用管任何加密/解密，只用存token，在请求里面带上就行了。
2. Server端可以实现不依赖外部存储鉴权，所有的数据都丢在token里。
3. 也就是说鉴权这一步不需要File/MySQL/Redis之类的数据库，也能知道用户身份。
4. 因为token带失效时间，所以需要在失效前/后再刷新token。

#### 05/ 常见问题

##### ① JWT 安全嗎?

Base64编码方式是可逆的，也就是透过编码后发放的Token内容是可以被解析的。一般而言，我们都不建议在有效载荷内放敏感讯息，比如使用者的密码。

##### ② JWT Payload 內容可以被伪造嗎？

JWT其中的一个组成内容为Signature，可以防止通过Base64可逆方法回推有效载荷内容并将其修改。因为Signature是经由Header跟Payload一起Base64组成的。

##### ③ 如果我的 Cookie 被窃取了，那不就表示第三方可以做 CSRF 攻击?

是的，Cookie丢失，就表示身份就可以被伪造。故官方建议的使用方式是存放在LocalStorage中，并放在请求头中发送。

##### ④ 空间及长度问题？

JWT Token通常长度不会太小，特别是Stateless JWT Token，把所有的数据都编在Token里，很快的就会超过Cookie的大小（4K）或者是URL长度限制。

##### ⑤ Token失效问题？

无状态JWT令牌（Stateless JWT Token）发放出去之后，不能通过服务器端让令牌失效，必须等到过期时间过才会失去效用。

假设在这之间Token被拦截，或者有权限管理身份的差异造成授权Scope修改，都不能阻止发出去的Token失效并要求使用者重新请求新的Token。

#### 06/ JWT使用建议

- 不要存放敏感信息在Token里。
- Payload中的exp时效不要设定太长。
- 开启Only Http预防XSS攻击。
- 如果担心重播攻击（replay attacks ）可以增加jti（JWT ID），exp（有效时间） Claim。
- 在你的应用程序应用层中增加黑名单机制，必要的时候可以进行Block做阻挡（这是针对掉令牌被第三方使用窃取的手动防御）。

