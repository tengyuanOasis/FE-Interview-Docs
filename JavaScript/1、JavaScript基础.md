

JavaScript基础

[TOC]

#### 01、	JS 数据类型(7+1)

- **基本数据类型:**

  > 1. **Undefined**： 
  >    - Undefined 类型表示未定义，任何变量在赋值前是 Undefined 类型、值为 undefined。
  > 2. **Null**
  >    - 空对象指针，故typeof null会返回object，Null 表示的是：“==定义了但是为空==”，所以，在实际编程时，一般把变量赋值为 null。
  > 3. **Boolean** 
  >    - true / false。
  > 4. **Number**
  >   - 浮点数(demo： 数值必须有小数的数，1.1；0.1等)
  >   - 数值范围[Number.MIN_VALUE,Number.MAX_VALUE]
  >   - NAN(not a number)
  >   - Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。
  >   - 浮点数的定义，非整数的 Number 类型无法用 `==`（ `=== `也不行） 来比较。 即 ( 0.1+0.2 ==0.3  ==>false)
  > 5. **String**: 
  >    - String 用于表示文本数据。String 有最大长度是 2^53 - 1，因为 String 的意义并非“字符串”，而是字符串的 UTF16 编码，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响的。
  > 6. **Symbol**:  
  >    
  >    - Symbol（符号）是ECMAScript 6新增的数据类型。符号是原始值，且符号实例是**唯一、不可变的**。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
  >    
  >    - 使用：
  >    
  >    - https://juejin.cn/post/6844903812046520328
  >    
  >    - https://cloud.tencent.com/developer/article/1191039
  >    
  >      ```js
  >      //符号需要使用Symbol()函数初始化。因为符号本身是原始类型，所以typeof操作符对符号返回symbol。
  >      let sym = Symbol(); console.log(typeof sym); // symbol 
  >           
  >      //调用Symbol()函数时，也可以传入一个字符串参数作为对符号的描述（description），将来可以通过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关：
  >      let genericSymbol = Symbol();
  >      let otherGenericSymbol = Symbol(); 
  >      let fooSymbol = Symbol('foo');
  >      let otherFooSymbol = Symbol('foo'); 
  >      console.log(genericSymbol == otherGenericSymbol);  // false 
  >      console.log(fooSymbol == otherFooSymbol);          // false 
  >      ```
  >    
  >      
  > 7. **bigInt**
  >    
  >    - **`BigInt`** 是一种内置对象，它提供了一种方法来表示大于 `2^53 - 1` 的整数。这原本是 Javascript中可以用 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 表示的最大数字。**`BigInt`** 可以表示任意大的整数。
  >    - 不能用于 [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象中的方法；
  >    - 不能和任何 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 实例混合运算，两者必须转换成同一种类型。
  >    - 可以直接在常规 Number 后面增加一个字符 `n` 表示一个 BigInt

- **引用数据类型:**

  引用数据类型指的是 Object类型,其他如 Array,Date 等数据类型都可以理解为 Object 的子类

  ```js
  Object =  [
     Array,
     Date,
     Math,
     ...
  ]
  ```

- **基本数据类型和引用数据类型区别:**

  - 基本数据类型在内存中占固定大小的空间 , 因此被保存在栈中
  - 引用类型值是对象，保存在 **堆内存** 中。包含引用类型值的变量实际包含并非对象本身，而是指向该对象的指针。一个变量从另一个变量复制引用类型的值时，复制的也是指向该对象的指针。

- **数据类型检测方法**
  
  - typeof: 直接返回数据类型字段，但是无法判断数组、null、对象(均返回 object)
  
  - [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof): 判断某个实例是不是属于原型,无法判断基本数据类型，对于引用类型数据，返回其其对应类型。
  - `Object.prototype.toString.call()`
  
    |                        | typeof      | instanceof                       | Object.prototype.toString.call() |
    | ---------------------- | ----------- | -------------------------------- | -------------------------------- |
    | var test = 'kangkang'; | `string`    | test instanceof String `//false` | `[object String]`                |
    | var test = 123;        | `number`    | test instanceof Number`//false`  | `[object Number]`                |
    | var test = true;       | `boolean`   | test instanceof Boolean`//false` | `[object Boolean]`               |
    | var test = undefined;  | `undefined` | test instanceof Object `//false` | `[object Undefined]`             |
    | var test = null;       | `object`    | test instanceof Object`//false`  | `[object Null]`                  |
    | var test = {};         | `object`    | test instanceof Object`//true`   | `[object Object]`                |
    | var test(){ };         | `function`  | test instanceof Object`//true`   | `[object Function]`              |

#### 02 、什么是堆/栈?

> 堆栈概念存在于数据结构和操作系统内存中
>
> 👉栈
>
> - 栈内存的简称，系统自动分配相对**固定大小**的内存空间，并由系统**自动释放**。
> - 栈内存特点，数据一执行完毕，变量会立即释放，节约内存空间。
> - 栈中的数据存取方式为线性结构，**后进先出**，便于管理。
> - 栈区内存保存变量标识符
> - **对于栈,只允许在尾部删除**,即后进先出
>
> 👉堆
>
> - 堆内存的简称，**动态分配内存**，内存大小不一，**不是自动释放**。
> - 队列优先 , **先进先出**，方便存储和开辟内存空间。
> - 堆内存存储对象的地址
> - **对于队列,只允许在头部删除,后端插入**即先进先出 

#### 03 、 什么是 JavaSctipt 垃圾回收机制?

- **为什么要垃圾回收?**

  > 随着前端业务需求的不断增多js会占用越来越多的内存。
  > 但是内存并不是无限的，故**需要垃圾回收机制去处理那些我们不再需要的变量、对象**
  
- **垃圾回收机制的特点:**

  垃圾回收机制会==定期==对那些我们不再使用的变量、对象所占用的内存释放

  > 原理:
  >  -	找出那些不再使用的变量，然后释放其占用的内存。
  >  -	垃圾收集器会按照固定的时间间隔(或预定的收集时间)周期性地执行此操作。

- **垃圾回收的方式有哪些?**

  - **标记清除**

    - 当变量进入环境时,就将其标记为"进入环境",此时"进入环境"的变量是不可以被回收的"

    - 当变量离开环境时,就将其标记为"离开环境",此时"离开环境"的变量可以被回收

      ```js
      function func () {
        const a = 1
        const b = 2
        // 函数执行时，a b 分别被标记 进入环境
      }
      
      func() // 函数执行结束，a b 被标记 离开环境，被回收
      ```

  - **引用计数**

    - 统计引用类型变量声明后被引用的次数，当次数为 0 时，该变量将被回收

      ```js
      function func1 () {
        const c = {} // 引用类型变量 c的引用计数为 0
        let d = c // c 被 d 引用 c的引用计数为 1
        let e = c // c 被 e 引用 c的引用计数为 2
        d = {} // d 不再引用c c的引用计数减为 1
        e = null // e 不再引用 c c的引用计数减为 0 将被回收
      }
      ```

    - 但是引用计数的方式，有一个相对明显的缺点——**循环引用**

      ```js
      function func5 () {
        let f = {}
        let g = {}
        f.prop = g
        g.prop = f
        // 由于 f 和 g 互相引用，计数永远不可能为 0
      }
      ```

    - 像上面这种情况就需要**手动将变量的内存释放**

      ```
      f.prop = null
      g.prop = null
      ```

参考:
[<<javascript 垃圾回收机制>>](https://juejin.im/post/6844903652331618312)
[<<JavaScript 垃圾回收机制>>](https://juejin.im/post/6844903858972409869#heading-3)

#### 04 、 什么是循环引用 ?

当对象 1 中的某个属性指向对象 2，对象 2 中的某个属性指向对象 1 就会出现循环引用(最简单的例子)

```js
  function circularReference() {
      let obj1 = { };
      let obj2 = { };
      obj1.a = obj2;
      obj2.b = obj1;
  }
```

#### 05 、 内存泄露

- 什么是内存泄露?

  > 程序的运行需要内存。只要程序提出要求，操作系统或者运行时（runtime）就必须供给内存。
  > 对于持续运行的服务进程（daemon），必须及时释放不再用到的内存。
  > 否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。
  > 不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。
  
- 常见的内存泄露有哪些?

  > - 全局变量(在非严格模式下当引用未声明的变量时，会在全局对象中创建一个新变量。)
  > - 被遗忘的定时器和回调函数
  >
  > - DOM 引用
  >
  > - 闭包

#### 06 、 JavaScript 可执行上下文

[《JavaScript 可执行上下文》]()

> js指向变量或函数时，会生成一个与该变量或函数相关的执行环境，这个执行环境就是可执行上下文
>
> 可执行上下文规定了该变量或者函数可访问的变量及他们的行为

#### 07 、 JavaScript 在浏览器中如何执行的

<a href="/2020/09/22/JavaScript/04%20-%20JavaScript-一段js代码在浏览器中是如何执行的/" target="_blank"><<JavaScript 在浏览器中如何执行的>></a>

#### 08 、 从输入 url 到页面加载过程

<a href="/2020/10/26/JavaScript/06%20-%20从输入url到页面加载过程/" target="_blank"><<从输入 url 到页面加载过程>></a>

#### 09 、 内部属性[[class]]是什么

所有`typeof`返回值为 `object` 的对象（如数组）都包含一个内部属性 [[Class]],这个属性无法直接访问，一般通过以下代码查看

```
Object.prototype.toString.call(Array)  //"[object Function]"
```

#### 10 、 Js 内置对象都有哪些

```
js内置对象主要是只在程序执行前存在全局作用域里面的由js定义的一些全局属性,函数和用来实例化其他对象的构造函数对象.

一般我们经常用到的

全局函数变量值: NaN , undefined ,

全局函数: parseInt() , paeseFloat()

用来实例化的全局构造函数: Date , Object 等
```

#### 11 、原型原型链

```
01/ 原型:
-	Js中我们使用构造函数来新建对象的
-	每个构造函数内部都有一个prototype属性,这个属性值是一个对象,包含了可以由该构造函数共享的实例和方法
- 我们使用构造函数新建一个对象后,这个对象内部有一个`__proto__`指针,可以指向构造函数prototype属性对应的值,es5中我们一般称他为对象的原型 浏览器可以通过`__proto__`值来获取,也可以用Object.getPrototypeOf()找到对象的原型

02/ 原型链:
- 当我们访问一个对象的属性时,如果这个对象里面不存在该属性的时候,那么就会到这个对象的原型对象中找这个属性,就这样一层层的找就构成了原型链,最后找到Object.proptotype,如果还没找到就会返回null.

03/ 获取原型的办法:
- `p.__proto__`
- `p.constructor.prototype`
- `Object.getPrototypeOf(p)`

04/ 原型可以做什么?
- 实现继承
- 共享我们的一些实例和方法
```

[<<JavaScript 原型原型链>>]()

#### 12 、闭包



#### 13、继承

[<<JavaScript 深入之继承的多种方式和优缺点>>](https://github.com/mqyqingfeng/Blog/issues/16)

#### 14 、什么是 pure function

如果一个函数没有任何副作用（side-effects)，不会影响任何外部状态，对于任何一个相同的输入（参数），无论何时调用这个函数总是返回同样的结果，这个函数就是一个 pure function。

#### 15、 重绘回流

**01/ 前置知识:**

1. 浏览器使用流式布局模型 (Flow Based Layout)。

2. 浏览器会把`HTML`解析成`DOM`，把`CSS`解析成`CSSOM`，`DOM`和`CSSOM`合并就产生了`Render Tree`。

3. 有了`RenderTree`，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。

4. 由于浏览器使用流式布局，对`Render Tree`的计算通常只需要遍历一次就可以完成，但`table`及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用`table`布局的原因之一。

**02/ 什么是回流:**

当`Render Tree`中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

**02.1/ 会导致回流的操作：**

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除**可见**的`DOM`元素
- 激活`CSS`伪类（例如：`:hover`）
- 查询某些属性或调用某些方法

**02.2/ 一些常用且会导致回流的属性和方法：**

- `clientWidth`、`clientHeight`、`clientTop`、`clientLeft`
- `offsetWidth`、`offsetHeight`、`offsetTop`、`offsetLeft`
- `scrollWidth`、`scrollHeight`、`scrollTop`、`scrollLeft`
- `scrollIntoView()`、`scrollIntoViewIfNeeded()`
- `getComputedStyle()`
- `getBoundingClientRect()`
- `scrollTo()`

**03/ 什么是重绘:**

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

- **回流比重绘的代价要更高。**
- 有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。

**03.1/ 现代浏览器会对频繁的回流或重绘操作进行优化：**

- 浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

- 当你访问以下属性或方法时，浏览器会立刻清空队列：

  ```
  - clientWidth、clientHeight、clientTop、clientLeft


  - offsetWidth、offsetHeight、offsetTop、offsetLeft


  - scrollWidth、scrollHeight、scrollTop、scrollLeft


  - width、height


  - getComputedStyle()


  - getBoundingClientRect()
  ```

**04/ 如何避免回流重绘?**

- CSS

  - 避免使用`table`布局。
  - 尽可能在`DOM`树的最末端改变`class`。
  - 避免设置多层内联样式。
  - 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
  - 避免使用`CSS`表达式（例如：`calc()`）。

- JavaScript

  - 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
  - 避免频繁操作`DOM`，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
  - 也可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
  - 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
  - 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

**05 /总结:**

**回流必将引起重绘，重绘不一定会引起回流。**

参考:[<<浏览器的回流与重绘 (Reflow & Repaint)>>](https://juejin.im/post/6844903569087266823)

#### 16 / http 缓存

http 缓存按我自己的理解:

> 我更愿意叫做浏览器缓存,缓存主要发生在浏览器端,而 http 起到的作用是告诉浏览器是否使用缓存资源,是否进行缓存...

01/ 为什么要缓存呢?

> 用于性能提升,减少延迟,提高网页加载速度;同时,由于缓存文件可以重复利用,还可以减少带宽,降低网络负荷

02/ 浏览器怎么才能缓存?

> http 缓存机制主要在 http 响应头中设定，响应头中相关字段为 Expires、Cache-Control、Last-Modified、Etag。
> 可以控制浏览器是否使用缓存、缓存多久

03/ 那么如何知晓浏览器是读取了缓存还是直接请求服务器？如下图网站来做个示例：

![](https://s3.ax1x.com/2020/11/12/BzalAP.png)

第一次打开该网站后，如果再次刷新页面。会发现浏览器加载的众多资源中，有一部分 size 有具体数值，然而还有一部分请求，比如图片、css 和 js 等文件并没有显示文件大小，而是显示了 from dis cache 或者 from memory cache 字样。这就说明了，该资源直接从本地硬盘或者浏览器内存读取，而并没有请求服务器。

04/ 浏览器缓存方式?
浏览器缓存分为两种:

- 强制缓存
- 协商缓存

05/ 浏览器缓存机制

> 1\ 浏览器加载资源的时候,先根据资源的 http header 判断他是否命中强缓存,
>
>     -	如果命中,浏览器就先从自己的缓存(先从内存中找,找不到再去磁盘中找)中读取资源,不会发送请求到服务器
>
> 2\ 没有命中的时候,浏览器会发送一个请求给服务器,通过服务器端的另外的一些 http header 来验证这个资源是否命中协商缓存
>
> - 如果命中协商缓存,服务器会将这个请求返回,但是不会返回这个请求的数据,而是告诉客户端可以直接从缓存中加载资源,然后浏览器重新去缓存中读取数据
>
> 3\强缓存和协商缓存相同点:
>
> - 命中都是从浏览器缓存中加载资源
>
> 4\不同点
>
> - 强缓存不发请求到服务器
> - 协商缓存会发请求给服务器
>
> 05\协商缓存也没有命中的时候,浏览器直接去服务器获取数据

06/ 判断缓存机制

![](https://s3.ax1x.com/2020/11/12/BzB1bj.png)

参考:

- [<<前端优化：浏览器缓存技术介绍>>](https://juejin.im/post/6844903672556552205#heading-2)
- [<<http 面试必会的：强制缓存和协商缓存>>](https://juejin.im/post/6844903838768431118#heading-0)

#### 17 / SSR/BSR 区别

- SSR:服务端渲染

  对营销推广的要求比较高的产品,比如官网等

  ```
  - M+V发生在服务端,服务器压力较大
  - 页面访问和显示速度更快(DOM比较少)
  - 有利于SEO搜索引擎优化
  - 前后端不分离,后端开发压力大
  - 功能不能过于复杂,多用于功能交互都比较简单的产品
  ```

- BSR:客户端渲染

  对营销推广要求没有那么搞的产品,例如后台管理系统

  ```
  - M+v过程发生在浏览器,浏览器压力较大
  - 页面访问和加载速度没有服务端渲染快
  - 不利于SEO优化
  - 前后端分离,便于代码调试和维护
  - 可以做更加复杂的产品
  ```

#### 18 / SEO 优化

..................

#### 19 / MVC

MVC 模式的意思是，软件可以分成三个部分。即 Model 模型、View 视图、Controller 控件器。

> - View：视图，为用户提供使用界面，与用户直接进行交互。
>
> - Model：模型，承载数据，并对用户提交请求进行计算的模块。其分为两类，一类称为数据承载 Bean，一类称为业务处理 Bean。所谓数据承载 Bean 是指实体类，专门承载业务数据的，如 Student、User 等。而业务处理 Bean 则是指 Service 或 Dao 对象，专门用于处理用户提交请求的。
>
> - Controller：控制器，用于将用户请求转发给相应的 Model 进行处理，并处理 Model 的计算结果向用户提供相应响应。

MVC 架构程序的工作流程是这样的：

![](https://s3.ax1x.com/2020/11/16/DAKqrd.png)

> （1）用户通过 View 页面向服务端提出请求，可以是表单请求、超链接请求、AJAX 请求等。
>
> （2）服务端 Controller 控制器接收到请求后对请求进行解析，找到相应 的 Model 对用户请求进行处理。
>
> （3）Model 处理后，将处理结果再交给 Controller。
>
> （4）Controller 在接到处理结果后，根据处理结果找到要作为向客户端发回的响应 View 页面。页面经渲染（数据填充）后，再发送给客户端。

实际项目往往采用更灵活的方式

![](https://s3.ax1x.com/2020/11/16/DAMGIx.png)

> \1. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。
>
> \2. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。
>
> \3. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。

参考:

[<<MVC 与三层架构>>](https://juejin.im/post/6844903479568252935)

[<<MVC，MVP 和 MVVM 的图示>>](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

#### 20 / MVVM

![](https://s3.ax1x.com/2020/11/16/DAYfZF.png)

  ```
1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 ViewModule 传递。

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 ViewModule非常厚，所有逻辑都部署在那里。
4. 它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然
```

#### 21/ SPA 单页应用 & 多页应用

[<<SPA（单页面应用）和 MPA（多页面应用）>>](https://www.jianshu.com/p/a02eb15d2d70)
