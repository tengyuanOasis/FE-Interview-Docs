---
title: Axios二次封装
coverWidth: 1200
coverHeight: 750
categories: Ajax
tags: [Ajax,Axios]
cover:  https://images.unsplash.com/photo-1597331788728-8d1850a02caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg5ODI0fQ&w=750&dpi=2
---
<!--more-->

### 01-新建src/api文件夹

```
api
 - ajax.js
 - index.vue
```
### 02-新建axios.js文件
```js
import axios from 'axios'

//封装ajax
export default function ajax(url='',params={},type='GET'){
  let promise;
  type = type.toUpperCase()
  return new Promise(((resolve, reject) => {
    //1.判断请求方式
    if (type==='GET'){
      //1.1拼接字符串
      let str = '';
      Object.keys(params).forEach((value,index) => {
        if (index+1===Object.keys(params).length){
          str+=value+'='+params[value];
        }else{
          str+=value+'='+params[value]+'&';
        }
      });
      //1.2完整路径
      url+='?'+str;
      //1.3发送get请求
      promise = axios.get(url);
    }else if(type==='POST'){
      //1.3发送post请求
      promise = axios.post(url,params);
    }
    //2.返回请求结果
    promise.then((response)=>{
      resolve(response.data);
    }).catch((error)=>{
      reject(error);
    });
  }))
}

```
### 03-新建index.js文件
```js
import ajax from './ajax'

//发送请求
export const getPhoneCode = (phone)=>ajax('/api/getPhoneCode',{phone});

```
### 04-api调用
```js
import { xxxxx } from 'api/index.vue (文件路径)'
```

