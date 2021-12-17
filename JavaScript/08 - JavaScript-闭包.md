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

- 内部函数可以访问其所在的外部函数中声明的参数和变量
- 闭包找到的是同一地址中,父级函数中对应变量最终的值

> 个人理解： 闭包就是函数return一个可以访问该函数内部参数及变量的函数，达到外部访问函数内部变量的目的

#### 2/闭包的特点

- 让==外部==访问==函数内部变量==成为可能；
-	局部变量会常驻在内存中；
- 可以避免使用全局变量，防止全局变量污染；
- 可能会造成内存泄露

#### 3/最简单的闭包

```js
function a(){
	let name = 'parent'
	function b(){
	 return name
	}
  return b
}
const name = a()
console.log(name())   //parent
```

#### 4/练习题

##### 01：

```js
var name = "The Window";

var object = {
  name : "My Object",

  getNameFunc : function(){
    return function(){
      return this.name;
    };

  }

};

console.log("object.getNameFunc()(): ", object.getNameFunc()());
```

##### 02：

```js
var name = "The Window";

var object = {
	name: "My Object",
	getNameFunc: function () {
		var that = this;

		return function () {
			return that.name;
		};
	}
};

console.log("object.getNameFunc()(): ", object.getNameFunc()());
```

