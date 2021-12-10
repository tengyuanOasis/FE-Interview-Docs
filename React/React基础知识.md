---
title: React学习
tags: React
categories: React
description: <center>“基于 XLSX 封装的  Excel 并解析为 JSON格式数据的组件”</center>
coverWidth: 1200
coverHeight: 750
cover: https://source.unsplash.com/random?count=10/1600x900
---

#### React基础知识汇总

[TOC]

<!--more-->

#### 01 / 生命周期

**react15生命周期**![](https://s1.ax1x.com/2020/11/10/BLFB1P.png)

React的生命周期就是组件从初始化到卸载到全过程，可以分为以下几个阶段
- 初始化阶段(
  - **constructor()**, 
  - **componentWillMount**(),
  -  **render**(), 
  - **componentDidMount**()
- 更新阶段
  - **componentWillReceiveProps**(),
  -  **shouldComponentUpdate**(), 
  - **componentWillUpdate**(), 
  - **render**(), 
  - **componentDidUpdate**()
- 卸载阶段
  - **componentWillUnmont**()

这里需要注意的是更新阶段，componentWillReceiveProps是由父组件触发的更新，只要父组件更新，子组件的该生命周期就会被执行，跟props无关。同是，shouldComponentUpdate可以用来做性能优化



**react16生命周期**

![](https://s1.ax1x.com/2020/11/10/BLkabF.png)

在React16的生命周期中，去掉了曾经的**componentWillMount**和**componentWillUpdate**，使用**getDerivedStateFromProps**代替这两个方法。同时在更新阶段的render方法和componentDidUpdate之间，新增了一个**getSnapshotBeforeUpdate**方法。接下来就来详细了解一下React这么做的原理以及这些新增生命周期的具体使用



**react15和react16的区别**

- ###### 初始化阶段

  ![](https://s1.ax1x.com/2020/11/10/BLu3c9.png)

  - `-`	componentWillMount()

  - `+`	getDerivedStateFromProps()

    1. getDerivedStateFromProps() 主要用于替换 componentWillReceiveProps() 的

    2. getDerivedStateFromProps是一个静态方法 , 需要使用static声明

    3. getDerivedStateFromProps 接收两个参数, 父组件传递过来的props和自身state

    4. 必须返回一个对象格式的返回值，否则控制台会被警告

    5. 该返回值会被用来更新现有state(并不会覆盖原有State，只做定向更新，如果原来State中没有该属性，则新增)，如果没有需要更新的时候，请记得返回一个null

       ```
       static getDerivedStateFromProps(props,state){
         return newState
       }
       ```
  
- ###### 更新阶段

  ![](https://s1.ax1x.com/2020/11/10/BLMPMj.png)

  - `-`componentWillReceiveProps()
  - `+`getDerivedStateFormProps()
  - `-`componentWillupdate()
  - `+`getSnapshotBetforeupdate()

React16中也去掉了componentWillUpdate方法，新增了getSnapshotBeforeUpdate方法，这个方法在render方法之后，componentDidUpdate之前被执行，即真实DOM更新之前（获取更新前的真实DOM和更新前后的State&props信息）。该方法需要一个返回值，作为componentDidUpdate的第三个参数。

- ###### componentWillReceiveProps()和getDerivedStateFormProps()区别

| getDerivedStateFormProps( props , state )                    | componentWillReceiveProps( nextPorps )               |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| 使用static 声明: `static getDerivedStateFormProps( props , state ){}` | 直接声明: `componentWillReceiveProps( nextPorps ){}` |
| **在组件挂载阶段即可执行,父组件更新执行**                    | **只在父组件更新的时候执行**                         |
| 接收两个参数:  props  ,  state                               | 接收一个参数( nextPorps )                            |
| **必须返回一个对象格式的返回值 或 null**                     | **可以直接更新state状态**                            |

**demo:**

```
  static getDerivedStateFromProps(props, state) {
    if (props.age !== state.age) {
      return { age: props.age }
      // 类似setStae
      // this.setState({
      //   age: props.age
      // });
    }
    return null
  }
```

```
  componentWillReceiveProps(nextporps) {
    if (nextporps.age !== this.state.age) {
      this.setState({
        age: nextporps.age 
      });
    }
  }
```



#### 02 / Virtual Dom



- 什么是Virtual Dom?

  - 在原生的`JavaScript`程序中，我们直接对`DOM`进行创建和更改，而`DOM`元素通过我们监听的事件和我们的应用程序进行通讯。
  - `React`会先将你的代码转换成一个`JavaScript`对象，然后这个`JavaScript`对象再转换成真实`DOM`。这个`JavaScript`对象就是所谓的虚拟`DOM`。
  - 当我们需要创建或更新元素时，`React`首先会让这个`VitrualDom`对象进行创建和更改，然后再将`VitrualDom`对象渲染成真实`DOM`；
  - 当我们需要对`DOM`进行事件监听时，首先对`VitrualDom`进行事件监听，`VitrualDom`会代理原生的`DOM`事件从而做出响应。
  
- 为什么使用虚拟dom?

  - 可以提高开发效率

    ```
    使用JavaScript，我们在编写应用程序时的关注点在于如何更新DOM。
    
    使用React，你只需要告诉React你想让视图处于什么状态，React则通过VitrualDom确保DOM与该状态相匹配。你不必自己去完成属性操作、事件处理、DOM更新，React会替你完成这一切。
    
    这让我们更关注我们的业务逻辑而非DOM操作，这一点即可大大提升我们的开发效率。
    ```

  - 性能提升?(有一些矛盾)

    ```
    - 直接说虚拟DOM可以提升性能这种说法是很片面的,直接操作dom非常耗费性能这一点毋庸置疑,但是react同样也无法避免操作dom
    -	如果是首次渲染,virtualDom不具有任何优势,甚至要进行更多的计算和耗费更多的内存
    - virtualDOm优势在于diff算法和批量处理策略,在react页面更新之前,已经提前计算好了如何更新和渲染dom,减少重绘回流,因此可以理解为提升了性能
    ```

  - 跨浏览器兼容

    ```
    virtualDom自己实现了一套事件机制,模拟了事件捕获和冒泡的过程,采用了事件代理和批量更新的方法,可以抹平各浏览器事件处理不兼容的问题
    ```

- React组件的渲染流程

  - 使用`React.createElement`或`JSX`编写`React`组件，`Babel`帮助我们把所有的`JSX `代码最后都会转换成`React.createElement(...) `格式

    - JSX编写

      ```
      class Hello extends Component {
        render() {
          return <div>Hello ConardLi</div>;
        }
      }
      ```

    - `React.createElement`编写

      ```
      class Hello extends Component {
        render() {
          return React.createElement('div', null, `Hello ConardLi`);
        }
      }
      ```

    - `Babel`转化demo

      ```
      <div>
        <img src="avatar.png" className="profile" />
        <Hello />
      </div>;
      ```

      ```
      React.createElement("div", null, 
      	React.createElement("img", {
        	src: "avatar.png",
        	className: "profile"
      	}), 
      	React.createElement(Hello, null)
      );
      ```

  - `createElement`函数对`key`和`ref`等特殊的`props`进行处理，并获取`defaultProps`对默认`props`进行赋值，并且对传入的孩子节点进行处理，最终构造成一个`ReactElement`对象（所谓的虚拟`DOM`）。
  - `ReactDOM.render`将生成好的虚拟`DOM`渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实`DOM`。

​    

- virtualDom的组成

  即`ReactElement`element对象，我们的组件最终会被渲染成下面的结构

  - `type`：元素的类型，可以是原生html类型（字符串），或者自定义组件（函数或`class`）
  - `key`：组件的唯一标识，用于`Diff`算法
  - `ref`：用于访问原生`dom`节点
  - `props`：传入组件的`props`，`chidren`是`props`中的一个属性，它存储了当前组件的孩子节点，可以是数组（多个孩子节点）或对象（只有一个孩子节点）
  - `owner`：当前正在构建的`Component`所属的`Component`
  - `self`：（非生产环境）指定当前位于哪个组件实例
  - `_source`：（非生产环境）指定调试代码来自的文件(`fileName`)和代码行数(`lineNumber`)

  例如;

  ```
  <div class="title">
        <span>Hello ConardLi</span>
        <ul>
          <li>苹果</li>
          <li>橘子</li>
        </ul>
  </div>
  ```

  ```
  	
  const VitrualDom = {
    type: 'div',
    props: { class: 'title' },
    children: [
      {
        type: 'span',
        children: 'Hello ConardLi'
      },
      {
        type: 'ul',
        children: [
          { type: 'li', children: '苹果' },
          { type: 'li', children: '橘子' }
        ]
      }
    ]
  }
  ```

  

#### 03 / diff算法

- DIFF算法是DOM更新的一种算法,指页面被更新时,程序用哪种策略更新DOM
- 作用是用来计算出 **Virtual DOM** 中被改变的部分，然后针对该部分进行原生DOM操作，而不用重新渲染整个页面。

DIFF算法策略:

- Tree Diff	对树每一层进行遍历，找出不同

  ![](https://s3.ax1x.com/2020/11/17/DVYzW9.png)

- Component Diff  是数据层面的差异比较

- Element Diff  真实DOM渲染，结构差异的比较

  -  Diff提供三种DOM操作：**删除**、**移动**、**插入**。

![](https://s3.ax1x.com/2020/11/17/DVYozn.png)

#### 04 / fiber架构

> fiber架构是React16对核心算法的一次重构
>
> Fiber使原本同步渲染变为异步

**4.1 React历史算法的风险**

> React16之前,组件每次更新都会触发React去构建一棵新的虚拟DOM树,通过与上一次虚拟DOM的diff对比,实现DOM的定更新
>
> 该过程是是一个递归的过程,调用栈非常深,只有最低层的返回了,才能逐层返回.
>
> 这个过程漫长且不可打断,同步一旦开始,就会牢牢抓住线程,直到递归完成,这个过程浏览器除了渲染不会再做其他事情,无法处理用户
>
> 交互状态,页面可能会卡死

**4.2 Fiber是怎样处理渲染的？**

> Fiber 会将一个大的更新任务拆解为许多个小任务。
>
> 每当执行完一个小任务时，渲染线程都会把主线程交回去，看看有没有优先级更高的工作要处理，确保不会出现其他任务被“饿死”的情况，进而避免同步渲染带来的卡顿。
>
> 在这个过程中，渲染线程不再“一去不回头”，而是可以被打断的，这就是所谓的“异步渲染”

**4.3 说回生命周期**

在最开始给出生命周期图的时候，细心的同学会发现，在下面这张图的左边，React又将生命周期划分了如下三个阶段

![](https://s1.ax1x.com/2020/11/10/BL0HNF.png)

- render：纯净且没有副作用，可能会被暂停或者终止，重新启动
- Pre-commit阶段：可以读取DOM
- commit阶段：可以使用DOM，运行副作用，安排更新

**4.4为什么会这样分呢？**

> 总的来说，render 阶段在执行过程中允许被打断，而 commit 阶段则总是同步执行的。
>
> 为什么这样设计呢？简单来说，由于 render 阶段的操作对用户来说其实是“不可见”的，所以就算打断再重启，对用户来说也是零感知。而 commit 阶段的操作则涉及真实 DOM 的渲染，再狂的框架也不敢在用户眼皮子底下胡乱更改视图，所以这个过程必须用同步渲染来求稳。

**4.5废除的生命周期跟Fiber之间的联系**

```
在 Fiber 机制下，render 阶段是允许暂停、终止和重启的。当一个任务执行到一半被打断后，下一次渲染线程抢回主动权时，这个任务被重启的形式是“重复执行一遍整个任务”而非“接着上次执行到的那行代码往下走”。这就导致 render 阶段的生命周期都是有可能被重复执行的。

带着这个结论，我们再来看看 React 16 打算废弃的是哪些生命周期：

componentWillMount；

componentWillUpdate；

componentWillReceiveProps。

这些生命周期的共性，就是它们都处于 render 阶段，都可能重复被执行，而且由于这些 API 常年被滥用，它们在重复执行的过程中都存在着不可小觑的风险。
```

#### 05 / React数据传递方案

- 组件传值
- context
- redux

#### 06 / setState之后发生什么?

一、React中setState后发生了什么

> 在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程(Reconciliation)。
>
> 经过调和过程，React 会以相对高效的方式根据新的状态构建React元素树并且着手重新渲染整个Ul界面。
>
> 在React得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。 在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变,这就保证了按需更新，而不是全部重新渲染。

二、setState 为什么默认是异步

> 假如所有setState是同步的，意味着每执行一次setState时 (有可能一个同步代码中， 多次setState) 都重新vnode diff + dom修改，这对性能来说是极为不好的。如果是异 步，则可以把一一个同步代码中的多个setState合并成- -次组件更新。

三、setState什么时候是同步

> 在setTimeout或者原生事件中，setState是同步的。

#### 7 / componentWillUpdate可以直接修改state的值吗？ 

> react组件在每次需要重新渲染时候都会调用`componentWillUpdate()`,
>
> 例如，我们调用 `this.setState()`时候
>
> 在这个函数中我们之所以不调用`this.setState()`是因为该方法会触发另一个`componentWillUpdate()`,如果我们`componentWillUpdate()`中触发状态更改,我们将以无限循环结束.

#### 8 / 使用Hooks要遵守哪些原则？

> 1. 只在最顶层使用 Hook, 不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。
> 2. 只在 React 函数中调用 Hook, 不要在普通的 JavaScript 函数中调用 Hook。
> 3. 可以：
>    ✅ 在 React 的函数组件中调用 Hook
>    ✅ 在自定义 Hook 中调用其他 Hook