1、什么是单页应用

由一个外壳页面和多个页面片段组成的Web页面

> 优点：
>
> - 页面可局部刷新
> - 开发维护方便
> - 资源公用，减少冗余代码
>
> 缺点：
>
> - 首屏加载慢
> - 不利于seo优化

2、MVVM

> model —> view  —> viewModel
>
> https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html

3、自定义指令原理

4、nextTick

​	<img src="https://gitee.com/JuntengMa/imgae/raw/master/image-20220211180656521.png" alt="image-20220211180656521" style="zoom:50%;" />

- 作用

  > 在下次DOM更新循环之后执行延迟回调，用于修改数据后立即获取更新后的DOM

- 原理

  > nextTick底层使用了settimeout，属于宏任务，而

> # vue异步更新策略
>
> vuejs中，当状态发生改变，watcher会收到通知，然后触发虚拟DOM渲染流程。但是watcher触发该流程不是同步的，而是异步的。
>
> vuejs中有一个队列，将收到的通知的watcher实例添加到队列中缓存起来，然后在下一次事件循环中，才会让队列中的watcher触发渲染流程，清空队列

```

```

