1、cookie 值区分域名，不区分端口号。 
	http://localhost:3000 和 http://localhost:8888的cookie是共享的
2、http 和https是否共享cookie
	有一个secure字段，来区分是否是否可以共享。

后端值：
	maxAge: 一个数字, 表示从 Date.now() 得到的毫秒数.
	expires: 一个 Date 对象, 表示 cookie 的到期日期 (默认情况下在会话结束时过期).
	path: 一个字符串, 表示 cookie 的路径 (默认是/).
	domain: 一个字符串, 指示 cookie 的域 (无默认值).
	secure: 一个布尔值, 表示 cookie 是否仅通过 HTTPS 发送 (HTTP 下默认为 false, HTTPS 下默认为 true). 阅读有关此参数的更多信息.
	httpOnly: 一个布尔值, 表示 cookie 是否仅通过 HTTP(S) 发送，, 且不提供给客户端 JavaScript (默认为 true).
	sameSite: 一个布尔值或字符串, 表示该 cookie 是否为 "相同站点" cookie (默认为 false). 可以设置为 'strict', 'lax', 'none', 或 true (映射为 'strict').
	signed: 一个布尔值, 表示是否要对 cookie 进行签名 (默认为 false). 如果为 true, 则还会发送另一个后缀为 .sig 的同名 cookie, 使用一个 27-byte url-safe base64 SHA1 值来表示针对第一个 Keygrip 键的 cookie-name=cookie-value 的哈希值. 此签名密钥用于检测下次接收 cookie 时的篡改.
	overwrite: 一个布尔值, 表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（无论路径或域）是否在设置此Cookie 时从 Set-Cookie 消息头中过滤掉.

前端：
	;path=path (例如 '/', '/mydir') 如果没有定义，默认为当前文档位置的路径。
	;domain=domain (例如 'example.com'， 'subdomain.example.com') 如果没有定义，默认为当前文档位置的路径的域名部分。与早期规范相反的是，在域名前面加 . 符将会被忽视，因为浏览器也许会拒绝设置这样的cookie。如果指定了一个域，那么子域也包含在内。
	;max-age=max-age-in-seconds (例如一年为60*60*24*365)
	;expires=date-in-GMTString-format 如果没有定义，cookie会在对话结束时过期
	这个值的格式参见Date.toUTCString() 
	;secure (cookie只通过https协议传输)

[Http Cookies 中 Max-age 和 Expires 有什么区别？](https://jpanj.com/2017/cookies-max-age-vs-expires/)