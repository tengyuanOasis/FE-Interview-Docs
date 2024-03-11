<!-- @format -->

直接看《深入浅出 Vuejs》P175 即可，下面内容为笔记

1、NextTick 作用：

> 当数据更新，视图还未更新时做的一些操作（DOM 实时更新，UI 异步更新）

2、vue 使用异步更新队列

> 在 Vue 中，当状态发生变化，watcher 会收到通知，然后触发虚拟 DOM 重新渲染 ， 但是 watcher 触发渲染为异步任务，每当有需要重渲染时，watcher 会被推送到任务队列并去重，然后在下一次事件循环中，Vuejs 会让队列中的 watcher 触发渲染流程并清空队列

3、什么是事件循环？

https://raw.githubusercontent.com/tengyuanOasis/FE-review-doc/blob/main/Web/JavaScript/2%E3%80%81js%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6%EF%BC%88Event%20Loop%EF%BC%89.md

4、什么是执行栈？

https://raw.githubusercontent.com/tengyuanOasis/FE-review-doc/blob/main/Web/JavaScript/3%E3%80%81%E5%8F%AF%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%8A%E4%BD%9C%E7%94%A8%E5%9F%9F.md

5、nextTick 怎么做到`下次DOM更新周期`执行

> nextTick 将更新 DOM 回调添加到微任务中执行

6、源码及备注

https://raw.githubusercontent.com/tengyuanOasis/learn-source-code/blob/master/vue/src/core/util/next-tick.js

7、nextTick 流程

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20220214212138773.png" alt="image-20220214212138773" style="zoom:50%;" />
