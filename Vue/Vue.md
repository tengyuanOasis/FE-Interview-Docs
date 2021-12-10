## Vuejs

##### 1、Vue是什么

> Vue是一套用于构建用户界面的**渐进式框架**
>
> 渐进式框架：vue.js只提供了vue-cli生态中最核心的组件系统和双向数据绑定，不需要一次搞明白整个vue生态，

##### 2、Vue优缺点

> 优点：渐进式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据与视图分开
>
> 缺点：spa不利于Seo优化，不支持IE8以下，首屏加载时间长

##### 3、Vue & React区别

> 相同点：spa、虚拟dom、组件化、单向数据流、ssr
>
> 不同点：
>
> - Vue模板语法，React  jsx语法
> - Vue响应式处理数据，React手动（setState）
> - React单向数据绑定 ， Vue双向数据绑定
> - React用redux ， Vue用Vuex

##### 4、MVVM是什么？和MVC有何区别呢？

> https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html

##### 5、为什么vue的data是个函数并且返回一个对象呢？

> 当data是个函数的时候，组件每次调用data中的数据，data执行都会返回一个新的对象，防止多处调用造成数据污染

##### 6、vue修饰符

<img src="https://gitee.com/JuntengMa/imgae/raw/master/image-20211104102810965.png" alt="image-20211104102810965" style="zoom:80%;border-radius:20px" />

##### 7、Vue内置指令

> https://cn.vuejs.org/v2/api/#v-text

##### 8、组件之间的传值方式有哪些？

> 1、父传子：
>
> 	-	子组件用props接收
> 	-	[provide-inject传递](https://cn.vuejs.org/v2/api/#provide-inject)
>
> 2、子传父： 
>
> 	-	通过`this.$emit(‘xxxxx’,paload)`
> 	-	$refs 获取组件实例
>
> 3、兄弟组件：
>
> 	-	eventbus处理
> 	-	通过公共上层组件传递
>
> 4、使用Vuex全局状态管理
>
> 5、本地缓存

##### 9、Eventbus原理及优缺点

> 核心`export default EventBus = new Vue()  `，通过创建一个vue实例来存储需要通信的数据
>
> 通过发布订阅者模式，完成数据传递
>
> ```handlebars
> EventBus.$on("bMsg", (msg) => { this.msg = msg;}); //接收数据
> EventBus.$emit("aMsg", '要发送的数据'); 发送数据
> ```
>
> 优点：可以解决层层嵌套或同级组件数据传递的痛点
>
> 缺点：
>
> - vue是Spa单页应用，当某页面刷新，与之关联的bus也会被清除
> - 如果业务有反复操作的页面，EventBus在监听的时候就会触发很多次，也是一个非常大的隐患。这时候我们就需要好好处理EventBus在项目中的关系。通常会用到，在vue页面销毁时，同时移除EventBus事件监听。
> - 由于是都使用一个Vue实例，所以容易出现重复触发的情景，两个页面都定义了同一个事件名，并且没有用$off销毁（常出现在路由切换时）。

##### 10、 v-if和v-show有何区别？

> 相同点： 都能控制元素显隐
>
> 不同点：
>
> 1、v-if 为false的时候会直接销毁当前元素
>
> 2、v-show为false的时候指示隐藏了当前元素，类似`display:none`
>
> 故频繁或者大数量显隐使用`v-show`，否则使用`v-if`

##### 11、为什么v-if和v-for不建议用在同一标签

> 在Vue2中，`v-for`优先级是高于`v-if`的
>
> ```
> <div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
>     {{item}}
> </div>
> ```
>
> 上面的写法是`v-for`和`v-if`同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作

##### 12、Vue响应式数据理解

> vue响应式数据核心是运用了`Objec.defineProperty()`
>
> 当把js对象传入vue实例的data，vue会遍历这个对象所有`property`  ,   `Objec.defineProperty()`把所有的`property`都转为`getter / setter` , 使`property` 在被访问或修改的时候通知变更，然后view更新
>
> ![image-20211027170239541](https://gitee.com/JuntengMa/imgae/raw/master/image-20211027170239541.png)
>
> https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A6%82%E4%BD%95%E8%BF%BD%E8%B8%AA%E5%8F%98%E5%8C%96

##### 13、不需要响应式的数据应该怎么处理？

> 1、将数据定义在data return 之前即：
>
> ```
> data () {
>     this.list1 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
>     this.list2 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
>     this.list3 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
>     this.list4 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
>     this.list5 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
>     return {}
>  }
> ```
>
> 2、*Object.freeze()*
>
> ```
> data () {
>     return {
>         list1: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
>         list2: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
>         list3: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
>         list4: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
>         list5: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
>     }
>  }
> ```

14、双向数据绑定 & 单向数据流

> **双向数据绑定：**
>
> 1、Vue 提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定
>
> 2、`v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素
>
> 3、但 `v-model` 本质上不过是语法糖。它负责**监听用户的输入事件**（`@input`）以**更新数据**(`@change`)，并对一些极端场景进行一些特殊处理。
>
> **单向数据流：**
>
> 1、Vue父子组件之间数据传递，遵循单向数据流的，父组件可以向子组件传递props，但是子组件不能修改父组件传递来的props，子组件只能通过事件通知父组件进行数据更改
>
> **小结：**
>
> Vue双向数据绑定和单向数据流**并不冲突**，本质上Vue依然是单向数据流，v-model只是对表单事件做了一层封装用于更好的处理表单数据

##### 15、插槽

> 用于vue内容分发，将 `<slot>` 元素作为承载分发内容的出口。
>
> 语法：
>
> ​	  `<slot name="xxxx"></slot>`
>
> 使用：
>
> - 假如内容要插入的位置如下
>
>   ```vue
>   <p> 
>     	// 内容插入这里
>     	👉<slot name="slot-test">我是插槽默认值，在没有传递数据的时候显示</slot>👈 
>   </p>
>   ```
>
> - 2.6.0版本前
>
>   ```vue
>   <span slot="slot-test"> 我是要插入的内容 </span>
>   ```
>
> - 2.6.0版本以后（ Vue 提供了` v-slot`标签）
>
>   ```vue
>   <template v-slot:slot-test>
>   	<span> 我是要插入的内容 </span>
>   </template>
>   ```

##### 16、provide-inject

> 文档：https://cn.vuejs.org/v2/api/#provide-inject
>
> `provide` 选项允许我们指定我们想要**提供**给后代组件的数据/方法
>
> 然后在任何后代组件里，我们都可以使用 `inject` 选项来接收指定的我们想要添加在这个实例上的 property
>
> Demo:
>
> ```
> #parent
> provide: function () {
>   return {
>    getMap: this.getMap, //这样写是非响应式，provide数据变化，inject不会更新数据
>    responsive_getMap: this, //响应式数据需要把整个this结构传递给inject
>   }
> }
> ```
>
> ```js
> #children
> inject: ['getMap']
> 
> #or
> inject:{
> 	getMap1:{
> 		from:'getMap1',
> 		default:()=>{}
> 	}
>   responsive_getMap1:{
>     from:'responsive_getMap1',
> 		default:()=>{}
>   }
> }
> 
> ```

#####17、 父子组件生命周期顺序

> 父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted

##### 18、对象新属性无法更新视图，删除属性无法更新视图，为什么？怎么办？

> 原因：`Object.defineProperty`没有对对象的新属性进行属性劫持
>
> 对象新属性无法更新视图：使用`Vue.$set(obj, key, value)`，组件中`this.$set(obj, key, value)`
>
> 删除属性无法更新视图：使用`Vue.$delete(obj, key)`，组件中`this.$delete(obj, key)`

##### 19、为什么只对对象劫持，而要对数组进行方法重写？

> 因为对象最多也就几十个属性，拦截起来数量不多，但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案

##### 20、props怎么自定义验证

```
props: {
    num: {
      default: 1,
      validator: function (value) {
          // 返回值为true则验证不通过，报错
          return [
            1, 2, 3, 4, 5
          ].indexOf(value) !== -1
    }
    }
  }
```

##### 21、watch的immediate属性有什么用？

> 使用`immediate`为`true`时，会初始执行一次
>
> ```vue
> watch: {
>   searchInputValue:{
>     handler: 'getList',
>     immediate: true
>   }
> }
> ```

##### 22、computed如何实现传参？

```
// html
<div>{{ total(3) }}

// js
computed: {
    total() {
      return function(n) {
          return n * this.num
         }
    },
  }
```

##### 23、class 与 style 如何动态绑定

```
// 对象写法
<template>
  <div :class="{ active: isActive }"></div>
  <div :style="{ fontSize: fontSize }">
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      fontSize: 30
    }
  }
}
</script>

//数组写法
<template>
  <div :class="[activeClass]"></div>
  <div :style="[styleFontSize]">
</template>
<script>
export default {
  data() {
    return {
      activeClass: 'active',
      styleFontSize: {
        fontSize: '12px'
      }
    }
  }
}
</script>
```

##### 26、.sync用法

```vue
# parent
<dialog :visible.sync="dialogVisible" />
```

```js
# dialog
<el-dialog title="xxxx" :visible="visible" @close="close" />

close() {
	this.$emit("update:visible", false);
},
```

##### 27、过滤器（filter）

> https://cn.vuejs.org/v2/guide/filters.html
>
> 自定义过滤器，常用于一些常见的文本格式化
>
> 规则：`变量名 + “ | ” + 过滤器名`
>
> ```vue
> <!-- 在双花括号中 -->
> {{ message | capitalize }}
> <!-- 在 `v-bind` 中 -->
> <div v-bind:id="rawId | capitalize"></div>
> ```
>
> ```js
> filters: {
>   capitalize: function (value) {
>     if (!value) return ''
>     value = value.toString()
>     return value.charAt(0).toUpperCase() + value.slice(1)
>   }
> }
> ```

##### 28、Vue的虚拟DOM原理？

> 01、什么是虚拟dom
>
> 虚拟DOM简单来说就是一个js对象构建的树，用对象的属性描述dom节点，通过一些操作最后渲染为真正的DOM节点
>
> 02、虚拟DOM和真实DOM怎么映射的
>
> - js
>
> ```html
> <ul id='list'>
>   <li class='item'>Item 1</li>
>   <li class='item'>Item 2</li>
>   <li class='item'>Item 3</li>
> </ul>
> ```
>
> - Virtual Dom
>
> ```js
> var element = {
> 	tagName:'ul',
> 	props:{
> 		id:'list'
> 	},
> 	children:[
> 	{tagName:'li',props:{class:'item'},children:['Item1']},
> 	{tagName:'li',props:{class:'item'},children:['Item2']},
> 	{tagName:'li',props:{class:'item'},children:['Item3']},
> 	]
> }
> ```
>
> 03、为什么要使用虚拟DOM
>
> - 操作原生DOM慢，且消耗性能，js运行效率高
> - Virtual DOM的优势不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、高效的更新。

##### 29、Vue Diff算法

> 在页发生大量重绘及回流的时候用于计算DOM节点变化，最后只修改发生变化的DOM节点，而不用对整DOM进行更新
>
> 虚拟DOM会先生成一棵virtual DOM，当virtual DOM某个节点发生改变的时候会生成新的Vnode,然后新旧Vnode进行对比，发现有
>
> 修改的地方再去修改真实DOM

20、Vue的模板编译原理？

21、Vue的computed和watch的原理？

22、Vue.set方法的原理？

23、Vue.delete方法的原理？

24、Vue.observable你有了解过吗？说说看 

> vue2.6发布一个新的API，可以处理一些简单的跨组件共享数据状态的问题。

24、nextTick原理













https://juejin.cn/post/7023197006998978597#heading-73

https://juejin.cn/post/6984210440276410399#heading-55