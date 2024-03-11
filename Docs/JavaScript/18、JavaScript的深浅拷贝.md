### 👉浅拷贝

常见的浅拷贝有几种

- 解构赋值

  ```js
  let target = [{ name: "clone", age: "18" }];
  
  let clone = [...target];
  
  target[0].hobby = ["swimming", "traveling"];
  
  console.log("clone1: ", clone);
  
  console.log("target: ", target);
  
  ```

- Object.assign

  ```js
  let target = [{ name: "clone", age: "18" }];
  
  let clone2 = Object.assign({}, target);
  
  target[0].name = "Object.assign";
  
  console.log("clone2: ", clone2);
  ```

-  `Array.prototype.slice()` 

- `Array.prototype.concat()`

### 👉深拷贝

常见浅拷贝：

- `JSON.parse(JSON.stringfy( target ))`

  - 缺点： 不能拷贝值为function和undefined的数据

  ```js
  var obj1 = [
  	{
  		name: "臧三",
  		childs: ["小明", "小芳"],
  		fn: function () {},
  		age: undefined
  	}
  ];
  
  var obj2 = JSON.parse(JSON.stringify(obj1));
  
  obj2[0].childs = [];
  
  console.log(obj1, obj2);
  ```

- [lodash ](https://www.lodashjs.com/)–> [cloneDeep](https://www.lodashjs.com/docs/lodash.cloneDeep)

- 实现深拷贝：

  ```js
  
  ```

  