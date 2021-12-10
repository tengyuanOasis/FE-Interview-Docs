---
title: 盒模型,BFC
coverWidth: 1200
coverHeight: 750
categories: Css
tags: [盒模型,BFC,Css]
top:
cover: https://drscdn.500px.org/photo/178844193/h%3D1080/v2?sig=4684395e8888efec23951265e1383ddde8e80361bb60cf3ee35cab3d35bc765b
---
>	关于盒模型的一些总结

<!--more-->
#### 盒模型

##### 标准盒模型(box-sizing:content-box)

```
width = content width;
height = content height;
```

##### 怪异盒模型(box-sizing:border-box)

```
width = content width + padding + border;
height = content height + padding + border;
```

#### BFC

##### 01/什么是BFC?

块级格式化上下文

BFC是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

##### 02/建立BFC

- 浮动
- 绝对定位
- 行内块元素
- 表格单元
- 弹性盒
- overflow不为visible

##### 03/BFC应用场景

- 清除浮动
- 阻止元素被浮动元素覆盖
- 实现两列自适应布局