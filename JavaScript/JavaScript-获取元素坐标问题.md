---
title: JavaScript获取元素位置
coverWidth: 1200
coverHeight: 750
date: 2020-09-01
categories: JavaScript
tags: JavaScript
top:
cover: https://source.unsplash.com/collection/190720/1600x900
---

> <h4> 
>  JavaScript获取元素位置
> </h4>


<!--more-->
## js获取元素相对于父级元素的高度

#### 1. offsetLeft 、offsetTop

offsetLeft/offsetTop -  用于获取子元素相对于父元素的位移（左位移、上位移）


#### 2. offsetWidth、offsetHeight

offsetWidth/offsetHeight - 用于获取元素的可见宽度和可见高度

#### 3. clientX 、clientY

用于获取鼠标坐标（相对于页面的坐标）

var event = event || window.event;
- event.clientX
- event.clientY


#### 4.offsetLeft与style.left的区别

1.     
  - style.left返回的是字符串      //30px
  - offsetLeft返回的是数值        //30
2.     
  - style.left可读可写
  - offsetLeft只读
3.     
  - style.left的值需事先定义，否则取到的值为空
  - offsetLeft不需提前定义，直接获取

#### 5.兼容问题

```
chrome：

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——相对当前坐标系的border左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

ff：

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——无
e.clientX——相对可视区域的坐标
e.x——无

opera：

e.pageX——相对整个页面的坐标
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

safari：（这个和chrome是一样的）

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标
e.offsetX——相对当前坐标系的border左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对可视区域的坐标

IE9：

e.pageX——相对整个页面的坐标
e.layerX——相对当前坐标系的border左上角开始的坐标 + 滚动条滚过的距离（这个NB轰轰了····=。=）
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始

IE8：

e.pageX——无
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始

IE7：

e.pageX——无
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始

IE6：

e.pageX——无
e.layerX——无
e.offsetX——相对当前坐标系的内容区域左上角开始的坐标
e.clientX——相对可视区域的坐标
e.x——相对当前坐标系的border左上角开始
```