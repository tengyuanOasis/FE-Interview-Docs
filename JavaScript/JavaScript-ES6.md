---
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2020-09-02
title: ES6
categories: JavaScript
tags: ES6
top:
permalink:
---
> <h2> 
>  ES6
> </h2>

<!--more-->

#### 1、ES6是什么

>  es6是ECMA为JavaScript订制的第6个版本,2015年6月发行,涵盖了2015 - 2020

####2、Let & const

 - let (声明变量,类似var,但是只在代码块中有效)
   - let声明的变量只在所处于的块级有效；
   - let没有`变量提升`的特性，而是`暂时性死区（temporal dead zone）`特性
   
 - const (声明常量)
   - 声明恒定变量，声明的同时就必须赋值，否则会报错
   
- 块级作用域

  - ES5 只有全局作用域和函数作用域，没有块级作用域 , 因此在某些场景可能会产生变量提升的问题

    ```js
    function func(){
        console.log(test);
        var test = 1;
    };
    func();
    //undefind
    在进入func之前,所有通过var声明的变量提前声明并赋予undefinded值
    ```

  - ES6

    - 全局作用域
    - 函数作用域
    - 块级作用域（声明的变量只在当前代码块中有效）

    ```
    function f1() {
      let n = 5;
      if (true) {
        let n = 10;
      }
      console.log(n); // 5
    }
    
    
    function f1() {
      var n = 5;
      if (true) {
        var n = 10;
      }
      console.log(n); // 10
    }
    ```

#### 3、解构赋值

-   数组解构
- 对象解构
- 字符串解构
- 数值及布尔值解构
- 函数参数解构

#### 4、字符串扩展

- Unicode支持
- 模板字符串
- 支持for…of遍历

#### 5、字符串新增方法

- String.fromCodePoint() 
- String.raw() 
- codePointAt()
-  includes(), startsWith(), endsWith()
-  repeat()
- padStart()，padEnd()
- trimStart()，trimEnd()

