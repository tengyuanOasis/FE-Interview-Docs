### 1、for-in

- 遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性, **用于遍历对象**
- for...in 循环对象，每个item代表key

```js
const obj = {
	name: '哇塞',
	age: 18
}
for(let item in obj){
	console.log(item)
}
/**
Output:
	name
	age
*/

```

- for...in 循环数组，每个item代表index

```js
const list = ['a', 'b', 'c', 'd', 'e',]
for(let i in list){
  console.log('i: ', i);
  console.log('list[i]: ', list[i]);
}

/**
Output :
  i:  0
  list[i]:  a
  i:  1
  list[i]:  b
  i:  2
  list[i]:  c
  i:  3
  list[i]:  d
  i:  4
  list[i]:  e
*/
```

### 2、for-of

- 用于遍历**数组**
- for-of 是 ==ES6==引入属性
- for-of 不能用来遍例普通对象,需要和 Obect.keys()搭配使用
- for...of 循环出的是 value

```js
let list = ["a", 123, { a: "1", b: "2" }];
for (let i of list) {
	console.log("i: ", i);
}
/**
output: 
	i:  a
	i:  123
	i:  { a: '1', b: '2' }
*/
```

结论:

- 推荐在**循环对象**属性的时候，使用**for...in**
- 在**遍历数组**的时候的时候使用**for...of**。
- for...in 循环出的是 key，for...of 循环出的是 value
- 注意，for...of 是 ES6 新引入的特性。修复了 ES5 引入的 for...in 的不足
- for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用



### 3、Map & forEach

###### 相同点：

> 1、map、forEach都用来循环数组

###### 不同点：

> 1、map
>
>  -	map遍历数组并返回一个新的数字，不会改变原数组
>
> 2、forEach
>
> - forEach遍历数组，会(可)修改原数组数据

