---
cover: https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80
coverWidth: 1200
coverHeight: 750
date: 2020-10-09
title: for-in & for-of的区别 和 map-for & Each区别
categories: JavaScript
tags: 
top:
permalink:
---
> <h4> 
>  for-in & for-of的区别 和 map-for & Each区别
> </h4>

<!--more-->

### for-in

- 遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性, **用于遍历对象**
- for...in循环出的是key

```
const obj = {
	name: '哇塞',
	age: 18
}

for(let item in obj){
	console.log(item)
}
// Output:
//name
//age
```

### for-of

- **用于遍历数组**
- for-of 是ES6引入属性
- for-of不能用来遍例普通对象,需要和Obect.keys()搭配使用
- for...of循环出的是value

```
let aArray = ['a',123,{a:'1',b:'2'}]
```



结论:

- 推荐在**循环对象**属性的时候，使用**for...in**
- 在**遍历数组**的时候的时候使用**for...of**。
- for...in循环出的是key，for...of循环出的是value
- 注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足
- for...of不能循环普通的对象，需要通过和Object.keys()搭配使用

### Map

### forEach

