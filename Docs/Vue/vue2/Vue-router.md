# Vue router

Vue-router通过使用浏览器history.pushState方法可以改变地址栏的路径而不用刷新页面，
所以这使得我们只需要在第一次进入页面的时候去请求一次html，后续的页面呈现则交由js来控制，根据不同url路径来加载不同的js模块。 (路由懒加载)

#### 1、路由懒加载原理

> 当打包构建应用时，假如不做代码分割，JavaScript 包会变得非常大，影响页面加载。
>
> 所以我们需要把不同路由对应页面组件进行代码分割，当路由访问的时候再加载对应组件;

#### 2、window.histiry

https://blog.csdn.net/vipshop_fin_dev/article/details/108043500

https://juejin.cn/post/6948746074504986655

#### 3、hash模式和History模式区别

##### history和hash的差异主要有以下点：

- history和hash都是利用浏览器的`pushState（）、replaceState （） `实现前端路由，通过这两个方法改变url ， 页面不会刷新
  - history是利用浏览历史记录栈的API实现
  - hash是监听location对象hash值变化事件来实现
- history的url没有’#'号，hash反之
- history修改的url可以是同域的任意url，hash是同文档的url
- 相同的url，history会触发添加到浏览器历史记录栈中，hash不会触发。

##### history和hash的优点和缺点：

- history比hash的url美观（没有’#'号）
- history修改的url可以是同域的任意url，hash则只能是同文档的url
- history模式往往需要后端支持，如果后端nginx没有覆盖路由地址，就会返回404，hash因为是同文档的url，即使后端没有覆盖路由地址，也不会返回404
- hash模式下，如果把url作为参数传后端，那么后端会直接从’#‘号截断，只处理’#'号前的url，因此会存在#后的参数内容丢失的问题，不过这个问题hash模式下也有解决的方法。

#### 4、history模式为什么需要后端支持

> 假设应用地址为`abc.com`，服务端不加额外的配置。当通过`abc.com`来访问时，是没有问题的，可以正常加载到html文件，之后通过route-link或者router.api来跳转也不会有问题，因为之后都不会刷新页面请求html，只是通过`history.pushState`或者`history.replaceState`来改变history记录，修改地址栏地址而已；
>
> 但是如果是直接访问子路由`abc.com/test`时就会有问题，`/test`是子路由名，但是服务器中并不存在该目录，就无法索引到html文件，此种情况下就会出现404，所以不管是访问什么路径，都应该加载根目录的html文件，因为`/xxx/yyy`对我们应用来讲是子路由路径而已。

#### 5、全局路由导航守卫

demo: 

```js
router.beforeEach(from , to ,next){ ... }
```

简单来说就是路由跳转过程中的一些钩子函数，这个过程分 前、中、后三个小过程，每个过程我们都可以做一些操作

###### beforeEach(to,from,next):

> 在路由跳转前触发，参数包括to,from,next（参数会单独介绍）三个，这个钩子作用主要是用于==登录验证==，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚。

###### beforeResolve(to,from,next):

> 这个钩子和beforeEach类似，也是路由跳转前触发，参数也是to,from,next三个，和beforeEach区别官方解释为：
>
> 用于在路由解析完毕，但在路由组件被渲染之前进行操作。
>
> 它的作用是在路由解析阶段完成后，但在路由组件实际渲染之前执行一些逻辑操作，比如加载数据、进行权限验证等。
>
> 即在 beforeEach 和 组件内beforeRouteEnter 之后，afterEach之前调用。
>
> 流程： `beforeEach ---> 组件内beforeRouteEnter ----> beforeResolve  —->afterEach`

###### afterEach(to,from):

> 和beforeEach相反，他是在**路由跳转完成后**触发，参数包括to,from没有了next（参数会单独介绍）,他发生在beforeEach和beforeResolve之后，beforeRouteEnter（组件内守卫，后讲）之前。
>
> 流程： `beforeEach || beforeResolve  —-> afterEach ----> beforeRouteEnter`

###### 组件内守卫:

```js
	 beforeRouteEnter(to, from, next) {
			next();
			console.log("进入该路由时执行 ");
		},
		beforeRouteUpdate(to, from, next) {
			console.log("该路由参数更新时执行 ");
			next();
		},
		beforeRouteLeave(to, from, next) {
			console.log("离开该路由时执行 ");
			next();
		}
```





