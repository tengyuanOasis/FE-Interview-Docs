## iterable 接口

>  `Iterable` 接口是 ECMAScript 2015 (ES6) 引入的一种规范，用于表示对象是可迭代的。一个实现了 `Iterable` 接口的对象被称为可迭代对象（iterable object）。



## Set



#### what

- Set是一个构造函数 ， 实例化生成 Set 结构数据。


- Set类似于<font color="red">**数组**</font>，但是成员的值都是唯一的，没有重复的值。

- ```javascript
  const s = new Set();
  [1, 1, 23, 43, 354, 656, 23, 43].forEach((c) => s.add(c));
  console.log([...s]); // [ 1, 23, 43, 354, 656 ]
  const str = new Set('aabbccdd');
  const newStr = [...str];
  console.log( newStr); //  [ 'a', 'b', 'c', 'd' ]
  ```

#### 属性

- `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
- `Set.prototype.size`：返回`Set`实例的成员总数。

方法

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值。

#### set转化为数组的方式

- 解构 

  ```javascript
  const items = new Set([1, 2, 2 , 3, 3, 4, 5]);
  console.log([...items]); // [1,2,3,4,5]
  ```

- Array.from

  ```javascript
  const items = new Set([1, 2, 2 , 3, 3, 4, 5]);
  const array = Array.from(items);// [1,2,3,4,5]
  ```

#### 遍历

- 遍历方法类似object： Set.keys 、Set.values 、Set.entries

- forEach

  ```javascript
  const items = new Set([1, 2, 2, 3, 3, 4, 5]);
  items.forEach((v, k) => {
  	console.log(k, v);
  });
  ```

#### 使用场景

- 数组去重

  ```javascript
  [...new Set(array)]
  ```

- 字符串去重

  ```js
  [...new Set('ababbc')].join('')
  ```

- 实现交集、并集、差集

  ```javascript
  const a = new Set([1, 2, 3]);
  const b = new Set([2, 3, 4, 5]);
  // 并集
  const union = new Set([...a, ...b]);
  console.log('%c [ c ]-6', 'font-size:13px; background:#0094fb; color:#fff;', union);
  // 交集
  let intersect = new Set([...a].filter((x) => b.has(x)));
  console.log('%c [ intersect ]-9', 'font-size:13px; background:#0094fb; color:#fff;', intersect);
  
  // （a 相对于 b 的）差集
  let difference = new Set([...a].filter((x) => !b.has(x)));
  console.log('%c [ difference ]-14', 'font-size:13px; background:#0094fb; color:#fff;', difference);
  ```

   



## weekSet

> `WeakSet` 是 JavaScript 中的一种集合类型，它的设计目的主要是为了解决对象引用问题。与 `Set` 不同，`WeakSet` 中的元素只能是对象，并且这些对象是弱引用的。这意味着，如果没有其他的强引用指向这个对象，该对象会被垃圾回收。

#### 特点：

`WeakSet` 具有以下特点：

1. WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）

2. **只能包含对象**：`WeakSet` 中的元素必须是对象，而不能是原始值（比如字符串、数字、布尔值等）。
3. **弱引用**：`WeakSet` 中的对象是弱引用的，这意味着如果没有其他强引用指向某个对象，该对象可能会被垃圾回收，即使它是 `WeakSet` 的成员。
4. **不可迭代**：`WeakSet` 是不可迭代的，因此无法通过遍历获取它的成员。
5. **不暴露迭代方法**：`WeakSet` 不提供类似 `forEach` 的迭代方法。

#### 用途：

常用于存储dom节点

