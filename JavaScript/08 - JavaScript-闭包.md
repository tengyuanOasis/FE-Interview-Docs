---
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2020-11-01
title:
categories: JavaScript
tags: 闭包
top:
permalink:
---

> <h4> 
>  闭包
> </h4>


<!--more-->

#### 0/前置知识:

[<<JavaScript作用域&可执行上下文>>](https://juntengma.github.io/2020/11/03/JavaScript/JavaScript%E4%BD%9C%E7%94%A8%E5%9F%9F/)

#### 1/什么是闭包?

```
- 内部函数可以访问其所在的外部函数中声明的参数和变量
- 闭包找到的是同一地址中,父级函数中对应变量最终的值
```

#### 2/闭包的特点

```
- 让外部访问函数内部变量成为可能；
-	局部变量会常驻在内存中；
- 可以避免使用全局变量，防止全局变量污染；
- 可能会造成内存泄露
```

#### 3/实际使用案例

- 函数防抖节流

  ```
  function debounce(fun, delay) {
    let timer
    return function (args) {
      let _this = this
      let _args = args
    	clearTimeout(timer)
      timer = setTimeout(() => {
      	fun.call(_this, _args)
      }, delay);
    }
  }
  ```

- 使用闭包设计单例模式

  ```
  class CreateUser {
      constructor(name) {
          this.name = name;
          this.getName();
      }
      getName() {
           return this.name;
      }
  }
  // 代理实现单例模式
  var ProxyMode = (function() {
      var instance = null;
      return function(name) {
          if(!instance) {
              instance = new CreateUser(name);
          }
          return instance;
      }
  })();
  // 测试单体模式的实例
  var a = ProxyMode("aaa");
  var b = ProxyMode("bbb");
  // 因为单体模式是只实例化一次，所以下面的实例是相等的
  console.log(a === b);    //true
  ```

- 为多个组件独立属性

  假如我现在要在页面中使用echarts画6个线状图，需要6个容器 

  需要为每个容器元素声明一个独立id,不然会混乱

  ```
   constructor(){
   this.state = {id: "EchartsLine"+Util.clourse()};
   }
    componentDidMount() {
        this.myEChart =echarts.init(document.getElementById(this.state.id));//不同id
    }
  ```

  ```
  <div id={this.state.id} className='echarts-line'></div>
  ```

  ```
  clourse(){
      let clourse = (function(){
          var a = 1;
          return function(){
              return a++;
          }
      })(this);
      this.clourse = clourse;
  }
  //使用数字命名 不用害怕被篡改
  ```

- 设置私有变量

  ```
  let _width = Symbol();
      class Private {
          constructor(s) {
              this[_width] = s
          }
          foo() {
              console.log(this[_width])
          }
      var p = new Private("50");
      p.foo();
      console.log(p[_width]);//可以拿到
  ```

  ```
   //赋值到闭包里
      let sque = (function () {
          let _width = Symbol();
  
          class Squery {
              constructor(s) {
                  this[_width] = s
              }
  
              foo() {
                  console.log(this[_width])
              }
          }
          return Squery
      })();
      let ss = new sque(20);
      ss.foo();
      console.log(ss[_width])
  ```

- 拿到正确的值（老掉牙的问题了😝）

  ```
  for(var i=0;i<10;i++){
      setTimeout(function(){
          console.log(i)//10个10
      },1000)
  }
  ```

  ```
  for(var i=0;i<10;i++){
  ((j)=>{
    setTimeout(function(){
          console.log(j)//1-10
      },1000)})(i)
  }
  ```

  原理是 声明了10个自执行函数，保存当时的值到内部



