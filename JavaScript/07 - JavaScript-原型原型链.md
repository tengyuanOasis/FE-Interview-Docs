---
coverWidth: 1200
coverHeight: 700
date: 2020-11-20
title: 原型,原型链
categories: JavaScript
tags: 原型原型链
top:
cover: https://images.unsplash.com/photo-1601636358831-cfb548152c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg5ODI0fQ&w=750&dpi=2
---
> <h4> 
>  原型,原型链
> </h4>

<!--more-->



### 前置知识:

- js分为函数对象和普通对象,,每个对象都有`_proto_`属性,但是只有函数对象才有`prototype`属性
- Object,Function都是js内置函数,类似的还有Array , RegExp , Date , Boolean , Nuber , String 

- `_porto_`,`constructor`属性是**对象**所独有的
- `prototype`属性是**函数**所独有的
- 函数也是对象的一种,所以函数中也有`_protot_`和`constructor`


### 构造函数创建对象

```
function Peron() { }
var person = new Person()
person.name = 'kevin'
console.log(person.name)
```

### Prototype

每个函数都有`prototype`属性

```
function Person() { }

Person.prototype.name = 'kavin'

var person1 = new Person()
var person2 = new Person()

console.log(person1.name); //kavin
console.log(person2.name); //kavin
```

- 函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。
- 那什么是原型呢？每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型中继承属性

**构造函数和实例原型之间的关系**

![](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype1.png)

### `_proto_`

每一个js对象都有一个属性,就是`_Proto_`,这个属性会指向该对象的原型

```
function Person() { }

var person = new Person()

console.log(person.__proto__ === Person.prototype); //true

```

![](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype2.png)

### constructor

consttructor指向该构造函数本身,即

```
Person.prototype.constructor = Person
```

![](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype3.png)

### [原型链](https://segmentfault.com/a/1190000008959943)

![](https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype5.png)