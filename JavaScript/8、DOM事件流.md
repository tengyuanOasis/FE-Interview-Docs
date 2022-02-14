#### 1、DOM事件

> JavaScript与HTML的交互是通过事件实现的；
>
> 事件是指JavaScript与HTML交互的基础.要实现用户与页面的交互,先要对目标元素绑定特定的事件,设置事件处理函数,用户触发事件,
>
> 事件处理函数执行,产生交互效果

#### 2、DOM事件流

> 事件流又称为事件传播，描述的是从**页面中接收事件的顺序**。
>
> DOM2 级事件规定事件流包括三个阶段: 
>
> - 事件捕获(capturing phase)
> - 目标事件(target phase)
> - 事件冒泡(bubbling phase)
>
> 发生的顺序是：事件捕获阶段 --> 目标事件阶段 --> 事件冒泡阶段

#### 3、事件冒泡

> DOM事件由内往外触发（事件起始元素逐级向上传播）

![image-20220214185956283](https://gitee.com/JuntengMa/imgae/raw/master/image-20220214185956283.png)

#### 4、事件捕获

> DOM事件由外往内触发
>
> 事件按 window -> document -> html -> body -> ... -> 目标元素 的方向向下层元素传递。

![image-20220214190100432](https://gitee.com/JuntengMa/imgae/raw/master/image-20220214190100432.png)

#### 5、冒泡捕获方式

`element.addEventListener("click", function () { console.**log**("box1") }, 是否捕获)`

```html
<!DOCTYPE html>

<html lang="en">



<head>

  <meta charset="UTF-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

 <title>Document</title>

  <style>

  .box1 {

   width: 500px;

   height: 500px;

   background-color: blue;

  }



  .box2 {

   width: 200px;

   height: 200px;

   background-color: red;

  }



  .box3 {

   width: 100px;

   height: 100px;

   background-color: yellow;

  }

 </style>

</head>



<body>

  <div class="box1">box1

    <div class="box2">box2

      <div class="box3">box3</div>

  </div>

 </div>

</body>



<script>



 const box1 = document.**querySelector**('.box1')

 const box2 = document.**querySelector**('.box2')

 const box3 = document.**querySelector**('.box3')



 *// 捕获*

 box1.**addEventListener**("click", function () { console.**log**("box1") }, true)

 box2.**addEventListener**("click", function () { console.**log**("box2") }, true)

 box3.**addEventListener**("click", function () { console.**log**("box3") }, true)



 *// 冒泡*

 *// box1.addEventListener("click", function () { console.log("box1") }, false)*

 *// box2.addEventListener("click", function () { console.log("box2") }, false)*

 *// box3.addEventListener("click", function () { console.log("box3") }, false)*



</script>



</html>


```

