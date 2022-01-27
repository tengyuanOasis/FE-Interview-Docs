#### 1、字符串新增（常用）api

- includes(‘’)	返回布尔值，表示是否找到了参数字符串。
- startsWith(‘’) 返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith(‘’)  返回布尔值，表示参数字符串是否在原字符串的尾部。
- repeat(number)  方法返回一个新字符串，表示将原字符串重复`n`次。
- padStart  `'x'.padStart(5, 'ab') // 'ababx'`
- padEnd    `'x'.padEnd(5, 'ab') // 'xabab'`

#### 2、数组新增（常用）api

- find  成功返回对应成员，否则undefined

- findIndex  成功返回对应index，否则-1

- fill 数组填充

- includes

- flat  

	二维数组扁平化

	```js
	[1, [2, [3]]].flat(Infinity)
	// [1, 2, 3]
	```

- flatMap  

	`flatMap()`方法对原数组的每个成员执行一个函数（相当于执行`Array.prototype.map()`），然后对返回值组成的数组执行`flat()`方法。该方法返回一个新数组，不改变原数组。

	```js
	// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
	[2, 3, 4].flatMap((x) => [x, x * 2])
	// [2, 4, 3, 6, 4, 8]
	```

	

- keys 每个遍历对象为key值

	````js
	Object.keys(Object or Array)
	```

- values 每个遍历对象为value

	````js
	Object.values(Object or Array)
	```

- entries 每个遍历对象包含了key和value

	````js
	Object.values(Object or entries)
	```

- at  

	找到数组指定位置元素

	```js
	[1,2,3,4].at(1)   //2
	[1,2,3,4].at(-1)   //4
	```
	

#### 3、对象新增Api

- Object.keys()、Object.values()、Object.entries()

- object.fromEntries

	`Object.fromEntries()`方法是`Object.entries()`的逆操作，用于将一个键值对数组转为对象。

	```js
	Object.fromEntries([
	  ['foo', 'bar'],
	  ['baz', 42]
	])
	// { foo: "bar", baz: 42 }
	```

#### 4、[Set](https://es6.ruanyifeng.com/#docs/set-map)

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

`Set`本身是一个构造函数，用来生成 Set 数据结构。（可用来数组去重）

`Array.from`方法可以将 Set 结构转为数组。

| api                         |                                                |
| --------------------------- | ---------------------------------------------- |
| Set.prototype.add(value)    | 添加某个值，返回 Set 结构本身。                |
| Set.prototype.delete(value) | 删除某个值，返回一个布尔值，表示删除是否成功。 |
| Set.prototype.has(value)    | 返回一个布尔值，表示该值是否为`Set`的成员。    |
| Set.prototype.clear()       | 清除所有成员，没有返回值。                     |
| Set.prototype.keys()        | 返回键名的遍历器                               |
| Set.prototype.values()      | 返回键值的遍历器                               |
| Set.prototype.entries()     | 返回键值对的遍历器                             |
| Set.prototype.forEach()     | 使用回调函数遍历每个成员                       |
|                             |                                                |

demo1:

```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

demo2:

```js
// 去除数组的重复成员
[...new Set(array)]
```

demo3：

```js
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
```

#### 5、Map

