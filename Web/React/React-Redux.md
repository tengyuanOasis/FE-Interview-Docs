---
title: '在react传值问题--context传值'
date: 2020-09-22
coverWidth: 1200
coverHeight: 750
categories: React
tags: React
top:
cover: https://images.unsplash.com/photo-1605020419798-46652aa15452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80
---

# Redux 的基础概念

什么是Redux?

Redux 是 JavaScript 状态容器，提供可预测化的状态管理。



## 三个基本原则

- 整个应用只有一个可信数据源 ---  store
- State只能通过Action更改
- State的更改只能写成一个纯函数,也就是每次更改必须返回一个新的State------Reducer

## Action
Action 就是一个单纯的包含 { type , pyload }的对象, 
- type 用来标识动作类型

- pyload用来携带数据

- Action需要通过store.dispatch()方法来发送

比如一个最简单的 action：

```
{
  type: 'ADD_TODO',
  text: 'Build my first Redux app'
}
```

## Reducers

Reducers用来处理Action触发的对状态的更改

Reducer接受`oldState`和`action`两个参数,并返回一个新的state

一个Reducer_demo:

```
const initialState = {
  a: 'a',
  b: 'b'
};

function someApp(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_A':
      return { ...state, a: 'Modified a' };
    case 'CHANGE_B':
      return { ...state, b: action.payload };
    default:
      return state
  }
}
```

Reducer 也是 **pure function**，这点非常重要，所以绝对不要在 reducer 里面做一些引入 side-effects 的事情，比如：

- 直接修改 state 参数对象
- 请求 API
- 调用不纯的函数，比如 `Data.now()` `Math.random()`

因为 Redux 里面只有一个 Store，对应一个 State 状态，所以整个 State 对象就是由一个 reducer 函数管理，但是如果所有的状态更改逻辑都放在这一个 reducer 里面，显然会变得越来越巨大，越来越难以维护。得益于纯函数的实现，我们只需要稍微变通一下，让状态树上的每个字段都有一个 reducer 函数来管理就可以拆分成很小的 reducer 了：

```javascript
function someApp(state = {}, action) {
  return {
    a: reducerA(state.a, action),
    b: reducerB(state.b, action)
  };
}
```

Redux 提供了一个工具函数 `combineReducers` 来简化这种 reducer 合并：

```javascript
import { combineReducers } from 'redux';

const someApp = combineReducers({
  a: reducerA,
  b: reducerB
});
```

## Store

现在有了 Action 和 Reducer，Store 的作用就是连接这两者，Store 的作用有这么几个：

- Hold 住整个应用的 State 状态树
- 提供一个 `getState()` 方法获取 State
- 提供一个 `dispatch()` 方法发送 action 更改 State
- 提供一个 `subscribe()` 方法注册回调函数监听 State 的更改

创建一个 Store 很容易，将 **root reducer** 函数传递给 `createStore` 方法即可：

```
import { createStore } from 'redux';
import someApp from './reducers';
let store = createStore(someApp);

// 你也可以额外指定一个初始 State（initialState），这对于服务端渲染很有用
// let store = createStore(someApp, window.STATE_FROM_SERVER);

let unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch({ type: 'CHANGE_A' });
store.dispatch({ type: 'CHANGE_B', payload: 'Modified b' });

// Stop listening to state updates
unsubscribe();
```

# Redux 和 React-Redux 区别

### 1.Redux

用户视图层的操作执行了dispatch,

dispatch又调用了Reducers函数,

Reducers获取当前状态state进行业务处理,形成一个newState保存到Store仓库中,

Store所有依赖的视图层发生同步更新![redux数据流](https://s3.ax1x.com/2020/11/17/DVtjnP.png)

限制:只能在当前这一层进行传递,如果项目关系比较复杂,层次比较深 , 只能用props进行逐层传递------>**redux不能进行跨层级获取数据**---->React-Redux解决

###  2.React-Redux

![react-redux工作流程2](https://s3.ax1x.com/2020/11/17/DVNPpj.png)