---
coverWidth: 1200
coverHeight: 750
title: Promise
date: 2020-11-15
categories: JavaScript
tags: Promise
top:
cover: https://images.unsplash.com/photo-1598099114415-3076be5be744?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjg5ODI0fQ
---
> <h4> 
> 前端异步处理之 - Promise vs async/await
> </h4>



<!--more-->

### 前置知识

#### 1/ js回调地狱

> 在开发过程中我们经常遇到这种情况: 
>
> 异步js或使用回调的js很难直观地得到正确的结果 , 一个异步函数的输出是另外一个异步函数的输入,如果嵌套层数过多，可读性和可以维护性都会变得很差，产生所谓的“回调地狱

```
let fs = require('fs')

fs.readFile('./name.txt','utf8',function(err,data){
  fs.readFile(data, 'utf8',function(err,data){
    fs.readFile(data,'utf8',function(err,data){
      console.log(data);
    })
  })
})
```

总结一下回调地狱出现的原因:
 - **嵌套调用**，第一个函数的输出往往是第二个函数的输入；
- **处理多个异步请求并发**，开发时往往需要同步请求最终的结果;

#### 2/ 怎么处理回调地狱

- **消灭嵌套调用**：通过 Promise 的链式调用可以解决(.then())；
- **合并多个任务的请求结果**：使用 Promise.all 获取合并多个任务的错误处理。

### Promise

#### 1.什么是promise?

![](https://s3.ax1x.com/2020/11/13/DS4cZt.png)
 如上图所示,Promise是一个构造函数,身上有

- all()

- reject()

- resolve()几个方法,

prototype上有

- then()
- catch()等方法

#### 2.Promise的特征

- 对象的状态不受外界影响,`Promise`对象代表一个异步操作，有下面这三种状态,只有异步操作可以决定当前是哪种状态
  - pending(进行中)
  - fulfilled(成功)
  - rejected(失败)
- 状态一旦改变, 结果就不再变化,Promise状态只可能会出现下面两种情况
  - pending ---> fulfilled
  - pending ---> rejected

**`Promise`的优点：**

**可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。**

#### 3.Promise怎么创建?

- `Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 `JavaScript` 引擎提供，不用自己部署
- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”（即从 `pending` 变为 `resolved`），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
- `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”（即从 `pending`变为 `rejected`），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

```js
let promise = new Promise((resolve, reject) => {
  //此处执行一些异步操作（调用后台API，定时器等）
  if (/*异步操作成功*/) {
    resolve(value);
  } else {
    reject(error)
  }
})
```
- `then`方法可以接受两个回调函数作为参数。第一个回调函数是`Promise`对象的状态变为`resolved`时调用，第二个回调函数是`Promise`对象的状态变为`rejected`时调用。
- 其中，第二个函数是可选的，不一定要提供。这两个函数都接受`Promise`对象传出的值作为参数。

```
promise.then(res=>{
    //对于成功回调接受的数据做处理
},err=>{
    //对于失败的回调数据做处理
})
```



#### 4. 实现一个符合PromiseA+规范的Promise

该版本只能简单实现处理同步/异步函数, then的链式调用并没有真正实现...需要再做研究

```
//1.先定义三个状态
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
//2.clss实例化一个promise
class Promise {
  constructor(executor) {
    this.status = PENDING;
    //存放成功状态
    this.success = undefined;
    //存放失败状态
    this.error = undefined;

    // 存放成功的回调
    this.onResolvedCallbacks = [];
    // 存放失败的回调
    this.onRejectedCallbacks = [];

		//3.实现resolve , reject
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.success = value;
        //这句话的意思是把存储起来的异步回调也执行掉
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    let reject = (error) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.error = error;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

	 //异常捕获
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  
	//4.实现then方法
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      return onFulfilled(this.success)
    }
    if (this.status === REJECTED) {
      return onRejected(this.error)
    }
    if (this.status === PENDING) {
      // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.success)
      });
      this.onRejectedCallbacks.push(() => {
        onRejected(this.error);
      })
    }
  }
}

//测试demo
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 2000)
}).then((success) => {
  console.log('success', success)
}, (error) => {
  console.log('error')
})

// success ok
```

####   5. async/await

> 一种相对Promise更为优雅的异步函数处理方案

5.1	什么是async/await

- `async`是异步的意思
- `await`有等待的意思
- `async`用于申明一个`function`是异步的，而`await` 用于等待一个异步方法执行完成。

5.2     使用

```
async getAjaxData(){
	let res = await sendAjax()
}
```

5.3 注意事项

```
- await操作符等的是一个返回的结果，那么如果是同步的情况，那就直接返回了。
- 如果是异步的情况下，await会阻塞整一个流程，直到结果返回之后，才会继续下面的代码。
阻塞代码是一个很可怕的事情，而async函数，会被包在一个promise中，异步去执行。所以await只能在async函数中使用，如果在正常程序中使用，会造成整个程序阻塞，得不偿失。
```

#### 6.Promise 和 async/await区别

直接上代码

- Promise版本

```
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3]);
        })
        .then(times => {
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();
```

- async / await 版本

```
async function doIt() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    const time3 = await step2(time1, time2);
    const result = await step3(time1, time2, time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

doIt();
```

更详细的可以参考:

- [<<你不知道的promise>>](https://zhuanlan.zhihu.com/p/288384170)
- [<<学习Promise基础及手写Promise>>](https://juejin.im/post/6844903843507994632)
- [<<理解async/await>>](https://juejin.im/post/6844903960910757902)