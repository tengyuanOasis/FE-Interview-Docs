<!-- @format -->

JavaScript 基础

[TOC]

#### 01、 JS 数据类型(7+1)

- **基本数据类型:**

  > 1. **Undefined**：
  >    - Undefined 类型表示未定义，任何变量在赋值前是 Undefined 类型、值为 undefined。
  > 2. **Null**
  >   - 空对象指针，故 typeof null 会返回 object，Null 表示的是：“==定义了但是为空==”，所以，在实际编程时，一般把变量赋值为 null。
  >    
  >3. **Boolean**
  >    - true / false。
  > 4. **Number**
  > 
  >- 浮点数(demo： 数值必须有小数的数，1.1；0.1 等)
  > - 数值范围[Number.MIN_VALUE,Number.MAX_VALUE]
  > - NAN(not a number)
  > - Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。
  > - 浮点数的定义，非整数的 Number 类型无法用 `==`（ `=== `也不行） 来比较。 即 ( 0.1+0.2 ==0.3 ==>false)
  > 
  >5. **String**:
  >    - String 用于表示文本数据。String 有最大长度是 2^53 - 1，因为 String 的意义并非“字符串”，而是字符串的 UTF16 编码，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响的。
  > 6. **Symbol**:
  > 
  >   - Symbol（符号）是 ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是**唯一、不可变的**。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
  > 
  >   - 使用：
  > 
  >   - https://juejin.cn/post/6844903812046520328
  > 
  >   - https://cloud.tencent.com/developer/article/1191039
  > 
  >     ```js
  >      //符号需要使用Symbol()函数初始化。因为符号本身是原始类型，所以typeof操作符对符号返回symbol。
  >      let sym = Symbol();
  >      console.log(typeof sym); // symbol
  >                           
  >       //调用Symbol()函数时，也可以传入一个字符串参数作为对符号的描述（description），将来可以通过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关：
  >      let genericSymbol = Symbol();
  >      let otherGenericSymbol = Symbol();
  >      let fooSymbol = Symbol('foo');
  >      let otherFooSymbol = Symbol('foo');
  >      console.log(genericSymbol == otherGenericSymbol); // false
  >      console.log(fooSymbol == otherFooSymbol); // false
  >     ```
  > 
  >7. **bigInt**
  > 
  >   - **`BigInt`** 是一种内置对象，它提供了一种方法来表示大于 `2^53 - 1` 的整数。这原本是 Javascript 中可以用 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 表示的最大数字。**`BigInt`** 可以表示任意大的整数。
  >    - **`BigInt`** 可以表示任意大的整数
  >    - 不能用于 [`Math`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象中的方法；
  >    - 不能和任何 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 实例混合运算，两者必须转换成同一种类型。
  >    - 可以直接在常规 Number 后面增加一个字符 `n` 表示一个 BigInt。
  
- **引用数据类型:**

  引用数据类型指的是 Object 类型,其他如 Array,Date 等数据类型都可以理解为 Object 的子类

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

  - [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof): 检查 **实例**的原型链中是否包含指定**构造函数**的原型：

    [解析](https://juejin.cn/post/6844903613584654344)

    ```js
    console.log(person1 instanceof Person); // true
    console.log(person1 instanceof Object); // true
    console.log(Person.prototype instanceof Object); // true
    ```

  - `Object.prototype.toString.call()`:

    [解析](https://zhuanlan.zhihu.com/p/118793721)

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
> 👉 栈
>
> - 栈内存的简称，系统自动分配相对**固定大小**的内存空间，并由系统**自动释放**。
>
> - 栈内存特点，数据一执行完毕，变量会立即释放，节约内存空间。
>
> - 栈中的数据存取方式为线性结构，**后进先出**，便于管理。
>
> - 栈区内存保存变量标识符
>
> - **对于栈,只允许在尾部删除**,即后进先出
>
>   ```javascript
>   栈内存中的“后进先出”（LIFO，Last In First Out）是一种数据结构的特性，指的是最后进入栈的元素最先被取出。
>               
>   在栈（Stack）数据结构中，元素的插入和删除操作都发生在栈顶（top）位置。当一个新元素被插入到栈中时，它会被放置在栈顶的位置；而当要删除元素时，总是从栈顶开始删除。
>               
>   下面用一个简单的例子来解释“后进先出”：
>               
>   假设有一个栈，开始时是空的。我们按照以下步骤进行操作：
>               
>   元素 A 入栈：栈中变为 A
>   元素 B 入栈：栈中变为 B, A
>   元素 C 入栈：栈中变为 C, B, A
>   元素 D 入栈：栈中变为 D, C, B, A
>   现在栈中的元素为 D, C, B, A。按照“后进先出”的原则，当要取出元素时，总是从栈顶开始取出。因此，如果要从栈中取出一个元素，首先取出的是 D，然后是 C，然后是 B，最后是 A。这样就实现了“后进先出”的特性。
>   ```
>
>   
>
> 👉 堆
>
> - 堆内存的简称，**动态分配内存**，内存大小不一，**不是自动释放**。
> - 队列优先 , **先进先出**，方便存储和开辟内存空间。
> - 堆内存存储对象的地址
> - **对于队列,只允许在头部删除,后端插入**即先进先出

#### 03 、 什么是 JavaSctipt 垃圾回收机制?

- **为什么要垃圾回收?**

  > 随着前端业务需求的不断增多 js 会占用越来越多的内存。
  > 但是内存并不是无限的，故**需要垃圾回收机制去处理那些我们不再需要的变量、对象**

- **垃圾回收机制的特点:**

  垃圾回收机制会==定期==对那些我们不再使用的变量、对象所占用的内存释放

  > 原理:
  >
  > - 找出那些不再使用的变量，然后释放其占用的内存。
  > - 垃圾收集器会按照固定的时间间隔(或预定的收集时间)周期性地执行此操作。

- **垃圾回收的方式有哪些?**

  - **标记清除**

    - 当变量进入环境时,就将其标记为"进入环境",此时"进入环境"的变量是不可以被回收的"

    - 当变量离开环境时,就将其标记为"离开环境",此时"离开环境"的变量可以被回收

      ```js
      function func() {
      	const a = 1;
      	const b = 2;
      	// 函数执行时，a b 分别被标记 进入环境
      }
      
      func(); // 函数执行结束，a b 被标记 离开环境，被回收
      ```

  - **引用计数**

    - 统计引用类型变量声明后被引用的次数，当次数为 0 时，该变量将被回收

      ```js
      function func1() {
      	const c = {}; // 引用类型变量 c的引用计数为 0
      	let d = c; // c 被 d 引用 c的引用计数为 1
      	let e = c; // c 被 e 引用 c的引用计数为 2
      	d = {}; // d 不再引用c c的引用计数减为 1
      	e = null; // e 不再引用 c c的引用计数减为 0 将被回收
      }
      ```

    - 但是引用计数的方式，有一个相对明显的缺点——**循环引用**

      ```js
      function func5() {
      	let f = {};
      	let g = {};
      	f.prop = g;
      	g.prop = f;
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
	let obj1 = {};
	let obj2 = {};
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

> 1. 可执行上下文是一个抽象概念， <font color="red">用来描述js执行过程中的环境和状态，包含了代码执行所需要的信息</font>，如变量，函数，作用域，this指向等信息；
>
> 2. **可执行上下文分为**： 全局可执行上下文 和 函数可执行上下文，每当 JavaScript 代码执行时，都会创建一个执行上下文并加入到执行上下文栈中 ； 
> 3. **全局执行上下文（Global Execution Context）：**
>    - 全局执行上下文是在执行 JavaScript 代码时首先创建的执行上下文。
>    - 全局执行上下文是唯一的，它代表了整个 JavaScript 程序的运行环境。
>    - 全局执行上下文会创建全局对象（Global Object）、this 指向全局对象，并且将全局对象添加到作用域链的顶端。
>    - 在浏览器环境中，全局对象是 window 对象；在 Node.js 环境中，全局对象是 global 对象。
> 4. **函数执行上下文（Function Execution Context）：**
>    - 每当调用一个函数时，都会创建一个对应的函数执行上下文。
>    - 每个函数执行上下文都有自己的作用域链、变量环境、以及 this 指向。
>    - 函数执行上下文会被添加到执行上下文栈（Execution Context Stack，又称调用栈 Call Stack）中，称为“压栈”。
>    - 当函数执行完成后，其对应的执行上下文会被从执行上下文栈中移除，称为“出栈”。
> 5. **执行上下文栈（Execution Context Stack）：**
>    - 执行上下文栈用来管理执行上下文的创建和销毁，遵循后进先出（LIFO）的原则。
>    - 在 JavaScript 中，使用函数调用时，会将对应的函数执行上下文压入执行上下文栈顶部。
>    - 当函数执行完毕时，对应的执行上下文会被从执行上下文栈顶部移除。
> 6. **作用域链（Scope Chain）：**
>    - 每个执行上下文都有一个与之关联的作用域链，用来解析变量和函数的引用。
>    - 作用域链由当前执行上下文的变量对象（Variable Object）和其父级执行上下文的作用域链组成。

作用域和作用域链是什么、

> **作用域：scope**
>
> 作用域是指变量和函数的可访问范围，即变量或者函数在代码中的有效区域，js中作用域可以分为全局作用域和局部作用域
>
> - **全局作用域（Global Scope）：** 全局作用域是整个 JavaScript 程序范围内的作用域，在任何地方都可以访问到全局作用域中定义的变量和函数
> - **局部作用域（Local Scope）：** 局部作用域是在函数内部定义的作用域，只在函数内部有效，外部无法访问到函数内部的变量和函数
> - 在 JavaScript 中，变量在被引用时会按照词法作用域规则（也称为静态作用域）来确定其作用域，即在定义时就已经确定了其作用域范围，而不是在执行时确定。
>
> **作用域链（Scope Chain）：**
>
> 当在Javascript中使用一个变量的时候，首先Javascript引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，直到找到该变量为止。
>
> 作用域链是 JavaScript 中用于解析变量和函数引用的机制，它是由当前执行上下文的变量对象（Variable Object）和其父级执行上下文的作用域链组成。
>
> - **变量对象（Variable Object）：** 每个执行上下文都有一个与之关联的变量对象，用来存储在该执行上下文中定义的变量、函数声明和函数参数。
> - **作用域链的构建：** 当 JavaScript 引擎执行代码时，会根据词法作用域规则从当前作用域开始逐级向上查找变量和函数的引用。如果在当前作用域找不到，则会向父级作用域继续查找，直到找到为止。这种由当前执行上下文和其父级执行上下文构成的链条就是作用域链。
>
> 通过作用域链，JavaScript 可以实现变量和函数在不同作用域的访问和引用，保证了代码的正确执行。理解作用域和作用域链是 JavaScript 编程中的关键，可以帮助开发者更好地管理变量和函数，避免出现意外的错误和行为。

#### 07 、 JavaScript 在浏览器中如何执行的

>
> JavaScript 在浏览器中的执行过程涉及多个步骤，包括加载、解析、编译和执行。以下是 JavaScript 在浏览器中的执行过程简要概述：
>
> 1. **解析（Parsing）：**
>    - 当浏览器加载 HTML 页面时，会逐行解析 HTML 和 CSS 代码，并将其中的 JavaScript 脚本标记为待执行状态。
>    - 解析器会将 JavaScript 代码解析成抽象语法树（Abstract Syntax Tree，AST），这是一种树形结构的数据表示，用于表示代码的语法结构。
> 2. **编译（Compilation）：**
>    - 解析完成后，浏览器的 JavaScript 引擎会对 AST 进行编译，将其转换为可执行的机器代码。
>    - 在这个阶段，可能会进行优化操作，例如标识变量的类型、优化代码执行路径等，以提高代码的执行效率。
> 3. **执行（Execution）：**
>    - 编译完成后，JavaScript 引擎会执行生成的机器代码。
>    - 在执行过程中，JavaScript 引擎会创建执行上下文（Execution Context），包括全局执行上下文和函数执行上下文，并将其添加到执行上下文栈中。
>    - 执行上下文包括作用域链、变量环境、this 指向等信息，用于管理代码的作用域和执行环境。
>    - JavaScript 引擎按照执行上下文栈的顺序依次执行代码，每当调用一个函数时，就会创建一个对应的函数执行上下文，并将其压入执行上下文栈中；当函数执行完成后，对应的执行上下文会被从执行上下文栈中移除。
> 4. **事件循环（Event Loop）：**
>    - 在浏览器环境中，JavaScript 的执行是单线程的，即一次只能执行一个任务。
>    - 为了处理异步任务（例如定时器、事件监听器、网络请求等），浏览器提供了事件循环机制。
>    - 事件循环负责将异步任务加入到任务队列（Task Queue）中，并在执行栈为空时从任务队列中取出任务执行。
> 5. **渲染（Rendering）：**
>    - 在 JavaScript 执行的过程中，可能会涉及到对页面内容的更新或者样式的修改。
>    - 当 JavaScript 执行完成后，浏览器会根据最新的 DOM 树和 CSS 样式来更新页面的渲染结果，将最终的页面内容呈现给用户。
>
> 总的来说，JavaScript 在浏览器中的执行过程包括解析、编译、执行和事件循环等多个阶段，这些阶段相互配合，共同实现了 JavaScript 代码的执行和页面的渲染。

#### 08 、 从输入 url 到页面加载过程

详见《从输入URL到渲染全过程》

#### 09 、 内部属性[[class]]是什么

所有`typeof`返回值为 `object` 的对象（如数组）都包含一个内部属性 [[Class]],这个属性无法直接访问，一般通过以下代码查看

```js
Object.prototype.toString.call(Array); //"[object Function]"
```

#### 10 、 Js 内置对象都有哪些

> js 内置对象主要是只在程序执行前存在全局作用域里面的由 js 定义的一些全局属性,函数和用来实例化其他对象的构造函数对象.
>
> 一般我们经常用到的
>
> - 全局函数变量值: NaN , undefined ,
>
> - 全局函数: parseInt() , parseFloat()
>
> - 用来实例化的全局构造函数: Date , Object 等

#### 11 、原型原型链

> 01/ 原型:
>
> - Js 中我们使用构造函数来新建对象的
> - 每个构造函数内部都有一个 prototype 属性,这个属性值是一个对象,包含了可以由该构造函数共享的实例和方法
> - 我们使用构造函数实例化一个对象后,这个对象内部有一个`__proto__`指针,可以指向构造函数 prototype 属性对应的值,es5 中我们一般称他为对象的原型 浏览器可以通过`__proto__`值来获取,也可以用 Object.getPrototypeOf()找到对象的原型
>
> 02/ 原型链:
>
> - 当我们访问一个对象的属性时,如果这个对象里面不存在该属性的时候,那么就会到这个对象的原型对象中找这个属性,就这样一层层的找就构成了原型链,最后找到 Object.proptotype,如果还没找到就会返回 null.
>
> 03/ 获取原型的办法:
>
> - `p.__proto__`
> - `p.constructor.prototype`
> - `Object.getPrototypeOf(p)`
>
> 04/ 原型可以做什么?
>
> - 实现继承
> - 共享我们的一些实例和方法

#### 12 、闭包

> - 什么是闭包
>
>   - 闭包本质就是上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放
>
>   - 函数return出一个函数，使得外部可以访问函数内部变量
> - 优点
>   - 可以访问内部变量
>   - 避免污染全局变量
> - 缺点
>   - 变量一直存在于内存中，不会被垃圾回收，使用不当会造成内存泄漏

#### 13、继承

[<<JavaScript 深入之继承的多种方式和优缺点>>](https://raw.githubusercontent.com/mqyqingfeng/Blog/issues/16)

#### 14 、什么是 pure function

如果一个函数没有任何副作用（side-effects)，不会影响任何外部状态，对于任何一个相同的输入（参数），无论何时调用这个函数总是返回同样的结果，这个函数就是一个 pure function。

#### 15、 重绘回流 （TODO：<font color="red">重写</font>）

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

> offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight

**03/ 什么是重绘:**

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

- **回流比重绘的代价要更高。**
- 有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。

**03.1/ 现代浏览器会对频繁的回流或重绘操作进行优化：**

- 浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

- 当你访问以下属性或方法时，浏览器会立刻清空队列：

  ```
  clientWidth、clientHeight、clientTop、clientLeft


  - offsetWidth、offsetHeight、offsetTop、offsetLeft


  - scrollWidth、scrollHeight、scrollTop、scrollLeft


  - width、height


  - getComputedStyle()


  - getBoundingClientRect()

如何避免重绘回流

- 如果想设定元素的样式，通过改变元素的 `class` 类名 (尽可能在 DOM 树的最里层)

- 避免设置多项内联样式
- 应用元素的动画，使用 `position` 属性的 `fixed` 值或 `absolute` 值(如前文示例所提)
- 避免使用 `table` 布局，`table` 中每个元素的大小以及内容的改动，都会导致整个 `table` 的重新计算
- 对于那些复杂的动画，对其设置 `position: fixed/absolute`，尽可能地使元素脱离文档流，从而减少对其他元素的影响
- 使用css3硬件加速，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘
- 避免使用 CSS 的 `JavaScript` 表达式

**05 /总结:**

**回流必将引起重绘，重绘不一定会引起回流。**

参考:[<<浏览器的回流与重绘 (Reflow & Repaint)>>](https://juejin.im/post/6844903569087266823)

#### 16 、 SSR/BSR 区别

- SSR:服务端渲染，对营销推广的要求比较高的产品,比如官网等

- BSR:客户端渲染 ， 对营销推广要求没有那么高的产品,例如后台管理系统

  - M+v 过程发生在浏览器,浏览器压力较大
  - 页面访问和加载速度没有服务端渲染快
  - 不利于 SEO 优化
  - 前后端分离,便于代码调试和维护
  - 可以做更加复杂的产品

#### 17、var 、let 、const

三者都用于变量声明方式

- var

  - var 操作符定义的变量会成为包含它的函数的局部变量。

  - 使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的**变量会自动提升**到函数作用域顶部

    ```js
    function foo() {
    	console.log(age);
    	var age = 26;
    }
    foo(); // undefined
    
    /之所以不会报错，是因为ECMAScript运行时把它看成等价于如下代码：
    function foo() {
      var age;
      console.log(age);
      age = 26;
    }
    foo();  // undefined

- let 声明

  - **let 声明的范围是块作用域，而 var 声明的范围是函数作用域**。

  - let 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升。(暂时性死区)

  - 块级作用域是什么？

    - 块级作用域就是包含在函数括号内{...}的作用域。在这个作用域中，拥有着和函数作用域相同的行为。

    ```js
    // name会被提升
    console.log(name); // undefined
    var name = 'Matt';
    // age不会被提升
    console.log(age); // ReferenceError：age没有定义
    let age = 26;
    ```

- const 声明

  - const 声明常量，且不可修改

#### 18、JS中的this指向

> 在js中，this指向代表着当前执行代码的上下文。this的具体指向取决于代码的执行环境。
>
> 1. 全局环境下的this
>
>    - 全局上下文中，this一般指向全局对象window
>
> 2. 函数上线文中的this
>
>    - 当函数被作为普通函数调用时，`this` 指向全局对象（非严格模式下）或者 `undefined`（严格模式下）。
>
>      ```javascript
>      function greet() {
>          console.log(this.name);
>      }
>      // 在浏览器环境中
>      window.name = 'Global Name';
>      greet(); // 输出 'Global Name'
>      // 在严格模式下
>      'use strict';
>      greet(); // 输出 'undefined'
>      ```
>
>    - 当函数被作为对象的方法调用时，`this` 指向调用该方法的对象。
>
>      ```javascript
>      const obj = {
>          name: 'Object Name',
>          greet: function() {
>              console.log(this.name);
>          }
>      };
>      obj.greet(); // 输出 'Object Name'
>      ```
>
>    - 当函数被作为构造函数调用时（使用 `new` 关键字），`this` 指向新创建的实例对象。
>
>      ```javascript
>      function Person(name) {
>          this.name = name;
>      }
>      const alice = new Person('Alice');
>      console.log(alice.name); // 输出 'Alice'
>      ```
>
>    - 当使用 `apply()`、`call()` 或 `bind()` 方法显式指定 `this` 的值时，`this` 将被设置为传入的第一个参数。
>
>      ```javascript
>      function greet() {
>          console.log(this.name);
>      }
>      const obj = { name: 'Custom Name' };
>      greet.call(obj); // 输出 'Custom Name'
>      greet.apply(obj); // 输出 'Custom Name'
>      ```
>
>      
>
> 3. **箭头函数中的 `this`：** 箭头函数没有自己的 `this`，它的 `this` 指向在定义时的外层作用域的 `this`，与普通函数不同。

#### 19、call、apply、bind的区别

> 1. 三者都可以改变this指向
> 2. **`cll` 方法：**
>    1. `call` 方法是函数对象的原型方法，用于在指定的上下文中调用函数。
>    2. 语法：`function.call(thisArg, arg1, arg2, ...)`
>    3. 第一个参数 `thisArg` 指定了函数执行时的上下文，即函数中 `this` 的指向。
>    4. 后续的参数 `arg1, arg2, ...` 是函数执行时的参数列表。
>    5. `call` 方法会立即调用函数，并传入指定的参数，返回函数执行结果。
> 3. **`apply` 方法：**
>    - `apply` 方法与 `call` 方法类似，也是函数对象的原型方法，用于在指定的上下文中调用函数。
>    - 语法：`function.apply(thisArg, argsArray)`
>    - 第一个参数 `thisArg` 指定了函数执行时的上下文，即函数中 `this` 的指向。
>    - 第二个参数 `argsArray` 是一个数组，包含了函数执行时的参数列表。
>    - `apply` 方法会立即调用函数，并传入指定的参数数组，返回函数执行结果。
> 4. **`bind` 方法：**
>    - `bind` 方法不会立即调用函数，而是返回一个新的函数，将指定的上下文和参数绑定到新函数中。
>    - 语法：`function.bind(thisArg, arg1, arg2, ...)`
>    - 第一个参数 `thisArg` 指定了新函数执行时的上下文，即新函数中 `this` 的指向。
>    - 后续的参数 `arg1, arg2, ...` 是新函数执行时的参数列表。
>    - `bind` 方法返回一个新函数，调用这个新函数时，会以指定的上下文和参数执行原始函数。
>    - 注意：`bind` 方法返回的新函数可以被多次调用，每次调用都会以绑定的上下文执行。
> 5. 综上所述，`call` 和 `apply` 方法是立即调用函数，并传入指定的参数；而 `bind` 方法返回一个新函数，并绑定了指定的上下文和参数，不会立即执行原始函数。

#### 20、Null 和 Undefined 的异同点

> 相同点:
>
> - 都是 js 基本数据类型，两个基本数据类型都只有一个值，null、和 undefined
>
> 区别：
>
> - undefined 代表未定义，一般声明了但是未赋值(定义)的时候会返回 undefined；
> - null 主要作为一个初始值赋值给变量，作为初始化；
> - `typeof undefined ` //undefined
> - `typeof null` //object

#### 21、isNaN 与 Number.isNaN 的区别

[详细文档](https://nicholaslee119.github.io/2017/10/30/windowIsNan%E5%92%8CnumberIsNan%E7%9A%84%E5%8C%BA%E5%88%AB/)

1. isNaN ==> is not a numner , 在判断非 number 类型，如 String、Object 等也会返回 true
2. Number.isNaN ===> 只判断是否是 NaN

![image-20220614175237830](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/image-20220614175237830.png)

21、[Js 中变量提升及函数提升](https://segmentfault.com/a/1190000038344251)

> ##### js 执行代码分两个阶段
>
> 1. 语法词法分析阶段（预编译阶段）
> 2. 执行阶段
>
> ##### 变量提升
>
> 1. 只有**声明**被提升，**初始化**不会被提升（赋值不会提升）
> 2. 声明会被提升到当前作用域的顶端
>
> ##### 函数提升
>
> 1. 函数声明和初始化都会被提升
>
>    例子 1：函数声明可被提升
>
>    ```javascript
>    console.log(square(5)); // 25
>    function square(n) {
>    	return n * n;
>    }
>    ```
>
>    预编译后
>
>    ```javascript
>    function square = (n) {
>      return n * n;
>    }
>    console.log(square(5)); // 25
>    ```
>
> 2. 函数表达式不会被提升
>
>    例子 2：函数表达式不可被提升
>
>    ```javascript
>    console.log(square); // undefined
>    console.log(square(5)); // square is not a function =》 初始化并未提升，此时 square 值为 undefined
>    var square = function (n) {
>    	return n * n;
>    };
>    ```
>
>    预编译后
>
>    ```javascript
>    var square;
>    console.log(square); // undefined =》赋值没有被提升
>    console.log(square(5)); // square is not a function =》 square 值为 undefined 故报错
>    square = function (n) {
>    	return n * n;
>    };
>    ```

#### 21、Js 中箭头函数，声明式函数、普通函数的区别

> 箭头函数：const test = ()=>{}
>
> 声明式函数： const test = function(){}
>
> 普通函数：function test（）{}

箭头函数：

> - 箭头函数无 arguments 对象
> - 箭头函数内部的 this 与其自身的调用无关系，与它上层（声明位置）this 指向相同。
> - 箭头函数无 prototype 属性，无法作为构造函数

声明式函数：

> - 函数表达式不可被提升

#### 22、Promise.all、Promise.allSettled 的区别

- 两者主要是在遇到什么情况就返回上的区别。
- Promise.all 在全部给定 promise 全部 resolve 或者某个 reject 的时候就会返回结果。
- Promsie.allSettled 在所有给定的 promise 都已经 fullfilled 或 rejeced 后的 promise，并带有一个数组，每个对象对应 promise 的结果。

看示例：

- **Promise.all 给定 promise 全部 resolve**

```javascript
const p = Promise.all([1, 2, 3]);
// p是一个promise对象，状态是fulfilled
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71397eaede52420caba7d54639644d6a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

- **Promise.all 给定的 promise 其中一个 reject**

```javascript
// 此时会报错，因为没有对异常进行处理
const p2 = Promise.all([1, Promise.reject(2), 3]);

const p2 = Promise.all([1, Promise.reject(2), 3]).catch((err) => console.log(err));
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fee077f32526432da070e4153d6bc1f9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

**Promise.allSettled 给定 promise 全部 resolve**

```javascript
// p3是一个promise对象，状态是fulfilled
const p3 = Promise.allSettled([1, 2, 3]);
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f94dcb63d04d4fdfa57d153f25a0ae0a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

**Promise.allSettled 给定的 promise 其中一个 reject**

```javascript
// p4是一个promise对象，状态是fulfilled
const p4 = Promise.allSettled([1, Promise.reject(2), 3]);
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb060f02cba94382b4cbbb6c8a3a1707~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

- **promise.all 中第 2 个 promise，reject，第 3 个 promise 还会执行么?**

会执行。

```javascript
const p1 = new Promise((resolve) => {
	console.log('promise1');
	resolve('promise1');
});
const p2 = new Promise((resolve, reject) => {
	console.log('promise2');
	reject('promise2 error');
});
const p3 = new Promise((resolve) => {
	console.log('promise2');
	resolve('promise3');
});
Promise.all([p1, p2, p3]);
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69ea606052d446dda71dc69a992c0be8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

#### 23、JS模块化

1. **ES Module (ESM)**:
   - 优点：
     - 官方标准，是 JavaScript 的未来发展趋势。
     - 支持静态分析，可以进行静态优化。
     - 支持动态导入，可以在运行时动态加载模块。
   - 缺点：
     - 不支持循环依赖。
     - 浏览器兼容性较差，需要使用 Babel 等工具转换。
   - 区别：
     - 使用 `import` 和 `export` 关键字进行模块导入导出。
2. **CommonJS (CJS)**:
   - 优点：
     - 浏览器端和服务器端都可以使用。
     - 支持动态导入。
   - 缺点：
     - 同步加载，阻塞执行。
     - 不适用于浏览器端，需要使用打包工具转换。
   - 区别：
     - 使用 `require()` 方法导入模块，使用 `module.exports` 导出模块。
3. **Asynchronous Module Definition (AMD)**:
   - 优点：
     - 支持异步加载模块。
     - 适用于浏览器端。
   - 缺点：
     - 异步加载方式复杂，需要使用特定的模块加载器。
   - 区别：
     - 使用 `define()` 方法定义模块，使用 `require()` 方法异步加载模块。
4. **CommonJS 和 ES Module 的区别**:
   - CommonJS 是同步加载模块，而 ES Module 是异步加载模块。
   - ES Module 支持静态分析，可以进行静态优化，而 CommonJS 不支持。
   - ES Module 支持循环依赖检测，而 CommonJS 不支持。

在实际开发中，根据项目的特点和环境选择合适的模块引入方式是很重要的。在现代的前端项目中，通常会使用 ES Module，而在 Node.js 项目中则会使用 CommonJS。



#### 24、window.onerror可以捕获到 promise以外的错误

> `window.onerror` 是 JavaScript 中用于全局捕获运行时错误的事件处理函数。它可以捕获到整个文档中发生的错误，包括但不限于 Promise 中的错误。
>
> 当发生未被捕获的错误时，`window.onerror` 会被触发，你可以在这个事件处理函数中处理错误信息。这个事件处理函数接收四个参数：错误消息、URL、行号和列号。其中，错误消息和 URL 是必须的，行号和列号是可选的。
>
> 以下是一个示例：
>
> ```
> javascriptCopy code
> window.onerror = function(message, source, lineno, colno, error) {
>   console.error('Error:', message, 'at', source, 'line', lineno, 'column', colno);
> };
> ```
>
> 在这个示例中，如果任何未被捕获的错误发生，都会触发 `window.onerror`，然后在控制台打印错误信息、出错的文件、行号和列号。
>
> 需要注意的是，`window.onerror` 只能捕获到同源的 JavaScript 运行时错误，无法捕获到跨域脚本中的错误、语法错误以及资源加载错误等。对于跨域脚本中的错误，你可以使用 `window.addEventListener('error', handler)` 事件来捕获。
>
> 另外，对于 Promise 中的错误，如果没有显示地使用 `try...catch` 进行捕获，那么这些错误也会被 `window.onerror` 捕获到。因此，`window.onerror` 可以用来捕获到 Promise 以外的错误。
