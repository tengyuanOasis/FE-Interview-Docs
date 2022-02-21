### 1、for-in

1. 遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性, ==**用于遍历对象**==

2. for...in 循环对象，每个item代表key

   ```js
   const person = {
   	name: "测试",
   	age: "18",
   	hobby: ["swimming", "running"],
   	weight: "120",
   	height: "180cm",
   };
   
   for (let key in person) {
   	console.log("key: ", key);
   }
   /**
   Output:
       key:  name
       key:  age
       key:  hobby
       key:  weight
       key:  height
   */
   
   ```
   
3. for...in 循环数组，每个item代表index

   ```js
   const list = ['a', 'b', 'c', 'd', 'e',]
   for(let i in list){
     console.log('i: ', i);
   }
   
   /**
   Output :
     i:  0
     i:  1
     i:  2
     i:  3
     i:  4
   */
   ```

4. **循环对象会可能出现的问题？？？**

   可能会造成顺序错乱 , [原因](https://juejin.cn/post/6844903555401252871)

   <img src="https://gitee.com/JuntengMa/imgae/raw/master/202202211608715.png" alt="image-20220221160824552" style="zoom:50%;float:left" />

### 2、for-of

- 用于遍历**数组**
- for-of 是 ==ES6==引入属性
- for-of 不能用来遍例普通对象,需要和 Obect.keys()搭配使用
- for...of 循环出的是 value

```js
let list = ["a", 123, { a: "1", b: "2" }];
for (let i of list) {
	console.log("i: ", i);
}
/**
output: 
	i:  a
	i:  123
	i:  { a: '1', b: '2' }
*/
```

结论:

- 推荐在**循环对象**属性的时候，使用**for...in**
- 在**遍历数组**的时候的时候使用**for...of**。
- for...in 循环出的是 key，for...of 循环出的是 value
- 注意，for...of 是 ES6 新引入的特性。修复了 ES5 引入的 for...in 的不足
- for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用



### 3、Map & forEach

###### 相同点：

> 1、map、forEach都用来循环数组

###### 不同点：

> 1、map
>
>  -	map遍历数组并返回一个新的数字，不会改变原数组
>
> 2、forEach
>
> - forEach遍历数组，会(可)修改原数组数据

