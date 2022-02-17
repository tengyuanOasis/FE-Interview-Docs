1、Es6 Module引用传递的例子：

````
## test.js 

export let m = 1;
export function cl() {
  m += 1;
}


## index.js
import { m, cl } from './test';
console.log(m); // 1
cl();
console.log(m); // 2

````

2、Es6 import进来的所有数据，都是const，不能被赋值的

3、CommonJS中 exports理解

exports 可以理解成  exports = module.exports = {}。 是对 module.exports的引用。

如果 exports = ..., 这种写法，就把引用给去掉了，所以就不再能够赋值了。

4、区别：


CommonJs导出的是变量的一份拷贝，ES6 Module导出的是变量的绑定（export default 是特殊的）
CommonJs是单个值导出，ES6 Module可以导出多个
CommonJs是动态语法可以写在判断里，ES6 Module静态语法只能写在顶层
CommonJs的 this 是当前模块，ES6 Module的 this 是 undefined
[深入 CommonJs 与 ES6 Module](https://segmentfault.com/a/1190000017878394)