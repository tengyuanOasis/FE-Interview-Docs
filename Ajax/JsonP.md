---
cover: https://source.unsplash.com/random?count=6/1600x900
coverWidth: 1200
coverHeight: 750
title: JSONP跨域请求及其原理
categories: Ajax 
tags: JSONP 
top:
---
JSONP及其原理

<!--more-->

##### 1、JSONP的产生

**背景:**

- 因为浏览器同源策略限制,AJAX跨域请求不到信息

- Web页面上面调用js文件不受是否跨域影响(类似的还有`<script>`,`<IMG>`,`<iframe>`)

- 于是可以判断，当前阶段如果想通过纯web端（ActiveX控件、服务端代理、Web socket等方式不算）跨域访问数据就只有一种可能，那就是在远程服务器上设法把数据装进js格式的文件里，供客户端调用和进一步处理；

- 恰巧我们已经知道有一种叫做JSON的纯字符数据格式可以简洁的描述复杂数据，更妙的是JSON还被JS原生支持，所以在客户端几乎可以随心所欲的处理这种格式的数据；

- 客户端在对JSON文件调用成功之后,也就获得了自己所需要的数据,剩下的就是按自己的需求进行处理和展现了

- 为了方便客户使用数据,逐渐形成了一种非正式传输协议---JSONP.

  > 该协议允许用户传递一个callback参数给服务端,然后服务端返回数据时会将这个callback参数坐会函数名来包裹JSON数据,这样客户端就可以随意订制自己的函数来自动处理返回函数了

##### 2、JSONP弊端

- 只能发送get请求
- 需要服务端配合

##### 3、JSON流程

- 先定义好全局函数
- 动态创建script标签
- 给服务器提供事先创建好的容器
- 服务器获取容器
- 将内容填充进容器

##### 4、[代码实现]:https://github.com/JuntengMa/JavaScript/tree/master/JsonP 



