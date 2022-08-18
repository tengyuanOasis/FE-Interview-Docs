直接看《深入浅出Vuejs》P175即可，下面内容为笔记

1、NextTick作用：

> 当数据更新，视图还未更新时做的一些操作（DOM实时更新，UI异步更新）

2、vue使用异步更新队列

> 在Vue中，当状态发生变化，watcher会收到通知，然后触发虚拟DOM重新渲染 ， 但是watcher触发渲染为异步任务，每当有需要重渲染时，watcher会被推送到任务队列并去重，然后在下一次事件循环中，Vuejs会让队列中的watcher触发渲染流程并清空队列

3、什么是事件循环？

https://raw.githubusercontent.com/JuntengMa/FE-review-doc/blob/main/Web/JavaScript/2%E3%80%81js%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6%EF%BC%88Event%20Loop%EF%BC%89.md

4、什么是执行栈？

https://raw.githubusercontent.com/JuntengMa/FE-review-doc/blob/main/Web/JavaScript/3%E3%80%81%E5%8F%AF%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87%E5%8F%8A%E4%BD%9C%E7%94%A8%E5%9F%9F.md

5、nextTick怎么做到`下次DOM更新周期`执行

> nextTick将更新DOM回调添加到微任务中执行

6、源码及备注

https://raw.githubusercontent.com/JuntengMa/learn-source-code/blob/master/vue/src/core/util/next-tick.js

7、nextTick流程

<img src="https://raw.githubusercontent.com/JuntengMa/image/master/image-20220214212138773.png" alt="image-20220214212138773" style="zoom:50%;" />