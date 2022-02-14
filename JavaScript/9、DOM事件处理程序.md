#### DOM事件级别

DOM 级别分为三个级别：DOM0 级、DOM2 级、DOM3 级；

##### 1、DOM0 级事件: 给元素绑定事件

```js
<button id="btn" type="button"></button>
<script>
    var btn = document.getElementById('btn')
    btn.onclick = function() {
        console.log('Hello World')
    }
    // btn.onclick = null // 解绑事件
</script>
```
>缺点：无法设置多个事件处理函数

##### 2、DOM2 级事件:事件监听

```js
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

##### 3、DOM3 级事件

> DOM3 级事件是在 DOM2 级事件的基础上添加了更多的事件类型，允许自定义事件。

UI事件，当用户与页面上的元素交互时触发，如：load、scroll
焦点事件，当元素获得或失去焦点时触发，如：blur、focus
鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
文本事件，当在文档中输入文本时触发，如：textInput
键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified

```js
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

