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







参考

- [vue3面试题八股集合——2023](https://juejin.cn/post/7227453567686033468)