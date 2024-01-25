<!-- @format -->

#### This 指向

this 指向可以大致分类 4 中

- ##### 作为函数调用 , 指向为 winodw

  ```js
  let fn = function () {
  	console.log('this.name: ', this.name);
  	console.log('this: ', this);
  };
  fn();
  //   console.log('this.name: ', this.name);
  //    window
  ```

- ##### 作为 Object 的属性调用 ， 指向改 Object 本身

  ```js
  let fn = function () {
  	console.log('this.name: ', this.name);
  	console.log('this: ', this);
  };
  let obj = {
  	name: 'KangKang',
  	fn
  };
  obj.fn();
  //this.name:  KangKang
  //this:  { name: 'KangKang', fn: [Function: fn] }
  ```

- ##### [call、bind、apply 修改 this 指向](https://raw.githubusercontent.com/tengyuanOasis/FE-handwritten-questions/tree/main/This%E6%8C%87%E5%90%91)

  ```js
  let fn = function () {
  	console.log('this.name: ', this.name);
  	console.log('this: ', this);
  };
  let obj = {
  	name: 'KangKang',
  	fn
  };
  obj.fn();
  // this.name:  KangKang
  // this:  { name: 'KangKang', fn: [Function: fn] }
  ```

- ##### 构造函数使用 ， 指向构造函数实例

  ```js
  let fn = function () {
  	console.log('this.name: ', this.name);
  	console.log('this: ', this);
  };
  let obj = {
  	name: 'KangKang',
  	fn
  };
  obj.fn();
  // this.name:  undefined
  // this:  fn {}
  ```

#### 练习

1、

```js
function Setcount(count) {
	this.count = count;
}

Setcount.prototype.printCount = function () {
	console.log(this.count);
};

let a = new Setcount(100);

a.count = 200;

a.__proto__.count = 300;

a.__proto__.printCount();

a.printCount();
```

2、

```js
Object.prototype.foo = 'Object';
Function.prototype.foo = 'Function';
function Animal() {}
var cat = new Animal();

console.log(cat.foo);
console.log(Animal.foo);
```

3、

```js
function aa() {
	const bb = () => {
		console.log(this);
	};
	bb();
}
```

4、

```js
const a = () => {
	console.log(this);
};
const b1 = a1.bind(this);
b1();
```
