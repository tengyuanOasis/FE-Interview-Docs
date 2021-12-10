---
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2020-11-15
title:	深拷贝浅拷贝
categories: JavaScript
tags: 深拷贝浅拷贝
top:
permalink:
---

> <h4> 
>  深拷贝浅拷贝
> </h4>

<!--more-->

https://juejin.im/post/6844903929705136141

### 浅拷贝

> 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。
>
> 如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

浅拷贝只拷贝一层属性,无法拷贝引用数据类型

- `Object.assign({},obj)`浅拷贝object
- `newobj = {...obj2}`  展开运算符浅拷贝
- `Object.fromEntries( Object.entriens(obj) ) `通过生成迭代器,在通过迭代器生成对象
- `Object.create({},Object.getOwnPropertyDescriptors(obj))`

**简单浅拷贝:**

```
function clone(target){
	let cloneTarget={};
	for(let key in target){
		cloneTarget[key] = target[key]
	}
	return cloneTarget
}
```



### 深拷贝

> 将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

- `JSON.parse(JSON.stringfy( obj ))`通过**JSON的2次转换深拷贝obj**
  - 无法拷贝`undefined`与`symbol`属性
  - 无法拷贝**循环引用**对象
- loadsh:[_.cloneDeep_](http://lodash.think2011.net/cloneDeep)

简单深拷贝(可以处理**原始数据类型 + Object**):

- 如果是原始类型，无需继续拷贝，直接返回
- 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。

```
function smpleDeepCopy(target) {
  let type = typeof target
  if (type === "object") {
    let copy = {};
    for (let key in target) {
      copy[key] = smpleDeepCopy(target[key])
    }
    return copy
  }
  return target
}
```


