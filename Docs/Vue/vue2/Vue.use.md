<!-- @format -->

1、Vue.use 是什么

> `用于安装Vue插件`，其实就是调用 **插件里的 install 方法**

2、Vue.use 用来做什么

> 插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：
>
> 1. 添加全局方法或者 property。如：[vue-custom-element](https://raw.githubusercontent.com/karol-f/vue-custom-element)
> 2. 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://raw.githubusercontent.com/vuejs/vue-touch)
> 3. 通过全局混入来添加一些组件选项。如 [vue-router](https://raw.githubusercontent.com/vuejs/vue-router)
> 4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
> 5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-rout](https://raw.githubusercontent.com/vuejs/vue-router)

3、Vue.use 原理

> 如下图，
>
> 1、判断是否已注册插件
>
> 2、参数中添加 this ， 为后续 apply 做准备 ， args = [this , arguments]
>
> 3、调用 plugin 中的 install 方法

![image-20220223204202586](https://raw.githubusercontent.com/tengyuanOasis/image/master/202202232042730.png)

4、插件开发

https://cn.vuejs.org/v2/guide/plugins.html
