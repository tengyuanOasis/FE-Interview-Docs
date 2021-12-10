---
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2020-11-26
title: a标签的url怎么会乱码嘞？？？？
categories: JavaScript
tags: JavaScript
top:
permalink:
---

最近写博客发现自己博客链接经常是一堆乱码 ，查了下资料发现是浏览器会将特殊字符转义，想要变回我们需要的样子需要对这个字符串解码~

<!-- more -->

类似下面这样 👿👿👿👿👿：
![](https://s3.ax1x.com/2020/11/26/D0M9N8.png)

具体百度过程 😁 和调试过程 🙄（调试个棒槌）就不细说了 ， 这里是我得到的解决方案 ：
通过`decodeURI()`对链接进行解码 ， 我是这么写的

```ejs
 <a href="<%= decodeURI(page.permalink) %>" target="_blank">
    <%= decodeURI(page.permalink) %>
  </a>
```

所以最后我的链接就可以变回我需要的样子：
![](https://s3.ax1x.com/2020/11/26/D0QdZq.png)

诶 ，说到这里就有人问我了：马老湿 ， 你这个 `decodeURI` 是干肾么用的呀？

我就啪的一下，很快啊~ ，给你甩出一个闪电五连鞭：

- [《JS 对 url 进行编码和解码（三种方式）》](https://segmentfault.com/a/1190000013236956)
- [《JS 对 url 进行编码和解码（三种方式）》](https://segmentfault.com/a/1190000013236956)
- [《JS 对 url 进行编码和解码（三种方式）》](https://segmentfault.com/a/1190000013236956)
- [《JS 对 url 进行编码和解码（三种方式）》](https://segmentfault.com/a/1190000013236956)
- [《JS 对 url 进行编码和解码（三种方式）》](https://segmentfault.com/a/1190000013236956)

并告诉你这个知识点我也是刚学从他这边学的 ， 而且年轻人一定要讲武德 ~~~

🤠👹🧐👻😼😽🙀😿😾🐱‍👤🐱‍🏍🐱‍💻🐱‍🐉🐱‍👓🐱‍🚀🙈🙉🙊🐵🐶🐺🐱🦁🦁🦒🦊
