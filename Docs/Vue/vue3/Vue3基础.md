- https://juejin.cn/post/7227453567686033468

#### 1、vue3相对于vue2有什么优势？

> 性能更好，打包体积更小，更好的ts支持，更好的代码组织，更好的逻辑抽离，更多的新功能

#### 2、vue3生命周期

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/markdown/202403161658853.png" alt="202403152033177" style="zoom:50%;" />
> Options API的生命周期：
>
> 1. `beforeCreate`: 在实例初始化之后、数据观测(initState)和 event/watcher 事件配置之前被调用。 对于此时做的事情，如注册组件使用到的store或者service等单例的全局物件。 相比Vue2没有变化。
>
> 2. `created`: 一个新的 Vue 实例被创建后（包括组件实例），立即调用此函数。 在这里做一下初始的数据处理、异步请求等操作，当组件完成创建时就能展示这些数据。 相比Vue2没有变化。
>
>    ## **选项式api setup取代上面两个声命周期**
>
> 3. `beforeMount`: 在挂载之前调用，相关的render函数首次被调用,在这里可以访问根节点，在执行mounted钩子前，dom渲染成功，相对Vue2改动不明显。
>
> 4. `onMounted`: 在挂载后调用，也就是所有相关的DOM都已入图，有了相关的DOM环境，可以在这里执行节点的DOM操作。在这之前执行beforeUpdate。
>
> 5. `beforeUpdate`: 在数据更新时同时在虚拟DOM重新渲染和打补丁之前调用。我们可以在这里访问先前的状态和dom，如果我们想要在更新之前保存状态的快照，这个钩子非常有用。相比Vue2改动不明显。
>
> 6. `onUpdated`:在数据更新完毕后，虚拟DOM重新渲染和打补丁也完成了，DOM已经更新完毕。这个钩子函数调用时，组件DOM已经被更新，可以执行操作，触发组件动画等操作
>
> 7. `beforeUnmount`:在卸载组件之前调用。在这里执行清除操作，如清除定时器、解绑全局事件等。
>
> 8. `onUnmounted`:在卸载组件之后调用，调用时，组件的DOM结构已经被拆卸，可以释放组件用过的资源等操作。
>
> - `onActivated` – 被 `keep-alive` 缓存的组件激活时调用。
> - `onDeactivated` – 被 `keep-alive` 缓存的组件停用时调用。
> - `onErrorCaptured` – 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。

#### 3、vue3相对vue2有什么更新

> - 新增三个组件：
>   - Fragmeng支持多个根节点；
>
>   - Suspense可以在组件渲染之前的等待时间显示指定内容；
>
>   - Teleport可以让子租金啊在视觉上跳出父组件
>
> - 新指令v-memo，可以缓存html模板，比如v-for不会变化就缓存
>     
> - 支持Tree-Shaking，在打包时去除无用代码、没用到的模块，使打包体积更小
>     
> - 新增Composition API，也就是组合式API，可以更好的逻辑服用和代码组织
>     
> - 用Proxy代替Object.definedProperty重构响应式，可以监听到数组下标变化、对象新增属性
>     - 重构虚拟DOM，在编译时会将事件缓存，将slot编译为lazy函数，保存静态节点直接复用，Diff算法使用最长递增子序列优化了对比流程支持`<style></style>`里使用v-bind，给css绑定JS变量用setup代替beforeCreate、created
>     

#### 4、proxy和Object.defineProperty区别

> 1. 实现方式
>    - proxy是es6新增api ， 通过代理机制实现响应式；
>    - Object.defineProperty，通过修改getter、setter实现
> 2. 作用对象
>    - Proxy可以代理**整个对象**，包括对象的所有属性、数组的所有元素以及类似数组对象的所有元素
>    - Object.defineProperty**只能代理对象上定义的属性**
> 3. 监听属性：
>    - proxy可以监听到对象增删属性操作；但是Object.defineProperty不行，需要通说this.$set获取响应式
> 4. 性能：
>    - es6的proxy性能比Object.defineProperty更好

#### 5、Vue2、3的diff算法有什么区别

> **vue2：**
>
> ​	Vue 2.x使用的是双向指针遍历的算法，也就是通过逐层比对新旧虚拟DOM树节点的方式来计算出更新需要做的最小操作集合。但这种算法的缺点是，由于遍历是从左到右、从上到下进行的，当发生节点删除或移动时，会导致其它节点位置的计算出现错误，因此会造成大量无效的重新渲染。
>
> **vue3：**
>
> ​	Vue 3.x使用了经过优化的单向遍历算法，也就是只扫描新虚拟DOM树上的节点，判断是否需要更新，跳过不需要更新的节点，进一步减少了不必要的操作。此外，在虚拟DOM创建后，Vue 3会缓存虚拟DOM节点的描述信息，以便于复用，这也会带来性能上的优势。同时，Vue 3还引入了静态提升技术，在编译时将一些静态的节点及其子节点预先处理成HTML字符串，大大提升了渲染性能。

#### 6、watch和watchEffect的区别？

> watch和watchEffect都用于监听vue3数据变化
>
> **watch**：
>
> -  watch需要指明需要见识的数据，以及对应回调，类似vue2写法
> - 可以访问改变之前和之后的值
> - `watch` 运行的时候`不会立即执行`，值改变后才会执行，如果需要立即执行需要配置immediate属性
>
> **watchEffect**：
>
> - watchEffect内部会自动收集回调函数所依赖的数据，只要这些数据发生变化，就会自动执行回调函数。
> - watchEffect` 运行后可`立即执行
>
> ```javascript
> import { ref, watch } from 'vue';
> 
> // 定义响应式数据
> const count = ref(0);
> 
> // 监听 count 的变化，并执行回调函数
> watch(count, (newValue, oldValue) => {
>   console.log(`count 变化了：${oldValue} -> ${newValue}`);
> });
> 
> // 自动收集 count 的变化，并执行回调函数
> watchEffect(() => {
>   console.log(`count 的值是：${count.value}`);
> });
> 
> // 修改 count 的值
> count.value++; // 输出：count 变化了：0 -> 1
> 
> ```
>
> 

#### 7、script setup 是干啥的？

`scrtpt setup` 是 `vue3` 的语法糖，简化了`组合式 API` 的写法，并且运行性能更好。使用 `script setup` 语法糖的特点：

- 属性和方法无需返回，可以直接使用。
- 引入`组件`的时候，会`自动注册`，无需通过 `components` 手动注册。
- 使用 `defineProps` 接收父组件传递的值。
- `useAttrs` 获取属性，`useSlots` 获取插槽，`defineEmits` 获取自定义事件。
- 默认`不会对外暴露`任何属性，如果有需要可使用 `defineExpose` 。

#### 8、v-if 和 v-for 的优先级哪个高？

在 `vue2` 中 `v-for` 的优先级更高，但是在 `vue3` 中优先级改变了。`v-if` 的优先级更高。

> 在 Vue 3 中，`v-if` 指令的优先级比 `v-for` 更高，这是因为 Vue 3 中的编译器会对模板进行静态分析，并根据静态分析的结果对指令进行优化处理。
>
> 具体来说，当编译器分析模板时，会尽可能地将静态内容提升到编译阶段，以便更高效地生成渲染函数。在这个过程中，`v-if` 指令会被认为是动态的内容，而 `v-for` 则被认为是静态的内容。因此，编译器会优先处理 `v-if` 指令，以确保动态内容的条件判断能够正确地应用到静态内容上。
>
> 这种处理方式的目的是为了优化渲染性能，尽可能地减少不必要的渲染和更新操作，提高页面的渲染效率。因为在实际的开发中，`v-if` 指令通常会涉及到条件渲染，而 `v-for` 则是用于循环渲染列表，相比之下，条件渲染更为动态，需要更频繁地进行判断和更新，因此 `v-if` 的优先级会更高一些。

#### 9、setup中如何获得组件实例？

在 `setup` 函数中，你可以使用 `getCurrentInstance()` 方法来获取组件实例。`getCurrentInstance()` 方法返回一个对象，该对象包含了组件实例以及其他相关信息。



#### 10、Vue3.x响应式数据原理是什么？

> 在 *Vue 2* 中，响应式原理就是使用的 *Object.defineProperty* 来实现的。但是在 *Vue 3.0* 中采用了 *Proxy*，抛弃了 *Object.defineProperty* 方法。
>
> 究其原因，主要是以下几点：
>
> - *Object.defineProperty* 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应
> - *Object.defineProperty* 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。*Proxy* 可以劫持整个对象，并返回一个新的对象。
> - *Proxy* 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。
> - *Proxy* 有多达 *13* 种拦截方法
> - *Proxy*作为新标准将受到浏览器厂商重点持续的性能优化
>
> ***Proxy\* 只会代理对象的第一层，那么 \*Vue3\* 又是怎样处理这个问题的呢？**
>
> 判断当前 *Reflect.get* 的返回值是否为 *Object*，如果是则再通过 *reactive* 方法做代理， 这样就实现了深度观测。
>
> **监测数组的时候可能触发多次 \*get/set\*，那么如何防止触发多次呢？**
>
> 我们可以判断 *key* 是否为当前被代理对象 *target* 自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行 *trigger*。

#### 11、Vue3 相对 Vue2 修改了些什么

> - 响应式差异
>       proxy 和 Object.defineProperty
>- compiler 差异
> 
>  - 做了相关优化
> 
>    - 预字符串化
>     - 静态提升
>    - patchFlags 动态节点标记
>     - 事件函数缓存
>- 生命周期的差异
>           - vue3 中和 vue2 的生命周期原理没有什么大的区别
>                    将 beforeDestory 改成 beforeUnMount
>                     destroy ---> unmount    
>               - vue3 中
>                     可以使用 setup 来代替 beforeCreate 和 created

#### 12、静态节点提升

> Vue 3 中的静态提升（Static Hoisting）是一种优化技术，用于提高渲染性能。它主要是通过将静态的节点在==编译阶段==提升到函数作用域的顶部，以避免在渲染时重复创建相同的静态节点，从而减少了渲染的开销。
>
> 1. 编译阶段，vue会通过静态分析技术识别模板中的静态节点，如纯文本、静态标签等。
> 2. 静态节点提升，识别到静态节点之后，vue会将这些节点提升至渲染函数顶部，每次渲染只创建一次，后续渲染中复用这些节点
> 3. 生成优化后的渲染函数，经过静态提升之后，vue会生成一个优化后的渲染函数，渲染后会直接使用提升的静态节点，减少渲染开销

#### 13、预字符串化

> 预字符串化（Pre-Stringification）是 Vue 3 中的一项性能优化技术，用于加速模板的编译和渲染过程。
>
> 它主要是通过将模板中的静态部分预先转换为静态字符串，在编译阶段进行一次性的字符串化处理，从而减少运行时的计算和处理，提高渲染性能。
>
> 具体来说，预字符串化会对模板进行静态分析，识别其中的静态部分，即那些在每次渲染中都保持不变的部分。然后，它会将这些静态部分转换为字符串，并在编译阶段就将它们存储起来，以备后续渲染时直接使用。

14、patchFlag动态节点标记

15、事件函数缓存



16、Vue3相对vue2新增了哪些内置组件

> 1. **Teleport（传送门）组件：** Teleport 组件允许你将子组件的内容渲染到 DOM 中的任何位置，这在处理模态框、弹出菜单等场景时非常有用。
> 2. **Suspense 组件：** Suspense 组件使得在异步组件加载时可以显示加载中的占位符，这样可以提升用户体验。





 富文本怎么预防xss

> - **HTML 标签过滤**： 
>
>   - 过滤掉html中的危险标签，如`<script>、<iframe> `
>   - 可以使用白名单机制，只允许指定的安全标签和属性通过，过滤掉一切不在白名单中的标签和属性。
>
> - **HTML 标签转义:**
>
>   - 对于接收到的富文本内容，可以对其中的 HTML 标签进行转义
>   - 将 `<` 转换为 `<`、`>` 转换为 `>` 等
>
> - **内容安全策略（CSP）：**
>
>   - 使用内容安全策略（Content Security Policy）可以限制页面中可以执行的脚本来源、样式来源、图像来源等，有效防止恶意脚本的执行。通过配置 CSP，可以指定只允许加载安全来源的脚本和内容，防止 XSS 攻击。
>
> - **JavaScript 代码过滤：**
>
>   - 对于富文本中的 JavaScript 代码，可以通过正则表达式或其他方法进行过滤和检测，识别和删除其中的危险代码，例如包含 `eval()`、`setTimeout()` 等执行恶意操作的代码。
>
>   

怎么开启CSP

> 要开启内容安全策略（Content Security Policy，CSP），可以通过在 HTTP 响应头中添加 CSP 指令来实现。下面是一个基本的 CSP 响应头示例：
>
> ```javascript
> Content-Security-Policy: default-src 'self';
> ```
>
> 这个示例指示浏览器只加载当前域名（'self'）的资源，阻止了从其他来源加载资源，这样可以有效防止 XSS 攻击。
>
> 除了限制加载资源的来源外，CSP 还提供了许多其他指令，可以限制执行脚本、样式、字体、插件等内容。例如，可以通过以下方式限制只允许加载本地脚本、样式和字体：
>
> ```js
> Content-Security-Policy: script-src 'self'; style-src 'self'; font-src 'self';
> ```
>
> 另外，还可以通过 `unsafe-inline` 和 `unsafe-eval` 关键字来禁止使用内联脚本和动态执行脚本，从而进一步提高安全性：
>
> ```js
> Content-Security-Policy: script-src 'self' 'unsafe-inline' 'unsafe-eval';
> ```
>
> 要开启 CSP，你可以在服务器端配置 HTTP 响应头来添加 CSP 指令。具体配置方式会根据使用的服务器和框架而有所不同，常见的服务器如 Apache、Nginx、Express 等都支持配置 CSP。在配置 CSP 时，要确保仔细测试，以免意外地影响网站的正常功能。



