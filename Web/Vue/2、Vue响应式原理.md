#### 01、Vue响应式

![](https://cn.vuejs.org/images/data.png)

1. 什么是响应式数据

> “响应式”，是指当**数据改变后**，Vue 会通知到使用该数据的代码。
>
> 例如，视图渲染中使用了数据，数据改变后，**视图也会自动更新**。
>
> Vue.js的响应式原理依赖于[Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)，这也是Vue.js不支持IE8 以及更低版本浏览器的原因。Vue通过设定对象属性的 setter/getter 方法来监听数据的变化，==通过getter进行依赖收集，而每个setter方法就是一个观察者==，在数据变更的时候通知订阅者更新视图。



2. 原理：

> Vuejs在实例化的过程中，会对实例化对象选项中的data属性进行遍历，并使用Object.defineProperty 把这些属性全部转为 getter/setter。
>
> 同时每一个实例对象都有一个watcher实例对象，他会在模板编译的过程中,用getter去访问data的属性，watcher此时就会把用到的data属性记为依赖，这样就建立了视图与数据之间的联系。
>
> 当之后我们渲染视图的数据依赖发生改变（即数据的setter被调用）的时候，watcher会对比前后两个的数值是否发生变化，然后确定是否通知视图进行重新渲染这样就实现了所谓的数据对于视图的驱动。
>
> 通俗地讲，它意味着我们在普通 HTML 模板中使用特殊的语法将 DOM “绑定”到底层数据。
>
> 一旦创建了绑定，DOM 将与数据保持同步。每当修改了数据，DOM 便相应地更新。这样我们应用中的逻辑就几乎都是直接修改数据了，不必与 DOM 更新搅在一起。这让我们的代码更容易撰写、理解与维护。



3. 详细流程

![image-20211216134508994](https://gitee.com/JuntengMa/imgae/raw/master/image-20211216134508994.png)

> 当Vue实例创建时，Observe通过`Object.defineProperty`劫持当前已存在的所有属性，并收集与该数据关联的的watcher，当用户取用数据时，调用getter函数，并添加判断有没有订阅者，无则添加watcher， 当用户修改data数据，调用到setter属性，同时调用Dep.notify()通知视图层数据更新，重新编译最新数据，完成视图更新

>  
>  名词解释
>
> - Observer ：<font color="red"> 数据劫持，将数据变为可观察的 </font>
> 	1. 通过递归调用Objet.defineProperety对所有已存在属性数据劫持
> 	2. getter： 获取数据时，调用getter，调用`Dep.depend()`添加当前依赖
> 	3. setter： 数据更新是，调用setter，修改data数据并调用`Dep.notify()`通知视图更新
> - Dep ：<font color="red"> 用于收集用户依赖（当data属性被页面使用，编译器会创建watcher，并存储在Dep中） </font>
> 	1. 当对data上的对象进行修改值的时候会触发它的setter，那么取值的时候自然就会触发getter事件，所以我们只要在最开始进行一次render，那么所有被渲染所依赖的data中的数据就会被getter收集到Dep的subs中去。在对data中的数据进行修改的时候setter只会触发Dep的subs的函数。
> - Watcher： <font color="red"> 订阅者, 负责监控数据变化并更新视图 </font>
> 	1. 在自身实例化时往属性订阅器(dep)里面添加自己
> 	2. 自身必须有一个update()方法
> 	3. 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退
> - Compile:  <font color="red"> 负责将 el 编译虚拟dom并最终渲染视图</font>

![image-20211217111652559](https://gitee.com/JuntengMa/imgae/raw/master/image-20211217111652559.png)

