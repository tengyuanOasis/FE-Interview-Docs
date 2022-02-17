SessionStorage:
    当前打开的页面写入的数据可以获取到，关闭页面之后就删除了。
    同一个域名页面，不是当前的网页tab也不能取到对应的数据
localStorage:
    长期保存
都是字符串存储
大小： 传统说 5M，具体浏览器要看测试结果。
cookie限制在4KB
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)