<!-- @format -->

## 接口（Interface）

TypeScript（TS）中的 interface 是一种用于描述对象的结构的抽象类型。它类似于其他编程语言中的接口概念，用于定义对象的形状，包括属性和方法，但不提供实现。接口提供了一种约定，用于定义对象应该具有哪些属性和方法，以及它们的类型。

#### 作用：

> 定义约定：接口提供了一种约定，描述了对象的结构，使得开发人员能够明确了解对象应该具有哪些属性和方法。
> 类型检查：TypeScript 编译器可以使用接口来检查代码是否符合所定义的结构，帮助发现代码中的错误。
> 提高可读性：通过使用接口，代码变得更加清晰易读，因为开发人员可以直观地了解对象的结构。

#### 优点：

> 提供了一种清晰的约定，使代码更易于理解和维护。
> 增强了代码的可读性和可维护性。
> 增强了类型检查，有助于在开发阶段捕获错误。

#### 缺点：

> 接口可能会增加代码量，尤其是在定义大量接口时。
> 对于某些复杂的数据结构，可能需要编写较多的接口，增加了维护的复杂性。

#### 特性：

> 可以包含属性和方法的声明。
> 可以继承其他接口。
> 可以定义可选属性、只读属性、可索引属性等。

#### 示例（检查对象类型）：

```typescript
interface Person {
	name: string;
	sayHello(): void;
}

function fn(per: Person) {
	per.sayHello();
}

fn({
	name: '孙悟空',
	sayHello() {
		console.log(`Hello, 我是 ${this.name}`);
	}
});
```

示例（实现）：

```typescript
interface Person {
	name: string;
	sayHello(): void;
}

class Student implements Person {
	constructor(public name: string) {}

	sayHello() {
		console.log('大家好，我是' + this.name);
	}
}
```
