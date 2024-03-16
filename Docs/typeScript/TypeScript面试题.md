## TypeScript

参考文档：

- [尚硅谷TypeScript教程（李立超老师TS新课）](https://www.bilibili.com/video/BV1Xy4y1v7S2/?spm_id_from=333.337.search-card.all.click&vd_source=45e085bf2f0364e8005f1ace4350ecc0)

- [TypeScript TS「面试题及答案」不断更新](https://juejin.cn/post/6999985372440559624)

学习demo：

- [learn-ts](https://github.com/tengyuanOasis/Learn/tree/main/ts)

1. ts 是什么
   > ts 是一个强类型的js超集，支持es6语法，支持面向对象编程，如类、接口、集成、泛型等。
   >
   > ts不能直接在浏览器上运行，需要编译为js才可以执行

2. 为什么要用ts

   > ts相对js添加了静态类型，可以在开发的时候检测错误，提高代码质量。
   >
   > - 补充了js类型，多人协同开发比较有优势
   > - IDE自动填充，自动联想

3. ts中，const和readonly区别？

   > `const` 和 `readonly` 都用于声明不可变的变量或属性
   >
   > **const：**
   >
   > - `const` 声明的变量是<font color="red">常量</font>，其值在声明后不可修改。
   > - `const` 声明的变量必须在声明时就进行初始化。
   > - `const` 用于声明变量，而不是属性。
   > - ```javascript
   >   // 使用 const 声明常量
   >   const PI = 3.14;
   >             
   >   // 尝试修改 const 声明的变量会导致编译错误
   >   // PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant
   >             
   >   ```
   >
   > **readonly：**
   >
   > - `readonly`关键字用于表示<font color="red">属性只读</font>，意味着属性的值创建后不能被修改
   >
   > - `readonly`可以用于类属性声明，以及对象类型或接口的属性声明
   >
   > - ```javascript
   >   function foo(config: { readonly bar: number, readonly bas: number }) {
   >     // ..
   >   }
   >             
   >   const config = { bar: 123, bas: 123 };
   >   foo(config);
   >             
   >   // 现在你能够确保 'config' 不能够被改变了
   >   ```
   >
   >   ```javascript
   >   type Foo = {
   >     readonly bar: number;
   >     readonly bas: number;
   >   };
   >             
   >   // 初始化
   >   const foo: Foo = { bar: 123, bas: 456 };
   >             
   >   // 不能被改变
   >   foo.bar = 456; // Error: foo.bar 为仅读属性
   >   ```

4. 枚举和常量枚举的区别？

   > - 在 TypeScript 中，有两种枚举：普通枚举和常量枚举。它们之间的区别主要体现在编译后的代码形式和使用方式上。
   >
   > - 常量枚举其实就是是在 enum关键字前使用 const 修饰符，常量枚举会在编译阶段被移除
   >
   > 
   >
   > **普通枚举（Enum）：**
   >
   > - 普通枚举在编译后会生成一个真正的 JavaScript 对象。
   > - 普通枚举的值在编译后会被转换为真实的值。
   > - 普通枚举可以包含计算成员和初始化成员。
   >
   > **常量枚举（Const Enum）：**
   >
   > - 常量枚举在编译后会被删除，而不是生成真正的 JavaScript 对象。
   > - 常量枚举的值在编译后会被内联到使用它的地方。
   > - 常量枚举只能包含初始化成员，不能包含计算成员。
   >
   > **总结：**
   >
   > - <font color="red">当我们不需要一个对象，而需要对象的值，就可以使用常量枚举，这样就可以避免在编译时生成多余的代码和间接引用</font>
   >
   > - 使用普通的枚举：当需要在运行时使用枚举成员的值，或者需要通过枚举成员的名称来进行反射时。
   > - 使用常量枚举：当只需要使用枚举成员的值，而不需要枚举类型本身或者在编译后不希望产生额外的代码时。
   >
   > ```javascript
   > // 普通枚举
   > enum Direction {
   >   Up,
   >   Down,
   >   Left,
   >   Right
   > }
   > 
   > // 编译后的 JavaScript 代码
   > // var Direction;
   > // (function (Direction) {
   > //     Direction[Direction["Up"] = 0] = "Up";
   > //     Direction[Direction["Down"] = 1] = "Down";
   > //     Direction[Direction["Left"] = 2] = "Left";
   > //     Direction[Direction["Right"] = 3] = "Right";
   > // })(Direction || (Direction = {}));
   > 
   > // 使用普通枚举
   > let direction: Direction = Direction.Up;
   > console.log(direction); // 输出：0
   > 
   > // 常量枚举
   > const enum Colors {
   >   Red,
   >   Green,
   >   Blue
   > }
   > 
   > // 编译后的 JavaScript 代码
   > // 编译后的代码中不会生成 Colors 对象，而是直接内联到使用它的地方
   > 
   > // 使用常量枚举
   > let color: Colors = Colors.Red;
   > console.log(color); // 输出：0
   > 
   > ```

5. 接口和类型别名的区别？

   > **相同点：**
   >
   > 1. 都可以描述 '对象' 或者 '函数'
   > 2. 都允许拓展(extends)
   >
   > **接口（Interface）：**
   >
   > 1. 接口可以被类实现（implements）。
   > 2. 接口可以被扩展（extends）。
   > 3. 多个相同的 interface 声明可以自动合并
   > 4. 接口可以定义对象的形状，包括属性、方法等。
   >
   > **类型别名（Type Alias）：**
   >
   > 1. 类型别名可以用于给任何类型取一个新名字。
   > 2. type 可以声明基本类型，联合类型，元组
   > 3.  type 可以使用 typeof 获取实例的类型进行赋值
   > 4. 类型别名可以直接使用，而无需创建新的对象。
   >
   > **使用 interface 描述‘数据结构’，使用 type 描述‘类型关系’**

6. TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？

   > 1. `ts.config.json`中`noImplicitThis:true`的情况下，必须声明this类型才能在函数或对象中使用this
   > 2. ts中箭头函数中的this和es6中的this一样，指向父级this

7. ts中如何设计class类型声明

   > 声明class中，一般需要考虑构造函数，class属性及类型，class中的方法。
   >
   > example：
   >
   > ```javascript
   > enum Gender {
   > 		MALE = 0,
   > 		FEMALE = 1
   > 	}
   > 	class Person {
   > 		public name: string;
   > 		private age: number;
   > 		protected sex: Gender;
   > 
   > 		constructor(name: string, age: number, sex: Gender) {
   > 			this.name = name;
   > 			this.age = age;
   > 			this.sex = sex;
   > 		}
   > 
   > 		getAge() {
   > 			return `age is ${this.age}`;
   > 		}
   > 
   > 		setAge(age: number) {
   > 			this.age = age;
   > 		}
   > 
   > 		get gender() {
   > 			return `gender is ${this.sex}`;
   > 		}
   > 	}
   > 
   > ```

   1. ts中**`public`,`private`,`protected`**，**`readonly`**区别？

   > 三者都是用来控制class成员属性和方法访问权限的修饰符
   >
   > - **public：**
   >
   >   - public成员在类内外都可以访问
   >   - 不指定修饰符的情况下，类属性和方法默认public
   >- **private：**
   > 
   >  - private成员只能在所属类内部被访问修改
   >   - 外部可以通过类内部函数访问private属性的变量
   > - **Protectd:**
   >
   >   - `protected` 成员只能在类内部和子类中被访问，但在类的外部无法访问。
   >  - `protected` 成员可以被其派生类继承和访问。
   > - **readonly:** 
   >   - 将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
   >  
   > - **总结：**
   >
   >   - public 和 proteced 成员都可以被子类继承和访问，private成员无法子类被继承访问，但是可以通过父类函数间接获取
   >
   >   - 除了public在class内外都可访问，另外两个在实例化之后都不可以通过dog.age之类的方法访问
   >
   >     
   >
   > - code
   >
   >   ```javascript
   >   class Animal {
   >       public name: string;
   >       private age: number;
   >       protected weight: number;
   >         
   >       constructor(name: string, age: number, weight: number) {
   >           this.name = name;
   >           this.age = age;
   >           this.weight = weight;
   >       }
   >         
   >       public display() {
   >           console.log(`Name: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`);
   >       }
   >   }
   >         
   >   class Dog extends Animal {
   >       constructor(name: string, age: number, weight: number) {
   >           super(name, age, weight);
   >       }
   >         
   >       public displayDog() {
   >           // 可以访问父类的 public 和 protected 成员
   >           console.log(`Name: ${this.name}, Age: ${this.age}, Weight: ${this.weight}`);
   >       }
   >   }
   >         
   >   const animal = new Animal("Tom", 5, 10);
   >   console.log(animal.name);  // 可以访问 public 成员
   >   // console.log(animal.age);  // 不能访问 private 成员，会报错
   >   // console.log(animal.weight);  // 不能访问 protected 成员，会报错
   >         
   >   const dog = new Dog("Buddy", 3, 8);
   >   console.log(dog.name);  // 可以访问 public 成员
   >   // console.log(dog.age);  // 不能访问 private 成员，会报错
   >   // console.log(dog.weight);  // 不能访问 protected 成员，会报错
   >         
   >   ```
   >
   >   

8. **简单介绍一下 TypeScript 模块的加载机制？**

   > ts模块加载机制借鉴了es6 的模块加载规范；
   >
   > 假设有一个导入语句 `import { a } from "moduleA"`; 
   >
   > 1. 首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式； 
   > 2. 如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个`外部模块声明`（.d.ts）； 
   > 3. 最后，如果编译器还是不能解析这个模块，则会抛出一个错误 `error TS2307: Cannot find module 'moduleA'.`

9.  **declare，declare global是什么？**

   > - `declare` 是用来定义全局变量、全局函数、全局命名空间、js modules、class等
   >
   > - `declare global` 为全局对象 `window` 增加新的属性
   >
   >   ```javascript
   >   declare global { 
   >      interface Window { 
   >           csrf: string; 
   >      }
   >   }
   >   ```



