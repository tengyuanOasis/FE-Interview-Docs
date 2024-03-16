<!-- @format -->

## Vue-Router——编程式导航 && 声明式导航

---

### Part-1、编程式导航

#### 一、编程式路由导航

> - `this.$router.push(path)`:
>
>   相当于点击路由链接(可以返回到当前路由界面) ==>> 队列的方式（先进先出）
>
> - ` this.$router.replace(path)`:
>
>   用新路由替换当前路由(不可以返回到当前路由界面) ==>> 栈的方式（先进后出）
>
> - `this.$router.back()`:
>
> 请求(返回)上一个记录路由
>
> - ` this.$router.go(-1)`:
>
> 请求(返回)上一个记录路由
>
> - `this.$router.go(1)`:
>
> 请求下一个记录路由

#### 二、声明式路由导航 **`<router-link>` **

Example：

```html
<router-link
	to="xxx"
	tag="li"
>
	To PageB
</router-link>
```

> 注意：**router-link** 会默认解析成 a 标签，可以通过 tag 属性指定它解析成什么标签

---

### Part-2、Vue 的两种路由跳转的区别

#### 一、router.push(location)

在 vue.js 中想要跳转到不同的 URL，需要使用 **`router.push`** 方法。

这个方法会向 **history 栈** 添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。

当点击 **`router-link `** 时，这个方法会在内部调用，所以说，点击 **`<router-link :to="..." />`** 等同于调用 **`router.push(...)`**

```xml
声明式：<router-link :to="..." />
```

```javascript
编程式：router.push(...) //该方法的参数可以是一个字符串路径，或者一个描述地址的对象。
// 字符串
router.push('home')
// 对象
this.$router.push({path: '/login?url=' + this.$route.path});
// 带查询参数，变成/backend/order?selected=2
this.$router.push({path: '/backend/order', query: {selected: "2"}});
// 命名的路由
router.push({ name: 'user', params: { userId: 123 }})
```

#### 二、router.replace(location)

设置 replace 属性（默认值: false）的话，当点击时，会调用 **`router.replace()`** 而不是 **`router.push()`** ，于是导航后不会留下 **history** 记录。即使点击返回按钮也不会回到这个页面。

> 加上 **replace: true** 后，它不会向 **history** 添加新记录，而是跟它的方法名一样 —— **替换掉当前的 history 记录**。

```javascript
//声明式：
<router-link :to="..." replace></router-link>
// 编程式:
router.replace(...)
//push方法也可以传replace
this.$router.push({path: '/home', replace: true})
```

#### 三、传参的两种方式

##### 1、使用 query

```javascript
this.$router.push({
	path: '/home',
	query: {
		site: [],
		bu: []
	}
});
```

##### 2、使用 params

```javascript
this.$router.push({
	name: 'Home', // 路由的名称
	params: {
		site: [],
		bu: []
	}
});
```

> **params**：/router1/:id ，/router1/123，/router1/789 ,这里的 id 叫做 params
>
> **query**：/router1?id=123 ,/router1?id=456 ,这里的 id 叫做 query。

##### 3、二者的区别

1. query 传参配置的是 path，而 params 传参配置的是 name，在 params 中配置 path 无效

2. query 在路由配置不需要设置参数，而 params 必须设置

3. query 传递的参数会显示在地址栏中

4. params 传参刷新会无效，但是 query 会保存传递过来的值，刷新不变 ;

5. 路由配置：

   **query 写法**

```javascript
{
  path: '/home',
  name: Home,
  component: Home
}
```

**params 写法**

```javascript
{
path: '/home/：site/:bu',
name: Home,
component: Home
}
```

> 如果路由上面不写参数，也是可以传过去的，但不会在 url 上面显示出你的参数，并且当你跳到别的页面或者刷新页面的时候参数会丢失，那依赖这个参数的 http 请求或者其他操作就会失败

6.  获取路由参数 :

    在接收的跳转的页面 :

```javascript
created () {
let self = this
self.getParams()
},
watch () {
'$route': 'getParams'
},
methods: {
  getParams () {
  let site = this.$route.query.site
  let bu = this.$route.query.bu
  // 如果是params 传参，那就是this.$route.params.site
  上面就可以获取到传递的参数了
 }
}
```

> 注意：获取路由上面的参数，用的是$route，后面没有 r

> params 是路由的一部分,必须要有。query 是拼接在 url 后面的参数，没有也没关系。
>
> params 一旦设置在路由，params 就是路由的一部分，如果这个路由有 params 传参，但是在跳转的时候没有传这个参数，会导致跳转失败或者页面会没有内容。
>
> params、query 不设置也可以传参，但是 params 不设置的时候，刷新页面或者返回参数会丢失，query 并不会出现这种情况

##### 4、归纳

1.命名路由搭配 params，刷新页面参数会丢失

2.查询参数搭配 query，刷新页面数据不会丢失

3.接受参数使用 this.$router 后面就是搭配路由的名称就能获取到参数的值
