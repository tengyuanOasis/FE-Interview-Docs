---
cover: https://source.unsplash.com/random?count=5/1600x900
coverWidth: 1200
coverHeight: 750
title: JsonServer
categories:	tools
tags: JsonServer
top:
---
# json-server 

json-server 是什么？如何使用？

> json-server 是一个 npm 管理的包，可以提供前端提供mock的功能。

<!--more-->

## json-server 的使用

#### 1/安装

全局安装:
```
- yarn global add json-server

- npm install -g json-server 
```

#### 2.提供一个json数据的文件

#### 3.使用json-server命令开启一个端口服务

```
json-server --watch --port 3000 test.json
```

#### 4.接口的使用:


> 1. 列表

> 2. 详情

> 3. 分页

> 4. 排序

> 5. 全局查询
需要使用第三方接口调试工具的(postman)

> 6. 提供 增加（post）、

> 7. 删除(delete)、

> 8. 更新(put)



我们常见的接口：都是 get 或者 post 请求一个 url 地址即可。 
json-server 除了常见的 get 或者 post ，还提供了诸如 put 、delete 这样的HTTP请求方式，**对于这种使用 http请求方式 + 请求url地址 形成的 api ，我们一般叫做 RESTFul 风格的api**, *RESTFul 风格的api底层遵循的是 REST 架构这种协议。*







倒叙:http://localhost:3000/news?sort=id&order=desc 
