<!-- @format -->

##### 1、Vue 是什么

> Vue 是一套用于构建用户界面的**渐进式框架**
>
> **渐进式框架**：Vue.js 只提供了 vue-cli 生态中最核心的**组件系统和双向数据绑定**，不需要一次搞明白整个 Vue 生态。
>
> 可以按需引入，如刚开始只需要vue基础包，随着项目增大，需要逐步加入vue-router、vuex等其他库

##### 2、Vue 优缺点

> 优点：渐进式，组件化，轻量级，虚拟 dom，响应式，单页面路由，数据与视图分开
>
> 缺点：spa 不利于 Seo 优化，不支持 IE8 以下，首屏加载时间长

##### 3、Vue & React 区别

> 相同点：spa、虚拟 dom、组件化、单向数据流、ssr
>
> 不同点：
>
> - Vue 模板语法，React jsx 语法
> - Vue 响应式处理数据，React 手动（setState）
> - React 单向数据绑定 ， Vue 双向数据绑定
> - React 用 redux ， Vue 用 Vuex

##### 4、MVVM 是什么？和 MVC 有何区别呢？

> https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
>
> [<<MVC 与三层架构>>](https://juejin.im/post/6844903479568252935)
>
> [<<MVC，MVP 和 MVVM 的图示>>](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

##### 5、Vue 中当前组件所有属性快速传递给子组件

> v-bind

**demo:**

```vue
<el-button
	:key="item.label" 
	v-if="item.disabled !== true"
	style="margin: 0 5px"
	v-bind="item.data"
	@click="handleClickHeadBtn(item.params)"
>
    {{ item.label }}
    </el-button>
```

```js
data:{
    type:'primary',
    size:"small",
     ...
}
```

##### 6、Vue 修饰符

![image-20240314000041241](https://raw.githubusercontent.com/tengyuanOasis/image/master/Vue修饰符.png)

![image-20240314000041241](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202403140000276.png)

##### 7、Vue 内置指令

> https://cn.vuejs.org/v2/api/#v-text

![image-20240314001359404](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202403140014262.png)

##### 8、组件之间的传值方式有哪些？

> 1、父传子：
>
> - 子组件用 props 接收
> - [provide-inject 传递](https://v2.cn.vuejs.org/v2/api/#provide-inject)

> 2、子传父：
>
> - 通过`this.$emit(‘xxxxx’,paload)`
> - $refs 获取组件实例

> 3、兄弟组件：
>
> - eventbus 处理
> - 通过公共上层组件传递

> 4、使用 Vuex 全局状态管理
>
> 5、本地缓存

##### 9、Eventbus 原理及优缺点

> **核心**
>
> `export default EventBus = new Vue()  `，通过创建一个 Vue 实例来存储需要通信的数据。
>
> 通过发布订阅者模式，完成数据传递
>
> - EventBus.$on("bMsg", (msg) => { this.msg = msg;}); //接收数据
> - EventBus.$emit("aMsg", '要发送的数据'); //发送数据
>
> **优点**：
>
> - 可以解决层层嵌套或同级组件数据传递的痛点
>
> **缺点**：
>
> - Vue 是 Spa 单页应用，当某页面刷新，与之关联的 bus 也会被清除
> - 如果业务有反复操作的页面，EventBus 在监听的时候就会触发很多次，也是一个非常大的隐患。这时候我们就需要好好处理 EventBus 在项目中的关系。通常会用到，在 Vue 页面销毁时，同时移除 EventBus 事件监听。
> - 由于是都使用一个 Vue 实例，所以容易出现重复触发的情景，两个页面都定义了同一个事件名，并且没有用$off 销毁（常出现在路由切换时）。

##### 10、` v-if`和`v-show`有何区别？

- 相同点：

  都能控制元素显隐

- 不同点：

  1、v-if 为 false 的时候会直接<font color="red"> 销毁  </font>当前元素;

  2、v-show 为 false 的时候指示隐藏了当前元素，类似`display:none`;

- 故频繁或者大数量显隐使用`v-show`，否则使用`v-if`

##### 11、为什么`v-if`和`v-for`不建议用在同一标签

- 在 Vue2 中，`v-for`优先级是高于`v-if`的 ，当 v-for 和 v-if 同时存在，优先执行 v-for，再执行 v-if，会增加无用操作

  demo：

  下面的代码会先把 7 个元素都遍历出来，然后再一个个判断是否为 3，并把 3 给==销毁==，这样的坏处就是，渲染了无用的 3 节点，增加无用的 dom 操作

  ```vue
  <div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
   {{item}}
  </div>
  ```

- 解决方案：
  1.  `computed `过滤
  2.  `template`嵌套

##### 12、Vue 响应式数据理解

> Vue 响应式数据核心是运用了`Objec.defineProperty()` ， 当把 js 对象传入 Vue 实例的 data，Vue 会遍历这个对象所有`property` , 
>
> `Objec.defineProperty()`把所有的`property`都转为`getter / setter` , 使`property` 在被访问或修改的时候通知变更，然后 view 更新
>
> Vue 数据双向绑定原理是通过 `数据劫持` + `发布者-订阅者模式` 的方式来实现的，首先是通过 `ES5` 提供的 `Object.defineProperty()` 方法来劫持（监听）各属性的 **getter、setter**，并在当监听的属性发生变动时通知订阅者，是否需要更新，若更新就会执行对应的更新函数。
>
> 常见的`基于数据劫持`的**双向绑定**有两种实现
>
> - 一个是Vue2.x在用的 `Object.defineProperty`
> - 一个是ES2015中新增的 `Proxy`，而在Vue3.0版本后加入Proxy从而代替Object.defineProperty
>
> ![image-20240314145831197](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202403141458015.png)
>
> https://cn.vuejs.org/v2/guide/reactivity.html#%E5%A6%82%E4%BD%95%E8%BF%BD%E8%B8%AA%E5%8F%98%E5%8C%96

##### 13、不需要响应式的数据应该怎么处理？

1. 将数据定义在 data return 之前即：

```js
data () {
   this.list1 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
   this.list2 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
   this.list3 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
   this.list4 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
   this.list5 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
   return {}
}
```

2. `Object.freeze()`

用于冻结某对象，冻结之后将无法再改变对象属性

```js
data () {
 return {
     list1: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
     list2: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
     list3: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
     list4: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
     list5: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
 }
}
```

##### 14、双向数据绑定 & 单向数据流

- **双向数据绑定：**

> 1、Vue 提供了 `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定
>
> 2、`v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素
>
> 3、但 `v-model` 本质上不过是语法糖。它负责**监听用户的输入事件**（`@input`）以**更新数据**(`@change`)，并对一些极端场景进行一些特殊处理。

- **单向数据流：**

> 1、Vue 父子组件之间数据传递，遵循单向数据流的，父组件可以向子组件传递 props，但是子组件不能修改父组件传递来的 props，子组件只能通过事件通知父组件进行数据更改

- **小结：**

> Vue 双向数据绑定和单向数据流**并不冲突**，本质上 Vue 依然是单向数据流，v-model 只是对表单事件做了一层封装用于更好的处理表单数据

##### 15、插槽

用于 Vue 内容分发，将 `<slot>` 元素作为承载分发内容的出口。

> **1. 语法**：
>
>  `<slot name="xxxx"></slot>`
>
> **2. 使用**：
>
> - 假如内容要插入的位置如下
>
>   ```vue
>   <p> 
>       	// 内容插入这里
>       	👉<slot name="slot-test">我是插槽默认值，在没有传递数据的时候显示</slot>👈 
>   </p>
>   ```
>
> - 2.6.0 版本前
>
>   ```vue
>   <span slot="slot-test"> 我是要插入的内容 </span>
>   ```
>
> - 2.6.0 版本以后（ Vue 提供了` v-slot`标签）
>
>   ```vue
>   <template v-slot:slot-test>
>   	<span> 我是要插入的内容 </span>
>   </template>
>   ```

##### 16、Provide-inject

文档：https://cn.vuejs.org/v2/api/#provide-inject

`provide` 选项允许我们指定我们想要提供给后代组件的数据/方法

然后在任何后代组件里，我们都可以使用 `inject` 选项来接收指定的我们想要添加在这个实例上的 property

Demo:

```js
//parent component
provide: function () {
    return {
    getMap: this.getMap,  //这样写是非响应式，provide数据变化，inject不会更新数据
    responsive_getMap: this, //响应式数据需要把整个this结构传递给inject
    }
}
```

```js
//child component

inject: ['getMap']

# or

inject: {
    getMap1: {
        from: 'getMap1',
        default: () => {}
    },
    responsive_getMap1: {
        from: 'responsive_getMap1',
        default: () => {}
    }
}
```

#####17、 父子组件生命周期顺序

子组件创建时间： 父组件`beforeMounted` 和 `Mounted`之间

> 总结：
>
> 执行的先后顺序为 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted 。
>
> ##### 为什么这么设计？
>
> 一、父子组件异步传值的坑
>
> 子组件的生命周期只会执行一次，但是当子组件渲染的时候父组件的数据还没接受完就会造成子组件没有任何内容渲染。
>
> 二、解决父子组件异步传值的方法
>
> 1. 给子组件添加渲染条件，使用v-if，当父组件数据接收完毕后在渲染子组件。
> 2. 在子组件中添加watch监听，当父组件数据传输过来时，改变原有的默认数据，重新渲染页面。

代码： https://raw.githubusercontent.com/tengyuanOasis/Vue-test/blob/main/learn-LifeCycle/index.html

##### 18、对象<font color="red">新</font>属性无法更新视图，删除属性无法更新视图，为什么？怎么办？

> 原因：
>
> - `Object.defineProperty`没有对`对象`的新属性进行属性劫持
>
> 方案：
>
> - 对象新属性无法更新视图：使用`Vue.$set(obj, key, value)`，组件中`this.$set(obj, key, value)`
>
> - 删除属性无法更新视图：使用`Vue.$delete(obj, key)`，组件中`this.$delete(obj, key)`

##### 19、为什么只对对象 ==数据劫持==，而要对数组进行方法重写？

- 因为对象最多也就几十个属性，拦截起来数量不多，但是数组可能会有几百几千项，拦截起来非常耗性能，所以直接重写数组原型上的方法，是比较节省性能的方案
- 修改数组数据` arr[index] = xxx`无法更新视图解决方案：
  - 使用数组的 splice 方法，`arr.splice(index, 1, item)`
  - 使用`Vue.$set(arr, index, value)`

##### 20、props 怎么自定义验证

```js
props: {
    num: {
      default: 1,
      validator: function (value) {
        // 返回值为true则验证不通过，报错
        return [1, 2, 3, 4, 5].indexOf(value) !== -1
    	}
    }
}
```

##### 21、watch 的 immediate 属性有什么用？

使用`immediate`为`true`时，会初始执行一次

```js
watch: {
   searchInputValue:{
     handler: 'getList',
     immediate: true
   }
}
```

##### 22、computed 如何实现传参？

```vue
// html
<div>{{ total(3) }}</div>

// js computed: { total() { return function(n) { return n * this.num } }, }
```

##### 23、class 与 style 如何动态绑定?

- 动态 class**对象**：`<div :class="{ 'is-active': true, 'red': isRed }"></div>`
- 动态 class**数组**：`<div :class="['is-active', isRed ? 'red' : '' ]"></div>`
- 动态 style**对象**：`<div :style="{ color: textColor, fontSize: '18px' }"></div>`
- 动态 style**数组**：`<div :style="[{ color: textColor, fontSize: '18px' }, { fontWeight: '300' }]"></div>`

##### 26、.sync 用法

parent 👇

```vue
<dialog :visible.sync="dialogVisible" />
```

child 👇

```vue
<el-dialog title="xxxx" :visible="visible" @close="close" />
close() { this.$emit("update:visible", false); },
```

##### 27、过滤器（filter）

https://cn.vuejs.org/v2/guide/filters.html

自定义过滤器，常用于一些常见的文本格式化

规则：`变量名 + “ | ” + 过滤器名`

```vue
<!-- 在双花括号中 -->
<div>{{ message | capitalize }}</div>
<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | capitalize"></div>
```

```js
filters: {
  capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

##### 28、Vue 的虚拟 DOM 原理？

###### 28-1、什么是虚拟 dom?

虚拟 DOM 简单来说就是一个 js 对象构建的树，用对象的属性描述 dom 节点，通过一些操作最后渲染为真正的 DOM 节点

###### 28-2、虚拟 DOM 和真实 DOM 怎么映射的?

- js

  ```html
  <ul id="list">
  	<li class="item">Item 1</li>
  	<li class="item">Item 2</li>
  	<li class="item">Item 3</li>
  </ul>
  ```

- Virtual Dom

  ```js
  var element = {
  	tagName: 'ul',
  	props: {
  		id: 'list'
  	},
  	children: [
  		{ tagName: 'li', props: { class: 'item' }, children: ['Item1'] },
  		{ tagName: 'li', props: { class: 'item' }, children: ['Item2'] },
  		{ tagName: 'li', props: { class: 'item' }, children: ['Item3'] }
  	]
  };
  ```

###### 28-3、为什么要使用虚拟 DOM

- 操作原生 DOM 慢，且消耗性能，js 运行效率高
- Virtual DOM 的优势不在于单次的操作，而是在大量、频繁的数据更新下，能够对视图进行合理、高效的更新。

##### 29、Vue Diff 算法

- 什么是 diff 算法

  > 在页发生大量重绘及回流的时候用于计算 DOM 节点变化，最后只修改发生变化的 DOM 节点，而不用对整 DOM 进行更新
  >
  > 1. 回流：浏览器重新渲染部分或全部文档的过程
  >
  >    如页面重新渲染、修改元素大小位置等
  >
  > 2. 重绘：当页面中元素<font color="red">样式</font>的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。
  >
  > 3. 详细： https://juejin.cn/post/6844903569087266823

- 原理

  > 虚拟 DOM 会先生成一棵 virtual DOM，当 virtual DOM 某个节点发生改变的时候会生成新的 Vnode,然后新旧 Vnode 进行对比，发现有修改的地方再去修改真实 DOM

##### 30、element 自定义表单校验

```js
{
    validator: (rule, value, callback) => {
        if (!Boolean(value)) {
            callback(new Error("请输入用户评分阈值"));
        }
        if (value > 100) {
            callback(new Error("用户评分阈值不能大于100"));
        }
        callback();
    },
    trigger: "blur",
},
```

##### 31、NextTick 用处

- Vue 在更新 DOM 时是异步执行的 , 只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更

- 同一事件循环内`多次修改，`会统一`进行一次`视图更新(☝☝☝ 上句话的通俗解释)

- 使用场景：

  数据更新，视图还未更新，我们需要拿到最新视图数据的时候使用

  **demo**：

  ```vue
  <div ref="testDiv">{{name}}</div>
  
  name: '小林' this.name = '林三心' console.log(this.$refs.testDiv.innerHTML) // 小林
  this.$nextTick(() => { console.log(this.$refs.testDiv.innerHTML) // 林三心 })
  ```

##### 32、生命周期

![image-20211213161041290](https://raw.githubusercontent.com/tengyuanOasis/image/master/image-20211213161041290.png)

##### 33、Vue 能否在==data==里面直接使用 props 传过来的值，为什么？

> 可以直接使用，因为在 Vue 源码中使用`initState( )`函数初始化 Vue 组件实例状态，其中初始化顺序依次为：
>
> <font color="blue"> </font><font color="blue">props</font> —> <font color="red">methods </font> —><font color="blue"> data</font> —> <font color="red">computed</font>—><font color="blue"> watch</font>

```JS
export function initState(vm) {
  // 获取传入的数据对象
  const opts = vm.$options;

  if (opts.props) {
    initProps(vm);
  }

  if (opts.methods) {
    initMethod(vm);
  }

  if (opts.data) {
    // 初始化data
    initData(vm);
  }

  if (opts.computed) {
    initComputed(vm);
  }

  if (opts.watch) {
    initWatch(vm);
  }
}
```

##### 34、为什么 Vue 的==data==是个函数并且返回一个对象呢？

> 当 data 是个函数的时候，组件每次调用 data 中的数据，data 执行都会返回一个新的对象，防止多处调用造成数据污染
>
> vue 组件为了保证每个实例上的 data 数据的独立性，规定了必须使用函数，而不是对象。 因为使用对象的话，每个实例（组件）上使
>
> 用的 data 数据是相互影响的，这当然就不是我们想要的了。 对象是对于内存地址的引用，直接定义个对象的话组件之间都会使用这
>
> 个对象，这样会造成组件之间数据相互影响。

##### 35、Vue 中为什么可以直接使用`this.name='测试'`直接访问或修改==data==中的数据

> Vue 实例中初始化`data`数据的时候，使用 Object.defineProperty 对数据做了一层代理，==将数据都挂载在 Vue 实例上==，最后结果形成如 `this.name` ==> `this._data .name`，我们可以使用 this.a 来访问 this.\_data.a

```js
// 数据代理
function proxy(object, sourceKey, key) {
	Object.defineProperty(object, key, {
		get() {
			return object[sourceKey][key];
		},
		set(newValue) {
			object[sourceKey][key] = newValue;
		}
	});
}
```

https://juejin.cn/post/7023197006998978597#heading-73

https://juejin.cn/post/6984210440276410399#heading-55

##### 36、Vue+elememt table 表单校验

```vue
<el-form ref="work_plan_form" :model="dataInfo" :rules="rules">
        <el-table :data="dataInfo.workPlan" style="width: 100%">
          
          <el-table-column label="序号" type="index" align="center" />
          
          <el-table-column label="班次" align="center" prop="name">
            <template slot-scope="{ row, $index }">
              <el-form-item :prop="`workPlan.${$index}.name`" :rules="rules.name">
                <el-input v-model="row.name" placeholder="" maxlength="20"></el-input>
              </el-form-item>
            </template>
          </el-table-column>

          <el-table-column label="服务时间" align="center" prop="serviceTime">
            <template slot-scope="{ row, $index }">
              <el-form-item
                :prop="`workPlan.${$index}.serviceTime`"
                :rules="rules.serviceTime"
              >
                <el-time-picker
                  @change="(val) => serviceTimeChange(val, row)"
                  style="width: 400px"
                  value-format="HH:mm"
                  is-range
                  v-model="row.serviceTime"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围"
                />
              </el-form-item>
            </template>
          </el-table-column>

          <el-table-column label="顾问" align="center" prop="adviser">
            <template slot-scope="{ row, $index }">
              <el-form-item :prop="`workPlan.${$index}.adviser`" :rules="rules.adviser">
                <el-select v-model="row.adviser">
                  <el-option
                    v-for="item in []"
                    :key="item.dictValue"
                    :label="item.dictLabel"
                    :value="item.dictValue"
                  />
                </el-select>
              </el-form-item>
            </template>
          </el-table-column>
          
        </el-table>
      </el-form>
```

##### 37、keep-alive 原理

> https://juejin.cn/post/6844903837770203144
>
> `<keep-alive>` 是 Vue 提供的一个抽象组件，用于缓存动态组件或者通过 `include` 和 `exclude` 属性匹配的组件。其原理主要是利用了 Vue 的虚拟 DOM（Virtual DOM）和组件生命周期钩子来实现。
>
> 具体来说，当一个组件被包裹在 `<keep-alive>` 中时，Vue 会将该组件的虚拟 DOM 节点存储在内存中，而不是销毁该组件的实例。这样，在组件被切换出去后，组件实例不会被销毁，而是保留在内存中，等待再次被切换到时可以快速恢复。
>
> 当被缓存的组件再次被激活时，Vue 会触发该组件的 `activated` 生命周期钩子，并将之前存储的虚拟 DOM 节点重新渲染到页面上。在这个过程中，Vue 会通过虚拟 DOM 的比对算法（Diff 算法）将之前缓存的虚拟 DOM 节点与当前页面状态进行比对，只更新变化的部分到页面上，而不是重新渲染整个组件。
>
> 通过这种方式，`<keep-alive>` 实现了组件的缓存和复用，可以提高页面切换时的性能，减少不必要的重复渲染和组件实例的创建销毁，同时可以保留组件的状态和数据，提升用户体验。
>
> 总的来说，`<keep-alive>` 的原理是利用虚拟 DOM 和组件生命周期钩子，将组件的虚拟 DOM 节点存储在内存中，并在需要时重新渲染到页面上，从而实现组件的缓存和复用。

##### 38、为什么 vue 先初始化 mixin

>
> 在 Vue 中，mixin 是一种重用 Vue 组件选项的机制。当你使用 mixin 将选项混入到组件中时，这些选项会在组件实例化之前被合并到组件的选项中，然后应用到组件实例中。
>
> 因此，Vue 先初始化 mixin 的原因主要是为了确保 mixin 中定义的选项能够在组件实例化之前被合并到组件选项中，以确保组件实例化时能够正常地应用这些选项。
>
> 另外，Vue 会在应用 mixin 时进行选项的合并，这意味着如果 mixin 中的选项与组件自身的选项发生了冲突，Vue 会进行适当的合并或覆盖，以确保组件能够正常工作。因此，在初始化 mixin 时，Vue 需要先处理 mixin 中的选项，然后再处理组件自身的选项，以确保 mixin 中的选项能够正确地被应用到组件中。
>
> 综上所述，Vue 先初始化 mixin 主要是为了确保 mixin 中的选项能够在组件实例化之前被正确地合并和应用到组件中，以保证组件的正常工作。

##### 39、为什么 vue 中可以直接用 this 调用 methods

>
> 在 Vue 中，组件实例的方法（即 `methods` 中定义的方法）是可以通过 `this` 直接调用的。
>
> 这是因为 Vue 在组件实例化过程中会将 `methods` 中的方法绑定到组件实例上，使得这些方法可以在组件实例中被直接访问和调用。
>
> 具体来说，当 Vue 实例化一个组件时，会将组件的选项合并到一个新的 Vue 实例中，然后创建这个 Vue 实例的实例对象。在这个过程中，Vue 会将 `methods` 中定义的方法绑定到实例对象上，因此在组件实例中就可以通过 `this` 直接访问和调用这些方法。
>
> 这种机制使得在组件的模板中可以直接调用组件实例的方法，从而方便地实现模板和方法之间的交互。例如，在组件的模板中可以通过 `@click` 等指令直接调用组件实例的方法来处理用户的点击事件。
>
> 总的来说，Vue 中可以直接通过 `this` 调用 `methods` 中定义的方法，是因为 Vue 在组件实例化过程中会将这些方法绑定到组件实例上，使得它们可以在组件实例中被直接访问和调用。

##### 41、通过 bind 改变 function 的 this 指向

```js
//源码：
vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
```

##### 42、 vue源码中，Observer类都做了哪些事情

> 在Vue.js中，`Observer`类主要负责实现数据的响应式化。具体而言，`Observer`类会做以下几件事情：
>
> 1. 递归地遍历对象的每个属性，并使用`Object.defineProperty`或`Proxy`等技术在属性上设置getter和setter，以便在属性被访问或修改时能够触发相应的依赖收集和更新操作。
> 2. 为对象中的每个可响应的属性创建对应的依赖收集器（`Dep`），用于收集依赖和触发更新。
> 3. 当对象的属性是数组时，会对数组的方法进行重写，以便在数组发生变化时能够触发相应的依赖更新。
>
> 总的来说，`Observer`类是Vue.js实现响应式系统的核心之一，它通过递归遍历对象并设置getter和setter，以及创建对应的依赖收集器，实现了数据的响应式化。
>
> ```javascript
> //1、Observer类负责观察数据对象，根据数据类型调用walk或observeArray方法。
> class Observer {
>   constructor(value) {
>     this.value = value;
>     if (Array.isArray(value)) {
>       //2、observeArray方法用于遍历数组并对数组中的每个元素调用observe方法。
>       this.observeArray(value);
>     } else {
>       //3、walk方法遍历对象的每个属性并调用defineReactive方法设置getter和setter。
>       this.walk(value);
>     }
>   }
> 	
>   
>   walk(obj) {
>     Object.keys(obj).forEach(key => {
>       defineReactive(obj, key, obj[key]);
>     });
>   }
> 
>   observeArray(arr) {
>     arr.forEach(item => {
>       observe(item);
>     });
>   }
> }
> 
> function defineReactive(obj, key, val) {
>   let dep = new Dep();
>   Object.defineProperty(obj, key, {
>     enumerable: true,
>     configurable: true,
>     get: function reactiveGetter() {
>       // 依赖收集
>       if (Dep.target) {
>         dep.depend();
>       }
>       return val;
>     },
>     set: function reactiveSetter(newVal) {
>       if (newVal === val) {
>         return;
>       }
>       val = newVal;
>       // 触发依赖更新
>       dep.notify();
>     }
>   });
> }
> 
> // 4、observe方法用于判断数据类型并实例化Observer对象。
> function observe(value) {
>   if (!value || typeof value !== 'object') {
>     return;
>   }
>   return new Observer(value);
> }
> // 5、Dep类用于管理依赖，addSub方法用于添加订阅者，depend方法用于依赖收集，notify方法用于触发更新。
> class Dep {
>   constructor() {
>     this.subs = [];
>   }
> 
>   addSub(sub) {
>     this.subs.push(sub);
>   }
> 
>   depend() {
>     if (Dep.target) {
>       Dep.target.addDep(this);
>     }
>   }
> 
>   notify() {
>     this.subs.forEach(sub => {
>       sub.update();
>     });
>   }
> }
> 
> //6、Dep.target用于存储当前的观察者对象，在依赖收集时使用
> Dep.target = null;
> ```
>
> 

##### 43、Key作用

> 在 Vue 中，`key` 是用来标识 VNode 的特殊属性，具有以下作用：
>
> 1. **唯一性标识：** `key` 用于标识 VNode 的唯一性，确保在 Virtual DOM 中的列表渲染中能够准确地找到每个节点，并正确地进行比对和更新。
> 2. **优化列表渲染：** 在使用 `v-for` 进行列表渲染时，Vue 使用 `key` 来判断每个节点的身份。当列表发生变化时，Vue 会尽可能地复用已有的 DOM 元素，而不是创建新的元素或者销毁已有的元素，从而提高渲染性能。
> 3. **解决列表渲染时的问题：** 在没有使用 `key` 的情况下，如果列表中的项发生了位置变化、增加或删除等操作，可能会导致 Vue 无法正确地识别每个节点的身份，从而引发错误的渲染结果或者性能下降。
> 4. **配合动画效果：** 在列表渲染中，配合过渡或者动画效果使用 `key` 可以实现更流畅的过渡效果。Vue 可以根据 `key` 的变化，精准地追踪节点的增加、删除、移动等操作，从而实现更精细的动画控制。
>
> `key` 在何时生效取决于具体的使用场景，主要包括列表渲染、动态组件等情况。在这些情况下，Vue 会根据 `key` 属性来判断节点的唯一性，并根据需要进行 DOM 的复用或者更新。因此，合理地使用 `key` 可以帮助我们提高页面的渲染性能，避免出现不必要的问题。
>
> `key` 属性在 Vue 的 Virtual DOM Diff 算法中是非常重要的，它能够帮助 Vue 精准地识别节点的唯一性，从而实现高效的列表渲染和 DOM 更新。因此，在进行列表渲染时，应该合理地为每个节点添加唯一的 `key` 属性，以确保 Vue 能够正确地进行节点的比对和更新。

##### scoped的实现原理

> *vue* 中的 *scoped* 属性的效果主要通过 *PostCSS* 转译实现的。*PostCSS* 给一个组件中的所有 *DOM* 添加了一个独一无二的动态属性，然后，给 *CSS* 选择器额外添加一个对应的属性选择器来选择该组件中 *DOM*，这种做法使得样式只作用于含有该属性的 *DOM*，即组件内部 *DOM*。

