#### 1、Css盒模型

##### 👉 什么是盒模型

> 盒模型包括 内容（content）、填充（Padding）、边界（margin）、边框（border）四部分

<img src="https://raw.githubusercontent.com/JuntengMa/image/master/image/202205301042910.png" alt="image-20220530104236849" style="zoom:80%;float:left" />



##### 👉 盒模型的类型 （通过`box-sizing`区分）

- W3C标准盒模型(box-sizing:content-box)

  ```
  width = content width;
  height = content height;
  ```

- IE/怪异盒模型(box-sizing:border-box)

  ```
  width = content width + padding + border;
  height = content height + padding + border;
  ```

- 为什么区分两种盒模型

  > 兼容问题，IE5.5 使用IE盒模型 ， IE6之后用的W3C标准盒模型

#### 2、BFC

##### 👉 什么是BFC?

> - 块级格式化上下文
> - `BFC`它决定了元素如何对其内容进行**定位**，以及与其它元素的关系和相互作用，当涉及到可视化布局时，`Block Formatting Context`提供了一个环境，`HTML`在这个环境中按照一定的规则进行布局。
> - `BFC`是一个完全独立的空间（布局环境），让空间里的子元素不会影响到外面的布局
>
> 
>
> BFC是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

##### 👉 触发建立BFC

- 浮动

  ```css
  float :	left / right;
  ```

- 绝对定位

  ```css
  position : absolute / fixed；
  ```

- 行内块元素

  ```CSS
  display : inline-block / flow-root /  table-cell / table-caption / flex  /inline-flex等。
  ```

- overflow不为visible

  ```css
  overFlow：hidden 、 scroll 、auto
  ```

##### 👉 BFC应用场景

- 使用Float脱离文档流，高度塌陷
- 阻止元素被浮动元素覆盖
- 实现两列自适应布局

##### 👉 传送门

- [《史上最全面、最透彻的BFC原理剖析》](https://juejin.cn/post/6844903496970420237)
- [《面试官：请说说什么是BFC？大白话讲清楚》](https://juejin.cn/post/6950082193632788493)
- [《前端CSS必知：BFC及其触发条件》](https://juejin.cn/post/6950082193632788493)

#### 3、Css中水平垂直居中方式？

👉[纯CSS实现水平并垂直居中的15种方式](https://juejin.cn/post/6856579922148884488)

👉较常用的几种方式：

基础设置：

```css
  .parent {
      width: 200px;
      height: 200px;
      background-color: green;
    }

    .child {
      width: 100px;
      height: 100px;
      background-color: yellow;
    }
  
```

<img src="https://raw.githubusercontent.com/JuntengMa/image/master/image/202205301215667.png" alt="image-20220530121536579" style="zoom:80%;float:left" />

1. 绝对定位方式 + margin ： 1/2 * child width

```css
.parent {
      position: relative;
    }

    .child {
      position: absolute;
      left: 50%;
      margin-left: -50px; /* 1/2 child 's width */
      top: 50%;
      margin-top: -50px; /* 1/2 child 's width */
    }
```

2. 绝对定位方式 + margin

```css
.parent {
      position: relative;
    }

    .child {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
```

3. flex 布局

```css
.parent {
      display: flex;
      justify-content: center;
      align-items: center;
    }
```

3. Grid 布局

```css
   .parent {
      display: grid;
    }

    .child {
      align-self: center;
      justify-self: center;
    }
```

