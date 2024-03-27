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
  function deepCopy(obj, cache = new Map()) {
    // 如果 obj 是 null 或者不是一个对象，则直接返回 obj
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    // 检查是否存在循环引用
    if (cache.has(obj)) {
      return cache.get(obj);
    }
  
    // 创建一个空对象或数组，用于存储拷贝后的值
    const copy = Array.isArray(obj) ? [] : {};
  
    // 将当前对象引用存储到缓存中
    cache.set(obj, copy);
  
    // 遍历原对象的所有属性或元素，并进行递归拷贝
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key], cache);
      }
    }
  
    return copy;
  }
  ```
  
  示例：

  ```javascript
  const obj1 = { name: 'John' };
  const obj2 = { name: 'Doe' };
  
  // 创建循环引用
  obj1.ref = obj2;
  obj2.ref = obj1;
  
  const obj3 = deepCopy(obj1);
  
  console.log(obj3);
  
  ```

