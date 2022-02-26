

### 浏览器History

参考资料
https://wangdoc.com/javascript/bom/history.html

https://juejin.cn/post/6948746074504986655#heading-6

#### 1、what？

> History 对象包含用户（在浏览器窗口中）访问过的 URL。
>
> History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。
>
> ![Note](https://www.runoob.com/images/lamp.gif)**注意：** 没有应用于History对象的公开标准，不过所有浏览器都支持该对象。

#### 2、属性、方法

##### 属性：

- length： 返回历史列表中网址数
- state:   History 对象的当前状态 , 通常是 undefined，即未设置

##### 方法大致分为两类：

- `back( ) 、forward( ) 、go( )`  这种可以定位到某个浏览历史记录上
- `pushState( ) 、replaceState（ ）`这种，操作历史记录

![image-20220221141105523](https://gitee.com/JuntengMa/imgae/raw/master/202202211411599.png)

#### 3、`Back 、 forward 、go `详解

- back ： 回退，相当于点击浏览器 ` <— `按钮  

  ```js
  window.history.back()
  ```

- forward ： 前进 ，相当于点击浏览区` —> `按钮

  ```js
  window.history.forward()
  ```

- go :  访问某一页面 , 接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址 , 默认为0，相当于刷新当前页面

  ```js
  window.history.go(1)  // forward
  
  window.history.go(-1)  //back
  
  history.go(0); // 刷新当前页面
  ```

- 相同点：

  - **都会触发页面刷新**

#### 4、`pushState 、replaceState`详解

##### 1. pushState 

> 向浏览器历史记录添加一条记录，并立即改变当前url

<img src="https://gitee.com/JuntengMa/imgae/raw/master/202202231747035.png" alt="image-20220223174708955" style="zoom:80%;float:left" />

 🍕如：当前浏览器地址为 : 

`https://www.google.com/search?q=%E6%B5%8F%E8%A7%88%E5%99%A8History%E5%AF%B9%E8%B1%A1&rlz=1C1FKPE_zh-TWCN988CN988&oq=%E6%B5%8F%E8%A7%88%E5%99%A8History%E5%AF%B9%E8%B1%A1&aqs=chrome..69i57j0i512.5294j0j15&sourceid=chrome&ie=UTF-8`

🍔通过调用pushState往历史记录里面添加一条history

`https://www.google.com/search?q=123&rlz=1C1FKPE_zh-TWCN988CN988&oq=123&aqs=chrome..69i57j69i60l3j69i65l3j69i60.3556j0j7&sourceid=chrome&ie=UTF-8`



```js
window.history.pushState(null,'新增的搜索页','/search?q=123&rlz=1C1FKPE_zh-TWCN988CN988&oq=123&aqs=chrome..69i57j69i60l3j69i65l3j69i60.3556j0j7&sourceid=chrome&ie=UTF-8')
```

🧇发现： 

###### **1、添加完历史记录，会立刻修改当前url ，且不会重新加载页面（刷新页面）**

![](https://gitee.com/JuntengMa/imgae/raw/master/202202231752515.gif)

###### **2、历史记录history的length加一**

![image-20220223175941149](https://gitee.com/JuntengMa/imgae/raw/master/202202231759188.png)

###### 3、小结：

- `pushState()`方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有反应。

- 如果`pushState()`方法设置了一个跨域网址，则会报错。

  ![image-20220223180316247](https://gitee.com/JuntengMa/imgae/raw/master/202202231803288.png)

##### 2、replaceState

`History.replaceState()`方法用来修改 History 对象的当前记录，其他都与`pushState()`方法一模一样。

首先现在history中添加几条历史记录

<img src="https://gitee.com/JuntengMa/imgae/raw/master/202202231809440.png" alt="image-20220223180916400" style="zoom:80%;float:left" />

使用replaceState修改当前记录

<img src="https://gitee.com/JuntengMa/imgae/raw/master/202202231811510.png" alt="image-20220223181111475" style="zoom:80%;float:left" />

###### 1、replaceState 可以修改**当前**历史记录 ， 但不会在历史记录中新增数据

###### 2、replaceState 一样不能跨域

![image-20220223181723234](https://gitee.com/JuntengMa/imgae/raw/master/202202231817275.png)

#### 5、popState 事件

每当同一个文档的浏览历史（即`history`对象）出现变化时，就会触发`popstate`事件。

🚫🚫🚫🚫调用`pushState 、replaceState` 不会触发该事件，只有用户触发` back 、go、forward`才会触发

另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

（同一路由，参数变了不会触发该事件）

回调函数的参数是一个`event`事件对象，它的`state`属性指向`pushState`和`replaceState`方法为当前 URL 所提供的状态对象（即这两个方法的第一个参数）。上面代码中的`event.state`，就是通过`pushState`和`replaceState`方法，为当前 URL 绑定的`state`对象。

这个`state`对象也可以直接通过`history`对象读取。

```js
window.addEventListener('popstate',(event)=>{ 
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
})

//或

window.onpopstate = function (event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
};
```

<img src="https://gitee.com/JuntengMa/imgae/raw/master/202202231826149.png" alt="image-20220223182625105" style="zoom:80%;float:left" />

#### 6、一些问题

###### 1.history对象可变吗？ 

> 如下图，将window.history 置空， 再次打印，history不变 ， 故不可修改

<img src="https://gitee.com/JuntengMa/imgae/raw/master/202202231846489.png" alt="image-20220223184653450" style="zoom:80%;float:left" />

###### 2.history.length既然代表浏览器历史列表中的URL数量，那么这个数量可以无限多吗？ 

> 如下图，最多50

<img src="https://gitee.com/JuntengMa/imgae/raw/master/202202231854038.png" alt="image-20220223185437002" style="zoom:80%;float:left" />

###### 3.location.href与history.pushState有什么区别？ 

> 1.使用location.href跳转后页面会发起新的文档请求，而history.pushState不会
>
> 2.location.href可以跳转到其他域名，而history不能。
>
> 3.location.href与history都会往历史列表中添加一条记录。

###### 4.如果我从A域名跳转到了B域名，那么history.back()会回到哪里？ 

> a

###### 5.popstate事件的触发条件是什么？

> 1.因为location.href是刷新式的跳转，所以这个打印信息是肯定打印不出来的，在刷新的时候这个监听函数就已经失效了，所以这里不讨论location.href会不会触发popstate事件。跟`location.href`类似的还有history.go(0)，因为`history.go(0)`,注意这里是`go(0)` ,也会直接刷新页面，所以这个监听函数也会失效，也**不会打印出信息**。 
>
> 2.`location.hash`是会触发popstate事件的，同样会触发popstate的还有`history.back`，`history.forward`，`history.go`。 3.history.pushState，history.replaceState都**不会触发**popstate事件。

