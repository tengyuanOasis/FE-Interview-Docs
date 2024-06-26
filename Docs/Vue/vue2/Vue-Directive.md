<!-- @format -->

### 自定义指令

##### 1、Vue.directive

> `Vue.directive`方法作用是**注册或者获取全局指令**，而不是让指令生效；
>
> 区别：
>
> - 注册指令需要做的事情是将指令保存在某个位置
> - 让指令生效是指将指令从某位置拿出来执行它

##### 2、（自定义）指令怎么生效的

> 模板编译阶段，将指令解析在 AST，然后使用 AST 生成代码字符串的过程，实现自定义指令的功能；
>
> 最后在虚拟 DOM 渲染过程中触发自定义指令中的钩子函数，使其生效

<img src="https://raw.githubusercontent.com/tengyuanOasis/image/master/202202211830322.png" alt="image-20220221183003249" style="zoom:80%;float:left" />

> 如图：
>
> 1. 在模板解析阶段，会将节点上的指令解析出来并添加到 `AST` 的 `directives`属性中 ；
> 2. 随后 `directives` 数据会传递到 Vnode 中，接着可以通过 `Vnode.data.directives`获取节点绑定的指令；
> 3. 最后当虚拟 DOM 修改时，会根据节点对比触发一些钩子函数；
> 4. 在 diff 算法结束后，根据对比结果触发指令的钩子函数==》指令生效

##### 3、钩子(注意顺序，下面即调用顺序)

1. `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

2. `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

3. `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

4. `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。

5. `unbind`：只调用一次，指令与元素解绑时调用。

https://cn.vuejs.org/v2/guide/custom-directive.html

##### 4、钩子的区别:

https://segmentfault.com/a/1190000019651831
