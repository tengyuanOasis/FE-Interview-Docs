<!-- @format -->

#### 1、let 、const

> es6 之前 js 作用域只有全局作用域和函数作用域，let 和 const 则新加入了块级作用域；
>
> 简单来说，块级作用域就是包含在{...}中的作用域。在这个作用域中，拥有着和函数作用域相同的行为。

https://juejin.cn/post/6844903951351939080#heading-11

#### 2、解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

需要注意的点：

```js
//解构赋值可以这么写
const Person = {
	name: ' Kangkang',
	age: 99,
	sex: '男'
};

//解构
const { name, age, sex } = Person;

//or

const { name: parentName, age: parentAge, sex: parentSex } = Person;
//这里parentName才是真正的值，name为形参
```

#### 3、扩展运算符`…`

```js
[..."hello"]  ==>  ["h", "e", "l", "l", "o"]
[1, ...[2,3,4,5] ] ==> [1, 2, 3, 4, 5]
```

#### 4、String api

- Unicode 表示法

ES6 加强了对 Unicode 的支持，允许采用`\uxxxx`形式表示一个字符，其中`xxxx`表示字符的 Unicode 码点。

```js
"\u0061" ==> // "a"
```

- 字符串可以被`for...of`循环遍历。

  ```js
  for (let i of 'hello') {
  	console.log(i);
  }
  // h e l l o
  ```

- 模板字符串

- includes : 返回布尔值，表示是否找到了参数字符串

  ```js
  'hello'.includes('h');
  //true
  'hello'.includes('w');
  //false
  ```

- startsWith : 返回布尔值，表示参数字符串是否在原字符串的头部。

  ```js
  'hello'.startsWith('h');
  //true
  'hello'.startsWith('w');
  //false
  ```

- endsWith : 返回布尔值，表示参数字符串是否在原字符串的尾部。

  ```js
  'hello'.endsWith('w');
  //false
  'hello'.endsWith('o');
  //true
  ```

- repeat: `repeat`方法返回一个新字符串，表示将原字符串重复`n`次。

  ```js
  'x'.repeat(3); // "xxx"
  'hello'.repeat(2); // "hellohello"
  'na'.repeat(0); // ""
  ```

- padStart()，padEnd()

  长度补全功能

  ```js
  👉padStart：从左往右补全
  'x'.padStart(5, 'ab') // 'ababx'
  👉padEnd：从右往左补全
  'x'.padEnd(5, 'ab') // 'xabab'
  ```

- trimStart()，trimEnd()

  ```js
  // 类似trim
  '   hello   '.trim(); // "hello"
  '   hello   '.trim(); // "hello   "
  '   hello   '.trim(); // "   hello"
  ```

- replaceAll

  ```js
  'Hello'.replaceAll('l', '😍'); // "He😍😍o"， 修改所有匹配的字符
  'Hello'.replace('l', '😍'); // "He😍lo"   , 修改第一个匹配的字符
  ```

- at（✨✨✨✨✨✨🥕）

  ```js
  const str = 'hello';
  str.at(1); // "e"
  str.at(-1); // "o"
  ```

#### 5、Array api

- Array.from: 将类似数组的对象或可遍历对象转数组

  ```js
  let arrayLike = {
  	0: 'a',
  	1: 'b',
  	2: 'c',
  	length: 3
  };
  //es6
  let arr = Array.from(arrayLike); //["a", "b", "c"]
  //es5
  let arr1 = [].slince.call(arrayLike);
  ```

  `Array.from()`还可以接受一个函数作为第二个参数，作用类似于数组的`map()`方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

  ```js
  Array.from(arrayLike, (x) => x * x);
  // 等同于
  Array.from(arrayLike).map((x) => x * x);

  Array.from([1, 2, 3], (x) => x * x);
  // [1, 4, 9]
  ```

- Array.of : `Array.of()`方法用于将一组值，转换为数组。

  ```js
  Array.of(3, 11, 8); // [3,11,8]
  Array.of(3); // [3]
  Array.of(3).length; // 1
  ```

- find 和 findIndex

  ```js
  [1, 4, -5, 10]
  	.find((n) => n < 0)
  	[
  		// -5

  		(1, 5, 10, 15)
  	].findIndex(function (value, index, arr) {
  		return value > 9;
  	}); // 2
  ```

- fill

  `fill`方法使用给定值，填充一个数组。

  ```js
  ['a', 'b', 'c'].fill(7)
  // [7, 7, 7]
  
  new Array(3).fill(7)
  // [7, 7, 7]
  
  fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
  ['a', 'b', 'c'].fill(7, 1, 2)
  // ['a', 7, 'c']
  ```

#### 6、Object api

- Object.is : 用于比较两值是否严格相等

- Object.assign() : 用于合并对象

  ```js
  const target = { a: 1 };
  const source1 = { b: 2 };
  const source2 = { c: 3 };

  Object.assign(target, source1, source2);
  target; // {a:1, b:2, c:3}
  ```

- Object.keys 、 Object.values、Object.entries

- Object.fromEntries： 将键值对数组转对象

#### 7、Set(用于数据重组）

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。（ps： 可用于数组去重）

```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach((x) => s.add(x));

for (let i of s) {
	console.log(i);
}
// 2 3 5 4
```

| property / methods | 描述                                           |
| ------------------ | ---------------------------------------------- |
| size               | 返回`Set`实例的成员总数                        |
| add(value)         | 添加某个值，返回 Set 结构本身                  |
| delete(value)      | 删除某个值，返回一个布尔值，表示删除是否成功。 |
| has(value)         | 返回一个布尔值，表示该值是否为`Set`的成员      |
| clear()            | 清除所有成员，没有返回值                       |

遍历方法

| methods | Description              |
| ------- | ------------------------ |
| keys    | 返回键名的遍历器         |
| values  | 返回键值的遍历器         |
| entries | 返回键值对的遍历器       |
| forEach | 使用回调函数遍历每个成员 |

```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
	console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
	console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
	console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

set.forEach((item) => {
	console.log(item);
});
// red
// green
// blue
```

#### 8、Map（hash 字典，用于数据存储）

用于创建对象，对象的键值对`{key : value}`可以是各种类型的值（包括对象）；

Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。

如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```javascript
const map = new Map();
```

| property / methods  | description                                                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| map.size            | `size`属性返回 Map 结构的成员总数。                                                                                     |
| map.set(key, value) | `set`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。 |
| map.get(key)        | `get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`。                                                        |
| map.has(key)        | `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。                                                            |
| map.delete(key)     | `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`。                                                         |
| map.clear()         | `clear`方法清除所有成员，没有返回值                                                                                     |
|                     |                                                                                                                         |

Map & Object 对比

- Map 键值可以是任意数据类型 ， Object 只能用字符串、数字或者 Symbol 等简单数据类型当作键
- Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作 ， Object 在循环的时候可能会顺序错乱

![image-20220604162308574](https://raw.githubusercontent.com/tengyuanOasis/image/master/image/202206041623705.png)
