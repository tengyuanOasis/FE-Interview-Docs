### Js可选链

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

```JS
//先Demo：
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
 };

// 01、取 adventurer 中 dog的name
const dogName = adventurer.dog.name  // 报错 Cannot read properties of undefined (reading 'name')

// 02、加一层判断
if(adventurer.dog && adventurer.dog.name){
  console.log(adventurer.dog.name)
}

//03、可选链优化
const dogName = adventurer.dog?.name // undefined

//04、设置默认值
const dogName = adventurer.dog?.name ?? "Tom" // Tom

```



