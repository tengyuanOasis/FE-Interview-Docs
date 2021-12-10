---
title: Ajax
coverWidth: 1200
coverHeight: 750
categories: Ajax
tags: [Ajax,Axios]
top:
cover:  https://source.unsplash.com/collection/190729/1600x900
---
AJAX复习一下~

<!--more-->

##### AJAX

##### 01-ajax是什么

> ​	JavaScript执行异步网络请求

##### 02-ajax原理

**现在浏览器AJAX主要依靠XMLHttpRequest对象实现**

![](https://s1.ax1x.com/2020/11/10/BbxQdP.png)

##### 03 - 创建ajax

###### 1/创建Ajax核心对象XMLHttpRequest

```
var xhr = null ;
if(window.XMLHttpRequest){
	xhr = new XMLHttpRequest()
}else{
	xhr = new ActiveXobject("Microsoft.XMLHTTP")
}
```

###### 2/向服务器发送请求

```
xhr.open(method,url,async:boolean)
xhr.send(string); //POST请求时候采用string参数,否则不需要带参数
```

- **method** : GET/POST
- **url:**请求链接(位置)
- **async:**是否异步

```
xhr.open("POST","test.html",true);  
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
xhr.send("fname=Henry&lname=Ford");  //post请求参数放在send里面，即请求体
```

###### 3/服务器响应处理(区分同步/异步情况)

- responseText:获得字符串形式的响应数据
- ResponseXML:获得XML形式的响应数据

👹同步处理数据

```
1. xhr.open("GET","info.txt",false);  
2. xhr.send();  
3. document.getElementById("myDiv").innerHTML=xhr.responseText; //获取数据直接显示在页面上
```

👺异步处理数据(要在请求状态改变事件中处理。)

```
1. xhr.onreadystatechange=function()  { 
2.    if (xhr.readyState==4 &&xhr.status==200)  { 
3.       document.getElementById("myDiv").innerHTML=xhr.responseText;  
4.      }
5.    } 
```

###### 4/什么是readyState?

readyState是XMLHttpRequest对象的一个属性,用来表示当前XMLHttpRequest对象处于什么状态

- 0 : 未初始化,尚未调用xhr.open()方法
- 1 : 启动,已经调用xhr.open放大,但是未send
- 2 : 发送,已经调用xhr.send方法,但是还没有收到响应
- 3 : 接收,已经接收到部分响应数据
- 4 : 完成,已经接收到全部响应数据,并且可以在客户端使用

###### 05/GET和POST请求数据区别

- get请求,参数在url中显示,post请求放在send里面
- get请求发送数据量小,Post请求发送数据量比较大
- get请求安全性低,会被缓存,POST反之

##### 04/AJAX代码

```
function verificationParams(requestInfo) {
	//地址不能为空
	if (!requestInfo.url) {
		throw new Error('输入请求地址')
	}

	//判断是异步是否合规
	if (typeof requestInfo.async !== 'boolean') {
		throw new Error('async只接受boolean类型数据')
	}

	//请求方式
	if (!(requestInfo.type.toUpperCase() === 'GET' || requestInfo.type.toUpperCase() === 'post')) {
		throw new Error('请求方式有误')
	}
}

function ajax(params) {
	//默认参数对象
	let requestInfo={
		type: 'GET',//请求方式
		url:'',
		data:'',//请求参数
		datatype:'string', //数据类型
		async:true,//异步还是同步
		callBack:function(){} //处理函数	
	}

	for(let item in params){
		requestInfo[item] = params[item]
	}
	
	verificationParams(requestInfo)

	const { type, url, data, datatype, async, callBack } = requestInfo

	//数据类型转换
	let str=''
	let dataType = Object.prototype.toString.call(data)
	if (dataType==='[object String]'){
		str = data.replace(/,/g,'&')
	} else if (dataType==='[object Object]'){
		for(let attr in data){
			str+=attr+'='+data[attr]+'&'
		}
		str=str.slice(0,-1)
	}
	
	let xhr = new XMLHttpRequest()

	if(type.toUpperCase()==='GET'){
		xhr.open(type.toUpperCase(),url+'?'+str,async)
		xhr.send()
	}else{
		xhr.open(type.toUpperCase(),url,async)
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
		xhr.send(str)
	}
	xhr.onload=function(){
		if(datatype==='json'){
			callBack(eval('('+xhr.responseText+')'))
		}else{
			callBack(xhr.responseText)
		}
	}
}

function Ajax(params){
	let promise=new Promise(function(resolve,reject){
		ajax({
			url:params.url,
			type:params.type.toUpperCase() || 'GET',
			data:params.data ||'',
			datatype:params.datatype || 'string',
			async:params.async || true,
			callBack:function(res){
				resolve(res)
			}
		})
	})
	return promise
}
```

