---
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2020-10-01
title: JavaScript处理异步函数几种方案
categories: JavaScript
tags: JavaScript
top:
permalink:
---
> <h4> 
>  for-in & for-of的区别 和 map-for & Each区别
> </h4>

<!--more-->

# JS处理异步函数几种方案

#### 1.回调函数

顾名思义: 将一个函数作为参数传入另外一个函数中,等父级函数执行完再执行回调函数

```js
function f1(callBack){
    console.log("hello")
    let data = "world"
	callBack(data)
}
f1((data)=>console.log(data))
// hello
// world
```

回调函数优缺点:

> 优点: 简单方便,适用于**只有一个异步的操作**
> 缺点:如果嵌套层级过深,会形成回调地狱,耦合度过强

```js
getData('x',()=>{
    //callBack函数体
    getData2('y',()=>{
        //callBack函数体
        getData3('z',()=>{
            //callBack函数体
            ...
        })
    })
})
```

#### 2.Promise对象+async+await(最常用,终极解决方案)

- promise严格来说是一种模式,可以来管理异步代码

- 什么是Promise?

  > Promise是解决异步编程的一种方案

- 优点:

  > 可以解决回调地狱问题,且Promise只有resolve 和 reject 两种状态

- 常用API:

  > resolve : 返回异步操作成功结果
  > reject    : 返回异步操作失败结果
  > then      : 执行Promise状态为成功的操作
  > catch     :执行Promise状态为失败的操作
  > finally    :不管Promise是否成功都执行的操作
  
- 使用:

  ```js
      const p  = new Promise((resolve,reject)=>{
          //异步操作
          if(success){
              resolve('some message')
          }else{
              reject(err)
          }
      })
      p.then(res=>{
          //resolve数据
      }).catch(err=>{
          //rejects数据
      }).finally(()=>{
          //执行一些操作
      })
  ```

- 使用案例2: 封装nodejs的request模块

  ```js
  const request = require("request");
  const requestData = (uri) => {
      return new Promise((resolve, reject) => {
          request({
              uri
          }, (err, res, body) => {
              resolve({
                  err,
                  res,
                  body
              })
          })
      })
  };
  //使用
  let url = "https://imgcache.qq.com/wss/security//ssl/build/ssl-444feca18a7857546ff9b39bbc95a17c.js";
  (async() => {
      let {
          err,
          res,
          body
      } = await requestData(url)
      console.log(res)
  })()
  ```


#### 3.事件绑定

事件绑定的方法有三种

一，事件监听，
二，对象.on方法，
三，直接在行内写
事件监听有两种方法，

> - addlisenerevent
> - attachevent

两种事件监听的区别:
addeventlistener参数个数一般是三个，参数书写（事件类型）不写on执行顺序为：顺序注册倒序执行，兼容非IE7.8，最后一个参数是TRUE或FALSE，TRUE为捕获，FALSE为冒泡，默认FALSE
attachevent参数个数为两个，参数书写不写on，执行顺序：顺序注册倒序执行，兼容ie78

#### 4.Generator函数	