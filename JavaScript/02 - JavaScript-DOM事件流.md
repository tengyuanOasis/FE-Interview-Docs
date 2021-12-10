---
coverWidth: 1200
date: 2020-11-03
coverHeight: 750
title: DOM事件 , 事件流
categories: JavaScript
tags: DOM事件事件流
top:
cover: https://images.unsplash.com/photo-1598099114415-3076be5be744?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjg5ODI0fQ
---
> <h4> 
> DOM事件, 事件流
> </h4>

<!--more-->

### DOM事件

> 事件是指JavaScript与HTML交互的基础.要实现用户与页面的交互,先要对目标元素绑定特定的事件,设置事件处理函数,用户触发事件,事件处理函数执行,产生交互效果

#### DOM事件级别

DOM 级别分为四个级别：DOM0 级、DOM1 级、DOM2 级、DOM3 级；
![B1JoY4.md.jpg](https://s1.ax1x.com/2020/10/28/B1JoY4.md.jpg)

DOM事件分为三个级别:
DOM0 级事件: 给元素绑定事件

```
<button id="btn" type="button"></button>
<script>
    var btn = document.getElementById('btn')
    btn.onclick = function() {
        console.log('Hello World')
    }
    // btn.onclick = null // 解绑事件
</script>
```
>	缺点：无法设置多个事件处理函数

DOM2 级事件:用到了事件监听

```
<button id="btn" type="button"></button>
<script>
    var btn = document.getElementById('btn');    
    btn.addEventListener('click', showFn, false)
    btn.addEventListener('click', showFn2, false)
    // btn.removeEventListener('click', showFn, false) // 解绑事件 
    function showFn() {
        alert('Hello World');
    }
     function showFn2() {
        alert('Hello World2');
    } 
</script>
```

>可以为事件设置多个事件处理函数，可以通过第三个参数 ( useCapture ) 设置在什么阶段执行事件处理函数，默认是 false， 即在事件冒泡阶段执行事件处理函数。

> 需要注意的是在 IE8 及以下版本需要用 attachEvent 和 detachEvent 实现，只有两个参数，事件名需要以 on 开头，只支持在事件冒泡阶段执行事件处理函数。

DOM3 级事件
> DOM3 级事件是在 DOM2 级事件的基础上添加了更多的事件类型，允许自定义事件。

UI事件，当用户与页面上的元素交互时触发，如：load、scroll
焦点事件，当元素获得或失去焦点时触发，如：blur、focus
鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
文本事件，当在文档中输入文本时触发，如：textInput
键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified

```
// 自定义事件
var event = new Event('test')
// 给元素绑定事件
domElement.addEventListener('test', function() {
    console.log('event test')
},)

// 触发事件
setTimeout(function() {
    domElement.dispatchEvent(event)
}, 1000)

```

### DOM事件流

> 事件流又称为事件传播，描述的是从**页面中接收事件的顺序**。
>
> DOM2 级事件规定事件流包括三个阶段: 
>
> - 事件捕获(capturing phase)
> - 目标事件(target phase)
> - 事件冒泡(bubbling phase)
> 
> 发生的顺序是：事件捕获阶段 --> 目标事件阶段 --> 事件冒泡阶段

#### 事件冒泡

> ​	事件起始元素逐级向上传播

```
<style>
  #parent {
      width: 200px;
      height: 200px;
      background-color: green;
  }
  #child {
      width: 100px;
      height: 100px;
      background-color: yellow;
  }
</style>

<div id="parent">
  <div id="child">目标元素</div>
  父级元素
</div>

<script>
  var parent = document.getElementById('parent')
  var child = document.getElementById('child')
  
  parent.addEventListener('click', function(e) {
      console.log('parent bubbling')
  }, false)
  
  child.addEventListener('click', function() {
      console.log('target bubbling')
  }, false)
  
  document.body.addEventListener('click', function() {
      console.log('body bubbling')
  }, false)
  
  document.documentElement.addEventListener('click', function() {
      console.log('html bubbling')
  }, false)
  
  document.addEventListener('click', function() {
      console.log('document bubbling')
  }, false)
  
  window.addEventListener('click', function() {
      console.log('window bubbling')
  }, false)
</script>
```

运行结果：



#### 事件捕获

> ​	事件按 window -> document -> html -> body -> ... -> 目标元素 的方向向下层元素传递。

```
<style>
  #parent {
      width: 200px;
      height: 200px;
      background-color: green;
  }
  #child {
      width: 100px;
      height: 100px;
      background-color: yellow;
  }
</style>

<div id="parent">
  <div id="child">目标元素</div>
  父级元素
</div>

<script>
  var parent = document.getElementById('parent')
  var child = document.getElementById('child')
  
  parent.addEventListener('click', function(e) {
      console.log('parent capture')
  }, true)
  
  child.addEventListener('click', function() {
      console.log('target capture')
  }, true)
  
  document.body.addEventListener('click', function() {
      console.log('body capture')
  }, true)
  
  document.documentElement.addEventListener('click', function() {
      console.log('html capture')
  }, true)
  
  document.addEventListener('click', function() {
      console.log('document capture')
  }, true)
  
  window.addEventListener('click', function() {
      console.log('window capture')
  }, true)
</script>
```

运行结果:

