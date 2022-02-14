##### 1、原型链继承(核心是修改构造函数protptype)

优点：

- 父类新增原型方法/原型属性，子类都能访问到
- 简单，易于实现

缺点：

- 无法实现多继承
- 来自原型对象的所有属性被所有实例共享
- 创建子类实例时，无法向父类构造函数传参
- 要想为子类新增属性和方法，必须要在`Son.prototype = new Person()` 之后执行，不能放到构造器中

```js
// # 原型链式继承
function Parent() {
	this.role1 = "parent";
}
Parent.prototype.getParentRole = function () {
	console.log("Parent role: ", this.role1);
};
function Son() {
	this.role2 = "child";
}
// ! 原型链继承核心
Son.prototype = new Parent();
Son.prototype.getSonRole = function () {
	console.log("Son role: ", this.role2);
};

const child1 = new Son();

console.log("child1: ", child1);

child1.getSonRole();
child1.getParentRole();
```

##### 2、(盗用)构造函数继承（核心是改变在子构造函数中修改父级构造函数this指向）

优点：

- 解决了原型链继承中子类实例共享父类引用属性的问题
- 创建子类实例时，可以向父类传递参数
- 可以实现多继承(call多个父类对象)

缺点：

- 实例只是子类的实例，并不是父类的实例
- 只能继承父类的实例属性和方法，不能继承原型属性和方法
- 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

```js
function SuperType() {
	this.colors = ["pink", "blue"];
}

function SubType() {
	SuperType.call(this);
}

const instance1 = new SubType();

instance1.colors.push("black");

console.log("instance1 ", instance1.colors); //[ 'pink', 'blue', 'black' ]

const instance2 = new SubType();

instance2.colors.push("green");

console.log("instance2 ", instance2.colors); //[ 'pink', 'blue', 'green' ]
```

##### 3、组合式继承（盗用构造函数继承对象的属性和变量 ， 原型链继承对象的方法）

优点：

- 可以继承实例属性/方法，也可以继承原型属性/方法
- 不存在引用属性共享问题
- 可传参
- 函数可复用

缺点：

- 调用了两次父类构造函数，生成了两份实例(此方法优化方案即为寄生式组合继承)

```js
// 组合继承 = 盗用构造函数继承对象属性 + 原型链继承对象方法

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
	console.log(this.name);
};

// 1、声明子构造函数
function SubType(name, age) {
	// 盗用构造函数 ， 改变父级构造函数this指向
	SuperType.call(this, name);
	this.age = age;
}

//2、修改子构造函数prototype属性，继承父级构造函数的方法
SubType.prototype = new SuperType();
SubType.prototype.addColors = function (colors) {
	this.colors.push(colors);
};
SubType.prototype.getAge = function () {
	console.log("this.age: ", this.age);
};

let instance1 = new SubType("kangkang", 18);
instance1.sayName(); //kangkang
instance1.getAge(); //18
instance1.addColors('pink')
console.log('instance1.colors: ', instance1.colors);//[ 'red', 'blue', 'green', 'pink' ]


let instance2 = new SubType("Lili", 19);
instance2.sayName();  //Lili
instance2.getAge(); //this.age:  19
instance2.addColors('black')
console.log('instance2.colors: ', instance2.colors); //[ 'red', 'blue', 'green', 'black' ]
```

##### 4、原型继承（Object.create对构造函数进行浅拷贝，拷贝对象的基本数据类型和引用数据类型）

优点：

缺点：

```js
//# 原型式继承： Object.create(object) 浅拷贝对象属性实现继承


/**
 *
 * @param {*} o :Object
 * @returns function
 * @description 简单版Object.create
 */
function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

let person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = Object.create(person);

anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
console.log("anotherPerson: ", anotherPerson.name); // Greg
console.log("anotherPerson: ", anotherPerson.friends);
//[ 'Shelby', 'Court', 'Van', 'Rob' ]

let anotherPerson2 = Object.create(person);

anotherPerson2.name = "Rob";
anotherPerson2.friends.push("Shelby");
console.log("anotherPerson2: ", anotherPerson2.name); // Rob
console.log("anotherPerson2: ", anotherPerson2.friends);
//[ 'Shelby', 'Court', 'Van', 'Rob' , 'Shelby']
```

##### 5、寄生式继承（Object克隆对象+对象增强+返回新对象）

优缺点：跟构造函数继承类似，调用一次函数就得创建一遍方法，无法实现函数复用，效率较低

```js
// !寄生式继承  Object()克隆对象 + 对象增强 + 返回新对象

function jisheng(obj) {
	let clone = Object(obj);
	clone.sayHi = function () {
		console.log("hi");
	};
	return clone;
}

let person = { name: "Nicholas", friends: ["Shelby", "Court", "Van"] };
let anotherPerson = jisheng(person);

anotherPerson.sayHi();
```

##### 6、寄生式组合继承（Object克隆对象prototype ， 重新设置constructor指向，设置子构造函数prototype）

利用组合继承和寄生继承各自优势
组合继承方法我们已经说了，它的缺点是两次调用父级构造函数，一次是在创建子级原型的时候，另一次是在子级构造函数内部，那么我们只需要优化这个问题就行了，即减少一次调用父级构造函数，正好利用寄生继承的特性，继承父级构造函数的原型来创建子级原型。

> 寄生式组合继承可以算是**引用类型**继承的最佳模式

```js
function inheritPrototype(subType, superType) {
	let prototype = Object(superType.prototype); //创建对象
	prototype.constructor = subType; // 增强对象
	subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
	console.log(this.name);
};

function SubType(name, age) {
  //这里只调用了一次SuperType构造函数,避免了SubType.prototype上不必要也用不到的属性，
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
	console.log(this.age);
};


```

##### 7、class继承

```js
class Person {
	constructor(name, age) {
		this.name = name;

		this.age = age;
	}
	sayAge = function () {
		console.log("sayAge: ", this.age);
	};
	sayName = function () {
		console.log("this.name: ", this.name);
	};
}
let p1 = new Person("kobe", 39);

console.log(p1);

class otherPerson extends Person {
	constructor(name, age, salary) {
		super(name, age); //通过super调用父类的构造方法
		this.salary = salary;
	}
	showName() {
		//在子类自身定义方法
		console.log(this.name, this.age, this.salary);
	}
}

let s1 = new otherPerson("wade", 38, 1000000000);
console.log(s1);
s1.showName();

```

